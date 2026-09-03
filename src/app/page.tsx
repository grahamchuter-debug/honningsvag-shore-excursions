import type { Metadata } from "next";
import Link from "next/link";

import { CruisePortDayPlanner } from "@/components/cruise-port-day-planner";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { PlannerInterestGroups } from "@/components/planner-interest-groups";
import { TourCard } from "@/components/tour-card";
import {
  honningsvagScheduleIntegrity,
  formatScheduleDate,
} from "@/lib/honningsvag-schedules";
import {
  honningsvagTourCards,
  honningsvagTourListItems,
} from "@/lib/honningsvag-tours";
import { siteConfig } from "@/lib/site-config";
import { imageAlts, siteImages } from "@/lib/site-images";
import { buildPageMetadata } from "@/lib/site-metadata";
import {
  buildFaqSchema,
  buildItemListSchema,
  buildWebPageSchema,
} from "@/lib/site-schema";

const pageMeta = {
  title:
    "Honningsvag Shore Excursions | North Cape, Bird Safaris & Arctic Port Guides",
  description:
    "Plan your Honningsvåg cruise port day: North Cape plateau options, Gjesvær bird safaris, king crab and village time, published ship schedules, and honest return-buffer planning.",
  path: "/",
} as const;

export const metadata: Metadata = buildPageMetadata({
  ...pageMeta,
  ogImage: siteImages.hero,
  ogImageAlt: imageAlts.hero,
  absoluteTitle: true,
});

const homeFaqs = [
  {
    question: "Is this site for cruise passengers calling at Honningsvåg?",
    answer:
      "Yes. This is an independent Honningsvåg cruise-port planning site. It helps you choose between a North Cape plateau day, local wildlife, or a shorter village outing, check published ship calls, and leave a return buffer. Confirm final timings with your cruise line.",
  },
  {
    question: "Should I do North Cape or stay closer to harbour?",
    answer:
      "North Cape is the headline reason most ships call here when you have a long, confirmed window and accept weather risk on the plateau. Gjesvær bird safari and coastal RIBs suit wildlife-led days. Bruket Nordvågen and the e-bike tour suit shorter calls near town.",
  },
  {
    question:
      "Can I do North Cape because my ship stays several hours in Honningsvåg?",
    answer:
      "Published hours ashore are not enough on their own. North Cape needs Magerøya driving time, plateau time, and a clear return margin before all aboard. Weather and coach traffic can stretch the day. This site does not invent current ticket or coach operation.",
  },
  {
    question: "Can I book shore excursions on this site?",
    answer:
      "This site is for planning and discovery. There is no live booking checkout here. Use the excursion pages and guides to understand options, then arrange tours through operators or your usual booking channel.",
  },
] as const;

export default function Home() {
  const firstLabel = honningsvagScheduleIntegrity.firstDate
    ? formatScheduleDate(honningsvagScheduleIntegrity.firstDate)
    : "";
  const lastLabel = honningsvagScheduleIntegrity.lastDate
    ? formatScheduleDate(honningsvagScheduleIntegrity.lastDate)
    : "";
  const featured = honningsvagTourCards.slice(0, 3);
  const remaining = honningsvagTourCards.slice(3);

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
      <main>
        <PageHero
          image={siteImages.hero}
          imageAlt={imageAlts.hero}
          className="min-h-[28rem] md:min-h-[32rem]"
        >
          <p className="hero-eyebrow mb-3 text-xs font-semibold uppercase tracking-[0.2em]">
            {siteConfig.name}
          </p>
          <h1 className="mb-5 max-w-4xl text-3xl font-semibold leading-tight text-white sm:text-5xl">
            Your ship is in Honningsvåg. North Cape plateau day, or stay closer
            to harbour?
          </h1>
          <p className="max-w-2xl text-base leading-7 text-white/90 sm:text-lg">
            The Globe Monument is the headline draw when the clock and coach
            allow. Bird safaris and village time suit shorter or wildlife-led
            calls. Choose one main direction, then keep time to get back.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/excursions"
              className="btn-primary w-full justify-center sm:w-auto"
            >
              Explore Honningsvåg excursions
            </Link>
            <Link
              href="/ship-schedule"
              className="btn-secondary w-full justify-center sm:w-auto"
            >
              Check your ship schedule
            </Link>
          </div>
        </PageHero>

        <section className="border-b border-[var(--border-light)] bg-[var(--surface)] py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="section-eyebrow">Three Honningsvåg days</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              North Cape plateau, local wildlife, or a shorter village outing
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              The inventory on this site already splits that way. Use the
              one-day guide for hours, not as proof that North Cape will fit
              every call.
            </p>
            <div className="mt-10 grid gap-10 md:grid-cols-3">
              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  North Cape plateau day
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Globe Monument and Magerøya plateau when you have a long,
                  confirmed window. Typical tours run about three to five hours,
                  plus buffer. Hours ashore alone do not prove fit.
                </p>
                <div className="mt-4 flex flex-col gap-2">
                  <Link
                    href="/excursions/north-cape-vip-experience"
                    className="inline-flex min-h-11 items-center text-sm font-semibold text-[var(--navy)] underline-offset-4 hover:underline"
                  >
                    North Cape VIP Experience
                  </Link>
                  <Link
                    href="/north-cape-tours"
                    className="inline-flex min-h-11 items-center text-sm font-semibold text-[var(--navy)] underline-offset-4 hover:underline"
                  >
                    Compare North Cape tours
                  </Link>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Local wildlife
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Gjesvær puffin and seabird safaris, or a coastal RIB when you
                  want Arctic wildlife without a standard plateau coach day.
                </p>
                <div className="mt-4 flex flex-col gap-2">
                  <Link
                    href="/excursions/gjesvaer-bird-safari"
                    className="inline-flex min-h-11 items-center text-sm font-semibold text-[var(--navy)] underline-offset-4 hover:underline"
                  >
                    Gjesvær Bird Safari
                  </Link>
                  <Link
                    href="/bird-safaris-honningsvag"
                    className="inline-flex min-h-11 items-center text-sm font-semibold text-[var(--navy)] underline-offset-4 hover:underline"
                  >
                    Bird safaris guide
                  </Link>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Shorter village time
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Bruket Nordvågen, e-bike tastings, or compact king crab culture
                  when the call is short or you want to stay closer to harbour.
                </p>
                <div className="mt-4 flex flex-col gap-2">
                  <Link
                    href="/excursions/bruket-nordvagen-arctic-village"
                    className="inline-flex min-h-11 items-center text-sm font-semibold text-[var(--navy)] underline-offset-4 hover:underline"
                  >
                    Bruket Nordvågen
                  </Link>
                  <Link
                    href="/excursions/taste-of-the-arctic-ebike-tour"
                    className="inline-flex min-h-11 items-center text-sm font-semibold text-[var(--navy)] underline-offset-4 hover:underline"
                  >
                    Taste of the Arctic E-Bike
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[var(--border-light)] bg-surface-muted py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="section-eyebrow">Find your ship</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Check when your ship is in Honningsvåg
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              {honningsvagScheduleIntegrity.total} published Honningsvåg calls
              from {firstLabel} to {lastLabel}. Arrival and departure times shape
              what is realistic ashore. Always confirm with your cruise line.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/ship-schedule" className="btn-outline-dark">
                Open Honningsvåg ship schedule
              </Link>
              <Link
                href="/one-day-in-honningsvag"
                className="inline-flex min-h-11 items-center text-sm font-semibold text-[var(--navy)] underline-offset-4 hover:underline"
              >
                Then plan your hours
              </Link>
            </div>
          </div>
        </section>

        <section id="tours" className="scroll-mt-24 py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="section-eyebrow">Excursion options</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Experiences already on this site
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Ten products. No invented prices. Durations are approximate. Keep
              a return buffer. Match the outing to your confirmed hours, not to a
              generic port-call assumption. This site does not sell tickets.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {featured.map((tour) => (
                <TourCard key={tour.href} {...tour} />
              ))}
            </div>
            {remaining.length > 0 ? (
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {remaining.map((tour) => (
                  <TourCard key={tour.href} {...tour} />
                ))}
              </div>
            ) : null}
            <p className="mt-8">
              <Link
                href="/excursions"
                className="text-sm font-semibold text-[var(--navy)] underline-offset-4 hover:underline"
              >
                Compare all Honningsvåg excursions
              </Link>
            </p>
          </div>
        </section>

        <section className="border-y border-[var(--border-light)] bg-[var(--surface)] py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="section-eyebrow">Wildlife alternative</p>
                <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
                  Not every port day needs a coach to North Cape
                </h2>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  The{" "}
                  <Link
                    href="/excursions/gjesvaer-bird-safari"
                    className="content-link"
                  >
                    Gjesvær Bird Safari
                  </Link>{" "}
                  delivers puffins, seabirds and coastal cliffs with strong
                  photography. The{" "}
                  <Link
                    href="/excursions/coastal-treasures-rib-safari"
                    className="content-link"
                  >
                    Coastal Treasures Arctic RIB Safari
                  </Link>{" "}
                  adds eagles, seals and marine mammals if conditions allow. Read
                  the{" "}
                  <Link href="/bird-safaris-honningsvag" className="content-link">
                    bird safaris guide
                  </Link>{" "}
                  for cruise-friendly wildlife planning.
                </p>
              </div>
              <figure className="overflow-hidden rounded-xl border border-slate-200 shadow-md">
                <img
                  src={siteImages.gjesvaerPuffins}
                  alt={imageAlts.gjesvaerPuffins}
                  className="aspect-[4/3] h-full w-full object-cover"
                />
              </figure>
            </div>
          </div>
        </section>

        <section className="border-b border-[var(--border-light)] bg-white py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="section-eyebrow">North Cape honesty</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Hours ashore do not prove the plateau day
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Fog and wind are common on the plateau. Midnight sun and northern
              lights depend on season and sky conditions, not on booking a tour.
              Entrance tickets and coach operation vary by operator. Confirm each
              outing separately and leave buffer before all aboard.
            </p>
            <p className="mt-4">
              <Link
                href="/is-north-cape-worth-visiting"
                className="text-sm font-semibold text-[var(--navy)] underline-offset-4 hover:underline"
              >
                Is North Cape worth visiting?
              </Link>
            </p>
          </div>
        </section>

        <section className="py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="section-eyebrow">First time in Honningsvåg</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Useful planning guides
            </h2>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  href: "/honningsvag-port-guide",
                  title: "Cruise port guide",
                  text: "Harbour layout, town access and coach pickup context for Honningsvåg.",
                },
                {
                  href: "/one-day-in-honningsvag",
                  title: "One day in Honningsvåg",
                  text: "Sample shapes for short, classic and longer port calls.",
                },
                {
                  href: "/is-north-cape-worth-visiting",
                  title: "Is North Cape worth visiting?",
                  text: "Honest context on plateau days, weather and wildlife alternatives.",
                },
                {
                  href: "/north-cape-tours",
                  title: "North Cape tours",
                  text: "Compare VIP, king crab, Sami camp and seasonal plateau options.",
                },
                {
                  href: "/bird-safaris-honningsvag",
                  title: "Bird safaris",
                  text: "Puffin and seabird planning from the cruise harbour.",
                },
                {
                  href: "/best-time-to-visit-honningsvag",
                  title: "Best time to visit",
                  text: "Midnight sun, puffin season and winter aurora context by month.",
                },
              ].map((item) => (
                <li
                  key={item.href}
                  className="border-t border-[var(--border-light)] pt-5"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    <Link
                      href={item.href}
                      className="underline-offset-4 hover:underline"
                    >
                      {item.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="planner"
          className="scroll-mt-24 border-y border-[var(--border-light)] bg-surface-muted py-14 sm:py-16"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="section-eyebrow">Port-day planning</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Think in hours, Magerøya distance and return buffer
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Use published times as a planning start. This Cruise Smart Planner
              helps you think through the day. It does not invent coach
              operation, North Cape tickets or weather.
            </p>
            <div className="mt-8">
              <CruisePortDayPlanner />
              <PlannerInterestGroups />
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="section-eyebrow">Norway beyond Honningsvåg</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Planning other Norwegian ports?
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              For multi-port itineraries, the national planning site covers the
              wider Norway cruise picture.
            </p>
            <a
              href={siteConfig.nationalAuthorityUrl}
              className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--navy)] underline-offset-4 hover:underline"
            >
              Norway Shore Excursions
            </a>
          </div>
        </section>

        <section className="border-y border-[var(--border-light)] bg-[var(--surface)] py-14 sm:py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <p className="section-eyebrow">FAQ</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Honningsvåg cruise questions
            </h2>
            <dl className="mt-8 space-y-6">
              {homeFaqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="font-semibold text-slate-900">{faq.question}</dt>
                  <dd className="mt-2 text-sm leading-6 text-slate-600">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="bg-navy py-14 text-white sm:py-16">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <h2 className="text-2xl font-semibold sm:text-3xl">
              Honningsvåg planning concierge
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-white/80 sm:text-base">
              {siteConfig.contactEmailVerified
                ? `Questions about shaping a Honningsvåg port day? Email ${siteConfig.contactEmail}.`
                : "A destination email is being prepared. Until then, use the schedule, one-day guide and excursion pages on this site."}
            </p>
            <Link href="/contact" className="btn-primary mt-6">
              Contact
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
