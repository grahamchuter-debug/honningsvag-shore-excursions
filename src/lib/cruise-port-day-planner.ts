export type PlannerExcursionLink = {
  label: string;
  href?: string;
};

export type PortTimeTier = {
  minHours: number;
  maxHours: number | null;
  label: string;
  confidenceScore: number;
  confidenceLabel: string;
  confidenceMessage: string;
  excursions: readonly PlannerExcursionLink[];
  dayPlan: readonly string[];
  conversionNote?: string;
};

export type CruisePortDayPlannerConfig = {
  portName: string;
  heading: string;
  subtitle: string;
  supportingCopy: string;
  returnBufferNote: string;
  tiers: readonly PortTimeTier[];
};

export const honningsvagPortDayPlannerConfig: CruisePortDayPlannerConfig = {
  portName: "Honningsvåg",
  heading: "Honningsvåg Cruise Smart Planner™",
  subtitle: "Plan your North Cape shore excursions around your actual time in port.",
  supportingCopy:
    "Built specifically for cruise passengers visiting Honningsvåg and Magerøya.",
  returnBufferNote:
    "Always confirm your cruise line's official all-aboard time, as this may be earlier than the published departure time. North Cape coach returns can be delayed in Arctic weather.",
  tiers: [
    {
      minHours: 0,
      maxHours: 3,
      label: "Under 3 hours",
      confidenceScore: 40,
      confidenceLabel: "Limited Port Call",
      confidenceMessage:
        "Best suited to Bruket Nordvågen Arctic Village or the Taste of the Arctic E-Bike Tour if timing fits, skip full North Cape drives.",
      excursions: [
        {
          label: "Bruket Nordvågen Arctic Village Experience",
          href: "/excursions/bruket-nordvagen-arctic-village",
        },
        {
          label: "Taste of the Arctic E-Bike Tour (if timing fits)",
          href: "/excursions/taste-of-the-arctic-ebike-tour",
        },
      ],
      dayPlan: [
        "Disembark promptly and confirm meeting points near Honningsvåg harbour",
        "Choose a compact village or e-bike experience within walking or short transfer distance",
        "Do not book North Cape coach tours, Magerøya drive time exceeds this window",
        "Return to the gangway by your recommended buffer time",
      ],
    },
    {
      minHours: 3,
      maxHours: 4,
      label: "3 to 4 hours",
      confidenceScore: 65,
      confidenceLabel: "Short but Usable Port Call",
      confidenceMessage:
        "Good for North Cape with Sami Camp, North Cape and King Crab, or Gjesvær Bird Safari when departures align with your all-aboard time.",
      excursions: [
        {
          label: "North Cape with Sami Camp and Viewpoints",
          href: "/excursions/north-cape-sami-camp-viewpoints",
        },
        {
          label: "North Cape and King Crab Tour",
          href: "/excursions/north-cape-king-crab",
        },
        {
          label: "Gjesvær Bird Safari from Honningsvåg",
          href: "/excursions/gjesvaer-bird-safari",
        },
      ],
      dayPlan: [
        "Meet your guide at the Honningsvåg cruise pier or central pickup",
        "Morning or early afternoon: North Cape plateau or Gjesvær bird cliffs",
        "Allow minimal town time, focus on one structured excursion",
        "Keep 45 minutes before all aboard for coach return across Magerøya",
      ],
    },
    {
      minHours: 4,
      maxHours: 5,
      label: "4 to 5 hours",
      confidenceScore: 85,
      confidenceLabel: "Strong Port Call",
      confidenceMessage:
        "Enough time for the North Cape VIP Experience or Coastal Treasures Arctic RIB Safari with a comfortable return buffer.",
      excursions: [
        {
          label: "North Cape VIP Experience",
          href: "/excursions/north-cape-vip-experience",
        },
        {
          label: "Coastal Treasures Arctic RIB Safari",
          href: "/excursions/coastal-treasures-rib-safari",
        },
      ],
      dayPlan: [
        "Confirm departure immediately after clearing the ship",
        "Morning: North Cape VIP with king crab and village stops, or RIB coastal safari",
        "Skip stacking a second long tour unless your ship publishes 6+ hours ashore",
        "Return to Honningsvåg harbour 45 minutes before all aboard",
      ],
      conversionNote:
        "Passengers with 4 to 5 hours often choose the North Cape VIP Experience for the fullest Magerøya introduction in one efficient itinerary.",
    },
    {
      minHours: 5,
      maxHours: null,
      label: "5+ hours",
      confidenceScore: 95,
      confidenceLabel: "Excellent Full Day",
      confidenceMessage:
        "Ideal for North Cape VIP, Private Arctic Fishing, or combining North Cape with wildlife-focused touring.",
      conversionNote:
        "Guests with five or more hours frequently pair the North Cape VIP Experience with wildlife add-ons such as Gjesvær Bird Safari on separate sailings, or book Private Arctic Fishing for a premium Arctic day.",
      excursions: [
        {
          label: "North Cape VIP Experience",
          href: "/excursions/north-cape-vip-experience",
        },
        {
          label: "Private Arctic Fishing Tour",
          href: "/excursions/private-arctic-fishing-tour",
        },
        { label: "North Cape plus wildlife combinations" },
      ],
      dayPlan: [
        "Arrive early and board your first excursion without delay",
        "Morning: North Cape VIP or private fishing from Honningsvåg",
        "Midday: King crab or village tasting if your operator schedules a break",
        "Afternoon: Optional harbour walk if return times are confirmed",
        "Keep the final hour free near the cruise pier for a calm gangway return",
      ],
    },
  ],
};

export const plannerInterestGroups = [
  {
    title: "Adventure",
    items: [
      {
        label: "Coastal Treasures Arctic RIB Safari",
        href: "/excursions/coastal-treasures-rib-safari",
      },
      {
        label: "Private Arctic Fishing Tour",
        href: "/excursions/private-arctic-fishing-tour",
      },
      {
        label: "Taste of the Arctic E-Bike Tour",
        href: "/excursions/taste-of-the-arctic-ebike-tour",
      },
    ],
  },
  {
    title: "Wildlife",
    items: [
      {
        label: "Gjesvær Bird Safari from Honningsvåg",
        href: "/excursions/gjesvaer-bird-safari",
      },
      {
        label: "North Cape and King Crab Tour",
        href: "/excursions/north-cape-king-crab",
      },
      {
        label: "Coastal Treasures Arctic RIB Safari",
        href: "/excursions/coastal-treasures-rib-safari",
      },
    ],
  },
  {
    title: "Premium",
    items: [
      {
        label: "North Cape VIP Experience",
        href: "/excursions/north-cape-vip-experience",
      },
    ],
  },
] as const;

export const RECOMMENDED_RETURN_BUFFER_MINUTES = 45;
export const LATEST_COMFORTABLE_RETURN_BUFFER_MINUTES = 30;

export function parseTimeToMinutes(time: string): number | null {
  const match = /^(\d{1,2}):(\d{2})$/.exec(time.trim());

  if (!match) {
    return null;
  }

  const hours = Number(match[1]);
  const minutes = Number(match[2]);

  if (hours > 23 || minutes > 59) {
    return null;
  }

  return hours * 60 + minutes;
}

export function formatTimeLabel(time: string): string {
  const minutes = parseTimeToMinutes(time);
  if (minutes === null) {
    return time;
  }

  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${String(hours).padStart(2, "0")}:${String(mins).padStart(2, "0")}`;
}

export function subtractMinutesFromTime(
  time: string,
  subtractMinutes: number,
): string | null {
  const totalMinutes = parseTimeToMinutes(time);
  if (totalMinutes === null) {
    return null;
  }

  let result = totalMinutes - subtractMinutes;
  if (result < 0) {
    result += 24 * 60;
  }

  const hours = Math.floor(result / 60) % 24;
  const minutes = result % 60;
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
}

export function calculatePortMinutes(
  arrival: string,
  departure: string,
): number | null {
  const arrivalMinutes = parseTimeToMinutes(arrival);
  const departureMinutes = parseTimeToMinutes(departure);

  if (arrivalMinutes === null || departureMinutes === null) {
    return null;
  }

  let diff = departureMinutes - arrivalMinutes;

  if (diff <= 0) {
    diff += 24 * 60;
  }

  return diff;
}

export function formatPortDuration(totalMinutes: number): string {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  if (hours === 0) {
    return `${minutes} minute${minutes === 1 ? "" : "s"}`;
  }

  if (minutes === 0) {
    return `${hours} hour${hours === 1 ? "" : "s"}`;
  }

  return `${hours} hour${hours === 1 ? "" : "s"} ${minutes} minute${minutes === 1 ? "" : "s"}`;
}

export function getTierForPortMinutes(
  totalMinutes: number,
  tiers: readonly PortTimeTier[],
): PortTimeTier {
  const hours = totalMinutes / 60;

  return (
    tiers.find((tier) => {
      const meetsMinimum = hours >= tier.minHours;
      const belowMaximum = tier.maxHours === null || hours < tier.maxHours;
      return meetsMinimum && belowMaximum;
    }) ?? tiers[tiers.length - 1]
  );
}

export function getReturnGuidance(departure: string) {
  return {
    departureLabel: formatTimeLabel(departure),
    recommendedReturn: subtractMinutesFromTime(
      departure,
      RECOMMENDED_RETURN_BUFFER_MINUTES,
    ),
    latestComfortableReturn: subtractMinutesFromTime(
      departure,
      LATEST_COMFORTABLE_RETURN_BUFFER_MINUTES,
    ),
  };
}

export function getConfidenceTone(score: number): {
  badge: string;
  bar: string;
} {
  if (score >= 90) {
    return { badge: "bg-emerald-100 text-emerald-800", bar: "bg-emerald-500" };
  }
  if (score >= 65) {
    return { badge: "bg-amber-100 text-amber-800", bar: "bg-amber-500" };
  }
  return { badge: "bg-orange-100 text-orange-800", bar: "bg-orange-500" };
}
