# SISTEA Engineering Tools – Industrial Solar + BESS Designer

Dieses Modul ist für die bestehende SISTEA Engineering Tools App vorgesehen, die derzeit unter `sistea-engineering-tools-secure.andreas-reith.workers.dev` läuft.

## Position in der App

Als Energie-/Auslegungskachel zusammen mit den bestehenden Engineering-Rechnern. Empfohlene Position: nach Kühl-/HVAC-Auslegung und vor Procurement/RFQ.

## Ziel

Die Kachel öffnet das neue dreisprachige SISTEA Solar + BESS Designer Modul:

- ES: `https://sisteasv.com/es/solar-bess-designer`
- EN: `https://sisteasv.com/en/solar-bess-designer`
- DE: `https://sisteasv.com/de/solar-bess-designer`

## Funktionsumfang der ersten Stufe

- rechteckige Dachflächen mit Modulbelegung in Hoch-/Querformat
- freie bekannte Nutzfläche
- Drohnenfoto/Orthofoto mit Zweipunkt-Maßstabskalibrierung und Polygonfläche
- Modulanzahl und installierbare kWp
- DC/AC-Verhältnis und Wechselrichteranzahl
- Voc-Kaltprüfung und MPPT-Stringbereich
- standortbezogener PV-Ertrag über PVGIS 5.3
- BESS-Vorbemessung für Peak Shaving und Backup
- ES/EN/DE

## Zweite Stufe

- Google Maps JavaScript API als Satelliten-Basiskarte
- Google Solar API `buildingInsights` und `dataLayers` dort, wo passende Abdeckung vorhanden ist
- georeferenzierte Drohnen-Orthofotos / GeoTIFF
- automatische Hindernis- und Dachsegmenterkennung
- echte Modulplatzierung innerhalb von Polygonen
- Upload von 15-Minuten-/Stundenlastprofilen
- Dispatch-Simulation PV + BESS, SOC, Eigenverbrauch, Netzbezug und Peak Shaving
- Wirtschaftlichkeit, CAPEX/OPEX, ROI und Angebotsübergabe

## Plattform

Frontend und öffentliche Moduloberfläche laufen auf der bestehenden Cloudflare-/Next.js-Struktur. Serverseitige externe Datenabfragen werden über Cloudflare Pages Functions gekapselt, damit keine geheimen API-Schlüssel im Browser ausgeliefert werden.

## Integration in die bestehende Worker-App

`module.ts` liefert die Kachel-Metadaten in ES/EN/DE. Sobald der Quellcode des Engineering-Tools-Workers wieder verfügbar ist, `getSolarBessDesignerModule(locale)` in die bestehende Tool-Liste aufnehmen.
