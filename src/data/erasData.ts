import { EraOverview } from '../types';

export const ERAS_DATA: EraOverview[] = [
  {
    id: 'ai_efficiency',
    name: 'The AI Reckoning & "Efficiency" Era',
    period: '2023 – Present',
    tagline: 'Record profits, all-time high stock prices, and mass terminations in the name of AI & lean margins.',
    totalEstimatedLosses: '540,000+',
    description: 'Unlike previous recessions caused by revenue collapse, the current wave occurs alongside record S&P 500 earnings. Companies actively cite artificial intelligence, automation, and pandemic over-hiring as justification for slashing tens of thousands of experienced white-collar workers.',
    keyDrivers: ['Generative AI automation', 'Investor demand for 40%+ operating margins', 'Reversal of 2020-2021 hyper-hiring', 'Shifting CapEx into Nvidia GPUs & Datacenters'],
    definingQuote: 'We are making these cuts not because we are in financial trouble, but because we are deliberately pivoting every resource towards AI.',
    quoteAuthor: 'Executive Memo Consensus (2024)',
    color: '#ef4444',
    gradient: 'from-rose-500/20 via-red-950/40 to-neutral-950',
    accentBorder: 'border-rose-500/40',
    iconName: 'Cpu',
    stats: {
      peakMonthlyLoss: '89,500 (Jan 2023)',
      hardestHitSector: 'Software Engineering & HR',
      sp500Drawdown: '+42% (Paradox Bull Market)'
    }
  },
  {
    id: 'covid_wave',
    name: 'The COVID-19 Pandemic Freeze',
    period: '2020 – 2021',
    tagline: 'Global lockdowns froze hospitality, aviation, and mobility overnight, trigger shock waves.',
    totalEstimatedLosses: '22,400,000+ (Global Peak)',
    description: 'In March 2020, global commerce ground to a halt. Airlines, hotels, theme parks, and ridesharing apps faced 90% revenue drops within 14 days. While tech later exploded with stay-at-home demand, physical hospitality and transportation endured historic devastation.',
    keyDrivers: ['Global travel restrictions & border closures', 'Suspension of public entertainment & dining', 'Supply chain paralysis', 'Emergency cash conservation'],
    definingQuote: 'Travel as we know it is frozen. We are collectively living through the most harrowing crisis of our lifetime.',
    quoteAuthor: 'Brian Chesky, CEO Airbnb (Layoff Memo May 2020)',
    color: '#06b6d4',
    gradient: 'from-cyan-500/20 via-sky-950/40 to-neutral-950',
    accentBorder: 'border-cyan-500/40',
    iconName: 'Activity',
    stats: {
      peakMonthlyLoss: '20.5M (US BLS April 2020)',
      hardestHitSector: 'Aviation, Hospitality, Mobility',
      sp500Drawdown: '-34% (Fastest bear market)'
    }
  },
  {
    id: 'financial_crisis',
    name: 'The Great Financial Crisis & Subprime Crash',
    period: '2007 – 2009',
    tagline: 'Wall Street banks imploded under toxic mortgage debt, freezing credit worldwide.',
    totalEstimatedLosses: '8,700,000+ (US BLS Tracked)',
    description: 'The collapse of subprime mortgage-backed securities triggered the bankruptcy of Lehman Brothers and the near-failure of Citigroup, AIG, and Merrill Lynch. The credit freeze rippled across industrial manufacturing, automotive giants like GM, and mature tech firms.',
    keyDrivers: ['Subprime mortgage contagion & credit freeze', 'Lehman Brothers bankruptcy', 'Automotive bankruptcies (GM, Chrysler)', 'Global liquidity drought'],
    definingQuote: 'This is not just a correction. The systemic foundation of financial lending has fractured.',
    quoteAuthor: 'Congressional Financial Inquiry Commission',
    color: '#f59e0b',
    gradient: 'from-amber-500/20 via-orange-950/40 to-neutral-950',
    accentBorder: 'border-amber-500/40',
    iconName: 'TrendingDown',
    stats: {
      peakMonthlyLoss: '800,000+ (Jan 2009 US BLS)',
      hardestHitSector: 'Banking, Real Estate, Automotive',
      sp500Drawdown: '-57% Peak-to-Trough'
    }
  },
  {
    id: 'dotcom',
    name: 'The Dot-Com Bubble Implosion',
    period: '2000 – 2002',
    tagline: 'Unprofitable internet promises and telecom over-build vanished into $5 Trillion paper losses.',
    totalEstimatedLosses: '500,000+ (Tech Specific)',
    description: 'The euphoria of the early World Wide Web inflated market valuations for companies with zero profits or revenue models. When the bubble burst in March 2000, hundreds of internet startups vaporized overnight, dragging telecom infrastructure giants down with them.',
    keyDrivers: ['Extreme P/E multiples on zero revenue', 'Telecom overbuilding of unlit dark fiber', 'Venture capital dry-up', 'Pets.com & Webvan liquidations'],
    definingQuote: 'The party is over. Cash flow is no longer optional.',
    quoteAuthor: 'Silicon Valley Post-Mortem (2001)',
    color: '#8b5cf6',
    gradient: 'from-purple-500/20 via-violet-950/40 to-neutral-950',
    accentBorder: 'border-purple-500/40',
    iconName: 'Flame',
    stats: {
      peakMonthlyLoss: '45,000 (Summer 2001 Tech)',
      hardestHitSector: 'Dot-Com Startups, Telecom Fiber',
      sp500Drawdown: '-78% (Nasdaq Crash)'
    }
  }
];
