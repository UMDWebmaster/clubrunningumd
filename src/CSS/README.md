# `src/CSS/` — stylesheets

Plain CSS files imported by the page or component they style. They sit alongside Tailwind (`src/index.css`, `tailwind.config.js`) and the shared layout classes in `src/App.css`. [← Back to repo README](../../README.md)

> CRA bundles every imported CSS file **globally**. Class names aren't scoped, so a rule in `Home.css` can affect other pages. Prefix new classes with the page name (`home-…`, `routes-…`).

| File | Imported by | Covers |
| --- | --- | --- |
| `Header.css` | `components/Header.js` | Nav bar, dropdowns, hamburger menu |
| `footer.css` | `components/Footer.js` | Footer |
| `umd-fonts.css` | `Header.js`, `pages/BlogFeed.js` | Display fonts (`terrafont-*`, `wallsmith`) |
| `Home.css` | `pages/Home.js` | Hero, mosaic tiles, pills, top routes, events, records (largest file) |
| `Routes.css` | `pages/Routes.js`, `Records.js`, `HomeMeetRecords.js` | Route cards and grid; also reused for records tables |
| `Races.css` | `pages/Records.js`, `HomeMeetRecords.js` | Records/results tables (despite the name) |
| `About.css` | `pages/About.js` | Officer grid and tiles |
| `Info.css` | `pages/NewMemberInfo.js` | Join Us page |
| `SignUp.css` | `pages/SignUp.js` | Sign-up page |
| `Photos.css` | `pages/Photos.js`, `EmailArchive.js`, `NewMemberInfo.js` | Archive tables |
| `table.css` | `pages/Photos.js`, `EmailArchive.js`, `NewMemberInfo.js` | Base table styles |
| `Admin.css` | *(nothing)* | Unused, left over from a removed admin UI |

## Theme
- Brand colors are in `tailwind.config.js` under `maryland.*` (`red #E03A3E`, `gold #FFCD00`, `black`, `white`, `gray`). Use `bg-maryland-red` and similar in JSX.
- Fonts: `font-display` (Montserrat) and `font-body` (Inter), loaded from Google Fonts in `public/index.html`.
- Tailwind only scans `src/**/*.{html,js}`. Utility classes written in `.ts` files won't be generated.
