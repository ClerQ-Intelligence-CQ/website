# ClerQ Intelligence: Production Web Assets & Site

## Directory Overview

- **Core Pages**: `index.html`, `research/index.html`, `about/index.html`, `partners/index.html`, `contact/index.html`, `404.html`
- **Styles**: `css/main.css` (Vanilla CSS design system with responsive typography, dark tone palette, and 3D animations)
- **Scripts**: `js/main.js` (Bilingual EN/SW toggle, navigation, scroll reveals), `js/hero-scene.js` (Three.js wireframe sphere), `js/principles-scene.js` (3D Solar horizon model)
- **Official Vector Logos**: `assets/logos/clerq-logotype.svg`, `assets/logos/cq-monogram.svg`, `assets/logos/hakiki-logo.svg`, `assets/logos/hakiki-mark.svg`
- **Favicons & PWA Manifest**: Root `favicon.ico`, `favicon.svg`, `favicon-16.png`, `favicon-32.png`, `favicon-48.png`, `favicon-192.png`, `favicon-512.png`, `apple-touch-icon.png`, `site.webmanifest`
- **Production Media**: `assets/images/clinician-care.jpg`, `assets/images/primary-encounter.jpg`, `assets/images/hero-texture.jpg`, `assets/images/sema-manuscript.jpg`, `assets/images/rafiki-mesh.jpg`
- **Hosting & Routing**: `_redirects`, `netlify.toml`, `robots.txt`, `sitemap.xml`, `sitemap.xsl`
- **Architecture & Specifications**: `docs/clerq-intelligence-expose.md`, `docs/01-SITE-SPEC.md`, `docs/02-COPY-DECK.md`, `docs/03-IMAGE-PROMPTS.md`

## Zero Dependencies Architecture

This codebase requires no Node.js, no npm build step, and no compilation. It is pure static HTML5, CSS3, and modern browser JavaScript.

## Deploying to Netlify

1. Navigate to your Netlify dashboard: https://app.netlify.com/drop
2. Drag and drop this folder (`E`) directly into the upload area.
3. Your site is live immediately with clean URLs, security headers, language persistence, and production SEO.
