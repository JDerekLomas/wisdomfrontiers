// Draws the vine diagram for the Source Library proposal as a plate from an old herbal:
// ink linework, hatching, hand-coloured washes, laid-paper ground. Labels are the same as vine.mjs.
// Usage: node scripts/vine-v3.mjs  ->  public/proposal/vine-v3.svg (render: rsvg-convert -w 2000 -o public/proposal/vine-v3.png public/proposal/vine-v3.svg)
import { writeFileSync } from 'node:fs';

const W = 1600, H = 1500;
const INK = '#2a2118', SEPIA = '#5a4a38', INDIGO = '#2b4a78', PAPER = '#f0e4c8';
const SAP = '#86a05a', OLIVE = '#9a9a58', BARK = '#a88e58', ROOT = '#b58d57', SOILWASH = '#d8bb82';
const GRAPES = ['#7b2f55', '#6a3a73', '#8a3a5e', '#5c3770'];
const FONT = 'Baskerville, Georgia, serif';
const GROUND = 940, BASE_X = 800;

// small seeded random so every run draws the same plate
let seed = 11;
const rnd = () => {
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};
const jit = (a) => (rnd() - 0.5) * 2 * a;
const f = (n) => n.toFixed(1);
const P = (pts) => pts.map((p, i) => `${i ? 'L' : 'M'}${f(p[0])} ${f(p[1])}`).join(' ');

const quad = (a, b, c, n) => Array.from({ length: n + 1 }, (_, i) => {
  const t = i / n, u = 1 - t;
  return [u * u * a[0] + 2 * u * t * b[0] + t * t * c[0], u * u * a[1] + 2 * u * t * b[1] + t * t * c[1]];
});
const cubic = (a, b, c, d, n) => Array.from({ length: n + 1 }, (_, i) => {
  const t = i / n, u = 1 - t;
  return [0, 1].map((k) => u * u * u * a[k] + 3 * u * u * t * b[k] + 3 * u * t * t * c[k] + t * t * t * d[k]);
});

// A tapering limb: wash (slightly off-register), hatching on the shadow side, contour lines, ink outline.
function limb(pts, w0, w1, wash, o = {}) {
  const n = pts.length, N = [], T = [], Wd = [];
  for (let i = 0; i < n; i++) {
    const a = pts[Math.max(0, i - 1)], b = pts[Math.min(n - 1, i + 1)];
    let tx = b[0] - a[0], ty = b[1] - a[1];
    const l = Math.hypot(tx, ty) || 1;
    tx /= l; ty /= l;
    T.push([tx, ty]); N.push([-ty, tx]);
    const t = i / (n - 1);
    Wd.push((w0 + (w1 - w0) * Math.pow(t, o.pow || 0.8) + (o.flare ? o.flare * Math.exp(-t * o.fk) : 0)) * (1 + jit(0.04)));
  }
  const nm = N[n >> 1], sg = nm[0] + nm[1] > 0 ? 1 : -1; // light from the upper left
  const S = pts.map((p, i) => [p[0] + sg * N[i][0] * Wd[i] / 2, p[1] + sg * N[i][1] * Wd[i] / 2]);
  const Lt = pts.map((p, i) => [p[0] - sg * N[i][0] * Wd[i] / 2, p[1] - sg * N[i][1] * Wd[i] / 2]);
  const outline = P([...S, ...Lt.slice().reverse()]) + 'Z';
  let s = `<path d="${outline}" fill="${wash}" opacity="0.8" transform="translate(2.5 1.5)"/>`;
  let h = '', h2 = '';
  const step = o.step || 2;
  for (let i = 1; i < n - 1; i += step) {
    const w = Wd[i], k = 0.5 + rnd() * 0.4;
    const e = [S[i][0] - sg * N[i][0] * w * k + T[i][0] * w * 0.7, S[i][1] - sg * N[i][1] * w * k + T[i][1] * w * 0.7];
    h += `M${f(S[i][0])} ${f(S[i][1])}L${f(e[0])} ${f(e[1])}`;
    if (i % 3 === 1 && w > 7) {
      const e2 = [S[i][0] - sg * N[i][0] * w * 0.38 - T[i][0] * w * 0.55, S[i][1] - sg * N[i][1] * w * 0.38 - T[i][1] * w * 0.55];
      h2 += `M${f(S[i][0])} ${f(S[i][1])}L${f(e2[0])} ${f(e2[1])}`;
    }
  }
  s += `<path d="${h}" stroke="${INK}" stroke-width="0.9" opacity="0.7" fill="none"/>`;
  s += `<path d="${h2}" stroke="${INK}" stroke-width="0.8" opacity="0.6" fill="none"/>`;
  for (const a of o.contours || [0.3, 0.62]) {
    const c = Lt.map((p, i) => [p[0] + (S[i][0] - p[0]) * a + jit(0.6), p[1] + (S[i][1] - p[1]) * a + jit(0.6)]);
    s += `<path d="${P(c)}" stroke="${INK}" stroke-width="0.8" opacity="0.5" fill="none"/>`;
  }
  s += `<path d="${outline}" fill="none" stroke="${INK}" stroke-width="${o.line || 1.8}" stroke-linejoin="round"/>`;
  return s;
}

// A curling tendril: a spiral that tightens as it goes.
function tendril(x, y, heading, len = 90, turn = 1, w = 1.8) {
  const pts = [[x, y]];
  let a = heading, step = len / 26, k = 0.05;
  for (let i = 0; i < 46; i++) {
    a += turn * k; k *= 1.075;
    x += Math.cos(a) * step; y += Math.sin(a) * step; step *= 0.955;
    pts.push([x, y]);
  }
  return `<path d="${P(pts)}" fill="none" stroke="${OLIVE}" stroke-width="${w + 1.6}" opacity="0.55" stroke-linecap="round" transform="translate(1.5 1)"/>`
    + `<path d="${P(pts)}" fill="none" stroke="${INK}" stroke-width="${w * 0.7}" stroke-linecap="round"/>`;
}

// A palmate vine leaf with veins and a little hatching, pointing along `ang` degrees from (x, y).
function leaf(x, y, ang, S) {
  const polar = (r, a) => [r * Math.cos(a * Math.PI / 180), r * Math.sin(a * Math.PI / 180)];
  const tips = [[-105, 0.3], [-68, 0.62], [-34, 0.86], [0, 1], [34, 0.86], [68, 0.62], [105, 0.3]];
  const T = tips.map(([a, l]) => ({ a, l, p: polar(l * S, a) }));
  const sin = (k) => polar(0.62 * (T[k].l + T[k + 1].l) / 2 * S, (T[k].a + T[k + 1].a) / 2);
  const bulge = (p, q) => {
    const m = [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2], d = Math.hypot(m[0], m[1]) || 1;
    return [m[0] + m[0] / d * 0.2 * S, m[1] + m[1] / d * 0.2 * S];
  };
  let d = `M0 0L${f(T[0].p[0])} ${f(T[0].p[1])}`;
  for (let k = 0; k < T.length - 1; k++) {
    const sk = sin(k);
    d += `Q${f(bulge(T[k].p, sk)[0])} ${f(bulge(T[k].p, sk)[1])} ${f(sk[0])} ${f(sk[1])}`;
    d += `Q${f(bulge(sk, T[k + 1].p)[0])} ${f(bulge(sk, T[k + 1].p)[1])} ${f(T[k + 1].p[0])} ${f(T[k + 1].p[1])}`;
  }
  d += 'Z';
  let veins = '', hatch = '';
  T.slice(1, 6).forEach((t, i) => {
    veins += `M0 0L${f(t.p[0] * 0.95)} ${f(t.p[1] * 0.95)}`;
    for (const u of [0.38, 0.66]) {
      for (const sd of [-1, 1]) {
        const b = polar(t.l * S * u, t.a), e = polar(t.l * S * u + 0.2 * S, t.a + sd * 38);
        veins += `M${f(b[0])} ${f(b[1])}L${f(b[0] + (e[0] - polar(t.l * S * u, t.a)[0]) * 0.9)} ${f(b[1] + (e[1] - polar(t.l * S * u, t.a)[1]) * 0.9)}`;
      }
    }
    if (i >= 2) for (let q = 0.28; q < 0.85; q += 0.085) {
      const b = polar(t.l * S * q, t.a), e = polar(0.1 * S, t.a + 90);
      hatch += `M${f(b[0])} ${f(b[1])}l${f(e[0])} ${f(e[1])}`;
    }
  });
  const g = `transform="translate(${f(x)} ${f(y)}) rotate(${ang})"`;
  return `<g ${g}><path d="${d}" fill="${SAP}" opacity="0.82" transform="translate(2.2 1.6)"/>`
    + `<path d="${hatch}" stroke="${INK}" stroke-width="0.8" opacity="0.6" fill="none"/>`
    + `<path d="${veins}" stroke="${INK}" stroke-width="0.9" opacity="0.8" fill="none"/>`
    + `<path d="${d}" fill="none" stroke="${INK}" stroke-width="1.5" stroke-linejoin="round"/></g>`;
}

// One grape: wash, ink outline, crescent of hatching in shadow, small highlight.
function grape(x, y, r, col) {
  const pt = (rr, a) => [x + rr * Math.cos(a * Math.PI / 180), y + rr * Math.sin(a * Math.PI / 180)];
  const p1 = pt(r, -15), p2 = pt(r, 165);
  let s = `<circle cx="${f(x + 2)}" cy="${f(y + 2)}" r="${f(r)}" fill="${col}" opacity="0.85"/>`;
  s += `<path d="M${f(p1[0])} ${f(p1[1])}A${f(r)} ${f(r)} 0 0 1 ${f(p2[0])} ${f(p2[1])}A${f(r * 1.2)} ${f(r * 1.2)} 0 0 0 ${f(p1[0])} ${f(p1[1])}Z" fill="#2a1530" opacity="0.4"/>`;
  let h = '';
  for (let a = 5; a < 150; a += 17) {
    const b = pt(r * 0.97, a), e = pt(r * (0.62 + rnd() * 0.1), a - 14);
    h += `M${f(b[0])} ${f(b[1])}L${f(e[0])} ${f(e[1])}`;
  }
  s += `<path d="${h}" stroke="${INK}" stroke-width="0.8" opacity="0.75" fill="none"/>`;
  s += `<circle cx="${f(x)}" cy="${f(y)}" r="${f(r)}" fill="none" stroke="${INK}" stroke-width="1.6"/>`;
  s += `<ellipse cx="${f(x - r * 0.34)}" cy="${f(y - r * 0.38)}" rx="${f(r * 0.24)}" ry="${f(r * 0.14)}" transform="rotate(-38 ${f(x - r * 0.34)} ${f(y - r * 0.38)})" fill="#fff6e0" opacity="0.9"/>`;
  s += `<circle cx="${f(x - r * 0.05)}" cy="${f(y - r * 0.55)}" r="1.2" fill="#fff6e0" opacity="0.8"/>`;
  return s;
}

function cluster(cx, cy) {
  const rows = [4, 3, 3, 2, 1], r = 16, dx = 29, dy = 25.5;
  let s = `<path d="M${f(cx)} ${f(cy - 8)}L${f(cx)} ${f(cy + 14)}" stroke="${INK}" stroke-width="3" stroke-linecap="round"/>`;
  rows.forEach((cnt, ri) => {
    for (let c = 0; c < cnt; c++) {
      s += grape(cx + (c - (cnt - 1) / 2) * dx + jit(1.5), cy + 14 + ri * dy + jit(1.2), r + jit(0.8), GRAPES[Math.floor(rnd() * GRAPES.length)]);
    }
  });
  return s;
}

const stemX = (y) => BASE_X - 40 * Math.sin(((GROUND - y) / (GROUND - 160)) * Math.PI);

const fruits = [
  { name: 'Spanish edition', sub: 'the whole library in Spanish', x: 1030, y: 205, side: 1 },
  { name: 'The Nature Library', sub: 'life through the old herbals', x: 570, y: 300, side: -1 },
  { name: 'English for every book', sub: '100,000 books by 2028', x: 1030, y: 370, side: 1 },
  { name: 'Canul', sub: 'a Maya course for children', x: 570, y: 470, side: -1 },
  { name: 'Maya sources', sub: 'read and corrected by Maya readers', x: 1030, y: 535, side: 1 },
  { name: 'TAE Art', sub: 'the works at Tecoh', x: 570, y: 640, side: -1 },
  { name: 'Intercycle', sub: 'cycles across traditions', x: 1030, y: 700, side: 1 },
];
const roots = [
  { label: 'Maya chronicles', x: 230, y: 1095 },
  { label: 'Herbals, natural history', x: 510, y: 1200 },
  { label: 'Hermetica, alchemy', x: 800, y: 1250 },
  { label: 'Astronomy, calendars', x: 1090, y: 1200 },
  { label: 'Philosophy, sacred texts', x: 1370, y: 1095 },
];

// ---------- stipple for the soil, kept clear of the labels ----------
const clear = [
  ...roots.map((r) => [r.x - 200, r.x + 200, r.y + 12, r.y + 66]),
  [150, 1450, 1360, 1420], [60, 420, GROUND - 160, GROUND + 4],
];
let stipple = '';
for (let i = 0; i < 2600; i++) {
  const x = 70 + rnd() * 1460, y = GROUND + 10 + (1380 - GROUND) * Math.pow(rnd(), 1.3);
  if (clear.some(([a, b, c, d]) => x > a && x < b && y > c && y < d)) continue;
  stipple += `<circle cx="${f(x)}" cy="${f(y)}" r="${f(0.6 + rnd() * 0.8)}"/>`;
}

// ---------- assemble ----------
let defs = `<defs>
<filter id="paper" x="0" y="0" width="100%" height="100%">
 <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" seed="4"/>
 <feColorMatrix type="matrix" values="0 0 0 0 0.42  0 0 0 0 0.32  0 0 0 0 0.16  1.2 0 0 0 -0.5"/>
</filter>
<filter id="foxing" x="0" y="0" width="100%" height="100%">
 <feTurbulence type="fractalNoise" baseFrequency="0.006" numOctaves="3" seed="9"/>
 <feColorMatrix type="matrix" values="0 0 0 0 0.62  0 0 0 0 0.45  0 0 0 0 0.2  1.1 0 0 0 -0.42"/>
</filter>
<filter id="wob" x="-2%" y="-2%" width="104%" height="104%">
 <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="2" result="t"/>
 <feDisplacementMap in="SourceGraphic" in2="t" scale="3.2" xChannelSelector="R" yChannelSelector="G"/>
</filter>
<filter id="soft" x="-5%" y="-5%" width="110%" height="110%"><feGaussianBlur stdDeviation="11"/></filter>
<filter id="edge" x="-5%" y="-5%" width="110%" height="110%"><feGaussianBlur stdDeviation="22"/></filter>
</defs>`;

let s = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" font-family="${FONT}">${defs}`;

// laid paper, foxing, darkened edges
s += `<rect width="${W}" height="${H}" fill="${PAPER}"/>`;
s += `<rect width="${W}" height="${H}" filter="url(#foxing)" opacity="0.55"/>`;
s += `<rect width="${W}" height="${H}" filter="url(#paper)" opacity="0.35"/>`;
s += `<rect x="-10" y="-10" width="${W + 20}" height="${H + 20}" fill="none" stroke="#8a6a3a" stroke-width="40" opacity="0.3" filter="url(#edge)"/>`;

// double-rule border
s += `<g filter="url(#wob)" fill="none" stroke="${INK}"><rect x="26" y="26" width="${W - 52}" height="${H - 52}" stroke-width="3"/><rect x="38" y="38" width="${W - 76}" height="${H - 76}" stroke-width="1"/></g>`;

// soil wash (soft-edged, like a brushed watercolour) and stipple
s += `<rect x="80" y="${GROUND}" width="${W - 160}" height="${1385 - GROUND}" fill="${SOILWASH}" opacity="0.45" filter="url(#soft)"/>`;
s += `<g fill="${SEPIA}" opacity="0.5">${stipple}</g>`;

// linework group (slightly hand-wobbled)
s += `<g filter="url(#wob)" stroke-linecap="round">`;

// ground line with a band of hatching, and a few blades of grass
let gl = '';
for (let x = 90; x < W - 90; x += 6 + rnd() * 3) gl += `M${f(x)} ${f(GROUND + 1)}l${f(-5 - rnd() * 3)} ${f(7 + rnd() * 7)}`;
s += `<path d="${gl}" stroke="${INK}" stroke-width="0.8" opacity="0.55" fill="none"/>`;
s += `<path d="${P(Array.from({ length: 60 }, (_, i) => [80 + i * (W - 160) / 59, GROUND + jit(1.3)]))}" stroke="${INK}" stroke-width="2.2" fill="none"/>`;
for (let i = 0; i < 9; i++) {
  const x = BASE_X + (i - 4) * 16 + jit(5), hgt = 22 + rnd() * 22, lean = jit(14);
  s += `<path d="M${f(x)} ${GROUND}Q${f(x + lean * 0.3)} ${f(GROUND - hgt * 0.6)} ${f(x + lean)} ${f(GROUND - hgt)}" stroke="${INK}" stroke-width="1.2" fill="none"/>`;
}

// roots, with rootlets
for (const r of roots) {
  const b = [BASE_X, GROUND + 4];
  const pts = cubic(b, [b[0] + (r.x - b[0]) * 0.1, b[1] + 150], [r.x - (r.x - b[0]) * 0.45, r.y - 60], [r.x, r.y], 44);
  s += limb(pts, 24, 2.5, ROOT, { pow: 0.7, step: 2, flare: 10, fk: 9 });
  [0.3, 0.45, 0.6, 0.76, 0.9].forEach((t, i) => {
    const k = Math.floor(t * 44), p = pts[k], q = pts[Math.min(44, k + 3)];
    const ang = Math.atan2(q[1] - p[1], q[0] - p[0]) + (i % 2 ? 1 : -1) * (0.7 + rnd() * 0.4);
    const len = 38 + rnd() * 30;
    const end = [p[0] + Math.cos(ang) * len, p[1] + Math.sin(ang) * len];
    const mid = [(p[0] + end[0]) / 2 + jit(10), (p[1] + end[1]) / 2 + 8];
    s += limb(quad(p, mid, end, 12), 4.5, 1, ROOT, { step: 3, contours: [], line: 1.3 });
  });
}

// trunk
const trunk = [];
for (let y = GROUND; y >= 165; y -= 8) trunk.push([stemX(y), y]);
s += limb(trunk, 27, 11, BARK, { pow: 0.6, step: 1, flare: 24, fk: 14, contours: [0.25, 0.5, 0.72], line: 2 });
// knots on the trunk
for (const y of [330, 520, 690]) {
  const x = stemX(y);
  s += `<ellipse cx="${f(x + 1)}" cy="${y}" rx="4" ry="2.6" fill="none" stroke="${INK}" stroke-width="1"/><path d="M${f(x - 5)} ${y + 5}q5 4 10 0" stroke="${INK}" stroke-width="0.8" fill="none"/>`;
}

// branches, clusters
for (const fr of fruits) {
  const jy = fr.y + 90, jx = stemX(jy);
  const end = [fr.x, fr.y - 6];
  const ctrl = [jx + (end[0] - jx) * 0.55, fr.y - 78];
  const pts = quad([jx, jy], ctrl, end, 30);
  fr.pts = pts;
  s += limb(pts, 11, 4.5, OLIVE, { step: 2, contours: [0.5], line: 1.6 });
}
for (const fr of fruits) s += cluster(fr.x, fr.y);

// leaves: on the trunk and beside each cluster
const trunkLeaves = [[256, -150, 52], [400, -28, 50], [520, -152, 50], [650, -26, 50], [790, -152, 48]];
for (const [y, ang, S] of trunkLeaves) {
  const x = stemX(y), a = ang * Math.PI / 180;
  s += `<path d="M${f(x)} ${y}q${f(Math.cos(a) * 8)} ${f(Math.sin(a) * 8 + 6)} ${f(Math.cos(a) * 16)} ${f(Math.sin(a) * 16)}" stroke="${INK}" stroke-width="2" fill="none"/>`;
  s += leaf(x + Math.cos(a) * 16, y + Math.sin(a) * 16, ang, S);
}
for (const fr of fruits) {
  const p = fr.pts[10];
  s += leaf(p[0], p[1] - 4, fr.side > 0 ? -62 : -118, 46);
  s += leaf(fr.x + fr.side * 26, fr.y - 14, fr.side > 0 ? -25 : -155, 44);
}

// tendrils
const top = stemX(170);
s += tendril(top, 170, -Math.PI / 2, 110, 1, 2.2);
s += tendril(stemX(300) + 4, 300, -0.3, 80, -1);
s += tendril(stemX(445) - 4, 445, Math.PI + 0.3, 80, 1);
s += tendril(stemX(615) + 4, 615, -0.35, 80, -1);
s += tendril(stemX(760) - 4, 760, Math.PI + 0.4, 70, 1);
s += tendril(fruits[0].x + 70, fruits[0].y - 20, -0.4, 70, -1);
s += tendril(fruits[1].x - 70, fruits[1].y - 20, Math.PI + 0.4, 70, 1);

// water: streaks above ground, drops falling to each root tip
const drop = (x, y, sz, op) => `<path d="M${f(x)} ${f(y - sz)}C${f(x + sz * 0.2)} ${f(y - sz * 0.4)} ${f(x + sz * 0.7)} ${f(y)} ${f(x)} ${f(y + sz * 0.6)}C${f(x - sz * 0.7)} ${f(y)} ${f(x - sz * 0.2)} ${f(y - sz * 0.4)} ${f(x)} ${f(y - sz)}Z" fill="${INDIGO}" opacity="${op}" stroke="${INDIGO}" stroke-width="1"/>`
  + `<path d="M${f(x - sz * 0.25)} ${f(y - sz * 0.05)}q0 ${f(sz * 0.25)} ${f(sz * 0.2)} ${f(sz * 0.3)}" stroke="#f3ead2" stroke-width="1.2" fill="none" opacity="0.9"/>`;
for (let i = 0; i < 16; i++) {
  const x = 130 + (i % 8) * 34 + jit(8), y = GROUND - 70 + Math.floor(i / 8) * 26 + jit(5);
  s += `<path d="M${f(x)} ${f(y)}l-5 ${f(20 + rnd() * 6)}" stroke="${INDIGO}" stroke-width="1.5" opacity="0.8" fill="none"/>`;
}
for (const r of roots) {
  const cx = r.x + (r.x === BASE_X ? 46 : 0);
  s += drop(cx, r.y - 128, 15, 0.45) + drop(cx + 6, r.y - 90, 17, 0.6) + drop(cx - 3, r.y - 48, 19, 0.8);
  s += `<path d="M${f(cx - 26)} ${r.y - 12}q26 8 52 0" stroke="${INDIGO}" stroke-width="1" opacity="0.5" fill="none"/>`;
}

s += `</g>`; // end linework

// ---------- text ----------
const T = (x, y, size, str, o = {}) => `<text x="${x}" y="${y}" font-size="${size}" fill="${o.fill || INK}" ${o.style ? `font-style="${o.style}"` : ''} ${o.weight ? `font-weight="${o.weight}"` : ''} ${o.anchor ? `text-anchor="${o.anchor}"` : ''} ${o.ls ? `letter-spacing="${o.ls}"` : ''}>${str}</text>`;

s += T(W / 2, 112, 41, 'Patrons water the roots. Every project grows from the same library.', { anchor: 'middle', weight: 'bold', ls: 0.5 });
s += `<g stroke="${INK}" fill="none"><path d="M520 136H760M840 136H1080" stroke-width="1"/><path d="M800 128l8 8l-8 8l-8 -8z" fill="${INK}"/></g>`;

s += T(88, 218, 30, 'The fruit is free to all', { weight: 'bold' });
s += T(88, 252, 27, 'read, cite, reuse', { style: 'italic', fill: SEPIA });

for (const fr of fruits) {
  const x = fr.x + fr.side * 82, an = fr.side > 0 ? 'start' : 'end';
  s += T(x, fr.y + 62, 32, fr.name, { anchor: an, weight: 'bold' });
  s += T(x, fr.y + 96, 26, fr.sub, { anchor: an, style: 'italic', fill: SEPIA });
}

s += T(BASE_X + 92, GROUND - 64, 31, 'One team tends the vine', { weight: 'bold' });
s += T(BASE_X + 92, GROUND - 30, 26, 'software, scholars, native speakers', { style: 'italic', fill: SEPIA });
s += `<path d="M${BASE_X + 26} ${GROUND - 70}q30 10 56 -2" stroke="${INK}" stroke-width="1.1" fill="none"/><circle cx="${BASE_X + 84}" cy="${GROUND - 72}" r="2.2" fill="${INK}"/>`;

s += T(88, GROUND - 150, 31, "Patrons' gifts", { weight: 'bold', style: 'italic', fill: INDIGO });
s += T(88, GROUND - 116, 27, 'water the roots', { style: 'italic', fill: INDIGO });

for (const r of roots) s += T(r.x, r.y + 52, 29, r.label, { anchor: 'middle' });

s += `<path d="M300 1368H1300" stroke="${INK}" stroke-width="1"/>`;
s += T(W / 2, 1412, 34, 'The roots: Source Library, 70,976 books in more than 160 languages', { anchor: 'middle', weight: 'bold' });

s += `</svg>`;
writeFileSync(new URL('../public/proposal/vine-v3.svg', import.meta.url), s);
console.log('wrote public/proposal/vine-v3.svg');
