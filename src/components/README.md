# `src/components/` — shared UI

Reusable components used by pages. [← Back to repo README](../../README.md)

## In use

| Component | Used by | What it does |
| --- | --- | --- |
| `Header.js` | `App.js` (every page) | Top nav. Desktop: Headless UI `Tab` bar with dropdowns (Races, Training, About). Mobile (≤ 970px): title + hamburger menu. Highlights the active tab by matching `location.pathname`. **Links are listed twice** — once for desktop, once for mobile — so update both. Styles: `CSS/Header.css`, `CSS/umd-fonts.css`. |
| `Footer.js` | `App.js` (every page) | Contact email and social icons (Facebook, Twitter, Instagram, email, Strava). Styles: `CSS/footer.css`. |
| `HeroMosaic.js` | `pages/Home.js` | Grid of photo tiles. Props: `images` (URLs or `{src, alt}`), `tileCount`, `startIndex`, `maxTiles` (48), `loading`, `className`. Cycles through a 12-tile layout pattern; tile styles in `CSS/Home.css`. |
| `GoogleCalendarEvents.js` | `pages/Home.js` | Fetches upcoming events from the Google Calendar API. Props: `calendarId`, `apiKey`, `maxResults`. Has loading / error / empty states. |
| `RouteCard.js` | `pages/Routes.js` | Card for one entry in `data/routes.json`: name, distance, rating, surface, lit/unlit, MapMyRun link, plus an SVG route outline from `hooks/useRoutePreview`. Animated with framer-motion (respects reduced-motion). |

## Not currently imported anywhere

Leftovers kept for reference; safe to reuse or delete.

| Component | Notes |
| --- | --- |
| `BioCard.js` | Old officer bio layout. Called as a plain function (`BioCard(position, name, …)`), not JSX. Marked "DO NOT EDIT". `About.js` now renders officer tiles inline. |
| `HeroMedia.js` | Image gallery / video hero built on `react-image-gallery` + framer-motion. |
| `TextEditor.js` | Standalone Quill editor demo. The real editor is inline in `pages/Blog.js`. |

## Adding a component
Put it here if more than one page uses it, or if it's large enough to clutter its page. Default-export a function component and keep its styles in `src/CSS/` or Tailwind classes.
