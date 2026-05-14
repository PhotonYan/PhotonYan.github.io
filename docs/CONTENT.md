# Content Guide

This guide explains where site content lives and how to edit it without touching theme internals unnecessarily.

## Content Locations

| Content | Location |
| --- | --- |
| Blog posts and long-form notes | `_posts/` |
| Main navigation pages | `_tabs/` |
| About page structured data | `_data/about.yml` |
| About page section templates | `_includes/about/` |
| Static images | `assets/img/` |
| Static PDFs | `assets/pdfs/` |
| Embedded graph HTML/JSON | `assets/html/` |
| Generated search/PWA data | `assets/js/data/` |

## Posts

Create posts in `_posts/` with this filename pattern:

```text
YYYY-MM-DD-title.md
```

Recommended front matter:

```yaml
---
title: "Post Title"
description: "Short SEO and preview description"
author: photon
date: 2026-01-01 12:00:00 +0800
categories: [Courses, Math]
tags: [Math, Physics]
math: true
mermaid: true
image:
  path: /assets/img/2026-01-01-post-title/cover.png
---
```

Notes:

- `layout: post` is optional for posts because `_config.yml` sets it by default.
- Use `math: true` for LaTeX-heavy posts.
- Use `mermaid: true` when the post contains Mermaid diagrams.
- Keep `author: photon` unless intentionally adding another author in `_data/authors.yml`.
- Categories and tags can be either YAML arrays or plain values, but arrays are clearer for multi-value entries.

## Markdown Features

Chirpy supports prompt blocks used by existing posts:

```markdown
> Important note.
{: .prompt-info }

> Tip text.
{: .prompt-tip }
```

Use fenced code blocks with a language label:

````markdown
```python
print("hello")
```
````

For equations, prefer standard Markdown math:

```markdown
Inline math: $E = mc^2$

Display math:

$$
\int_a^b f(x)\,dx
$$
```

## Images And PDFs

Suggested image layout for a post:

```text
assets/img/YYYY-MM-DD-post-title/
  cover.png
  figure-1.png
```

Reference images with root-relative paths:

```markdown
![Cover](/assets/img/2026-01-01-post-title/cover.png)
```

Reference PDFs the same way:

```markdown
[Download notes](/assets/pdfs/MinP-01.pdf)
```

If a PDF is the main content of a short post, use a brief post body that links to the PDF, matching the existing notes posts.

## About Page

The About page is `_tabs/about.md`, but most editable content lives in `_data/about.yml`.

Edit `_data/about.yml` for:

- Lead bio
- Research interests
- Internships and education
- Publications
- Current and upcoming courses
- Course archive
- Future plans
- Book projects
- Friend links

The page renders these sections through includes in `_includes/about/`. Change the include templates only when the display structure needs to change.

## Curriculum Graph Embed

The About page embeds:

```liquid
<iframe src="{{ site.baseurl }}/assets/html/demo.html"></iframe>
```

Live files used by the website:

- `assets/html/demo.html`
- `assets/html/curriculum_with_related.json`

Source files for regenerating the graph are in the parent workspace:

```text
../graph/
```

Typical update flow:

```bash
cd ../graph
python build_json.py
```

Then copy or sync the generated JSON into:

```text
../PhotonYan.github.io/assets/html/
```

The live embed HTML is `assets/html/demo.html`. Do not overwrite it with a prototype from `../graph/` unless the prototype has been adapted to fetch `/assets/html/curriculum_with_related.json`.

After copying, run the Jekyll server and inspect the About page.

## Navigation Tabs

Top-level navigation pages live in `_tabs/`.

Each tab uses front matter like:

```yaml
---
icon: fas fa-user-graduate
order: 1
---
```

Lower `order` values appear earlier in the sidebar. Icons are Font Awesome class names.

## SEO And Site Metadata

Edit `_config.yml` for:

- Site title, tagline, and description
- Canonical site URL
- Social profile links
- Avatar and preview image
- Analytics and comment providers
- PWA cache settings

Do not change `baseurl` unless deploying the site under a subpath.

## Pre-Publish Checklist

Before pushing content:

```bash
bundle exec jekyll build
```

For template, navigation, or layout changes:

```bash
npm test
bash tools/test.sh
```

Manually inspect:

- Home page
- Updated post or page
- About page if `_data/about.yml` or graph assets changed
- Mobile width for posts with large equations, tables, images, or iframes
