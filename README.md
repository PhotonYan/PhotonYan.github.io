# PhotonYan.github.io

Source for Shaoheng Yan's personal academic website at `https://photonyan.github.io`.

The site is a customized Jekyll site based on the Chirpy theme. It hosts blog posts, academic notes, profile information, publications, curriculum tracking, embedded course graph visualizations, and static PDFs.

## Quick Start

```bash
export PATH="/opt/homebrew/opt/ruby/bin:$PATH" # macOS/Homebrew Ruby, if needed
bundle install
npm install
bundle exec jekyll serve --livereload
```

Open `http://127.0.0.1:4000`.

Alternative helper:

```bash
bash tools/run.sh
```

## Project Layout

| Path | Purpose |
| --- | --- |
| `_config.yml` | Site configuration, metadata, theme options, pagination, PWA settings, and collection defaults. |
| `_posts/` | Blog posts and academic notes. |
| `_tabs/` | Top-level navigation pages such as About, Archives, Categories, Tags, and Passages. |
| `_data/` | Structured data used by templates, especially profile and curriculum data in `_data/about.yml`. |
| `_includes/` | Reusable Liquid/HTML components. Custom About-page components live in `_includes/about/`. |
| `_layouts/` | Page, post, archive, tag, category, and default layouts. |
| `_sass/` | SCSS source for the theme and local styles. |
| `_javascript/` | JavaScript source bundled by Rollup. |
| `assets/` | Published static assets: images, PDFs, generated JavaScript, generated graph HTML/JSON, favicons, and feeds. |
| `docs/` | Project documentation and retained upstream theme reference files. |
| `tools/` | Helper scripts inherited from Chirpy. Use `run.sh` and `test.sh`; avoid `init.sh` and `release.sh` for normal site work. |

## Documentation

- `docs/DEVELOPMENT.md`: development setup, build commands, deployment, and troubleshooting.
- `docs/CONTENT.md`: content editing guide for posts, tabs, profile data, assets, and the curriculum graph.
- `docs/CONTRIBUTING.md`: contribution checklist for this personal site.
- `docs/SECURITY.md`: vulnerability reporting policy.

## Main Workflows

### Serve Locally

```bash
bundle exec jekyll serve --livereload
```

### Build The Site

```bash
bundle exec jekyll build
```

The generated site is written to `_site/`.

### Build Theme Assets

```bash
npm run build
```

This runs:

- `npm run build:css`: purges Bootstrap CSS into `_sass/vendors/_bootstrap.scss`.
- `npm run build:js`: bundles `_javascript/` into `assets/js/dist/*.min.js`.

### Lint SCSS

```bash
npm test
```

`npm test` currently runs the Stylelint SCSS check.

### Build And Check Links

```bash
bash tools/test.sh
```

This produces `_site/` and runs `htmlproofer` with external URL checks disabled.

## Deployment

Deployment is handled by `.github/workflows/jekyll.yml`.

- Trigger: push to `gh-pages`, or manual workflow dispatch.
- Build runtime: Ubuntu 22.04 with Ruby 3.1.
- Build command: `bundle exec jekyll build --baseurl "${{ steps.pages.outputs.base_path }}"`.
- Output artifact: `_site/`.
- Destination: GitHub Pages.

## Important Notes

- The branch used by the current deployment workflow is `gh-pages`.
- `tools/init.sh` resets a Chirpy starter environment and removes posts. Do not run it in this customized site unless intentionally rebuilding from the upstream theme.
- `tools/release.sh` is for releasing the Chirpy gem upstream and is not part of the personal website deployment workflow.
- The parent workspace has graph source files in `../graph/`; the live embedded graph files used by the site are in `assets/html/`.
