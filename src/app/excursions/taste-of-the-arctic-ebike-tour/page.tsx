import type { Metadata } from "next";

import { ExcursionDetailPage } from "@/components/excursion-detail-page";
import { tasteOfTheArcticEbikeTourExcursion } from "@/lib/excursions/taste-of-the-arctic-ebike-tour";
import { buildPageMetadata } from "@/lib/site-metadata";

const excursion = tasteOfTheArcticEbikeTourExcursion;

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
