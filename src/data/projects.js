export const projects = [
  {
    id: 'takahachi-bakery',
    title: 'Takahachi Bakery',
    tagline: 'Artisanal Japanese Bakery & Café in Tribeca, NYC',
    category: 'Bakery & Dining',
    categoryType: 'food',
    featured: true,
    image: './projects/takahachi-bakery.jpg',
    liveUrl: 'https://behlv10.github.io/takahachi-bakery/',
    githubUrl: 'https://github.com/BehlV10/takahachi-bakery',
    description:
      'A modern, high-craft digital experience for Takahachi Bakery in Tribeca, Manhattan. Highlights Executive Patissiere Naoko Mabuchi (ex-Bouley) with interactive celebration cake pre-orders, custom chocolate message piping, and full café menus.',
    impact: [
      'Interactive Whole Cake Pre-Order Builder with live serving & price calculator',
      'Custom chocolate message plaque piping preview and advance pickup scheduler',
      'Categorized Japanese tea, espresso, and daily bread catalog (Shokupan, Curry Pan, Anpan)',
      'Subway directions from R/W, 1/2/3, and A/C/E lines plus DoorDash/UberEats ordering'
    ],
    tech: ['React 18', 'Vite', 'Tailwind CSS', 'Interactive Cake Builder', 'Tribeca NYC']
  },
  {
    id: 'wos-custom-tailoring',
    title: "Wo's Custom Tailoring",
    tagline: 'Upper East Side NYC Bespoke Master Tailoring Salon',
    category: 'Local Business',
    categoryType: 'business',
    featured: true,
    image: './projects/wos-tailoring.jpg',
    liveUrl: 'https://behlv10.github.io/wos-custom-tailoring/',
    githubUrl: 'https://github.com/BehlV10/wos-custom-tailoring',
    description:
      'A luxury, bespoke digital salon for Wo\'s Custom Tailoring (1018 Lexington Ave & 73rd St, Manhattan — est. 1978). Features custom suit styling, luxury bridal alterations, leather/fur craftsmanship galleries, and VIP fitting consultations.',
    impact: [
      'Interactive Alteration & Bespoke Suiting Quote Estimator',
      'VIP In-Person Fitting Appointment Scheduler with email dispatch',
      'High-resolution before/after craftsmanship gallery and fabric guides',
      '45+ years of Upper East Side heritage presented with luxury typography'
    ],
    tech: ['React', 'Tailwind CSS', 'Appointment Scheduler', 'Luxury Atelier UI']
  },
  {
    id: 'tight-pants-comedy',
    title: 'Tight Pants Comedy',
    tagline: "NYC's Premier Independent Stand-Up Comedy Showcase",
    category: 'Production Client',
    categoryType: 'business',
    featured: true,
    image: './projects/tight-pants-live.jpg',
    secondaryImage: './projects/tight-pants.jpg',
    liveUrl: 'https://tightpantscomedy.com/',
    githubUrl: 'https://github.com/BehlV10/tight-pants-comedy',
    description:
      'A high-converting, modern web application for New York City\'s premier independent stand-up comedy showcase at St. Marks Comedy Club in the East Village. Features direct-to-fan branding, embedded ticket checkouts, comedian line-up rosters, and dynamic show countdowns.',
    impact: [
      'Engineered for maximum ticket conversion with frictionless Eventbrite checkout',
      'Mobile-first responsive design tailored for NYC nightlife crowds',
      'High-urgency promotional previews & custom flyer integration',
      'Production deployment with custom domain and 100% uptime'
    ],
    tech: ['React 18', 'Vite', 'Tailwind CSS v4', 'Eventbrite API', 'DNS / CNAME']
  },
  {
    id: 'japonaise-bakery',
    title: 'Japonaise Bakery & Cafe',
    tagline: 'Historic French-Japanese Fusion Bakery in Brookline, MA',
    category: 'Bakery & Dining',
    categoryType: 'food',
    featured: true,
    image: './projects/japonaise-bakery.jpg',
    liveUrl: 'https://behlv10.github.io/japonaise-bakery/',
    githubUrl: 'https://github.com/BehlV10/japonaise-bakery',
    description:
      'A fast, responsive web experience redesigned for Japonaise Bakery & Cafe (serving Greater Boston since 1985). Famous for azuki matcha croissants, delicate French pastries, Japanese milk breads, and custom anniversary cakes.',
    impact: [
      'Categorized digital bakery showcase with dietary & allergen filters',
      'Custom anniversary & celebration cake order request builder',
      'Interactive Google Maps directions near Coolidge Corner / St. Mary\'s T-stop',
      'Rich archival photo history celebrating nearly 40 years in Brookline'
    ],
    tech: ['React', 'Vite', 'Tailwind CSS', 'Cake Customizer', 'Mobile-First']
  },
  {
    id: 'black-sheep-bagels',
    title: 'Black Sheep Bagel Cafe',
    tagline: 'Artisanal Craft Sourdough Bagels in Harvard Square',
    category: 'Bakery & Dining',
    categoryType: 'food',
    featured: false,
    image: './projects/black-sheep-bagels.jpg',
    liveUrl: 'https://behlv10.github.io/black-sheep-bagels/',
    githubUrl: 'https://github.com/BehlV10/black-sheep-bagels',
    description:
      'A modern, vibrant digital hub for Cambridge\'s favorite artisanal sourdough bagel shop (56 JFK St, Harvard Square). Features an interactive sandwich builder, artisanal cream cheese flavor guides, and live catering request calculations.',
    impact: [
      'Interactive Bagel & Sandwich Builder with dynamic ingredient calculation',
      'Artisanal cream cheese & vegan schmear flavor showcase',
      'Corporate breakfast & office meeting catering estimator',
      'Integrated 1-tap ordering links for Toast and pickup'
    ],
    tech: ['React', 'Tailwind CSS', 'Dynamic Menu System', 'Catering Calculator']
  },
  {
    id: 'jacks-tailoring',
    title: "Jack's Tailoring & Dry Cleaning",
    tagline: 'Cambridge Landmark Alterations & Bespoke Tailoring',
    category: 'Local Business',
    categoryType: 'business',
    featured: false,
    image: './projects/jacks-tailoring.jpg',
    liveUrl: 'https://behlv10.github.io/jacks-tailoring/',
    githubUrl: 'https://github.com/BehlV10/jacks-tailoring',
    description:
      'A clean, responsive single-page experience for Jack\'s Tailoring & Dry Cleaning in Porter Square / Cambridge, MA (trusted since 1980). Features transparent price guides, emergency rush alteration turnaround requests, and garment care instructions.',
    impact: [
      'Interactive alteration pricing calculator across suits, dresses, denim, and formal wear',
      'Express same-day & 24-hour rush service inquiry form',
      'Local Cambridge parking & Porter Square Red Line transit directions',
      'Trust badges with 40+ years of university and neighborhood reviews'
    ],
    tech: ['Tailwind CSS', 'JavaScript', 'Price Calculator', 'Responsive UX']
  },
  {
    id: 'cirque-du-souffle',
    title: 'Cirque du Soufflé',
    tagline: 'French Haute Pâtisserie & Theatrical Dessert Catering',
    category: 'Bakery & Dining',
    categoryType: 'food',
    featured: false,
    image: './projects/cirque-du-souffle.jpg',
    liveUrl: 'https://behlv10.github.io/cirque-du-souffle/',
    githubUrl: 'https://github.com/BehlV10/cirque-du-souffle',
    description:
      'A theatrical, high-performance web experience for Cirque du Soufflé by Chef T Lawrence-Simon (Somerville, MA). Merges French patisserie with circus artistry, featuring custom soufflé bookings, private tasting flights, and event catering.',
    impact: [
      'Interactive dessert flight consultation & private tasting booking system',
      'Theatrical dark-mode design with signature soufflé & entremet portfolio',
      'Event dessert catering estimator for weddings and galas',
      'Zero-latency Next.js static architecture'
    ],
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Event Booking', 'Artisanal Catering']
  },
  {
    id: 'nyc-events',
    title: 'NYC Events Live Aggregator',
    tagline: 'Real-Time 5-Borough Event Calendar & OpenStreetMap Discovery',
    category: 'Live Web App',
    categoryType: 'app',
    featured: true,
    image: './projects/nyc-skyline.svg',
    liveUrl: 'https://behlv10.github.io/nyc_events/',
    githubUrl: 'https://github.com/BehlV10/nyc_events',
    description:
      'A real-time, ultra-fast aggregator and mobile-friendly calendar of concerts, nightlife, theater, comedy, markets, and cultural happenings across all 5 NYC boroughs. Aggregates data across 149+ venues and community feeds.',
    impact: [
      '149+ live NYC venues & community feeds aggregated automatically',
      'Interactive OpenStreetMap live dark-theme map with venue pins & jump navigation',
      '2-Hour real-time epoch cutoff filter so users only see happening events',
      'Live commercial ticket price comparison engine (StubHub & Gametime)',
      'Automated 30-minute GitHub Actions scraper pipeline with zero-dependency static builds'
    ],
    tech: ['Python Scrapers', 'OpenStreetMap / Leaflet', 'GitHub Actions CI/CD', 'REST APIs', 'GeoJSON']
  },
  {
    id: 'boston-events',
    title: 'Wicked Boston Events',
    tagline: 'Curated Nightlife & Concert Discovery Platform for Boston',
    category: 'Live Web App',
    categoryType: 'app',
    featured: false,
    image: './projects/boston-events.jpg',
    liveUrl: 'http://www.wickedbostonevents.com/',
    fallbackLiveUrl: 'https://behlv10.github.io/boston_events/',
    githubUrl: 'https://github.com/BehlV10/boston_events',
    description:
      'A curated live discovery calendar and scraper engine tracking nightlife, live music, comedy, and cultural gatherings throughout the Greater Boston area.',
    impact: [
      'Automated web scraping feeds indexing Boston concert halls and indie clubs',
      'High-performance static exporter with calendar export (.ics / Google Calendar)',
      'Optimized lightweight CSS grid with instant search & multi-category filtering'
    ],
    tech: ['Python', 'Web Scraping', 'HTML5/CSS3', 'Google Calendar Sync', 'Static Site Generator']
  },
  {
    id: 'draculas-masquerade',
    title: "Dracula's Masquerade Companion",
    tagline: 'Real-Time Interactive Host Utility for Board Gaming Sessions',
    category: 'Game Utility',
    categoryType: 'app',
    featured: false,
    image: './projects/dracula-icon.svg',
    liveUrl: 'https://behlv10.github.io/DraculasMasqueradeCompanionApp/',
    githubUrl: 'https://github.com/BehlV10/DraculasMasqueradeCompanionApp',
    description:
      'A dedicated digital companion application built for game masters and players of Dracula\'s Masquerade. Eliminates manual record-keeping by tracking hidden roles, whisper actions, accusation history, and turn timers.',
    impact: [
      'Dynamic state management for multi-player deduction rounds',
      'Zero-latency offline-first web application',
      'Atmospheric dark-mode UI with custom SVG iconography'
    ],
    tech: ['React', 'JavaScript (ESNext)', 'Vite', 'State Management', 'SVG Design']
  },
  {
    id: 'price-comparison-app',
    title: 'Smart Price Comparison Engine',
    tagline: 'Real-Time Multi-Vendor Ticket & Retail Arbitrage Scanner',
    category: 'Open Source Tool',
    categoryType: 'tool',
    featured: false,
    githubUrl: 'https://github.com/BehlV10/price_comparison_app',
    description:
      'An automated arbitrage tool that tracks and compares ticket and retail prices across secondary marketplaces, notifying users when prices drop below historic thresholds.',
    impact: [
      'Automated price scraping across multiple ticket exchanges and vendors',
      'Historical trend tracking and price discrepancy anomaly detection',
      'Clean modular architecture designed for high concurrency'
    ],
    tech: ['Python', 'Asyncio Scrapers', 'Data Analytics', 'JSON Schemas']
  }
];

export const serviceFeatures = [
  {
    icon: 'Palette',
    title: 'Custom-Coded Design',
    desc: 'No generic, bloated WordPress templates. Every site is tailored to your brand, colors, and content for a sleek, modern look.'
  },
  {
    icon: 'Zap',
    title: 'Blazing Fast & Mobile First',
    desc: 'Optimized for speed, high Google Lighthouse scores, and responsive layouts that look stunning on iPhone, Android, and laptops.'
  },
  {
    icon: 'Globe',
    title: 'Managed Hosting & Domain Setup',
    desc: 'Includes super-fast global CDN hosting, SSL security certificates (HTTPS), and seamless setup with your custom domain.'
  },
  {
    icon: 'RefreshCw',
    title: 'Monthly Updates Included',
    desc: 'Need new photos, updated prices, menu changes, or new announcements? Just send a message and changes are pushed within 24-48 hours.'
  },
  {
    icon: 'CreditCard',
    title: 'Stripe Payments & Bookings',
    desc: 'Easily collect client payments, sell tickets, or integrate booking links directly on your website with 0 hassle.'
  },
  {
    icon: 'ShieldCheck',
    title: 'Zero Contracts — Cancel Anytime',
    desc: 'Total flexibility. No lock-in contracts or $2,000 upfront fees. Just straightforward $25/month service with 1-click cancellation.'
  }
];

export const faqItems = [
  {
    q: 'How does the $25/month website service work?',
    a: 'You sign up for the $25/month subscription through Stripe. We hop on a brief call or you fill out our project intake form with your vision, copy, and images. I build your custom website from scratch, set up your domain and hosting, and have it live in just a few days. As long as your subscription is active, your hosting, maintenance, and regular content updates are 100% taken care of.'
  },
  {
    q: 'What kind of updates can I request each month?',
    a: 'Everything from updating photos, changing text and menus, adding new blog or event listings, updating business hours, adding new links, or tweaking colors and styling. Just email or text me your update and I handle the rest.'
  },
  {
    q: 'Are there any hidden fees or setup charges?',
    a: 'None! It is simply $25 per month. You only need your own domain name (usually $10-$12/year on Cloudflare, Namecheap, or Google Domains), and I take care of hosting, SSL certificate, coding, and continuous maintenance.'
  },
  {
    q: 'Can I cancel my subscription if I no longer need it?',
    a: 'Yes, absolutely. You can cancel at any time directly through your Stripe Customer Billing Portal with zero penalty or fees.'
  },
  {
    q: 'What if I need an e-commerce store or complex custom web application?',
    a: 'The $25/month plan is optimized for high-performance business sites, personal portfolios, event showcases, restaurant menus, and lead-generation pages. If you need a large custom full-stack web application with complex databases, we can discuss a custom setup!'
  }
];
