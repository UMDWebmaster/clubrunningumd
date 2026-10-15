# `src/Pictures/` — bundled images

Images imported directly by pages and data files (`import pic from "../Pictures/foo.jpg"`). Webpack copies each imported file into the build with a hashed filename. [← Back to repo README](../../README.md)

## Adding an image
1. **Compress it first.** This folder is ~180 MB, and several photos are 10–24 MB (`Nationals-51.jpg`, `terpInvite.png`, `xccav25rh.JPG`, `womenscav25xc.JPG`). Anything imported ships to every visitor. Aim for under ~500 KB and about 2000 px on the long edge (Squoosh or `sips -Z 2000 file.jpg` on macOS both work).
2. Use a descriptive lowercase name (`xcnats2025.jpg`, not `IMG_1234.JPG`).
3. Import it where it's used.

Use JPEG or PNG. `.heic` doesn't display in most browsers.

## What's here
| Group | Examples | Used by |
| --- | --- | --- |
| Officer headshots | `benImage.png`, `joe.jpeg`, `niki.jpg`, `JonahProfile.jpeg`, … | `data/officers.js` |
| Page hero banners | `natsTeamPic.JPG`, `fredHalfTeam.JPG`, `sohanRUnnn.JPG`, `photos.JPG`, `calPhoto.JPG`, `evanFlag.png`, `gabe+zach.JPG` | Races, Records, Routes, Photos, Calendar, Emails, Workouts |
| Home mosaic | `2025-team.jpeg`, `xcnats2025.jpg`, `kehoe25.JPG`, `regionalsxc25.jpeg`, … | `pages/Home.js` |
| Join Us | `joinus-*.jpg`, `joinus-cost-chart.png` | `pages/NewMemberInfo.js` |
| Meet posters | `terpInvite.png` | `HomeMeet.js`, `HomeMeetRecords.js` |

## Unreferenced files
These aren't imported anywhere as of the Fall 2026 update. Most are past officers' headshots or old banners. They don't affect bundle size (only imported files are bundled), but they do bloat the repo:

`CalebBio.JPG IMG_3860.JPG JacobBio.jpg Jacobubshpic.png JimmyRun.JPG Nationals-51.jpg dayPic.JPG dominick.png ellaImg.JPG evanProfile.jpeg grouppiccropped.jpg jeremyImg.heic jeremyImg.png joeyImage.jpeg joinus-banner.png joinus-footer.png lillianCapital.JPG lillianProfile.JPG lol.JPG nav-logo.png samPic.JPG staceyPic.JPG team.JPG tonyImg.png zack.jpeg`

Check with `grep -r "<filename>" src` before deleting one.
