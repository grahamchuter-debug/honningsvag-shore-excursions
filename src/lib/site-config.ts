import { imageAlts, siteImages } from "@/lib/site-images";

export const siteConfig = {
  name: "Honningsvag Shore Excursions",
  url: "https://honningsvagshoreexcursions.com",
  locale: "en_GB",
  portName: "Honningsvåg",
  portGuidePath: "/honningsvag-port-guide",
  oneDayPath: "/one-day-in-honningsvag",
  worthVisitingPath: "/is-north-cape-worth-visiting",
  defaultDescription:
    "Independent Honningsvåg cruise port guides and North Cape shore excursion planning for passengers visiting Arctic Norway, king crab, Sami culture, bird safaris, midnight sun, and northern lights tours.",
  defaultOgImage: siteImages.hero,
  defaultOgImageAlt: imageAlts.hero,
  copyrightEntity: "Honningsvag Shore Excursions",
  shoreExcursionsPath: "/excursions",
} as const;
