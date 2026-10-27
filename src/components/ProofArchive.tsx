import React, { useState, useMemo, useEffect } from 'react';
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
  Globe,
  Download,
  Share2,
  Copy,
  Check,
  Star
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
  const [showWatchlistOnly, setShowWatchlistOnly] = useState<boolean>(false);
  const [watchlist, setWatchlist] = useState<string[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Load watchlist on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('layoffpulse_watchlist');
      if (saved) {
        setWatchlist(JSON.parse(saved));
      }
    } catch (e) {
      // ignore
    }
  }, []);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Toggle watchlist
  const toggleWatchlist = (company: string, e: React.MouseEvent) => {
    e.stopPropagation();
    let updated: string[];
    if (watchlist.includes(company)) {
      updated = watchlist.filter((c) => c !== company);
      triggerToast(`Removed ${company} from your watchlist.`);
    } else {
      updated = [...watchlist, company];
      triggerToast(`⭐ Added ${company} to your watchlist!`);
    }
    setWatchlist(updated);
    try {
      localStorage.setItem('layoffpulse_watchlist', JSON.stringify(updated));
    } catch (e) {
      // ignore
    }
  };

  // Available unique sectors
  const sectors = useMemo(() => {
    const list = Array.from(new Set(records.map((r) => r.sector)));
    return ['all', ...list];
  }, [records]);

  // Filtered & sorted records
  const filteredRecords = useMemo(() => {
    return records
      .filter((item) => {
        // Watchlist filter
        if (showWatchlistOnly && !watchlist.includes(item.company)) {
          return false;
        }

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
  }, [records, searchQuery, selectedEraFilter, selectedRegionFilter, selectedSector, sortBy, showWatchlistOnly, watchlist]);

  // Format numbers with commas
  const formatNumber = (num: number) => new Intl.NumberFormat('en-US').format(num);

  // 1-Click CSV Export
  const handleExportCSV = () => {
    const datasetToExport = filteredRecords.length > 0 ? filteredRecords : records;
    const headers = [
      'ID',
      'Company',
      'Ticker',
      'Sector',
      'Headcount Cut',
      'Percentage Cut',
      'Date Announced',
      'Year',
      'Era',
      'Region',
      'Country',
      'Location',
      'Verification Status',
      'Executive Reason Given',
      'Primary Filing Source URL'
    ];

    const rows = datasetToExport.map((r) => [
      `"${r.id}"`,
      `"${r.company.replace(/"/g, '""')}"`,
      `"${r.ticker || ''}"`,
      `"${r.sector}"`,
      r.headcountCut,
      r.percentageCut || '',
      `"${r.date}"`,
      r.year,
      `"${r.era}"`,
      `"${r.region}"`,
      `"${r.country}"`,
      `"${r.location.replace(/"/g, '""')}"`,
      `"${r.verificationStatus}"`,
      `"${r.statedReason.replace(/"/g, '""')}"`,
      `"${r.sources[0]?.url || ''}"`
    ]);

    const csvContent = [headers.join(','), ...rows.map((row) => row.join(','))].join('\r\n');
    const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `layoffpulse-verified-dataset-${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    triggerToast(`Exported ${datasetToExport.length} verified records to CSV!`);
  };

  // 1-Click JSON Export
  const handleExportJSON = () => {
    const datasetToExport = filteredRecords.length > 0 ? filteredRecords : records;
    const jsonString = JSON.stringify(datasetToExport, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `layoffpulse-dataset-${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    triggerToast(`Exported ${datasetToExport.length} records to JSON!`);
  };

  // Copy Citation Card
  const handleCopyCard = (item: LayoffRecord, e: React.MouseEvent) => {
    e.stopPropagation();
    const text = `🚨 [Verified Layoff Dossier] ${item.company} (${item.flag} ${item.country})
📉 Workforce Cut: -${formatNumber(item.headcountCut)} employees ${item.percentageCut ? `(${item.percentageCut}% of staff)` : ''}
📅 Date: ${item.date} | Sector: ${item.sector}
🏛️ Primary Filing: ${item.sources[0]?.title} (${item.verificationStatus})
🔍 Full dossier fact-checked on LayoffPulse:
https://layoff-pulse.pages.dev`;

    navigator.clipboard.writeText(text);
    setCopiedId(item.id);
    triggerToast(`Copied ${item.company} citation to clipboard!`);
    setTimeout(() => setCopiedId(null), 2500);
  };

  // Direct Share to X / Twitter
  const handleShareOnX = (item: LayoffRecord, e: React.MouseEvent) => {
    e.stopPropagation();
    const tweet = `🚨 Verified Layoff: ${item.company} announced -${formatNumber(item.headcountCut)} workforce cuts (${item.percentageCut ? item.percentageCut + '%' : 'impact'}).

Fact-checked with official SEC/WARN records on @LayoffPulse:
https://layoff-pulse.pages.dev`;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}`, '_blank');
  };

  return (
    <section id="archive" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10 relative">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 px-4 py-2.5 rounded-xl bg-slate-900 border border-emerald-500/40 text-emerald-300 font-mono text-xs shadow-2xl flex items-center gap-2 animate-in slide-in-from-bottom-5">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

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
          <p className="text-slate-400 text-sm max-w-2xl mt-1 font-body">
            Every entry cross-referenced with US SEC 8-K filings, State WARN registrations, and court disclosures.
          </p>
        </div>

        {/* Action Buttons: Export & Count */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Export CSV */}
          <button
            onClick={handleExportCSV}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-200 transition-all shadow-sm hover:border-emerald-500/30"
            title="Download current filtered dataset in CSV format"
          >
            <Download className="w-3.5 h-3.5 text-emerald-400" />
            <span>Export CSV</span>
          </button>

          {/* Export JSON */}
          <button
            onClick={handleExportJSON}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-200 transition-all shadow-sm hover:border-blue-500/30"
            title="Download dataset in raw JSON format"
          >
            <Download className="w-3.5 h-3.5 text-blue-400" />
            <span>Export JSON</span>
          </button>

          <div className="text-right font-mono text-xs text-slate-400 ml-2">
            Showing <span className="text-white font-bold">{filteredRecords.length}</span> of {records.length} events
          </div>
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
                    ? 'bg-rose-600 text-white font-semibold shadow-md'
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

        {/* Bottom Toolbar: Sector, Sort, Watchlist Toggle & Reset */}
        <div className="pt-3 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-3">
            {/* Watchlist Toggle */}
            <button
              onClick={() => setShowWatchlistOnly(!showWatchlistOnly)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                showWatchlistOnly
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-semibold'
                  : 'bg-slate-950 border border-white/10 text-slate-400 hover:text-white'
              }`}
            >
              <Star className={`w-3.5 h-3.5 ${showWatchlistOnly ? 'fill-amber-400 text-amber-400' : ''}`} />
              <span>Watchlist ({watchlist.length})</span>
            </button>

            {/* Sector select */}
            <select
              value={selectedSector}
              onChange={(e) => setSelectedSector(e.target.value)}
              className="bg-slate-950 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-slate-300 font-mono focus:outline-none focus:border-rose-500"
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

          {(selectedEraFilter !== 'all' || selectedRegionFilter !== 'all' || selectedSector !== 'all' || searchQuery || showWatchlistOnly) && (
            <button
              onClick={() => {
                onSelectEraFilter('all');
                onSelectRegionFilter('all');
                setSelectedSector('all');
                setShowWatchlistOnly(false);
              }}
              className="text-xs font-mono text-rose-400 hover:text-rose-300 underline"
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
          <p className="text-xs text-slate-400 font-mono">
            {showWatchlistOnly ? "You haven't starred any companies yet! Click the star icon on any card to pin it here." : "Try adjusting your region, search keywords, or resetting filters."}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredRecords.map((item) => {
            const isStarred = watchlist.includes(item.company);
            const isCopied = copiedId === item.id;

            return (
              <div
                key={item.id}
                className="p-6 rounded-3xl bg-slate-900/70 border border-white/10 hover:border-rose-500/30 transition-all duration-300 shadow-xl backdrop-blur-xl flex flex-col justify-between group"
              >
                <div>
                  {/* Top Row: Flag, Company, Star & Cut Numbers */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xl" title={item.country}>{item.flag}</span>
                        <h3 className="font-display font-black text-xl text-white group-hover:text-rose-400 transition-colors">
                          {item.company}
                        </h3>
                        {item.ticker && (
                          <span className="font-mono text-xs px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300">
                            {item.ticker}
                          </span>
                        )}
                        {/* Star Watchlist Button */}
                        <button
                          onClick={(e) => toggleWatchlist(item.company, e)}
                          className="p-1 rounded-lg text-slate-500 hover:text-amber-400 transition-colors"
                          title={isStarred ? 'Remove from Watchlist' : 'Star company to Watchlist'}
                        >
                          <Star className={`w-4 h-4 ${isStarred ? 'fill-amber-400 text-amber-400' : ''}`} />
                        </button>
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
                      <span className="font-mono font-black text-xl sm:text-2xl text-rose-500 block">
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
                        <span className="block mt-1 font-mono text-[10px] text-rose-400 not-italic font-semibold">
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

                  {/* Right actions: Copy card, Share on X, Inspect */}
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={(e) => handleCopyCard(item, e)}
                      className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                      title="Copy formatted citation card"
                    >
                      {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>

                    <button
                      onClick={(e) => handleShareOnX(item, e)}
                      className="p-2 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 transition-colors"
                      title="Share to Twitter / X"
                    >
                      <Share2 className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => onViewRecordDetail(item)}
                      className="px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white text-white hover:text-slate-950 text-xs font-semibold font-mono flex items-center gap-1.5 transition-all"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect Filings</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};
