import React, { useState } from 'react';
import { 
  TrendingDown, 
  Calendar, 
  Info, 
  Sparkles, 
  AlertTriangle, 
  Maximize2, 
  BarChart3,
  Layers
} from 'lucide-react';
import { EraId } from '../types';

interface YearData {
  year: number;
  count: number;
  formattedCount: string;
  era: EraId | 'post_dotcom' | 'recovery_decade' | 'post_covid';
  eraName: string;
  eraColor: string;
  isPeak: boolean;
  peakLabel?: string;
  topCompanies: string[];
  catalyst: string;
  sp500Context: string;
}

const TIMELINE_DATA: YearData[] = [
  {
    year: 2000,
    count: 240000,
    formattedCount: '240,000',
    era: 'dotcom',
    eraName: 'Dot-Com Crash',
    eraColor: '#ec4899',
    isPeak: false,
    topCompanies: ['Pets.com', 'Webvan', 'Motorola'],
    catalyst: 'Nasdaq peaked at 5,048 in March 2000; cash burn rate outran venture financing.',
    sp500Context: '-9.1% annual drop'
  },
  {
    year: 2001,
    count: 610000,
    formattedCount: '610,000',
    era: 'dotcom',
    eraName: 'Dot-Com Crash',
    eraColor: '#ec4899',
    isPeak: true,
    peakLabel: 'Dot-Com Apex',
    topCompanies: ['Cisco (8,500)', 'Nortel (20,000)', 'Lucent (16,000)', 'Enron'],
    catalyst: 'Telecom fiber glut collapse, telecom debt defaults, 9/11 economic shock.',
    sp500Context: '-11.9% annual drop'
  },
  {
    year: 2002,
    count: 430000,
    formattedCount: '430,000',
    era: 'dotcom',
    eraName: 'Dot-Com Crash',
    eraColor: '#ec4899',
    isPeak: false,
    topCompanies: ['WorldCom', 'Qwest', 'Sun Microsystems'],
    catalyst: 'Accounting scandals (WorldCom, Enron) and IT capex freeze across Fortune 500.',
    sp500Context: '-22.1% trough year'
  },
  {
    year: 2003,
    count: 175000,
    formattedCount: '175,000',
    era: 'post_dotcom',
    eraName: 'Post-Crash Thaw',
    eraColor: '#6366f1',
    isPeak: false,
    topCompanies: ['IBM', 'EDS', 'Sprint'],
    catalyst: 'Offshoring wave to India/China begins as enterprise cost-cutting persists.',
    sp500Context: '+28.7% rebound'
  },
  {
    year: 2004,
    count: 120000,
    formattedCount: '120,000',
    era: 'post_dotcom',
    eraName: 'Early Web 2.0',
    eraColor: '#6366f1',
    isPeak: false,
    topCompanies: ['Hewlett-Packard', 'Siemens', 'AT&T'],
    catalyst: 'Corporate consolidation, hardware commoditization.',
    sp500Context: '+10.9% steady'
  },
  {
    year: 2005,
    count: 145000,
    formattedCount: '145,000',
    era: 'post_dotcom',
    eraName: 'Housing Boom',
    eraColor: '#6366f1',
    isPeak: false,
    topCompanies: ['Hewlett-Packard (14,500)', 'Sony', 'Kodak'],
    catalyst: 'Digital camera transformation destroys legacy chemical photography.',
    sp500Context: '+4.9% expansion'
  },
  {
    year: 2006,
    count: 110000,
    formattedCount: '110,000',
    era: 'post_dotcom',
    eraName: 'Pre-Crisis Peak',
    eraColor: '#6366f1',
    isPeak: false,
    topCompanies: ['Ford Motor', 'Intel (10,500)', 'Pfizer'],
    catalyst: 'Automotive debt distress, PC market maturation.',
    sp500Context: '+15.8% multi-year high'
  },
  {
    year: 2007,
    count: 195000,
    formattedCount: '195,000',
    era: 'financial_crisis',
    eraName: 'Financial Crisis',
    eraColor: '#f59e0b',
    isPeak: false,
    topCompanies: ['Countrywide Financial', 'Bear Stearns', 'Citigroup'],
    catalyst: 'Subprime mortgage defaults erupt, BNP Paribas freezes investment funds.',
    sp500Context: '+5.5% late cycle'
  },
  {
    year: 2008,
    count: 780000,
    formattedCount: '780,000',
    era: 'financial_crisis',
    eraName: 'Financial Crisis',
    eraColor: '#f59e0b',
    isPeak: true,
    peakLabel: 'GFC Liquidity Freeze',
    topCompanies: ['Lehman Brothers (26,000)', 'Citigroup (52,000)', 'General Motors', 'Merrill Lynch'],
    catalyst: 'Lehman collapse, interbank credit freeze, global auto industry bailout.',
    sp500Context: '-37.0% catastrophic drop'
  },
  {
    year: 2009,
    count: 690000,
    formattedCount: '690,000',
    era: 'financial_crisis',
    eraName: 'Financial Crisis',
    eraColor: '#f59e0b',
    isPeak: false,
    topCompanies: ['Boeing', 'Microsoft (5,000 first ever)', 'Pfizer', 'Caterpillar'],
    catalyst: 'US unemployment peaks at 10.0%; enterprise IT budgets slashed across the board.',
    sp500Context: '+26.5% Fed QE launch'
  },
  {
    year: 2010,
    count: 180000,
    formattedCount: '180,000',
    era: 'recovery_decade',
    eraName: 'ZIRP Recovery',
    eraColor: '#3b82f6',
    isPeak: false,
    topCompanies: ['AstraZeneca', 'Nokia', 'GlaxoSmithKline'],
    catalyst: 'Smartphone disruption begins claiming legacy mobile titans.',
    sp500Context: '+15.1% growth'
  },
  {
    year: 2011,
    count: 150000,
    formattedCount: '150,000',
    era: 'recovery_decade',
    eraName: 'ZIRP Recovery',
    eraColor: '#3b82f6',
    isPeak: false,
    topCompanies: ['Bank of America (30,000)', 'Cisco (11,500)', 'RIM / BlackBerry'],
    catalyst: 'European sovereign debt crisis (Greece/Italy bailouts) and Wall Street deleveraging.',
    sp500Context: '+2.1% choppy'
  },
  {
    year: 2012,
    count: 135000,
    formattedCount: '135,000',
    era: 'recovery_decade',
    eraName: 'ZIRP Recovery',
    eraColor: '#3b82f6',
    isPeak: false,
    topCompanies: ['HP (29,000)', 'Nokia', 'Research In Motion'],
    catalyst: 'iPhone and Android complete duopoly, gutting Canadian & European hardware champions.',
    sp500Context: '+16.0% bull run'
  },
  {
    year: 2013,
    count: 115000,
    formattedCount: '115,000',
    era: 'recovery_decade',
    eraName: 'ZIRP Recovery',
    eraColor: '#3b82f6',
    isPeak: false,
    topCompanies: ['Cisco', 'Texas Instruments', 'Intel'],
    catalyst: 'PC shipment global contraction as tablets and smartphones surge.',
    sp500Context: '+32.4% explosive rally'
  },
  {
    year: 2014,
    count: 165000,
    formattedCount: '165,000',
    era: 'recovery_decade',
    eraName: 'Cloud Era',
    eraColor: '#3b82f6',
    isPeak: false,
    topCompanies: ['Microsoft (18,000 Nokia writedown)', 'Sony', 'Symantec'],
    catalyst: 'Satya Nadella dismantles the failed $7.2B Nokia mobile phone acquisition.',
    sp500Context: '+13.7% cloud expansion'
  },
  {
    year: 2015,
    count: 190000,
    formattedCount: '190,000',
    era: 'recovery_decade',
    eraName: 'Cloud Era',
    eraColor: '#3b82f6',
    isPeak: false,
    topCompanies: ['HP Inc / HPE Split (30,000)', 'Schlumberger', 'Qualcomm'],
    catalyst: 'Crude oil flash crash ($100 to $30/bbl) combined with enterprise hardware spinoffs.',
    sp500Context: '+1.4% flat'
  },
  {
    year: 2016,
    count: 140000,
    formattedCount: '140,000',
    era: 'recovery_decade',
    eraName: 'Cloud Era',
    eraColor: '#3b82f6',
    isPeak: false,
    topCompanies: ['Intel (12,000)', 'Cisco (5,500)', 'Ericsson'],
    catalyst: 'Semiconductor pivot from PC microprocessors to cloud hyper-scale data centers.',
    sp500Context: '+11.9% expansion'
  },
  {
    year: 2017,
    count: 105000,
    formattedCount: '105,000',
    era: 'recovery_decade',
    eraName: 'Cloud Era',
    eraColor: '#3b82f6',
    isPeak: false,
    topCompanies: ['Oracle', 'Cognizant', 'Snap Inc'],
    catalyst: 'Traditional on-premise IT outsourcers struggle with AWS and Azure automated migrations.',
    sp500Context: '+21.8% strong tech'
  },
  {
    year: 2018,
    count: 98000,
    formattedCount: '98,000',
    era: 'recovery_decade',
    eraName: 'Late Cycle',
    eraColor: '#3b82f6',
    isPeak: false,
    topCompanies: ['Tesla (9% cut)', 'General Motors', 'PayPal'],
    catalyst: 'Tesla "production hell" for Model 3, tariff war tensions between US and China.',
    sp500Context: '-4.4% Q4 rate shock'
  },
  {
    year: 2019,
    count: 112000,
    formattedCount: '112,000',
    era: 'recovery_decade',
    eraName: 'Late Cycle',
    eraColor: '#3b82f6',
    isPeak: false,
    topCompanies: ['WeWork (2,400)', 'HP', 'Cognizant (7,000)'],
    catalyst: 'WeWork IPO implosion, SoftBank Vision Fund excess scrutinized across Silicon Valley.',
    sp500Context: '+31.5% tech dominance'
  },
  {
    year: 2020,
    count: 940000,
    formattedCount: '940,000',
    era: 'covid_wave',
    eraName: 'COVID-19 Shock',
    eraColor: '#06b6d4',
    isPeak: true,
    peakLabel: 'Global Lockdown Freeze',
    topCompanies: ['Boeing (30,000)', 'Uber (6,700)', 'Airbnb (25% cut)', 'Disney (32,000)'],
    catalyst: 'Worldwide mobility freeze, flights grounded, hospitality shuttered in 72 hours.',
    sp500Context: '+18.4% tech stimulus surge'
  },
  {
    year: 2021,
    count: 75000,
    formattedCount: '75,000',
    era: 'post_covid',
    eraName: 'Hyper-Hiring Frenzy',
    eraColor: '#10b981',
    isPeak: false,
    topCompanies: ['Magic Leap', 'Katerra', 'Better.com'],
    catalyst: 'ZIRP money printing, tech talent bidding wars, 0% interest rates spark over-hiring.',
    sp500Context: '+28.7% all-time highs'
  },
  {
    year: 2022,
    count: 165000,
    formattedCount: '165,000',
    era: 'ai_efficiency',
    eraName: 'AI & Efficiency',
    eraColor: '#f43f5e',
    isPeak: false,
    topCompanies: ['Meta (11,000 first wave)', 'Twitter / X (5,000)', 'Shopee', 'Byju’s'],
    catalyst: 'Fed hikes rates by 500 bps; digital advertising slows; Musk cuts 80% at Twitter.',
    sp500Context: '-18.1% tech bear market'
  },
  {
    year: 2023,
    count: 264000,
    formattedCount: '264,000',
    era: 'ai_efficiency',
    eraName: 'AI & Efficiency',
    eraColor: '#f43f5e',
    isPeak: true,
    peakLabel: 'Year of Efficiency Purge',
    topCompanies: ['Google (12,000)', 'Microsoft (10,000)', 'Amazon (27,000 total)', 'Meta (10,000 round 2)'],
    catalyst: 'Mark Zuckerberg declares "Year of Efficiency"; Wall Street rewards headcount reductions.',
    sp500Context: '+26.3% Magnificent 7 surge'
  },
  {
    year: 2024,
    count: 182000,
    formattedCount: '182,000',
    era: 'ai_efficiency',
    eraName: 'AI & Efficiency',
    eraColor: '#f43f5e',
    isPeak: false,
    topCompanies: ['Intel (15,000)', 'Tesla (14,000)', 'Cisco (6,000)', 'Dell (12,500)'],
    catalyst: 'Nvidia CapEx rotation; enterprise payroll redirected to GPU server clusters.',
    sp500Context: '+24.5% AI euphoria'
  },
  {
    year: 2025,
    count: 115000,
    formattedCount: '115,000',
    era: 'ai_efficiency',
    eraName: 'AI & Efficiency',
    eraColor: '#f43f5e',
    isPeak: false,
    topCompanies: ['Dyson (1,000)', 'SAP', 'Salesforce', 'CrowdStrike'],
    catalyst: 'Agentic automation in customer support, middle management de-layering.',
    sp500Context: '+18.2% steady high'
  },
  {
    year: 2026,
    count: 48000,
    formattedCount: '48,000 (YTD)',
    era: 'ai_efficiency',
    eraName: 'AI & Efficiency',
    eraColor: '#f43f5e',
    isPeak: false,
    topCompanies: ['Paramount', 'Baidu', 'Fintech & Cloud majors'],
    catalyst: 'Autonomous coding tools & software developer headcount compression.',
    sp500Context: 'Record valuations'
  }
];

interface HistoricalTimelineChartProps {
  onSelectEra?: (era: EraId) => void;
}

export const HistoricalTimelineChart: React.FC<HistoricalTimelineChartProps> = ({ onSelectEra }) => {
  const [hoveredYear, setHoveredYear] = useState<YearData | null>(TIMELINE_DATA[TIMELINE_DATA.length - 4]); // 2023 default
  const [viewMode, setViewMode] = useState<'chart' | 'macro_summary'>('chart');

  const maxLoss = Math.max(...TIMELINE_DATA.map((d) => d.count));

  return (
    <section id="timeline-chart" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-rose-950/60 border border-rose-500/30 text-xs font-mono text-rose-300 mb-3">
            <TrendingDown className="w-3.5 h-3.5 text-rose-400" />
            26-YEAR MACRO VIEW (2000 – 2026)
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            The Historical Layoff Curve
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-2 font-body">
            Hover over any year to inspect corporate casualties, primary macroeconomic catalysts, and Wall Street stock index performance.
          </p>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-2 bg-slate-900 border border-white/10 p-1 rounded-xl">
          <button
            onClick={() => setViewMode('chart')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
              viewMode === 'chart' 
                ? 'bg-rose-600 text-white shadow-md' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            Interactive Chart
          </button>
          <button
            onClick={() => setViewMode('macro_summary')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
              viewMode === 'macro_summary' 
                ? 'bg-rose-600 text-white shadow-md' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            Crises Breakdown
          </button>
        </div>
      </div>

      {viewMode === 'chart' ? (
        <div className="rounded-3xl bg-slate-900/80 border border-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          {/* Legend */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-white/5">
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
              <span className="text-slate-400">Era Signatures:</span>
              <span className="flex items-center gap-1.5 text-pink-400">
                <span className="w-2.5 h-2.5 rounded-full bg-pink-500 inline-block" />
                Dot-Com (2000-02)
              </span>
              <span className="flex items-center gap-1.5 text-amber-400">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                Financial Crisis (2007-09)
              </span>
              <span className="flex items-center gap-1.5 text-cyan-400">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 inline-block" />
                COVID Shock (2020)
              </span>
              <span className="flex items-center gap-1.5 text-rose-400">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                AI & Efficiency (2022-26)
              </span>
            </div>

            <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-slate-500" />
              Source: SEC 8-K, WARN, BLS Longitudinal Data
            </div>
          </div>

          {/* SVG & Bar Visualizer */}
          <div className="relative pt-8 pb-4">
            {/* Grid Lines */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
              <div className="border-b border-dashed border-white/30 text-[10px] font-mono text-slate-400 pt-1">1,000,000+</div>
              <div className="border-b border-dashed border-white/30 text-[10px] font-mono text-slate-400 pt-1">750,000</div>
              <div className="border-b border-dashed border-white/30 text-[10px] font-mono text-slate-400 pt-1">500,000</div>
              <div className="border-b border-dashed border-white/30 text-[10px] font-mono text-slate-400 pt-1">250,000</div>
              <div className="border-b border-white/40"></div>
            </div>

            {/* Bars Container */}
            <div className="relative h-64 sm:h-72 flex items-end justify-between gap-1 sm:gap-2 z-10 pt-4">
              {TIMELINE_DATA.map((item) => {
                const heightPercent = Math.max(8, Math.round((item.count / maxLoss) * 100));
                const isSelected = hoveredYear?.year === item.year;

                return (
                  <div
                    key={item.year}
                    onMouseEnter={() => setHoveredYear(item)}
                    onClick={() => {
                      setHoveredYear(item);
                      if (onSelectEra && (item.era === 'dotcom' || item.era === 'financial_crisis' || item.era === 'covid_wave' || item.era === 'ai_efficiency')) {
                        onSelectEra(item.era as EraId);
                      }
                    }}
                    className="flex-1 flex flex-col items-center h-full justify-end group cursor-pointer relative"
                  >
                    {/* Peak indicator dot */}
                    {item.isPeak && (
                      <div className="absolute -top-7 hidden sm:flex flex-col items-center">
                        <span className="w-2 h-2 rounded-full bg-red-400 animate-ping"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 absolute top-0.5"></span>
                      </div>
                    )}

                    {/* Bar */}
                    <div
                      style={{
                        height: `${heightPercent}%`,
                        backgroundColor: item.eraColor,
                        boxShadow: isSelected ? `0 0 20px ${item.eraColor}88` : undefined
                      }}
                      className={`w-full rounded-t-md transition-all duration-300 relative ${
                        isSelected 
                          ? 'opacity-100 scale-105 brightness-125 z-20' 
                          : 'opacity-60 group-hover:opacity-90 group-hover:scale-105'
                      }`}
                    >
                      {/* Sub-glow for peaks */}
                      {item.isPeak && (
                        <div className="absolute inset-0 bg-white/20 rounded-t-md animate-pulse" />
                      )}
                    </div>

                    {/* Year Label */}
                    <span 
                      className={`mt-2 text-[9px] sm:text-[11px] font-mono transition-colors ${
                        isSelected
                          ? 'text-white font-bold'
                          : 'text-slate-500 group-hover:text-slate-300'
                      } ${item.year % 2 === 0 ? 'opacity-100' : 'opacity-0 sm:opacity-100'}`}
                    >
                      '{String(item.year).slice(-2)}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Active Year Detail Callout Box */}
          {hoveredYear && (
            <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-slate-950/90 border border-white/10 shadow-2xl relative overflow-hidden transition-all duration-300">
              <div 
                className="absolute left-0 top-0 bottom-0 w-2"
                style={{ backgroundColor: hoveredYear.eraColor }}
              />

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
                {/* Year & Metric */}
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-2xl font-black font-display text-white">{hoveredYear.year}</span>
                    <span 
                      className="px-2 py-0.5 rounded text-[10px] font-mono uppercase font-bold text-white"
                      style={{ backgroundColor: `${hoveredYear.eraColor}33`, borderColor: hoveredYear.eraColor, borderWidth: 1 }}
                    >
                      {hoveredYear.eraName}
                    </span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-mono font-black text-rose-400">
                    {hoveredYear.formattedCount}
                  </div>
                  <div className="text-xs text-slate-400 font-mono mt-0.5">documented cuts that year</div>

                  {hoveredYear.isPeak && (
                    <div className="inline-flex items-center gap-1.5 mt-2 px-2.5 py-1 rounded-md bg-red-950/80 border border-red-500/40 text-[11px] font-mono text-red-300 font-bold">
                      <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
                      {hoveredYear.peakLabel}
                    </div>
                  )}
                </div>

                {/* Macro Catalyst */}
                <div className="md:col-span-2">
                  <div className="text-[11px] uppercase tracking-wider font-mono text-slate-400 mb-1">
                    Economic Catalyst & Driver
                  </div>
                  <p className="text-sm text-slate-200 font-body leading-relaxed">
                    {hoveredYear.catalyst}
                  </p>

                  <div className="mt-3 flex items-center gap-2 text-xs font-mono text-slate-400">
                    <span className="text-slate-500">S&P 500 Market Context:</span>
                    <span className={`font-semibold ${hoveredYear.sp500Context.includes('-') ? 'text-red-400' : 'text-emerald-400'}`}>
                      {hoveredYear.sp500Context}
                    </span>
                  </div>
                </div>

                {/* Landmark Corporate Casualties */}
                <div>
                  <div className="text-[11px] uppercase tracking-wider font-mono text-slate-400 mb-1.5">
                    Landmark Layoffs That Year
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {hoveredYear.topCompanies.map((c, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-300"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Macro Summary Mode */
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              title: 'Dot-Com Crash (2000–2002)',
              peakYear: '2001',
              totalLoss: '1,280,000+',
              color: 'border-pink-500/40 bg-pink-950/20 text-pink-400',
              driver: 'Venture capital freeze & optical telecom fiber overcapacity.',
              topSurvivors: 'Cisco, Nortel, Lucent, WorldCom'
            },
            {
              title: 'Great Financial Crisis (2007–2009)',
              peakYear: '2008',
              totalLoss: '1,665,000+',
              color: 'border-amber-500/40 bg-amber-950/20 text-amber-400',
              driver: 'Subprime liquidity contagion, banking insolvencies, frozen credit.',
              topSurvivors: 'Lehman Brothers, Citigroup, Merrill Lynch, GM'
            },
            {
              title: 'COVID Shock Freeze (2020)',
              peakYear: '2020',
              totalLoss: '940,000+',
              color: 'border-cyan-500/40 bg-cyan-950/20 text-cyan-400',
              driver: 'Worldwide shelter-in-place orders, travel halted, hospitality frozen.',
              topSurvivors: 'Boeing, Uber, Airbnb, Disney, Hertz'
            },
            {
              title: 'AI & "Efficiency" (2022–2026)',
              peakYear: '2023',
              totalLoss: '609,000+',
              color: 'border-rose-500/40 bg-rose-950/20 text-rose-400',
              driver: 'Interest rate normalization, Nvidia CapEx reallocation, middle-management thinning.',
              topSurvivors: 'Intel, Meta, Google, Microsoft, Amazon'
            }
          ].map((card, i) => (
            <div
              key={i}
              className={`p-6 rounded-3xl border ${card.color} backdrop-blur-xl flex flex-col justify-between`}
            >
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider block mb-1">
                  Peak: {card.peakYear}
                </span>
                <h3 className="font-display font-bold text-xl text-white mb-2">{card.title}</h3>
                <div className="text-2xl font-mono font-extrabold text-white mb-3">{card.totalLoss}</div>
                <p className="text-xs text-slate-300 font-body leading-relaxed mb-4">{card.driver}</p>
              </div>
              <div className="pt-3 border-t border-white/10 text-xs font-mono text-slate-400">
                Major cuts: <span className="text-white">{card.topSurvivors}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
