import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ContentPage } from "@/components/content-page";
import { ShipScheduleTable } from "@/components/ship-schedule-table";
import {
  formatMonthLabel,
  getHonningsvagEntriesForMonthKey,
  getHonningsvagMonthKeysWithCalls,
  getHonningsvagMonthSummaries,
  monthKeyToSlug,
  monthSlugToKey,
  scheduleDisclaimer,
  shipScheduleHubPath,
  shipScheduleMonthPath,
} from "@/lib/honningsvag-schedules";
import { imageAlts, siteImages } from "@/lib/site-images";
import { buildPageMetadata } from "@/lib/site-metadata";

type MonthPageProps = {
  params: Promise<{ monthSlug: string }>;
};

export function generateStaticParams() {
  return getHonningsvagMonthKeysWithCalls().map((monthKey) => ({
    monthSlug: monthKeyToSlug(monthKey),
  }));
}

export async function generateMetadata({
  params,
}: MonthPageProps): Promise<Metadata> {
  const { monthSlug } = await params;
  const monthKey = monthSlugToKey(monthSlug);
  if (!monthKey) return {};
  const label = formatMonthLabel(monthKey);
  return buildPageMetadata({
    title: `Honningsvåg Cruise Ship Schedule ${label}`,
    description: `View the Honningsvåg cruise ship schedule for ${label} including arrival times, departure times, and cruise lines visiting Honningsvåg, Norway.`,
    path: shipScheduleMonthPath(monthSlug),
  });
}

export default async function HonningsvagShipScheduleMonthPage({
  params,
}: MonthPageProps) {
  const { monthSlug } = await params;
  const monthKey = monthSlugToKey(monthSlug);
  if (!monthKey) notFound();

  const entries = getHonningsvagEntriesForMonthKey(monthKey);
  if (entries.length === 0) notFound();

  const label = formatMonthLabel(monthKey);
  const otherMonths = getHonningsvagMonthSummaries().filter(
    (m) => m.slug !== monthSlug,
  );

  return (
    <ContentPage
      title={`Honningsvåg cruise schedule: ${label}`}
      lead={`${entries.length} published ship call${entries.length === 1 ? "" : "s"} for ${label}. Find your vessel, note arrival and departure, then choose a realistic Honningsvåg plan.`}
      heroImage={siteImages.honningsvagHarbour}
      heroImageAlt={imageAlts.honningsvagHarbour}
      pagePath={shipScheduleMonthPath(monthSlug)}
      pageDescription={`Honningsvåg cruise ship schedule for ${label}.`}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Ship schedule", href: shipScheduleHubPath },
        { label },
      ]}
      ctaTitle="Plan your Honningsvåg port day"
      ctaText="Use your hours ashore to choose between a North Cape plateau day, local wildlife, or a shorter village outing, with a clear return buffer."
      ctaHref="/one-day-in-honningsvag"
      ctaButtonLabel="Plan your Honningsvåg day"
      relatedLinks={[
        { label: "All months", href: shipScheduleHubPath },
        { label: "Explore excursions", href: "/excursions" },
        { label: "Port guide", href: "/honningsvag-port-guide" },
        { label: "One day in Honningsvåg", href: "/one-day-in-honningsvag" },
      ]}
    >
      <section>
        <p className="rounded border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
          {scheduleDisclaimer}
        </p>
      </section>

      <section>
        <h2>{label} ship calls</h2>
        <ShipScheduleTable entries={entries} />
      </section>

      <section>
        <h2>Next: turn your date into a plan</h2>
        <p>
          Once you know roughly how long you have ashore, choose one main
          experience that fits. Ship times alone cannot prove that a North Cape
          plateau tour will work on every call.
        </p>
        <ul>
          <li>
            <Link href="/one-day-in-honningsvag">One day in Honningsvåg</Link>
          </li>
          <li>
            <Link href="/excursions">Honningsvåg shore excursions</Link>
          </li>
          <li>
            <Link href="/honningsvag-port-guide">
              Honningsvåg cruise port guide
            </Link>
          </li>
          <li>
            <Link href="/is-north-cape-worth-visiting">
              Is North Cape worth visiting?
            </Link>
          </li>
        </ul>
      </section>

      <section>
        <h2>Other Honningsvåg months</h2>
        <ul className="grid gap-2 sm:grid-cols-2">
          {otherMonths.map((month) => (
            <li key={month.slug}>
              <Link href={shipScheduleMonthPath(month.slug)}>
                {month.label} · {month.callCount} calls
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </ContentPage>
  );
}
