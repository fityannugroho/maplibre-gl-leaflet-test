## Purpose

This repo describes how to run the Next.js test app that verifies the
`maplibre-gl-leaflet` plugin correctly synchronizes MapLibre style/source
attributions with Leaflet's attribution control (including when styles or
sources change).

## Quick start — install & run locally (pnpm)

1. Clone the test repo (if not already).

2. Install dependencies and start the Next.js dev server:

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000 (or the route this app uses).

## Running against a local development copy of `maplibre-gl-leaflet`

When validating a patch you should run the test app against your local
modified copy of `maplibre-gl-leaflet`. Use one of the methods below.

Option A — install local package path (recommended, simple)

```bash
# from inside the test app repo
pnpm add /absolute/path/to/maplibre-gl-leaflet
pnpm install
pnpm dev
```

Option B — pnpm link (iterative development)

1. In your local `maplibre-gl-leaflet` repo:

```bash
# register the package globally
pnpm link --global
```

2. In the test app repo:

```bash
# link to the globally-registered package (replace with actual package name from package.json, e.g. "leaflet-maplibre-gl")
pnpm link leaflet-maplibre-gl
pnpm install
pnpm dev
```

Option C — pack + install (deterministic)

```bash
# in the plugin repo
pnpm pack
# then in the test repo
pnpm add ../maplibre-gl-leaflet/your-pkg-name-version.tgz
pnpm install
pnpm dev
```
