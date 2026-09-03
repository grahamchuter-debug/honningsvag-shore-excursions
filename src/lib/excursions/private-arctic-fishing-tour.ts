import type { ExcursionData } from "@/lib/excursion-types";
import { imageAlts, siteImages } from "@/lib/site-images";

export const privateArcticFishingTourExcursion: ExcursionData = {
  slug: "private-arctic-fishing-tour",
  path: "/excursions/private-arctic-fishing-tour",
  title: "Private Arctic Fishing",
  headline: "Private Arctic Fishing Tour",
  lead: "Private fishing excursion for 1 to 6 guests targeting cod, haddock, plaice, saithe, or halibut with all equipment included, approx. 3 hours, medium activity.",
  metaTitle: "Private Arctic Fishing Tour from Honningsvåg",
  metaDescription:
    "Private Arctic fishing from Honningsvåg for 1 to 6 cruise passengers. Cod, haddock, plaice, saithe, or halibut with equipment included.",
  heroImage: siteImages.privateFishingTour,
  heroImageAlt: imageAlts.privateFishingCard,
  summary: {
    duration: "Approx. 3 hours",
    meetingPoint:
      "Central Honningsvåg near cruise berths, harbour, or designated coach pickup",
    returnReassurance:
      "Plan with a clear return buffer; hours ashore alone do not prove fit",
    bestFor:
      "Cruise passengers seeking private arctic fishing experiences with clear return-to-ship planning",
  },
  snapshotCards: [
    { label: "Activity level", value: "Medium activity level" },
    { label: "Region", value: "Honningsvåg, Magerøya & North Cape" },
    { label: "Season", value: "Year-round, confirm seasonal tours on booking" },
    { label: "Focus", value: "Private Arctic Fishing" },
  ],
  gallery: [
    { src: siteImages.fishingVillage, alt: imageAlts.fishingVillage },
    { src: siteImages.honningsvagHarbour, alt: imageAlts.honningsvagHarbour },
    { src: siteImages.mageroyaTundra, alt: imageAlts.mageroyaTundra },
    { src: siteImages.northCapeCliffs, alt: imageAlts.northCapeCliffs },
  ],
  highlights: [
    "Private boat for 1 to 6 guests",
    "Cod, haddock, plaice, saithe, or halibut",
    "All fishing equipment included",
    "Flexible pacing for families and small groups",
    "Authentic Arctic coastal experience",
  ],
  description: [
    "Private Arctic Fishing Tour is designed for cruise passengers calling at Honningsvåg who want a structured Arctic day without guessing Magerøya drive times or meeting points. Operators coordinate departures near the harbour so you maximise time ashore while keeping a realistic buffer before all aboard.",
    "Your guide connects Honningsvåg's fishing heritage, Sami culture where seasonal camps operate, and the dramatic North Cape plateau scenery that defines this northernmost mainstream cruise port in Norway. Commentary helps you understand what you are seeing, from king crab handling to seabird colonies and midnight sun or aurora conditions depending on season.",
    "Confirm exact departure and return times on your voucher the night before. Published hours ashore do not prove this outing will fit every call. Multiple ships sharing Honningsvåg, or Arctic weather on Magerøya, can stretch returns.",
    "Operators commonly quote about 3 hours for private arctic fishing experiences, but you still need a confirmed return margin. Pair it with our port guide and one-day itinerary pages if you are planning a longer stay or a second call at Honningsvåg on a repositioning cruise.",
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
  ],
  timingAdvice: [
    "Match this tour to the hours shown in the Cruise Smart Planner on our homepage before booking.",
    "Disembark promptly when Honningsvåg is busy, popular North Cape and wildlife departures fill quickly.",
    "Allow 45 minutes before all aboard for coach returns across Magerøya; Arctic weather can delay traffic.",
    "Pack warm layers, windproof jacket, and gloves year-round, exposed plateau and coastal stops are breezy even in summer.",
  ],
  faqs: [
    {
      question: "How long is the Private Arctic Fishing Tour?",
      answer:
        "Most operators run Approx. 3 hours including transport, sightseeing stops, and return to Honningsvåg cruise berths. Confirm exact timings on your booking voucher.",
    },
    {
      question: "Is this tour suitable for cruise passengers with limited mobility?",
      answer:
        "Activity level is medium activity level. Contact the operator before booking if you use a wheelchair or need step-free access, North Cape facilities vary by season.",
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
    { label: "Private Arctic Fishing" },
  ],
  relatedLinks: [
    { label: "Honningsvåg port guide", href: "/honningsvag-port-guide" },
    { label: "One day in Honningsvåg", href: "/one-day-in-honningsvag" },
    { label: "All excursions", href: "/excursions" },
  ],
  bookingHref: "/excursions",
  bookingLabel: "Explore this excursion",
  ctaTitle: "Read the Private Arctic Fishing Tour notes, then compare other options",
  ctaText:
    "Use these notes to judge fit for your hours ashore. This site does not sell tickets. Arrange tours through operators or your usual booking channel.",
};
