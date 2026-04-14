# Project Guidelines

## Code Quality

The entire codebase MUST be fully clean before committing any code. `pnpm check` must pass with zero errors, warnings, or hints — even from code that wasn't changed.

`pnpm check` runs: `astro check && eslint . && prettier --check .`

## Commits

Use conventional commit messages (e.g. `feat:`, `fix:`, `chore:`). All text must be lowercase.

## Architecture & Design

- **`docs/spec.md`** — project spec (stack, pages, content, cms, ci/cd, non-goals). Read this before making structural changes.
- **`docs/design.md`** — design spec (philosophy, tokens, component styles, responsive approach). This is the single source of truth for all visual decisions.
- **`src/styles/global.css`** — the sole stylesheet. All design tokens are CSS custom properties on `:root`. No other files contain styling.
- All styling changes MUST follow `docs/design.md`. If the design spec doesn't cover a new element, extend the spec first, then implement.
- Do not add inline styles, scoped `<style>` blocks, or CSS classes to Astro components unless absolutely necessary. Keep styling centralized in `global.css`.
