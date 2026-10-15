# `src/internalTools/` — localhost-only admin pages

Small admin UIs for webmasters. `App.js` only renders them when `window.location.hostname === "localhost"`; on the live site these routes show the Home page instead. [← Back to repo README](../../README.md)

Run `npm start`, then open the routes below.

## `/private` → `photoUpload.js`
Adds an album to the **Photos** page.
- Fields: Date, Race Name, Album Link.
- **Save Data** pushes `{ date, raceName, links: [link] }` to Firebase **Realtime Database** at `archives/photos`. This writes to production, so the album appears on the live `/photos` immediately.
- Requires a working `.env` (Firebase config).
- The header and footer are hidden on this route.

## `/private/recordManager` → `recordManager.js`
Table editor for `src/data/records.json`.
- Loads the bundled `records.json` and lets you edit, add, or delete rows in the browser. Columns come from the keys of the first record.
- **Changes are not saved to disk.** Click **Export** to download `records.json`, then replace `src/data/records.json` with it and commit.
- Remember to update `seconds` along with `time`, since sorting uses `seconds`.

## Notes
- "Localhost only" is a client-side check, not security. The Firebase rules on `archives/photos` are what actually protect the data.
- Want to manage another data file the same way? Copy `recordManager.js`, change the `require(...)` path and the export filename, and add a `/private/...` route in `App.js` behind the same `isLocalhost` check.
