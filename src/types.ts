export type EraId = 'dotcom' | 'financial_crisis' | 'covid_wave' | 'ai_efficiency';

export type GeographicRegion = 
  | 'North America' 
  | 'Europe & UK' 
  | 'India & South Asia' 
  | 'East Asia & APAC' 
  | 'Latin America' 
  | 'Global / Multi-region';

export interface SourceCitation {
  title: string;
  sourceType: 'SEC 8-K' | 'WARN Notice' | 'Internal Memo' | 'Bloomberg/Reuters' | 'Official PR' | 'Court / BLS Record';
  url: string;
  archiveId: string;
  dateCited: string;
}

export interface LayoffRecord {
  id: string;
  company: string;
  ticker?: string;
  sector: 'Big Tech' | 'AI & Software' | 'Finance & Banking' | 'Mobility & Travel' | 'E-commerce & Retail' | 'Telecom & Hardware' | 'Media & Entertainment' | 'Auto & Industrial' | 'EdTech & Consumer';
  headcountCut: number;
  percentageCut?: number;
  date: string; // YYYY-MM-DD
  year: number;
  era: EraId;
  region: GeographicRegion;
  country: string;
  flag: string;
  location: string;
  headline: string;
  statedReason: string;
  executiveQuote?: {
    speaker: string;
    role: string;
    quote: string;
  };
  financialContext?: {
    stockTrend?: string;
    profitOrRevenue?: string;
    buybackOrCeoPay?: string;
  };
  sources: SourceCitation[];
  verificationStatus: 'SEC Verified' | 'WARN Notice Confirmed' | 'Official Record' | 'Under Review';
  impactSeverity: 'Critical' | 'Severe' | 'High' | 'Moderate';
}

export interface EraOverview {
  id: EraId;
  name: string;
  period: string;
  tagline: string;
  totalEstimatedLosses: string;
  description: string;
  keyDrivers: string[];
  definingQuote: string;
  quoteAuthor: string;
  color: string;
  gradient: string;
  accentBorder: string;
  iconName: string;
  stats: {
    peakMonthlyLoss: string;
    hardestHitSector: string;
    sp500Drawdown: string;
  };
}

export interface GlobalRegionStat {
  region: GeographicRegion;
  label: string;
  sharePercentage: number;
  estimatedTotal: string;
  flag: string;
  keyHubs: string[];
  primaryRegulatorySources: string[];
}

export interface SubmittedReport {
  company: string;
  headcount: number;
  date: string;
  region?: GeographicRegion;
  country?: string;
  sourceUrl: string;
  notes: string;
  reporterContact?: string;
}

export const POWERED_BY_CONFIG = {
  name: 'Gyaansetu Web Search',
  url: 'https://web-search.gyaansetu.com/',
  tagline: 'Web Search API for AI Agents'
};
