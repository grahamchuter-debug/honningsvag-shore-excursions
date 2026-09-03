import { imageAlts, siteImages } from "@/lib/site-images";

export const siteConfig = {
  name: "Honningsvag Shore Excursions",
  url: "https://honningsvagshoreexcursions.com",
  locale: "en_GB",
  tagline: "North Cape plateau day, local wildlife, or a shorter village outing",
  portName: "Honningsvåg",
  portGuidePath: "/honningsvag-port-guide",
  oneDayPath: "/one-day-in-honningsvag",
  worthVisitingPath: "/is-north-cape-worth-visiting",
  defaultDescription:
    "Independent Honningsvåg cruise-port planning: North Cape plateau days, Gjesvær bird safaris, king crab and village time, and published ship schedules for your hours ashore.",
  defaultOgImage: siteImages.hero,
  defaultOgImageAlt: imageAlts.hero,
  copyrightEntity: "Honningsvag Shore Excursions",
  shoreExcursionsPath: "/excursions",
  plannerPath: "/one-day-in-honningsvag",
  schedulePath: "/ship-schedule",
  nationalAuthorityUrl: "https://norwayshoreexcursions.com",
  contactEmail: "hello@honningsvagshoreexcursions.com",
  contactEmailVerified: true,
} as const;
