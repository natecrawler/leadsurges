# Lead Surges

The official leadsurges.com website. Built with Astro, deployed on Netlify, fully editable via Claude Code prompts.

## Quick start

```sh
npm install
npm run dev        # local dev server at http://localhost:4321
npm run build      # production build to ./dist
npm run preview    # preview the production build locally
```

## Project layout

```
src/
  components/       Reusable Astro components (Header, Footer, Button, ServiceCard)
  content/blog/     Blog posts as Markdown — add a new .md file to add a post
  content.config.ts Blog collection schema
  layouts/          Page layout with shared header, footer, SEO meta
  pages/            Each .astro file is a route
    services/       /services + /services/[location] for 6 location pages
    blog/           /blog index + /blog/[slug] post pages
  styles/global.css Tailwind theme + design tokens
public/             Static assets served at the root
astro.config.mjs    Astro config (sitemap + Tailwind)
netlify.toml        Netlify build + headers
```

## Editing

The whole site is plain Astro + Tailwind. Tell Claude Code what to change in natural language and it'll make the edit.

Common edits:

- **Add a blog post:** create `src/content/blog/<slug>.md` with the frontmatter fields from any existing post.
- **Change pricing:** edit the `tiers` array in `src/pages/pricing.astro`.
- **Update contact info:** search-and-replace in `src/components/Footer.astro`, `src/pages/contact.astro`, and the JSON-LD block in `src/layouts/Layout.astro`.
- **Add a new service area:** add an entry to the `locations` array in `src/pages/services/[location].astro`, then add it to the header/footer/home location lists.

## Deployment

Push to `main` → Netlify auto-builds → live.

## Contact form

The contact form uses Netlify Forms (no backend code needed). Submissions appear in the Netlify dashboard under **Forms**. Configure email notifications there.
