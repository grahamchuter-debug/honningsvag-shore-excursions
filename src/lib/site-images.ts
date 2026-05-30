/** Verified Wikimedia Commons thumb URLs (HTTP 200). */

const globeMonument =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Globe_Monument_at_Nordkapp.jpg/1280px-Globe_Monument_at_Nordkapp.jpg";
const northCapeCliff =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Rocky_cliff_nearby_Nordkapp.jpg/1280px-Rocky_cliff_nearby_Nordkapp.jpg";
const honningsvagHarbour =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Puerto_de_Honningsv%C3%A5g%2C_Noruega%2C_2019-09-03%2C_DD_88.jpg/1280px-Puerto_de_Honningsv%C3%A5g%2C_Noruega%2C_2019-09-03%2C_DD_88.jpg";
const mageroyaTundra =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Mager%C3%B8ya_lub_2025-07-17_img01.jpg/1280px-Mager%C3%B8ya_lub_2025-07-17_img01.jpg";
const atlanticPuffin =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Atlantic_Puffin_Fratercula_arctica.jpg/1280px-Atlantic_Puffin_Fratercula_arctica.jpg";
const gjesvaerBirdSafari =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Bird_safari_Gjesv%C3%A6r_2025-07-31_IMG_3875.jpg/1280px-Bird_safari_Gjesv%C3%A6r_2025-07-31_IMG_3875.jpg";
const kingCrabHonningsvag =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Restaurant_King_Crab_House%2C_Honningsv%C3%A5g_%28July_2018%29.jpg/1280px-Restaurant_King_Crab_House%2C_Honningsv%C3%A5g_%28July_2018%29.jpg";
const mageroyaReindeer =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Mager%C3%B8ya_Reindeer_along_the_E69_Norway_16.jpg/1280px-Mager%C3%B8ya_Reindeer_along_the_E69_Norway_16.jpg";
const midnightSunGlobe =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Midnight_sun_at_the_Nordkapp_Globe_Monument_2024-07-22.jpg/1280px-Midnight_sun_at_the_Nordkapp_Globe_Monument_2024-07-22.jpg";
const northernLights =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Northern_Lights_at_Lauklines_Norway.jpg/1280px-Northern_Lights_at_Lauklines_Norway.jpg";
const northCapePanorama =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Norway%2C_North_Cape.jpg/1280px-Norway%2C_North_Cape.jpg";
const nordkappPlateau =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Nordkapp_Plateau_%2852583512974%29.jpg/1280px-Nordkapp_Plateau_%2852583512974%29.jpg";

export const siteImages = {
  hero: globeMonument,
  northCapeGlobe: globeMonument,
  northCapeCliffs: northCapeCliff,
  honningsvagHarbour,
  mageroyaTundra,
  puffin: atlanticPuffin,
  gjesvaerPuffins: gjesvaerBirdSafari,
  kingCrab: kingCrabHonningsvag,
  samiReindeer: mageroyaReindeer,
  midnightSun: midnightSunGlobe,
  northernLights,
  ribBoat: honningsvagHarbour,
  fishingVillage: mageroyaTundra,
  portGuide: honningsvagHarbour,
  worthVisiting: northCapeCliff,
  oneDay: globeMonument,
  bestTime: midnightSunGlobe,
  birdSafaris: gjesvaerBirdSafari,
  northCapeTours: globeMonument,
  kingCrabTours: kingCrabHonningsvag,
  northCapeVipTour: globeMonument,
  gjesvaerBirdSafariTour: gjesvaerBirdSafari,
  northCapeKingCrabTour: kingCrabHonningsvag,
  northCapeSamiTour: mageroyaReindeer,
  coastalRibTour: northCapeCliff,
  privateFishingTour: honningsvagHarbour,
  ebikeTour: mageroyaTundra,
  bruketNordvagenTour: kingCrabHonningsvag,
  midnightSunTour: midnightSunGlobe,
  auroraTour: northernLights,
  northCapePanorama,
  nordkappPlateau,
  flamPortCard:
    "https://upload.wikimedia.org/wikipedia/commons/5/56/Fl%C3%A5m_fr%C3%A5_cruiseskip_ved_kai.jpg",
  bergenPortCard:
    "https://upload.wikimedia.org/wikipedia/commons/f/fe/Harbour_Bergen_Norway_2009_5.jpg",
  stavangerPortCard:
    "https://upload.wikimedia.org/wikipedia/commons/3/3a/Stavanger_havn.jpg",
  alesundPortCard:
    "https://upload.wikimedia.org/wikipedia/commons/c/c7/%C3%85lesund_Hafen_lub_2025-07-28_img04.jpg",
  geirangerPortCard:
    "https://upload.wikimedia.org/wikipedia/commons/1/10/Flydalsjuvet_Geiranger_Geirangerfjorden.jpg",
  oldenPortCard:
    "https://upload.wikimedia.org/wikipedia/commons/c/ca/Briksdalsbreen_Glacier_-Norway.jpg",
  eidfjordPortCard:
    "https://upload.wikimedia.org/wikipedia/commons/b/b6/Voringsfossen_waterfall_at_Eidfjord%2C_Norway.jpg",
  moldePortCard:
    "https://upload.wikimedia.org/wikipedia/commons/b/b5/Molde_Hafen.jpg",
} as const;

export const imageAlts = {
  hero: "Globe Monument at North Cape on Magerøya, Honningsvåg Shore Excursions",
  northCapeGlobe:
    "Globe Monument at North Cape with Arctic plateau and Barents Sea horizon",
  northCapeCliffs:
    "Rocky cliff near North Cape with Arctic coastline on Magerøya island",
  honningsvagHarbour:
    "Honningsvåg cruise harbour with ships at the pier, shore excursion port",
  mageroyaTundra:
    "Arctic tundra and coastal scenery on Magerøya near Honningsvåg",
  puffin:
    "Atlantic puffin on coastal cliffs, Arctic seabird near Honningsvåg",
  gjesvaerPuffins:
    "Gjesvær bird safari seabird cliffs near Honningsvåg, Norway",
  kingCrab:
    "King Crab House restaurant in Honningsvåg, Arctic king crab experience",
  samiReindeer:
    "Reindeer along the E69 road on Magerøya near Honningsvåg",
  midnightSun:
    "Midnight sun at the North Cape Globe Monument, summer Arctic cruise",
  northernLights:
    "Northern lights aurora over northern Norway, Aurora Explorer tour",
  ribBoat:
    "Honningsvåg harbour waterfront, departure point for Arctic coastal tours",
  fishingVillage:
    "Arctic coastal landscape on Magerøya near Nordvågen fishing villages",
  portGuide:
    "Honningsvåg cruise port harbour, port guide for shore excursion passengers",
  worthVisiting:
    "Rocky North Cape cliffs, is North Cape worth visiting on a cruise",
  oneDay:
    "Globe Monument at North Cape, one day in Honningsvåg cruise itinerary",
  bestTime:
    "Midnight sun at North Cape Globe Monument, best time to visit Honningsvåg",
  birdSafaris:
    "Gjesvær bird safari cliffs, Honningsvåg puffin and seabird tours",
  northCapeTours:
    "Globe Monument at North Cape, North Cape tours from Honningsvåg",
  kingCrabTours:
    "King Crab House in Honningsvåg, king crab shore excursions",
  northCapeVipCard:
    "Globe Monument at North Cape, VIP shore excursion from Honningsvåg",
  gjesvaerBirdSafariCard:
    "Gjesvær bird safari, puffins and seabirds from Honningsvåg cruise port",
  northCapeKingCrabCard:
    "King crab experience in Honningsvåg with North Cape touring",
  northCapeSamiCard:
    "Reindeer on Magerøya, North Cape tour with Sami culture stops",
  coastalRibCard:
    "Arctic coastal cliffs near Honningsvåg, RIB safari scenery",
  privateFishingCard:
    "Honningsvåg harbour, private Arctic fishing tour for cruise passengers",
  ebikeCard:
    "Magerøya Arctic scenery, Taste of the Arctic e-bike tour near Honningsvåg",
  bruketNordvagenCard:
    "King crab dining in Honningsvåg, Bruket Nordvågen Arctic village",
  midnightSunCard:
    "Midnight sun at North Cape Globe Monument, seasonal May to August tour",
  auroraCard:
    "Northern lights over northern Norway, Aurora Explorer from Honningsvåg",
  northCapePanorama:
    "Panoramic view of North Cape plateau and Barents Sea coastline",
  nordkappPlateau:
    "Nordkapp plateau visitor area on Magerøya above the Barents Sea",
  flamPortCard:
    "Flam harbour with a cruise ship at the pier, Flam Shore Excursions",
  bergenPortCard:
    "Bergen harbour and waterfront, Bergen Shore Excursions",
  stavangerPortCard:
    "Stavanger harbour with cruise-friendly waterfront, Stavanger Shore Excursions",
  alesundPortCard:
    "Alesund harbour with cruise-friendly waterfront, Alesund Shore Excursions",
  geirangerPortCard:
    "Geirangerfjord viewpoint with cruise ship, Geiranger Shore Excursions",
  oldenPortCard:
    "Briksdal Glacier and Nordfjord scenery, Olden Shore Excursions",
  eidfjordPortCard:
    "Vøringsfossen waterfall and Hardanger scenery, Eidfjord Shore Excursions",
  moldePortCard:
    "Molde harbour and Atlantic coast, Molde Shore Excursions",
} as const;
