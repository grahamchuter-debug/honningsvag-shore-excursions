import {
  getHonningsvagMonthSummaries,
  shipScheduleHubPath,
  shipScheduleMonthPath,
} from "@/lib/honningsvag-schedules";

const staticRoutes = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  {
    path: "/excursions",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/excursions/north-cape-vip-experience",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/excursions/gjesvaer-bird-safari",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/excursions/north-cape-king-crab",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/excursions/north-cape-sami-camp-viewpoints",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/excursions/coastal-treasures-rib-safari",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/excursions/private-arctic-fishing-tour",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/excursions/taste-of-the-arctic-ebike-tour",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/excursions/bruket-nordvagen-arctic-village",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/excursions/north-cape-midnight-sun",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/excursions/aurora-explorer-northern-lights",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/honningsvag-port-guide",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/one-day-in-honningsvag",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/is-north-cape-worth-visiting",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/bird-safaris-honningsvag",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/north-cape-tours",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/king-crab-tours",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/best-time-to-visit-honningsvag",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: shipScheduleHubPath,
    priority: 0.85,
    changeFrequency: "weekly" as const,
  },
  { path: "/contact", priority: 0.5, changeFrequency: "yearly" as const },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/about", priority: 0.5, changeFrequency: "yearly" as const },
] as const;

export function getSiteRoutes() {
  const monthRoutes = getHonningsvagMonthSummaries().map((month) => ({
    path: shipScheduleMonthPath(month.slug),
    priority: 0.7,
    changeFrequency: "weekly" as const,
  }));
  return [...staticRoutes, ...monthRoutes];
}

export const siteRoutes = staticRoutes;
