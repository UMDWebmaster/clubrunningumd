# `src/cms/` — Firestore-editable content

A lightweight "CMS": page content stored in the Firestore collection **`siteContent`**, with defaults defined in code so pages still render if Firestore is empty or unreachable. [← Back to repo README](../../README.md)

| File | Exports | Role |
| --- | --- | --- |
| `useContent.js` | `useContentDoc(docId, defaults)` | Live `onSnapshot` listener on `siteContent/{docId}`. Returns `{ data, loading, error }`, where `data` is `{ ...defaults, ...firestoreDoc }`. Falls back to `defaults` if the doc is missing or the listener errors. |
| `api.js` | `fetchContentDoc(docId)`, `saveContentDoc(docId, payload, { allowUnsigned })` | One-off read, and a merge-write that stamps `updatedAt`, `updatedBy`, and `createdAt`. Writing requires a signed-in Firebase user unless `allowUnsigned` is set. |
| `contentDefaults.js` | `defaultHomeContent` | Fallback Home content: `heroTitle`, `heroSubtitleHtml`, `ctas[]`, `pills[]`, `sectionTitles`. |
| `racesDefaults.js` | `defaultRacesContent` | `{ scheduleTitle, races }` built from `data/races.js`. Not currently used, since the Races page reads `public/races-data.json`. |

## Current usage
Only `pages/Home.js` uses this, via `useContentDoc("home", defaultHomeContent)`. Nothing in the app calls `saveContentDoc` right now, so `siteContent/home` is edited directly in the Firebase console (or the defaults file is edited instead).

## Gotchas
- **Pass a stable `defaults` object** (a module-level constant like `defaultHomeContent`). The hook lists `defaults` as an effect dependency, so an inline object literal would re-subscribe on every render.
- `heroSubtitleHtml` is HTML. `Home.js` sanitizes it with DOMPurify before rendering.
- `useContent.js` logs every snapshot to the console. Remove those logs if they get noisy.

## Adding CMS content to another page
1. Add `defaultXContent` to `contentDefaults.js`.
2. In the page: `const { data } = useContentDoc("x", defaultXContent);`
3. Create `siteContent/x` in Firestore, or write it with `saveContentDoc("x", {...})` from an authenticated admin UI.
