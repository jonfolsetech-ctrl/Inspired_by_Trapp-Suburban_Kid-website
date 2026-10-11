# INSPIRED BY TRAPP — Suburban Kidd Artist Website

A responsive, static artist site built with semantic HTML, TypeScript, and Tailwind CSS.

## Preview

Install dependencies and build the compiled TypeScript and Tailwind assets:

```sh
npm install
npm run build
```

Then run a local server from this folder:

- Python: `python3 -m http.server 8000`
- Then visit `http://localhost:8000`

Use `npm run dev` to watch and rebuild TypeScript and Tailwind while developing.

## Before publishing

1. Replace the concept artist name/brand if needed.
2. Replace concept releases, cover artwork, and all `href="#"` placeholders with verified artist links.
3. Replace the atmospheric Unsplash image URLs with artist-owned/licensed photography.
4. The contact form opens an email to `jon.folse.tech@gmail.com`; connect a form backend if direct submission is needed.
5. Add verified show dates only after they are confirmed.
6. Connect a real checkout provider before claiming merch is for sale.
7. Update SEO and social preview metadata in `index.html`.

## Notes

- Release artwork and product mockups are CSS-created concepts, not actual released products.
- Tour section intentionally avoids fabricated dates or venues.
- External streaming links intentionally show a helpful placeholder toast until configured.
- Google Fonts and Unsplash photography require an internet connection.
