# design spec

all visual and styling decisions for the blog. the single source of truth — `src/styles/global.css` implements these rules via css custom properties.

## philosophy

brutalist. stripped-down, typographic.

- no rounded corners
- no shadows
- no gradients
- no decorative elements
- no hero images
- automatic dark mode via `prefers-color-scheme` (monochrome in both modes)

## font

self-hosted [switzer](https://www.fontshare.com/fonts/switzer) (woff2, weights 400 + 700) in `public/fonts/`. loaded via `@font-face` with `font-display: block` to prevent fouc.

## tokens

all design tokens are defined as css custom properties on `:root` in `global.css`.

### colors

| token        | light  | dark      | usage           |
| ------------ | ------ | --------- | --------------- |
| `--color-fg` | `#000` | `#d4d4d4` | text, borders   |
| `--color-bg` | `#fff` | `#0e0e0e` | page background |

`color-scheme: light dark` is set on `:root` so form controls and scrollbars adapt automatically. a `<meta name="color-scheme" content="light dark">` tag in `<head>` prevents flash of wrong theme.

### typography

| token              | value                              | usage              |
| ------------------ | ---------------------------------- | ------------------ |
| `--font-sans`      | `"Switzer", system-ui, sans-serif` | all text           |
| `--font-size-base` | `16px`                             | root font size     |
| `--font-size-sm`   | `0.875rem`                         | time, tags         |
| `--line-height`    | `1.6`                              | global line height |

### spacing

| token            | value     | usage                                |
| ---------------- | --------- | ------------------------------------ |
| `--space-sm`     | `0.5rem`  | tag gaps, subheading bottom margin   |
| `--space-inline` | `0.75rem` | inline separation (time ↔ tags)      |
| `--space-md`     | `1rem`    | standard padding, margins, gaps      |
| `--space-lg`     | `1.5rem`  | list indentation, subheading top gap |
| `--space-xl`     | `2rem`    | pagination top margin                |

### layout

| token         | value   | usage          |
| ------------- | ------- | -------------- |
| `--max-width` | `640px` | body max-width |

### borders

| token            | value                       | usage           |
| ---------------- | --------------------------- | --------------- |
| `--border`       | `1px solid var(--color-fg)` | hr, code blocks |
| `--border-thick` | `2px solid var(--color-fg)` | blockquote left |

## global resets & base styles

- universal box-sizing reset (`* { margin: 0; padding: 0; box-sizing: border-box }`)
- `ul, ol` have `list-style: none` globally (restored inside `article`)
- `scrollbar-gutter: stable` on `html` to prevent layout shift

## text treatment

- headings (`h1`–`h3`): `font-weight: bold`, `font-size: 1rem` — uniform size, no hierarchy
- `h1`: `margin-bottom: --space-md`
- `h2`, `h3`: `margin-top: --space-lg`, `margin-bottom: --space-sm`
- links: underlined by default, underline removed on hover

## body layout

- `max-width: --max-width`, centered with `margin: 0 auto`, `padding: --space-md`
- sticky footer via `min-height: 100vh; display: flex; flex-direction: column` with `main { flex: 1 }`

## component styles

### tags

- prefixed with `#` via css `::before` pseudo-element
- use `--font-size-sm` for size
- `.tags` container displayed inline with `--space-inline` left margin
- individual tag links spaced with `--space-sm` right margin

### article content

- paragraphs, lists, blockquotes, pre: `--space-md` bottom margin
- unordered lists: `list-style: "- "` (dash marker) with `--space-lg` left padding
- task lists (`.contains-task-list`): no marker, no left padding
- ordered lists: `list-style: decimal` with `--space-lg` left padding
- blockquotes: `--border-thick` left border, `--space-md` left padding
- code blocks: `--border` border, `--space-md` padding, horizontal scroll
- inline code: `"Courier New", Courier, monospace`
- images: responsive (`max-width: 100%`, `height: auto`)

### pagination

- flexbox row, space-between alignment
- `--space-xl` top margin

### header / footer

- separated from content by `<hr>` elements
- no additional styling beyond global rules

### time

- `--font-size-sm` size
- `--space-inline` right margin

## responsive approach

- single media query: `prefers-color-scheme: dark` (for dark mode colors only)
- single column layout, fluid width capped at `--max-width`
- body centered with `margin: 0 auto` and `--space-md` padding
