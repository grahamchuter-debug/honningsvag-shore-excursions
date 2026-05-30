import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { JsonLd } from "@/components/json-ld";
import { TourCard } from "@/components/tour-card";
import {
  honningsvagTourCards,
  honningsvagTourListItems,
} from "@/lib/honningsvag-tours";
import { buildPageMetadata } from "@/lib/site-metadata";
import { buildItemListSchema } from "@/lib/site-schema";
import { imageAlts, siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "Honningsvåg Excursions, All North Cape & Arctic Shore Tours",
  description:
    "Browse all Honningsvåg shore excursions: North Cape VIP, Gjesvær bird safari, king crab tours, Sami camp, RIB safari, fishing, e-bike, midnight sun, and northern lights.",
  path: "/excursions",
  ogImage: siteImages.northCapeGlobe,
  ogImageAlt: imageAlts.northCapeGlobe,
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Excursions" },
] as const;

const relatedLinks = [
  { label: "Honningsvåg port guide", href: "/honningsvag-port-guide" },
  { label: "One day in Honningsvåg", href: "/one-day-in-honningsvag" },
  { label: "Is North Cape worth visiting?", href: "/is-north-cape-worth-visiting" },
  { label: "Bird safaris", href: "/bird-safaris-honningsvag" },
] as const;

const faqs = [
  {
    question: "What is the best Honningsvåg excursion for first-time cruise visitors?",
    answer:
      "The North Cape VIP Experience is the premium headline tour for guests with four to five hours or more. Wildlife lovers often choose the Gjesvær Bird Safari instead of a standard North Cape coach tour.",
  },
  {
    question: "How do I choose between North Cape and wildlife tours?",
    answer:
      "North Cape tours suit guests who want the Globe Monument and plateau scenery. Bird safaris and RIB tours suit photography and wildlife priorities. Use the Cruise Smart Planner to match duration to your all-aboard time.",
  },
  {
    question: "Do Honningsvåg excursions depart near the cruise port?",
    answer:
      "Yes. Featured tours meet in central Honningsvåg near harbour berths or designated coach pickups, typically a short walk from most piers.",
  },
] as const;

export default function ExcursionsIndexPage() {
  return (
    <>
      <JsonLd data={[buildItemListSchema(honningsvagTourListItems)]} />
      <ContentPage
        title="Honningsvåg Excursions"
        lead="Every cruise-friendly shore excursion in Honningsvåg, North Cape VIP, puffin safaris, king crab, Sami culture, RIB adventures, and seasonal midnight sun and aurora tours."
        heroImage={pageMeta.ogImage}
        heroImageAlt={pageMeta.ogImageAlt}
        pagePath={pageMeta.path}
        pageDescription={pageMeta.description}
        breadcrumbs={breadcrumbs}
        relatedLinks={relatedLinks}
        faqs={faqs}
        ctaTitle="Need help choosing a Honningsvåg tour?"
        ctaText="Use the Cruise Smart Planner on the homepage to match tours to your ship's timetable."
        ctaHref="/#planner"
        ctaButtonLabel="Open Cruise Smart Planner"
        belowHero={
          <section className="border-b bg-surface-muted">
            <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {honningsvagTourCards.map((tour) => (
                  <TourCard
                    key={tour.href}
                    href={tour.href}
                    image={tour.image}
                    imageAlt={tour.imageAlt}
                    title={tour.title}
                    description={tour.description}
                    accent={tour.accent}
                  />
                ))}
              </div>
            </div>
          </section>
        }
      >
        <section>
          <h2>Compare Honningsvåg shore excursions</h2>
          <p>
            North Cape coach tours need the longest port window. Village
            experiences and e-bike tours fit shorter calls. Premium VIP touring
            combines plateau, king crab, and cultural stops in one efficient day.
          </p>
          <p>
            For dedicated guides see{" "}
            <Link href="/north-cape-tours">North Cape tours</Link>,{" "}
            <Link href="/king-crab-tours">king crab tours</Link>, and{" "}
            <Link href="/bird-safaris-honningsvag">bird safaris</Link>. Use the{" "}
            <Link href="/#planner">Cruise Smart Planner</Link> on the homepage.
          </p>
        </section>
      </ContentPage>
    </>
  );
}
