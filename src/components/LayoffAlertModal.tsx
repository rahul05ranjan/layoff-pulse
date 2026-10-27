import React, { useState, useEffect } from 'react';
import { 
  Bell, 
  X, 
  Mail, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles,
  ArrowRight,
  Lock
} from 'lucide-react';

interface LayoffAlertModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LayoffAlertModal: React.FC<LayoffAlertModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [selectedTopics, setSelectedTopics] = useState<string[]>([
    'Big Tech & AI Shifts',
    'WARN Act Legal Registrations'
  ]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Check if already subscribed
    const existing = localStorage.getItem('layoffpulse_subscriber');
    if (existing) {
      try {
        const parsed = JSON.parse(existing);
        setEmail(parsed.email || '');
      } catch (e) {
        // ignore
      }
    }
  }, []);

  if (!isOpen) return null;

  const toggleTopic = (topic: string) => {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter((t) => t !== topic));
    } else {
      setSelectedTopics([...selectedTopics, topic]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please provide a valid corporate or personal email address.');
      return;
    }

    const payload = {
      email,
      topics: selectedTopics,
      subscribedAt: new Date().toISOString()
    };

    localStorage.setItem('layoffpulse_subscriber', JSON.stringify(payload));
    setIsSubmitted(true);
    setError('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl bg-slate-900 border border-white/10 p-6 sm:p-8 shadow-2xl overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-rose-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-display font-bold text-2xl text-white">
              Subscription Confirmed
            </h3>
            <p className="text-sm text-slate-300 font-body max-w-sm mx-auto leading-relaxed">
              We've registered <span className="text-white font-mono font-medium">{email}</span> for weekly verified layoff briefings and emergency WARN notices.
            </p>
            <div className="pt-2">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-semibold transition-colors"
              >
                Close & Return to Dashboard
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-rose-500/20 border border-rose-500/30 text-rose-400">
                <Bell className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-black text-2xl text-white">
                  Layoff Early-Warning Digest
                </h3>
                <p className="text-xs text-slate-400 font-body">
                  No PR spin. Weekly verified factual dispatches directly from SEC & WARN filings.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 mt-6">
              {/* Email Input */}
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">
                  Email Address (Personal or Work)
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError('');
                    }}
                    placeholder="analyst@domain.com"
                    required
                    className="w-full bg-slate-950 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 font-mono focus:outline-none focus:border-rose-500 transition-colors"
                  />
                </div>
                {error && <p className="text-xs text-rose-400 font-mono mt-1">{error}</p>}
              </div>

              {/* Topics Selection */}
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-2">
                  Select Dispatch Intelligence:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    'Big Tech & AI Shifts',
                    'WARN Act Legal Registrations',
                    'India & Bangalore Ecosystem',
                    'European Works Council Notices'
                  ].map((topic) => {
                    const isChecked = selectedTopics.includes(topic);
                    return (
                      <button
                        type="button"
                        key={topic}
                        onClick={() => toggleTopic(topic)}
                        className={`text-left p-2.5 rounded-xl text-xs font-mono border transition-all flex items-center justify-between ${
                          isChecked
                            ? 'bg-rose-950/40 border-rose-500/40 text-rose-200'
                            : 'bg-slate-950/60 border-white/5 text-slate-400 hover:border-white/20'
                        }`}
                      >
                        <span>{topic}</span>
                        <span className={`w-3.5 h-3.5 rounded border flex items-center justify-center text-[10px] ${
                          isChecked ? 'bg-rose-500 border-rose-500 text-white' : 'border-slate-600'
                        }`}>
                          {isChecked ? '✓' : ''}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Privacy guarantee */}
              <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400 pt-1">
                <Lock className="w-3.5 h-3.5 text-slate-500" />
                <span>Zero spam. No third-party sharing. One-click unsubscribe.</span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2 group"
              >
                <span>Activate Free Layoff Alerts</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
