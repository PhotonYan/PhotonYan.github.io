---
# the default layout is 'page'
icon: fas fa-user-graduate
order: 1
---

<style>
  @property --about-light-progress {
    syntax: "<percentage>";
    inherits: true;
    initial-value: 0%;
  }

  .dynamic-title {
    display: none;
  }

  html:has(.about-page) {
    --about-light-progress: 0%;
    --about-cover-bg: oklch(18% 0.037 252);
    --about-day-bg: oklch(98% 0.004 252);
    --about-ambient-bg: color-mix(
      in oklch,
      var(--about-cover-bg) calc(100% - var(--about-light-progress)),
      var(--about-day-bg) var(--about-light-progress)
    );
    background: var(--about-ambient-bg) !important;
    scroll-behavior: auto;
    overscroll-behavior-y: contain;
    transition: --about-light-progress 180ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  body:has(.about-page),
  body:has(.about-page) #main-wrapper,
  body:has(.about-page) #main-wrapper > .container,
  body:has(.about-page) #main-wrapper > .container > .row {
    background: var(--about-ambient-bg) !important;
    transition: background-color 180ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  body:has(.about-page) {
    min-height: 100vh;
    overflow-x: hidden;
  }

  body:has(.about-page) #sidebar,
  body:has(.about-page) #topbar-wrapper,
  body:has(.about-page) #panel-wrapper,
  body:has(.about-page) #tail-wrapper {
    display: none !important;
  }

  body:has(.about-page) #main-wrapper {
    display: block !important;
    width: 100% !important;
    max-width: none !important;
    min-height: 100vh;
    margin-left: 0 !important;
  }

  body:has(.about-page) #main-wrapper > .container,
  body:has(.about-page) #main-wrapper > .container > .row {
    width: 100% !important;
    max-width: none !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  body:has(.about-page) #main-wrapper > .container > .row.d-none {
    display: flex !important;
  }

  body:has(.about-page) #search-result-wrapper {
    display: none !important;
  }

  body:has(.about-page) main[aria-label="Main Content"],
  body:has(.about-page) article.px-1,
  body:has(.about-page) .content {
    width: 100% !important;
    flex: 0 0 100% !important;
    max-width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
    min-width: 0;
    background: transparent !important;
  }

  body:has(.about-page) #main {
    padding-bottom: 0 !important;
  }

  [data-mode="dark"]:has(.about-page) {
    --about-cover-bg: oklch(15% 0.035 252);
    --about-day-bg: oklch(23% 0.017 250);
  }

  .about-page {
    --about-display-font: "Avenir Next", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    --about-text-font: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    --about-page-bg: var(--about-ambient-bg);
    --about-cover-pull: 0px;
    --about-cover-offset: 0px;
    --about-detail-preview: 0px;
    --about-detail-offset: 0px;
    --about-turn-progress: 0;
    --about-cover-scale: 1;
    --about-edge-offset: 20px;
    --about-edge-opacity: 0;
    --about-cue-opacity: 0.68;
    --about-cue-scale: 1;
    --about-cue-y: 0px;
    --about-paper: oklch(98% 0.004 252);
    --about-paper-strong: oklch(94.5% 0.007 252);
    --about-ink: oklch(22% 0.024 252);
    --about-muted: oklch(46% 0.024 252);
    --about-soft: oklch(61% 0.02 252);
    --about-line: oklch(88% 0.012 252);
    --about-line-strong: oklch(72% 0.021 250);
    --about-copper: oklch(50% 0.101 235);
    --about-blue: oklch(45% 0.105 236);
    --about-green: oklch(53% 0.088 156);
    --about-panel: oklch(99% 0.004 245);
    --about-shadow: 0 18px 50px oklch(22% 0.03 247 / 0.08);
    --pub-line-left: 111.5px;
    --pub-list-gap: 2px;
    --pub-date-col: 63px;
    --pub-node-col: 63px;
    --pub-item-gap: 17px;
    --pub-item-padding-top: 0px;
    --pub-item-padding-bottom: 0px;
    --pub-date-padding-top: 15px;
    --pub-node-margin-top: 15px;
    --pub-content-padding-top: 10px;
    --pub-content-padding-bottom: 13px;
    --pub-badge-margin-top: 11px;
    --pub-badge-column-gap: 6.5px;
    --pub-badge-row-gap: 11px;
    --pub-spotlight-offset-x: -6.5px;
    --pub-spotlight-offset-y: 0px;
    --pub-spotlight-margin-left: -1.5px;
    --pub-spotlight-margin-right: 0px;
    --pub-spotlight-padding-x: 8px;
    --pub-spotlight-padding-y: 1px;
    --pub-line-color: oklch(72% 0.021 250);
    --pub-date-color: oklch(0.45 0.105 236);
    --pub-node-color: oklch(0.45 0.105 236);
    --pub-title-color: oklch(0.22 0.024 252);
    --pub-author-color: oklch(0.46 0.024 252);
    --pub-link-color: oklch(0.45 0.105 236);
    --pub-badge-color: oklch(0.61 0.02 252);
    --pub-spotlight-bg: oklch(0.96 0.025 35);
    --pub-spotlight-color: oklch(0.52 0.35 78);
    --pub-venue-color: oklch(0.46 0.024 252);
    color: var(--about-ink);
    font-family: var(--about-text-font);
    width: 100%;
    max-width: none;
    min-width: 0;
    margin: 0;
    padding: 0;
    border-radius: 0;
    background: var(--about-page-bg);
    overflow-x: clip;
    transition: --about-light-progress 180ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  [data-mode="dark"] .about-page {
    --about-paper: oklch(23% 0.017 250);
    --about-paper-strong: oklch(28% 0.021 249);
    --about-ink: oklch(91% 0.011 245);
    --about-muted: oklch(72% 0.018 246);
    --about-soft: oklch(63% 0.018 246);
    --about-line: oklch(38% 0.025 249);
    --about-line-strong: oklch(54% 0.041 238);
    --about-copper: oklch(72% 0.087 232);
    --about-blue: oklch(72% 0.091 226);
    --about-green: oklch(73% 0.085 153);
    --about-panel: oklch(25% 0.022 249);
    --about-shadow: 0 24px 70px oklch(8% 0.018 250 / 0.42);
    --about-cover-bg: oklch(15% 0.035 252);
    --about-day-bg: oklch(23% 0.017 250);
  }

  .about-page,
  .about-page *,
  .about-page *::before,
  .about-page *::after {
    box-sizing: border-box;
    letter-spacing: 0;
    min-width: 0;
  }

  .about-page a {
    color: var(--about-blue);
    text-decoration-thickness: 1px;
    text-underline-offset: 0.16em;
  }

  .about-page a:hover {
    color: var(--about-copper);
  }

  .about-home-link {
    position: fixed;
    top: clamp(0.85rem, 2vw, 1.3rem);
    left: clamp(0.85rem, 2vw, 1.3rem);
    z-index: 30;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    min-height: 40px;
    padding: 0.35rem 0;
    border: 0;
    border-bottom: 1px solid color-mix(
      in oklch,
      oklch(82% 0.024 246 / 0.38) calc(100% - var(--about-light-progress)),
      oklch(55% 0.022 250 / 0.48) var(--about-light-progress)
    );
    background: transparent;
    color: color-mix(
      in oklch,
      oklch(92% 0.012 248) calc(100% - var(--about-light-progress)),
      oklch(34% 0.025 252) var(--about-light-progress)
    ) !important;
    font-family: var(--about-display-font);
    font-size: 0.86rem;
    font-weight: 600;
    line-height: 1;
    text-decoration: none !important;
    opacity: 0.78;
    transition: opacity 160ms ease, transform 160ms ease;
  }

  .about-home-link:hover {
    opacity: 1;
    transform: translateY(-1px);
  }

  .about-cover-stage {
    position: relative;
    min-height: 100svh;
    overflow: hidden;
    background: var(--about-cover-bg);
    scroll-snap-align: start;
  }

  .about-cover-stage::before {
    content: "";
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 3;
    height: calc(24px + var(--about-detail-preview));
    background:
      linear-gradient(
        to bottom,
        oklch(81% 0.024 247 / 0.2),
        oklch(81% 0.024 247 / 0.06) 32%,
        var(--about-day-bg)
      ),
      var(--about-day-bg);
    border-top: 1px solid oklch(82% 0.025 247 / 0.28);
    box-shadow: 0 -18px 52px oklch(15% 0.025 250 / 0.12);
    opacity: var(--about-edge-opacity);
    transform: translate3d(0, var(--about-edge-offset), 0);
    pointer-events: none;
  }

  .about-cover-stage::after {
    content: "";
    position: fixed;
    left: 50%;
    bottom: clamp(1.05rem, 2.2vw, 1.7rem);
    z-index: 4;
    width: 42px;
    height: 2px;
    background: oklch(76% 0.035 245 / 0.62);
    border-radius: 999px;
    opacity: var(--about-cue-opacity);
    transform: translateX(-50%) translate3d(0, var(--about-cue-y), 0) scaleX(var(--about-cue-scale));
    transform-origin: center;
    pointer-events: none;
  }

  .about-hero {
    position: relative;
    top: 0;
    display: grid;
    grid-template-columns: minmax(0, 650px) minmax(260px, 390px);
    justify-content: center;
    align-items: center;
    gap: clamp(2rem, 5vw, 4.5rem);
    width: 100%;
    min-height: 100svh;
    padding: clamp(4.4rem, 7vw, 6.6rem) clamp(1.35rem, 5vw, 5rem) clamp(3rem, 6vw, 5rem);
    border: 0;
    border-radius: 0;
    overflow: hidden;
    max-width: 100%;
    background:
      radial-gradient(circle at 74% 16%, oklch(67% 0.12 232 / 0.2), transparent 31%),
      linear-gradient(90deg, oklch(62% 0.035 245 / 0.13) 1px, transparent 1px),
      linear-gradient(0deg, oklch(62% 0.035 245 / 0.1) 1px, transparent 1px),
      linear-gradient(145deg, oklch(17% 0.04 253), oklch(24% 0.034 246));
    background-size: auto, 64px 64px, 64px 64px, auto;
    box-shadow: none;
    scroll-snap-align: start;
    transform: translate3d(0, var(--about-cover-offset), 0)
      scale(var(--about-cover-scale));
    transform-origin: center top;
    will-change: transform, opacity;
  }

  .about-page.is-cover-pulling .about-hero,
  .about-page.is-cover-pulling .about-detail,
  .about-page.is-cover-pulling .about-cover-stage::before,
  .about-page.is-cover-pulling .about-cover-stage::after {
    transition: none;
  }

  .about-page.is-cover-resetting .about-hero,
  .about-page.is-cover-resetting .about-detail,
  .about-page.is-cover-resetting .about-cover-stage::before,
  .about-page.is-cover-resetting .about-cover-stage::after {
    transition:
      transform 420ms cubic-bezier(0.16, 1, 0.3, 1),
      height 420ms cubic-bezier(0.16, 1, 0.3, 1),
      opacity 240ms ease;
  }

  .about-page.is-cover-unlocking .about-hero,
  .about-page.is-cover-unlocking .about-detail,
  .about-page.is-cover-unlocking .about-cover-stage::before,
  .about-page.is-cover-unlocking .about-cover-stage::after {
    transition:
      transform 680ms cubic-bezier(0.16, 1, 0.3, 1),
      height 680ms cubic-bezier(0.16, 1, 0.3, 1),
      opacity 260ms ease;
  }

  .about-hero > div,
  .about-portrait {
    position: relative;
    z-index: 1;
  }

  .about-kicker {
    margin: 0 0 1.35rem;
    font-family: var(--about-display-font);
    color: oklch(73% 0.118 232);
    font-size: 0.92rem;
    font-weight: 700;
  }

  .about-eyebrow {
    margin: 0 0 0.85rem;
    color: var(--about-blue);
    font-family: var(--about-display-font);
    font-size: 0.86rem;
    font-weight: 700;
  }

  .about-hero h1 {
    margin: 0;
    color: oklch(97% 0.009 248);
    font-family: var(--about-display-font);
    font-size: clamp(3.45rem, 6vw, 6rem);
    line-height: 0.94;
    font-weight: 700;
    overflow-wrap: break-word;
  }

  .about-hero h1 span {
    display: block;
    max-width: 10.5em;
    margin-top: 0.28em;
    color: oklch(80% 0.023 247);
    font-family: var(--about-display-font);
    font-size: 0.43em;
    font-weight: 500;
    line-height: 1.2;
  }

  .about-lede {
    max-width: 68ch;
    margin-top: 1.4rem;
    color: oklch(81% 0.017 247);
    font-size: 1.05rem;
    line-height: 1.78;
    overflow-wrap: break-word;
  }

  .about-lede strong,
  .about-lede em {
    color: oklch(96% 0.008 248);
  }

  .about-portrait {
    align-self: center;
    display: grid;
    margin: 0;
    overflow: visible;
  }

  .about-portrait img {
    width: 100%;
    max-height: min(70svh, 620px);
    aspect-ratio: 4 / 5;
    object-fit: cover;
    object-position: 50% 28%;
    border: 1px solid oklch(54% 0.05 246);
    border-radius: 0;
    filter: saturate(0.92) contrast(1.05);
  }

  .about-chalk-doodle {
    position: absolute;
    z-index: 2;
    display: block;
    overflow: visible;
    color: oklch(80% 0.17 80);
    fill: none;
    stroke: currentColor;
    stroke-linecap: round;
    stroke-linejoin: round;
    pointer-events: none;
    filter:
      drop-shadow(0 0 2px oklch(83% 0.17 80 / 0.5))
      drop-shadow(0 0 8px oklch(77% 0.18 78 / 0.22));
    mix-blend-mode: screen;
  }

  .about-chalk-doodle path,
  .about-chalk-doodle circle {
    vector-effect: non-scaling-stroke;
  }

  .about-chalk-main {
    stroke-width: 4.8;
  }

  .about-chalk-rub {
    stroke-width: 1.55;
    stroke-dasharray: 1 8;
    opacity: 0.62;
  }

  .about-chalk-faint {
    stroke-width: 3.2;
    opacity: 0.5;
  }

  .about-chalk-arrow {
    top: 50%;
    left: clamp(-6.5rem, -6.2vw, -4.7rem);
    width: clamp(4.7rem, 6.2vw, 6.4rem);
    transform: translateY(-44%);
  }

  .about-chalk-bulb {
    top: clamp(-6.45rem, -8.4vw, -4.7rem);
    right: clamp(-6rem, -5.1vw, -3.7rem);
    width: clamp(8.6rem, 10.2vw, 10.8rem);
  }

  .about-chalk-streaks {
    right: clamp(-3.95rem, -4vw, -2.4rem);
    bottom: clamp(-2.35rem, -3.1vw, -1.45rem);
    width: clamp(7.7rem, 8.4vw, 9.7rem);
  }

  @media (max-width: 1320px) and (min-width: 981px) {
    .about-chalk-bulb {
      right: -2rem;
      width: 8.7rem;
    }

    .about-chalk-streaks {
      right: -1.9rem;
      width: 8.2rem;
    }
  }

  .about-detail {
    position: relative;
    z-index: 2;
    min-height: 100svh;
    padding: clamp(4.5rem, 7vw, 6.25rem) clamp(1rem, 4vw, 3rem) clamp(5rem, 8vw, 7rem);
    background: var(--about-day-bg);
    scroll-snap-align: start;
    transform: translate3d(0, var(--about-detail-offset), 0);
    will-change: transform;
  }

  .about-section {
    width: min(1160px, 100%);
    margin-right: auto;
    margin-left: auto;
    margin-top: 0;
  }

  .about-detail > .about-section:first-child {
    margin-top: 0;
  }

  .about-detail > .about-section + .about-section {
    margin-top: clamp(4.7rem, 6.2vw, 6rem);
  }

  .about-section-head {
    display: grid;
    grid-template-columns: minmax(0, 0.42fr) minmax(0, 0.58fr);
    gap: 1.4rem;
    align-items: end;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--about-line);
  }

  .about-section h2 {
    margin: 0;
    color: var(--about-ink);
    font-family: var(--about-display-font);
    font-size: 2.1rem;
    line-height: 1.08;
    font-weight: 700;
  }

  .about-section-head p {
    margin: 0;
    color: var(--about-muted);
    font-size: 1rem;
    line-height: 1.66;
  }

  .about-research-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.9rem;
    margin-top: 1.25rem;
  }

  .research-tile,
  .timeline-panel,
  .study-card,
  .book-item,
  .friend-link {
    border: 0;
    border-radius: 0;
    background: transparent;
  }

  .research-tile {
    min-height: 100%;
    padding: 1.1rem;
    border: 1px solid var(--about-line);
    border-radius: 8px;
    background: var(--about-panel);
  }

  .research-icon {
    display: inline-grid;
    place-items: center;
    width: 42px;
    height: 42px;
    margin-bottom: 0.9rem;
    border: 1px solid var(--about-line-strong);
    border-radius: 8px;
    color: var(--about-copper);
    background: var(--about-paper);
    font-size: 1.05rem;
  }

  .research-tile h3,
  .timeline-panel h3,
  .study-card h3 {
    margin: 0 0 0.5rem;
    color: var(--about-ink);
    font-family: var(--about-display-font);
    font-size: 1.12rem;
    line-height: 1.24;
    font-weight: 700;
  }

  .research-tile p,
  .publication-item p,
  .timeline-panel p,
  .study-card p,
  .book-item p {
    margin: 0;
    color: var(--about-muted);
    line-height: 1.62;
  }

  .publication-item p {
    color: var(--pub-author-color, var(--about-muted));
  }

  .research-note {
    margin-top: 0.8rem !important;
    padding-top: 0.78rem;
    border-top: 1px solid var(--about-line);
    color: var(--about-soft) !important;
    font-size: 0.92rem;
  }

  .about-current {
    display: grid;
    grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
    gap: 1.1rem;
    margin-top: 1.25rem;
  }

  .about-statement {
    padding: 0;
    border: 0;
    border-radius: 0;
    background: transparent;
  }

  .about-statement p {
    margin: 0;
    color: var(--about-muted);
    font-size: 1.03rem;
    line-height: 1.74;
  }

  .about-statement p + p {
    margin-top: 1rem;
  }

  .about-thread-list {
    display: grid;
    gap: 0.95rem;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .about-thread-list li {
    padding: 0;
    border: 0;
    border-radius: 0;
    background: transparent;
  }

  .about-thread-list strong {
    display: block;
    margin-bottom: 0.28rem;
    color: var(--about-ink);
    font-family: var(--about-display-font);
    font-weight: 700;
  }

  .about-thread-list span {
    display: block;
    color: var(--about-muted);
    line-height: 1.55;
  }

  .publication-list {
    position: relative;
    display: grid;
    gap: var(--pub-list-gap, 0.72rem);
    margin-top: 1.55rem;
    padding-left: 0;
  }

  .publication-list::before {
    content: "";
    position: absolute;
    top: 0.78rem;
    bottom: 0.78rem;
    left: var(--pub-line-left, 7.15rem);
    width: 1px;
    background: linear-gradient(
      to bottom,
      transparent,
      var(--pub-line-color, var(--about-line-strong)) 8%,
      var(--pub-line-color, var(--about-line-strong)) 92%,
      transparent
    );
  }

  .publication-item {
    position: relative;
    display: grid;
    grid-template-columns:
      var(--pub-date-col, 6.3rem)
      var(--pub-node-col, 1.7rem)
      minmax(0, 1fr);
    align-items: start;
    gap: var(--pub-item-gap, 1rem);
    padding:
      var(--pub-item-padding-top, 0.25rem)
      0
      var(--pub-item-padding-bottom, 1rem);
    border: 0;
    background: transparent;
  }

  .publication-date {
    display: block;
    padding-top: var(--pub-date-padding-top, 0.95rem);
    color: var(--pub-date-color, var(--about-blue));
    font-family: var(--about-display-font);
    font-size: 0.92rem;
    font-weight: 700;
    line-height: 1;
    white-space: nowrap;
  }

  .publication-node {
    position: relative;
    z-index: 1;
    width: 0.78rem;
    height: 0.78rem;
    margin: var(--pub-node-margin-top, 0.92rem) auto 0;
    border: 2px solid var(--pub-node-color, var(--about-blue));
    border-radius: 999px;
    background: var(--about-day-bg);
    box-shadow: 0 0 0 6px var(--about-day-bg);
  }

  .publication-content {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 0.72rem 1rem;
    padding:
      var(--pub-content-padding-top, 0.74rem)
      0
      var(--pub-content-padding-bottom, 1.12rem);
    border-bottom: 0;
    background: transparent;
  }

  .publication-main {
    min-width: 0;
  }

  .publication-item h3 {
    margin: 0 0 0.45rem;
    color: var(--pub-title-color, var(--about-ink));
    font-family: var(--about-display-font);
    font-size: 1.06rem;
    line-height: 1.35;
    font-weight: 700;
  }

  .about-badges,
  .publication-links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
    align-items: center;
  }

  .publication-content .about-badges {
    gap: var(--pub-badge-row-gap, 0.45rem) var(--pub-badge-column-gap, 0.45rem);
    margin-top: var(--pub-badge-margin-top, 0);
  }

  .about-badge,
  .publication-links a,
  .course-tag,
  .status-pill {
    display: inline-flex;
    align-items: center;
    min-height: auto;
    padding: 0;
    border: 0;
    border-radius: 0;
    background: transparent;
    color: var(--about-muted);
    font-size: 0.82rem;
    font-weight: 600;
    text-decoration: none;
  }

  .publication-links a {
    color: var(--pub-link-color, var(--about-blue));
  }

  .publication-content .about-badge,
  .publication-links a {
    min-height: auto;
    padding: 0;
    border: 0;
    border-radius: 0;
    background: transparent;
  }

  .publication-content .about-badge {
    color: var(--pub-badge-color, var(--about-soft));
    font-size: 0.78rem;
    text-transform: uppercase;
    letter-spacing: 0;
  }

  .publication-content .about-badge-spotlight {
    margin-left: var(--pub-spotlight-margin-left, 0);
    margin-right: var(--pub-spotlight-margin-right, 0);
    padding:
      var(--pub-spotlight-padding-y, 0.12rem)
      var(--pub-spotlight-padding-x, 0.56rem);
    border: 0;
    border-radius: 999px;
    background: var(--pub-spotlight-bg, oklch(91% 0.085 82));
    color: var(--pub-spotlight-color, oklch(43% 0.13 78));
    font-size: 0.75rem;
    font-weight: 800;
    line-height: 1.25;
    text-transform: none;
    transform: translate(var(--pub-spotlight-offset-x, 0), var(--pub-spotlight-offset-y, 0));
  }

  .publication-badge-venue {
    color: var(--pub-venue-color, var(--about-muted));
    font-size: 0.78rem;
    font-weight: 650;
    line-height: 1.35;
  }

  [data-mode="dark"] .publication-content .about-badge-spotlight {
    background: var(--pub-spotlight-bg, oklch(79% 0.105 82));
    color: var(--pub-spotlight-color, oklch(34% 0.12 78));
  }

  .honor-list {
    display: grid;
    gap: 1rem;
    margin: 1.45rem 0 0;
    padding: 0;
    list-style: none;
  }

  .honor-item {
    display: grid;
    grid-template-columns: 5.8rem minmax(0, 1fr) auto;
    gap: 1rem;
    align-items: baseline;
    padding: 0;
  }

  .honor-time {
    color: var(--about-blue);
    font-family: var(--about-display-font);
    font-size: 0.92rem;
    font-weight: 700;
    white-space: nowrap;
  }

  .honor-main strong {
    display: block;
    color: var(--about-ink);
    font-family: var(--about-display-font);
    font-size: 1.04rem;
    line-height: 1.32;
    font-weight: 700;
  }

  .honor-main span {
    display: block;
    margin-top: 0.26rem;
    color: var(--about-muted);
    line-height: 1.55;
  }

  .honor-category {
    color: var(--about-soft);
    font-size: 0.78rem;
    font-weight: 700;
    text-transform: uppercase;
    white-space: nowrap;
  }

  /* Dual-line metro timeline (glass stations) */
  .metro-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0 2.4rem;
    align-items: stretch;
    margin-top: 1.35rem;
  }

  .metro-col {
    display: flex;
    flex-direction: column;
  }

  .metro-col-label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin: 0 0 0.95rem 0.15rem;
    color: var(--about-blue);
    font-family: var(--about-display-font);
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .metro-col-label::before {
    content: "";
    width: 0.65rem;
    height: 0.65rem;
    border-radius: 999px;
    background: var(--about-blue);
  }

  .metro-col.edu .metro-col-label {
    color: var(--about-green);
  }

  .metro-col.edu .metro-col-label::before {
    background: var(--about-green);
  }

  .metro-line {
    --metro-acc: var(--about-blue);
    --metro-axis: 1.3rem;
    --metro-gutter: 3.4rem;
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0 0 0 var(--metro-gutter);
    list-style: none;
  }

  .metro-col.edu .metro-line {
    --metro-acc: var(--about-green);
    justify-content: space-between;
  }

  /* the only element that fades: the line itself, past (faint) -> present (solid) */
  .metro-line::before {
    content: "";
    position: absolute;
    top: 0.9rem;
    bottom: 0.9rem;
    left: var(--metro-axis);
    width: 5px;
    transform: translateX(-50%);
    border-radius: 3px;
    background: linear-gradient(
      to bottom,
      color-mix(in oklch, var(--metro-acc) 10%, transparent),
      color-mix(in oklch, var(--metro-acc) 45%, transparent) 42%,
      var(--metro-acc) 80%,
      var(--about-copper)
    );
    box-shadow:
      0 0 12px color-mix(in oklch, var(--metro-acc) 35%, transparent),
      0 0 3px color-mix(in oklch, var(--metro-acc) 50%, transparent);
  }

  .metro-stop {
    position: relative;
  }

  .metro-stop + .metro-stop {
    margin-top: 1.15rem;
  }

  .metro-col.edu .metro-stop + .metro-stop {
    margin-top: 0;
  }

  /* frosted-glass logo medallion = the station, riding the line at left */
  .metro-med {
    position: absolute;
    left: calc(var(--metro-axis) - var(--metro-gutter));
    top: 50%;
    transform: translate(-50%, -50%);
    width: 2.7rem;
    height: 2.7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: oklch(99.5% 0.003 250 / 0.72);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    border: 2.5px solid var(--metro-acc);
    border-radius: 999px;
    box-shadow:
      0 0 0 3.5px var(--about-paper),
      0 8px 20px oklch(22% 0.03 247 / 0.14);
    z-index: 1;
  }

  .metro-med img {
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 64%;
    height: 64%;
    margin: 0;
    object-fit: contain;
    object-position: center;
    transform: translate(-50%, -50%);
  }

  /* breathing halo on every "Present" station */
  .metro-stop.now .metro-med::after {
    content: "";
    position: absolute;
    inset: -8px;
    border-radius: 999px;
    background: color-mix(in oklch, var(--metro-acc) 22%, transparent);
    animation: metro-breathe 2.4s ease-in-out infinite;
    z-index: -1;
  }

  @keyframes metro-breathe {
    0%,
    100% {
      transform: scale(0.82);
      opacity: 0.95;
    }
    50% {
      transform: scale(1.28);
      opacity: 0.3;
    }
  }

  .metro-stop strong {
    color: var(--about-ink);
    font-family: var(--about-display-font);
    font-size: 0.98rem;
    font-weight: 700;
    line-height: 1.32;
    letter-spacing: 0.01em;
  }

  .metro-stop strong em {
    font-style: normal;
    color: var(--metro-acc);
  }

  .metro-stop small {
    display: block;
    margin-top: 0.12rem;
    color: var(--about-muted);
    font-size: 0.85rem;
    line-height: 1.5;
  }

  .metro-stop time {
    display: block;
    margin-top: 0.2rem;
    color: var(--about-copper);
    font-family: var(--about-display-font);
    font-size: 0.78rem;
    font-weight: 700;
  }

  [data-mode="dark"] .metro-med {
    background: oklch(96% 0.006 250 / 0.9);
    box-shadow:
      0 0 0 3.5px var(--about-paper),
      0 8px 22px oklch(8% 0.018 250 / 0.5);
  }

  @media (prefers-reduced-motion: reduce) {
    .metro-stop.now .metro-med::after {
      animation: none;
      opacity: 0.3;
    }
  }

  .study-section .about-section-head {
    grid-template-columns: minmax(0, 0.48fr) minmax(0, 0.52fr);
  }

  .study-atlas {
    position: relative;
    display: grid;
    grid-template-columns: minmax(150px, 0.22fr) minmax(0, 0.78fr);
    margin-top: 1.35rem;
    overflow: hidden;
    border: 1px solid var(--about-line);
    border-radius: 8px;
    background:
      radial-gradient(circle at 76% 22%, oklch(73% 0.095 226 / 0.12), transparent 34%),
      linear-gradient(135deg, oklch(99% 0.004 250), oklch(95.5% 0.01 242));
    box-shadow: 0 20px 48px oklch(24% 0.026 247 / 0.08);
  }

  .study-atlas::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      linear-gradient(90deg, oklch(66% 0.026 245 / 0.12) 1px, transparent 1px),
      linear-gradient(0deg, oklch(66% 0.026 245 / 0.1) 1px, transparent 1px);
    background-size: 42px 42px;
    pointer-events: none;
  }

  .study-atlas-meta {
    position: relative;
    z-index: 4;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1.5rem;
    padding: 1.15rem 1rem;
    border-right: 1px solid var(--about-line);
    background: color-mix(in oklch, var(--about-panel) 78%, oklch(91% 0.023 235));
  }

  .study-atlas-label {
    display: block;
    color: var(--about-blue);
    font-family: var(--about-display-font);
    font-size: 0.82rem;
    font-weight: 700;
  }

  .study-atlas-meta p {
    margin: 0.68rem 0 0;
    color: var(--about-muted);
    font-size: 0.9rem;
    line-height: 1.55;
  }

  .study-atlas-legend {
    display: grid;
    gap: 0.48rem;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .study-atlas-legend li {
    margin: 0;
  }

  .study-atlas-legend button {
    display: flex;
    align-items: center;
    gap: 0.48rem;
    width: 100%;
    margin: 0;
    padding: 0.32rem 0.38rem;
    border: 1px solid transparent;
    border-radius: 6px;
    background: transparent;
    color: var(--about-muted);
    font-family: var(--about-display-font);
    font-size: 0.82rem;
    font-weight: 700;
    line-height: 1.2;
    text-align: left;
    cursor: pointer;
    transition: background 140ms ease, border-color 140ms ease, color 140ms ease;
  }

  .study-atlas-legend button:hover,
  .study-atlas-legend button:focus-visible,
  .study-atlas-legend button.is-active {
    border-color: color-mix(in oklch, var(--legend-color) 34%, var(--about-line));
    background: color-mix(in oklch, var(--legend-color) 12%, var(--about-panel));
    color: var(--about-ink);
    outline: none;
  }

  .study-legend-mark {
    width: 0.58rem;
    height: 0.58rem;
    flex: 0 0 auto;
    border-radius: 3px;
    border: 1px solid var(--legend-color);
    background: color-mix(in oklch, var(--legend-color) 14%, var(--about-panel));
    box-shadow: none;
  }

  .study-atlas-legend button.is-active .study-legend-mark {
    background: color-mix(in oklch, var(--legend-color) 58%, var(--about-panel));
  }

  .study-map {
    position: relative;
    z-index: 1;
    min-height: clamp(560px, 72svh, 720px);
    margin: 0;
    background: transparent;
  }

  .study-frame {
    display: block;
    width: 100%;
    height: clamp(560px, 72svh, 720px);
    min-height: 0;
    border: 0;
    border-radius: 0;
    background: transparent;
  }

  .study-atlas.is-locked .study-frame {
    pointer-events: none;
  }

  .study-map-lock {
    position: absolute;
    inset: 0;
    z-index: 3;
    display: block;
    width: 100%;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  .study-atlas.is-locked .study-map::after {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 56% 40%, transparent 42%, oklch(98% 0.004 250 / 0.22));
    opacity: 0.7;
    pointer-events: none;
  }

  .study-map-lock:focus-visible {
    outline: 2px solid var(--about-blue);
    outline-offset: -3px;
  }

  .study-atlas:not(.is-locked) .study-map-lock {
    opacity: 0;
    pointer-events: none;
  }

  .study-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
    margin-top: 1rem;
  }

  .study-card {
    padding: 0;
    border: 0;
    border-radius: 0;
    background: transparent;
  }

  .study-details {
    margin-top: 1.05rem;
    border-top: 1px solid var(--about-line);
    border-bottom: 1px solid var(--about-line);
  }

  .study-details > summary {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    cursor: pointer;
    padding: 0.95rem 0;
    color: var(--about-ink);
    font-family: var(--about-display-font);
    font-weight: 700;
    list-style: none;
  }

  .study-details > summary::-webkit-details-marker {
    display: none;
  }

  .study-details > summary::after {
    content: "+";
    color: var(--about-blue);
    font-size: 1.2rem;
    line-height: 1;
  }

  .study-details[open] > summary::after {
    content: "-";
  }

  .study-details summary small {
    color: var(--about-muted);
    font-family: var(--about-text-font);
    font-size: 0.92rem;
    font-weight: 500;
  }

  .study-details-body {
    padding-bottom: 0.25rem;
  }

  .course-list {
    display: grid;
    gap: 0.55rem;
    margin: 0.8rem 0 0;
    padding: 0;
    list-style: none;
  }

  .course-list li {
    display: grid;
    grid-template-columns: 1.15rem minmax(0, 1fr) auto;
    gap: 0.55rem;
    align-items: start;
    padding: 0.52rem 0;
    border-top: 1px solid var(--about-line);
    color: var(--about-muted);
    line-height: 1.45;
  }

  .course-list li:first-child {
    border-top: 0;
  }

  .course-list i {
    color: var(--about-blue);
    margin-top: 0.15rem;
  }

  .course-list a {
    color: var(--about-ink);
    font-family: var(--about-display-font);
    font-weight: 600;
  }

  .course-tag {
    min-height: auto;
    padding: 0;
    color: var(--about-copper);
    font-size: 0.75rem;
  }

  .archive-list {
    display: grid;
    gap: 0;
    margin-top: 1rem;
    border-top: 1px solid var(--about-line);
    border-bottom: 1px solid var(--about-line);
  }

  .archive-list details {
    border: 0;
    border-top: 1px solid var(--about-line);
    border-radius: 0;
    background: transparent;
  }

  .archive-list details:first-child {
    border-top: 0;
  }

  .archive-list summary {
    cursor: pointer;
    padding: 0.88rem 0;
    color: var(--about-ink);
    font-family: var(--about-display-font);
    font-size: 1.02rem;
    font-weight: 700;
    list-style-position: inside;
  }

  .archive-body {
    padding: 0 0 1rem;
  }

  .archive-description {
    margin: 0.4rem 0 0.8rem;
    color: var(--about-muted);
    line-height: 1.6;
  }

  .future-plan {
    margin: 1.15rem 0 0;
    padding: 1rem 0 0;
    border-top: 1px solid var(--about-line);
    border-radius: 0;
    background: transparent;
  }

  .future-plan h3 {
    margin: 0 0 0.7rem;
    color: var(--about-ink);
    font-family: var(--about-display-font);
    font-size: 1.05rem;
    font-weight: 700;
  }

  .future-plan ul {
    display: grid;
    gap: 0.4rem;
    margin: 0;
    padding-left: 1.1rem;
    color: var(--about-muted);
  }

  .books-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.72rem;
    margin-top: 1.25rem;
    border: 0;
  }

  .book-item {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 1rem;
    padding: 0;
    border: 0;
    border-radius: 0;
    background: transparent;
  }

  .book-item:first-child {
    border-top: 0;
  }

  .book-item strong {
    color: var(--about-ink);
    font-family: var(--about-display-font);
    font-weight: 700;
  }

  .status-pill {
    flex: 0 0 auto;
    min-height: auto;
    padding: 0;
    border: 0;
    border-radius: 0;
    background: transparent;
    color: var(--about-green);
    font-size: 0.82rem;
    text-transform: uppercase;
    letter-spacing: 0;
  }

  .friends-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 0.8rem 1.4rem;
    margin-top: 1.25rem;
    border: 0;
  }

  .friend-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    min-height: auto;
    padding: 0;
    border: 0;
    color: var(--about-ink) !important;
    font-weight: 700;
    text-decoration: none !important;
  }

  .friend-link:hover {
    color: var(--about-copper) !important;
    background: transparent;
  }

  @media (max-width: 980px) {
    .about-hero,
    .about-section-head,
    .about-current {
      grid-template-columns: 1fr;
    }

    .about-hero h1 {
      font-size: 3.4rem;
    }

    .about-research-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 849px) {
    #main-wrapper,
    #main-wrapper > .container,
    #main-wrapper > .container > .row,
    main,
    article.px-1,
    .content {
      width: 100vw !important;
      max-width: 100vw !important;
      min-width: 0 !important;
      margin-left: 0 !important;
      margin-right: 0 !important;
      padding-left: 0 !important;
      padding-right: 0 !important;
      overflow-x: hidden;
    }

    .about-page {
      width: 100vw !important;
      max-width: none !important;
      margin-left: 0;
      margin-right: 0;
    }

    .about-hero {
      grid-template-columns: minmax(0, 1fr) !important;
    }

    .about-hero h1 span {
      margin-top: 0.7em;
      line-height: 1.38;
    }

    .about-portrait {
      display: none;
    }

    .study-section > .about-section-head,
    .study-atlas {
      display: none;
    }
  }

  @media (max-width: 760px) {
    .about-hero {
      padding: 4.2rem 1.25rem 2rem;
    }

    .about-hero h1 {
      font-size: 2.58rem;
    }

    .about-hero h1 span {
      font-size: 0.48em;
    }

    .about-detail > .about-section + .about-section {
      margin-top: clamp(3.5rem, 12vw, 4.7rem);
    }

    .about-detail {
      padding: 3.4rem 1rem 4.5rem;
    }

    .about-chalk-arrow {
      left: -1.95rem;
      width: 4.15rem;
      opacity: 0.82;
    }

    .about-chalk-bulb {
      top: -4rem;
      right: -1.65rem;
      width: 6.9rem;
    }

    .about-chalk-streaks {
      right: -1.35rem;
      bottom: -1.45rem;
      width: 6.6rem;
    }

    .about-section h2 {
      font-size: 1.62rem;
    }

    .metro-grid,
    .study-grid,
    .books-grid {
      grid-template-columns: 1fr;
    }

    .study-atlas {
      grid-template-columns: 1fr;
    }

    .study-atlas-meta {
      border-right: 0;
      border-bottom: 1px solid var(--about-line);
    }

    .study-atlas-legend {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .study-map {
      min-height: 500px;
    }

    .study-frame {
      height: 500px;
    }

    .metro-grid {
      gap: 1.9rem 0;
    }

    .metro-col.edu .metro-line {
      justify-content: flex-start;
    }

    .metro-col.edu .metro-stop + .metro-stop {
      margin-top: 1.15rem;
    }

    .publication-list::before {
      left: var(--pub-line-left, 5.45rem);
    }

    .publication-item {
      grid-template-columns:
        var(--pub-date-col, 4.9rem)
        var(--pub-node-col, 1.1rem)
        minmax(0, 1fr);
      gap: var(--pub-item-gap, 0.7rem);
    }

    .publication-content {
      grid-template-columns: 1fr;
    }

    .publication-links {
      justify-content: flex-start;
    }

    .honor-item {
      grid-template-columns: 4.9rem minmax(0, 1fr);
      gap: 0.45rem 0.75rem;
    }

    .honor-category {
      grid-column: 2;
      white-space: normal;
    }

    .book-item {
      display: grid;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .about-page *,
    .about-page *::before,
    .about-page *::after {
      scroll-behavior: auto !important;
      transition-duration: 0.01ms !important;
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
    }
  }
</style>

{% assign about = site.data.about %}

<div class="about-page">
  <a class="about-home-link" href="{{ site.baseurl }}/" aria-label="Back to home">
    <i class="fas fa-arrow-left" aria-hidden="true"></i>
    <span>Home</span>
  </a>

  <div class="about-cover-stage">
    <section class="about-hero" aria-labelledby="about-title">
      <div>
        <p class="about-kicker">Peking University, YuanPei College</p>
        <h1 id="about-title">Shaoheng Yan <span>AI, physics, and the shape of scientific representation.</span></h1>
        <div class="about-lede">
          {{ about.basic_info.lead }}
          <p style="margin-top: 0.5em;">
            <i class="fas fa-envelope" aria-label="Email"></i>
            <span style="margin-left: 0.25em; font-family: serif; font-style: italic;">
              photonyan at stu.pku.edu.cn
            </span>
          </p>
        </div>
      </div>
      <figure class="about-portrait">
        <img src="{{ site.baseurl }}/assets/img/about/portrait.jpg" alt="Portrait of Shaoheng Yan">
        <svg class="about-chalk-doodle about-chalk-arrow" viewBox="0 0 96 152" aria-hidden="true">
          <path class="about-chalk-faint" d="M31 143C9 128 9 96 30 82C48 70 71 79 67 96C64 111 44 111 35 97C23 79 36 54 53 36C64 24 75 16 88 8" />
          <path class="about-chalk-main" d="M29 142C8 126 10 97 31 83C49 72 70 79 66 95C63 108 45 109 36 96C24 79 37 55 54 37C65 25 76 16 88 8" />
          <path class="about-chalk-main" d="M88 8C83 24 80 39 82 53" />
          <path class="about-chalk-main" d="M88 8C73 12 60 19 49 31" />
          <path class="about-chalk-rub" d="M29 142C8 126 10 97 31 83C49 72 70 79 66 95C63 108 45 109 36 96C24 79 37 55 54 37C65 25 76 16 88 8M88 8C83 24 80 39 82 53M88 8C73 12 60 19 49 31" />
        </svg>
        <svg class="about-chalk-doodle about-chalk-bulb" viewBox="0 0 180 190" aria-hidden="true">
          <path class="about-chalk-faint" d="M91 29C57 29 33 54 33 87C33 111 45 125 59 138C68 146 68 156 77 161C85 166 99 166 108 161C117 156 115 146 124 138C138 125 149 110 149 87C149 54 125 29 91 29Z" />
          <path class="about-chalk-main" d="M91 30C58 30 34 55 34 87C34 110 46 124 60 137C69 146 69 156 78 160C86 165 99 165 107 160C116 156 114 146 123 137C137 124 148 109 148 87C148 55 124 30 91 30Z" />
          <path class="about-chalk-rub" d="M91 30C58 30 34 55 34 87C34 110 46 124 60 137C69 146 69 156 78 160C86 165 99 165 107 160C116 156 114 146 123 137C137 124 148 109 148 87C148 55 124 30 91 30Z" />
          <path class="about-chalk-main" d="M68 155C73 164 76 175 83 181C89 186 99 186 106 181C112 175 113 164 118 155" />
          <path class="about-chalk-main" d="M67 157C81 163 103 163 117 157" />
          <path class="about-chalk-main" d="M69 167C83 172 102 172 115 167" />
          <path class="about-chalk-main" d="M73 177C84 182 100 182 110 177" />
          <path class="about-chalk-main" d="M80 186C88 189 98 189 105 186" />
          <path class="about-chalk-main" d="M75 126C79 109 78 92 84 87C90 82 96 100 88 104C80 108 78 90 86 84C96 77 105 98 97 105C91 110 91 91 98 87C104 84 106 110 108 126" />
          <path class="about-chalk-faint" d="M122 45C134 54 140 68 140 84" />
          <path class="about-chalk-main" d="M31 52L18 46" />
          <path class="about-chalk-main" d="M56 22L49 8" />
          <path class="about-chalk-main" d="M98 17L101 3" />
          <path class="about-chalk-main" d="M134 31L149 16" />
          <path class="about-chalk-main" d="M157 73L174 70" />
          <path class="about-chalk-rub" d="M68 155C73 164 76 175 83 181C89 186 99 186 106 181C112 175 113 164 118 155M67 157C81 163 103 163 117 157M69 167C83 172 102 172 115 167M73 177C84 182 100 182 110 177M80 186C88 189 98 189 105 186M75 126C79 109 78 92 84 87C90 82 96 100 88 104C80 108 78 90 86 84C96 77 105 98 97 105C91 110 91 91 98 87C104 84 106 110 108 126" />
        </svg>
        <svg class="about-chalk-doodle about-chalk-streaks" viewBox="0 0 170 70" aria-hidden="true">
          <path class="about-chalk-main" d="M10 37C53 25 96 13 147 5" />
          <path class="about-chalk-main" d="M32 54C75 42 117 31 158 20" />
          <path class="about-chalk-main" d="M92 64C113 58 134 51 154 45" />
          <path class="about-chalk-rub" d="M10 37C53 25 96 13 147 5M32 54C75 42 117 31 158 20M92 64C113 58 134 51 154 45" />
        </svg>
      </figure>
    </section>
  </div>

  <div class="about-detail">
  <section class="about-section" id="research" aria-labelledby="research-title">
    <div class="about-section-head">
      <div>
        <p class="about-eyebrow">Academic</p>
        <h2 id="research-title">Research Interest</h2>
      </div>
      <p style="text-align: right;">
        This section may change frequently... Last updated: Aug. 21, 2026
      </p>
    </div>
    <div class="about-research-grid">
      {% for item in about.interests %}
      <article class="research-tile">
        <span class="research-icon"><i class="{{ item.icon }}" aria-hidden="true"></i></span>
        <h3>{{ item.title }}</h3>
        <p>{{ item.desc }}</p>
        {% if item.note %}
        <p class="research-note">{{ item.note }}</p>
        {% endif %}
      </article>
      {% endfor %}
    </div>
  </section>

    <section class="about-section" id="publications" aria-labelledby="publications-title">
    <div class="about-section-head">
      <div>
        <p class="about-eyebrow">Research</p>
        <h2 id="publications-title">Publications</h2>
      </div>
      <p style="text-align: right;">
        List of my papers and preprints.
      </p>
    </div>
    <div class="publication-list">
      {% assign publications_by_time = about.publications | sort: "date" | reverse %}
      {% for pub in publications_by_time %}
      <article class="publication-item">
        <time class="publication-date" datetime="{{ pub.date }}">{{ pub.date_label }}</time>
        <span class="publication-node" aria-hidden="true"></span>
        <div class="publication-content">
          <div class="publication-main">
            <h3>{{ pub.title }}</h3>
            <p>{{ pub.authors }}</p>
            <div class="about-badges" aria-label="Publication status">
              {% for badge in pub.badges %}
              <span class="about-badge about-badge-{{ badge.color | default: 'default' }}">{{ badge.text }}</span>
              {% if badge.venue %}
              <span class="publication-badge-venue">{{ badge.venue }}</span>
              {% endif %}
              {% endfor %}
            </div>
          </div>
          <div class="publication-links">
            {% for link in pub.links %}
            <a href="{{ link.url }}">{{ link.text }}</a>
            {% endfor %}
          </div>
        </div>
      </article>
      {% endfor %}
    </div>
  </section>

  <section class="about-section" id="honors" aria-labelledby="honors-title">
    <div class="about-section-head">
      <div>
        <p class="about-eyebrow">Academic</p>
        <h2 id="honors-title">Awards & Service</h2>
      </div>
      <p style="text-align: right;">
        Selected reviewing service and recognitions.
      </p>
    </div>
    <ul class="honor-list" aria-label="Awards and academic service">
      {% for item in about.honors %}
      <li class="honor-item">
        <time class="honor-time">{{ item.time }}</time>
        <div class="honor-main">
          <strong>{{ item.title }}</strong>
          <span>{{ item.desc }}</span>
        </div>
        <span class="honor-category">{{ item.category }}</span>
      </li>
      {% endfor %}
    </ul>
  </section>

  <section class="about-section" aria-labelledby="timeline-title">
    <div class="about-section-head">
      <div>
        <p class="about-eyebrow">Background</p>
        <h2 id="timeline-title">Experience & Education</h2>
      </div>
      <p style="text-align: right;">
        Where I Studied and Worked
      </p>
    </div>
    <div class="metro-grid">
      <section class="metro-col" aria-labelledby="experience-title">
        <p class="metro-col-label" id="experience-title">Experience</p>
        <ul class="metro-line">
          {% for item in about.internships %}
          {% assign item_time = item.time | downcase %}
          <li class="metro-stop{% if item_time contains 'present' %} now{% endif %}">
            <span class="metro-med" aria-hidden="true">
              {% if item.logo %}<img src="{{ item.logo | relative_url }}" alt="" loading="lazy">{% endif %}
            </span>
            <strong>{{ item.role }} <em>&middot; {{ item.company }}</em></strong>
            <small>{% if item.team %}{{ item.team }} &middot; {% endif %}{{ item.location }}</small>
            <time>{{ item.time }}</time>
          </li>
          {% endfor %}
        </ul>
      </section>
      <section class="metro-col edu" aria-labelledby="education-title">
        <p class="metro-col-label" id="education-title">Education</p>
        <ul class="metro-line">
          {% for item in about.education reversed %}
          {% assign item_time = item.time | downcase %}
          <li class="metro-stop{% if item_time contains 'present' %} now{% endif %}">
            <span class="metro-med" aria-hidden="true">
              {% if item.logo %}<img src="{{ item.logo | relative_url }}" alt="" loading="lazy">{% endif %}
            </span>
            <strong>{{ item.school }}{% if item.college %} <em>&middot; {{ item.college }}</em>{% endif %}</strong>
            {% if item.degree %}<small>{{ item.degree }}</small>{% endif %}
            <time>{{ item.time }}</time>
          </li>
          {% endfor %}
        </ul>
      </section>
    </div>
  </section>

  <section class="about-section" id="books" aria-labelledby="books-title">
    <div class="about-section-head">
      <div>
        <p class="about-eyebrow">Notes</p>
        <h2 id="books-title">Book Projects</h2>
      </div>
      <p style="text-align: right;">
        These projects collect lecture notes, essays, guides, and competition material.
      </p>
    </div>
    <div class="books-grid">
      {% for book in about.books %}
      <article class="book-item">
        <div>
          <strong>
            {% if book.url %}
            <a href="{{ book.url }}">{{ book.title }}</a>
            {% else %}
            {{ book.title }}
            {% endif %}
          </strong>
        </div>
        {% if book.status %}
        <span class="status-pill">{{ book.status }}</span>
        {% endif %}
      </article>
      {% endfor %}
    </div>
  </section>


  <section class="about-section" aria-labelledby="current-title">
    <div class="about-section-head">
      <div>
        <p class="about-eyebrow">Working mode</p>
        <h2 id="current-title">Theory, implementation, and notes reinforce each other.</h2>
      </div>
      <p style="text-align: right;">
        Inspire Creativity, Enrich Life！
      </p>
    </div>
    <div class="about-current">
      <div class="about-statement">
        <p>
          A useful representation should do more than compress data. It should expose the coordinates that matter,
          discard the ones that should not matter, and leave enough structure for the next model or scientist to act on it.
        </p>
        <p>
          That is why this site mixes lots of things. They are different outputs of
          the same habit: build a precise object, then make it legible.
        </p>
      </div>
      <ul class="about-thread-list">
        <li>
          <strong>Scientific ML</strong>
          <span>From molecular graphs and 3D reconstruction to representations that can serve search, design, and interpretation.</span>
        </li>
        <li>
          <strong>Physics grounding</strong>
          <span>Classical mechanics, quantum mechanics, field theory, relativity, and mathematical methods as working vocabulary.</span>
        </li>
        <li>
          <strong>Learning artifacts</strong>
          <span>Lecture notes, essays, and course records kept as public memory instead of private scratch work.</span>
        </li>
      </ul>
    </div>
  </section>

  <section class="about-section study-section" id="study" aria-labelledby="study-title">
    <div class="about-section-head">
      <div>
        <p class="about-eyebrow">Curriculum</p>
        <h2 id="study-title">Study Map</h2>
      </div>
      <p>
        The archive emphasizes technical courses,
        reading programs, and partially completed self-study tracks.
      </p>
    </div>

    <div class="study-atlas is-locked" data-study-map>
      <aside class="study-atlas-meta">
        <div>
          <span class="study-atlas-label">Course atlas</span>
          <p>Click to see details.</p>
        </div>
        <ul class="study-atlas-legend" aria-label="Filter curriculum map by category">
          <li>
            <button type="button" data-study-filter="AI" aria-pressed="false" style="--legend-color: oklch(56% 0.07 231);">
              <span class="study-legend-mark" aria-hidden="true"></span>
              <span>AI</span>
            </button>
          </li>
          <li>
            <button type="button" data-study-filter="Physics" aria-pressed="false" style="--legend-color: oklch(65% 0.07 80);">
              <span class="study-legend-mark" aria-hidden="true"></span>
              <span>Physics</span>
            </button>
          </li>
          <li>
            <button type="button" data-study-filter="Math" aria-pressed="false" style="--legend-color: oklch(61% 0.065 150);">
              <span class="study-legend-mark" aria-hidden="true"></span>
              <span>Math</span>
            </button>
          </li>
          <li>
            <button type="button" data-study-filter="__general__" aria-pressed="false" style="--legend-color: oklch(58% 0.025 235);">
              <span class="study-legend-mark" aria-hidden="true"></span>
              <span>General studies</span>
            </button>
          </li>
        </ul>
      </aside>
      <div class="study-map">
        <iframe class="study-frame" src="{{ site.baseurl }}/assets/html/demo.html?v=20260515-map-filter" title="Interactive curriculum map"></iframe>
      </div>
      <button class="study-map-lock" type="button" aria-label="Enable curriculum map interaction"></button>
    </div>

    <details class="study-details">
      <summary>
        <span>Course lists and study blocks</span>
        <small>Expand the detailed archive</small>
      </summary>
      <div class="study-details-body">
    <div class="study-grid" aria-label="Ongoing studies">
      <section class="study-card">
        <h3>{{ about.ongoing_studies_sem }}</h3>
        <ul class="course-list">
          {% for course in about.ongoing_column_1 %}
          <li>
            <i class="{{ course.icon }}" aria-hidden="true"></i>
            <span>{{ course.name }}</span>
            <span></span>
          </li>
          {% endfor %}
        </ul>
      </section>
      <section class="study-card">
        <h3>AI, systems, and quantum track</h3>
        <ul class="course-list">
          {% for course in about.ongoing_column_2 %}
          <li>
            <i class="{{ course.icon }}" aria-hidden="true"></i>
            <span>{{ course.name }}</span>
            <span></span>
          </li>
          {% endfor %}
        </ul>
      </section>
    </div>

    <div class="archive-list" aria-label="Course archive">
      {% for term in about.course_archive %}
      <details {% if forloop.first %}open{% endif %}>
        <summary>{{ term.title }}</summary>
        <div class="archive-body">
          {% if term.description %}
          <div class="archive-description">{{ term.description | markdownify }}</div>
          {% endif %}
          <ul class="course-list">
            {% for course in term.items %}
            <li>
              <i class="{{ course.icon | default: 'fas fa-book' }}" aria-hidden="true"></i>
              <span>
                {% if course.url %}
                <a href="{{ course.url }}">{{ course.name }}</a>
                {% else %}
                {{ course.name }}
                {% endif %}
                {% if course.details %}
                <small>({{ course.details | join: "; " }})</small>
                {% endif %}
              </span>
              <span>
                {% if course.badge %}<span class="course-tag">{{ course.badge }}</span>{% endif %}
                {% if course.tag %}<span class="course-tag">{{ course.tag }}</span>{% endif %}
                {% if course.grade %}<span class="course-tag">{{ course.grade }}</span>{% endif %}
              </span>
            </li>
            {% endfor %}
          </ul>
        </div>
      </details>
      {% endfor %}
    </div>

    <aside class="future-plan" aria-labelledby="future-plan-title">
      <h3 id="future-plan-title">Future study plans</h3>
      <ul>
        {% for plan in about.future_plans %}
        <li>{{ plan }}</li>
        {% endfor %}
      </ul>
    </aside>
      </div>
    </details>
  </section>

  <section class="about-section" aria-labelledby="friends-title">
    <div class="about-section-head">
      <div>
        <p class="about-eyebrow">Links</p>
        <h2 id="friends-title">Friends</h2>
      </div>
    </div>
    <div class="friends-grid">
      {% for friend in about.friends %}
      <a class="friend-link" href="{{ friend.url }}">
        <i class="fas fa-external-link-alt" aria-hidden="true"></i>
        {{ friend.name }}
      </a>
      {% endfor %}
    </div>
  </section>
  </div>
</div>

<script>
  (() => {
    const page = document.querySelector(".about-page");
    const stage = page?.querySelector(".about-cover-stage");
    const detail = page?.querySelector(".about-detail");
    if (!page || !stage || !detail) return;

    const studyMap = page.querySelector("[data-study-map]");
    studyMap?.querySelector(".study-map-lock")?.addEventListener("click", () => {
      studyMap.classList.remove("is-locked");
    });

    const studyFrame = studyMap?.querySelector(".study-frame");
    const studyFilterButtons = Array.from(studyMap?.querySelectorAll("[data-study-filter]") || []);
    let activeStudyFilter = "__all__";

    const sendStudyFilter = (value) => {
      if (!studyFrame?.contentWindow) return;
      studyFrame.contentWindow.postMessage(
        { type: "study-map-filter", category: value },
        window.location.origin
      );
    };

    studyFilterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        activeStudyFilter = button.dataset.studyFilter || "__all__";
        studyMap?.classList.remove("is-locked");
        studyFilterButtons.forEach((item) => {
          const isActive = item === button;
          item.classList.toggle("is-active", isActive);
          item.setAttribute("aria-pressed", String(isActive));
        });
        sendStudyFilter(activeStudyFilter);
      });
    });

    studyFrame?.addEventListener("load", () => {
      if (activeStudyFilter !== "__all__") sendStudyFilter(activeStudyFilter);
    });

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const root = document.documentElement;

    const clamp = (value) => Math.max(0, Math.min(1, value));
    const clampRange = (value, min, max) => Math.max(min, Math.min(max, value));
    const easeOutCubic = (value) => 1 - Math.pow(1 - value, 3);
    const easeOutQuint = (value) => 1 - Math.pow(1 - value, 5);

    let gate = 0;
    let state = "idle";
    let settleTimer = 0;
    let scrollFrame = 0;
    let touchStartY = 0;
    let touchLastY = 0;
    let touchLastTime = 0;
    let touchVelocity = 0;
    let touchGateStart = 0;

    const threshold = () => Math.max(188, Math.min(330, window.innerHeight * 0.3));
    const coverTravel = () => Math.max(118, Math.min(190, window.innerHeight * 0.2));
    const previewTravel = () => Math.max(76, Math.min(136, window.innerHeight * 0.15));
    const naturalDetailTop = () => Math.round(window.scrollY + stage.getBoundingClientRect().bottom);
    const inCoverGate = () => window.scrollY <= 2 && naturalDetailTop() > window.innerHeight * 0.86;

    const shapedProgress = (ratio) => {
      const barrier = 0.74;
      if (ratio <= barrier) {
        return easeOutCubic(ratio / barrier) * 0.68;
      }

      return 0.68 + easeOutQuint((ratio - barrier) / (1 - barrier)) * 0.32;
    };

    const clearSettleTimer = () => {
      if (settleTimer) window.clearTimeout(settleTimer);
      settleTimer = 0;
    };

    const clearScrollFrame = () => {
      if (scrollFrame) window.cancelAnimationFrame(scrollFrame);
      scrollFrame = 0;
    };

    const paintGate = (ratio, mode = "idle", keepTone = false) => {
      const bounded = clamp(ratio);
      const visual = shapedProgress(bounded);
      const cover = Math.round(coverTravel() * visual);
      const preview = mode === "commit" ? 0 : Math.round(previewTravel() * visual);
      const detailOffset = mode === "commit" ? 0 : -preview;

      gate = bounded * threshold();
      page.classList.toggle("is-cover-pulling", mode === "pull" && gate > 0);
      page.classList.toggle("is-cover-resetting", mode === "reset");
      page.classList.toggle("is-cover-unlocking", mode === "commit");
      page.style.setProperty("--about-cover-pull", `${cover}px`);
      page.style.setProperty("--about-cover-offset", `${-cover}px`);
      page.style.setProperty("--about-detail-preview", `${preview}px`);
      page.style.setProperty("--about-detail-offset", `${detailOffset}px`);
      page.style.setProperty("--about-turn-progress", visual.toFixed(4));
      page.style.setProperty("--about-cover-scale", `${(1 - visual * 0.016).toFixed(4)}`);
      page.style.setProperty("--about-edge-offset", `${mode === "commit" ? 0 : Math.round((1 - visual) * 22)}px`);
      page.style.setProperty("--about-edge-opacity", `${mode === "commit" ? 0 : (visual * 0.92).toFixed(3)}`);
      page.style.setProperty("--about-cue-opacity", `${mode === "commit" ? 0 : Math.max(0, 0.68 - visual * 0.64).toFixed(3)}`);
      page.style.setProperty("--about-cue-scale", `${(1 + visual * 0.82).toFixed(3)}`);
      page.style.setProperty("--about-cue-y", `${Math.round(-visual * 10)}px`);

      if (!keepTone) {
        root.style.setProperty("--about-light-progress", "0%");
      }
    };

    const setGate = (value) => {
      paintGate(clamp(value / threshold()), "pull");
    };

    const beginPull = () => {
      if (state === "committing") return false;
      clearSettleTimer();
      clearScrollFrame();
      state = "pulling";
      return true;
    };

    const resetVisuals = (keepTone = false) => {
      paintGate(0, "idle", keepTone);
      page.style.setProperty("--about-cue-opacity", "0.68");
    };

    const snapBack = () => {
      if (!gate || state === "committing") return;
      clearSettleTimer();
      state = "resetting";
      paintGate(0, "reset");

      window.setTimeout(() => {
        if (state !== "resetting") return;
        state = "idle";
        resetVisuals();
        updateTone();
      }, reducedMotion.matches ? 40 : 430);
    };

    const finishPull = () => {
      if (state !== "pulling") return;
      if (gate >= threshold() * 0.98) {
        unlockToDetail();
      } else {
        snapBack();
      }
    };

    const scheduleFinishPull = () => {
      clearSettleTimer();
      settleTimer = window.setTimeout(finishPull, 150);
    };

    const unlockToDetail = () => {
      if (state === "committing") return;
      clearSettleTimer();
      clearScrollFrame();

      const startTop = window.scrollY;
      const targetTop = naturalDetailTop();
      const distance = Math.max(0, targetTop - startTop);

      state = "committing";
      paintGate(1, "commit");

      if (reducedMotion.matches || distance < 2) {
        window.scrollTo({ top: targetTop, behavior: "auto" });
        state = "idle";
        resetVisuals(true);
        updateTone();
        return;
      }

      const duration = clampRange(distance * 0.62, 560, 760);
      const startedAt = performance.now();

      const step = (now) => {
        const progress = clamp((now - startedAt) / duration);
        const eased = easeOutQuint(progress);
        window.scrollTo(0, Math.round(startTop + distance * eased));
        root.style.setProperty("--about-light-progress", `${(eased * 100).toFixed(2)}%`);

        if (progress < 1) {
          scrollFrame = window.requestAnimationFrame(step);
          return;
        }

        scrollFrame = 0;
        window.scrollTo(0, targetTop);
        state = "idle";
        resetVisuals(true);
        updateTone();
      };

      scrollFrame = window.requestAnimationFrame(step);
    };

    const pullTo = (value) => {
      setGate(value);
      if (gate >= threshold()) {
        unlockToDetail();
        return true;
      }

      return false;
    };

    const updateTone = () => {
      if (state === "committing") return;
      if (state === "pulling" && gate > 0 && inCoverGate()) {
        root.style.setProperty("--about-light-progress", "0%");
        return;
      }

      const top = Math.max(1, naturalDetailTop());
      const progress = clamp(window.scrollY / top) * 100;
      const progressValue = `${reducedMotion.matches ? Math.round(progress) : progress}%`;
      root.style.setProperty("--about-light-progress", progressValue);

      if (state === "idle") {
        page.style.setProperty("--about-cue-opacity", `${Math.max(0, 0.68 - progress * 0.018).toFixed(3)}`);
      }
    };

    let scheduled = false;
    const requestUpdate = () => {
      if (scheduled) return;
      scheduled = true;
      window.requestAnimationFrame(() => {
        scheduled = false;
        updateTone();
      });
    };

    const handleWheel = (event) => {
      if (reducedMotion.matches) return;
      if (state === "committing") {
        event.preventDefault();
        return;
      }
      if (!inCoverGate() && gate <= 0) return;

      const delta = clampRange(event.deltaY, -110, 110);
      if (delta <= 0 && gate <= 0) return;

      event.preventDefault();
      const ratio = clamp(gate / threshold());
      if (!beginPull()) return;
      const gain = delta > 0 ? Math.max(0.28, 0.92 - ratio * 0.54) : 1.42;
      const nextGate = gate + delta * gain;
      if (!pullTo(nextGate)) scheduleFinishPull();
    };

    const handleTouchStart = (event) => {
      if (reducedMotion.matches || state === "committing" || (!inCoverGate() && gate <= 0)) return;
      touchStartY = event.touches[0]?.clientY ?? 0;
      touchLastY = touchStartY;
      touchLastTime = performance.now();
      touchVelocity = 0;
      touchGateStart = gate;
      clearSettleTimer();
    };

    const handleTouchMove = (event) => {
      if (reducedMotion.matches || state === "committing" || (!inCoverGate() && gate <= 0)) return;
      const currentY = event.touches[0]?.clientY ?? touchLastY;
      const now = performance.now();
      const delta = touchStartY - currentY;
      if (delta <= 2 && gate <= 0) return;

      event.preventDefault();
      if (!beginPull()) return;
      const frameDelta = touchLastY - currentY;
      touchVelocity = frameDelta / Math.max(16, now - touchLastTime);
      touchLastY = currentY;
      touchLastTime = now;
      const ratio = clamp(gate / threshold());
      const gain = delta > 0 ? Math.max(0.64, 0.96 - ratio * 0.22) : 1.24;
      pullTo(touchGateStart + delta * gain);
    };

    const handleTouchEnd = () => {
      if (reducedMotion.matches || state !== "pulling") return;
      const projectedGate = gate + Math.max(0, touchVelocity) * 130;
      if (projectedGate >= threshold() * 0.96) {
        unlockToDetail();
      } else {
        snapBack();
      }
    };

    const handleKeyDown = (event) => {
      if (reducedMotion.matches || state === "committing" || !inCoverGate()) return;
      const keys = new Set(["PageDown", " ", "ArrowDown"]);
      if (!keys.has(event.key)) return;
      event.preventDefault();
      unlockToDetail();
    };

    updateTone();
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    reducedMotion.addEventListener?.("change", requestUpdate);
  })();
</script>

<script>
  (() => {
    const params = new URLSearchParams(window.location.search);
    if (!params.has("publicationTuner")) return;

    const page = document.querySelector(".about-page");
    const list = document.querySelector(".publication-list");
    const firstItem = document.querySelector(".publication-item");
    if (!page || !list || !firstItem) return;

    const storageKey = "publicationTunerState";
    const panelStyle = document.createElement("style");
    panelStyle.textContent = `
      .publication-tuner {
        position: fixed;
        top: 1rem;
        right: 1rem;
        z-index: 3000;
        width: min(360px, calc(100vw - 2rem));
        max-height: calc(100vh - 2rem);
        overflow: auto;
        padding: 0.9rem;
        border: 1px solid oklch(78% 0.018 250 / 0.85);
        border-radius: 8px;
        background: oklch(98% 0.006 250 / 0.98);
        box-shadow: 0 18px 50px oklch(20% 0.02 250 / 0.18);
        color: oklch(22% 0.024 252);
        font-family: var(--about-text-font, system-ui, sans-serif);
      }

      [data-mode="dark"] .publication-tuner {
        border-color: oklch(43% 0.026 250);
        background: oklch(21% 0.018 250 / 0.98);
        color: oklch(91% 0.011 245);
      }

      .publication-tuner h2 {
        margin: 0;
        font-size: 1rem;
        line-height: 1.2;
      }

      .publication-tuner p {
        margin: 0.35rem 0 0;
        color: oklch(52% 0.022 250);
        font-size: 0.78rem;
        line-height: 1.45;
      }

      [data-mode="dark"] .publication-tuner p {
        color: oklch(72% 0.018 246);
      }

      .publication-tuner-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 0.4rem;
        margin: 0.8rem 0;
      }

      .publication-tuner button {
        min-height: 2rem;
        padding: 0.3rem 0.56rem;
        border: 0;
        border-radius: 6px;
        background: oklch(90% 0.012 250);
        color: inherit;
        font-size: 0.76rem;
        font-weight: 700;
      }

      [data-mode="dark"] .publication-tuner button {
        background: oklch(30% 0.021 249);
      }

      .publication-tuner fieldset {
        margin: 0.75rem 0 0;
        padding: 0.75rem;
        border: 1px solid oklch(86% 0.012 252);
        border-radius: 8px;
      }

      [data-mode="dark"] .publication-tuner fieldset {
        border-color: oklch(39% 0.024 249);
      }

      .publication-tuner legend {
        padding: 0 0.35rem;
        font-size: 0.76rem;
        font-weight: 800;
      }

      .publication-tuner-row {
        display: grid;
        grid-template-columns: 6.7rem minmax(0, 1fr) 3.6rem;
        gap: 0.5rem;
        align-items: center;
        margin-top: 0.55rem;
        font-size: 0.74rem;
      }

      .publication-tuner-row input[type="range"] {
        width: 100%;
      }

      .publication-tuner-row input[type="text"] {
        grid-column: 2 / 4;
        width: 100%;
        min-height: 1.9rem;
        padding: 0.24rem 0.4rem;
        border: 1px solid oklch(82% 0.012 252);
        border-radius: 6px;
        background: oklch(99% 0.004 245);
        color: inherit;
        font: 0.72rem/1.2 ui-monospace, SFMono-Regular, Menlo, monospace;
      }

      [data-mode="dark"] .publication-tuner-row input[type="text"] {
        border-color: oklch(42% 0.024 249);
        background: oklch(25% 0.022 249);
      }

      .publication-tuner output {
        color: oklch(46% 0.024 252);
        font-variant-numeric: tabular-nums;
        text-align: right;
      }

      [data-mode="dark"] .publication-tuner output {
        color: oklch(74% 0.018 246);
      }

      .publication-tuner-css {
        width: 100%;
        min-height: 7rem;
        margin-top: 0.65rem;
        padding: 0.55rem;
        border: 1px solid oklch(84% 0.012 252);
        border-radius: 8px;
        background: oklch(99% 0.004 245);
        color: inherit;
        font: 0.7rem/1.45 ui-monospace, SFMono-Regular, Menlo, monospace;
        resize: vertical;
      }

      [data-mode="dark"] .publication-tuner-css {
        border-color: oklch(42% 0.024 249);
        background: oklch(25% 0.022 249);
      }
    `;
    document.head.appendChild(panelStyle);

    const numberFromCss = (value, fallback = 0) => {
      const parsed = Number.parseFloat(value);
      return Number.isFinite(parsed) ? parsed : fallback;
    };

    const px = (value) => `${Number(value).toFixed(1).replace(/\.0$/, "")}px`;
    const css = (element, property, pseudo = null) => getComputedStyle(element, pseudo).getPropertyValue(property).trim();
    const columns = css(firstItem, "grid-template-columns").split(" ");
    const content = firstItem.querySelector(".publication-content");
    const badges = firstItem.querySelector(".about-badges");
    const date = firstItem.querySelector(".publication-date");
    const node = firstItem.querySelector(".publication-node");
    const title = firstItem.querySelector("h3");
    const authors = firstItem.querySelector("p");
    const link = firstItem.querySelector(".publication-links a");
    const badge = firstItem.querySelector(".about-badge");
    const spotlight = document.querySelector(".about-badge-spotlight");
    const venue = document.querySelector(".publication-badge-venue");
    const beforeLeft = numberFromCss(css(list, "left", "::before"));

    const initialState = {
      "--pub-line-left": px(beforeLeft),
      "--pub-list-gap": px(numberFromCss(css(list, "row-gap"))),
      "--pub-date-col": px(numberFromCss(columns[0], 80)),
      "--pub-node-col": px(numberFromCss(columns[1], 24)),
      "--pub-item-gap": px(numberFromCss(css(firstItem, "column-gap"))),
      "--pub-item-padding-top": px(numberFromCss(css(firstItem, "padding-top"))),
      "--pub-item-padding-bottom": px(numberFromCss(css(firstItem, "padding-bottom"))),
      "--pub-date-padding-top": px(numberFromCss(css(date, "padding-top"))),
      "--pub-node-margin-top": px(numberFromCss(css(node, "margin-top"))),
      "--pub-content-padding-top": px(numberFromCss(css(content, "padding-top"))),
      "--pub-content-padding-bottom": px(numberFromCss(css(content, "padding-bottom"))),
      "--pub-badge-margin-top": px(numberFromCss(css(badges, "margin-top"))),
      "--pub-badge-column-gap": px(numberFromCss(css(badges, "column-gap"))),
      "--pub-badge-row-gap": px(numberFromCss(css(badges, "row-gap"))),
      "--pub-spotlight-offset-x": css(page, "--pub-spotlight-offset-x") || "0px",
      "--pub-spotlight-offset-y": css(page, "--pub-spotlight-offset-y") || "0px",
      "--pub-spotlight-margin-left": spotlight ? px(numberFromCss(css(spotlight, "margin-left"))) : "0px",
      "--pub-spotlight-margin-right": spotlight ? px(numberFromCss(css(spotlight, "margin-right"))) : "0px",
      "--pub-spotlight-padding-x": spotlight ? px(numberFromCss(css(spotlight, "padding-left"))) : "8.96px",
      "--pub-spotlight-padding-y": spotlight ? px(numberFromCss(css(spotlight, "padding-top"))) : "1.92px",
      "--pub-line-color": css(page, "--about-line-strong") || css(node, "border-top-color"),
      "--pub-date-color": css(date, "color"),
      "--pub-node-color": css(node, "border-top-color"),
      "--pub-title-color": css(title, "color"),
      "--pub-author-color": css(authors, "color"),
      "--pub-link-color": css(link, "color"),
      "--pub-badge-color": css(badge, "color"),
      "--pub-spotlight-bg": spotlight ? css(spotlight, "background-color") : "oklch(91% 0.085 82)",
      "--pub-spotlight-color": spotlight ? css(spotlight, "color") : "oklch(43% 0.13 78)",
      "--pub-venue-color": venue ? css(venue, "color") : css(authors, "color")
    };

    const savedState = JSON.parse(localStorage.getItem(storageKey) || "{}");
    const state = { ...initialState, ...savedState };
    const rangeControls = [
      ["--pub-line-left", "竖线 X", 40, 180, 0.5],
      ["--pub-list-gap", "条目间距", 0, 80, 1],
      ["--pub-date-col", "日期列宽", 40, 150, 1],
      ["--pub-node-col", "圆点列宽", 8, 70, 1],
      ["--pub-item-gap", "列间距", 0, 48, 1],
      ["--pub-item-padding-top", "条目上距", 0, 48, 1],
      ["--pub-item-padding-bottom", "条目下距", 0, 72, 1],
      ["--pub-date-padding-top", "日期上距", 0, 48, 1],
      ["--pub-node-margin-top", "圆点上距", 0, 48, 1],
      ["--pub-content-padding-top", "内容上距", 0, 48, 1],
      ["--pub-content-padding-bottom", "内容下距", 0, 72, 1],
      ["--pub-badge-margin-top", "Badge 上距", -24, 48, 0.5],
      ["--pub-badge-column-gap", "Badge 左右距", 0, 48, 0.5],
      ["--pub-badge-row-gap", "Badge 行距", 0, 48, 0.5],
      ["--pub-spotlight-offset-x", "Spotlight X", -48, 48, 0.5],
      ["--pub-spotlight-offset-y", "Spotlight Y", -32, 32, 0.5],
      ["--pub-spotlight-margin-left", "Spotlight 左距", -32, 48, 0.5],
      ["--pub-spotlight-margin-right", "Spotlight 右距", -32, 48, 0.5],
      ["--pub-spotlight-padding-x", "Spotlight 左右内距", 0, 28, 0.5],
      ["--pub-spotlight-padding-y", "Spotlight 上下内距", 0, 16, 0.5]
    ];
    const colorControls = [
      ["--pub-line-color", "竖线颜色"],
      ["--pub-date-color", "日期颜色"],
      ["--pub-node-color", "圆点颜色"],
      ["--pub-title-color", "标题颜色"],
      ["--pub-author-color", "作者颜色"],
      ["--pub-link-color", "链接颜色"],
      ["--pub-badge-color", "普通标签颜色"],
      ["--pub-spotlight-bg", "Spotlight 背景"],
      ["--pub-spotlight-color", "Spotlight 文字"],
      ["--pub-venue-color", "会议文字"]
    ];

    const panel = document.createElement("aside");
    panel.className = "publication-tuner";
    panel.setAttribute("aria-label", "Publication style tuner");
    panel.innerHTML = `
      <h2>Publication Tuner</h2>
      <p>实时调 Publications 区域。当前设置保存在本浏览器 localStorage 里。</p>
      <div class="publication-tuner-actions">
        <button type="button" data-action="align">圆点对齐竖线</button>
        <button type="button" data-action="copy">复制 CSS</button>
        <button type="button" data-action="reset">重置</button>
        <button type="button" data-action="close">关闭</button>
      </div>
      <fieldset>
        <legend>Spacing</legend>
        <div data-range-controls></div>
      </fieldset>
      <fieldset>
        <legend>Color</legend>
        <div data-color-controls></div>
      </fieldset>
      <textarea class="publication-tuner-css" readonly spellcheck="false"></textarea>
    `;
    document.body.appendChild(panel);

    const rangeHost = panel.querySelector("[data-range-controls]");
    const colorHost = panel.querySelector("[data-color-controls]");
    const cssOutput = panel.querySelector(".publication-tuner-css");

    const renderCssText = () => {
      cssOutput.value = `.about-page {\n${Object.entries(state)
        .map(([key, value]) => `  ${key}: ${value};`)
        .join("\n")}\n}`;
    };

    const applyState = () => {
      Object.entries(state).forEach(([key, value]) => {
        page.style.setProperty(key, value);
      });
      localStorage.setItem(storageKey, JSON.stringify(state));
      renderCssText();
    };

    const syncRangeOutput = (input) => {
      const output = input.closest(".publication-tuner-row").querySelector("output");
      output.value = px(input.value);
    };

    rangeControls.forEach(([key, label, min, max, step]) => {
      const row = document.createElement("label");
      row.className = "publication-tuner-row";
      const current = numberFromCss(state[key], min);
      row.innerHTML = `
        <span>${label}</span>
        <input type="range" min="${min}" max="${max}" step="${step}" value="${current}" data-key="${key}">
        <output>${px(current)}</output>
      `;
      const input = row.querySelector("input");
      input.addEventListener("input", () => {
        state[key] = px(input.value);
        syncRangeOutput(input);
        applyState();
      });
      rangeHost.appendChild(row);
    });

    colorControls.forEach(([key, label]) => {
      const row = document.createElement("label");
      row.className = "publication-tuner-row";
      row.innerHTML = `
        <span>${label}</span>
        <input type="text" value="${state[key].replace(/"/g, "&quot;")}" data-key="${key}" spellcheck="false">
      `;
      const input = row.querySelector("input");
      input.addEventListener("input", () => {
        state[key] = input.value.trim();
        applyState();
      });
      colorHost.appendChild(row);
    });

    panel.addEventListener("click", async (event) => {
      const button = event.target.closest("button[data-action]");
      if (!button) return;

      if (button.dataset.action === "align") {
        const listRect = list.getBoundingClientRect();
        const nodeRect = document.querySelector(".publication-node").getBoundingClientRect();
        state["--pub-line-left"] = px(nodeRect.left + nodeRect.width / 2 - listRect.left);
        const input = panel.querySelector('input[data-key="--pub-line-left"]');
        input.value = numberFromCss(state["--pub-line-left"]);
        syncRangeOutput(input);
        applyState();
      }

      if (button.dataset.action === "copy") {
        renderCssText();
        cssOutput.select();
        try {
          await navigator.clipboard.writeText(cssOutput.value);
          button.textContent = "已复制";
          window.setTimeout(() => {
            button.textContent = "复制 CSS";
          }, 1100);
        } catch {
          document.execCommand("copy");
        }
      }

      if (button.dataset.action === "reset") {
        localStorage.removeItem(storageKey);
        window.location.reload();
      }

      if (button.dataset.action === "close") {
        panel.remove();
      }
    });

    applyState();
  })();
</script>
