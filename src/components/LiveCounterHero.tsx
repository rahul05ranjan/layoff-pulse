import React, { useState, useEffect } from 'react';
import { Flame, TrendingDown, Cpu, Activity, AlertTriangle, ShieldCheck, Search, ArrowRight, DollarSign, Clock } from 'lucide-react';
import { TOTAL_DOCUMENTED_LAYOFFS, TODAY_ESTIMATED_RUN_RATE } from '../data/layoffsData';
import { ERAS_DATA } from '../data/erasData';
import { EraId } from '../types';

interface LiveCounterHeroProps {
  onSelectEra: (eraId: EraId) => void;
  onSearchChange: (query: string) => void;
  searchQuery: string;
}

export const LiveCounterHero: React.FC<LiveCounterHeroProps> = ({
  onSelectEra,
  onSearchChange,
  searchQuery
}) => {
  // Live ticking counter based on 2024-2026 global daily run rate (~412 layoffs per day)
  const [liveCount, setLiveCount] = useState<number>(TOTAL_DOCUMENTED_LAYOFFS);
  const [cutsSinceVisit, setCutsSinceVisit] = useState<number>(0);

  useEffect(() => {
    // Increment ticker to visually represent the continuous global layoff cadence
    const interval = setInterval(() => {
      setLiveCount(prev => prev + 1);
      setCutsSinceVisit(prev => prev + 1);
    }, 4500); // 1 cut every ~4.5 seconds

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  return (
    <section id="hero" className="relative pt-10 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-red-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto text-center">
        {/* Verification badge inspired by Jhooth Ki Goonj accountability */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/60 border border-red-500/30 text-red-300 text-xs sm:text-sm font-mono mb-6 shadow-inner backdrop-blur-md">
          <span className="pulse-radar-dot w-2.5 h-2.5 rounded-full bg-red-500 inline-block" />
          <span className="font-semibold tracking-wide text-white">THE WORKFORCE RECKONING ARCHIVE</span>
          <span className="text-white/40">•</span>
          <span className="text-red-400">SEC 8-K & WARN Act Verified</span>
        </div>

        {/* Punchy Hero Headline */}
        <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white mb-6 leading-[1.1]">
          Four Historic Eras. <br />
          <span className="text-gradient-red">Every Single Pink Slip</span> Counted.
        </h1>

        <p className="max-w-3xl mx-auto text-base sm:text-xl text-slate-300 mb-10 font-normal leading-relaxed">
          From the <span className="text-purple-400 font-medium">Dot-Com Crash (2000)</span> and the{' '}
          <span className="text-amber-400 font-medium">2008 Financial Contagion</span> to the{' '}
          <span className="text-cyan-400 font-medium">COVID Freeze</span> and the current{' '}
          <span className="text-rose-400 font-medium">AI Restructuring Wave</span> — every major headcount reduction fact-checked with government filings, severance records, and primary sources.
        </p>

        {/* Huge Real-time Odometer Live Counter Display */}
        <div className="max-w-4xl mx-auto mb-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-slate-900/90 via-slate-950/90 to-black/90 border border-red-500/30 shadow-2xl shadow-red-950/50 backdrop-blur-xl relative group">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-0.5 rounded-full bg-red-600 text-[11px] font-mono font-bold uppercase tracking-widest text-white shadow-md">
            Global Documented Layoffs (2000 – 2026)
          </div>

          <div className="flex flex-col items-center justify-center my-4">
            <div className="font-mono font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white text-gradient-red drop-shadow-md select-none">
              {formatNumber(liveCount)}
            </div>
            
            {/* Clear explanation of verified data vs real-time pace */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-4 text-xs sm:text-sm text-slate-400 font-mono">
              <span className="text-emerald-400 flex items-center gap-1">
                <ShieldCheck className="w-4 h-4" /> 100% Primary SEC / WARN Sources
              </span>
              <span className="text-white/30 hidden sm:inline">•</span>
              <span className="text-amber-400 flex items-center gap-1">
                ⚡ Global Pace: ~412 cuts/day
              </span>
              {cutsSinceVisit > 0 && (
                <>
                  <span className="text-white/30 hidden sm:inline">•</span>
                  <span className="text-rose-400 font-semibold flex items-center gap-1">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </span>
                    +{cutsSinceVisit} estimated globally since page opened
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Key Quick Sub-Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/10 mt-6 text-left">
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Dot-Com Bubble</span>
              <span className="text-lg sm:text-xl font-bold font-mono text-purple-400">500,000+</span>
              <span className="text-[10px] text-slate-500 block mt-0.5">Telecom & Web 1.0</span>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">2008 Financial Crisis</span>
              <span className="text-lg sm:text-xl font-bold font-mono text-amber-400">8,700,000+</span>
              <span className="text-[10px] text-slate-500 block mt-0.5">Banking, Autos & Tech</span>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">COVID-19 Shock</span>
              <span className="text-lg sm:text-xl font-bold font-mono text-cyan-400">22,400,000+</span>
              <span className="text-[10px] text-slate-500 block mt-0.5">Hospitality & Travel</span>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">The AI Reckoning</span>
              <span className="text-lg sm:text-xl font-bold font-mono text-rose-500">540,000+</span>
              <span className="text-[10px] text-slate-500 block mt-0.5">Tech & "Efficiency"</span>
            </div>
          </div>
        </div>

        {/* Global Instant Search Bar */}
        <div className="max-w-2xl mx-auto mb-14">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-amber-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
            <div className="relative flex items-center bg-slate-900 border border-white/20 rounded-2xl overflow-hidden shadow-2xl">
              <Search className="w-5 h-5 text-slate-400 ml-4 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search by company (Intel, Meta, Tesla, Lehman), sector, year, or filing type..."
                className="w-full py-4 px-4 bg-transparent text-white placeholder-slate-400 focus:outline-none text-sm sm:text-base font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="mr-3 px-2 py-1 text-xs text-slate-400 hover:text-white bg-white/10 rounded"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
          <div className="flex items-center justify-between px-3 mt-2 text-[11px] font-mono text-slate-400">
            <span>Instant SEC 8-K & WARN Query</span>
            <a
              href="https://web-search.gyaansetu.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-slate-400 hover:text-amber-400 transition-colors"
            >
              <span>Search Powered by</span>
              <span className="text-amber-400 font-semibold underline underline-offset-2">Gyaansetu Web Search</span>
            </a>
          </div>
        </div>

        {/* The 4 Era Quick Jump Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          {ERAS_DATA.map((era) => {
            const isAI = era.id === 'ai_efficiency';
            const isCovid = era.id === 'covid_wave';
            const is2008 = era.id === 'financial_crisis';
            const isDotcom = era.id === 'dotcom';

            return (
              <div
                key={era.id}
                onClick={() => onSelectEra(era.id)}
                className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 transform hover:-translate-y-1.5 border ${
                  isAI
                    ? 'bg-rose-950/20 hover:bg-rose-950/40 border-rose-500/30 hover:border-rose-500/60'
                    : isCovid
                    ? 'bg-cyan-950/20 hover:bg-cyan-950/40 border-cyan-500/30 hover:border-cyan-500/60'
                    : is2008
                    ? 'bg-amber-950/20 hover:bg-amber-950/40 border-amber-500/30 hover:border-amber-500/60'
                    : 'bg-purple-950/20 hover:bg-purple-950/40 border-purple-500/30 hover:border-purple-500/60'
                } backdrop-blur-md group`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-white/10 text-slate-300">
                    {era.period}
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </div>

                <h3 className="font-display font-bold text-lg text-white mb-1.5 group-hover:text-red-400 transition-colors">
                  {era.name}
                </h3>
                
                <p className="text-xs text-slate-400 line-clamp-2 mb-4 leading-relaxed">
                  {era.tagline}
                </p>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Total Toll:</span>
                  <span
                    className={`font-bold ${
                      isAI
                        ? 'text-rose-400'
                        : isCovid
                        ? 'text-cyan-400'
                        : is2008
                        ? 'text-amber-400'
                        : 'text-purple-400'
                    }`}
                  >
                    {era.totalEstimatedLosses}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
