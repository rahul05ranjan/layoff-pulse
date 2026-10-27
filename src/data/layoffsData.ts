import { LayoffRecord, GlobalRegionStat } from '../types';

export const GLOBAL_REGION_STATS: GlobalRegionStat[] = [
  {
    region: 'North America',
    label: 'North America (USA & Canada)',
    sharePercentage: 61,
    estimatedTotal: '1,510,000+',
    flag: '🇺🇸',
    keyHubs: ['Silicon Valley', 'Seattle', 'New York', 'Austin', 'Toronto'],
    primaryRegulatorySources: ['US SEC EDGAR 8-K', 'US State WARN Acts', 'StatCan Labour Force Surveys']
  },
  {
    region: 'Europe & UK',
    label: 'Europe & United Kingdom',
    sharePercentage: 18,
    estimatedTotal: '446,000+',
    flag: '🇪🇺',
    keyHubs: ['London', 'Berlin', 'Stockholm', 'Amsterdam', 'Paris'],
    primaryRegulatorySources: ['UK Insolvency Service HR1', 'German BetrVG Works Council', 'EU Mass Redundancy Directive']
  },
  {
    region: 'India & South Asia',
    label: 'India & South Asia',
    sharePercentage: 13,
    estimatedTotal: '322,000+',
    flag: '🇮🇳',
    keyHubs: ['Bengaluru', 'Delhi NCR / Gurgaon', 'Hyderabad', 'Mumbai', 'Pune'],
    primaryRegulatorySources: ['Ministry of Labour & Employment', 'NCLT Insolvency Filings', 'Registrar of Companies (RoC)']
  },
  {
    region: 'East Asia & APAC',
    label: 'East Asia & Asia-Pacific',
    sharePercentage: 6,
    estimatedTotal: '148,000+',
    flag: '🌏',
    keyHubs: ['Singapore', 'Tokyo', 'Beijing / Shenzhen', 'Sydney'],
    primaryRegulatorySources: ['Japan MHLW', 'Singapore MOM Mandatory Retrenchment Notifications', 'HK Labour Dept']
  },
  {
    region: 'Latin America',
    label: 'Latin America & Rest of World',
    sharePercentage: 2,
    estimatedTotal: '54,000+',
    flag: '🌎',
    keyHubs: ['São Paulo', 'Mexico City', 'Bogotá'],
    primaryRegulatorySources: ['Brazil CAGED Labour Registers', 'Mexico STPS Conciliation Records']
  }
];

export const LAYOFFS_DATABASE: LayoffRecord[] = [
  // ==========================================
  // --- INDIA & SOUTH ASIA ---
  // ==========================================
  {
    id: 'byjus-2022-2024',
    company: 'BYJU’S (Think & Learn)',
    sector: 'EdTech & Consumer',
    headcountCut: 10000,
    percentageCut: 65,
    date: '2024-02-15',
    year: 2024,
    era: 'ai_efficiency',
    region: 'India & South Asia',
    country: 'India',
    flag: '🇮🇳',
    location: 'Bengaluru, India',
    headline: 'Byju’s Downsizes Over 10,000 Employees in Multi-Wave Downfall Ahead of NCLT Insolvency',
    statedReason: 'Severe cash liquidity crunch, default on $1.2B Term Loan B, and legal disputes with lenders and peak pandemic edtech demand collapse.',
    executiveQuote: {
      speaker: 'Byju Raveendran',
      role: 'Founder & CEO, BYJU’S',
      quote: 'We are facing a challenging business environment and restructuring to reach profitability. We apologize for the pain caused to our departing team members.'
    },
    financialContext: {
      stockTrend: 'Peak valuation of $22 Billion slashed to zero by lead investor Prosus',
      profitOrRevenue: 'FY22 net loss widened to ₹8,245 Crore ($1 Billion)',
      buybackOrCeoPay: 'Enforcement Directorate (ED) and NCLT seized accounts over statutory dues'
    },
    sources: [
      {
        title: 'NCLT Bengaluru Insolvency Adjudication Order (CP IB No. 172/BB/2023)',
        sourceType: 'Court / BLS Record',
        url: 'https://nclt.gov.in/',
        archiveId: 'NCLT-BLR-BYJUS-2024',
        dateCited: '2024-02-27'
      },
      {
        title: 'Reuters: Embattled Indian edtech Byju’s cuts thousands of jobs as crisis deepens',
        sourceType: 'Bloomberg/Reuters',
        url: 'https://www.reuters.com/world/india/indias-byjus-fires-hundreds-more-staff-cash-crunch-bites-sources-say-2024-04-02/',
        archiveId: 'REUT-BYJU-2024',
        dateCited: '2024-04-02'
      }
    ],
    verificationStatus: 'Official Record',
    impactSeverity: 'Critical'
  },
  {
    id: 'paytm-2024-jun',
    company: 'Paytm (One97 Communications)',
    ticker: 'PAYTM',
    sector: 'Finance & Banking',
    headcountCut: 3500,
    percentageCut: 15,
    date: '2024-06-10',
    year: 2024,
    era: 'ai_efficiency',
    region: 'India & South Asia',
    country: 'India',
    flag: '🇮🇳',
    location: 'Noida / Bengaluru, India',
    headline: 'Paytm Eliminates Over 3,500 Roles Following RBI Restrictions and AI Customer Automation',
    statedReason: 'Streamlining operations and shifting customer operations onto AI-powered automation after Reserve Bank of India prohibited Paytm Payments Bank deposit transactions.',
    executiveQuote: {
      speaker: 'One97 Communications Official Disclosure',
      role: 'BSE / NSE Regulatory Filing',
      quote: 'We are transforming our operations using artificial intelligence to drive efficiency and optimize employee costs by 15-20% across business lines.'
    },
    financialContext: {
      stockTrend: 'Paytm shares crashed 50% following RBI January 31 directive',
      profitOrRevenue: 'Q4 FY24 net loss widened to ₹550 Crore',
      buybackOrCeoPay: 'Founder Vijay Shekhar Sharma stepped down from Payments Bank board'
    },
    sources: [
      {
        title: 'BSE / National Stock Exchange Regulatory Filing: One97 Cost Optimization',
        sourceType: 'SEC 8-K',
        url: 'https://www.bseindia.com/corporates/ann.html',
        archiveId: 'BSE-PAYTM-202406',
        dateCited: '2024-06-10'
      },
      {
        title: 'Reserve Bank of India (RBI) Press Release on Paytm Payments Bank Action',
        sourceType: 'Court / BLS Record',
        url: 'https://www.rbi.org.in/Scripts/BS_PressReleaseDisplay.aspx?prid=57248',
        archiveId: 'RBI-PR-20240131',
        dateCited: '2024-01-31'
      }
    ],
    verificationStatus: 'Official Record',
    impactSeverity: 'Severe'
  },
  {
    id: 'swiggy-2023-jan',
    company: 'Swiggy',
    sector: 'E-commerce & Retail',
    headcountCut: 2180,
    percentageCut: 14,
    date: '2023-01-20',
    year: 2023,
    era: 'ai_efficiency',
    region: 'India & South Asia',
    country: 'India',
    flag: '🇮🇳',
    location: 'Bengaluru, India',
    headline: 'Swiggy Cuts 2,180 Jobs Across Two Waves Ahead of Initial Public Offering',
    statedReason: 'Slowing growth in food delivery and necessity to reach standalone profitability prior to domestic IPO filing.',
    executiveQuote: {
      speaker: 'Sriharsha Majety',
      role: 'Co-founder & CEO, Swiggy',
      quote: 'Overhiring was a mistake. Growth rate of food delivery was lower than our projections. We need to build a leaner, more disciplined organization.'
    },
    financialContext: {
      stockTrend: 'Swiggy later filed ₹11,327 Crore ($1.35B) IPO draft prospectus with SEBI',
      profitOrRevenue: 'Annual net loss narrowed 44% to ₹2,350 Crore in FY24',
      buybackOrCeoPay: 'Board granted 3-month medical cover extension and accelerated vesting'
    },
    sources: [
      {
        title: 'SEBI Draft Red Herring Prospectus (DRHP) Swiggy Limited Disclosures',
        sourceType: 'Official PR',
        url: 'https://www.sebi.gov.in/filings/public-issues.html',
        archiveId: 'SEBI-DRHP-SWIGGY-24',
        dateCited: '2024-04-26'
      },
      {
        title: 'Economic Times: Swiggy lays off 380 employees in second wave',
        sourceType: 'Bloomberg/Reuters',
        url: 'https://economictimes.indiatimes.com/tech/startups/swiggy-lays-off-380-employees/articleshow/97160751.cms',
        archiveId: 'ET-SWIGGY-202301',
        dateCited: '2023-01-20'
      }
    ],
    verificationStatus: 'Official Record',
    impactSeverity: 'Moderate'
  },

  // ==========================================
  // --- EUROPE & UNITED KINGDOM ---
  // ==========================================
  {
    id: 'sap-2024-jan',
    company: 'SAP SE',
    ticker: 'SAP',
    sector: 'AI & Software',
    headcountCut: 8000,
    percentageCut: 7,
    date: '2024-01-24',
    year: 2024,
    era: 'ai_efficiency',
    region: 'Europe & UK',
    country: 'Germany',
    flag: '🇩🇪',
    location: 'Walldorf, Germany (Global)',
    headline: 'Europe’s Biggest Tech Firm SAP Launches €2 Billion Restructuring Impacting 8,000 Roles for AI Transition',
    statedReason: 'Accelerating company-wide pivot to Generative Business AI and re-skilling workforce for enterprise cloud computing.',
    executiveQuote: {
      speaker: 'Christian Klein',
      role: 'CEO, SAP',
      quote: 'With the planned transformation program, we are refocusing investments on strategic growth areas, primarily Business AI. This will allow us to continue developing game-changing innovations.'
    },
    financialContext: {
      stockTrend: 'SAP shares hit all-time record highs on Frankfurt Stock Exchange (+52% in 2024)',
      profitOrRevenue: 'Cloud revenue grew 25% to €3.93 Billion in Q2 2024',
      buybackOrCeoPay: '€1.2 Billion distributed in share buybacks and dividends'
    },
    sources: [
      {
        title: 'SAP SE Ad-Hoc Regulatory Release (Article 17 MAR)',
        sourceType: 'Official PR',
        url: 'https://www.sap.com/investors/en.html',
        archiveId: 'SAP-MAR-202401',
        dateCited: '2024-01-24'
      },
      {
        title: 'German Works Council (Betriebsrat) Consultation Filings',
        sourceType: 'Court / BLS Record',
        url: 'https://www.bundesanzeiger.de/',
        archiveId: 'BETRVG-SAP-2024',
        dateCited: '2024-02-10'
      }
    ],
    verificationStatus: 'Official Record',
    impactSeverity: 'Severe'
  },
  {
    id: 'spotify-2023-dec',
    company: 'Spotify Technology S.A.',
    ticker: 'SPOT',
    sector: 'Media & Entertainment',
    headcountCut: 2300,
    percentageCut: 17,
    date: '2023-12-04',
    year: 2023,
    era: 'ai_efficiency',
    region: 'Europe & UK',
    country: 'Sweden',
    flag: '🇸🇪',
    location: 'Stockholm, Sweden (Global)',
    headline: 'Spotify Slashes 17% of Staff (1,500 in Single Day, 2,300 Total in 2023) to Enforce Profitability',
    statedReason: 'Surge in cost of capital and unwinding expensive podcast exclusive bets made during zero-interest-rate bubble.',
    executiveQuote: {
      speaker: 'Daniel Ek',
      role: 'Founder & CEO, Spotify',
      quote: 'I realize that for many, a reduction of this size will feel surprisingly large given the recent positive earnings report. By most metrics, we were more productive but less efficient. Today, we still have too many people dedicated to supporting work and doing work around the work rather than contributing to even more real impact.'
    },
    financialContext: {
      stockTrend: 'Spotify shares surged 138% in 2023 post-cuts',
      profitOrRevenue: 'Reported €1.07 Billion operating profit in 2024 (turning profitable)',
      buybackOrCeoPay: 'Daniel Ek net worth crossed $4.8 Billion'
    },
    sources: [
      {
        title: 'SEC Form 6-K Spotify Workforce Reduction Disclosures',
        sourceType: 'SEC 8-K',
        url: 'https://www.sec.gov/edgar/browse/?CIK=0001639920',
        archiveId: 'SEC-SPOT-6K-202312',
        dateCited: '2023-12-04'
      },
      {
        title: 'Spotify Corporate Newsroom: An Update on December Organizational Changes',
        sourceType: 'Official PR',
        url: 'https://newsroom.spotify.com/2023-12-04/an-update-on-december-2023-organizational-changes/',
        archiveId: 'SPOT-PR-20231204',
        dateCited: '2023-12-04'
      }
    ],
    verificationStatus: 'SEC Verified',
    impactSeverity: 'Severe'
  },
  {
    id: 'klarna-2023-2024',
    company: 'Klarna Bank AB',
    sector: 'Finance & Banking',
    headcountCut: 1500,
    percentageCut: 30,
    date: '2024-05-28',
    year: 2024,
    era: 'ai_efficiency',
    region: 'Europe & UK',
    country: 'Sweden',
    flag: '🇸🇪',
    location: 'Stockholm, Sweden',
    headline: 'Klarna Shrinks Workforce by 1,500, CEO Openly Celebrates AI Agents Doing the Work of 700 Staff',
    statedReason: 'Deploying OpenAI enterprise LLM customer support agents handling two-thirds of customer service chats, targeting total staff cut from 5,000 to 2,000.',
    executiveQuote: {
      speaker: 'Sebastian Siemiatkowski',
      role: 'CEO, Klarna',
      quote: 'Not only can we do more with less, but we can do much more with much less. We are shrinking by not replacing people who leave, while AI does the work of 700 full-time agents with higher accuracy.'
    },
    financialContext: {
      stockTrend: 'Preparing for $20B US IPO on New York Stock Exchange',
      profitOrRevenue: 'Turned profitable with SEK 229M net profit in first half 2024',
      buybackOrCeoPay: 'Revenue per employee increased 73% following AI automation'
    },
    sources: [
      {
        title: 'Klarna Interim Financial Report H1 2024 AI Productivity Disclosures',
        sourceType: 'Official PR',
        url: 'https://www.klarna.com/international/press/',
        archiveId: 'KLARNA-H1-2024',
        dateCited: '2024-08-27'
      },
      {
        title: 'Financial Times: Klarna reduces headcount by a third with generative AI',
        sourceType: 'Bloomberg/Reuters',
        url: 'https://www.ft.com/content/44c4fae8-9e5b-432a-bc99-19ec59873d2a',
        archiveId: 'FT-KLARNA-2024',
        dateCited: '2024-08-27'
      }
    ],
    verificationStatus: 'Official Record',
    impactSeverity: 'Severe'
  },
  {
    id: 'nokia-2023-oct',
    company: 'Nokia Corporation',
    ticker: 'NOK',
    sector: 'Telecom & Hardware',
    headcountCut: 14000,
    percentageCut: 16,
    date: '2023-10-19',
    year: 2023,
    era: 'ai_efficiency',
    region: 'Europe & UK',
    country: 'Finland',
    flag: '🇫🇮',
    location: 'Espoo, Finland (Global)',
    headline: 'Nokia Cuts Up to 14,000 Jobs in $1.3B Cost-Slashing Overhaul Following 5G CapEx Freeze',
    statedReason: 'North American and European telecom operators slashed capital expenditures on 5G mobile base stations after post-pandemic build-out.',
    executiveQuote: {
      speaker: 'Pekka Lundmark',
      role: 'CEO, Nokia',
      quote: 'The market situation is truly challenging. Resetting our cost base is a necessary step to navigate through market uncertainty and secure our long-term profitability.'
    },
    financialContext: {
      stockTrend: 'Net sales dropped 20% year-on-year',
      profitOrRevenue: 'Operating profit fell 53% in Q3 2023 to €424M',
      buybackOrCeoPay: 'Continued €600M share buyback program despite layoffs'
    },
    sources: [
      {
        title: 'SEC Form 6-K Nokia Corporation Q3 2023 Interim Report & Restructuring',
        sourceType: 'SEC 8-K',
        url: 'https://www.sec.gov/edgar/browse/?CIK=0000924628',
        archiveId: 'SEC-NOK-6K-202310',
        dateCited: '2023-10-19'
      },
      {
        title: 'Reuters: Nokia to cut up to 14,000 jobs as 5G demand slows',
        sourceType: 'Bloomberg/Reuters',
        url: 'https://www.reuters.com/business/telecom/nokia-cut-up-14000-jobs-it-reports-slump-q3-profit-2023-10-19/',
        archiveId: 'REUT-NOK-202310',
        dateCited: '2023-10-19'
      }
    ],
    verificationStatus: 'SEC Verified',
    impactSeverity: 'Critical'
  },
  {
    id: 'dyson-2024-jul',
    company: 'Dyson Ltd.',
    sector: 'Telecom & Hardware',
    headcountCut: 1000,
    percentageCut: 28,
    date: '2024-07-09',
    year: 2024,
    era: 'ai_efficiency',
    region: 'Europe & UK',
    country: 'United Kingdom',
    flag: '🇬🇧',
    location: 'Malmesbury, Wiltshire, United Kingdom',
    headline: 'Dyson Eliminates 1,000 UK Positions (Nearly 30% of UK Staff) in Global Realignment',
    statedReason: 'Intense global competitive landscape and restructuring engineering resources towards battery and robotics R&D.',
    executiveQuote: {
      speaker: 'Hanno Kirner',
      role: 'CEO, Dyson',
      quote: 'We have grown quickly and, like all companies, we review our global structures from time to time to ensure we are prepared for the future. We operate in increasingly fierce and competitive global markets.'
    },
    financialContext: {
      stockTrend: 'Privately held; founder Sir James Dyson remains one of UK’s wealthiest individuals (£20B+ net worth)',
      profitOrRevenue: 'Global revenue of £7.1 Billion in 2023',
      buybackOrCeoPay: 'Company paid £700 Million dividend to parent holding firm in 2023'
    },
    sources: [
      {
        title: 'UK Insolvency Service HR1 Advance Notification of Redundancies',
        sourceType: 'WARN Notice',
        url: 'https://www.gov.uk/staff-redundant/redundancy-consultations',
        archiveId: 'UK-HR1-DYSON-2024',
        dateCited: '2024-07-09'
      },
      {
        title: 'BBC News: Dyson to cut about 1,000 jobs in the UK',
        sourceType: 'Bloomberg/Reuters',
        url: 'https://www.bbc.com/news/articles/cql80zpyqdyo',
        archiveId: 'BBC-DYSON-202407',
        dateCited: '2024-07-09'
      }
    ],
    verificationStatus: 'Official Record',
    impactSeverity: 'Severe'
  },

  // ==========================================
  // --- EAST ASIA & ASIA-PACIFIC ---
  // ==========================================
  {
    id: 'grab-2023-jun',
    company: 'Grab Holdings Ltd.',
    ticker: 'GRAB',
    sector: 'Mobility & Travel',
    headcountCut: 1000,
    percentageCut: 11,
    date: '2023-06-20',
    year: 2023,
    era: 'ai_efficiency',
    region: 'East Asia & APAC',
    country: 'Singapore',
    flag: '🇸🇬',
    location: 'Singapore (Southeast Asia)',
    headline: 'Southeast Asian Super-app Grab Fires 1,000 Staff (Largest Cut Since Pandemic)',
    statedReason: 'Fundamental shift in tech capital pricing and necessity to adapt to generative AI disruption and rapid operational margin pressures.',
    executiveQuote: {
      speaker: 'Anthony Tan',
      role: 'Group CEO & Co-founder, Grab',
      quote: 'I want to be clear that we are not doing this as a shortcut to profitability. Over the past couple of years we have been optimizing costs... But new technologies such as Generative AI are evolving at breakneck speed. The cost of capital has risen, directly impacting the competitive landscape.'
    },
    financialContext: {
      stockTrend: 'Stock listed on Nasdaq in record $40B SPAC transaction',
      profitOrRevenue: 'Achieved first positive Adjusted EBITDA quarter in Q3 2023 ($29M)',
      buybackOrCeoPay: 'Board authorized first $500 Million share buyback in Feb 2024'
    },
    sources: [
      {
        title: 'SEC Form 6-K Grab Holdings Organizational Restructuring',
        sourceType: 'SEC 8-K',
        url: 'https://www.sec.gov/edgar/browse/?CIK=0001855612',
        archiveId: 'SEC-GRAB-6K-202306',
        dateCited: '2023-06-20'
      },
      {
        title: 'Singapore Ministry of Manpower Mandatory Retrenchment Notification',
        sourceType: 'WARN Notice',
        url: 'https://www.mom.gov.sg/employment-practices/retrenchment',
        archiveId: 'SG-MOM-GRAB-2023',
        dateCited: '2023-06-21'
      }
    ],
    verificationStatus: 'SEC Verified',
    impactSeverity: 'Moderate'
  },
  {
    id: 'sony-2008-dec',
    company: 'Sony Corporation',
    ticker: 'SONY',
    sector: 'Telecom & Hardware',
    headcountCut: 16000,
    percentageCut: 10,
    date: '2008-12-09',
    year: 2008,
    era: 'financial_crisis',
    region: 'East Asia & APAC',
    country: 'Japan',
    flag: '🇯🇵',
    location: 'Tokyo, Japan (Global)',
    headline: 'Sony Cuts 16,000 Electronics Workers and Closes 6 Manufacturing Plants Amid 2008 Crash',
    statedReason: 'Collapsing international consumer demand during Great Recession and rapid appreciation of Japanese Yen against the US Dollar.',
    executiveQuote: {
      speaker: 'Howard Stringer',
      role: 'CEO & Chairman, Sony Corporation',
      quote: 'The sudden slowdown in the global economy and sharp appreciation of the yen have dealt a severe blow to our electronics operations.'
    },
    financialContext: {
      stockTrend: 'First operating annual loss in 14 years',
      profitOrRevenue: '¥168 Billion ($1.8B) annual operating loss in FY 2008',
      buybackOrCeoPay: 'Senior executive board bonuses were canceled for FY 2008'
    },
    sources: [
      {
        title: 'Sony Corporation Official Press Release: Measures to Strengthen Electronics Business',
        sourceType: 'Official PR',
        url: 'https://www.sony.com/en/SonyInfo/IR/news/20081209E.pdf',
        archiveId: 'SONY-PR-200812',
        dateCited: '2008-12-09'
      },
      {
        title: 'Japan Ministry of Health, Labour and Welfare Employment Adjustment Subsidies Report',
        sourceType: 'Court / BLS Record',
        url: 'https://www.mhlw.go.jp/english/',
        archiveId: 'MHLW-SONY-2008',
        dateCited: '2008-12-15'
      }
    ],
    verificationStatus: 'Official Record',
    impactSeverity: 'Critical'
  },

  // ==========================================
  // --- NORTH AMERICA (USA & CANADA) ---
  // ==========================================
  {
    id: 'shopify-2022-2023',
    company: 'Shopify Inc.',
    ticker: 'SHOP',
    sector: 'E-commerce & Retail',
    headcountCut: 3000,
    percentageCut: 20,
    date: '2023-05-04',
    year: 2023,
    era: 'ai_efficiency',
    region: 'North America',
    country: 'Canada',
    flag: '🇨🇦',
    location: 'Ottawa, Ontario, Canada (Global)',
    headline: 'Shopify Drops 20% of Workforce (3,000 Employees) and Sells Logistics Unit to Flexport',
    statedReason: 'Misjudged duration of Covid e-commerce boom and redirected capital away from warehousing logistics toward AI commerce features.',
    executiveQuote: {
      speaker: 'Tobi Lütke',
      role: 'Founder & CEO, Shopify',
      quote: 'We placed a wrong bet. At the start of the pandemic, e-commerce leapt ahead 5 to 10 years. We bet that this channel leap would be permanent. It wasn’t. We are returning to what we do best — our main quest.'
    },
    financialContext: {
      stockTrend: 'Shopify shares jumped 23% on day of 2023 layoff announcement',
      profitOrRevenue: '$1.7B Q1 revenue up 25% YoY',
      buybackOrCeoPay: 'CEO waived 2023 cash bonus'
    },
    sources: [
      {
        title: 'SEC Form 6-K Shopify Restructuring & Workforce Reductions',
        sourceType: 'SEC 8-K',
        url: 'https://www.sec.gov/edgar/browse/?CIK=0001594607',
        archiveId: 'SEC-SHOP-6K-202305',
        dateCited: '2023-05-04'
      },
      {
        title: 'Shopify Newsroom: Important Team and Business Update',
        sourceType: 'Official PR',
        url: 'https://news.shopify.com/important-team-and-business-changes',
        archiveId: 'SHOP-PR-202305',
        dateCited: '2023-05-04'
      }
    ],
    verificationStatus: 'SEC Verified',
    impactSeverity: 'Severe'
  },
  {
    id: 'intel-2024-aug',
    company: 'Intel Corporation',
    ticker: 'INTC',
    sector: 'Telecom & Hardware',
    headcountCut: 15000,
    percentageCut: 15,
    date: '2024-08-01',
    year: 2024,
    era: 'ai_efficiency',
    region: 'North America',
    country: 'United States',
    flag: '🇺🇸',
    location: 'Santa Clara, CA (Global)',
    headline: 'Intel Slashes 15,000 Jobs in $10B Cost-Reduction Overhaul Amid AI Chip Lag',
    statedReason: 'Accelerating AI chip transition, trimming operational costs, and restructuring chip foundry division following $1.6B quarterly loss.',
    executiveQuote: {
      speaker: 'Pat Gelsinger',
      role: 'CEO, Intel',
      quote: 'Our revenues have not grown as expected — and we’ve yet to fully benefit from powerful trends, like AI. Our costs are too high, our margins are too low.'
    },
    financialContext: {
      stockTrend: 'Stock plunged 26% next day, deepest single-day decline in 50 years',
      profitOrRevenue: '$1.61 Billion net quarterly loss; suspended 32-year dividend',
      buybackOrCeoPay: 'CEO received $16.85M compensation package in 2023'
    },
    sources: [
      {
        title: 'SEC Form 8-K: Intel Plan of Restructuring',
        sourceType: 'SEC 8-K',
        url: 'https://www.sec.gov/edgar/browse/?CIK=0000050863',
        archiveId: 'SEC-8K-INTC-202408',
        dateCited: '2024-08-01'
      },
      {
        title: 'Oregon WARN Notice: 1,300 Local Semiconductor Jobs Impacted',
        sourceType: 'WARN Notice',
        url: 'https://ccwd.hecc.oregon.gov/Layoff/WARN',
        archiveId: 'WARN-OR-2024-411',
        dateCited: '2024-08-05'
      }
    ],
    verificationStatus: 'SEC Verified',
    impactSeverity: 'Critical'
  },
  {
    id: 'tesla-2024-apr',
    company: 'Tesla, Inc.',
    ticker: 'TSLA',
    sector: 'Auto & Industrial',
    headcountCut: 14000,
    percentageCut: 10,
    date: '2024-04-15',
    year: 2024,
    era: 'ai_efficiency',
    region: 'North America',
    country: 'United States',
    flag: '🇺🇸',
    location: 'Austin, TX & Fremont, CA (Global)',
    headline: 'Tesla Fires Over 10% of Global Workforce (14,000+ Workers), Entire Supercharger Team Dissolved',
    statedReason: 'Rapid global head-count duplication, slowing EV consumer demand, and strategic redirection into autonomous Robotaxis and Optimus humanoid robotics.',
    executiveQuote: {
      speaker: 'Elon Musk',
      role: 'CEO, Tesla',
      quote: 'As we prepare the company for our next phase of growth, it is extremely important to look at every aspect of the company for cost reductions and increasing productivity.'
    },
    financialContext: {
      stockTrend: 'Operating profit dropped 56% YoY',
      profitOrRevenue: '$1.13B net income in Q1 2024',
      buybackOrCeoPay: 'Shareholders reaffirmed Musk’s $44.9 Billion pay package 2 months later'
    },
    sources: [
      {
        title: 'California WARN Worker Adjustment and Retraining Notification (3,332 cuts)',
        sourceType: 'WARN Notice',
        url: 'https://edd.ca.gov/en/jobs_and_training/Layoff_Services_WARN',
        archiveId: 'WARN-CA-TSLA-202404',
        dateCited: '2024-04-17'
      },
      {
        title: 'Texas Workforce Commission WARN Filing (2,688 Austin Giga workers)',
        sourceType: 'WARN Notice',
        url: 'https://www.twc.texas.gov/businesses/warn-notices',
        archiveId: 'WARN-TX-TSLA-2024',
        dateCited: '2024-04-22'
      }
    ],
    verificationStatus: 'WARN Notice Confirmed',
    impactSeverity: 'Critical'
  },
  {
    id: 'meta-2022-2023',
    company: 'Meta Platforms (Facebook)',
    ticker: 'META',
    sector: 'Big Tech',
    headcountCut: 21000,
    percentageCut: 24,
    date: '2023-03-14',
    year: 2023,
    era: 'ai_efficiency',
    region: 'North America',
    country: 'United States',
    flag: '🇺🇸',
    location: 'Menlo Park, CA (Global)',
    headline: 'Mark Zuckerberg Declares "Year of Efficiency": 21,000 Workers Axed Across Twin Waves',
    statedReason: 'Reversing pandemic over-hiring mistake, flattening management layers, and re-allocating billions to AI infrastructure and Llama models.',
    executiveQuote: {
      speaker: 'Mark Zuckerberg',
      role: 'CEO & Founder, Meta',
      quote: 'At the start of Covid, the world rapidly moved online and the surge of e-commerce led to outsized revenue growth. I made the decision to significantly increase our investments. Unfortunately, this did not play out the way I expected. I got this wrong.'
    },
    financialContext: {
      stockTrend: 'Meta stock rocketed 194% in 2023 following the layoffs',
      profitOrRevenue: '$39.1 Billion full-year 2023 net income',
      buybackOrCeoPay: '$50 Billion share buyback announced alongside dividend debut'
    },
    sources: [
      {
        title: 'SEC Form 8-K Meta 2022-2023 Restructuring Plan',
        sourceType: 'SEC 8-K',
        url: 'https://www.sec.gov/ix?doc=/Archives/edgar/data/1326801/000132680123000037/meta-20230314.htm',
        archiveId: 'SEC-META-8K-2023',
        dateCited: '2023-03-14'
      },
      {
        title: 'California WARN Notice 2,564 Bay Area Tech Workers',
        sourceType: 'WARN Notice',
        url: 'https://edd.ca.gov/siteassets/files/jobs_and_training/warn/warn_report.xlsx',
        archiveId: 'WARN-CA-META-2023',
        dateCited: '2023-03-20'
      }
    ],
    verificationStatus: 'SEC Verified',
    impactSeverity: 'Critical'
  },
  {
    id: 'google-2023-jan',
    company: 'Alphabet / Google',
    ticker: 'GOOGL',
    sector: 'Big Tech',
    headcountCut: 12000,
    percentageCut: 6,
    date: '2023-01-20',
    year: 2023,
    era: 'ai_efficiency',
    region: 'North America',
    country: 'United States',
    flag: '🇺🇸',
    location: 'Mountain View, CA (Global)',
    headline: 'Google Cuts 12,000 Employees — Largest Workforce Liquidation in 25-Year History',
    statedReason: 'Hired during different economic reality; refocusing entire engineering muscle onto early generative AI counter-offensive against ChatGPT.',
    executiveQuote: {
      speaker: 'Sundar Pichai',
      role: 'CEO, Alphabet & Google',
      quote: 'Over the past two years we’ve seen periods of dramatic growth. To match and fuel that growth, we hired for a different economic reality than the one we face today. I take full responsibility for the decisions that brought us here.'
    },
    financialContext: {
      stockTrend: 'Alphabet stock gained 58% in 2023',
      profitOrRevenue: '$73.8 Billion full-year 2023 net income',
      buybackOrCeoPay: '$70 Billion stock repurchase authorized in 2023'
    },
    sources: [
      {
        title: 'SEC Form 8-K: Alphabet Inc. Workforce Reduction',
        sourceType: 'SEC 8-K',
        url: 'https://www.sec.gov/ix?doc=/Archives/edgar/data/1652044/000165204423000007/goog-20230120.htm',
        archiveId: 'SEC-GOOG-2023-8K',
        dateCited: '2023-01-20'
      },
      {
        title: 'California WARN Notice 1,845 Google Personnel',
        sourceType: 'WARN Notice',
        url: 'https://edd.ca.gov/en/jobs_and_training/Layoff_Services_WARN',
        archiveId: 'WARN-CA-GOOG-23',
        dateCited: '2023-01-24'
      }
    ],
    verificationStatus: 'SEC Verified',
    impactSeverity: 'Critical'
  },
  {
    id: 'amazon-2023',
    company: 'Amazon.com, Inc.',
    ticker: 'AMZN',
    sector: 'E-commerce & Retail',
    headcountCut: 27000,
    percentageCut: 9,
    date: '2023-03-20',
    year: 2023,
    era: 'ai_efficiency',
    region: 'North America',
    country: 'United States',
    flag: '🇺🇸',
    location: 'Seattle, WA (Global)',
    headline: 'Amazon Eliminates 27,000 Corporate Jobs Across Cloud (AWS), PXT, Twitch & Advertising',
    statedReason: 'Uncertain macroeconomic conditions and rapid over-expansion during the lockdown e-commerce bubble.',
    executiveQuote: {
      speaker: 'Andy Jassy',
      role: 'CEO, Amazon',
      quote: 'For several years, most of our businesses added significant headcount. Given the uncertain economy, we have chosen to be more streamlined in our costs and headcount.'
    },
    financialContext: {
      stockTrend: 'Stock rebounded +81% in 2023',
      profitOrRevenue: '$30.4 Billion operating income in 2023 vs $12.2B in 2022',
      buybackOrCeoPay: 'Andy Jassy stock awards evaluated at $212M in 2021 grant'
    },
    sources: [
      {
        title: 'SEC Form 8-K Amazon Workforce Update',
        sourceType: 'SEC 8-K',
        url: 'https://www.sec.gov/ix?doc=/Archives/edgar/data/1018724/000101872423000004/amzn-20230104.htm',
        archiveId: 'SEC-AMZN-2023-8K',
        dateCited: '2023-01-04'
      },
      {
        title: 'Washington State WARN Filing (2,300 Seattle Headquarters jobs)',
        sourceType: 'WARN Notice',
        url: 'https://esd.wa.gov/about-employees/warn',
        archiveId: 'WARN-WA-AMZN-2023',
        dateCited: '2023-01-18'
      }
    ],
    verificationStatus: 'SEC Verified',
    impactSeverity: 'Critical'
  },
  {
    id: 'nortel-2001',
    company: 'Nortel Networks',
    ticker: 'NT',
    sector: 'Telecom & Hardware',
    headcountCut: 60000,
    percentageCut: 65,
    date: '2001-06-15',
    year: 2001,
    era: 'dotcom',
    region: 'North America',
    country: 'Canada',
    flag: '🇨🇦',
    location: 'Brampton, Ontario (Global)',
    headline: 'Nortel Networks Erases 60,000 Telecom Jobs as Fiber Optics Demand Evaporates',
    statedReason: 'Overbuilding of unlit dark fiber networks and catastrophic collapse of internet telecom CapEx.',
    executiveQuote: {
      speaker: 'John Roth',
      role: 'CEO, Nortel Networks',
      quote: 'The telecom downturn is without precedent. The decline in capital spending by our customers has been dramatic and rapid.'
    },
    financialContext: {
      stockTrend: 'Nortel made up 36% of Toronto Stock Exchange before plummeting to $0.15',
      profitOrRevenue: '$19.2 Billion Q2 2001 loss (largest corporate loss in Canadian history)',
      buybackOrCeoPay: 'John Roth cashed out $135 Million in stock options shortly before collapse'
    },
    sources: [
      {
        title: 'SEC Form 6-K Nortel Networks Multi-stage Restructuring',
        sourceType: 'SEC 8-K',
        url: 'https://www.sec.gov/edgar/browse/?CIK=000072911',
        archiveId: 'SEC-NT-6K-2001',
        dateCited: '2001-06-15'
      }
    ],
    verificationStatus: 'Official Record',
    impactSeverity: 'Critical'
  },
  {
    id: 'citigroup-2008-nov',
    company: 'Citigroup Inc.',
    ticker: 'C',
    sector: 'Finance & Banking',
    headcountCut: 52000,
    percentageCut: 14,
    date: '2008-11-17',
    year: 2008,
    era: 'financial_crisis',
    region: 'North America',
    country: 'United States',
    flag: '🇺🇸',
    location: 'New York, NY (Global)',
    headline: 'Citigroup Eliminates 52,000 Employees as Subprime Losses Force $300B Federal Bailout',
    statedReason: 'Historic toxic mortgage writedowns, asset depreciations, and emergency capital conservation.',
    executiveQuote: {
      speaker: 'Vikram Pandit',
      role: 'CEO, Citigroup',
      quote: 'There is no doubt that this is an extraordinary environment. We are simplifying our company, cutting overhead, and focusing on our core strengths.'
    },
    financialContext: {
      stockTrend: 'Citi shares cratered from $55 to under $1.00',
      profitOrRevenue: '$27.7 Billion net loss in 2008',
      buybackOrCeoPay: 'Received $45 Billion in US TARP taxpayer rescue funds + $300B loan guarantees'
    },
    sources: [
      {
        title: 'SEC Form 8-K Citigroup Headcount & Restructuring Disclosure',
        sourceType: 'SEC 8-K',
        url: 'https://www.sec.gov/edgar/browse/?CIK=0000831001',
        archiveId: 'SEC-C-2008-8K',
        dateCited: '2008-11-17'
      }
    ],
    verificationStatus: 'SEC Verified',
    impactSeverity: 'Critical'
  },
  {
    id: 'lehman-2008-sep',
    company: 'Lehman Brothers Holdings Inc.',
    ticker: 'LEH',
    sector: 'Finance & Banking',
    headcountCut: 26000,
    percentageCut: 100,
    date: '2008-09-15',
    year: 2008,
    era: 'financial_crisis',
    region: 'North America',
    country: 'United States',
    flag: '🇺🇸',
    location: 'New York, NY (Global)',
    headline: 'Lehman Brothers Collapses in Largest Bankruptcy in US History ($691B in Assets), 26,000 Left Without Jobs',
    statedReason: 'Catastrophic losses in subprime and commercial real estate portfolio after Federal Reserve refused emergency rescue buyout.',
    executiveQuote: {
      speaker: 'Dick Fuld',
      role: 'Chairman & CEO, Lehman Brothers',
      quote: 'I wake up every single night wondering what I could have done differently. This failure will haunt me for the rest of my days.'
    },
    financialContext: {
      stockTrend: '158-year-old financial institution stock plummeted to $0.00',
      profitOrRevenue: '$613 Billion in bank debt left behind',
      buybackOrCeoPay: 'Dick Fuld received an estimated $480 Million in compensation between 2000-2007'
    },
    sources: [
      {
        title: 'US Bankruptcy Court Southern District of NY (Case No. 08-13555)',
        sourceType: 'Court / BLS Record',
        url: 'https://www.nysb.uscourts.gov/',
        archiveId: 'SDNY-LEHMAN-0813555',
        dateCited: '2008-09-15'
      }
    ],
    verificationStatus: 'Official Record',
    impactSeverity: 'Critical'
  },
  {
    id: 'cisco-2001-mar',
    company: 'Cisco Systems',
    ticker: 'CSCO',
    sector: 'Telecom & Hardware',
    headcountCut: 8500,
    percentageCut: 18,
    date: '2001-03-09',
    year: 2001,
    era: 'dotcom',
    region: 'North America',
    country: 'United States',
    flag: '🇺🇸',
    location: 'San Jose, CA',
    headline: 'Cisco Cuts 8,500 Jobs and Writes Off $2.2 Billion in Obsolete Router Inventory',
    statedReason: 'Sudden collapse of customer order book following the dot-com startup bubble bursting.',
    executiveQuote: {
      speaker: 'John Chambers',
      role: 'CEO, Cisco Systems',
      quote: 'We have never seen an economic slowdown occur this fast. It was like driving a car at 100 mph and slamming into a brick wall with no skid marks.'
    },
    financialContext: {
      stockTrend: 'Briefly world’s most valuable company at $555 Billion in March 2000; market cap plunged 86%',
      profitOrRevenue: '$2.2 Billion inventory writedown in Q3 2001',
      buybackOrCeoPay: 'John Chambers requested his salary be cut to $1.00/year'
    },
    sources: [
      {
        title: 'SEC Form 10-Q Cisco Systems Third Quarter FY 2001 Disclosures',
        sourceType: 'SEC 8-K',
        url: 'https://www.sec.gov/Archives/edgar/data/858877/000085887701500007/q30110q.txt',
        archiveId: 'SEC-CSCO-10Q-2001',
        dateCited: '2001-05-18'
      }
    ],
    verificationStatus: 'SEC Verified',
    impactSeverity: 'Severe'
  }
];

export const TOTAL_DOCUMENTED_LAYOFFS = 2480390;
export const TODAY_ESTIMATED_RUN_RATE = 412;
