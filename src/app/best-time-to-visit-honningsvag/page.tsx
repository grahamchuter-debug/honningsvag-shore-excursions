import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { buildPageMetadata } from "@/lib/site-metadata";
import { imageAlts, siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "Best Time to Visit Honningsvåg & North Cape on a Cruise",
  description:
    "Best time to visit Honningsvåg: midnight sun May to August, puffin season, northern lights winter cruises, Arctic weather, and which shore excursions suit each season.",
  path: "/best-time-to-visit-honningsvag",
  ogImage: siteImages.bestTime,
  ogImageAlt: imageAlts.bestTime,
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Best Time to Visit Honningsvåg" },
] as const;

const relatedLinks = [
  { label: "Midnight sun tour", href: "/excursions/north-cape-midnight-sun" },
  { label: "Aurora Explorer", href: "/excursions/aurora-explorer-northern-lights" },
  { label: "Bird safaris", href: "/bird-safaris-honningsvag" },
] as const;

const faqs = [
  {
    question: "When is midnight sun visible at North Cape?",
    answer:
      "Midnight sun period runs roughly May through August. The North Cape Midnight Sun Experience targets this season with approx. three-hour touring.",
  },
  {
    question: "When can cruise passengers see northern lights from Honningsvåg?",
    answer:
      "Aurora visibility peaks on dark winter months September to March when skies are clear. Book the Aurora Explorer Northern Lights Tour on winter itineraries.",
  },
  {
    question: "When is best for puffin and bird safaris?",
    answer:
      "Summer breeding season roughly May to August suits Gjesvær puffin colonies. Confirm departures with operators on your sailing date.",
  },
  {
    question: "Is Honningsvåg worth visiting in winter?",
    answer:
      "Yes for aurora-focused cruises and dramatic Arctic light. Pack full winter kit and expect weather delays on Magerøya roads.",
  },
] as const;

export default function BestTimeToVisitHonningsvagPage() {
  return (
    <ContentPage
      title="Best Time to Visit Honningsvåg"
      lead="Seasonal guide for Honningsvåg cruise calls, midnight sun, puffin safaris, northern lights, Sami camp availability, Arctic weather, and which shore excursions fit each month."
      heroImage={pageMeta.ogImage}
      heroImageAlt={pageMeta.ogImageAlt}
      pagePath={pageMeta.path}
      pageDescription={pageMeta.description}
      breadcrumbs={breadcrumbs}
      relatedLinks={relatedLinks}
      faqs={faqs}
    >
      <section>
        <h2>Summer and midnight sun (May to August)</h2>
        <p>
          Peak cruise season brings continuous daylight and the busiest North
          Cape departures. Book the{" "}
          <Link href="/excursions/north-cape-midnight-sun">
            North Cape Midnight Sun Experience
          </Link>{" "}
          for Globe Monument photography under the Arctic sun. Puffin safaris to
          Gjesvær operate through summer, see{" "}
          <Link href="/bird-safaris-honningsvag">bird safaris</Link>.
        </p>
      </section>

      <section>
        <h2>Shoulder seasons</h2>
        <p>
          Late spring and early autumn offer fewer crowds with cooler
          temperatures. Standard{" "}
          <Link href="/north-cape-tours">North Cape tours</Link> and king crab
          experiences still run, confirm Sami camp and reindeer availability
          seasonally.
        </p>
      </section>

      <section>
        <h2>Winter and northern lights</h2>
        <p>
          Winter cruises trade midnight sun for aurora potential. The{" "}
          <Link href="/excursions/aurora-explorer-northern-lights">
            Aurora Explorer
          </Link>{" "}
          chases lights toward North Cape Plateau, Sarnes, and Kåfjord with hot
          drinks and winter suits when needed.
        </p>
      </section>

      <section>
        <h2>Arctic weather year-round</h2>
        <p>
          Wind, fog, and sudden temperature drops affect all seasons. Layer
          clothing for plateau visits and read the{" "}
          <Link href="/honningsvag-port-guide">port guide</Link> for return-to-ship
          buffer advice in snow or low visibility.
        </p>
      </section>
    </ContentPage>
  );
}
