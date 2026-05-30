import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { buildPageMetadata } from "@/lib/site-metadata";
import { imageAlts, siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "One Day in Honningsvåg for Cruise Passengers",
  description:
    "Sample one-day Honningsvåg itineraries for cruise guests: short port call, standard North Cape day, wildlife-focused day, and premium North Cape VIP day with return-to-ship timing.",
  path: "/one-day-in-honningsvag",
  ogImage: siteImages.oneDay,
  ogImageAlt: imageAlts.oneDay,
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "One Day in Honningsvåg" },
] as const;

const relatedLinks = [
  { label: "Shore excursions", href: "/excursions" },
  { label: "Honningsvåg port guide", href: "/honningsvag-port-guide" },
  { label: "North Cape tours", href: "/north-cape-tours" },
] as const;

const faqs = [
  {
    question: "What can cruise passengers do in Honningsvåg with under three hours ashore?",
    answer:
      "Choose Bruket Nordvågen Arctic Village or the Taste of the Arctic E-Bike Tour. Avoid full North Cape coach itineraries, Magerøya drive time exceeds the safe margin.",
  },
  {
    question: "What is a standard North Cape day from Honningsvåg?",
    answer:
      "Disembark early, join a three-to-four-hour North Cape or king crab tour, and return with a 45-minute buffer before all aboard. Add harbour lunch only if return times are confirmed.",
  },
  {
    question: "How do I plan a wildlife-focused Honningsvåg port day?",
    answer:
      "Book the Gjesvær Bird Safari for puffins and seabirds, or the Coastal Treasures RIB Safari for marine wildlife. Pair with our bird safaris guide for comparison.",
  },
] as const;

export default function OneDayInHonningsvagPage() {
  return (
    <ContentPage
      title="One Day in Honningsvåg"
      lead="Practical cruise-day itineraries for Honningsvåg, short port calls, classic North Cape touring, wildlife-focused days, and premium VIP experiences with realistic return-to-ship timing."
      heroImage={pageMeta.ogImage}
      heroImageAlt={pageMeta.ogImageAlt}
      pagePath={pageMeta.path}
      pageDescription={pageMeta.description}
      breadcrumbs={breadcrumbs}
      relatedLinks={relatedLinks}
      faqs={faqs}
    >
      <section>
        <h2>Start with your ship schedule</h2>
        <p>
          Subtract at least 45 minutes from your last possible departure to set a
          hard gangway deadline. Enter arrival and departure times in the{" "}
          <Link href="/#planner">Cruise Smart Planner</Link> before choosing a
          tour.
        </p>
      </section>

      <section>
        <h2>Short port call (under 3 hours)</h2>
        <p>
          Focus on compact experiences near Honningsvåg harbour. The{" "}
          <Link href="/excursions/bruket-nordvagen-arctic-village">
            Bruket Nordvågen Arctic Village Experience
          </Link>{" "}
          fits stockfish tasting and king crab aquarium viewing in roughly two
          hours. If departures align, the{" "}
          <Link href="/excursions/taste-of-the-arctic-ebike-tour">
            Taste of the Arctic E-Bike Tour
          </Link>{" "}
          adds local flavour stops without a long Magerøya drive.
        </p>
      </section>

      <section>
        <h2>Standard North Cape day (3 to 4 hours)</h2>
        <p>
          Disembark promptly and board a North Cape coach tour such as{" "}
          <Link href="/excursions/north-cape-king-crab">
            North Cape and King Crab
          </Link>{" "}
          or{" "}
          <Link href="/excursions/north-cape-sami-camp-viewpoints">
            North Cape with Sami Camp and Viewpoints
          </Link>
          . Skip stacking a second major tour unless your ship publishes six or
          more hours ashore.
        </p>
      </section>

      <section>
        <h2>Wildlife-focused day</h2>
        <p>
          Choose the{" "}
          <Link href="/excursions/gjesvaer-bird-safari">Gjesvær Bird Safari</Link>{" "}
          for puffins and cliff photography, or the{" "}
          <Link href="/excursions/coastal-treasures-rib-safari">
            Coastal Treasures Arctic RIB Safari
          </Link>{" "}
          for seabirds and marine mammals. See{" "}
          <Link href="/bird-safaris-honningsvag">bird safaris Honningsvåg</Link>{" "}
          for detailed comparison.
        </p>
      </section>

      <section>
        <h2>Premium North Cape VIP day (4 to 5+ hours)</h2>
        <p>
          The{" "}
          <Link href="/excursions/north-cape-vip-experience">
            North Cape VIP Experience
          </Link>{" "}
          combines plateau, fishing village, fish factory, king crab, seasonal
          Sami camp, certificate, and refreshments in one premium itinerary.
          Guests with five or more hours may add{" "}
          <Link href="/excursions/private-arctic-fishing-tour">
            private fishing
          </Link>{" "}
          on separate sailings rather than the same day.
        </p>
      </section>
    </ContentPage>
  );
}
