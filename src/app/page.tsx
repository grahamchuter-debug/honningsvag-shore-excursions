import type { Metadata } from "next";
import Link from "next/link";

import { CruisePortDayPlanner } from "@/components/cruise-port-day-planner";
import {
  ExploreNorwegianPorts,
  explorePortsFromHonningsvag,
} from "@/components/explore-norwegian-ports";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { PlannerInterestGroups } from "@/components/planner-interest-groups";
import { TourCard } from "@/components/tour-card";
import {
  honningsvagTourCards,
  honningsvagTourListItems,
} from "@/lib/honningsvag-tours";
import { buildPageMetadata } from "@/lib/site-metadata";
import { buildFaqSchema, buildItemListSchema, buildWebPageSchema } from "@/lib/site-schema";
import { imageAlts, siteImages } from "@/lib/site-images";
import { siteConfig } from "@/lib/site-config";

const pageMeta = {
  title:
    "Honningsvag Shore Excursions | North Cape Tours, Bird Safaris & Arctic Cruise Port Guides",
  description:
    "Plan your Honningsvåg cruise port day with North Cape tours, Gjesvær bird safaris, king crab experiences, Sami culture, midnight sun, northern lights, and return-to-ship friendly shore excursion advice.",
  path: "/",
} as const;

export const metadata: Metadata = buildPageMetadata({
  ...pageMeta,
  ogImage: siteImages.hero,
  ogImageAlt: imageAlts.hero,
  absoluteTitle: true,
});

const trustBadges = [
  { label: "Return to ship on time", accent: true },
  { label: "North Cape specialists", accent: false },
  { label: "Arctic wildlife experiences", accent: false },
] as const;

const homeFaqs = [
  {
    question: "What is the best shore excursion in Honningsvåg for cruise passengers?",
    answer:
      "The North Cape VIP Experience is the premium headline choice when you have four to five hours or more ashore. For wildlife-focused days, the Gjesvær Bird Safari is a major bestseller. Shorter port calls suit Bruket Nordvågen or the Taste of the Arctic E-Bike Tour.",
  },
  {
    question: "How long does it take to reach North Cape from the Honningsvåg cruise port?",
    answer:
      "The drive across Magerøya to North Cape typically takes 30 to 45 minutes each way by coach, plus time at the Globe Monument and viewpoints. Build buffer before all aboard, Arctic weather can slow returns.",
  },
  {
    question: "Can I see puffins on a Honningsvåg port day?",
    answer:
      "Yes. The Gjesvær Bird Safari targets puffins, seabirds, and Arctic coastal wildlife with cruise-friendly timing, a strong alternative to standard North Cape coach tours.",
  },
  {
    question: "Should I book Honningsvåg shore excursions independently?",
    answer:
      "Independent bookings often cost less than ship tours, but you manage your own return-to-ship timing. Use our Cruise Smart Planner, confirm all-aboard on your cruise app, and allow 45 minutes before the gangway closes.",
  },
] as const;

export default function Home() {
  return (
    <>
      <JsonLd
        data={[
          buildWebPageSchema({
            path: pageMeta.path,
            title: pageMeta.title,
            description: pageMeta.description,
          }),
          buildItemListSchema(honningsvagTourListItems),
          buildFaqSchema(homeFaqs),
        ]}
      />
      <main className="min-h-screen bg-white text-slate-900">
        <PageHero
          image={siteImages.hero}
          imageAlt={imageAlts.hero}
          centered
          className="min-h-[28rem] md:min-h-[32rem]"
        >
          <h1 className="mb-4 text-3xl font-bold text-white sm:mb-6 sm:text-4xl md:text-6xl lg:text-7xl">
            Honningsvag Shore Excursions
          </h1>

          <p className="mx-auto mb-6 max-w-3xl text-base text-white/90 sm:mb-8 sm:text-xl md:text-2xl">
            Explore North Cape, Arctic wildlife, king crab, Sami culture and bird
            safaris with cruise-friendly shore excursions from Honningsvåg.
          </p>

          <a href="#tours" className="btn-primary px-8 py-4 text-base sm:text-lg">
            View Excursions
          </a>

          <ul className="mx-auto mt-6 flex max-w-2xl flex-wrap items-center justify-center gap-2 sm:mt-8 sm:gap-3">
            {trustBadges.map((badge) => (
              <li
                key={badge.label}
                className={`rounded-full px-3 py-1.5 text-xs font-medium text-white/95 backdrop-blur-sm sm:px-4 sm:text-sm ${
                  badge.accent
                    ? "badge-accent-red"
                    : "border border-white/25 bg-white/10"
                }`}
              >
                {badge.label}
              </li>
            ))}
          </ul>
        </PageHero>

        <section id="tours" className="border-t bg-surface-muted">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
            <h2 className="mb-2 text-3xl font-bold sm:mb-3 sm:text-4xl">
              Popular Honningsvåg &amp; North Cape Tours
            </h2>
            <p className="mb-4 max-w-2xl text-slate-600">
              Arctic shore excursions departing near Honningsvåg harbour, from
              premium North Cape VIP experiences to puffin safaris and king crab
              encounters.
            </p>
            <p className="mb-8 max-w-2xl rounded-lg border border-slate-200 border-l-[3px] border-l-[var(--norway-red)] bg-white px-4 py-3 text-sm leading-6 text-slate-700">
              Every excursion featured is selected to fit comfortably within a
              typical Honningsvåg cruise port call when matched to your hours
              ashore.
            </p>

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
            <p className="mt-8">
              <Link
                href="/excursions"
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-800 transition hover:border-[var(--norway-blue)] hover:text-[var(--norway-blue)]"
              >
                View all Honningsvåg excursions
              </Link>
            </p>
          </div>
        </section>

        <section id="why-honningsvag" className="border-t bg-white">
          <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              Why Honningsvåg is ideal for cruise shore excursions
            </h2>
            <p className="text-base leading-8 text-slate-700 sm:text-lg">
              Honningsvåg is the gateway to North Cape on Magerøya, Europe&apos;s
              most famous northern landmark, yet the port also unlocks Arctic
              wildlife, king crab culture, seasonal Sami experiences, midnight
              sun, and northern lights chasing. The compact harbour sits within
              walking distance of town, while structured tours handle Magerøya
              drive times so you return to ship on schedule.
            </p>
            <ul className="mt-6 list-disc space-y-2 pl-5 text-base leading-8 text-slate-700">
              <li>Headline access to North Cape and the Globe Monument</li>
              <li>Gjesvær puffin and seabird safaris for wildlife-led port days</li>
              <li>King crab, fish factory, and Arctic village cultural experiences</li>
              <li>Seasonal Sami camp and reindeer encounters when operating</li>
              <li>Match excursions to your actual hours ashore with our Cruise Smart Planner</li>
            </ul>
          </div>
        </section>

        <section id="wildlife" className="border-t bg-surface-muted">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
                  Wildlife and bird safari experiences
                </h2>
                <p className="text-base leading-8 text-slate-700">
                  Not every Honningsvåg port day needs a coach to North Cape.
                  The{" "}
                  <Link href="/excursions/gjesvaer-bird-safari" className="content-link">
                    Gjesvær Bird Safari
                  </Link>{" "}
                  delivers puffins, seabirds, and dramatic coastal cliffs with
                  strong photography, ideal when you want Arctic wildlife
                  without the standard plateau crowds.
                </p>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  The{" "}
                  <Link
                    href="/excursions/coastal-treasures-rib-safari"
                    className="content-link"
                  >
                    Coastal Treasures Arctic RIB Safari
                  </Link>{" "}
                  adds eagles, seals, and marine mammals if conditions allow.
                  Read our{" "}
                  <Link href="/bird-safaris-honningsvag" className="content-link">
                    bird safaris guide
                  </Link>{" "}
                  for SEO-focused planning on puffin tours from cruise ships.
                </p>
                <Link
                  href="/bird-safaris-honningsvag"
                  className="btn-primary-on-light mt-6 inline-block"
                >
                  Bird safaris guide
                </Link>
              </div>
              <figure className="overflow-hidden rounded-xl border border-slate-200 shadow-md">
                <img
                  src={siteImages.puffin}
                  alt={imageAlts.puffin}
                  className="aspect-[4/3] h-full w-full object-cover"
                />
              </figure>
            </div>
          </div>
        </section>

        <section id="planner" className="border-t bg-white">
          <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
            <CruisePortDayPlanner />
            <PlannerInterestGroups />
          </div>
        </section>

        <ExploreNorwegianPorts
          config={explorePortsFromHonningsvag}
          variant="compact"
        />

        <section id="faqs" className="border-t bg-surface-muted">
          <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
            <h2 className="mb-6 text-2xl font-bold text-slate-900 sm:text-3xl">
              Honningsvåg cruise passenger FAQs
            </h2>
            <dl className="space-y-6">
              {homeFaqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-lg border border-slate-200 border-l-[3px] border-l-[var(--norway-blue)] bg-white p-5 shadow-sm"
                >
                  <dt className="font-semibold text-slate-900">{faq.question}</dt>
                  <dd className="mt-2 leading-7 text-slate-700">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="border-t bg-navy text-white">
          <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6 sm:py-16">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Plan your Honningsvåg port day with confidence
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
              Browse North Cape shore excursions, read the port guide, and use the
              Cruise Smart Planner, everything built for cruise passengers who
              need to return on time.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link href={siteConfig.shoreExcursionsPath} className="btn-primary sm:text-base">
                Book a Tour
              </Link>
              <Link href="/honningsvag-port-guide" className="btn-secondary sm:text-base">
                Honningsvåg Port Guide
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
