import type { Metadata } from "next";

import { ExcursionDetailPage } from "@/components/excursion-detail-page";
import { gjesvaerBirdSafariExcursion } from "@/lib/excursions/gjesvaer-bird-safari";
import { buildPageMetadata } from "@/lib/site-metadata";

const excursion = gjesvaerBirdSafariExcursion;

export const metadata: Metadata = buildPageMetadata({
  title: excursion.metaTitle,
  description: excursion.metaDescription,
  path: excursion.path,
  ogImage: excursion.heroImage,
  ogImageAlt: excursion.heroImageAlt,
});

export default function Page() {
  return <ExcursionDetailPage excursion={excursion} />;
}
