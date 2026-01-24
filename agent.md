# Agent Documentation - PhotonYan.github.io

## Repository Overview

This repository hosts **Shaoheng Yan's personal academic website** built with Jekyll and the Chirpy theme. It is deployed on GitHub Pages at `https://photonyan.github.io`.

### Owner Information
- **Name**: Shaoheng Yan (严绍恒)
- **Affiliation**: Undergraduate at Peking University (YuanPei College)
- **Major**: Artificial Intelligence (B.E.) + Physics (B.S.)
- **Email**: photonyan@stu.pku.edu.cn
- **GitHub**: [@PhotonYan](https://github.com/photonyan)

---

## Project Structure

### Core Technology Stack
- **Static Site Generator**: Jekyll 4.3
- **Theme**: [Chirpy](https://github.com/cotes2020/jekyll-theme-chirpy) v7.2.4
- **Language**: Ruby 3.1
- **Deployment**: GitHub Pages
- **Build Tools**: 
  - Rollup (JavaScript bundling)
  - PurgeCSS (CSS optimization)
  - Babel (JavaScript transpilation)
  - Stylelint (SCSS linting)

### Directory Structure

```
PhotonYan.github.io/
├── _config.yml              # Jekyll site configuration
├── _data/                   # Site data files (locales, contact info, etc.)
├── _includes/               # Reusable HTML components
├── _layouts/                # Page layout templates
├── _posts/                  # Blog posts (markdown files)
│   ├── 2024-09-04-Hello-World.md
│   ├── 2024-10-25-MinP-01.md
│   ├── 2024-11-01-announcement-02.md
│   ├── 2024-11-10-announcement-03.md
│   └── 2025-04-18-Real-Analysis.md
├── _tabs/                   # Main navigation pages
│   ├── about.md             # About page with CV/bio
│   ├── archives.md          # Post archives
│   ├── categories.md        # Category listing
│   ├── passages.md          # Custom passage collection
│   └── tags.md              # Tag listing
├── _sass/                   # SCSS stylesheets
├── _javascript/             # JavaScript modules
├── _plugins/                # Custom Jekyll plugins
├── assets/                  # Static assets
│   ├── css/                 # Compiled CSS
│   ├── img/                 # Images
│   ├── js/                  # Compiled JavaScript
│   ├── html/                # Embedded HTML content
│   └── pdfs/                # PDF documents
├── docs/                    # Documentation files
├── tools/                   # Build and release scripts
├── package.json             # Node.js dependencies
├── Gemfile                  # Ruby dependencies
├── rollup.config.js         # JavaScript build configuration
└── purgecss.js              # CSS purging configuration
```

---

## Key Configuration

### Site Settings (`_config.yml`)
- **Title**: PhotonYan
- **Tagline**: "A junior, maybe forever."
- **Timezone**: Asia/Shanghai
- **Language**: English (en)
- **URL**: https://photonyan.github.io
- **Avatar**: `/assets/img/favicons/head.jpg`
- **PWA**: Enabled (Progressive Web App support)
- **Pagination**: 10 posts per page

### Theme Features
- Responsive design
- Dark/Light mode toggle
- Table of Contents (TOC) for posts
- SEO optimization
- Syntax highlighting (Rouge)
- Math rendering (KaTeX/MathJax)
- Category and tag archives
- Search functionality

---

## Content Management

### Creating New Posts

Posts are stored in the `_posts/` directory with the naming convention: `YYYY-MM-DD-title.md`

**Required Front Matter:**
```yaml
---
layout: post
title: "Your Post Title"
date: YYYY-MM-DD
categories: Category-Name
tags: tag1 tag2
description: "Brief description for SEO"
---
```

### Current Post Categories
- Test-Documents
- Announcements
- Academic content (Real Analysis, etc.)

### About Page Content

The `_tabs/about.md` file contains:
- Personal biography
- Research interests (Graph Learning, AI4S, Computer Vision)
- Education history
- Internship experience (ByteDance - Algorithm Intern)
- Publications (GeoRecon paper)
- Course history (organized by semester)
- Book projects
- Friend links

---

## Build and Deployment

### NPM Scripts

```bash
# Build all assets (CSS + JS)
npm run build

# Build CSS only (with PurgeCSS)
npm run build:css

# Build JavaScript (production)
npm run build:js

# Watch JavaScript for changes (development)
npm run watch:js

# Lint SCSS files
npm run lint:scss

# Auto-fix SCSS issues
npm run lint:fix:scss

# Run tests
npm test
```

### Jekyll Build

```bash
# Install Ruby dependencies
bundle install

# Serve locally (with hot reload)
bundle exec jekyll serve

# Build for production
bundle exec jekyll build
```

### Deployment Process

The site is automatically deployed to GitHub Pages when changes are pushed to the production branch. The workflow is managed through:
- GitHub Actions (`.github/` workflows)
- Husky for pre-commit hooks (`.husky/`)
- Semantic release automation

---

## Development Guidelines

### Adding New Content

1. **Blog Posts**: Create new `.md` files in `_posts/` with proper front matter
2. **Pages**: Add to `_tabs/` for navigation items
3. **Assets**: 
   - Images → `assets/img/`
   - PDFs → `assets/pdfs/`
   - Custom HTML → `assets/html/`

### Styling

- Main styles are in `_sass/`
- Uses SCSS with modular architecture
- PurgeCSS removes unused styles in production
- Configuration in `.stylelintrc.json`

### JavaScript

- Source files in `_javascript/`
- Bundled with Rollup
- Transpiled with Babel for browser compatibility
- Target: Last 2 versions, >0.2% usage, not dead browsers

### Code Quality

- **Markdown**: Linting via `.markdownlint.json`
- **SCSS**: Linting via Stylelint with standard-scss config
- **Commits**: Conventional commits enforced via commitlint
- **Editor**: EditorConfig settings in `.editorconfig`

---

## Research and Academic Focus

Based on the about page, the site owner's research interests include:

1. **Graph Representation Learning & Equivariant Neural Networks**
2. **AI for Science (AI4S)**
   - Molecular modeling
   - Drug discovery
   - Machine learning force fields (MLFF)
3. **Computer Vision** (secondary interest)

### Publications
- **GeoRecon**: Graph-Level Representation Learning for 3D Molecules via Reconstruction-Based Pretraining (ArXiv preprint)
  - Authors: Shaoheng Yan, Zian Li, Muhan Zhang

---

## Current Status (2025-2026 Academic Year)

The site reflects the owner's second year of undergraduate studies with courses including:
- Machine Learning (with public notes)
- Reinforcement Learning
- Quantum Mechanics A
- Discrete Mathematics (Turing Class)
- Data Structures & Algorithms A
- Functional Analysis
- And many more (see `_tabs/about.md` for full list)

---

## Maintenance Tasks

### Regular Updates
1. Add new blog posts for announcements or academic content
2. Update course list in about page each semester
3. Add new publications as they are released
4. Update internship/education sections

### Technical Maintenance
1. Keep dependencies updated (`npm update`, `bundle update`)
2. Monitor and fix any broken links
3. Optimize images for faster loading
4. Review and merge theme updates from upstream Chirpy

### SEO Best Practices
- Each post should have a descriptive title and meta description
- Use appropriate heading hierarchy (H1 → H6)
- Include alt text for images
- Maintain proper internal linking
- Keep sitemap and robots.txt updated (automated)

---

## Version Control

### Git Configuration
- `.gitignore`: Excludes build artifacts, dependencies, and system files
- `.gitattributes`: Handles line endings and file attributes
- `.gitmodules`: Manages theme submodule

### Branches
- **production**: Main deployment branch (semantic-release configured)
- Other branches: Development and feature work

---

## Dependencies

### Ruby Gems
- `jekyll` (~> 4.3)
- `jekyll-paginate` (~> 1.1)
- `jekyll-redirect-from` (~> 0.16)
- `jekyll-seo-tag` (~> 2.8)
- `jekyll-archives` (~> 2.2)
- `jekyll-sitemap` (~> 1.4)
- `jekyll-include-cache` (~> 0.2)

### Node Packages
**Runtime:**
- `@popperjs/core` (^2.11.8)
- `bootstrap` (^5.3.3)

**Development:**
- Babel ecosystem (core, plugins, preset-env)
- Rollup and plugins (babel, node-resolve, terser)
- Stylelint and SCSS config
- Semantic-release tools
- Husky, PurgeCSS, Concurrently

---

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check Ruby version (must be ~> 3.1)
   - Run `bundle install` to ensure all gems are installed
   - Clear Jekyll cache: `bundle exec jekyll clean`

2. **Stylesheet Issues**
   - Run `npm run build:css` to regenerate styles
   - Check for SCSS syntax errors with `npm run lint:scss`

3. **JavaScript Errors**
   - Rebuild with `npm run build:js`
   - Check browser console for specific errors
   - Verify Rollup configuration

4. **Posts Not Showing**
   - Ensure date in filename matches front matter
   - Check that date is not in the future
   - Verify front matter YAML syntax

---

## External References

- **Theme Documentation**: https://chirpy.cotes.page/
- **Jekyll Documentation**: https://jekyllrb.com/docs/
- **GitHub Pages**: https://docs.github.com/en/pages

---

## Agent Instructions

When working with this repository, an AI agent should:

1. **Respect the Structure**: Follow the established directory conventions
2. **Maintain Consistency**: Use the same front matter format for new posts
3. **Update About Page**: When adding significant achievements, update `_tabs/about.md`
4. **Test Locally**: Always test changes with `bundle exec jekyll serve` before pushing
5. **Follow Conventions**: Use semantic commit messages and proper markdown formatting
6. **Preserve Assets**: Don't delete files in `assets/` without confirmation
7. **Keep Dependencies Updated**: But test thoroughly after updates
8. **Respect Theme Customizations**: Document any modifications to theme files

---

## Future Enhancements

Potential improvements for the site:

1. **Content**
   - Add more research blog posts
   - Create tutorials or learning notes
   - Add project showcases with demos

2. **Features**
   - Enable comment system (Disqus/Utterances/Giscus)
   - Add analytics (Google Analytics or privacy-focused alternatives)
   - Implement page views tracking
   - Add RSS feed customization

3. **Performance**
   - Image optimization pipeline
   - Lazy loading for assets
   - Service worker for better PWA experience

4. **Accessibility**
   - ARIA labels for better screen reader support
   - Keyboard navigation improvements
   - Color contrast verification

---

**Last Updated**: 2026-01-24
**Repository Version**: Based on Chirpy v7.2.4
**Maintained By**: Shaoheng Yan (PhotonYan)
