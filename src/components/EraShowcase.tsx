import React from 'react';
import { ERAS_DATA } from '../data/erasData';
import { EraId } from '../types';
import { Cpu, Activity, TrendingDown, Flame, Quote, ArrowUpRight, CheckCircle2, AlertOctagon } from 'lucide-react';

interface EraShowcaseProps {
  selectedEra: EraId;
  onSelectEra: (eraId: EraId) => void;
  onFilterArchiveByEra: (eraId: EraId) => void;
}

export const EraShowcase: React.FC<EraShowcaseProps> = ({
  selectedEra,
  onSelectEra,
  onFilterArchiveByEra
}) => {
  const currentEra = ERAS_DATA.find((e) => e.id === selectedEra) || ERAS_DATA[0];

  const getIcon = (id: EraId) => {
    switch (id) {
      case 'ai_efficiency':
        return <Cpu className="w-5 h-5 text-rose-400" />;
      case 'covid_wave':
        return <Activity className="w-5 h-5 text-cyan-400" />;
      case 'financial_crisis':
        return <TrendingDown className="w-5 h-5 text-amber-400" />;
      case 'dotcom':
        return <Flame className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section id="eras" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-slate-400 mb-3">
            <AlertOctagon className="w-3.5 h-3.5 text-red-400" />
            HISTORICAL COMPARATIVE ANALYSIS
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            The 4 Watershed Downsizing Waves
          </h2>
        </div>
        <p className="text-sm text-slate-400 max-w-md font-mono">
          Each crisis had a distinct catalyst, corporate narrative, and human cost. Examine how corporate messaging evolved over 26 years.
        </p>
      </div>

      {/* Era Navigation Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 mb-8">
        {ERAS_DATA.map((era) => {
          const isActive = era.id === selectedEra;
          return (
            <button
              key={era.id}
              onClick={() => onSelectEra(era.id)}
              className={`p-4 rounded-xl text-left transition-all border ${
                isActive
                  ? 'bg-slate-900 border-red-500 shadow-lg shadow-red-950/40 translate-y-[-2px]'
                  : 'bg-slate-950/60 border-white/5 hover:border-white/20 text-slate-400 hover:text-white'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="p-1.5 rounded-lg bg-white/5">{getIcon(era.id)}</span>
                <span className="font-mono text-[11px] text-slate-400">{era.period}</span>
              </div>
              <h4 className="font-display font-bold text-sm text-white">{era.name}</h4>
              <span className="text-xs font-mono text-red-400 block mt-1 font-semibold">
                {era.totalEstimatedLosses}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Era Dossier Display */}
      <div className="rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-950/95 to-black border border-white/10 p-6 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-xl">
        {/* Decorative corner glow */}
        <div
          className="absolute -top-32 -right-32 w-80 h-80 rounded-full blur-[100px] pointer-events-none opacity-20"
          style={{ backgroundColor: currentEra.color }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
          {/* Left Column: Core Narrative & Drivers */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300 mb-4">
              <span>Timeline: {currentEra.period}</span>
              <span>•</span>
              <span className="text-red-400 font-bold">{currentEra.totalEstimatedLosses}</span>
            </div>

            <h3 className="font-display font-black text-2xl sm:text-4xl text-white mb-4">
              {currentEra.name}
            </h3>

            <p className="text-slate-300 text-base sm:text-lg mb-6 leading-relaxed">
              {currentEra.description}
            </p>

            {/* Key Drivers Checklist */}
            <div className="mb-8">
              <h5 className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-3 font-semibold">
                Catalysts & Economic Transmission Channels:
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {currentEra.keyDrivers.map((driver, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{driver}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Defining Executive Quote Pill */}
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 relative">
              <Quote className="w-8 h-8 text-white/10 absolute top-4 right-4" />
              <p className="italic text-slate-200 text-sm sm:text-base mb-2 font-serif leading-relaxed">
                "{currentEra.definingQuote}"
              </p>
              <div className="text-xs font-mono text-red-400 font-semibold">
                — {currentEra.quoteAuthor}
              </div>
            </div>
          </div>

          {/* Right Column: Comparative Metrics & Jump to Archive */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full bg-white/[0.02] border border-white/10 rounded-2xl p-6">
            <div>
              <h4 className="font-display font-bold text-lg text-white mb-4">
                Economic Impact Dossier
              </h4>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    Peak Monthly Contraction
                  </span>
                  <span className="text-2xl font-bold font-mono text-white mt-1 block">
                    {currentEra.stats.peakMonthlyLoss}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    Hardest-Hit Sectors
                  </span>
                  <span className="text-base font-semibold text-slate-200 mt-1 block">
                    {currentEra.stats.hardestHitSector}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    Market Drawdown / Context
                  </span>
                  <span className="text-xl font-bold font-mono text-amber-400 mt-1 block">
                    {currentEra.stats.sp500Drawdown}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <button
                onClick={() => onFilterArchiveByEra(currentEra.id)}
                className="w-full py-3.5 px-4 rounded-xl bg-white hover:bg-slate-200 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-white/20"
              >
                <span>Inspect Verified {currentEra.name.split(' ')[1] || 'Era'} Records</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <p className="text-center text-[11px] font-mono text-slate-500 mt-2">
                All records backed by SEC filings, WARN notices & court docs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
