# Studio Thames website

A complete, responsive portfolio using Massaquoi Thames' supplied photography, commercial work, and two films. No framework, build step, or paid software is required.

## Quick start

1. Unzip this folder.
2. Open `index.html` in a browser to preview it.
3. Upload the website files to the root of your GitHub repository.
4. In GitHub, open **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.

## Your integrated images

The supplied originals were preserved. Web-optimized copies were created inside the site:

```text
images/hero/snowy-sunset.webp
images/drone/coastline-above.webp
images/drone/lakeshore-dusk.webp
images/portfolio/blue-ridge-layers.webp
images/portfolio/desert-gold.webp
images/portfolio/desert-ridges.webp
images/portfolio/dune-portrait.webp
images/portfolio/dune-wind.webp
images/portfolio/mountain-haze.webp
images/portfolio/snow-canyon.webp
images/portfolio/snow-mountain-range.webp
images/portfolio/snow-red-rock.webp
images/portfolio/wild-grass.webp
```

All are already connected to the page.

## Integrated film

The public Motion section currently contains:

- `videos/winter-from-above.mp4` — about 22 MB

Winter From Above is ready for GitHub. Lake Michigan has been intentionally left out of the public build because its original is about 320 MB. It can be added later after exporting a web copy named `lake-michigan-web.mp4`:

- H.264 MP4
- 1920 × 1080
- 8–12 Mbps target bitrate
- AAC audio or no audio
- Aim for under 100 MB; under 40 MB is better

It can then be added as a second Motion card or uploaded to Vimeo or YouTube and embedded.

## Make the contact form send messages

GitHub Pages displays HTML but cannot process forms itself. A simple free option is Formspree:

1. Create a form at formspree.io.
2. Copy the form URL they provide.
3. In `index.html`, find `<form class="contact-form"... action="#">`.
4. Replace `#` with your Formspree URL.

Also replace `hello@studiothames.com`, Instagram, and Vimeo links with your real details.

## Editing guide

- All page wording and section order: `index.html`
- Colors, fonts, spacing, and layout: `style.css`
- Menu, scroll animation, film preview, and form notice: `script.js`
- “Field Notes” is intentionally flexible and can later become a blog, business journal, or finance area.

The site uses Google Fonts when online and clean system-font fallbacks when offline.
