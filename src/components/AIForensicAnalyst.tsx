import React, { useState } from 'react';
import { Bot, Send, Sparkles, FileText, ExternalLink, ShieldAlert, CheckCircle2, DollarSign, CornerDownLeft } from 'lucide-react';
import { LayoffAIEngine, AIResponse } from '../services/aiService';

export const AIForensicAnalyst: React.FC = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<AIResponse | null>(null);

  const sampleQuestions = [
    '🤖 Which tech layoffs explicitly cited AI replacement?',
    '⚖️ How much did Big Tech spend on stock buybacks vs severance?',
    '🇮🇳 What caused Byju\'s and Indian tech layoffs?',
    '📉 Compare Dot-Com crash with the 2024 AI wave',
    '🔍 Why did Intel cut 15,000 workers despite CHIPS Act subsidies?'
  ];

  const handleAsk = async (textToAsk: string) => {
    if (!textToAsk.trim()) return;
    setLoading(true);
    setQuery(textToAsk);
    try {
      const res = await LayoffAIEngine.queryArchive(textToAsk);
      setResponse(res);
    } catch (err) {
      // ignore
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-analyst" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-950/60 border border-rose-500/30 text-xs font-mono text-rose-300 mb-3">
            <Bot className="w-3.5 h-3.5 text-rose-400" />
            LLM-POWERED FORENSIC ENGINE
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            AI Forensic Layoff Analyst
          </h2>
        </div>
        <p className="text-sm text-slate-400 max-w-md font-mono">
          Query 26 years of corporate layoffs with natural language. Every answer is cross-referenced with official SEC 8-K filings and government WARN registers.
        </p>
      </div>

      {/* Main Terminal Window */}
      <div className="rounded-3xl bg-slate-950 border border-white/15 p-6 sm:p-8 shadow-2xl backdrop-blur-xl relative overflow-hidden">
        {/* Glow accent */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

        {/* Preset Prompt Chips */}
        <div className="mb-6">
          <span className="text-xs font-mono text-slate-400 mb-2.5 block font-semibold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Suggested Forensic Inquiries:
          </span>
          <div className="flex flex-wrap gap-2">
            {sampleQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleAsk(q)}
                className="px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-xs text-slate-300 hover:text-white transition-all text-left"
              >
                {q}
              </button>
            ))}
          </div>
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAsk(query);
          }}
          className="relative mb-6"
        >
          <div className="relative flex items-center bg-slate-900 border border-white/20 rounded-2xl overflow-hidden focus-within:border-red-500 transition-colors shadow-inner">
            <Bot className="w-5 h-5 text-slate-400 ml-4 shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask anything (e.g. 'Compare Meta and Google layoffs' or 'What happened to Pets.com?')..."
              className="w-full py-3.5 px-4 bg-transparent text-white placeholder-slate-500 focus:outline-none text-sm font-medium"
            />
            <button
              type="submit"
              disabled={loading || !query.trim()}
              className="mr-2 px-4 py-2 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-mono text-xs font-bold disabled:opacity-40 flex items-center gap-1.5 transition-all"
            >
              <span>{loading ? 'Synthesizing...' : 'Analyze'}</span>
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </div>
        </form>

        {/* AI Output Stream Box */}
        {response && (
          <div className="mt-6 p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/5 pb-3">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>SEC & WARN Grounded Response</span>
              </div>
              <a
                href="https://web-search.gyaansetu.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/25 text-amber-300 hover:text-amber-200 text-[11px] font-mono font-semibold transition-all"
              >
                <span>Agent Retrieval Powered by Gyaansetu Web Search</span>
                <ExternalLink className="w-3 h-3 opacity-70" />
              </a>
            </div>

            {/* Answer Text */}
            <div className="text-slate-200 text-sm leading-relaxed whitespace-pre-line font-normal">
              {response.answer}
            </div>

            {/* Financial Reality Fact-Check Callout */}
            {response.financialFactCheck && (
              <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/20 text-xs text-slate-300">
                <span className="font-mono text-red-400 font-bold block mb-1 flex items-center gap-1.5">
                  <DollarSign className="w-4 h-4" /> SEC Filing Fact-Check Reality:
                </span>
                <p>{response.financialFactCheck}</p>
                {response.discrepancyIndex && (
                  <p className="mt-1 text-amber-300 font-semibold">{response.discrepancyIndex}</p>
                )}
              </div>
            )}

            {/* Cited Primary Filings */}
            {response.citedRecords && response.citedRecords.length > 0 && (
              <div className="pt-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2 font-semibold">
                  Primary Source Footnotes ({response.citedRecords.length}):
                </span>
                <div className="flex flex-wrap gap-2">
                  {response.citedRecords.map((cite, i) => (
                    <a
                      key={i}
                      href={cite.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-slate-300 hover:text-white transition-all font-mono"
                    >
                      <FileText className="w-3 h-3 text-emerald-400" />
                      <span>{cite.company} ({cite.year}): {cite.cuts.toLocaleString()} cuts</span>
                      <ExternalLink className="w-3 h-3 text-slate-500" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
