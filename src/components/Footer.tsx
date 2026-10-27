import React from 'react';
import { ShieldCheck, Zap, Github, Heart, Database, BookOpen, Sparkles, ExternalLink } from 'lucide-react';
import { POWERED_BY_CONFIG } from '../types';

interface FooterProps {
  onOpenReportModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReportModal }) => {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-slate-400 py-16 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Methodology & Fact-Checking Standard (Inspired by Jhooth Ki Goonj) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8 rounded-3xl bg-slate-900/40 border border-white/10 mb-12">
          <div>
            <div className="flex items-center gap-2 text-white font-display font-bold text-base mb-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span>How We Source</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Every single counter-point and layoff headcount on this platform carries a numbered reference to a mandatory government filing: SEC Form 8-K, State Department of Labor WARN notices, or signed executive communications. No source, no entry.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 text-white font-display font-bold text-base mb-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span>Gyaansetu Web Search</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-3">
              Web search and factual passage retrieval for our AI agents is powered by <a href={POWERED_BY_CONFIG.url} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 underline font-semibold">Gyaansetu Web Search API</a>, delivering verified passages instead of plain links.
            </p>
            <a
              href={POWERED_BY_CONFIG.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] font-mono text-amber-400 hover:text-amber-300 font-bold"
            >
              <span>Explore Gyaansetu Search API</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div>
            <div className="flex items-center gap-2 text-white font-display font-bold text-base mb-2">
              <BookOpen className="w-5 h-5 text-purple-400" />
              <span>Why Real Numbers Matter</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Corporate press releases frequently sanitize mass dismissals with phrases like "optimizing resource allocation" or "streamlining organizational layers." We document the exact human count and financial context behind the spin.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 text-white font-display font-bold text-base mb-2">
              <Database className="w-5 h-5 text-cyan-400" />
              <span>Cloudflare Edge Stack</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Built on the Cloudflare developer stack. Deployed across Cloudflare's ultra-fast global network spanning 330+ cities, ensuring sub-50ms latency, zero cold starts, and resilience under high traffic.
            </p>
          </div>
        </div>

        {/* Bottom Bar with Powered By Gyaansetu */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-white/5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-display font-extrabold text-lg text-white">
              Layoff<span className="text-red-500">Pulse</span>
            </span>
            <span className="text-xs font-mono text-slate-500">
              The 2000–2026 Workforce Reckoning Archive
            </span>
            <span className="text-white/20 hidden sm:inline">•</span>
            <a
              href={POWERED_BY_CONFIG.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 hover:text-amber-200 text-xs font-mono font-semibold transition-all"
            >
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>Powered by Gyaansetu Web Search</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <button
              onClick={onOpenReportModal}
              className="text-red-400 hover:text-red-300 transition-colors font-semibold"
            >
              Expose a Layoff (Submit Tip)
            </button>
            <span>•</span>
            <span className="text-slate-500">
              Public Interest Open Data Project
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
