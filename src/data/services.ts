import type { Service, Project } from "../types";

export const publicServices: Service[] = [
  {
    name: "whoishiring-insight.illuminating.me",
    url: "https://whoishiring-insight.illuminating.me",
    description:
      "Analyze & visualize job data from Ruanyifeng's \"Who is Hiring\" repo with AI-driven insights.",
    icon: "search",
    status: "online",
  },
  {
    name: "daily-digest.illuminating.me",
    url: "https://daily-digest.illuminating.me",
    description: "AI-powered daily article summarizer, deployed on Cloudflare Pages.",
    icon: "newspaper",
    status: "online",
  },
  {
    name: "blog.illuminating.me",
    url: "https://blog.illuminating.me",
    description: "Thoughts on code, design, and the craft of building software.",
    icon: "article",
    status: "offline",
  },
];

export const privateServices: Service[] = [
  {
    name: "Bookmarks",
    description: "Private bookmark and knowledge collection workspace.",
    icon: "bookmarks",
    status: "online",
  },
  {
    name: "RSS Reader",
    description: "Private feed reader for daily reading workflows.",
    icon: "rss_feed",
    status: "online",
  },
  {
    name: "Subscription Manager",
    description: "Personal subscription management and recurring cost tracker.",
    icon: "payments",
    status: "online",
  },
  {
    name: "CI Dashboard",
    description: "Private build and deployment activity dashboard.",
    icon: "terminal",
    status: "online",
  },
  {
    name: "Status Monitor",
    description: "Private status overview for personal infrastructure.",
    icon: "monitor_heart",
    status: "online",
  },
  {
    name: "Push Notifications",
    description: "Private notification channel for personal device alerts.",
    icon: "notifications_active",
    status: "online",
  },
  {
    name: "Private Network",
    description: "Trusted device coordination for private access.",
    icon: "vpn_key",
    status: "online",
  },
];

export const projects: Project[] = [
  {
    name: "cc-deck",
    url: "https://github.com/darknight/cc-deck",
    description: "Claude Code plugin marketplace for developer productivity.",
    icon: "dashboard_customize",
  },
  {
    name: "x-simplify",
    url: "https://chromewebstore.google.com/detail/x-simplify/ejeeljadmebpnkdjjcooccelnbigejle",
    description: "Chrome extension to simplify X/Twitter UI.",
    icon: "extension",
  },
  {
    name: "freshrss-agent",
    url: "https://github.com/darknight/freshrss-agent",
    description: "AI Agent playground: from tool use to MCP to Claude Agent SDK.",
    icon: "smart_toy",
  },
  {
    name: "freshrss-mcp-server",
    url: "https://github.com/darknight/freshrss-mcp-server",
    description: "MCP server for self-hosted FreshRSS, giving AI apps access to your RSS feeds.",
    icon: "rss_feed",
  },
];
