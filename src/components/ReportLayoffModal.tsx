import React, { useState } from 'react';
import { X, ShieldAlert, CheckCircle2, Send, AlertTriangle, Link2, Building } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ReportLayoffModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitReport: (data: any) => void;
}

export const ReportLayoffModal: React.FC<ReportLayoffModalProps> = ({
  isOpen,
  onClose,
  onSubmitReport
}) => {
  const [company, setCompany] = useState('');
  const [headcount, setHeadcount] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [sourceUrl, setSourceUrl] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!company.trim() || !sourceUrl.trim()) return;

    // Trigger celebratory/solidarity confetti
    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // ignore
    }

    onSubmitReport({
      company,
      headcount: parseInt(headcount) || 0,
      date,
      sourceUrl,
      notes
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity" 
        onClick={onClose} 
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl rounded-3xl bg-slate-950 border border-red-500/30 shadow-2xl p-6 sm:p-8 z-10">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-10 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/40">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-display font-extrabold text-2xl text-white mb-2">
              Submission Received
            </h3>
            <p className="text-sm text-slate-300 font-mono max-w-md mx-auto leading-relaxed">
              Thank you for contributing to public transparency. Our fact-checking team verifies every submission against state WARN registers and SEC EDGAR filings before publishing.
            </p>
          </div>
        ) : (
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-500/30 text-xs font-mono text-red-300 mb-3">
              <ShieldAlert className="w-3.5 h-3.5 text-red-400" />
              CONFIDENTIAL TIP LINE
            </div>

            <h3 className="font-display font-black text-2xl sm:text-3xl text-white mb-2">
              Report a Layoff with Proof
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6 font-mono">
              Help maintain the world's most accurate public record of workforce reductions. No unsubstantiated rumors — proof URL is mandatory.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
              <div>
                <label className="block text-slate-300 mb-1.5 font-bold">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="e.g. Acme Cloud Corp"
                  className="w-full py-2.5 px-3.5 rounded-xl bg-slate-900 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-red-500 text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 mb-1.5 font-bold">
                    Headcount Cut
                  </label>
                  <input
                    type="number"
                    value={headcount}
                    onChange={(e) => setHeadcount(e.target.value)}
                    placeholder="e.g. 850"
                    className="w-full py-2.5 px-3.5 rounded-xl bg-slate-900 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-red-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 mb-1.5 font-bold">
                    Date Announced
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full py-2.5 px-3.5 rounded-xl bg-slate-900 border border-white/10 text-white focus:outline-none focus:border-red-500 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 mb-1.5 font-bold">
                  Proof / Verification Source URL <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Link2 className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                  <input
                    type="url"
                    required
                    value={sourceUrl}
                    onChange={(e) => setSourceUrl(e.target.value)}
                    placeholder="https://sec.gov/... or State WARN Notice URL or Reuters article"
                    className="w-full py-2.5 pl-9 pr-3.5 rounded-xl bg-slate-900 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-red-500 text-sm"
                  />
                </div>
                <span className="text-[10px] text-slate-500 mt-1 block">
                  Must link to an SEC 8-K, state WARN filing, verified press report, or public memo.
                </span>
              </div>

              <div>
                <label className="block text-slate-300 mb-1.5 font-bold">
                  Additional Details / Notes
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Which departments were impacted? Severance terms? Executive memo quotes?"
                  className="w-full py-2.5 px-3.5 rounded-xl bg-slate-900 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-red-500 text-sm resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-red-600/30 transition-all font-body"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit for Independent Fact-Checking</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
