"use client";

import { useMemo, useState } from "react";

type Locale = "es" | "en" | "de";
type Currency = "USD" | "EUR" | "CHF";

const labels = {
  es: {
    eyebrow: "CÁLCULO GRATUITO",
    title: "Calcula el costo anual de energía y tres escenarios de ahorro",
    text: "Usa los valores de una factura eléctrica reciente. El resultado es una primera referencia y no sustituye un estudio técnico ni constituye una garantía de ahorro.",
    bill: "Importe de la factura",
    kwh: "Consumo de la factura (kWh)",
    months: "Meses cubiertos por la factura",
    demand: "Demanda máxima (kW, opcional)",
    currency: "Moneda",
    current: "Costo anual estimado",
    unit: "Costo medio de energía",
    demandLabel: "Demanda máxima indicada",
    scenario: "Escenario de ahorro",
    saving: "Ahorro anual potencial",
    after: "Costo anual después del ahorro",
    disclaimer: "Los escenarios del 20 %, 30 % y ~40 % son valores de evaluación. El potencial real depende del perfil de carga, tarifas, equipos, horarios, control, producción, clima y medidas aplicables.",
    send: "Enviar 1–3 facturas a SISTEA",
    email: "Enviar por e-mail",
    whatsappText: "Hola SISTEA. Quiero una revisión energética gratuita. Deseo enviar 1–3 facturas eléctricas para evaluar costos, demanda y potencial de ahorro/gestión de carga.",
  },
  en: {
    eyebrow: "FREE CALCULATION",
    title: "Estimate annual energy cost and three savings scenarios",
    text: "Use values from a recent electricity bill. The result is an initial reference only and does not replace an engineering study or guarantee savings.",
    bill: "Electricity bill amount",
    kwh: "Bill consumption (kWh)",
    months: "Months covered by the bill",
    demand: "Maximum demand (kW, optional)",
    currency: "Currency",
    current: "Estimated annual energy cost",
    unit: "Average energy cost",
    demandLabel: "Reported maximum demand",
    scenario: "Savings scenario",
    saving: "Potential annual savings",
    after: "Annual cost after savings",
    disclaimer: "The 20%, 30% and ~40% scenarios are screening values. Actual potential depends on load profile, tariff structure, equipment, operating hours, controls, production, climate and applicable measures.",
    send: "Send 1–3 bills to SISTEA",
    email: "Send by e-mail",
    whatsappText: "Hello SISTEA. I would like a free energy review. I want to send 1–3 electricity bills to evaluate costs, demand and energy/load-management savings potential.",
  },
  de: {
    eyebrow: "KOSTENLOSE BERECHNUNG",
    title: "Jahresenergiekosten und drei Einsparszenarien direkt berechnen",
    text: "Übernimm die Werte aus einer aktuellen Stromrechnung. Das Ergebnis ist eine erste Orientierung und ersetzt keine technische Studie. Es stellt keine Einspargarantie dar.",
    bill: "Rechnungsbetrag Strom",
    kwh: "Verbrauch der Rechnung (kWh)",
    months: "Von der Rechnung abgedeckte Monate",
    demand: "Maximale Leistung (kW, optional)",
    currency: "Währung",
    current: "Geschätzte Jahresenergiekosten",
    unit: "Mittlere Energiekosten",
    demandLabel: "Angegebene maximale Leistung",
    scenario: "Einsparszenario",
    saving: "Mögliche jährliche Einsparung",
    after: "Jahreskosten nach Einsparung",
    disclaimer: "Die Szenarien 20 %, 30 % und ca. 40 % dienen der Erstbewertung. Das reale Potenzial hängt von Lastprofil, Tarifstruktur, Anlagen, Betriebszeiten, Regelung, Produktion, Klima und umsetzbaren Maßnahmen ab.",
    send: "1–3 Stromrechnungen an SISTEA senden",
    email: "Per E-Mail senden",
    whatsappText: "Hallo SISTEA. Ich möchte eine kostenlose energetische Erstprüfung. Ich möchte 1–3 Stromrechnungen senden, damit Energiekosten, Leistungsspitzen und Einspar-/Lastmanagementpotenzial geprüft werden.",
  },
} as const;

const localeMap: Record<Locale, string> = { es: "es-SV", en: "en-US", de: "de-DE" };

export default function EnergyCostCalculator({ locale }: { locale: Locale }) {
  const t = labels[locale];
  const [bill, setBill] = useState(10000);
  const [kwh, setKwh] = useState(50000);
  const [months, setMonths] = useState(1);
  const [demand, setDemand] = useState(0);
  const [currency, setCurrency] = useState<Currency>("USD");

  const values = useMemo(() => {
    const safeMonths = Math.max(1, months || 1);
    const monthly = Math.max(0, bill || 0) / safeMonths;
    const annual = monthly * 12;
    const unitCost = kwh > 0 ? Math.max(0, bill || 0) / kwh : 0;
    return { monthly, annual, unitCost };
  }, [bill, kwh, months]);

  const money = (value: number) =>
    new Intl.NumberFormat(localeMap[locale], {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    }).format(Number.isFinite(value) ? value : 0);

  const unitMoney = (value: number) =>
    new Intl.NumberFormat(localeMap[locale], {
      style: "currency",
      currency,
      minimumFractionDigits: 3,
      maximumFractionDigits: 4,
    }).format(Number.isFinite(value) ? value : 0);

  const scenarios = [0.2, 0.3, 0.4];
  const whatsapp = `https://wa.me/50377282624?text=${encodeURIComponent(t.whatsappText)}`;
  const mailto = `mailto:info@sisteasv.com?subject=${encodeURIComponent(locale === "de" ? "Kostenlose energetische Erstprüfung" : locale === "es" ? "Evaluación energética inicial gratuita" : "Free initial energy review")}`;

  return (
    <div className="overflow-hidden rounded-3xl border border-[#c2d4d9] bg-[#e9f0f2] shadow-[0_18px_50px_rgba(48,75,93,.10)]">
      <div className="grid gap-8 bg-gradient-to-br from-[#e2ecef] via-[#e8f0f1] to-[#dce9e6] p-6 sm:p-8 lg:grid-cols-[.9fr_1.1fr] lg:p-10">
        <div>
          <div className="text-xs font-black uppercase tracking-[.18em] text-[#168fb4]">{t.eyebrow}</div>
          <h3 className="mt-3 text-2xl font-black tracking-tight text-[#304b5d] sm:text-3xl">{t.title}</h3>
          <p className="mt-4 leading-7 text-[#607684]">{t.text}</p>

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold text-[#4f6877]">
              {t.bill}
              <input type="number" min="0" step="0.01" value={bill} onChange={(e) => setBill(Number(e.target.value))} className="rounded-xl border border-[#c1d4da] bg-[#f0f5f6] px-4 py-3 text-base font-semibold outline-none focus:border-[#25b4dc]" />
            </label>
            <label className="grid gap-2 text-sm font-bold text-[#4f6877]">
              {t.currency}
              <select value={currency} onChange={(e) => setCurrency(e.target.value as Currency)} className="rounded-xl border border-[#c1d4da] bg-[#f0f5f6] px-4 py-3 text-base font-semibold outline-none focus:border-[#25b4dc]">
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="CHF">CHF</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm font-bold text-[#4f6877]">
              {t.kwh}
              <input type="number" min="0" step="1" value={kwh} onChange={(e) => setKwh(Number(e.target.value))} className="rounded-xl border border-[#c1d4da] bg-[#f0f5f6] px-4 py-3 text-base font-semibold outline-none focus:border-[#25b4dc]" />
            </label>
            <label className="grid gap-2 text-sm font-bold text-[#4f6877]">
              {t.months}
              <select value={months} onChange={(e) => setMonths(Number(e.target.value))} className="rounded-xl border border-[#c1d4da] bg-[#f0f5f6] px-4 py-3 text-base font-semibold outline-none focus:border-[#25b4dc]">
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm font-bold text-[#4f6877] sm:col-span-2">
              {t.demand}
              <input type="number" min="0" step="0.1" value={demand || ""} onChange={(e) => setDemand(Number(e.target.value))} placeholder="0" className="rounded-xl border border-[#c1d4da] bg-[#f0f5f6] px-4 py-3 text-base font-semibold outline-none focus:border-[#25b4dc]" />
            </label>
          </div>
        </div>

        <div className="rounded-2xl border border-[#cfe8ee] bg-gradient-to-br from-[#dce9ec] to-[#d8e8ea] p-6 text-[#304b5d] shadow-sm sm:p-7">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-[#c4d6db] bg-[#eef4f5] p-5 shadow-sm sm:col-span-2">
              <div className="text-xs font-black uppercase tracking-[.16em] text-[#718692]">{t.current}</div>
              <div className="mt-2 text-4xl font-black text-[#159dc5]">{money(values.annual)}</div>
            </div>
            <div className="rounded-xl border border-[#c4d6db] bg-[#eef4f5] p-5 shadow-sm">
              <div className="text-xs font-black uppercase tracking-[.14em] text-[#718692]">{t.unit}</div>
              <div className="mt-2 text-xl font-black">{unitMoney(values.unitCost)} / kWh</div>
            </div>
            <div className="rounded-xl border border-[#c4d6db] bg-[#eef4f5] p-5 shadow-sm">
              <div className="text-xs font-black uppercase tracking-[.14em] text-[#718692]">{t.demandLabel}</div>
              <div className="mt-2 text-xl font-black">{demand > 0 ? `${demand.toLocaleString(localeMap[locale])} kW` : "—"}</div>
            </div>
          </div>

          <div className="mt-5 grid gap-3">
            {scenarios.map((rate) => {
              const saving = values.annual * rate;
              const after = values.annual - saving;
              const pct = Math.round(rate * 100);
              return (
                <div key={rate} className={`rounded-xl border p-5 shadow-sm ${rate === 0.4 ? "border-[#7fd7e9] bg-[#e5f8fb]" : "border-[#c4d6db] bg-[#eef4f5]"}`}>
                  <div className="flex items-center justify-between gap-4">
                    <div className="text-sm font-black uppercase tracking-[.12em] text-[#607684]">{t.scenario}</div>
                    <div className={`text-2xl font-black ${rate === 0.4 ? "text-[#159dc5]" : "text-[#304b5d]"}`}>{rate === 0.4 ? `~${pct}%` : `${pct}%`}</div>
                  </div>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    <div><div className="text-xs text-[#718692]">{t.saving}</div><div className="mt-1 text-lg font-black text-[#218b69]">{money(saving)}</div></div>
                    <div><div className="text-xs text-[#718692]">{t.after}</div><div className="mt-1 text-lg font-black">{money(after)}</div></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="border-t border-[#c4d6db] bg-[#e1ebee] p-6 sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-8">
        <p className="max-w-3xl text-sm leading-6 text-[#718692]">{t.disclaimer}</p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:flex-none">
          <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 font-black text-white transition hover:bg-emerald-700">{t.send}</a>
          <a href={mailto} className="inline-flex items-center justify-center rounded-xl border border-[#bfd2d8] bg-[#eef4f5] px-5 py-3 font-black text-slate-900 transition hover:bg-[#e3edef]">{t.email}</a>
        </div>
      </div>
    </div>
  );
}
