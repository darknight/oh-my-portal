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
    name: "bookmarks.illuminating.me",
    url: "https://bookmarks.illuminating.me",
    description:
      "Self-hosted bookmark manager, migrated from Raindrop.io. Personal knowledge collection hub.",
    icon: "bookmarks",
    status: "online",
  },
  {
    name: "rss.illuminating.me",
    url: "https://rss.illuminating.me",
    description: "Self-hosted FreshRSS server for RSS feed management.",
    icon: "rss_feed",
    status: "online",
  },
  {
    name: "wallos.illuminating.me",
    url: "https://wallos.illuminating.me",
    description: "Self-hosted subscription management dashboard powered by Wallos.",
    icon: "payments",
    status: "online",
  },
  {
    name: "ci.illuminating.me",
    url: "https://ci.illuminating.me",
    description: "CI/CD dashboard for monitoring build and deploy pipelines.",
    icon: "terminal",
    status: "online",
  },
  {
    name: "dokploy.illuminating.me",
    url: "https://dokploy.illuminating.me",
    description:
      "Self-hosted PaaS platform on DigitalOcean VPS for container deployment and service management.",
    icon: "rocket_launch",
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
