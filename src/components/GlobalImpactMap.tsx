import React from 'react';
import { Globe, ShieldCheck, MapPin, ExternalLink, ArrowRight } from 'lucide-react';
import { GLOBAL_REGION_STATS } from '../data/layoffsData';
import { GeographicRegion } from '../types';

interface GlobalImpactMapProps {
  onSelectRegion: (region: string) => void;
  selectedRegion: string;
}

export const GlobalImpactMap: React.FC<GlobalImpactMapProps> = ({
  onSelectRegion,
  selectedRegion
}) => {
  return (
    <section id="global-scope" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-xs font-mono text-blue-300 mb-3">
            <Globe className="w-3.5 h-3.5 text-blue-400" />
            WORLDWIDE COVERAGE ARCHIVE
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Global Geographic Footprint
          </h2>
        </div>
        <p className="text-sm text-slate-400 max-w-md font-mono">
          Corporate workforce purges are rarely isolated to one nation. Track documented cutbacks across North America, Europe, India, Asia-Pacific, and Latin America.
        </p>
      </div>

      {/* Global Regional Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        {GLOBAL_REGION_STATS.map((stat) => {
          const isSelected = selectedRegion === stat.region;
          return (
            <div
              key={stat.region}
              onClick={() => onSelectRegion(stat.region)}
              className={`p-5 rounded-2xl cursor-pointer transition-all border flex flex-col justify-between ${
                isSelected
                  ? 'bg-slate-900 border-red-500 shadow-xl shadow-red-950/40 translate-y-[-3px]'
                  : 'bg-slate-950/70 border-white/10 hover:border-white/20 hover:bg-slate-900/50'
              } backdrop-blur-md group`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl">{stat.flag}</span>
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-white/10 text-slate-300 font-bold">
                    {stat.sharePercentage}%
                  </span>
                </div>

                <h4 className="font-display font-bold text-base text-white mb-1 group-hover:text-red-400 transition-colors">
                  {stat.label.split(' (')[0]}
                </h4>

                <span className="font-mono text-xl font-extrabold text-gradient-red block my-1">
                  {stat.estimatedTotal}
                </span>

                <div className="mt-3 space-y-1 text-[11px] text-slate-400 font-mono">
                  <span className="text-slate-500 block">Primary Tech Hubs:</span>
                  <p className="text-slate-300 line-clamp-2">
                    {stat.keyHubs.join(', ')}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-white">
                <span>Filter Ledger</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Multi-Jurisdiction Regulatory Verification Banner */}
      <div className="p-6 rounded-3xl bg-slate-900/50 border border-white/10 backdrop-blur-xl flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 text-emerald-400">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-display font-bold text-lg text-white mb-1">
              Cross-Border Regulatory Fact-Checking
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
              Unlike single-country layoff trackers, our verification pipeline monitors official statutory filings across international labor authorities: <strong className="text-white">US SEC & State WARN Acts</strong>, <strong className="text-white">UK Insolvency Service HR1 notifications</strong>, <strong className="text-white">German BetrVG works council registries</strong>, <strong className="text-white">Indian Ministry of Corporate Affairs / NCLT court filings</strong>, and <strong className="text-white">Singapore Ministry of Manpower (MOM) retrenchment logs</strong>.
            </p>
          </div>
        </div>

        {selectedRegion !== 'all' && (
          <button
            onClick={() => onSelectRegion('all')}
            className="shrink-0 px-4 py-2 rounded-xl bg-white/10 hover:bg-white text-white hover:text-slate-950 font-mono text-xs font-bold transition-all"
          >
            Show All Global Regions
          </button>
        )}
      </div>
    </section>
  );
};
