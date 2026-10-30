/*
 * Met à jour en direct, côté navigateur, l'heure de Toulouse et le voyant de statut.
 * Le site est statique : sans ce script, ces valeurs resteraient figées à l'heure du déploiement.
 */
import { fr } from '../i18n/fr';
import { isOnline, toulouseNow } from './local-time';

function update() {
  const { label } = toulouseNow();
  document.querySelectorAll<HTMLElement>('[data-local-time]').forEach((el) => {
    el.textContent = label;
    el.setAttribute('datetime', label);
  });

  const online = isOnline();
  document.querySelectorAll<HTMLElement>('[data-status]').forEach((el) => {
    el.dataset.status = online ? 'online' : 'offline';
    el.setAttribute('aria-label', online ? fr.status.online : fr.status.offline);
    el.title = online ? fr.status.online : fr.status.offline;
  });
}

update();
// Recalage sur le début de chaque minute, puis mise à jour toutes les minutes.
setTimeout(() => {
  update();
  setInterval(update, 60_000);
}, 60_000 - (Date.now() % 60_000));
