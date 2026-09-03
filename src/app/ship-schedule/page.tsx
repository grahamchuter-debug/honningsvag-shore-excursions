import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { ShipScheduleMonthCards } from "@/components/ship-schedule-month-cards";
import {
  honningsvagScheduleIntegrity,
  formatScheduleDate,
  getHonningsvagMonthSummaries,
  scheduleDisclaimer,
  shipScheduleHubPath,
} from "@/lib/honningsvag-schedules";
import { imageAlts, siteImages } from "@/lib/site-images";
import { buildPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Honningsvåg Cruise Ship Schedule",
  description:
    "Browse Honningsvåg cruise ship schedules by month. View arrival times, departure times, and cruise lines visiting Honningsvåg, Norway to plan your shore day.",
  path: shipScheduleHubPath,
});

export default function ShipScheduleHubPage() {
  const months = getHonningsvagMonthSummaries();
  const firstLabel = honningsvagScheduleIntegrity.firstDate
    ? formatScheduleDate(honningsvagScheduleIntegrity.firstDate)
    : "";
  const lastLabel = honningsvagScheduleIntegrity.lastDate
    ? formatScheduleDate(honningsvagScheduleIntegrity.lastDate)
    : "";

  return (
    <ContentPage
      title="Honningsvåg cruise ship schedule"
      lead={`Published calls for Honningsvåg from ${firstLabel} to ${lastLabel}. Find your month, check arrival and departure times, then decide whether a North Cape plateau day, local wildlife, or a shorter village outing fits.`}
      heroImage={siteImages.honningsvagHarbour}
      heroImageAlt={imageAlts.honningsvagHarbour}
      pagePath={shipScheduleHubPath}
      pageDescription={metadata.description as string}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Ship schedule" },
      ]}
      ctaTitle="Plan your Honningsvåg port day"
      ctaText="Once you know your hours ashore, compare North Cape options with bird safaris and village experiences. Keep a clear return buffer. Hours alone do not prove a plateau day will fit."
      ctaHref="/one-day-in-honningsvag"
      ctaButtonLabel="Plan your Honningsvåg day"
      relatedLinks={[
        { label: "Honningsvåg shore excursions", href: "/excursions" },
        { label: "One day in Honningsvåg", href: "/one-day-in-honningsvag" },
        { label: "Port guide", href: "/honningsvag-port-guide" },
        {
          label: "Is North Cape worth visiting?",
          href: "/is-north-cape-worth-visiting",
        },
        {
          label: "Best time to visit Honningsvåg",
          href: "/best-time-to-visit-honningsvag",
        },
      ]}
    >
      <section>
        <p className="rounded border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
          {scheduleDisclaimer}
        </p>
        <p className="mt-4 text-base leading-7 text-slate-700">
          This local timetable is filtered from the Norway Shore Excursions master
          schedule: {honningsvagScheduleIntegrity.total} Honningsvåg calls,{" "}
          {honningsvagScheduleIntegrity.byYear["2026"] ?? 0} in 2026 and{" "}
          {honningsvagScheduleIntegrity.byYear["2027"] ?? 0} in 2027, across{" "}
          {honningsvagScheduleIntegrity.uniqueShips} ships.
        </p>
      </section>

      <section>
        <h2>Browse by month</h2>
        <ShipScheduleMonthCards months={months} />
      </section>

      <section>
        <h2>Why ship times matter in Honningsvåg</h2>
        <p>
          A short call often suits Bruket Nordvågen, an e-bike village loop, or a
          compact coastal outing. North Cape plateau tours typically need three to
          five hours plus buffer for Magerøya driving and weather. Published
          duration alone does not prove the plateau day will fit.
        </p>
        <p>
          Continue to{" "}
          <Link href="/one-day-in-honningsvag">one day in Honningsvåg</Link>,{" "}
          <Link href="/excursions">excursion options</Link>, the{" "}
          <Link href="/honningsvag-port-guide">port guide</Link>, or{" "}
          <Link href="/is-north-cape-worth-visiting">
            is North Cape worth visiting?
          </Link>
          .
        </p>
      </section>
    </ContentPage>
  );
}
