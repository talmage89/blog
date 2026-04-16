# blog

a brutalist, static blog built with [astro](https://astro.build). edited via [sveltia cms](https://github.com/sveltia/sveltia-cms). deployed to github pages.

## setup

```sh
pnpm install
pnpm dev         # dev server
pnpm build       # production build
pnpm check       # typecheck + lint + format check
pnpm format      # auto-format
```

## cms

the cms lives at `/admin`. sign in with a github personal access token.

posts are markdown files in `src/content/posts/`. images go in `public/images/`.

## deploy

pushes to `main` trigger a github actions workflow that builds and deploys to github pages.

## config

- `astro.config.mjs` — site config, `base` path
- `public/admin/config.yml` — cms fields and backend
- `eslint.config.js` / `.prettierrc` — linting and formatting

## switching to npm

the project uses pnpm by default. to use npm instead:

1. remove `"packageManager"` and `"pnpm"` fields from `package.json`
2. delete `pnpm-lock.yaml` and run `npm install`
3. in `.github/workflows/deploy.yml`, remove the `pnpm/action-setup` step, change `cache: pnpm` to `cache: npm`, and replace `pnpm` commands with `npm`
