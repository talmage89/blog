# blog spec

## stack

- **astro** — static site generator
- **sveltia cms** — git-based cms at `/admin`, decap cms drop-in replacement
- **github pages** — hosting via `gh-pages` branch
- **github actions** — ci/cd, build + deploy on push to `main`

## pages

| route           | description                                               |
| --------------- | --------------------------------------------------------- |
| `/`             | paginated list of posts, newest first. title, date, tags. |
| `/[page]`       | page 2+ of post list (e.g. `/2`, `/3`).                   |
| `/posts/[slug]` | single post. title, date, tags, content.                  |
| `/tags`         | list of all tags with post counts.                        |
| `/tags/[tag]`   | paginated list of posts for a given tag.                  |
| `/about`        | static about page.                                        |

## layout

- **header** — site title (links to `/`), nav links: posts, about
- **footer** — just a `©` line
- no sidebar. no categories. no search.
- tags shown inline next to post titles on list pages and on detail page

## content

- markdown files in `src/content/posts/`
- frontmatter: `title`, `date`, `tags` (string array, optional), `draft` (boolean)
- drafts hidden in production, visible in dev
- astro content collections for type safety

## cms

- sveltia cms served at `/admin`
- github backend (repo, branch: `main`)
- media stored in `public/images/`
- collection config for posts matching the frontmatter schema above
- oauth: use sveltia cms's built-in github oauth (no external proxy needed — works via github oauth app + `pkce` flow)

## ci/cd

- single github actions workflow: `.github/workflows/deploy.yml`
- triggers on push to `main`
- steps: checkout → install → build → deploy to gh-pages
- use `pnpm` for fast installs (cached)
- target: under 1 minute total run time

## non-goals

- no analytics
- no comments
- no rss (can add later)
- no dark mode
- no javascript on the frontend (astro static output only)

## pagination

- 10 posts per page
- prev/next links at bottom of list pages
- applies to `/` and `/tags/[tag]`
