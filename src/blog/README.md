# `src/blog/` — blog & profiles data layer

TypeScript data access for the blog. This is the only TypeScript in the repo; it compiles alongside the JS via the root `tsconfig.json` (`allowJs`, non-strict). [← Back to repo README](../../README.md)

## Firestore collections

| Collection | Type | Key fields |
| --- | --- | --- |
| `posts` | `BlogPost` | `title`, `slug`, `excerpt`, `content` (HTML from Quill), `coverImage?`, `tags[]`, `status` (`"draft"` \| `"published"`), `authorId`, `authorDisplayName`, `profileSlug?`, `createdAt`, `updatedAt`, `publishedAt` |
| `profiles` | `Profile` | `uid` (Firebase Auth user), `slug`, `displayName`, `role?`, `team?`, `gradYear?`, `bio?`, `photoUrl?`, `socials{instagram,strava,twitter}?`, `favoriteRaces[]?` |

## Files

### `types.ts`
- `BlogPost`, `BlogPostDraft` (partial, used by the editor), `Profile`, `PostStatus`.
- `blogPostConverter` / `profileConverter`: Firestore converters that strip `undefined` values on write and normalize fields on read.
- `createSlug(text)`: URL-safe slug generator. The editor uses it to auto-fill the slug from the title.

### `api.ts`
| Function | Used by | Notes |
| --- | --- | --- |
| `fetchPublishedPosts(max = 12)` | `BlogFeed` | `status == published`, ordered by `publishedAt` desc |
| `fetchPostBySlug(slug)` / `fetchPostById(id)` | `Article` | Article tries the slug first, then the id |
| `fetchPostsForProfile(profileSlug)` | `ProfilePage` | Up to 6 published posts |
| `fetchProfileBySlug(slug)` | `ProfilePage` | |
| `fetchAllPosts()` | `Blog` (editor) | 50 most recently updated, drafts included |
| `savePost({ draft, profileSlug })` | `Blog` | Requires a signed-in user. Creates or merge-updates. Sets `publishedAt` the first time a post is published. |
| `saveProfile(profile)` | `Blog` | Upserts by `uid` |

## Firestore indexes
The compound queries (`status` + `publishedAt`, `profileSlug` + `status` + `publishedAt`) need composite indexes. If a query fails, the Firestore console error includes a one-click link to create the index.

## Related
- Pages: `pages/Blog.js` (editor), `BlogFeed.js`, `Article.js`, `ProfilePage.js`. See [`pages/README.md`](../pages/README.md#blog-firestore-see-srcblog).
- Auth: `hooks/useFirebaseAuth.js` (email/password). Editor accounts are created in the Firebase console.
