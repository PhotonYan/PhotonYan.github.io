# Development Guide

This guide covers local setup, build commands, validation, deployment, and common maintenance risks for `PhotonYan.github.io`.

## Requirements

- Ruby `>= 3.1`
- Bundler
- Node.js and npm
- Git

Optional tools:

- Python with `pandas`, `networkx`, and `matplotlib` for regenerating curriculum graph files from the parent workspace `graph/` directory.
- A CJK font for `graph/build_graph_pdf.py` when generating graph PDFs.

## Setup

Check the Ruby selected by the shell:

```bash
ruby -v
which ruby
```

On macOS, avoid the system Ruby at `/usr/bin/ruby` because it can be too old for this project. If Homebrew Ruby is installed, put it first:

```bash
export PATH="/opt/homebrew/opt/ruby/bin:$PATH"
```

Then install dependencies:

```bash
bundle install
npm install
```

The repository currently contains `Gemfile.lock` and `package-lock.json`, but `.gitignore` also lists those files. Keep that dependency policy in mind before deleting or regenerating lock files.

## Local Server

```bash
bundle exec jekyll serve --livereload
```

Open `http://127.0.0.1:4000`.

Helper script:

```bash
bash tools/run.sh
```

Useful helper options:

```bash
bash tools/run.sh --host 0.0.0.0
bash tools/run.sh --production
```

## Build Commands

Build the Jekyll site:

```bash
bundle exec jekyll build
```

Build JavaScript and CSS assets:

```bash
npm run build
```

Build only JavaScript:

```bash
npm run build:js
```

Build only purged Bootstrap CSS:

```bash
npm run build:css
```

Watch JavaScript during theme development:

```bash
npm run watch:js
```

## Validation

Run SCSS linting:

```bash
npm test
```

Build and run HTML checks:

```bash
bash tools/test.sh
```

`tools/test.sh`:

1. Removes `_site/`.
2. Builds with `JEKYLL_ENV=production`.
3. Runs `htmlproofer` with external URL checks disabled.

Use this before pushing structural template changes, navigation changes, or large content updates.

## Asset Pipeline

### JavaScript

- Source: `_javascript/`
- Config: `rollup.config.js`
- Output: `assets/js/dist/*.min.js`

The Rollup build creates bundles for `commons`, `home`, `categories`, `page`, `post`, `misc`, `theme`, `app`, and `sw`.

### CSS

- Source: `_sass/`
- Bootstrap purge script: `purgecss.js`
- Output: `_sass/vendors/_bootstrap.scss`

If new Bootstrap or Font Awesome utility classes are generated dynamically in Liquid or JavaScript, add safelist entries to `purgecss.js` or `purgecss.config.js` before running the production build.

### Static Assets

- Images: `assets/img/`
- PDFs and downloadable files: `assets/pdfs/`
- Embedded HTML/JSON such as curriculum graph assets: `assets/html/`

Use root-relative URLs in content, for example:

```markdown
![Cover](/assets/img/2025-04-18-Real-Analysis/cover.png)
[PDF](/assets/pdfs/MinP-01.pdf)
```

## Deployment

Deployment is configured in `.github/workflows/jekyll.yml`.

- Trigger branch: `gh-pages`
- Runtime: Ubuntu 22.04, Ruby 3.1
- Pages artifact: `_site/`

Before pushing to `gh-pages`, run:

```bash
npm test
bundle exec jekyll build
```

For broader HTML checks:

```bash
bash tools/test.sh
```

## Troubleshooting

### Sass Embedded Problems In CI

The workflow pins `sass-embedded` to `~> 1.77` before installing gems. Keep that pin unless the GitHub Pages build has been tested with a newer version.

### Stale Generated Site

Delete `_site/` and rebuild:

```bash
rm -rf _site
bundle exec jekyll build
```

### Service Worker Cache

The site has PWA support enabled. If local browser output looks stale, hard refresh, unregister the local service worker in devtools, or test in a fresh browser profile.

### Missing Generated JS Or CSS

Run:

```bash
npm run build
```

Check that `assets/js/dist/` and `_sass/vendors/_bootstrap.scss` exist afterward.

### Upstream Theme Scripts

`tools/init.sh` and `tools/release.sh` come from Chirpy's theme maintenance workflow.

Do not run `tools/init.sh` during normal work. It can reset the repo to an upstream release state and remove posts.

Do not run `tools/release.sh` for this personal site. It is designed for releasing the Chirpy gem.
