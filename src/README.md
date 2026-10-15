# `src/` — application code

Everything compiled into the React bundle. [← Back to repo README](../README.md)

## Top-level files

| File | Role |
| --- | --- |
| `index.js` | Mounts `<App />` into `#root` (from `public/index.html`) under `React.StrictMode`. |
| `App.js` | **Router.** Defines every URL → page mapping and wraps all pages with `Header` / `Footer`. |
| `firebaseConfig.js` | Initializes Firebase from `REACT_APP_FIREBASE_*` env vars and exports `auth`, `db` (Firestore), `storage`, and the default `app` (used for Realtime Database). |
| `App.css` | Global layout classes shared by most pages (`page-shell`, `page-hero`, `content-container`, `page-header`, `page-title`, …). |
| `index.css` | Tailwind `base` / `components` / `utilities` imports. |

## Subfolders

| Folder | Purpose |
| --- | --- |
| [`pages/`](pages/README.md) | One component per route. |
| [`components/`](components/README.md) | Reusable UI pieces. |
| [`data/`](data/README.md) | Static content (officers, races, records, routes). |
| [`cms/`](cms/README.md) | Firestore `siteContent` reads/writes with code defaults. |
| [`blog/`](blog/README.md) | Firestore data layer for posts and profiles (TypeScript). |
| [`hooks/`](hooks/README.md) | `useFirebaseAuth`, `useRoutePreview`. |
| [`internalTools/`](internalTools/README.md) | Localhost-only admin pages. |
| [`CSS/`](CSS/README.md) | Page-specific stylesheets. |
| [`Pictures/`](Pictures/README.md) | Bundled images. |
| `emails/` | Empty (only a `.DS_Store`, not tracked). Newsletters are served from Google Drive — see `pages/EmailArchive.js`. |

## Routing (`App.js`)

| Path | Page | Notes |
| --- | --- | --- |
| `/`, `/home` | `Home` | |
| `/about` | `About` | Officers |
| `/joinus` | `NewMemberInfo` | |
| `/signup` | `SignUp` | Not in nav |
| `/calendar` | `Calendar` | |
| `/races` | `Races` | |
| `/records`, `/records/:season` | `Records` | URL param is currently unused by the page |
| `/home-meet` | `HomeMeet` | Terrapin Invite (track) |
| `/home-meet-records` | `HomeMeetRecords` | |
| `/old-bay-invite` | `XCHomeMeet` | Old Bay Invite (XC) |
| `/workouts` | `Workouts` | |
| `/routes` | `Routes` (imported as `Paths`) | |
| `/photos` | `Photos` | |
| `/emails` | `EmailArchive` | |
| `/blog` | `Blog` | Editor, sign-in required. Not in nav |
| `/blog_feed` | `BlogFeed` | Not in nav |
| `/article/:slug` | `Article` | |
| `/profiles/:slug` | `ProfilePage` | |
| `/private`, `/private/recordManager` | internal tools | **localhost only**; elsewhere renders `Home`. Header/footer hidden on `/private`. |
| anything else | `Home` | `/*` catch-all |

React Router v6 matching is case-insensitive, which is why nav links like `/Races` and `/Records` work.

### Adding a page

1. Create `pages/MyPage.js` exporting a default component. Reuse the `App.css` layout classes for consistency.
2. Import it in `App.js` and add `<Route path="/my-page" element={<MyPage />} />`.
3. Add a link in `components/Header.js` — there are separate desktop and mobile link lists.
