import { SITE } from '@/config';

const formatter = new Intl.DateTimeFormat('en-US', {
  timeZone: SITE.timezone,
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
});

export function formatDate(date: Date): string {
  const parts = Object.fromEntries(formatter.formatToParts(date).map((p) => [p.type, p.value]));
  return `${parts.year}-${parts.month}-${parts.day}`;
}

export function yearOf(date: Date): number {
  return Number(formatDate(date).slice(0, 4));
}
