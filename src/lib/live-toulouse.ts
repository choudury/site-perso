/*
 * Toulouse en direct, côté navigateur : heure locale, voyant de statut, jour ou nuit, météo.
 * Le site est statique : sans ce script, ces valeurs resteraient figées à l'heure du déploiement.
 *
 * La météo vient d'Open-Meteo (gratuit, sans clé ni cookie). Elle est gardée 15 minutes
 * en mémoire de session pour ne pas refaire la demande à chaque page.
 */
import { site } from '../config/site';
import { fr } from '../i18n/fr';
import { isOnline, toulouseNow } from './local-time';

type Sky = keyof typeof fr.weather.sky;
type Weather = { temperature: number; code: number; sunrise: string; sunset: string };

const CACHE_KEY = 'meteo-toulouse';
const CACHE_DURATION = 15 * 60_000;

let weather: Weather | null = null;

/** Minutes écoulées depuis minuit pour une heure « HH:MM ». */
const minutes = (hhmm: string) => {
  const [h, m] = hhmm.split(':').map(Number);
  return h * 60 + m;
};

/** Jour entre le lever et le coucher du soleil ; à défaut de météo, entre 7 h et 20 h. */
function isDay(now: string) {
  const sunrise = weather ? weather.sunrise.slice(11, 16) : '07:00';
  const sunset = weather ? weather.sunset.slice(11, 16) : '20:00';
  return minutes(now) >= minutes(sunrise) && minutes(now) < minutes(sunset);
}

/** Traduit le code météo international (WMO) en état du ciel. */
function skyFromCode(code: number, day: boolean): Sky {
  if (code === 0) return day ? 'clear-day' : 'clear-night';
  if (code <= 2) return day ? 'partly-day' : 'partly-night';
  if (code === 3) return 'cloudy';
  if (code <= 48) return 'fog';
  if (code <= 57) return 'drizzle';
  if (code <= 67 || (code >= 80 && code <= 82)) return 'rain';
  if (code <= 77 || code === 85 || code === 86) return 'snow';
  return 'storm';
}

function render() {
  const { label } = toulouseNow();
  const day = isDay(label);

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

  document.querySelectorAll<HTMLElement>('[data-local-info]').forEach((el) => {
    el.dataset.daypart = day ? 'day' : 'night';
    if (!weather) return;

    const sky = skyFromCode(weather.code, day);
    const temperature = `${Math.round(weather.temperature)} °C`;
    el.dataset.sky = sky;
    el.querySelector('[data-weather-temp]')!.textContent = temperature;
    el.querySelector('[data-weather]')!.setAttribute(
      'aria-label',
      `${fr.weather.label} : ${fr.weather.sky[sky]}, ${temperature}`,
    );
  });
}

function readCache(): Weather | null {
  try {
    const cached = JSON.parse(sessionStorage.getItem(CACHE_KEY) ?? 'null');
    return cached && Date.now() - cached.savedAt < CACHE_DURATION ? cached.weather : null;
  } catch {
    return null;
  }
}

async function loadWeather() {
  weather = readCache();
  if (weather) return render();

  const { latitude, longitude } = site.coordinates;
  const url =
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}` +
    `&current=temperature_2m,weather_code&daily=sunrise,sunset&forecast_days=1` +
    `&timezone=${encodeURIComponent(site.timeZone)}`;

  try {
    const data = await (await fetch(url)).json();
    weather = {
      temperature: data.current.temperature_2m,
      code: data.current.weather_code,
      sunrise: data.daily.sunrise[0],
      sunset: data.daily.sunset[0],
    };
    try {
      sessionStorage.setItem(CACHE_KEY, JSON.stringify({ savedAt: Date.now(), weather }));
    } catch {}
    render();
  } catch {
    // Service indisponible : la météo reste simplement masquée.
  }
}

render();
loadWeather();

// Recalage sur le début de chaque minute, puis mise à jour toutes les minutes.
setTimeout(() => {
  render();
  setInterval(render, 60_000);
}, 60_000 - (Date.now() % 60_000));
setInterval(loadWeather, CACHE_DURATION);
