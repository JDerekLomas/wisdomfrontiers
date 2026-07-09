# 2026-07-09 — wisdom-frontiers.com launch

## Done this session
- **Domain launched**: wisdom-frontiers.com (registered at name.com, auto-renew, expires 2027-07-09).
  - DNS at name.com: A @ → 76.76.21.21, CNAME www → cname.vercel-dns.com.
  - Both apex + www attached to Vercel project `wisdomfrontiers`, TLS live.
  - name.com API creds are secret-lover globals (NAMECOM_API_USER / NAMECOM_API_TOKEN);
    repo now has .secrets.json so `secret-lover run --` injects them.
  - Gotcha: `vercel domains add <domain>` without the project arg added the domain to the
    account but NOT the project (`verify` showed project: null). Use `vercel domains add <domain> wisdomfrontiers`.
- **Edit mode**: `?edit` URL param (src/app/EditMode.tsx, mounted in layout).
  Makes text blocks contentEditable, floating bar with change count, Copy JSON /
  Email edits (mailto dereklomas@gmail.com). Tested live end-to-end.
- **OG image redesign**: hero-matching card (celestial map bg, Archivo 900, #FFCB05).
  Served as static src/app/opengraph-image.jpg (216KB) because WhatsApp rejects
  previews >~600KB and the dynamic PNG was 1.3MB. Generator source + regen
  instructions: scripts/og-image-source.tsx. metadataBase fixed to wisdom-frontiers.com.

## Next / open
- WhatsApp may show cached old preview; force rescrape via FB sharing debugger.
- Deploys: `vercel --prod` from main; domain follows automatically. No Cloudflare here.
