# Security Policy

This is a static personal website deployed through GitHub Pages. Most security-sensitive changes are configuration changes, third-party embeds, dependency updates, JavaScript changes, or changes to generated assets.

## Supported Site

Only the current `gh-pages` branch of `PhotonYan.github.io` is maintained for the live website.

The archived folders in the parent workspace, including `olds/`, `website2/`, and `jekyll/`, are not maintained as live deploy targets unless explicitly revived.

## Reporting

If you find a vulnerability or unsafe configuration in the live site, report it to the site owner at `photonyan@stu.pku.edu.cn`.

Please include:

- Affected URL or file path.
- Steps to reproduce.
- Impact and any known exploit conditions.
- Suggested fix, if available.

Do not publicly disclose exploitable details before the owner has had time to respond.

## Areas To Review Carefully

- Third-party scripts, embeds, analytics, and comments.
- Service worker and PWA cache behavior.
- JavaScript bundles in `assets/js/dist/`.
- Raw HTML in posts, tabs, and includes.
- Downloadable files under `assets/pdfs/` or other static asset directories.
