# SISTEA Digital Platform 4.0

Digitale Engineering-Plattform für HVAC, Industriekälte, Lüftung, Photovoltaik, Batteriespeicher, Wasseraufbereitung, Gebäudeautomation, Energieeffizienz und ESI-Finanzierung in El Salvador und Zentralamerika.

## Technologie

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Netlify
- Cloudflare
- Zoho Mail

## Entwicklung

```bash
corepack enable
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
```

## Qualitätsprüfung

```bash
pnpm check
```

## Hauptsprachen

- `/es` Spanisch, Hauptsprache
- `/en` Englisch
- `/de` Deutsch

## Aktueller Stand

Dieser Stand enthält:

- App-Router-Grundstruktur
- Sprachrouting
- Root-Redirect nach `/es`
- Header und Footer
- spanische Startseite
- einfache EN/DE-Startseiteninhalte
- CTA-Struktur
- Kontaktformular-Prototyp
- Engineering-Assistant-Platzhalter
- SEO Metadata
- JSON-LD Organization und WebSite
- Sitemap
- Robots
- Netlify-Konfiguration

## Wichtige Regel

Zoho-Mail-DNS-Einträge dürfen beim Domain- und Netlify-Setup nicht verändert werden:

- MX
- SPF
- DKIM
- DMARC
- Zoho Verification TXT
