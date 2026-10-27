import React, { useState } from 'react';
import { Terminal, Sparkles, Scale, AlertTriangle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { LayoffAIEngine, SpinDecodeResult } from '../services/aiService';

export const MemoSpinDecoder: React.FC = () => {
  const sampleMemos = [
    {
      title: 'Mark Zuckerberg (Meta 2023)',
      text: 'We are making the decision to significantly reduce our team by 10,000 people and declare this our Year of Efficiency to make us a better technology company and improve our financial performance.'
    },
    {
      title: 'Sundar Pichai (Google 2023)',
      text: 'Over the past two years we’ve seen periods of dramatic growth. To match and fuel that growth, we hired for a different economic reality than the one we face today. I take full responsibility for the decisions that brought us here.'
    },
    {
      title: 'Intuit Executive Memo (2024)',
      text: 'We are eliminating 1,800 roles to address underperformance and reprioritize our investment toward hiring engineers and product leaders dedicated to Artificial Intelligence innovation.'
    }
  ];

  const [inputText, setInputText] = useState(sampleMemos[0].text);
  const [result, setResult] = useState<SpinDecodeResult | null>(() => 
    LayoffAIEngine.decodeExecutiveMemo(sampleMemos[0].text)
  );

  const handleDecode = () => {
    if (!inputText.trim()) return;
    const res = LayoffAIEngine.decodeExecutiveMemo(inputText);
    setResult(res);
  };

  return (
    <section id="memo-decoder" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-500/30 text-xs font-mono text-amber-300 mb-3">
          <Terminal className="w-3.5 h-3.5 text-amber-400" />
          LLM CORPORATE JARGON TRANSLATOR
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-3">
          The Corporate PR Spin Decoder
        </h2>
        <p className="text-slate-300 text-sm sm:text-base font-normal">
          Paste any executive layoff memo or PR statement. Our forensic LLM strips away corporate euphemisms like "right-sizing" and "flattening layers" to reveal the balance-sheet truth.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Input and Sample Memos */}
        <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-white/10 shadow-xl backdrop-blur-xl">
          <div className="mb-4">
            <span className="text-xs font-mono text-slate-400 block mb-2 font-semibold">
              Load an Authentic CEO Layoff Statement:
            </span>
            <div className="flex flex-wrap gap-2 mb-4">
              {sampleMemos.map((memo, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setInputText(memo.text);
                    setResult(LayoffAIEngine.decodeExecutiveMemo(memo.text));
                  }}
                  className="px-3 py-1.5 rounded-lg text-xs bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all font-mono"
                >
                  {memo.title}
                </button>
              ))}
            </div>
          </div>

          <label className="block text-xs font-mono text-slate-300 mb-2 font-semibold">
            Or Paste Custom Corporate Euphemism:
          </label>
          <textarea
            rows={5}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Paste text containing terms like 'synergies', 'macro headwinds', 'efficiency', or 're-aligning'..."
            className="w-full p-4 rounded-xl bg-slate-950 border border-white/15 text-slate-200 text-sm focus:outline-none focus:border-amber-400 transition-colors font-mono resize-none leading-relaxed"
          />

          <button
            onClick={handleDecode}
            className="w-full mt-4 py-3 px-4 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-bold text-xs sm:text-sm font-mono flex items-center justify-center gap-2 shadow-lg shadow-amber-600/20 transition-all"
          >
            <Sparkles className="w-4 h-4" />
            <span>Decode Executive Doublespeak with AI</span>
          </button>
        </div>

        {/* Right Column: Decoded Reality Output */}
        {result && (
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-slate-950 border border-amber-500/30 shadow-2xl backdrop-blur-xl space-y-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Forensic Translation Complete
              </span>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-slate-400">Hypocrisy Score:</span>
                <span className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-red-500/20 text-red-400 border border-red-500/40">
                  {result.hypocrisyScore}/10
                </span>
              </div>
            </div>

            {/* Decoded Plain English */}
            <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-500/20">
              <span className="text-[11px] font-mono text-amber-300 uppercase tracking-wider block mb-1 font-bold">
                🗣️ What Corporate Leadership Actually Meant:
              </span>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-normal">
                {result.decodedMeaning}
              </p>
            </div>

            {/* Financial Reality Fact-Check */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-xs text-slate-300">
              <span className="text-[11px] font-mono text-red-400 uppercase tracking-wider block mb-1 font-bold">
                ⚖️ The SEC Balance Sheet Reality:
              </span>
              <p className="leading-relaxed">{result.financialReality}</p>
            </div>

            <div className="text-[11px] font-mono text-slate-500 pt-2 border-t border-white/5">
              Source Authority: {result.secEvidence}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
