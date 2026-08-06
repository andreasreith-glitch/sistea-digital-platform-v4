# SISTEA Digital Platform 4.0 – Projektstatus

Stand: Meilenstein 2 technische Grundstruktur vorbereitet.

## Umgesetzt

- Next.js 15 Projektstruktur
- React 19 Vorbereitung
- TypeScript strict Konfiguration
- Tailwind CSS v4 Design-Tokens
- Sprachrouting für `/es`, `/en`, `/de`
- Root Redirect von `/` nach `/es`
- Header
- Footer
- Startseite mit ES, EN und DE Content
- spanische Hauptpositionierung
- Lösungen-Sektion
- Systemansatz-Sektion
- Branchen-Sektion
- Engineering-Assistant-Teaser
- Finanzierungs-Teaser
- Projektmethodik
- Abschluss-CTA
- Kontaktformular-Prototyp
- API Route `/api/contact` mit Zod-Validierung
- Engineering-Assistant-Platzhalter
- SEO Metadata System
- JSON-LD Organization und WebSite
- Sitemap
- Robots
- Netlify-Konfiguration
- `.env.example`
- README

## Noch nicht lokal gebaut

Die Abhängigkeiten konnten in dieser Umgebung nicht installiert werden, weil der Zugriff auf `registry.npmjs.org` nicht verfügbar war.

Deshalb wurden diese Befehle hier noch nicht ausgeführt:

```bash
pnpm install
pnpm typecheck
pnpm lint
pnpm build
```

## Lokaler nächster Schritt

```bash
corepack enable
pnpm install
pnpm dev
```

Dann prüfen:

```text
/
/es
/en
/de
/es/contacto
/es/asistente-de-ingenieria
/sitemap.xml
/robots.txt
```

## Danach

```bash
pnpm typecheck
pnpm lint
pnpm build
```

Wenn Fehler erscheinen, zuerst TypeScript-Fehler beheben. Danach Netlify verbinden.

## Wichtige DNS-Regel

Bei Cloudflare/Netlify keine Zoho-Mail-Einträge verändern:

- MX
- SPF
- DKIM
- DMARC
- Zoho Verification TXT

## Medien-Update 2026-08-06

Die hochgeladenen SISTEA-Videos und das San-Salvador-Bild wurden integriert.

### Umgesetzt

- Hero-Video für die Startseite eingebunden:
  - `/public/videos/sunrise-san-salvador-skyline.mp4`
- Poster/Fallback-Bild eingebunden:
  - `/public/images/hero/san-salvador-skyline.jpg`
- Open-Graph-Bild erzeugt:
  - `/public/og/sistea-home.jpg`
- Weitere Projektvideos abgelegt:
  - `/public/videos/energy-efficiency-project-visual.mp4`
  - `/public/videos/engineer-reviewing-solar-panels.mp4`
  - `/public/videos/engineers-inspect-air-handling-system.mp4`
  - `/public/videos/engineers-inspect-cooling-plant.mp4`
  - `/public/videos/engineers-inspect-energy-data-tablet.mp4`
  - `/public/videos/engineers-review-building-energy.mp4`
  - `/public/videos/hotel-energy-efficient-cooling.mp4`
- Posterbilder für alle Videos erzeugt:
  - `/public/images/posters/`
- HeroSection erweitert:
  - Video-Hintergrund
  - Poster-Bild
  - dunkles Overlay
  - Text bleibt gut lesbar
- Startseiten-Content ES/EN/DE mit Hero-Media erweitert.
- Medien-Konfiguration ergänzt:
  - `src/config/media.ts`
- Mediennutzung dokumentiert:
  - `public/media/MEDIA_USAGE.md`

### Performance-Regel

Nur das Hero-Video sollte automatisch starten. Die anderen Videos werden zunächst als Assets vorbereitet und später gezielt in passende Sektionen eingebunden.
