[README.md](https://github.com/user-attachments/files/30327212/README.md)
# Studio Thames website

A complete, responsive portfolio for GitHub Pages. No framework, build step, or paid software is required.

## Quick start

1. Unzip this folder.
2. Open `index.html` in a browser to preview it.
3. Replace the sample images using the filenames below.
4. Upload the contents of this folder to the root of your GitHub repository.
5. In GitHub, open **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.

## Replace the sample images

Add your files using these exact names:

```text
images/
├── hero/
│   └── hero-landscape.jpg
├── portfolio/
│   ├── dunes.jpg
│   ├── mountain-layers.jpg
│   ├── outdoor-product.jpg
│   └── snow-red-rock.jpg
├── motion/
│   └── boat-circle-poster.jpg
└── about/
    └── marcus-thames.jpg
```

Then open `style.css` and replace these five remote image URLs:

- `.hero-image` → `url("images/hero/hero-landscape.jpg")`
- `.film-poster` → `url("images/motion/boat-circle-poster.jpg")`
- `.about-image` → `url("images/about/marcus-thames.jpg")`

For the four portfolio images, open `index.html` and replace each remote URL inside `--story-image` with its matching local path. Comments directly above each card show the exact filename.

For best speed, export images as JPG or WebP, around 2000–2400 pixels wide and usually under 1 MB each.

## Add the Boat Circle video

Put the compressed file at `videos/boat-circle.mp4`. For a fast-loading website, keep it under roughly 20 MB, remove audio if it is only a background, and export H.264 MP4.

To turn the Motion card into a video, replace the `<button class="film-card"...>...</button>` block in `index.html` with:

```html
<div class="film-card reveal">
  <video controls preload="metadata" poster="images/motion/boat-circle-poster.jpg">
    <source src="videos/boat-circle.mp4" type="video/mp4">
    Your browser does not support embedded video.
  </video>
</div>
```

Then add this to the bottom of `style.css`:

```css
.film-card video { width:100%; height:100%; min-height:650px; object-fit:cover; display:block; }
```

For a large high-resolution film, Vimeo or YouTube embedding will load faster than storing it on GitHub.

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
