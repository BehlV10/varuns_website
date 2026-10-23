# Varun Behl — Portfolio & $25/mo Website Service 🚀💳

A high-performance personal portfolio and client-acquisition platform built with **React 18**, **Vite**, and **Tailwind CSS**. Showcases production web applications and includes an integrated **Stripe interface** to sell turnkey website creation & maintenance services for **$25 / month**.

---

## 🌟 What's Included

### 1. Portfolio Showcase of Production Sites
- **[Tight Pants Comedy](https://tightpantscomedy.com/)**: NYC's premier independent stand-up showcase at St. Marks Comedy Club. High-converting direct-to-fan branding, Eventbrite ticket checkout, and performer rosters.
- **[NYC Events Aggregator](https://behlv10.github.io/nyc_events/)**: Real-time 5-borough calendar aggregating 149+ venues, interactive Leaflet/OpenStreetMap dark theme map, 2-hour cutoff filter, ticket price comparisons (Gametime & StubHub), and automated 30-min scraper pipeline.
- **[Wicked Boston Events](http://www.wickedbostonevents.com/)**: Dynamic nightlife & concert discovery calendar for Greater Boston.
- **[Dracula's Masquerade Host Companion](https://behlv10.github.io/DraculasMasqueradeCompanionApp/)**: Real-time game master deduction tracker for Dracula's Masquerade board game sessions.
- **[Smart Price Comparison Engine](https://github.com/BehlV10/price_comparison_app)**: Multi-vendor retail & ticket arbitrage scanner.

### 2. $25/Month Website Partnership & Stripe Interface
- **Flat $25/Month Subscription Offer**: Designed for small businesses, comedians, restaurants, and creators who need a fast, custom website without $3,000 upfront agency fees or sluggish DIY builders.
- **Stripe Integration**:
  - Direct 1-click subscription checkout powered by Stripe-hosted Payment Links (zero server maintenance or PCI burden).
  - Stripe Customer Billing Portal link for client self-service management and cancellation.
  - In-app Stripe Link configurator (you can update your link in `.env` or right inside the modal).
  - Built-in interactive test simulator so clients or reviewers can preview the subscription flow.
- **Interactive Project Brief / Intake Wizard**:
  - Step 1: Select Website Type (Comedy Showcase, Local Business, Portfolio, Restaurant/Menu, Event/Community).
  - Step 2: Choose Features (Custom Domain, Stripe Checkout, Photo Gallery, Lead Capture, Calendar Sync, Maps).
  - Step 3: Contact details & vision notes.
  - Automatically compiles the project brief, offers 1-click email submission to `behlv10@gmail.com`, and routes straight to Stripe subscription checkout or direct payment options.
- **Feature Comparison Matrix**: Compares Traditional Agencies ($3,000+ upfront) vs Squarespace/Wix ($30/mo + DIY hassle) vs Varun's $25/mo Hands-Off Partnership.

---

## ⚡ Quick Start (Local Development)

```bash
# 1. Install dependencies (already installed)
npm install

# 2. Run local dev server
npm run dev

# 3. Open in your browser
# Typically http://localhost:5173
```

To build for production:
```bash
npm run build
npm run preview
```

---

## 💳 Connecting Your Live Stripe Payment Link

Setting up your recurring $25/mo subscription takes under 2 minutes:

1. Log into your [Stripe Dashboard](https://dashboard.stripe.com/).
2. Navigate to **Product catalog** -> **Add product**.
   - **Name**: `Custom Website Creation & Maintenance Plan`
   - **Pricing**: `Recurring` -> `$25.00 USD` -> `Monthly`
3. Click **Create payment link** on the product page.
4. Copy the generated URL (e.g. `https://buy.stripe.com/...`).
5. Either:
   - Create a `.env` file in the project root:
     ```env
     VITE_STRIPE_PAYMENT_LINK=https://buy.stripe.com/your_actual_link
     ```
   - Or click **"Configure Link"** at the bottom of the Stripe checkout modal on the live site to save it instantly in your browser!

---

## 🚀 Free Deployment Options

### Option A: GitHub Pages (Recommended)
1. Initialize git and push to a new GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio and Stripe service website"
   git remote add origin git@github.com:BehlV10/varuns-website.git
   git push -u origin main
   ```
2. In `package.json`, add `"deploy": "gh-pages -d dist"` or use a GitHub Actions workflow to auto-deploy on push.

### Option B: Vercel / Netlify
1. Connect your GitHub repository to [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/).
2. Build Command: `npm run build`
3. Output Directory: `dist`
4. Add environment variable: `VITE_STRIPE_PAYMENT_LINK`
