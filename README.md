# Joseph A. Walton Academic Website

A static Astro + Tailwind academic portfolio built from the 43-page website blueprint.

## Start locally

```bash
npm install
npm run dev
```

## Production check

```bash
npm run check
npm run build
npm run preview
```

## Deploy to GitHub Pages

1. Replace the contents of `walton-j.github.io` with this project.
2. Commit `package-lock.json` after running `npm install`.
3. In GitHub: **Settings > Pages > Source > GitHub Actions**.
4. Push to `main`; `.github/workflows/deploy.yml` builds and deploys the site.

Because the repository is named `walton-j.github.io`, `astro.config.mjs` uses the root URL and needs no `base` path.

## Update content

- Publications: `src/content/publications/publications.json`
- Projects: `src/content/projects/*.md`
- Writing: `src/content/writing/*.md`
- CV: replace `public/joseph-walton-cv.pdf`
- Contact/profile links: `src/components/layout/Footer.astro` and `src/pages/contact.astro`
- Site domain: `astro.config.mjs`

## Asset notes

The uploaded crest was converted into full-size, header, favicon, touch-icon, and Open Graph assets. `hero-study.svg` is an original lightweight placeholder illustration and can be replaced with a compressed 1200px photograph later.

## Manual QA

- Check all routes and links.
- Test mobile menu by keyboard.
- Verify filter controls with and without JavaScript.
- Confirm CV embed and download.
- Run Lighthouse; target Performance 90+ and Accessibility 95+.
- Check 320px, 768px, 1024px, and 1280px widths.
