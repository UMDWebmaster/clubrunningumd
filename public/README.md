# `public/` — static files served as-is

Everything here is copied unchanged to the root of `build/` and served at `/<filename>`. Unlike `src/`, nothing is bundled or hashed, and pages fetch these files at runtime. [← Back to repo README](../README.md)

| Path | Served at | Used by |
| --- | --- | --- |
| `index.html` | every route | HTML shell. React mounts into `<div id="root">`. |
| `umdLogo.png` | `/umdLogo.png` | Favicon |
| `races-data.json` | `/races-data.json` | `pages/Races.js` |
| `routes/*.gpx` | `/routes/<name>.gpx` | `hooks/useRoutePreview.js` → `components/RouteCard.js` |

## `index.html`
- SEO/Open Graph meta tags and the site title.
- **Don't remove the `google-site-verification` meta tag.** It verifies site ownership with Google.
- Loads the Inter and Montserrat Google Fonts that `tailwind.config.js` refers to.
- Also loads jQuery from a CDN and links an `index.css` that doesn't exist in `public/`. Both are leftovers; the React app needs neither.

## `races-data.json`
The **live race schedule**. Update it each semester:
```json
{
  "scheduleTitle": "Fall 2026 Meet Schedule",
  "races": [
    { "date": "Sat, Sep 5", "name": "Terrapin Time Trial", "location": "Greenbelt, MD", "type": "TT" }
  ]
}
```
- Also update `src/data/races.js`, which is the fallback used when this fetch fails.
- **Optional local API:** `server.js` (repo root, `npm run start-server`, port 3001) exposes `GET/POST /api/races` to read and overwrite this file, plus `GET /api/races-updates` (Server-Sent Events) to push changes. No page calls it at the moment. It was built for a races admin UI, and it only works locally since production is static hosting.

## `routes/`
One GPX file per running route, named after the route's `slug`/`gpx` field in `src/data/routes.json`.

To add a route:
1. Export a GPX from MapMyRun or Strava (track points `<trkpt>` or route points `<rtept>` both work).
2. Save it as `public/routes/<slug>.gpx`.
3. Add the entry to `src/data/routes.json` with `"gpx": "<slug>.gpx"`. See [`src/data/README.md`](../src/data/README.md#routesjson).

GPX files with no matching `routes.json` entry are ignored.
