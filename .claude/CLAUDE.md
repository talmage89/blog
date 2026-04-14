# Project Guidelines

## Code Quality

The entire codebase MUST be fully clean before committing any code. `pnpm check` must pass with zero errors, warnings, or hints — even from code that wasn't changed.

`pnpm check` runs: `astro check && eslint . && prettier --check .`
