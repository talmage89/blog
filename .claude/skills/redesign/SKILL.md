---
name: redesign
description: Redesign the site's visual identity. Use when the user wants to change the look and feel of the blog.
disable-model-invocation: true
---

# Redesign

You are redesigning a blog. Read `docs/spec.md` and `docs/design.md` before doing anything.

## 1. Establish direction

Ask the user if they have a visual direction in mind. If they do, use it. If they don't, propose a bold aesthetic — not a template, not a default. One sentence that captures the entire feel. Get agreement before moving on.

Avoid generic AI output: no pastel palettes, no corporate blues, no hero-with-cards layouts, no Inter/Poppins, no centered-symmetrical-everything. Make a choice and commit to it.

## 2. Update the design doc

Rewrite `docs/design.md` to reflect the new direction. The philosophy section is the most important — it governs everything downstream. Update tokens, component styles, and structure to match.

Do not touch `docs/spec.md`. The spec describes what the site does. The design doc describes how it looks.

## 3. Update the code

Make `src/styles/global.css` and any affected components compliant with the new design doc. All styling stays centralized in `global.css`.

## 4. Review with the user

Start the dev server. The user will look at the site and tell you what to change. Iterate until they're satisfied. Update the design doc to reflect any changes made during iteration.
