import React from 'react';
import { DollarSign, TrendingUp, AlertTriangle, Scale, ShieldAlert, ArrowRight } from 'lucide-react';

export const HypocrisyMeter: React.FC = () => {
  const discrepancies = [
    {
      company: 'Meta Platforms (Facebook)',
      ticker: 'META',
      year: '2023',
      cuts: '21,000 Workers Terminated',
      corporateNarrative: '“Year of Efficiency” — cutting costs because revenue growth slowed after pandemic over-hiring.',
      financialReality: 'Authorized $50,000,000,000 in stock buybacks and initiated its first-ever dividend. Net profit surged to $39.1 Billion. Stock skyrocketed 194%.',
      ratioMetric: '$2.38 Million buyback per worker terminated',
      sourceFiling: 'SEC 10-K & 8-K March 2023',
      severity: 'Extreme'
    },
    {
      company: 'Alphabet / Google',
      ticker: 'GOOGL',
      year: '2023',
      cuts: '12,000 Workers Terminated',
      corporateNarrative: '“Hired for a different economic reality; we take full responsibility for decisions.”',
      financialReality: 'Board authorized $70,000,000,000 in share repurchases. Alphabet reported $73.8 Billion in net annual profit and $19.7B in single-quarter free cash flow.',
      ratioMetric: '$5.83 Million buyback per worker terminated',
      sourceFiling: 'SEC Form 8-K April 2023',
      severity: 'Extreme'
    },
    {
      company: 'Intel Corporation',
      ticker: 'INTC',
      year: '2024',
      cuts: '15,000 Workers Terminated',
      corporateNarrative: '“Our costs are too high, our margins are too low. We have yet to fully benefit from AI.”',
      financialReality: 'CEO received $16.85M in compensation while mid-level engineers in Oregon, California, and Israel lost livelihoods. Suspended 32-year common dividend.',
      ratioMetric: 'CEO package exceeded severance pool for 1,200 junior staff',
      sourceFiling: 'SEC DEF 14A Proxy Statement 2024',
      severity: 'Critical'
    },
    {
      company: 'Intuit Inc.',
      ticker: 'INTU',
      year: '2024',
      cuts: '1,800 Workers Terminated',
      corporateNarrative: '“Eliminating low performers to aggressively hire AI-first engineers and customer agents.”',
      financialReality: 'Company shares hit an all-time record high of $670 on Wall Street on day of announcement. Board authorized an additional $2.0 Billion share buyback.',
      ratioMetric: '$1.11 Million buyback per terminated worker',
      sourceFiling: 'SEC Form 8-K July 2024',
      severity: 'Severe'
    }
  ];

  return (
    <section id="hypocrisy" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-500/30 text-xs font-mono text-red-300 mb-4">
          <Scale className="w-3.5 h-3.5 text-red-400" />
          FACT-CHECK: THE DISCREPANCY INDEX
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-4">
          Record Profits vs. <span className="text-gradient-red">Mass Terminations</span>
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
          In previous downturns, companies fired workers to avoid imminent bankruptcy. In the modern era, profitable tech giants execute mass layoffs while concurrently funneling hundreds of billions into stock buybacks to pump share prices.
        </p>
      </div>

      {/* Discrepancy Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {discrepancies.map((item, idx) => (
          <div
            key={idx}
            className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-white/10 hover:border-red-500/40 transition-all shadow-xl backdrop-blur-xl relative flex flex-col justify-between"
          >
            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <span className="font-display font-bold text-xl text-white">{item.company}</span>
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-white/10 text-slate-300 font-semibold">
                    {item.ticker}
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-red-500/20 text-red-400 border border-red-500/30">
                  {item.cuts}
                </span>
              </div>

              {/* The Stated Narrative */}
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 mb-4">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                  🗣️ Corporate Executive Narrative:
                </span>
                <p className="text-xs sm:text-sm text-slate-300 italic">
                  {item.corporateNarrative}
                </p>
              </div>

              {/* The Financial Reality */}
              <div className="p-3.5 rounded-xl bg-red-950/20 border border-red-500/20 mb-4">
                <span className="text-[11px] font-mono text-red-400 uppercase tracking-wider block mb-1 font-bold flex items-center gap-1">
                  <DollarSign className="w-3.5 h-3.5" /> SEC Financial Reality:
                </span>
                <p className="text-xs sm:text-sm text-slate-200">
                  {item.financialReality}
                </p>
              </div>
            </div>

            {/* Bottom Stat Pill */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
              <span className="text-amber-400 font-semibold">{item.ratioMetric}</span>
              <span className="text-slate-500 text-[11px]">{item.sourceFiling}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Aggregated Fact Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-red-950/40 via-neutral-900 to-amber-950/40 border border-white/10 text-center">
        <h4 className="font-display font-bold text-lg sm:text-xl text-white mb-2">
          The $194 Billion Contrast
        </h4>
        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Between 2023 and 2025, the five largest tech corporations (Meta, Alphabet, Microsoft, Apple, Amazon) repurchased <span className="text-emerald-400 font-bold">$194+ Billion</span> of their own shares — enough capital to pay the annual salaries of every laid-off tech worker for over 12 consecutive years.
        </p>
      </div>
    </section>
  );
};
