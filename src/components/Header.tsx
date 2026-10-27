import React from 'react';
import { ShieldAlert, TrendingDown, ExternalLink, Zap, Globe, Bot, Sparkles } from 'lucide-react';
import { POWERED_BY_CONFIG } from '../types';

interface HeaderProps {
  onOpenReportModal: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenReportModal, activeSection, onNavigate }) => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-slate-950/80 border-b border-white/10 transition-all">
      {/* Top breaking news / live ticker banner */}
      <div className="bg-gradient-to-r from-red-950/70 via-neutral-900 to-red-950/70 border-b border-red-500/20 px-4 py-1.5 text-xs text-slate-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between overflow-x-auto gap-4 scrollbar-none">
          <div className="flex items-center gap-2 shrink-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="font-mono font-semibold text-red-400 uppercase tracking-wider text-[11px]">WORLDWIDE WORKFORCE RECKONING</span>
            <span className="text-white/40">|</span>
            <span className="text-slate-300">2,480,000+ Verified Global Cuts (2000–2026)</span>
          </div>

          <div className="flex items-center gap-3 shrink-0 font-mono text-[11px] text-slate-400">
            <a
              href={POWERED_BY_CONFIG.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 hover:text-amber-200 transition-all font-semibold"
            >
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>Powered by Gyaansetu Web Search</span>
              <ExternalLink className="w-2.5 h-2.5 opacity-60" />
            </a>
            <span className="text-white/40 hidden sm:inline">•</span>
            <span className="hidden sm:flex items-center gap-1 text-emerald-400">
              <Zap className="w-3 h-3 text-amber-400" /> Cloudflare Edge
            </span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('hero')}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-rose-700 flex items-center justify-center shadow-lg shadow-red-500/20 border border-red-400/30">
            <TrendingDown className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-extrabold text-xl tracking-tight text-white">
                Layoff<span className="text-red-500">Pulse</span>
              </span>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-500/10 text-blue-400 border border-blue-500/30">
                GLOBAL AI EDITION 🌐
              </span>
            </div>
            <p className="text-[11px] text-slate-400 hidden sm:block font-mono">
              26 Years of Worldwide Corporate Cuts (2000 – 2026)
            </p>
          </div>
        </div>

        {/* Center navigation links */}
        <nav className="hidden lg:flex items-center gap-1 font-medium text-sm text-slate-300">
          <button
            onClick={() => onNavigate('hero')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              activeSection === 'hero' ? 'bg-white/10 text-white' : 'hover:text-white hover:bg-white/5'
            }`}
          >
            Live Pulse
          </button>
          <button
            onClick={() => onNavigate('eras')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              activeSection === 'eras' ? 'bg-white/10 text-white' : 'hover:text-white hover:bg-white/5'
            }`}
          >
            The 4 Eras
          </button>
          <button
            onClick={() => onNavigate('global-scope')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              activeSection === 'global-scope' ? 'bg-white/10 text-white' : 'hover:text-white hover:bg-white/5'
            }`}
          >
            World Scope
          </button>
          <button
            onClick={() => onNavigate('archive')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              activeSection === 'archive' ? 'bg-white/10 text-white' : 'hover:text-white hover:bg-white/5'
            }`}
          >
            Proof Archive
          </button>
          <button
            onClick={() => onNavigate('hypocrisy')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              activeSection === 'hypocrisy' ? 'bg-white/10 text-white' : 'hover:text-white hover:bg-white/5'
            }`}
          >
            Profits vs Cuts
          </button>
          <button
            onClick={() => onNavigate('ai-analyst')}
            className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 text-rose-300 font-semibold ${
              activeSection === 'ai-analyst' ? 'bg-rose-500/20 text-white' : 'hover:text-white hover:bg-white/5'
            }`}
          >
            <Bot className="w-3.5 h-3.5 text-rose-400" />
            AI Analyst
          </button>
          <button
            onClick={() => onNavigate('calculator')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              activeSection === 'calculator' ? 'bg-white/10 text-white' : 'hover:text-white hover:bg-white/5'
            }`}
          >
            Severance Tool
          </button>
        </nav>

        {/* Action buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onOpenReportModal}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white shadow-lg shadow-red-600/25 border border-red-400/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <ShieldAlert className="w-4 h-4 text-rose-200" />
            <span>Submit Layoff Tip</span>
          </button>
        </div>
      </div>
    </header>
  );
};
