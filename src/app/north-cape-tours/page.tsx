import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { buildPageMetadata } from "@/lib/site-metadata";
import { imageAlts, siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "North Cape Shore Excursions & Tours from Honningsvåg",
  description:
    "Compare North Cape shore excursions from Honningsvåg: VIP experience, king crab tours, Sami camp, midnight sun, and standard plateau tours for cruise passengers.",
  path: "/north-cape-tours",
  ogImage: siteImages.northCapeTours,
  ogImageAlt: imageAlts.northCapeTours,
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "North Cape Tours" },
] as const;

const relatedLinks = [
  { label: "Is North Cape worth visiting?", href: "/is-north-cape-worth-visiting" },
  { label: "King crab tours", href: "/king-crab-tours" },
  { label: "All excursions", href: "/excursions" },
] as const;

const faqs = [
  {
    question: "What is the best North Cape shore excursion from Honningsvåg?",
    answer:
      "The North Cape VIP Experience is the premium headline tour for guests with four to five hours or more. Shorter calls suit North Cape with Sami Camp or North Cape and King Crab tours.",
  },
  {
    question: "How long are North Cape tours from the cruise port?",
    answer:
      "Most range from three to five hours including Magerøya driving and plateau time. Confirm exact return times on your voucher.",
  },
  {
    question: "Are North Cape cruise excursions different from ship tours?",
    answer:
      "Independent operators often offer similar routes with different group sizes and pricing, you manage your own return-to-ship timing either way.",
  },
] as const;

export default function NorthCapeToursPage() {
  return (
    <ContentPage
      title="North Cape Tours from Honningsvåg"
      lead="Compare North Cape shore excursions, North Cape cruise tours, and Honningsvåg departures, from VIP cultural experiences to midnight sun and classic plateau visits."
      heroImage={pageMeta.ogImage}
      heroImageAlt={pageMeta.ogImageAlt}
      pagePath={pageMeta.path}
      pageDescription={pageMeta.description}
      breadcrumbs={breadcrumbs}
      relatedLinks={relatedLinks}
      faqs={faqs}
    >
      <section>
        <h2>North Cape shore excursions overview</h2>
        <p>
          Every major Honningsvåg cruise call centres on North Cape access across
          Magerøya. Structured shore excursions bundle tunnel driving, plateau
          time at the Globe Monument, and return scheduling for typical port
          windows.
        </p>
      </section>

      <section>
        <h2>Premium North Cape VIP Experience</h2>
        <p>
          The{" "}
          <Link href="/excursions/north-cape-vip-experience">
            North Cape VIP Experience
          </Link>{" "}
          adds fishing village, fish factory, king crab, seasonal Sami camp,
          certificate, and refreshments, approx. five hours, easy activity.
        </p>
      </section>

      <section>
        <h2>Classic North Cape cruise excursions (3 to 4 hours)</h2>
        <ul>
          <li>
            <Link href="/excursions/north-cape-king-crab">
              North Cape and King Crab Tour
            </Link>{" "}
           , approx. 3.5 hours
          </li>
          <li>
            <Link href="/excursions/north-cape-sami-camp-viewpoints">
              North Cape with Sami Camp and Viewpoints
            </Link>{" "}
           , approx. 3 hours
          </li>
        </ul>
      </section>

      <section>
        <h2>Seasonal North Cape experiences</h2>
        <p>
          Summer guests may book the{" "}
          <Link href="/excursions/north-cape-midnight-sun">
            North Cape Midnight Sun Experience
          </Link>{" "}
          (May to August). Winter sailings target the{" "}
          <Link href="/excursions/aurora-explorer-northern-lights">
            Aurora Explorer Northern Lights Tour
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Planning your North Cape tour day</h2>
        <p>
          Read{" "}
          <Link href="/is-north-cape-worth-visiting">
            is North Cape worth visiting
          </Link>
          , the <Link href="/honningsvag-port-guide">port guide</Link>, and use
          the <Link href="/#planner">Cruise Smart Planner</Link> to match tour
          length to all-aboard time.
        </p>
      </section>
    </ContentPage>
  );
}
