# `src/hooks/` — custom React hooks

[← Back to repo README](../../README.md)

## `useFirebaseAuth.js`
```js
const { user, loading, error, signIn, signOut } = useFirebaseAuth();
```
- Subscribes to `onAuthStateChanged`. `user` is the Firebase user or `null`.
- `signIn(email, password)` uses email/password auth. It sets `error` and rethrows on failure.
- Used by `pages/Blog.js` to gate the editor.

## `useRoutePreview.js`
Turns a GPX file into an SVG path for `components/RouteCard.js`.

```js
const { status, path, start, end } = useRoutePreview("lake-loop.gpx");
// status: "idle" | "loading" | "ready" | "empty" | "error"
// path:   SVG "M x,y L x,y …" string in ROUTE_PREVIEW_VIEWBOX coordinates
// start/end: { x, y } for the start/finish markers
```

| Export | Purpose |
| --- | --- |
| `useRoutePreview(gpxFile, viewBox?)` | Fetches `/routes/{gpxFile}` (from `public/routes/`), parses it, and projects it into the view box. |
| `parseGPX(text)` | Reads `trkpt` / `rtept` lat/lon pairs with `DOMParser`. |
| `projectPoints(points, viewBox)` | Scales the lat/lon bounds into the view box with padding, preserving aspect ratio. |
| `ROUTE_PREVIEW_VIEWBOX` | `{ width: 560, height: 320, padding: 28 }` |
| `PLACEHOLDER_GPX_FILES` | Set of GPX names to skip (currently empty). |

Pass a stable `viewBox` (the default constant is fine). It's an effect dependency, so an inline object would refetch on every render.
