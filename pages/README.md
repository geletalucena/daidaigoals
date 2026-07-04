# DaiDaiGoals HTML Section Demo

This workspace contains a standalone HTML/CSS demo for replacing the current image-only `About Us`, `Careers`, and `Contact` sections on `https://daidaigoals.com/`.

## Files

- `aboutus.html` - standalone About Us page with semantic HTML.
- `careers.html` - standalone Careers page with semantic HTML.
- `contact.html` - standalone Contact page with semantic HTML.
- `styles.css` - shared styles for the three sections.
- `assets/sections/` - cropped visual assets extracted from the current live PNG sections.
- `.daidai-investigation/` - temporary source PNGs downloaded from the live site for investigation and slicing.

## Preview

The pages can be previewed directly through any static file server. During this workspace session they are being served at:

```text
http://127.0.0.1:4173/aboutus.html
http://127.0.0.1:4173/careers.html
http://127.0.0.1:4173/contact.html
```

## Migration Target

The live site currently renders these sections as full images:

```html
<section id="about">
  <img src="res/AboutUs.png" alt="About DaiDaiGoals" class="responsive-image">
</section>

<section id="careers">
  <img src="res/Careers.png" alt="Careers at DaiDaiGoals" class="responsive-image">
</section>

<section id="contact">
  <img src="res/ContactUs.png" alt="Contact Us" class="responsive-image">
</section>
```

When the real GitHub source repository is available, replace those image-only sections with the matching sections from `index.html`, copy `styles.css` rules into the site's stylesheet, and copy `assets/sections/` into the site's public assets directory.

## Notes

- Text content is real DOM text for SEO, accessibility, copying, and future editing.
- Large decorative illustrations and culture images are sliced from the current images and placed back into the equivalent layout positions.
- Career and contact buttons currently use `mailto:operation@daidaigoals.com` placeholders. Replace them with final career/opening URLs when available.
- The demo header is only for standalone preview. When migrating into the real site, keep the real production header and replace only the image-only section bodies.
