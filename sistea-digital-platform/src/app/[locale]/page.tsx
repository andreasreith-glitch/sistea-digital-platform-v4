import type { Metadata } from "next";

import type { Locale } from "@/config/locales";
import { getHomeContent } from "@/lib/content/getHomeContent";
import { createMetadata } from "@/lib/seo/createMetadata";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { SystemApproachSection } from "@/components/sections/SystemApproachSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { EngineeringAssistantTeaser } from "@/components/sections/EngineeringAssistantTeaser";
import { FinancingTeaser } from "@/components/sections/FinancingTeaser";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/schema/JsonLd";
import { createOrganizationSchema } from "@/lib/schema/organization";
import { createWebsiteSchema } from "@/lib/schema/website";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const page = getHomeContent(locale);

  return createMetadata({
    title: page.seo.title,
    description: page.seo.description,
    canonical: page.seo.canonical,
    openGraphTitle: page.seo.openGraph.title,
    openGraphDescription: page.seo.openGraph.description,
    openGraphImage: page.seo.openGraph.image,
    locale,
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const page = getHomeContent(locale);

  return (
    <>
      <JsonLd data={createOrganizationSchema()} />
      <JsonLd data={createWebsiteSchema()} />

      <HeroSection content={page.hero} />
      <TrustBar items={page.trustItems} />
      <SolutionsSection content={page.solutionsSection} items={page.solutions} />
      <SystemApproachSection content={page.systemApproach} />
      <IndustriesSection content={page.industriesSection} items={page.industries} />
      <EngineeringAssistantTeaser content={page.assistantTeaser} />
      <FinancingTeaser content={page.financingTeaser} />
      <ProcessSteps content={page.process} />
      <CTASection content={page.finalCta} />
    </>
  );
}
