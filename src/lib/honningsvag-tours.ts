import { imageAlts, siteImages } from "@/lib/site-images";

export type HonningsvagTourCard = {
  href: string;
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  accent: "blue" | "red";
};

export const honningsvagTourCards: readonly HonningsvagTourCard[] = [
  {
    href: "/excursions/north-cape-vip-experience",
    image: siteImages.northCapeVipTour,
    imageAlt: imageAlts.northCapeVipCard,
    title: "North Cape VIP Experience",
    description:
      "Premium headline tour, North Cape Globe Monument, fishing village, fish factory Arctic village, king crab encounter, seasonal Sami camp, certificate, and sparkling drink. Approx. 5 hours, easy activity.",
    accent: "red",
  },
  {
    href: "/excursions/gjesvaer-bird-safari",
    image: siteImages.gjesvaerBirdSafariTour,
    imageAlt: imageAlts.gjesvaerBirdSafariCard,
    title: "Gjesvær Bird Safari from Honningsvåg",
    description:
      "Wildlife bestseller, puffins, seabirds, Arctic wildlife, cruise-friendly timing, and strong photo opportunities. A unique alternative to standard North Cape coach tours.",
    accent: "blue",
  },
  {
    href: "/excursions/north-cape-king-crab",
    image: siteImages.northCapeKingCrabTour,
    imageAlt: imageAlts.northCapeKingCrabCard,
    title: "North Cape and King Crab Tour",
    description:
      "North Cape plateau, king crab encounter, scenic Arctic drive, panoramic viewpoint, and seasonal Sami family visit. Approx. 3.5 hours, easy activity.",
    accent: "red",
  },
  {
    href: "/excursions/north-cape-sami-camp-viewpoints",
    image: siteImages.northCapeSamiTour,
    imageAlt: imageAlts.northCapeSamiCard,
    title: "North Cape with Sami Camp and Viewpoints",
    description:
      "North Cape highlights with seasonal Sami camp, panoramic ocean viewpoint, and reindeer when available. Approx. 3 hours, easy activity.",
    accent: "blue",
  },
  {
    href: "/excursions/coastal-treasures-rib-safari",
    image: siteImages.coastalRibTour,
    imageAlt: imageAlts.coastalRibCard,
    title: "Coastal Treasures Arctic RIB Safari",
    description:
      "RIB boat adventure, Kjelvik historic village, Nordvågen fishing village, fish factory, puffins, eagles, seals, and dolphins or whales if lucky. Approx. 3 hours, medium activity.",
    accent: "red",
  },
  {
    href: "/excursions/private-arctic-fishing-tour",
    image: siteImages.privateFishingTour,
    imageAlt: imageAlts.privateFishingCard,
    title: "Private Arctic Fishing Tour",
    description:
      "Private fishing for 1 to 6 guests, cod, haddock, plaice, saithe, or halibut with all equipment included. Approx. 3 hours, medium activity.",
    accent: "blue",
  },
  {
    href: "/excursions/taste-of-the-arctic-ebike-tour",
    image: siteImages.ebikeTour,
    imageAlt: imageAlts.ebikeCard,
    title: "Taste of the Arctic E-Bike Tour",
    description:
      "Electric bike tour through fishing village, fish factory, aquarium, king crab, and local flavour tastings. Approx. 2.5 to 3 hours, easy activity.",
    accent: "red",
  },
  {
    href: "/excursions/bruket-nordvagen-arctic-village",
    image: siteImages.bruketNordvagenTour,
    imageAlt: imageAlts.bruketNordvagenCard,
    title: "Bruket Nordvågen Arctic Village Experience",
    description:
      "Fish factory exhibition, stockfish and caviar tasting, king crab aquarium, and Arctic fishing village culture. Approx. 2 hours, easy activity.",
    accent: "blue",
  },
  {
    href: "/excursions/north-cape-midnight-sun",
    image: siteImages.midnightSunTour,
    imageAlt: imageAlts.midnightSunCard,
    title: "North Cape Midnight Sun Experience",
    description:
      "North Cape Globe Monument, midnight sun scenery, and scenic Arctic drive. Seasonal May to August. Approx. 3 hours.",
    accent: "red",
  },
  {
    href: "/excursions/aurora-explorer-northern-lights",
    image: siteImages.auroraTour,
    imageAlt: imageAlts.auroraCard,
    title: "Aurora Explorer Northern Lights Tour",
    description:
      "Northern Lights chase to North Cape Plateau, Sarnes and Kåfjord viewpoints, hot drinks, and winter suits if needed. Approx. 2 to 4 hours, easy activity.",
    accent: "blue",
  },
] as const;

export const honningsvagTourListItems = honningsvagTourCards.map((tour) => ({
  name: tour.title,
  description: tour.description,
}));
