/**
 * Image provenance registry for Honningsvag Shore Excursions.
 * NEW IMAGE SOURCING IS NOT AUTHORISED without verified rights.
 */

export type ImageProvenance = {
  key: string;
  urlOrPath: string;
  status:
    | "KEEP"
    | "REPLACE"
    | "WRONG_LOCATION"
    | "DUPLICATE"
    | "PROVENANCE_UNKNOWN"
    | "BROKEN";
  notes: string;
};

export const honningsvagImageProvenance: readonly ImageProvenance[] = [
  {
    key: "hero",
    urlOrPath:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Globe_Monument_at_Nordkapp.jpg/1280px-Globe_Monument_at_Nordkapp.jpg",
    status: "KEEP",
    notes: "Wikimedia Commons. North Cape Globe Monument. Rights later-hardening.",
  },
  {
    key: "honningsvagHarbour",
    urlOrPath:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Puerto_de_Honningsv%C3%A5g%2C_Noruega%2C_2019-09-03%2C_DD_88.jpg/1280px-Puerto_de_Honningsv%C3%A5g%2C_Noruega%2C_2019-09-03%2C_DD_88.jpg",
    status: "KEEP",
    notes: "Wikimedia Commons. Honningsvåg harbour.",
  },
  {
    key: "gjesvaerBirdSafari",
    urlOrPath:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Bird_safari_Gjesv%C3%A6r_2025-07-31_IMG_3875.jpg/1280px-Bird_safari_Gjesv%C3%A6r_2025-07-31_IMG_3875.jpg",
    status: "KEEP",
    notes: "Wikimedia Commons. Gjesvær bird safari.",
  },
  {
    key: "kingCrabHonningsvag",
    urlOrPath:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Restaurant_King_Crab_House%2C_Honningsv%C3%A5g_%28July_2018%29.jpg/1280px-Restaurant_King_Crab_House%2C_Honningsv%C3%A5g_%28July_2018%29.jpg",
    status: "KEEP",
    notes: "Wikimedia Commons. King Crab House, Honningsvåg.",
  },
  {
    key: "northernLightsLauklines",
    urlOrPath:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Northern_Lights_at_Lauklines_Norway.jpg/1280px-Northern_Lights_at_Lauklines_Norway.jpg",
    status: "WRONG_LOCATION",
    notes:
      "Lauklines is Tromsø-area, not Honningsvåg local. Removed from aurora hero/gallery rendering. Prefer harbour / North Cape / Gjesvær assets already in repo. Key retained only for provenance audit.",
  },
  {
    key: "auroraTour",
    urlOrPath:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Rocky_cliff_nearby_Nordkapp.jpg/1280px-Rocky_cliff_nearby_Nordkapp.jpg",
    status: "KEEP",
    notes:
      "Remounted aurora presentation to North Cape cliff asset already in repo. Alt text describes aurora chase viewpoints, not guaranteed lights.",
  },
  {
    key: "sisterPortCards",
    urlOrPath:
      "src/lib/site-images.ts flam/bergen/stavanger/alesund related-port cards",
    status: "KEEP",
    notes:
      "Related-port assets in explore-norwegian-ports. Not labelled as Honningsvåg local.",
  },
] as const;
