# Arabian Grid

Decision-grade intelligence on MEA renewable energy markets. A personal platform by Krishna Singh, Chief Business Officer.

## Site Structure

```
arabiangrid-site/
├── index.html          # Home page — hero, KPIs, featured briefs, about teaser
├── intelligence.html   # Intelligence library — country primers, deal briefs, methodology
├── about.html          # About the author — full story, timeline, credentials
├── contact.html        # Contact — email, LinkedIn, availability status, message form
├── css/
│   └── style.css       # Full stylesheet — navy/gold/cream palette, responsive
├── js/
│   └── main.js         # Mobile nav, filter tabs, smooth scroll, navbar scroll effect
└── images/             # Placeholder for author photo and future assets
```

## Deployment Options

### Option A: GitHub Pages (Recommended — free, custom domain)

1. Create a new GitHub repository (e.g., `arabiangrid`)
2. Upload all files from `arabiangrid-site/` to the repo
3. Go to **Settings > Pages**
4. Source: **Deploy from a branch** → **main** → **/ (root)**
5. Add custom domain: `www.arabiangrid.com`
6. Add a `CNAME` file to the repo root with contents: `www.arabiangrid.com`
7. Configure DNS at your registrar:
   - **A records:** `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - **CNAME:** `www` → `yourusername.github.io`

### Option B: Netlify (Drag-and-drop, easiest)

1. Go to [netlify.com](https://netlify.com) and sign up
2. Drag the `arabiangrid-site/` folder onto the deploy area
3. Site goes live instantly with a `*.netlify.app` URL
4. Go to **Domain Settings > Add Custom Domain**
5. Enter `www.arabiangrid.com`
6. Follow Netlify's DNS instructions (usually just change nameservers)

### Option C: Cloudflare Pages (Fast, free, built-in CDN)

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com)
2. **Pages > Create a project**
3. Connect GitHub repo or upload directly
4. Build settings: **None** (static site)
5. Add custom domain `www.arabiangrid.com`
6. Cloudflare handles DNS automatically if domain is on their nameservers

## Before Going Live

- [ ] Replace placeholder image in About section with your actual headshot (300×400px or 1:1 ratio)
- [ ] Add the Angola carousel PDF to `assets/` folder and update the download link
- [ ] Verify all external links (LinkedIn, email) work correctly
- [ ] Set up Google Analytics if desired (add tracking code to all pages)
- [ ] Test mobile responsiveness on actual devices
- [ ] Configure DNS at your domain registrar
- [ ] Enable HTTPS (GitHub Pages/Netlify/Cloudflare do this automatically)

## Content Update Workflow

1. **Add new briefs:** Edit `intelligence.html`, copy a `brief-card` block, update content
2. **Update KPIs:** Edit `index.html` KPI section
3. **Add new pages:** Copy any existing HTML, update `<nav>` links, add to CSS
4. **Style changes:** Edit `css/style.css` — no build step needed

## Tech Stack

- Pure HTML5 + CSS3 + vanilla JavaScript
- No frameworks, no build tools, no dependencies
- Mobile-first responsive design
- A4-optimized for PDF carousel display

## License

Content copyright Krishna Singh. Site design for personal brand use only.
