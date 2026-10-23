import urllib.parse
import json

def make_link(sub, title, body):
    base = f"https://www.reddit.com/r/{sub}/submit"
    params = {"title": title, "text": body}
    return base + "?" + urllib.parse.urlencode(params)

# 1. r/forhire
t_forhire = "[For Hire] NYC Software Engineer — Turnkey Custom Websites & Managed Hosting for $25/month (or $35/hr custom dev)"
b_forhire = """Hey everyone! I'm Varun, an NYC-based software engineer. Outside of my day job, I partner with independent comedians, artisanal bakeries, tailors, creators, and local businesses to design, build, host, and maintain custom websites for a flat **$25 / month** (or $35/hr for ad-hoc custom engineering). Flexible payment options: Card, Apple Pay, Venmo, or PayPal.

### 🌐 Live Websites I've Built (Check Them Out):
1. **[tightpantscomedy.com](https://tightpantscomedy.com/)** — NYC indie stand-up comedy showcase at St. Marks Comedy Club in the East Village.
2. **[Takahachi Bakery](https://behlv10.github.io/takahachi-bakery/)** — Tribeca NYC Japanese artisanal bakery with interactive cake pre-order builder.
3. **[Wo's Custom Tailoring](https://behlv10.github.io/wos-custom-tailoring/)** — Upper East Side bespoke master tailoring salon with VIP appointment scheduler.
4. **[Black Sheep Bagel Cafe](https://behlv10.github.io/black-sheep-bagels/)** — Harvard Square craft sourdough bagel shop with dynamic sandwich customizer.
5. **[Japonaise Bakery & Cafe](https://behlv10.github.io/japonaise-bakery/)** — Historic French-Japanese bakery in Brookline, MA.
6. **[NYC Events Aggregator](https://behlv10.github.io/nyc_events/)** — 149+ venue real-time event aggregator with interactive OpenStreetMap dark map.
7. **[Wicked Boston Events](http://www.wickedbostonevents.com/)** — Curated live Boston concert and nightlife discovery calendar.

Portfolio: https://behlv10.github.io/varuns_website/

### 💡 What's Included in the $25/month Plan:
- **100% Custom Modern Code** (React / Tailwind / Static — blazing fast, 95+ Google Lighthouse speed)
- **High-Speed CDN Hosting & Free SSL** (HTTPS)
- **Custom Domain Setup** (hooked up directly to your .com / .org)
- **Ongoing Maintenance & Content Updates** (need text, photo, event, or menu changes? Just send an email/message and it's updated in 24–48 hours)
- **Flexible Payments Accepted** (Credit Card, Apple Pay, Google Pay, Venmo, or PayPal)
- **Zero Lock-in Contracts** — Cancel anytime with zero fees.

If you or someone you know needs a sharp, fast website without paying an agency $3,000 upfront, check out my portfolio or shoot me a DM / email at behlv10@gmail.com!"""

# 2. r/freelance_forhire
t_freelance = "[For Hire] Web Developer — Custom Websites, Hosting & Monthly Updates for $25/month"
b_freelance = b_forhire

# 3. r/SideProject
t_sideproject = "I built a $25/mo website-as-a-service model for creators and local businesses so they avoid $3k agency fees"
b_sideproject = """Hey r/SideProject!

Like many engineers, I've had friends, local comedy producers, and small business owners ask me for website help over the years. When they look at traditional options:
1. **Agencies** quote $3,000–$5,000 upfront and charge $125/hr for basic text edits.
2. **Squarespace / Wix** cost $25–$35/mo just for software, and they end up losing weekends fighting clunky drag-and-drop templates that run sluggishly on mobile.

So I launched a productized service: **$25 / month all-inclusive** (custom build, high-speed CDN hosting, SSL, domain connection, and continuous monthly content updates). I accept card subscriptions, Apple Pay, Google Pay, Venmo, or PayPal.

### Recent Production Examples:
- **[tightpantscomedy.com](https://tightpantscomedy.com/)** — NYC comedy club showcase with in-page Eventbrite ticket sales
- **[Takahachi Bakery](https://behlv10.github.io/takahachi-bakery/)** — Tribeca Japanese bakery with interactive celebration cake pre-orders
- **[Wo's Custom Tailoring](https://behlv10.github.io/wos-custom-tailoring/)** — Upper East Side bespoke master tailoring salon
- **[wickedbostonevents.com](http://www.wickedbostonevents.com/)** — Boston nightlife discovery calendar
- **[NYC Events](https://behlv10.github.io/nyc_events/)** — 149+ venue live aggregator with interactive OpenStreetMap dark theme map

My portfolio & intake flow: https://behlv10.github.io/varuns_website/

Would love feedback on the landing page, the intake wizard, and how you think about pricing productized dev services!"""

# 4. r/nycevents / NYC local
t_nycevents = "[Offer] NYC Software Engineer — Custom websites for local comedy shows, artists, & small businesses ($25/mo)"
b_nycevents = """Hey NYC! I'm a local software engineer living in the city. Outside of my day job, I help NYC independent comedy shows, performers, nightlife curators, and neighborhood businesses launch fast, custom websites.

Recent live projects include **[tightpantscomedy.com](https://tightpantscomedy.com/)** for the East Village stand-up showcase at St. Marks Comedy Club, **[Takahachi Bakery](https://behlv10.github.io/takahachi-bakery/)** in Tribeca, **[Wo's Custom Tailoring](https://behlv10.github.io/wos-custom-tailoring/)** on the UES, and **[NYC Events](https://behlv10.github.io/nyc_events/)** tracking 149+ venues across all 5 boroughs.

Rather than charging $3,000 upfront, I partner with local folks for a flat **$25/month** (Venmo, PayPal, Card, or Apple Pay):
- Complete custom design & build (mobile-optimized, fast)
- Free high-speed hosting & domain connection (.com)
- Ticket checkout & RSVP setup (Eventbrite, DICE, Stripe, etc.)
- All monthly maintenance & photo/show updates done for you within 24-48 hours
- Cancel anytime with zero contracts

Portfolio & details: https://behlv10.github.io/varuns_website/

If your show, podcast, or business needs a proper website without the usual headache, shoot me a DM or email at behlv10@gmail.com!"""

links = {
    "forhire": make_link("forhire", t_forhire, b_forhire),
    "freelance_forhire": make_link("freelance_forhire", t_freelance, b_freelance),
    "SideProject": make_link("SideProject", t_sideproject, b_sideproject),
    "nycevents": make_link("nycevents", t_nycevents, b_nycevents)
}

with open("reddit_links.json", "w") as f:
    json.dump(links, f, indent=2)

print("Updated reddit_links.json with behlv10@gmail.com and flexible payments")
