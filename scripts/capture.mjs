/*
 * Captures d'écran pleine page en desktop (1440 px) et mobile (375 px),
 * pour valider visuellement chaque section.
 *
 * Usage (serveur de dev lancé) :
 *   node scripts/capture.mjs design-system
 *   node scripts/capture.mjs "" --click "[data-menu-open]"   (clique d'abord sur un élément, ex. ouvrir le menu)
 *
 * Pilote Microsoft Edge en arrière-plan via le protocole DevTools.
 * Les images sont enregistrées dans captures/ (ignoré par Git).
 */
import { spawn } from 'node:child_process';
import { mkdirSync, writeFileSync, mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

// Le chemin peut s'écrire avec ou sans « / » initial (Git Bash réécrit les chemins commençant par « / »).
const path = '/' + (process.argv[2] ?? '').replace(/^\/+/, '');
const base = process.env.CAPTURE_BASE ?? 'http://localhost:4321';
const edge =
  process.env.EDGE_PATH ?? 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
const port = 9333;
const clickIndex = process.argv.indexOf('--click');
const clickSelector = clickIndex > -1 ? process.argv[clickIndex + 1] : null;

const viewports = [
  { name: 'desktop', width: 1440, height: 900, mobile: false, scale: 1 },
  { name: 'mobile', width: 375, height: 812, mobile: true, scale: 2 },
];

const profile = mkdtempSync(join(tmpdir(), 'capture-'));
const browser = spawn(edge, [
  '--headless=new',
  `--remote-debugging-port=${port}`,
  `--user-data-dir=${profile}`,
  '--no-first-run',
  '--hide-scrollbars',
  'about:blank',
]);

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function target() {
  for (let i = 0; i < 50; i++) {
    try {
      const list = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json();
      const page = list.find((t) => t.type === 'page');
      if (page) return page.webSocketDebuggerUrl;
    } catch {}
    await sleep(200);
  }
  throw new Error('Edge ne répond pas.');
}

const ws = new WebSocket(await target());
await new Promise((r) => ws.addEventListener('open', r, { once: true }));
let id = 0;
const pending = new Map();
ws.addEventListener('message', (e) => {
  const msg = JSON.parse(e.data);
  if (msg.id && pending.has(msg.id)) {
    pending.get(msg.id)(msg);
    pending.delete(msg.id);
  }
});
const send = (method, params = {}) =>
  new Promise((resolve, reject) => {
    const n = ++id;
    pending.set(n, (msg) => (msg.error ? reject(new Error(msg.error.message)) : resolve(msg.result)));
    ws.send(JSON.stringify({ id: n, method, params }));
  });

mkdirSync('captures', { recursive: true });
const slug =
  (path === '/' ? 'accueil' : path.replace(/^\/|\/$/g, '').replace(/\//g, '-')) +
  (clickSelector ? '-clic' : '');

try {
  await send('Page.enable');
  for (const vp of viewports) {
    await send('Emulation.setDeviceMetricsOverride', {
      width: vp.width,
      height: vp.height,
      deviceScaleFactor: vp.scale,
      mobile: vp.mobile,
    });
    await send('Emulation.setTouchEmulationEnabled', { enabled: vp.mobile });
    await send('Page.navigate', { url: base + path });
    await sleep(2000);
    // Masque la barre d'outils de développement d'Astro sur les captures.
    await send('Runtime.evaluate', {
      expression: "document.querySelector('astro-dev-toolbar')?.remove(); document.fonts.ready",
      awaitPromise: true,
    });
    if (clickSelector) {
      // Ignore la taille d'écran où l'élément n'est pas visible (ex. bouton Menu en desktop).
      const { result } = await send('Runtime.evaluate', {
        expression: `(() => { const el = document.querySelector(${JSON.stringify(clickSelector)}); if (!el || !el.offsetParent) return false; el.click(); return true; })()`,
        returnByValue: true,
      });
      if (!result.value) continue;
      await sleep(400);
    }
    const { contentSize } = await send('Page.getLayoutMetrics');
    const { data } = await send('Page.captureScreenshot', {
      format: 'png',
      captureBeyondViewport: true,
      clip: { x: 0, y: 0, width: vp.width, height: Math.ceil(contentSize.height), scale: 1 },
    });
    const file = join('captures', `${slug}-${vp.name}.png`);
    writeFileSync(file, Buffer.from(data, 'base64'));
    console.log(`✓ ${file}`);
  }
} finally {
  ws.close();
  browser.kill();
  await sleep(500);
  try {
    rmSync(profile, { recursive: true, force: true, maxRetries: 5, retryDelay: 300 });
  } catch {}
}
