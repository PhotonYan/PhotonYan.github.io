# Contributing

This repository is a customized personal academic website, not the upstream Chirpy theme project. Contributions should be scoped to site content, documentation, accessibility, broken links, small template fixes, or clearly requested feature work.

For upstream Chirpy bugs or theme feature requests, use the Chirpy project instead: `https://github.com/cotes2020/jekyll-theme-chirpy`.

## Before Changing Files

1. Read `README.md`, `docs/DEVELOPMENT.md`, and `docs/CONTENT.md`.
2. Check whether the target file is site-specific or inherited theme code.
3. Avoid changing personal biographical claims, publications, grades, affiliations, or course history unless the owner explicitly requested it.
4. Avoid adding large binary files unless they are necessary site assets.

## Local Checks

Install dependencies:

```bash
export PATH="/opt/homebrew/opt/ruby/bin:$PATH" # macOS/Homebrew Ruby, if needed
bundle install
npm install
```

For content-only changes:

```bash
bundle exec jekyll build
```

For template, SCSS, JavaScript, navigation, or asset-pipeline changes:

```bash
npm test
bash tools/test.sh
```

## Content Conventions

- Put posts in `_posts/` with `YYYY-MM-DD-title.md` filenames.
- Use `author: photon` for owner-authored posts.
- Store reusable profile and curriculum data in `_data/about.yml`.
- Store post images under `assets/img/`.
- Store PDFs under `assets/pdfs/`.
- Keep generated graph files for the live site in `assets/html/`.

See `docs/CONTENT.md` for details.

## Development Conventions

- Prefer the existing Chirpy/Liquid structure over new frameworks.
- Keep local customizations small and easy to separate from upstream theme code.
- If new Bootstrap or Font Awesome classes are generated dynamically, update the PurgeCSS safelist before building production assets.
- Do not run `tools/init.sh` or `tools/release.sh` for routine work.

## Pull Request Checklist

- The change has a clear site purpose.
- The site builds locally.
- Updated content renders correctly in a browser.
- New links use stable URLs or local root-relative paths.
- Large generated artifacts are necessary and intentionally included.
