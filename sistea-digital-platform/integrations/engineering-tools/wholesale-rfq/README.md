# SISTEA Engineering Tools – Wholesale & Spare Parts RFQ

Dieses Modul ist für die bestehende SISTEA Engineering Tools App vorgesehen, die derzeit unter `sistea-engineering-tools-secure.andreas-reith.workers.dev` läuft.

## Position in der App

Als zusätzliche Programm-Kachel neben bestehenden Werkzeugen wie Cold Room Designer, Chiller System Designer, Comfort Cooling Load und Engineering Unit Converter.

## Ziel

Die Kachel öffnet die bereits produktiv vorhandene, nicht öffentlich beworbene RFQ-Funktion:

- ES: `https://sisteasv.com/es/wholesale-rfq`
- EN: `https://sisteasv.com/en/wholesale-rfq`
- DE: `https://sisteasv.com/de/wholesale-rfq`

Die RFQ-Seiten sind aus Navigation, Footer und Sitemap der öffentlichen Website entfernt und auf `noindex, nofollow` gesetzt. Sie dienen damit als Funktionsoberfläche für die Engineering Tools App.

## Integration

`module.ts` liefert die Kachel-Metadaten in ES/EN/DE. Sobald der Quellcode des Cloudflare Workers verfügbar ist, den Rückgabewert von `getWholesaleRfqModule(locale)` in die bestehende Tool-Liste aufnehmen.

Empfohlene Position: nach den Auslegungs-/Berechnungstools und vor administrativen Funktionen.

## Sicherheit

Die RFQ selbst verwendet weiterhin Cloudflare Turnstile und den bestehenden `/api/rfq`-Endpunkt. Die öffentliche Website erhält keinen sichtbaren Link zurück auf dieses Modul.
