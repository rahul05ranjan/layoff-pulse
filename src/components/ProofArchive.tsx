import React, { useState, useMemo } from 'react';
import { LayoffRecord, EraId } from '../types';
import { 
  Building2, 
  Calendar, 
  MapPin, 
  FileText, 
  ExternalLink, 
  ShieldCheck, 
  Filter, 
  ArrowUpDown, 
  AlertCircle,
  Eye,
  CheckCircle2,
  Globe
} from 'lucide-react';

interface ProofArchiveProps {
  records: LayoffRecord[];
  searchQuery: string;
  selectedEraFilter: string;
  onSelectEraFilter: (era: string) => void;
  selectedRegionFilter: string;
  onSelectRegionFilter: (region: string) => void;
  onViewRecordDetail: (record: LayoffRecord) => void;
}

export const ProofArchive: React.FC<ProofArchiveProps> = ({
  records,
  searchQuery,
  selectedEraFilter,
  onSelectEraFilter,
  selectedRegionFilter,
  onSelectRegionFilter,
  onViewRecordDetail
}) => {
  const [selectedSector, setSelectedSector] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'headcount' | 'date' | 'percentage'>('date');

  // Available unique sectors
  const sectors = useMemo(() => {
    const list = Array.from(new Set(records.map((r) => r.sector)));
    return ['all', ...list];
  }, [records]);

  // Filtered & sorted records
  const filteredRecords = useMemo(() => {
    return records
      .filter((item) => {
        // Query search
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchCompany = item.company.toLowerCase().includes(q);
          const matchTicker = item.ticker?.toLowerCase().includes(q);
          const matchHeadline = item.headline.toLowerCase().includes(q);
          const matchReason = item.statedReason.toLowerCase().includes(q);
          const matchSector = item.sector.toLowerCase().includes(q);
          const matchCountry = item.country.toLowerCase().includes(q);
          const matchLocation = item.location.toLowerCase().includes(q);
          if (!matchCompany && !matchTicker && !matchHeadline && !matchReason && !matchSector && !matchCountry && !matchLocation) {
            return false;
          }
        }

        // Era filter
        if (selectedEraFilter !== 'all' && item.era !== selectedEraFilter) {
          return false;
        }

        // Region filter
        if (selectedRegionFilter !== 'all' && item.region !== selectedRegionFilter) {
          return false;
        }

        // Sector filter
        if (selectedSector !== 'all' && item.sector !== selectedSector) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'headcount') {
          return b.headcountCut - a.headcountCut;
        }
        if (sortBy === 'percentage') {
          return (b.percentageCut || 0) - (a.percentageCut || 0);
        }
        // default date descending
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
  }, [records, searchQuery, selectedEraFilter, selectedRegionFilter, selectedSector, sortBy]);

  const formatNumber = (num: number) => new Intl.NumberFormat('en-US').format(num);

  return (
    <section id="archive" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-950/60 border border-emerald-500/30 text-xs font-mono text-emerald-300 mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            100% SOURCED & VERIFIED DATABASE
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            The Verified Proof Ledger
          </h2>
        </div>
        <div className="text-right font-mono text-xs text-slate-400">
          Showing <span className="text-white font-bold">{filteredRecords.length}</span> of {records.length} cataloged global events
        </div>
      </div>

      {/* Filter and Sort Toolbar */}
      <div className="p-4 rounded-2xl bg-slate-900/90 border border-white/10 shadow-lg mb-8 space-y-4">
        {/* Top Filters: Era & Geographic Region */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          {/* Era Filter */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-mono text-slate-400 mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Era:
            </span>
            {[
              { id: 'all', label: 'All Eras' },
              { id: 'ai_efficiency', label: 'AI Era (2023+)' },
              { id: 'covid_wave', label: 'COVID Shock' },
              { id: 'financial_crisis', label: '2008 Crash' },
              { id: 'dotcom', label: 'Dot-Com' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => onSelectEraFilter(tab.id)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  selectedEraFilter === tab.id
                    ? 'bg-red-600 text-white font-semibold shadow-md'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Region Filter */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-mono text-slate-400 mr-1 flex items-center gap-1">
              <Globe className="w-3.5 h-3.5 text-blue-400" /> Region:
            </span>
            {[
              { id: 'all', label: 'Worldwide 🌐' },
              { id: 'India & South Asia', label: 'India 🇮🇳' },
              { id: 'Europe & UK', label: 'Europe 🇪🇺' },
              { id: 'East Asia & APAC', label: 'APAC 🌏' },
              { id: 'North America', label: 'N. America 🇺🇸' }
            ].map((reg) => (
              <button
                key={reg.id}
                onClick={() => onSelectRegionFilter(reg.id)}
                className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition-all ${
                  selectedRegionFilter === reg.id
                    ? 'bg-blue-600 text-white font-bold shadow-md'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10'
                }`}
              >
                {reg.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Toolbar: Sector, Sort, Clear */}
        <div className="pt-3 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {/* Sector select */}
            <select
              value={selectedSector}
              onChange={(e) => setSelectedSector(e.target.value)}
              className="bg-slate-950 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-slate-300 font-mono focus:outline-none focus:border-red-500"
            >
              <option value="all">All Industry Sectors</option>
              {sectors
                .filter((s) => s !== 'all')
                .map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
            </select>

            {/* Sort select */}
            <div className="flex items-center gap-1.5 bg-slate-950 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-slate-300 font-mono">
              <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent focus:outline-none cursor-pointer"
              >
                <option value="date" className="bg-slate-950">Most Recent Date</option>
                <option value="headcount" className="bg-slate-950">Largest Headcount</option>
                <option value="percentage" className="bg-slate-950">Highest % Cut</option>
              </select>
            </div>
          </div>

          {(selectedEraFilter !== 'all' || selectedRegionFilter !== 'all' || selectedSector !== 'all' || searchQuery) && (
            <button
              onClick={() => {
                onSelectEraFilter('all');
                onSelectRegionFilter('all');
                setSelectedSector('all');
              }}
              className="text-xs font-mono text-red-400 hover:text-red-300 underline"
            >
              Reset All Filters
            </button>
          )}
        </div>
      </div>

      {/* Records Grid */}
      {filteredRecords.length === 0 ? (
        <div className="p-12 text-center rounded-3xl bg-slate-900/40 border border-white/10">
          <AlertCircle className="w-10 h-10 text-slate-500 mx-auto mb-3" />
          <h4 className="font-display font-bold text-lg text-white mb-1">No verified events match filters</h4>
          <p className="text-xs text-slate-400 font-mono">Try adjusting your region, search keywords, or resetting filters.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredRecords.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-3xl bg-slate-900/70 border border-white/10 hover:border-red-500/30 transition-all duration-300 shadow-xl backdrop-blur-xl flex flex-col justify-between group"
            >
              <div>
                {/* Top Row: Flag, Company, Date & Severity */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xl" title={item.country}>{item.flag}</span>
                      <h3 className="font-display font-black text-xl text-white group-hover:text-red-400 transition-colors">
                        {item.company}
                      </h3>
                      {item.ticker && (
                        <span className="font-mono text-xs px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300">
                          {item.ticker}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-3 mt-1 text-xs text-slate-400 font-mono">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" /> {item.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" /> {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Cut Numbers Pill */}
                  <div className="text-right shrink-0">
                    <span className="font-mono font-black text-xl sm:text-2xl text-red-500 block">
                      -{formatNumber(item.headcountCut)}
                    </span>
                    {item.percentageCut && (
                      <span className="text-[11px] font-mono text-slate-400 block font-semibold">
                        ({item.percentageCut}% of staff)
                      </span>
                    )}
                  </div>
                </div>

                {/* Headline */}
                <p className="text-xs sm:text-sm font-semibold text-slate-200 mb-3 leading-snug">
                  {item.headline}
                </p>

                {/* Reason stated vs Executive Quote */}
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 mb-4">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                    Official Executive Justification:
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.statedReason}
                  </p>

                  {item.executiveQuote && (
                    <div className="mt-2.5 pt-2 border-t border-white/5 text-xs text-slate-400 italic">
                      "{item.executiveQuote.quote}"
                      <span className="block mt-1 font-mono text-[10px] text-red-400 not-italic font-semibold">
                        — {item.executiveQuote.speaker}, {item.executiveQuote.role}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Proof & Action Bar */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <CheckCircle2 className="w-3 h-3" /> {item.verificationStatus}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">
                    {item.sources.length} Verified Sources
                  </span>
                </div>

                <button
                  onClick={() => onViewRecordDetail(item)}
                  className="px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white text-white hover:text-slate-950 text-xs font-semibold font-mono flex items-center gap-1.5 transition-all"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect Filings</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
