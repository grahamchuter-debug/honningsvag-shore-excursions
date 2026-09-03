import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { buildPageMetadata } from "@/lib/site-metadata";
import { imageAlts, siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "Is North Cape Worth Visiting on a Cruise?",
  description:
    "Is North Cape worth visiting from Honningsvåg? Compare ship tours vs independent booking, what cruise passengers see, weather, North Cape Hall, Globe Monument, Sami camp notes, and wildlife alternatives.",
  path: "/is-north-cape-worth-visiting",
  ogImage: siteImages.worthVisiting,
  ogImageAlt: imageAlts.worthVisiting,
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Is North Cape Worth Visiting?" },
] as const;

const relatedLinks = [
  { label: "North Cape tours", href: "/north-cape-tours" },
  { label: "Bird safaris", href: "/bird-safaris-honningsvag" },
  { label: "Honningsvåg port guide", href: "/honningsvag-port-guide" },
] as const;

const faqs = [
  {
    question: "Is North Cape worth it for first-time Norway cruise passengers?",
    answer:
      "Often yes for guests calling at Honningsvåg, it is the defining landmark of Arctic Norway cruises. A structured shore excursion can handle Magerøya logistics, but you still need a confirmed return buffer and should treat weather and entrance fees as variables.",
  },
  {
    question: "Is it worth booking a North Cape tour instead of going independently?",
    answer:
      "Tours can bundle transport, plateau time, and return planning, valuable when you have limited hours ashore. Independent travel suits guests with very long confirmed port days and confident Arctic plans. Neither option invents clear weather or ticket inclusion.",
  },
  {
    question: "What can cruise passengers realistically see at North Cape?",
    answer:
      "The Globe Monument, plateau boardwalks, North Cape Hall exhibits when open, panoramic Barents Sea views in clear weather, and photo stops on the Magerøya drive.",
  },
  {
    question: "What if weather blocks the view at North Cape?",
    answer:
      "Fog and low cloud are common. Many guests still value the journey and monument visit. Wildlife alternatives such as Gjesvær bird safaris suit guests prioritising animals over plateau views.",
  },
] as const;

export default function IsNorthCapeWorthVisitingPage() {
  return (
    <ContentPage
      title="Is North Cape Worth Visiting?"
      lead="North Cape is the headline reason most ships call at Honningsvåg, here is an honest look at whether a tour is worth booking, what you can see in a typical port window, weather realities, and strong alternatives."
      heroImage={pageMeta.ogImage}
      heroImageAlt={pageMeta.ogImageAlt}
      pagePath={pageMeta.path}
      pageDescription={pageMeta.description}
      breadcrumbs={breadcrumbs}
      relatedLinks={relatedLinks}
      faqs={faqs}
    >
      <section>
        <h2>Why North Cape matters on a cruise itinerary</h2>
        <p>
          North Cape (Nordkapp) marks the northern edge of mainland-accessible
          Europe for most travellers, a symbolic milestone with the famous
          Globe Monument on the Magerøya plateau. For cruise passengers, Honningsvåg
          exists largely to deliver this experience efficiently within ship
          timetables.
        </p>
      </section>

      <section>
        <h2>Is a shore excursion worth booking?</h2>
        <p>
          Often yes when you have three to five hours ashore and want structured
          return planning. Operators understand all-aboard pressure, tunnel
          traffic, and peak-season congestion, but hours ashore alone do not prove
          fit. Compare options on our{" "}
          <Link href="/north-cape-tours">North Cape tours</Link> page and use the{" "}
          <Link href="/#planner">Cruise Smart Planner</Link>.
        </p>
        <p>
          The{" "}
          <Link href="/excursions/north-cape-vip-experience">
            North Cape VIP Experience
          </Link>{" "}
          suits guests wanting king crab, village culture, and Sami elements in
          one premium day.
        </p>
      </section>

      <section>
        <h2>What cruise passengers can realistically see</h2>
        <p>
          Typical tours include Magerøya scenic driving, plateau photo time at
          the Globe Monument, and visits to North Cape Hall when facilities are
          open. Clear weather delivers sweeping Barents Sea panoramas; misty days
          still allow monument and exhibit time.
        </p>
      </section>

      <section>
        <h2>Weather considerations</h2>
        <p>
          Pack windproof layers year-round. Summer can feel mild in Honningsvåg
          yet cold on the exposed plateau. Winter calls favour aurora tours with
          supplied suits. Check our{" "}
          <Link href="/best-time-to-visit-honningsvag">
            best time to visit Honningsvåg
          </Link>{" "}
          guide for midnight sun and northern lights seasons.
        </p>
      </section>

      <section>
        <h2>Sami camp and reindeer, seasonal notes</h2>
        <p>
          Sami camp visits on North Cape tours operate seasonally with reindeer
          when available. Treat these as cultural highlights rather than
          guaranteed wildlife encounters, availability varies by operator and
          month.
        </p>
      </section>

      <section>
        <h2>King crab and wildlife alternatives</h2>
        <p>
          If plateau fog is likely or you prefer active wildlife, consider{" "}
          <Link href="/excursions/gjesvaer-bird-safari">Gjesvær Bird Safari</Link>,{" "}
          <Link href="/king-crab-tours">king crab tours</Link>, or the{" "}
          <Link href="/excursions/coastal-treasures-rib-safari">Arctic RIB safari</Link>{" "}
          instead of a standard coach-only North Cape run.
        </p>
      </section>
    </ContentPage>
  );
}
