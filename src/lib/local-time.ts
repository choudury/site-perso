import { site } from '../config/site';

/** Heure, minute et jour de la semaine à Toulouse, quel que soit le fuseau du visiteur. */
export function toulouseNow(date = new Date()) {
  const parts = new Intl.DateTimeFormat('fr-FR', {
    timeZone: site.timeZone,
    hour: '2-digit',
    minute: '2-digit',
    weekday: 'short',
    hourCycle: 'h23',
  }).formatToParts(date);

  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? '';
  const weekdays = ['lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.', 'dim.'];

  return {
    hour: Number(get('hour')),
    minute: Number(get('minute')),
    day: weekdays.indexOf(get('weekday')) + 1,
    label: `${get('hour')}:${get('minute')}`,
  };
}

/** Vrai entre 8 h et 19 h, heure de Toulouse, les jours prévus dans la configuration. */
export function isOnline(date = new Date()) {
  const { hour, day } = toulouseNow(date);
  const { from, to, days } = site.online;
  return (days as readonly number[]).includes(day) && hour >= from && hour < to;
}
