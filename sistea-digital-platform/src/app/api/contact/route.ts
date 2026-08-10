import { NextResponse } from "next/server";
import { z } from "zod";
export const runtime = "edge";
const contactFormSchema = z.object({
  name: z.string().min(2),
  company: z.string().optional(),
  email: z.string().email(),
  whatsapp: z.string().optional(),
  country: z.string().optional(),
  message: z.string().min(10),
  consent: z.boolean().refine(Boolean),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = contactFormSchema.parse(body);

    // Meilenstein 2: hier wird nur validiert.
    // Meilenstein 3: E-Mail-Versand über Netlify Function, EmailJS oder Zoho API ergänzen.
    console.info("Contact request received", {
      source: "contact_form",
      email: data.email,
      company: data.company,
      country: data.country,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Contact request received.",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid contact request." },
      { status: 400 },
    );
  }
}
