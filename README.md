# Scrap Trading Website (Next.js + App Router)

This is a frontend-only scrap trading/company profile website built with Next.js (App Router), TypeScript and Tailwind CSS. All data is local and editable.

Quick start

1. Install dependencies:

```bash
npm install
```

2. Run development server:

```bash
npm run dev
```

Where to edit company info

- `data/company.ts` — update `name`, `address`, `whatsapp`, `phone`, `googleMapsUrl`, and `googleMapsEmbedUrl`.

Where to edit scrap items

- `data/scrapItems.ts` — add, remove or edit items. Each item must have a unique `slug`.

Images

- Place images under `public/images/` and reference them in `data/scrapItems.ts` (e.g. `/images/copper-scrap.jpg`).

Build & deploy

```bash
npm run build
npm start
```

Deploy to Vercel

- Connect this repository to Vercel and select the `app` directory (root). Vercel will detect Next.js and build automatically.

Verify sitemap and robots

- `https://your-domain.com/sitemap.xml`
- `https://your-domain.com/robots.txt`
