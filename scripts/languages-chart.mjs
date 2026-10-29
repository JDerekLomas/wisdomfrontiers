// Books readable in English on Source Library, by original language, split into
// first translations and books translated before. English originals excluded.
// Counts from the live books collection on 2026-10-29 (visible, rung readable|complete,
// grouped by `language`, split on `is_first_translation`).
// Usage: node scripts/languages-chart.mjs  ->  public/proposal/languages.svg (rsvg-convert for PNG)
import { writeFileSync } from 'node:fs';

const TOTAL = 18241, TOTAL_FIRST = 9929, LANGS = 190;
const rows = [
  ['Latin', 8241, 5023], ['German', 2100, 1254], ['Chinese', 2088, 1632], ['Greek', 935, 206],
  ['French', 770, 331], ['Dutch', 545, 363], ['Tibetan', 466, 142], ['Italian', 465, 129],
  ['Sumerian', 381, 0], ['Sanskrit', 311, 117], ['Arabic', 247, 95], ['Russian', 241, 22],
  ['Korean', 231, 78], ['Hebrew', 198, 151], ['Nahuatl', 43, 24], ['Yucatec Maya', 31, 18],
];
const shownN = rows.reduce((a, r) => a + r[1], 0), shownF = rows.reduce((a, r) => a + r[2], 0);
rows.push([`All other languages`, TOTAL - shownN, TOTAL_FIRST - shownF]);

const W = 1200, left = 230, right = 200, top = 150, rowH = 38, barH = 24;
const H = top + rows.length * rowH + 70;
const max = rows[0][1], scale = (W - left - right) / max;
const FIRST = '#1f5fae', BEFORE = '#a9c6ea', INK = '#2b241d', MUTED = '#6b6259', BG = '#fdfbf6';
const fmt = n => n.toLocaleString('en-US');

let s = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" font-family="Georgia">`;
s += `<rect width="${W}" height="${H}" fill="${BG}"/>`;
s += `<text x="40" y="56" font-size="30" font-weight="bold" fill="${INK}">${fmt(TOTAL)} books translated into English</text>`;
s += `<text x="40" y="92" font-size="21" fill="${MUTED}">${fmt(TOTAL_FIRST)} of them had never been translated into English before.</text>`;
// legend
s += `<rect x="40" y="110" width="18" height="18" rx="3" fill="${FIRST}"/><text x="66" y="125" font-size="18" fill="${INK}">First translation into English</text>`;
s += `<rect x="350" y="110" width="18" height="18" rx="3" fill="${BEFORE}"/><text x="376" y="125" font-size="18" fill="${INK}">Translated before</text>`;
rows.forEach(([name, n, f], i) => {
  const y = top + i * rowH + 10, wf = f * scale, wb = (n - f) * scale;
  const other = i === rows.length - 1;
  s += `<text x="${left - 14}" y="${y + 18}" font-size="18" text-anchor="end" fill="${INK}"${other ? ' font-style="italic"' : ''}>${name}</text>`;
  if (wf > 0) s += `<rect x="${left}" y="${y}" width="${Math.max(wf, 2)}" height="${barH}" rx="3" fill="${FIRST}"/>`;
  if (wb > 0) s += `<rect x="${left + wf + (wf > 0 ? 2 : 0)}" y="${y}" width="${Math.max(wb - (wf > 0 ? 2 : 0), 2)}" height="${barH}" rx="3" fill="${BEFORE}"/>`;
  s += `<text x="${left + n * scale + 10}" y="${y + 18}" font-size="17" fill="${INK}">${fmt(n)}<tspan dx="8" fill="${MUTED}">·&#160;${fmt(f)} first</tspan></text>`;
});
s += `<text x="40" y="${H - 26}" font-size="15" fill="${MUTED}">Books readable in English on sourcelibrary.org, by original language, 29 October 2026. English originals not counted.</text>`;
s += `</svg>`;
writeFileSync(new URL('../public/proposal/languages.svg', import.meta.url), s);
console.log('wrote', W, H);
