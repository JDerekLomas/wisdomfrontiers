// Draws the vine diagram for the Source Library proposal.
// Usage: node scripts/vine.mjs  ->  public/proposal/vine-v2.svg (render to PNG with rsvg-convert)
import { writeFileSync } from 'node:fs';

const W = 1520, H = 1250;
const INK = '#2b241d', MUTED = '#6f6253', STEM = '#4d6b3a', LEAF = '#a8c08a';
const GRAPE = '#8a5c95', GRAPE_EDGE = '#4e2f58', SOIL = '#efe3d2', ROOT = '#8a6440', WATER = '#3d7fa6';
const GROUND = 760; // y of the soil line
const BASE_X = 760;

const fruits = [
  { name: 'Canul', sub: 'Maya language, glyphs, history', x: 470, y: 560, side: 'left', join: 640 },
  { name: 'The Nature Library', sub: 'life through the old herbals', x: 500, y: 270, side: 'left', join: 330 },
  { name: 'Spanish edition', sub: 'the whole library in Spanish', x: 970, y: 170, side: 'right', join: 240 },
  { name: 'TAE Art', sub: 'the works at Tecoh', x: 1000, y: 360, side: 'right', join: 420 },
  { name: 'Intercycle', sub: 'cycles across traditions', x: 1020, y: 560, side: 'right', join: 600 },
];

const roots = [
  { label: 'Maya chronicles', x: 210, y: 960 },
  { label: 'Herbals, natural history', x: 470, y: 1060 },
  { label: 'Hermetica, alchemy', x: 760, y: 1110 },
  { label: 'Astronomy, calendars', x: 1050, y: 1060 },
  { label: 'Philosophy, sacred texts', x: 1310, y: 960 },
];

// x position of the main stem at height y (a gentle S-curve)
const stemX = (y) => BASE_X - 40 * Math.sin(((GROUND - y) / (GROUND - 120)) * Math.PI);

function grapes(cx, cy) {
  const r = 17, pts = [[-34, 0], [0, 0], [34, 0], [-17, 29], [17, 29], [0, 58]];
  return pts.map(([dx, dy]) => `<circle cx="${cx + dx}" cy="${cy + dy}" r="${r}" fill="${GRAPE}" stroke="${GRAPE_EDGE}" stroke-width="2"/>`).join('');
}

let s = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" font-family="Georgia">`;
s += `<rect width="${W}" height="${H}" fill="#fdfbf6"/>`;
s += `<text x="48" y="64" font-size="34" font-weight="bold" fill="${INK}">Patrons water the roots. Every project grows from the same library.</text>`;

// soil
s += `<rect x="48" y="${GROUND}" width="${W - 96}" height="${H - GROUND - 40}" rx="14" fill="${SOIL}"/>`;
s += `<line x1="48" y1="${GROUND}" x2="${W - 48}" y2="${GROUND}" stroke="${ROOT}" stroke-width="3"/>`;

// roots: thick, tapering, one per collection, each ending in its label
for (const r of roots) {
  const mx = (BASE_X + r.x) / 2;
  const d = `M ${BASE_X} ${GROUND} C ${BASE_X + (r.x - BASE_X) * 0.15} ${GROUND + 120}, ${mx} ${r.y - 60}, ${r.x} ${r.y - 40}`;
  s += `<path d="${d}" fill="none" stroke="${ROOT}" stroke-width="9" stroke-linecap="round"/>`;
  s += `<circle cx="${r.x}" cy="${r.y - 40}" r="7" fill="${ROOT}"/>`;
  s += `<text x="${r.x}" y="${r.y}" font-size="24" text-anchor="middle" fill="${INK}">${r.label}</text>`;
}
s += `<text x="${W / 2}" y="${H - 68}" font-size="32" font-weight="bold" text-anchor="middle" fill="${INK}">The roots: Source Library, 70,976 books in more than 160 languages</text>`;

// water: drops falling from the patrons' label onto the roots
s += `<text x="80" y="${GROUND + 52}" font-size="27" font-weight="bold" fill="${WATER}">Patrons' gifts</text>`;
s += `<text x="80" y="${GROUND + 86}" font-size="25" font-style="italic" fill="${WATER}">water the roots</text>`;
const drop = (x, y) => `<path d="M ${x} ${y} q 9 15 0 22 q -9 -7 0 -22 z" fill="${WATER}"/>`;
for (const r of roots) {
  if (r.x === BASE_X) continue;
  const x = BASE_X + (r.x - BASE_X) * 0.55, y = GROUND + (r.y - 40 - GROUND) * 0.55 - 70;
  s += drop(x - 14, y) + drop(x + 12, y + 20);
}

// stem
let stem = `M ${BASE_X} ${GROUND}`;
for (let y = GROUND - 10; y >= 120; y -= 10) stem += ` L ${stemX(y).toFixed(1)} ${y}`;
s += `<path d="${stem}" fill="none" stroke="${STEM}" stroke-width="10" stroke-linecap="round"/>`;

// branches, fruit and labels
for (const f of fruits) {
  const jx = stemX(f.join);
  s += `<path d="M ${jx} ${f.join} Q ${(jx + f.x) / 2} ${f.y - 90}, ${f.x} ${f.y - 12}" fill="none" stroke="${STEM}" stroke-width="4"/>`;
  s += grapes(f.x, f.y);
  const tx = f.side === 'left' ? f.x - 60 : f.x + 60, anchor = f.side === 'left' ? 'end' : 'start';
  s += `<text x="${tx}" y="${f.y + 12}" font-size="29" font-weight="bold" text-anchor="${anchor}" fill="${INK}">${f.name}</text>`;
  s += `<text x="${tx}" y="${f.y + 46}" font-size="23" text-anchor="${anchor}" fill="${MUTED}">${f.sub}</text>`;
}

// leaves along the stem
const leaf = (x, y, flip) => `<path d="M ${x} ${y} q ${flip * 30} -28 ${flip * 58} -10 q ${flip * -26} 26 ${flip * -58} 10 z" fill="${LEAF}" stroke="${STEM}" stroke-width="1.5"/>`;
s += leaf(stemX(470), 470, 1) + leaf(stemX(380), 380, -1) + leaf(stemX(200), 200, -1) + leaf(stemX(690), 690, 1);

// the team, at the base of the stem
s += `<text x="${BASE_X + 60}" y="${GROUND - 50}" font-size="27" font-weight="bold" fill="${INK}">One team tends the vine</text>`;
s += `<text x="${BASE_X + 60}" y="${GROUND - 18}" font-size="23" fill="${MUTED}">software, scholars, native speakers</text>`;

// what the fruit is for
s += `<text x="48" y="130" font-size="25" font-weight="bold" fill="${INK}">The fruit is free to all</text>`;
s += `<text x="48" y="162" font-size="23" font-style="italic" fill="${MUTED}">read, cite, reuse</text>`;

s += `</svg>`;
writeFileSync(new URL('../public/proposal/vine-v2.svg', import.meta.url), s);
console.log('wrote public/proposal/vine-v2.svg');
