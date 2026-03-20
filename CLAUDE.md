# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portal site for **illuminating.me** — a single-page landing that aggregates links to all sub-services and projects under the domain.

## Commands

- `npm run dev` — local dev server at localhost:4321
- `npm run build` — static build to `dist/`
- `npm run preview` — preview production build locally
- `npx wrangler pages deploy dist --project-name=oh-my-portal` — deploy to Cloudflare Pages

## Architecture

Astro 6 static site with Tailwind CSS v4 (via Vite plugin, not PostCSS).

**Single page (`src/pages/index.astro`)** composed of section components:
- Header (sticky nav with anchor links to `#services`, `#projects`, `#about`)
- Hero → ServiceGrid → ProjectGrid → About → Footer

**Data layer:** `src/data/services.ts` is the single source of truth for all service/project entries. Types live in `src/types.ts`. To add/remove a service or project, edit that file only.

**Design system:** Dark theme using Material Design 3 color tokens defined as CSS custom properties in `src/styles/global.css` under `@theme`. Components reference these via Tailwind classes (e.g., `text-primary`, `bg-surface`). Fonts: Space Grotesk (headlines/labels), Inter (body). Icons: Material Symbols Outlined (referenced by name string in service/project data).
