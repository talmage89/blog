# design spec

## philosophy

brutalist. the design is the absence of design. content is the subject; everything else gets out of the way.

**typography is the only visual device.** no rounded corners, no shadows, no gradients, no illustrations, no hero images, no accent colors, no icons-as-decoration. if it isn't text or a hairline rule separating text, it shouldn't be on the page. the site has exactly one family (switzer), one base size, and one accent size for metadata. headings don't scale — `h1`, `h2`, and `h3` are the same size as body text, distinguished only by weight and surrounding whitespace. the reader supplies the hierarchy; the page doesn't shout it.

**monochrome, always.** two colors: foreground and background. they invert under `prefers-color-scheme: dark`, but the palette never grows beyond that. no link color, no tag color, no highlight, no callout. contrast comes from ink on paper, not from hue.

**no chrome, no affordances beyond the necessary.** no search, no sidebar, no categories, no related posts, no social buttons, no analytics banner, no cookie notice. the nav is two links. the footer is a copyright line. a post is a title, a date, tags, and prose.

**no javascript on the frontend.** the site ships as static html and css. this isn't a performance flex — it's a commitment to the idea that reading a blog should not require a runtime. if a feature needs js to exist, the feature doesn't exist here.

**whitespace over ornament.** where other designs reach for a divider, a card, or a background color, this one reaches for a blank line. the layout is a single centered column capped at a comfortable measure; nothing fights the text for attention.

**brutalism, not hostility.** the aesthetic is raw, not user-hostile. type is legible, line-height is generous, the measure is narrow enough to read without fatigue, and dark mode is automatic. the goal is clarity stripped of decoration, not the appearance of clarity at the cost of it.

**the spec resists growth.** every new token, component, or rule is a small failure of restraint. before adding anything, ask whether the page truly needs it, or whether the existing primitives already cover it. the shortest version of this spec that still describes the site is the correct one.

## structure (reference)

- all tokens live as css custom properties on `:root` in `global.css` — the single source of truth for values
- one stylesheet, no scoped or inline styles in components
- single centered column, capped at `--max-width`, sticky footer via flex column with `min-height: 100dvh`
- header and footer separated from content by `<hr>` rules

## type (reference)

- self-hosted switzer (400 + 600), `font-display: block` to avoid fouc
- one family, two sizes (body + metadata), one generous line-height
- monospace is the single carve-out: inline and block `code` use the browser default monospace stack, because code is unreadable in proportional type

## color (reference)

- `--color-fg` and `--color-bg`, swapped under `prefers-color-scheme: dark`
- `color-scheme: light dark` on `:root` plus a matching `<meta>` in `<head>` to align form controls, scrollbars, and initial paint

## components (reference)

- **tags** — inline, `#` prefix via `::before`, metadata size
- **time** — metadata size, sits inline before tags
- **pagination** — flex row, space-between
- **article content** — dash-marker `ul`, decimal `ol`, thick left border on `blockquote`, bordered `pre` with horizontal scroll, monospace inline `code`, responsive images
- **links** — underlined by default, underline removed on hover

## extending

if a new element isn't covered by the existing primitives, first justify it against the philosophy above. if it survives, extend this doc, then add the rule to `global.css`. never the other way around.
