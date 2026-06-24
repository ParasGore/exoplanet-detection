# Exoplanet Detection — Learners' Space Website

A static, GitHub Pages-friendly interactive website for an astronomy Learners' Space module on **Exoplanet Detection**.

## Files

- `index.html` — page structure and content
- `style.css` — visual design, layout, responsive styles
- `script.js` — navigation, starfield, and interactive simulations

## Run locally

You can simply open `index.html` in a browser.

For a local server:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Deploy on GitHub Pages

1. Create a new GitHub repository, for example `exoplanet-detection`.
2. Upload these files directly to the root of the repository:
   - `index.html`
   - `style.css`
   - `script.js`
   - `README.md`
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
5. Click **Save**.
6. Wait 1–2 minutes. Your website will appear at:

```text
https://YOUR-USERNAME.github.io/exoplanet-detection/
```

## Edit before final submission

Search in `index.html` for text like “Learners' Space Astronomy”, “Thank you”, and the resource links. Replace them with your own names, mentor credits, and official module links.

## Design note

This is inspired by scroll-based astronomy presentation sites, but it uses a different nebula-grid background, glass-card layout, method map, and custom canvas simulations rather than copying any one design exactly.
