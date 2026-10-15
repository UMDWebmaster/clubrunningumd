# `src/pages/` — route components

One component per URL. Routes are registered in [`../App.js`](../App.js) (full table in [`src/README.md`](../README.md#routing-appjs)). [← Back to repo README](../../README.md)

Most pages share the layout classes from `src/App.css`: `page-shell` → `page-hero` (banner image) → `content-container` → `page-header` (`page-eyebrow`, `page-title`, `page-subtitle`) → `page-section`.

## Pages by data source

### Static: content written inline in the file
Edit the JSX or the constants at the top of the file.

| File | Route | What to edit |
| --- | --- | --- |
| `NewMemberInfo.js` | `/joinus` | New-member guide: practice info, dues, GroupMe/Strava/Google Form links. Longest page (~530 lines). |
| `Workouts.js` | `/workouts` | `seasons` array at the top (newest first; first entry is featured). Each season has `xc`, `sprints`, `midDistance` link lists. |
| `HomeMeet.js` | `/home-meet` | Terrapin Invite (track meet) details, schedule, athletic.net link. |
| `XCHomeMeet.js` | `/old-bay-invite` | Old Bay Invitational (XC). `overviewCards` and other constants at the top. |
| `SignUp.js` | `/signup` | Embedded Google Form. |
| `Calendar.js` | `/calendar` | Embedded Google Calendar iframe for `umdclubrunning@gmail.com`. |

### Static: content from `src/data/`
| File | Route | Data |
| --- | --- | --- |
| `About.js` | `/about` | `data/officers.js` |
| `Records.js` | `/records` | `data/records.json`. Filter by season and gender; sortable. |
| `HomeMeetRecords.js` | `/home-meet-records` | `data/terp-invite-records.json` |
| `Routes.js` | `/routes` | `data/routes.json`. Sort by rating/distance/name; renders `RouteCard`s. Links a Google Form for route submissions. |

### Fetched at runtime
| File | Route | Source |
| --- | --- | --- |
| `Home.js` | `/`, `/home` | Firestore `siteContent/home` via `useContentDoc` (falls back to `cms/contentDefaults.js`); `data/records.json` (XC records from September onward, track records before that); top 4 routes from `data/routes.json`; upcoming events via `GoogleCalendarEvents`. Shows a Rickroll on April 1. |
| `Races.js` | `/races` | `fetch('/races-data.json')` (from `public/`), falling back to `data/races.js`. |
| `Photos.js` | `/photos` | Firebase **Realtime Database** `archives/photos`, sorted newest first. Entries are added via `/private`. |
| `EmailArchive.js` | `/emails` | Google Apps Script web app (`DRIVE_FOLDER_URL`) that lists newsletters in a Drive folder; selected email is shown in an iframe. |

### Blog (Firestore, see [`src/blog/`](../blog/README.md))
| File | Route | Role |
| --- | --- | --- |
| `Blog.js` | `/blog` | Editor. Firebase email/password sign-in (`useFirebaseAuth`), Quill rich-text editor, draft/publish, plus a profile editor. |
| `BlogFeed.js` | `/blog_feed` | Lists published posts (`fetchPublishedPosts`). |
| `Article.js` | `/article/:slug` | Single post, by slug then by id. HTML sanitized with DOMPurify. |
| `ProfilePage.js` | `/profiles/:slug` | Runner profile and their recent posts. |

## Conventions
- Images are imported from `../Pictures/` (bundled), not referenced by URL.
- Page-specific CSS lives in `../CSS/`; many pages also use Tailwind utility classes inline.
- Any user- or CMS-supplied HTML is passed through `DOMPurify.sanitize` before `dangerouslySetInnerHTML`. Keep doing that.
