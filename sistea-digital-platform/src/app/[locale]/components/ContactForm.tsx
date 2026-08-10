"use client";
import { FormEvent, useState } from "react";

const labels = {
  es:{name:"Nombre",company:"Empresa",email:"E-mail",phone:"WhatsApp / Teléfono",country:"País",message:"Proyecto / consulta",send:"Enviar consulta",sending:"Enviando...",ok:"Gracias. Hemos recibido su consulta.",error:"No fue posible enviar el formulario. Utilice WhatsApp o e-mail."},
  en:{name:"Name",company:"Company",email:"E-mail",phone:"WhatsApp / Phone",country:"Country",message:"Project / inquiry",send:"Send inquiry",sending:"Sending...",ok:"Thank you. We received your inquiry.",error:"The form could not be sent. Please use WhatsApp or e-mail."},
  de:{name:"Name",company:"Firma",email:"E-Mail",phone:"WhatsApp / Telefon",country:"Land",message:"Projekt / Anfrage",send:"Anfrage senden",sending:"Wird gesendet...",ok:"Vielen Dank. Wir haben deine Anfrage erhalten.",error:"Das Formular konnte nicht gesendet werden. Bitte WhatsApp oder E-Mail verwenden."}
} as const;

export default function ContactForm({locale}:{locale:"es"|"en"|"de"}) {
  const t=labels[locale];
  const [status,setStatus]=useState<"idle"|"sending"|"ok"|"error">("idle");

  async function submit(e:FormEvent<HTMLFormElement>) {
    e.preventDefault(); setStatus("sending");
    const form=new FormData(e.currentTarget);
    const payload=Object.fromEntries(form.entries());
    try {
      const r=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...payload,locale})});
      if(!r.ok) throw new Error();
      setStatus("ok"); e.currentTarget.reset();
    } catch { setStatus("error"); }
  }

  return <form onSubmit={submit} className="grid gap-4 rounded-2xl bg-slate-50 p-7">
    <input required name="name" placeholder={t.name} className="rounded-lg border border-slate-200 bg-white px-4 py-3"/>
    <input required name="company" placeholder={t.company} className="rounded-lg border border-slate-200 bg-white px-4 py-3"/>
    <input required type="email" name="email" placeholder={t.email} className="rounded-lg border border-slate-200 bg-white px-4 py-3"/>
    <input required name="phone" placeholder={t.phone} className="rounded-lg border border-slate-200 bg-white px-4 py-3"/>
    <input required name="country" placeholder={t.country} className="rounded-lg border border-slate-200 bg-white px-4 py-3"/>
    <textarea required name="message" rows={6} placeholder={t.message} className="rounded-lg border border-slate-200 bg-white px-4 py-3"/>
    <button disabled={status==="sending"} className="rounded-lg bg-cyan-600 px-6 py-3 font-black text-white disabled:opacity-60">{status==="sending"?t.sending:t.send}</button>
    {status==="ok"&&<p className="text-sm font-bold text-emerald-700">{t.ok}</p>}
    {status==="error"&&<p className="text-sm font-bold text-red-700">{t.error}</p>}
  </form>;
}
