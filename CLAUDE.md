# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

A single-page personal portfolio site (React + TypeScript + Vite), built with Yarn.

## Commands

```bash
yarn dev       # start Vite dev server with HMR
yarn build     # type-check (tsc -b) then production build via Vite
yarn lint      # run ESLint over the whole repo
yarn preview   # serve the production build locally
```

There is no test suite configured in this repository (no test runner, no `*.test.*` files).

## Architecture

- **Single-page app**: `src/App.tsx` renders one page as a fixed stack of section components in order: `NavBar` → `Hero` → `About` → `SelectedWorks` → `Contact`. There is no router — "navigation" is same-page scrolling between these sections.
- **Section components** (`src/components/*.tsx`) are the top-level page sections (hero, about, selected-works, contact). Each is self-contained and pulls its own content from `src/utils/constant.ts`.
- **UI components** (`src/components/ui/*.tsx`) are shared building blocks used by section components (`icon`, `navbar`, `project-card`).
- **Content as data**: All copy, links, project entries, and tool-logo lists live in `src/utils/constant.ts` (`tools`, `contactInfo`, `projects`). Update content there rather than hardcoding it inside components. Shared TypeScript shapes for this data (e.g. `Project`) live in `src/utils/types.ts`.
- **Custom icon system**: There is no icon library dependency for inline icons. `src/components/ui/svg-icons.tsx` defines raw SVG icon components, and `src/components/ui/icon.tsx` exposes a single `Icon` component that resolves an `iconset:icon-name` string (e.g. `"fluent:arrow-right"`) to the matching SVG component via a lookup table. To add a new icon: add the SVG component to `svg-icons.tsx`, then register it under the appropriate group/key in `icon.tsx`'s `icons` map.
- **SVGs as React components**: `vite-plugin-svgr` is enabled in `vite.config.ts`, so `.svg` files can be imported directly as components with the `?react` query suffix (see the icon imports in `src/utils/constant.ts`).
- **Styling**: Tailwind CSS is the primary styling mechanism (config in `tailwind.config.js`, custom theme extensions for background color/image and the `satoshi`/`axiforma` font families). `src/App.css` and `src/index.scss` hold any global/non-Tailwind styles.
- **Static assets**: Images/icons referenced by URL (not imported) live under `public/assets/` and are referenced with root-relative paths like `/assets/...`.
