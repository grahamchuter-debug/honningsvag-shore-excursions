import type { ExcursionData } from "@/lib/excursion-types";
import { imageAlts, siteImages } from "@/lib/site-images";

export const coastalTreasuresRibSafariExcursion: ExcursionData = {
  slug: "coastal-treasures-rib-safari",
  path: "/excursions/coastal-treasures-rib-safari",
  title: "Arctic RIB Safari",
  headline: "Coastal Treasures Arctic RIB Safari",
  lead: "Adventure RIB boat safari visiting Kjelvik historic village, Nordvågen fishing village, fish factory, and Arctic wildlife including puffins, eagles, seals, and dolphins or whales if lucky, approx. 3 hours, medium activity.",
  metaTitle: "Coastal Treasures Arctic RIB Safari from Honningsvåg",
  metaDescription:
    "Arctic RIB safari from Honningsvåg with fishing villages, fish factory visit, puffins, eagles, seals, and marine wildlife. Medium activity, approx. 3 hours.",
  heroImage: siteImages.coastalRibTour,
  heroImageAlt: imageAlts.coastalRibCard,
  heroBadge: "Adventure RIB wildlife safari",
  summary: {
    duration: "Approx. 3 hours",
    meetingPoint:
      "Central Honningsvåg near cruise berths, harbour, or designated coach pickup",
    returnReassurance:
      "Timed for typical Honningsvåg port calls with buffer before all aboard",
    bestFor:
      "Cruise passengers seeking arctic rib safari experiences with clear return-to-ship planning",
  },
  snapshotCards: [
    { label: "Activity level", value: "Medium activity level" },
    { label: "Region", value: "Honningsvåg, Magerøya & North Cape" },
    { label: "Season", value: "Year-round, confirm seasonal tours on booking" },
    { label: "Focus", value: "Arctic RIB Safari" },
  ],
  gallery: [
    { src: siteImages.ribBoat, alt: imageAlts.ribBoat },
    { src: siteImages.puffin, alt: imageAlts.puffin },
    { src: siteImages.fishingVillage, alt: imageAlts.fishingVillage },
    { src: siteImages.honningsvagHarbour, alt: imageAlts.honningsvagHarbour },
  ],
  highlights: [
    "RIB boat coastal safari",
    "Kjelvik historic village",
    "Nordvågen fishing village and fish factory",
    "Puffins, eagles, seals, and marine wildlife if lucky",
    "Adventure-focused alternative to coach touring",
  ],
  description: [
    "Coastal Treasures Arctic RIB Safari is designed for cruise passengers calling at Honningsvåg who want a structured Arctic day without guessing Magerøya drive times or meeting points. Operators coordinate departures near the harbour so you maximise time ashore while keeping a realistic buffer before all aboard.",
    "Your guide connects Honningsvåg's fishing heritage, Sami culture where seasonal camps operate, and the dramatic North Cape plateau scenery that defines this northernmost mainstream cruise port in Norway. Commentary helps you understand what you are seeing, from king crab handling to seabird colonies and midnight sun or aurora conditions depending on season.",
    "The itinerary is paced for typical port calls listed in our Cruise Smart Planner. Confirm exact departure and return times on your voucher the night before, especially when multiple ships share Honningsvåg on the same day or Arctic weather slows coach traffic on Magerøya.",
    "This tour fits the Approx. 3 hours window most guests expect for arctic rib safari experiences. Pair it with our port guide and one-day itinerary pages if you are planning a longer stay or a second call at Honningsvåg on a repositioning cruise.",
  ],
  included: [
    "Guided touring as described in the published itinerary",
    "Transport from Honningsvåg meeting points unless stated otherwise",
    "Commentary from local Arctic guides",
    "Route paced for typical cruise port timings",
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
      question: "How long is the Coastal Treasures Arctic RIB Safari?",
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
    { label: "Arctic RIB Safari" },
  ],
  relatedLinks: [
    { label: "Honningsvåg port guide", href: "/honningsvag-port-guide" },
    { label: "One day in Honningsvåg", href: "/one-day-in-honningsvag" },
    { label: "All excursions", href: "/excursions" },
  ],
  bookingHref: "/excursions",
  bookingLabel: "Book this excursion",
  ctaTitle: "Ready to book Coastal Treasures Arctic RIB Safari?",
  ctaText:
    "Secure your place before port day and explore more North Cape and Arctic wildlife tours built around your ship's timetable.",
};
