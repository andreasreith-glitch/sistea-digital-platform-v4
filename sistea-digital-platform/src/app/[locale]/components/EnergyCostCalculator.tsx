"use client";

import { useMemo, useState } from "react";

type Locale = "es" | "en" | "de";
type Currency = "USD" | "EUR" | "CHF";

const labels = {
  es: {
    eyebrow: "CÁLCULO GRATUITO",
    title: "Costo anual de energía y tres escenarios de ahorro",
    text: "Usa una factura reciente o varios meses. Para una evaluación más sólida, SISTEA recomienda 6–12 meses consecutivos de facturas eléctricas. Esta calculadora es una referencia inicial y no sustituye un estudio técnico ni garantiza ahorro.",
    bill: "Importe de la factura",
    kwh: "Consumo de la factura (kWh)",
    months: "Meses cubiertos",
    demand: "Demanda máxima (kW, opcional)",
    currency: "Moneda",
    current: "Costo anual estimado",
    unit: "Costo medio de energía",
    demandLabel: "Demanda máxima indicada",
    scenario: "Escenario",
    saving: "Ahorro anual potencial",
    after: "Costo anual después del ahorro",
    disclaimer: "Los escenarios del 20 %, 30 % y ~40 % son valores de evaluación. El potencial real depende del perfil de carga, tarifas, equipos, horarios, control, producción, clima y medidas aplicables.",
    send: "Enviar 6–12 meses por WhatsApp",
    email: "Enviar por e-mail",
    privacyTitle: "Confidencialidad",
    privacy: "SISTEA trata toda la documentación y datos recibidos de forma estrictamente confidencial y únicamente para la evaluación técnica y energética. Podemos enviar y firmar un NDA antes de recibir la información.",
    whatsappText: "Hola SISTEA. Quiero una revisión energética gratuita. Deseo enviar 6–12 meses consecutivos de facturas eléctricas para evaluar costos, demanda, estacionalidad y potencial de ahorro/gestión de carga. Entiendo que SISTEA tratará la información de forma confidencial; si es necesario, solicito un NDA antes del envío.",
  },
  en: {
    eyebrow: "FREE CALCULATION",
    title: "Annual energy cost and three savings scenarios",
    text: "Use one recent electricity bill or aggregate several months. For a stronger assessment, SISTEA recommends 6–12 consecutive months of electricity bills. This calculator is an initial reference and does not replace an engineering study or guarantee savings.",
    bill: "Electricity bill amount",
    kwh: "Bill consumption (kWh)",
    months: "Months covered",
    demand: "Maximum demand (kW, optional)",
    currency: "Currency",
    current: "Estimated annual energy cost",
    unit: "Average energy cost",
    demandLabel: "Reported maximum demand",
    scenario: "Scenario",
    saving: "Potential annual savings",
    after: "Annual cost after savings",
    disclaimer: "The 20%, 30% and ~40% scenarios are screening values. Actual potential depends on load profile, tariff structure, equipment, operating hours, controls, production, climate and applicable measures.",
    send: "Send 6–12 months via WhatsApp",
    email: "Send by e-mail",
    privacyTitle: "Confidentiality",
    privacy: "SISTEA treats all documents and data received as strictly confidential and uses them solely for technical and energy assessment. We can provide and sign an NDA before any information is shared.",
    whatsappText: "Hello SISTEA. I would like a free energy review. I want to send 6–12 consecutive months of electricity bills to evaluate costs, demand, seasonality and energy/load-management savings potential. I understand that SISTEA will treat the information as confidential; if required, I would like an NDA before sending the documents.",
  },
  de: {
    eyebrow: "KOSTENLOSE BERECHNUNG",
    title: "Jahresenergiekosten und drei Einsparszenarien",
    text: "Eine aktuelle Stromrechnung reicht für den ersten Check. Für eine belastbarere Analyse empfiehlt SISTEA 6–12 aufeinanderfolgende Monate Stromrechnungen. Das Ergebnis ist eine Erstorientierung und ersetzt keine technische Studie oder Einspargarantie.",
    bill: "Rechnungsbetrag Strom",
    kwh: "Verbrauch der Rechnung (kWh)",
    months: "Abgedeckte Monate",
    demand: "Maximale Leistung (kW, optional)",
    currency: "Währung",
    current: "Geschätzte Jahresenergiekosten",
    unit: "Mittlere Energiekosten",
    demandLabel: "Angegebene maximale Leistung",
    scenario: "Szenario",
    saving: "Mögliche jährliche Einsparung",
    after: "Jahreskosten nach Einsparung",
    disclaimer: "Die Szenarien 20 %, 30 % und ca. 40 % dienen der Erstbewertung. Das reale Potenzial hängt von Lastprofil, Tarifstruktur, Anlagen, Betriebszeiten, Regelung, Produktion, Klima und umsetzbaren Maßnahmen ab.",
    send: "6–12 Monate per WhatsApp senden",
    email: "Per E-Mail senden",
    privacyTitle: "Vertraulichkeit",
    privacy: "SISTEA behandelt alle übermittelten Unterlagen und Daten streng vertraulich und verwendet sie ausschließlich für die technische und energetische Auswertung. Auf Wunsch senden und unterzeichnen wir vor der Datenübermittlung ein NDA.",
    whatsappText: "Hallo SISTEA. Ich möchte eine kostenlose energetische Erstprüfung. Ich möchte 6–12 aufeinanderfolgende Monate meiner Stromrechnungen senden, damit Energiekosten, Leistungsspitzen, saisonale Schwankungen und Einspar-/Lastmanagementpotenzial geprüft werden. Ich gehe davon aus, dass SISTEA die Informationen vertraulich behandelt; falls erforderlich, bitte ich vorab um ein NDA.",
  },
} as const;

const localeMap: Record<Locale, string> = { es: "es-SV", en: "en-US", de: "de-DE" };

export default function EnergyCostCalculator({ locale }: { locale: Locale }) {
  const t = labels[locale];
  const [bill, setBill] = useState(8000);
  const [kwh, setKwh] = useState(50000);
  const [months, setMonths] = useState(1);
  const [demand, setDemand] = useState(0);
  const [currency, setCurrency] = useState<Currency>("USD");

  const values = useMemo(() => {
    const safeMonths = Math.max(1, months || 1);
    const monthly = Math.max(0, bill || 0) / safeMonths;
    const annual = monthly * 12;
    const unitCost = kwh > 0 ? Math.max(0, bill || 0) / kwh : 0;
    return { annual, unitCost };
  }, [bill, kwh, months]);

  const money = (value: number) =>
    new Intl.NumberFormat(localeMap[locale], { style: "currency", currency, maximumFractionDigits: 0 }).format(Number.isFinite(value) ? value : 0);

  const unitMoney = (value: number) =>
    new Intl.NumberFormat(localeMap[locale], { style: "currency", currency, minimumFractionDigits: 3, maximumFractionDigits: 4 }).format(Number.isFinite(value) ? value : 0);

  const scenarios = [0.2, 0.3, 0.4];
  const whatsapp = `https://wa.me/50377282624?text=${encodeURIComponent(t.whatsappText)}`;
  const mailto = `mailto:info@sisteasv.com?subject=${encodeURIComponent(locale === "de" ? "Kostenlose energetische Erstprüfung" : locale === "es" ? "Evaluación energética inicial gratuita" : "Free initial energy review")}`;

  const field = "rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-base font-bold text-white outline-none transition placeholder:text-white/35 focus:border-cyan-300 focus:bg-white/15";

  return (
    <div className="overflow-hidden rounded-[30px] border border-cyan-200/20 bg-[#061F31]/70 shadow-[0_28px_70px_rgba(0,0,0,.28)] backdrop-blur">
      <div className="grid gap-7 p-5 sm:p-7 lg:grid-cols-[.9fr_1.1fr] lg:p-8">
        <div className="rounded-3xl border border-white/10 bg-white/6 p-5 sm:p-6">
          <div className="text-xs font-black uppercase tracking-[.18em] text-cyan-300">{t.eyebrow}</div>
          <h3 className="mt-3 text-2xl font-black tracking-tight text-white sm:text-3xl">{t.title}</h3>
          <p className="mt-3 max-w-xl text-sm leading-6 text-sky-100/70">{t.text}</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold text-sky-100/80">{t.bill}<input type="number" min="0" step="0.01" value={bill} onChange={(e) => setBill(Number(e.target.value))} className={field} /></label>
            <label className="grid gap-2 text-sm font-bold text-sky-100/80">{t.currency}<select value={currency} onChange={(e) => setCurrency(e.target.value as Currency)} className={field}><option className="text-slate-900" value="USD">USD</option><option className="text-slate-900" value="EUR">EUR</option><option className="text-slate-900" value="CHF">CHF</option></select></label>
            <label className="grid gap-2 text-sm font-bold text-sky-100/80">{t.kwh}<input type="number" min="0" step="1" value={kwh} onChange={(e) => setKwh(Number(e.target.value))} className={field} /></label>
            <label className="grid gap-2 text-sm font-bold text-sky-100/80">{t.months}<select value={months} onChange={(e) => setMonths(Number(e.target.value))} className={field}>{Array.from({ length: 12 }, (_, i) => i + 1).map((m) => <option className="text-slate-900" key={m} value={m}>{m}</option>)}</select></label>
            <label className="grid gap-2 text-sm font-bold text-sky-100/80 sm:col-span-2">{t.demand}<input type="number" min="0" step="0.1" value={demand || ""} onChange={(e) => setDemand(Number(e.target.value))} placeholder="0" className={field} /></label>
          </div>
        </div>

        <div className="rounded-3xl border border-cyan-200/15 bg-gradient-to-br from-[#0B3A57] to-[#0A2C43] p-5 sm:p-6">
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-5 sm:col-span-2">
              <div className="text-xs font-black uppercase tracking-[.15em] text-cyan-200">{t.current}</div>
              <div className="mt-2 text-4xl font-black text-white sm:text-5xl">{money(values.annual)}</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/7 p-4">
              <div className="text-xs font-black uppercase tracking-[.12em] text-sky-100/55">{t.unit}</div>
              <div className="mt-2 text-xl font-black text-white">{unitMoney(values.unitCost)} / kWh</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/7 p-4">
              <div className="text-xs font-black uppercase tracking-[.12em] text-sky-100/55">{t.demandLabel}</div>
              <div className="mt-2 text-xl font-black text-white">{demand > 0 ? `${demand.toLocaleString(localeMap[locale])} kW` : "—"}</div>
            </div>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {scenarios.map((rate) => {
              const saving = values.annual * rate;
              const after = values.annual - saving;
              const pct = Math.round(rate * 100);
              return (
                <div key={rate} className={`rounded-2xl border p-4 ${rate === 0.4 ? "border-emerald-300/45 bg-emerald-300/12" : "border-white/10 bg-white/7"}`}>
                  <div className={`text-3xl font-black ${rate === 0.4 ? "text-emerald-300" : "text-cyan-200"}`}>{rate === 0.4 ? `~${pct}%` : `${pct}%`}</div>
                  <div className="mt-1 text-[11px] font-black uppercase tracking-[.12em] text-sky-100/50">{t.scenario}</div>
                  <div className="mt-4 text-xs text-sky-100/55">{t.saving}</div>
                  <div className="mt-1 text-lg font-black text-emerald-300">{money(saving)}</div>
                  <div className="mt-3 text-xs text-sky-100/55">{t.after}</div>
                  <div className="mt-1 font-black text-white">{money(after)}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="grid gap-4 border-t border-white/10 bg-[#051927]/70 p-5 sm:p-6 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="text-sm leading-6 text-sky-100/65">{t.disclaimer}</p>
          <div className="mt-3 rounded-2xl border border-cyan-200/15 bg-cyan-200/7 p-4">
            <div className="text-xs font-black uppercase tracking-[.15em] text-cyan-300">{t.privacyTitle}</div>
            <p className="mt-2 text-sm font-semibold leading-6 text-sky-50/80">{t.privacy}</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-5 py-3.5 font-black text-[#06251B] transition hover:-translate-y-0.5 hover:bg-emerald-300">{t.send}</a>
          <a href={mailto} className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/8 px-5 py-3.5 font-black text-white transition hover:bg-white/15">{t.email}</a>
        </div>
      </div>
    </div>
  );
}
