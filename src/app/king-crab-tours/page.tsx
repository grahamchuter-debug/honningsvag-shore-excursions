import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { buildPageMetadata } from "@/lib/site-metadata";
import { imageAlts, siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "Honningsvåg King Crab Tour & North Cape King Crab Shore Excursion",
  description:
    "Honningsvåg king crab tour guide: North Cape king crab shore excursions, VIP king crab encounters, Bruket Nordvågen aquarium, and cruise-friendly Arctic tasting experiences.",
  path: "/king-crab-tours",
  ogImage: siteImages.kingCrabTours,
  ogImageAlt: imageAlts.kingCrabTours,
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "King Crab Tours" },
] as const;

const relatedLinks = [
  { label: "North Cape and King Crab tour", href: "/excursions/north-cape-king-crab" },
  { label: "North Cape VIP", href: "/excursions/north-cape-vip-experience" },
  { label: "Bruket Nordvågen", href: "/excursions/bruket-nordvagen-arctic-village" },
] as const;

const faqs = [
  {
    question: "Which Honningsvåg tour includes king crab?",
    answer:
      "The North Cape and King Crab Tour, North Cape VIP Experience, Taste of the Arctic E-Bike Tour, and Bruket Nordvågen Arctic Village Experience all feature king crab elements.",
  },
  {
    question: "Is a dedicated king crab shore excursion worth it?",
    answer:
      "Yes if Arctic food culture is a priority. Combining king crab with North Cape suits guests wanting one efficient Magerøya day rather than separate bookings.",
  },
  {
    question: "Can I see king crab on a short Honningsvåg port call?",
    answer:
      "Bruket Nordvågen fits roughly two hours with aquarium and tasting, ideal when North Cape driving is not feasible.",
  },
] as const;

export default function KingCrabToursPage() {
  return (
    <ContentPage
      title="King Crab Tours in Honningsvåg"
      lead="Compare Honningsvåg king crab tours and North Cape king crab shore excursions, from VIP encounters to village aquariums and e-bike tasting routes."
      heroImage={pageMeta.ogImage}
      heroImageAlt={pageMeta.ogImageAlt}
      pagePath={pageMeta.path}
      pageDescription={pageMeta.description}
      breadcrumbs={breadcrumbs}
      relatedLinks={relatedLinks}
      faqs={faqs}
    >
      <section>
        <h2>Why king crab matters in Honningsvåg</h2>
        <p>
          King crab is an iconic Arctic food experience tied to Finnmark fishing
          culture. Cruise passengers encounter live displays, tastings, and
          factory visits across Honningsvåg shore excursions, often paired with
          North Cape driving on the same ticket.
        </p>
      </section>

      <section>
        <h2>North Cape king crab shore excursion</h2>
        <p>
          The{" "}
          <Link href="/excursions/north-cape-king-crab">
            North Cape and King Crab Tour
          </Link>{" "}
          combines plateau scenery, king crab encounter, scenic Arctic drive,
          panoramic viewpoint, and seasonal Sami family visit in approx. 3.5
          hours, easy activity level.
        </p>
      </section>

      <section>
        <h2>Premium king crab on the VIP tour</h2>
        <p>
          The{" "}
          <Link href="/excursions/north-cape-vip-experience">
            North Cape VIP Experience
          </Link>{" "}
          weaves king crab into a fuller cultural day with village, fish factory,
          Sami camp, certificate, and drinks.
        </p>
      </section>

      <section>
        <h2>Short port call king crab options</h2>
        <p>
          <Link href="/excursions/bruket-nordvagen-arctic-village">
            Bruket Nordvågen
          </Link>{" "}
          offers stockfish, caviar, and king crab aquarium time in approx. two
          hours. The{" "}
          <Link href="/excursions/taste-of-the-arctic-ebike-tour">
            Taste of the Arctic E-Bike Tour
          </Link>{" "}
          adds local flavour tastings on an easy e-bike route.
        </p>
      </section>

      <section>
        <h2>Compare with North Cape-only touring</h2>
        <p>
          See <Link href="/north-cape-tours">North Cape tours</Link> if plateau
          scenery is your priority, or{" "}
          <Link href="/bird-safaris-honningsvag">bird safaris</Link> for wildlife
          alternatives.
        </p>
      </section>
    </ContentPage>
  );
}
