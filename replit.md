# TotoAfya Digital — Investor Pitch Deck

A React + TanStack Start pitch deck app for TotoAfya Digital, an offline-first maternal and child healthcare platform targeting Africa.

## Stack

- **React 19** with TanStack Start (SSR-capable), TanStack Router, TanStack Query
- **Tailwind CSS v4** via `@tailwindcss/vite`
- **shadcn/ui** component library (Radix UI primitives)
- **Bun** as package manager and runtime
- **Vite 8** dev server

## Running the app

```bash
bun run dev        # start dev server on port 5000
bun run build      # production build
bun run preview    # preview production build
```

The configured Replit workflow (`Start application`) runs `bun run dev` and serves on port 5000.

## Project structure

- `src/routes/` — TanStack Router file-based routes (`/`, `/deck`, `/deck/print`)
- `src/components/deck/` — slide components and layout
- `src/assets/deck/` — slide images
- `src/components/ui/` — shadcn/ui components

## Notes

- Originally built with [Lovable](https://lovable.dev). The `@lovable.dev/vite-tanstack-config` package forces IPv6 and port 8080, which doesn't work on Replit. The `vite.config.ts` was replaced with a standard Vite config using the same underlying plugins (TanStack Start, Tailwind, React) on port 5000 / `0.0.0.0`.
- Do **not** add `@lovable.dev/vite-tanstack-config` back to `vite.config.ts`; use the current config instead.

## User preferences

_None recorded yet._
