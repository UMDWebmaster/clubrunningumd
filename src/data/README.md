# `src/data/` — hand-edited site content

**Most routine site updates happen here.** These files are bundled at build time, so a change goes live once you push and the site redeploys. [← Back to repo README](../../README.md)

| File | Feeds | Shape |
| --- | --- | --- |
| `officers.js` | `/about` | `officers` array of `{ position, name, image, description }`. Images imported from `../Pictures/`. |
| `races.js` | `/races` (fallback only), `cms/racesDefaults.js` | `races` array of `{ date, name, location, type }`. |
| `records.json` | `/records`, Home page records, `/private/recordManager` | Array of club records (see below). |
| `terp-invite-records.json` | `/home-meet-records` | Terrapin Invite meet records. |
| `routes.json` | `/routes`, Home "Top Routes" | Array of running routes (see below). |

## `officers.js`
```js
import presidentImage from "../Pictures/benImage.png";
export const officers = [
  { position: "President", name: "…", image: presidentImage, description: "…" },
];
```
- Order in the array = order on the page.
- Past officers are kept as commented-out blocks at the top. Comment the old ones out (or delete them) when the board changes.
- Keep the object shape and variable names as they are.

## `races.js` vs `public/races-data.json`
The Races page fetches **`public/races-data.json` first** and only uses `races.js` if that request fails. Update `public/races-data.json` for the live schedule (including `scheduleTitle`), and copy the same list into `races.js` so the fallback isn't stale. `type` is a free-text tag: `TT`, `Club`, `D1`, `Road`, ….

## `records.json`
```json
{
  "season": "Indoor",          // "Indoor" | "Outdoor" | "Cross Country" | "Special"
  "event": "1 mile",
  "gender": "M",               // "M" | "F"
  "true_distance": 1609,       // meters, used for sorting
  "time": "4:23.27",           // shown on the page
  "seconds": 263.37,           // used for sorting; keep it in sync with `time`
  "athlete": "Max Worley",
  "date": "2/11/2023",
  "meet": "Happy Valley Invitational"
}
```
- Home shows `Cross Country` records from September through December and `Outdoor`/`Track` records the rest of the year.
- To edit in a table UI, run locally and open `/private/recordManager`, then **Export** and replace this file with the download (see [`internalTools/`](../internalTools/README.md)).

## `terp-invite-records.json`
Same idea, without season or meet: `{ event, gender, true_distance, time, seconds, athlete, team, year }`.

## `routes.json`
```json
{
  "name": "Lake Loop",
  "slug": "lake-loop",
  "distance": 4.61,                 // miles
  "link": "https://www.mapmyrun.com/routes/view/…",
  "rating": 2,                      // higher = ranked higher on Routes and Home
  "surface": "Road",
  "lit": true,
  "elevationGain": 111,             // feet
  "gpx": "lake-loop.gpx",           // file name in public/routes/
  "description": "…"                // optional
}
```
- `gpx` must match a file in [`public/routes/`](../../public/README.md#routes). `RouteCard` draws the route outline from it. If the GPX is missing, the card renders without the outline.
- Home's "Top Routes" shows the 4 highest-rated routes, with ties broken by shorter distance.
- A few GPX files in `public/routes/` aren't referenced here yet (`jeremy-spoke-in`, `old-hills-4-days`, `pbtx2`, `south-northwest`).
