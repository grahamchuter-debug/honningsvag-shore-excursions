import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { buildPageMetadata } from "@/lib/site-metadata";
import { imageAlts, siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "Honningsvåg Cruise Port Guide for Shore Excursions",
  description:
    "Honningsvåg cruise port guide: pier locations, walking distance to town, meeting points, North Cape travel times, tender notes, Arctic weather clothing, and return-to-ship buffer advice.",
  path: "/honningsvag-port-guide",
  ogImage: siteImages.portGuide,
  ogImageAlt: imageAlts.portGuide,
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Honningsvåg Port Guide" },
] as const;

const relatedLinks = [
  { label: "Shore excursions", href: "/excursions" },
  { label: "One day in Honningsvåg", href: "/one-day-in-honningsvag" },
  { label: "Is North Cape worth visiting?", href: "/is-north-cape-worth-visiting" },
  { label: "Cruise Smart Planner", href: "/#planner" },
] as const;

const faqs = [
  {
    question: "How far is Honningsvåg town from the cruise pier?",
    answer:
      "Most berths are within 5 to 15 minutes on foot of the harbour, shops, and excursion meeting points. Confirm your exact pier on the ship's app.",
  },
  {
    question: "How long is the drive from Honningsvåg to North Cape?",
    answer:
      "Typically 30 to 45 minutes each way across Magerøya, plus time at the Globe Monument. Allow extra buffer in snow, fog, or peak summer traffic.",
  },
  {
    question: "Do cruise ships tender in Honningsvåg?",
    answer:
      "Most large ships dock at the harbour, but tender operations can occur when berths are full. Check your ship's plan and add 15 to 20 minutes each way if tendering.",
  },
  {
    question: "What should cruise passengers wear in Honningsvåg?",
    answer:
      "Layer windproof jackets, warm mid-layers, gloves, and hat year-round. Even summer days are cool on the North Cape plateau. Waterproof footwear helps on wet pier days.",
  },
] as const;

export default function HonningsvagPortGuidePage() {
  return (
    <ContentPage
      title="Honningsvåg Port Guide for Cruise Passengers"
      lead="Navigate Honningsvåg cruise port, harbour berths, walking routes, excursion meeting points, Magerøya drive times to North Cape, tender notes, Arctic weather, and how to return to your ship on time."
      heroImage={pageMeta.ogImage}
      heroImageAlt={pageMeta.ogImageAlt}
      pagePath={pageMeta.path}
      pageDescription={pageMeta.description}
      breadcrumbs={breadcrumbs}
      relatedLinks={relatedLinks}
      faqs={faqs}
    >
      <section>
        <h2>Honningsvåg cruise port location</h2>
        <p>
          Honningsvåg sits on the southern shore of Magerøya island in Finnmark , 
          Norway&apos;s gateway port for North Cape. Cruise ships typically berth
          along the harbour within walking distance of the compact town centre,
          excursion coaches, and waterfront cafés.
        </p>
        <p>
          Confirm your exact pier assignment on the ship&apos;s app the night
          before arrival. Berths can change when several vessels share the port
          on peak Arctic summer days.
        </p>
      </section>

      <section>
        <h2>Walking distance to town and meeting points</h2>
        <p>
          Most passengers reach shops, tourist information, and shore excursion
          pickups within minutes on foot. Operators usually meet at signed coach
          stands near the harbour or at central hotels, your voucher lists the
          precise location and departure time.
        </p>
        <p>
          If you tender, factor in tender queue time both ways before booking a
          fixed-departure North Cape tour.
        </p>
      </section>

      <section>
        <h2>North Cape travel time considerations</h2>
        <p>
          North Cape lies at the northern tip of Magerøya. Coach tours cross the
          island on the undersea tunnel route with scenic plateau approaches.
          Budget roughly one hour of driving round trip plus 60 to 90 minutes at
          the monument area for a standard three-hour North Cape tour.
        </p>
        <p>
          Longer experiences such as the{" "}
          <Link href="/excursions/north-cape-vip-experience">
            North Cape VIP Experience
          </Link>{" "}
          add village, king crab, and Sami stops, and plan five hours ashore minimum.
        </p>
      </section>

      <section>
        <h2>Weather, clothing, and Arctic conditions</h2>
        <p>
          Honningsvåg weather shifts quickly. Fog, wind, and low cloud can
          obscure North Cape views without cancelling tours. Pack layers and
          windproof outerwear even in July. Winter calls require insulated boots
          and consider aurora tours that supply suits.
        </p>
        <p>
          Midnight sun sailings (May to August) bring continuous daylight. See our{" "}
          <Link href="/best-time-to-visit-honningsvag">best time to visit</Link>{" "}
          guide for seasonal planning.
        </p>
      </section>

      <section>
        <h2>Return-to-ship buffer advice</h2>
        <p>
          Aim to be at the gangway 45 minutes before all aboard when you book
          North Cape coach tours. Arctic road conditions and multiple ships in
          port can delay coach returns. Use the{" "}
          <Link href="/#planner">Cruise Smart Planner</Link> to match excursions
          to your published hours ashore.
        </p>
      </section>
    </ContentPage>
  );
}
