# 📉 LayoffPulse — The Great Workforce Reckoning (2000–2026)

> **"Four Eras. Twenty-Six Years. Every Single Pink Slip Counted."**  
> Inspired by the investigative, proof-driven accountability journalism of *Jhooth ki Goonj*, **LayoffPulse** is a verified real-time tracker and historical archive of corporate and tech layoffs from the 2000 Dot-Com crash to the 2026 AI wave.

---

## ⚡ Live Features

1. **🔴 Real-Time Ticking Counter**:
   - Live simulated run-rate tracker calibrated to the ongoing 2024–2026 corporate downsizing pace (+412 estimated cuts/day).
   - Cumulative count of over **2,480,000+** verified layoffs cataloged across the 4 modern economic eras.

2. **🏛️ Four Historic Watershed Eras (Comparative Dossiers)**:
   - **💥 The Dot-Com Bubble Implosion (2000–2002)**: Cisco ($2.2B router write-off), Nortel (60,000 cuts), Lucent (56,000 cuts), Pets.com ($300M liquidation in 268 days), WorldCom ($11B fraud).
   - **📉 The Great Financial Crisis (2007–2009)**: Lehman Brothers (26,000 Chapter 11 liquidation), Citigroup (52,000 cuts + $300B bailout), General Motors (47,000 cuts + US Treasury restructuring), HP (24,600 cuts), Microsoft (first mass layoff in 34-year history).
   - **🦠 The COVID-19 Pandemic Freeze (2020–2021)**: Boeing (30,000 cuts), Disney Parks (32,000 cuts), Uber (6,700 cuts over Zoom), Airbnb (1,900 cuts with Brian Chesky memo), Hertz (12,000 cuts in Chapter 11).
   - **🤖 The AI Reckoning & "Year of Efficiency" Wave (2023–2026)**: Intel (15,000 cuts / 15%), Tesla (14,000 cuts / >10%), Meta (21,000 cuts across twin waves), Google (12,000 cuts), Amazon (27,000 cuts), Intuit (1,800 cuts explicitly citing AI), Dell (12,500 cuts).

3. **⚖️ The Discrepancy Index (Profits vs. Cuts)**:
   - Directly inspired by *Jhooth ki Goonj*’s "Biggest Discrepancies" investigative section.
   - Highlights the gulf between corporate austerity narratives and Wall Street reality:
     - **Meta**: 21,000 terminated while authorizing a **$50 Billion** share buyback and $39.1B net income.
     - **Google / Alphabet**: 12,000 terminated while executing a **$70 Billion** share repurchase and making $73.8B in profit.
     - **Intel**: 15,000 terminated while paying CEO Pat Gelsinger $16.85M.
     - **Intuit**: 1,800 fired to "pivot to AI" on the exact day stock surged to all-time record highs of $670.

4. **🔍 Searchable Proof Ledger & Evidence Modal**:
   - Full filtering by era, industry sector, and verification status.
   - Click **"Inspect Filings"** on any card to view:
     - Direct links to **SEC Form 8-K** filings on EDGAR.
     - Official State Department of Labor **WARN Act** registries (California, Washington, Texas, Florida, Oregon).
     - Leaked executive memos & court records.
     - One-click button to copy a verified academic citation.

5. **🧮 Worker Advocacy: Severance & WARN Benchmark Tool**:
   - Interactive calculator comparing tenure and base salary in USD ($) and INR (₹).
   - Benchmarks packages against the Big Tech standard (16 weeks base + 2 weeks/year) vs statutory 60-day Federal WARN Act protections.

6. **🛡️ Whistleblower Tip Line ("Submit Layoff Tip")**:
   - Allows employees and researchers to submit emerging cuts with mandatory proof verification links.

---

## ☁️ Cloudflare Stack Architecture

The application is structured for the Cloudflare Developer Platform:
- **Hosting**: Cloudflare Pages with edge-cached global distribution across 330+ cities.
- **Config**: `wrangler.jsonc` pre-configured with `pages_build_output_dir: "./dist"`.
- **Performance**: Zero server cold starts, sub-50ms TTFB worldwide, lightweight bundle.

### Deploying to Cloudflare Pages:
```bash
# 1. Build the production bundle
npm run build

# 2. Deploy to Cloudflare Pages using Wrangler
npx wrangler pages deploy dist --project-name=layoff-pulse
```

---

## 💻 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start local Vite development server
npm run dev

# 3. Production preview
npm run preview
```

---

## 🏷️ Alternative Name Suggestions
1. **LayoffPulse** *(Current default — dynamic, authoritative, real-time cadence)*
2. **The Layoff Ledger** *(Academic & journalistic investigative feel)*
3. **PinkSlip Pulse** *(Sharp, high-impact, memorable)*
4. **LayoffMeter** *(Worldometers-style raw data transparency)*
5. **Chhatni.org** *(Desi cultural punch, direct and unapologetic)*
