import React, { useState } from 'react';
import { LayoffRecord } from '../types';
import { 
  X, 
  ExternalLink, 
  FileCheck2, 
  ShieldCheck, 
  Copy, 
  Check, 
  DollarSign, 
  Quote, 
  Building2, 
  Calendar,
  AlertTriangle
} from 'lucide-react';

interface ProofDetailModalProps {
  record: LayoffRecord | null;
  onClose: () => void;
}

export const ProofDetailModal: React.FC<ProofDetailModalProps> = ({ record, onClose }) => {
  const [copied, setCopied] = useState<boolean>(false);

  if (!record) return null;

  const handleCopyCitation = () => {
    const text = `[Verified Layoff Record] ${record.company} (${record.year}): ${record.headcountCut.toLocaleString()} jobs cut. Primary SEC/WARN Sources: ${record.sources.map(s => s.title + ' (' + s.url + ')').join('; ')}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formatNumber = (num: number) => new Intl.NumberFormat('en-US').format(num);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity" 
        onClick={onClose} 
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl rounded-3xl bg-slate-950 border border-white/20 shadow-2xl p-6 sm:p-8 overflow-hidden z-10 max-h-[90vh] flex flex-col justify-between">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto pr-1">
          {/* Header pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-mono mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>PRIMARY EVIDENCE DOSSIER</span>
            <span>•</span>
            <span className="font-bold">{record.verificationStatus}</span>
          </div>

          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
            <h2 className="font-display font-black text-2xl sm:text-3xl text-white">
              {record.company}
            </h2>
            <div className="text-right">
              <span className="font-mono text-2xl sm:text-3xl font-extrabold text-red-500">
                -{formatNumber(record.headcountCut)}
              </span>
              {record.percentageCut && (
                <span className="font-mono text-xs text-slate-400 ml-2 font-semibold">
                  ({record.percentageCut}% of workforce)
                </span>
              )}
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-400 font-mono mb-6">
            Date Announced: {record.date} • Location: {record.location} • Sector: {record.sector}
          </p>

          {/* Headline */}
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 mb-6">
            <h4 className="font-display font-bold text-base text-white mb-2">
              {record.headline}
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {record.statedReason}
            </p>
          </div>

          {/* Executive Statement */}
          {record.executiveQuote && (
            <div className="p-4 rounded-2xl bg-slate-900 border border-white/5 mb-6 relative">
              <Quote className="w-6 h-6 text-white/10 absolute top-3 right-3" />
              <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                Executive Memo / Direct Quote:
              </div>
              <p className="text-xs sm:text-sm text-slate-200 italic mb-2">
                "{record.executiveQuote.quote}"
              </p>
              <div className="text-xs font-mono text-red-400 font-semibold">
                — {record.executiveQuote.speaker}, {record.executiveQuote.role}
              </div>
            </div>
          )}

          {/* Financial & Wall Street Context */}
          {record.financialContext && (
            <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-500/20 mb-6">
              <div className="text-[11px] font-mono text-amber-400 uppercase tracking-wider mb-2 font-bold flex items-center gap-1.5">
                <DollarSign className="w-4 h-4" /> Market & Financial Performance Context:
              </div>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {record.financialContext.stockTrend && (
                  <li>• <strong className="text-white">Stock Reaction:</strong> {record.financialContext.stockTrend}</li>
                )}
                {record.financialContext.profitOrRevenue && (
                  <li>• <strong className="text-white">Earnings Reality:</strong> {record.financialContext.profitOrRevenue}</li>
                )}
                {record.financialContext.buybackOrCeoPay && (
                  <li>• <strong className="text-white">Capital Allocation / Executive Compensation:</strong> {record.financialContext.buybackOrCeoPay}</li>
                )}
              </ul>
            </div>
          )}

          {/* Primary Verified Evidence Sources */}
          <div className="mb-6">
            <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-3 font-semibold flex items-center gap-1.5">
              <FileCheck2 className="w-4 h-4 text-emerald-400" /> Primary Filings & Proof Documents ({record.sources.length}):
            </h4>
            
            <div className="space-y-2.5">
              {record.sources.map((source, idx) => (
                <a
                  key={idx}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/90 border border-white/10 hover:border-red-500/50 hover:bg-slate-800 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-white/10 text-slate-300">
                      {source.sourceType}
                    </span>
                    <div>
                      <span className="text-xs sm:text-sm font-medium text-white group-hover:text-red-400 transition-colors block">
                        {source.title}
                      </span>
                      <span className="text-[11px] font-mono text-slate-500 block">
                        Archive Record ID: {source.archiveId} • Cited: {source.dateCited}
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white shrink-0 ml-2" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyCitation}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs sm:text-sm font-mono text-slate-300 hover:text-white transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Citation Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Citation</span>
                </>
              )}
            </button>

            <button
              onClick={() => {
                const tweetText = `🚨 Verified Layoff: ${record.company} cut ${record.headcountCut.toLocaleString()} employees (${record.percentageCut ? record.percentageCut + '% of staff' : 'reported'}).\n\nFact-checked with SEC 8-K / WARN filings on @LayoffPulse:\nhttps://layoff-pulse.pages.dev`;
                window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`, '_blank');
              }}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 border border-sky-500/30 text-xs sm:text-sm font-mono transition-colors"
              title="Share verified dossier to Twitter / X"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Share on X</span>
            </button>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-white hover:bg-slate-200 text-slate-950 text-xs sm:text-sm font-bold transition-all"
          >
            Close Dossier
          </button>
        </div>
      </div>
    </div>
  );
};
