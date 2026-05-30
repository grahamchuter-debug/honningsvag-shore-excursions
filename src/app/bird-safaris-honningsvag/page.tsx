import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { buildPageMetadata } from "@/lib/site-metadata";
import { imageAlts, siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "Honningsvåg Bird Safari & Gjesvær Puffin Tours from Cruise Ships",
  description:
    "Honningsvåg bird safari guide: Gjesvær puffin tours, seabird cliffs, Arctic birdwatching Norway, cruise-friendly timing, and North Cape wildlife alternatives for passengers.",
  path: "/bird-safaris-honningsvag",
  ogImage: siteImages.birdSafaris,
  ogImageAlt: imageAlts.birdSafaris,
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Bird Safaris Honningsvåg" },
] as const;

const relatedLinks = [
  { label: "Gjesvær Bird Safari tour", href: "/excursions/gjesvaer-bird-safari" },
  { label: "RIB safari", href: "/excursions/coastal-treasures-rib-safari" },
  { label: "All excursions", href: "/excursions" },
] as const;

const faqs = [
  {
    question: "Where is the best puffin tour from Honningsvåg cruise port?",
    answer:
      "The Gjesvær Bird Safari is the dedicated puffin and seabird excursion from Honningsvåg, timed for typical cruise schedules with strong photography stops.",
  },
  {
    question: "Can I see puffins without visiting North Cape plateau?",
    answer:
      "Yes. Gjesvær cliff colonies target puffins and seabirds directly, a wildlife-led alternative to standard North Cape coach tours.",
  },
  {
    question: "When is puffin season near Honningsvåg?",
    answer:
      "Atlantic puffins are most reliable during summer breeding season roughly May to August. Confirm seasonal departures when booking.",
  },
  {
    question: "Are bird safaris suitable for cruise passengers with 3 to 4 hours ashore?",
    answer:
      "Yes when departures align with your all-aboard time. The Cruise Smart Planner lists Gjesvær Bird Safari in the 3 to 4 hour tier.",
  },
] as const;

export default function BirdSafarisHonningsvagPage() {
  return (
    <ContentPage
      title="Bird Safaris from Honningsvåg"
      lead="Plan Honningsvåg bird safaris and Gjesvær puffin tours from your cruise ship, Arctic seabirds, photography, cruise-friendly timing, and how wildlife touring compares to North Cape coach trips."
      heroImage={pageMeta.ogImage}
      heroImageAlt={pageMeta.ogImageAlt}
      pagePath={pageMeta.path}
      pageDescription={pageMeta.description}
      breadcrumbs={breadcrumbs}
      relatedLinks={relatedLinks}
      faqs={faqs}
    >
      <section>
        <h2>Honningsvåg bird safari overview</h2>
        <p>
          Arctic Norway cruise guests increasingly choose wildlife-led port days
          instead of only the North Cape plateau. Honningsvåg operators run
          dedicated bird safaris to Gjesvær, a coastal bird cliff site known
          for puffins, guillemots, and dramatic Barents Sea backdrops.
        </p>
      </section>

      <section>
        <h2>Gjesvær bird safari from cruise ships</h2>
        <p>
          The{" "}
          <Link href="/excursions/gjesvaer-bird-safari">
            Gjesvær Bird Safari from Honningsvåg
          </Link>{" "}
          is positioned as a major wildlife bestseller: puffins, seabirds, Arctic
          wildlife commentary, cruise passenger-friendly departures, and
          photography time away from standard North Cape crowds.
        </p>
      </section>

      <section>
        <h2>Puffin tours vs North Cape wildlife tours</h2>
        <p>
          North Cape tours focus on the Globe Monument and plateau scenery.
          Bird safaris prioritise cliff colonies and lenses. Some guests book
          North Cape on one sailing and Gjesvær on a return call, compare on{" "}
          <Link href="/north-cape-tours">North Cape tours</Link> and this guide.
        </p>
      </section>

      <section>
        <h2>Arctic birdwatching Norway, what to expect</h2>
        <p>
          Expect wind, changing light, and variable visibility. Bring telephoto
          lenses and rain protection for boat or cliff approaches. The{" "}
          <Link href="/excursions/coastal-treasures-rib-safari">
            Coastal Treasures Arctic RIB Safari
          </Link>{" "}
          adds eagles, seals, and occasional cetaceans from the water.
        </p>
      </section>

      <section>
        <h2>Booking and return-to-ship timing</h2>
        <p>
          Match safari length to your published hours ashore. Read the{" "}
          <Link href="/honningsvag-port-guide">Honningsvåg port guide</Link> and
          use the <Link href="/#planner">Cruise Smart Planner</Link> before
          pre-booking on busy summer turnaround days.
        </p>
      </section>
    </ContentPage>
  );
}
