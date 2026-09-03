import type { ExcursionData } from "@/lib/excursion-types";
import { imageAlts, siteImages } from "@/lib/site-images";

export const northCapeMidnightSunExcursion: ExcursionData = {
  slug: "north-cape-midnight-sun",
  path: "/excursions/north-cape-midnight-sun",
  title: "Midnight Sun",
  headline: "North Cape Midnight Sun Experience",
  lead: "Seasonal May to August tour to North Cape with Globe Monument and scenic Arctic drive under summer light when conditions allow, approx. 3 hours. Midnight sun visibility is weather-dependent.",
  metaTitle: "North Cape Midnight Sun Experience from Honningsvåg",
  metaDescription:
    "North Cape midnight sun shore excursion May to August from Honningsvåg. Globe Monument, scenic drive, and Arctic summer light for cruise passengers.",
  heroImage: siteImages.midnightSunTour,
  heroImageAlt: imageAlts.midnightSunCard,
  heroBadge: "Seasonal May to August",
  summary: {
    duration: "Approx. 3 hours",
    meetingPoint:
      "Central Honningsvåg near cruise berths, harbour, or designated coach pickup",
    returnReassurance:
      "Plan with a clear return buffer; hours ashore alone do not prove fit",
    bestFor:
      "Cruise passengers seeking a seasonal North Cape summer-light outing with careful return planning",
  },
  snapshotCards: [
    { label: "Activity level", value: "Easy activity level" },
    { label: "Region", value: "Honningsvåg, Magerøya & North Cape" },
    { label: "Season", value: "Year-round, confirm seasonal tours on booking" },
    { label: "Focus", value: "Midnight Sun" },
  ],
  gallery: [
    { src: siteImages.midnightSun, alt: imageAlts.midnightSun },
    { src: siteImages.northCapeGlobe, alt: imageAlts.northCapeGlobe },
    { src: siteImages.northCapeCliffs, alt: imageAlts.northCapeCliffs },
    { src: siteImages.mageroyaTundra, alt: imageAlts.mageroyaTundra },
  ],
  highlights: [
    "North Cape under Arctic summer light (midnight sun when conditions allow)",
    "Globe Monument visit",
    "Scenic Arctic drive on Magerøya",
    "Seasonal May to August departures",
    "Photography of Arctic summer daylight when skies are clear",
  ],
  description: [
    "North Cape Midnight Sun Experience is designed for cruise passengers calling at Honningsvåg who want a structured Arctic day without guessing Magerøya drive times or meeting points. Operators usually coordinate departures near the harbour, but you still need a realistic buffer before all aboard.",
    "Your guide connects Honningsvåg's fishing heritage, Sami culture where seasonal camps operate, and the dramatic North Cape plateau scenery that defines this northernmost mainstream cruise port in Norway. Commentary helps you understand what you are seeing, from king crab handling to seabird colonies and midnight sun or aurora conditions depending on season.",
    "Confirm exact departure and return times on your voucher the night before. Published hours ashore do not prove this outing will fit every call. Multiple ships sharing Honningsvåg, or Arctic weather on Magerøya, can stretch returns.",
    "Operators commonly quote about 3 hours for midnight sun experiences, but you still need a confirmed return margin. Pair it with our port guide and one-day itinerary pages if you are planning a longer stay or a second call at Honningsvåg on a repositioning cruise.",
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
      question: "How long is the North Cape Midnight Sun Experience?",
      answer:
        "Most operators run Approx. 3 hours including transport, sightseeing stops, and return to Honningsvåg cruise berths. Confirm exact timings on your booking voucher.",
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
    { label: "Midnight Sun" },
  ],
  relatedLinks: [
    { label: "Honningsvåg port guide", href: "/honningsvag-port-guide" },
    { label: "One day in Honningsvåg", href: "/one-day-in-honningsvag" },
    { label: "All excursions", href: "/excursions" },
  ],
  bookingHref: "/excursions",
  bookingLabel: "Explore this excursion",
  ctaTitle: "Read the North Cape Midnight Sun Experience notes, then compare other options",
  ctaText:
    "Use these notes to judge fit for your hours ashore. This site does not sell tickets. Arrange tours through operators or your usual booking channel.",
};
