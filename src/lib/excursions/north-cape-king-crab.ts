import type { ExcursionData } from "@/lib/excursion-types";
import { imageAlts, siteImages } from "@/lib/site-images";

export const northCapeKingCrabExcursion: ExcursionData = {
  slug: "north-cape-king-crab",
  path: "/excursions/north-cape-king-crab",
  title: "North Cape & King Crab",
  headline: "North Cape and King Crab Tour",
  lead: "Classic North Cape shore excursion with king crab encounter, scenic Arctic drive, panoramic viewpoint, and seasonal Sami family visit, approx. 3.5 hours, easy activity.",
  metaTitle: "North Cape and King Crab Tour from Honningsvåg",
  metaDescription:
    "North Cape and king crab shore excursion from Honningsvåg. Scenic Magerøya drive, panoramic viewpoints, seasonal Sami family, and cruise-friendly timing.",
  heroImage: siteImages.northCapeKingCrabTour,
  heroImageAlt: imageAlts.northCapeKingCrabCard,
  summary: {
    duration: "Approx. 3.5 hours",
    meetingPoint:
      "Central Honningsvåg near cruise berths, harbour, or designated coach pickup",
    returnReassurance:
      "Plan with a clear return buffer; hours ashore alone do not prove fit",
    bestFor:
      "Cruise passengers seeking north cape & king crab experiences with clear return-to-ship planning",
  },
  snapshotCards: [
    { label: "Activity level", value: "Easy activity level" },
    { label: "Region", value: "Honningsvåg, Magerøya & North Cape" },
    { label: "Season", value: "Year-round, confirm seasonal tours on booking" },
    { label: "Focus", value: "North Cape & King Crab" },
  ],
  gallery: [
    { src: siteImages.northCapeGlobe, alt: imageAlts.northCapeGlobe },
    { src: siteImages.kingCrab, alt: imageAlts.kingCrab },
    { src: siteImages.northCapeCliffs, alt: imageAlts.northCapeCliffs },
    { src: siteImages.samiReindeer, alt: imageAlts.samiReindeer },
  ],
  highlights: [
    "North Cape plateau and Globe Monument area",
    "King crab encounter",
    "Scenic Arctic drive across Magerøya",
    "Panoramic ocean viewpoint",
    "Seasonal Sami family visit",
  ],
  description: [
    "North Cape and King Crab Tour is designed for cruise passengers calling at Honningsvåg who want a structured Arctic day without guessing Magerøya drive times or meeting points. Operators usually coordinate departures near the harbour, but you still need a realistic buffer before all aboard.",
    "Your guide connects Honningsvåg's fishing heritage, Sami culture where seasonal camps operate, and the dramatic North Cape plateau scenery that defines this northernmost mainstream cruise port in Norway. Commentary helps you understand what you are seeing, from king crab handling to seabird colonies and midnight sun or aurora conditions depending on season.",
    "Confirm exact departure and return times on your voucher the night before. Published hours ashore do not prove this outing will fit every call. Multiple ships sharing Honningsvåg, or Arctic weather on Magerøya, can stretch returns.",
    "Operators commonly quote about 3.5 hours for north cape & king crab experiences, but you still need a confirmed return margin. Pair it with our port guide and one-day itinerary pages if you are planning a longer stay or a second call at Honningsvåg on a repositioning cruise.",
  ],
  included: [
    "Guided touring as described in the published itinerary",
    "Transport from Honningsvåg meeting points unless stated otherwise",
    "Commentary from local Arctic guides",
  ],
  notIncluded: [
    "Food and drinks unless stated by operator",
    "Personal purchases and optional upgrades",
    "Travel insurance and personal expenses",
    "Gratuities unless stated by operator",
    "North Cape plateau entrance fees unless your operator voucher expressly includes them",
  ],
  timingAdvice: [
    "Match this tour to the hours shown in the Cruise Smart Planner on our homepage before booking.",
    "Disembark promptly when Honningsvåg is busy, popular North Cape and wildlife departures fill quickly.",
    "Allow 45 minutes before all aboard for coach returns across Magerøya; Arctic weather can delay traffic.",
    "Pack warm layers, windproof jacket, and gloves year-round, exposed plateau and coastal stops are breezy even in summer.",
  ],
  faqs: [
    {
      question: "How long is the North Cape and King Crab Tour?",
      answer:
        "Most operators run Approx. 3.5 hours including transport, sightseeing stops, and return to Honningsvåg cruise berths. Confirm exact timings on your booking voucher.",
    },
    {
      question: "Is this tour suitable for cruise passengers with limited mobility?",
      answer:
        "Activity level is easy activity level. Contact the operator before booking if you use a wheelchair or need step-free access, North Cape facilities vary by season.",
    },
    {
      question: "Where is the meeting point in Honningsvåg?",
      answer:
        "Typically central Honningsvåg near cruise piers or a signed coach pickup. Your voucher lists the exact location and departure time.",
    },
    {
      question: "Can I combine this with another Honningsvåg tour the same day?",
      answer:
        "Only on long port calls of six hours or more. Most guests complete one structured excursion per visit. Use the Cruise Smart Planner to check your margin.",
    },
  ],
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Excursions", href: "/excursions" },
    { label: "North Cape & King Crab" },
  ],
  relatedLinks: [
    { label: "Honningsvåg port guide", href: "/honningsvag-port-guide" },
    { label: "One day in Honningsvåg", href: "/one-day-in-honningsvag" },
    { label: "All excursions", href: "/excursions" },
  ],
  bookingHref: "/excursions",
  bookingLabel: "Explore this excursion",
  ctaTitle: "Read the North Cape and King Crab Tour notes, then compare other options",
  ctaText:
    "Use these notes to judge fit for your hours ashore. This site does not sell tickets. Arrange tours through operators or your usual booking channel.",
};
