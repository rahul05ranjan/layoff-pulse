import React, { useState } from 'react';
import { Calculator, Shield, HelpCircle, CheckCircle2, AlertCircle } from 'lucide-react';

export const SeveranceCalculator: React.FC = () => {
  const [tenureYears, setTenureYears] = useState<number>(3);
  const [baseSalary, setBaseSalary] = useState<number>(120000);
  const [currency, setCurrency] = useState<'USD' | 'INR'>('USD');
  const [roleLevel, setRoleLevel] = useState<'individual' | 'senior' | 'director'>('individual');

  // Calculation parameters based on tech industry benchmarks
  const calculateBenchmark = () => {
    const weeklyRate = baseSalary / 52;
    
    // Meta / Google benchmark: 16 weeks base + 2 weeks per year of service
    const bigTechWeeks = 16 + (tenureYears * 2);
    const bigTechPayout = weeklyRate * bigTechWeeks;

    // Standard corporate benchmark: 4-8 weeks base + 1 week per year
    const standardWeeks = (roleLevel === 'director' ? 12 : roleLevel === 'senior' ? 8 : 4) + (tenureYears * 1);
    const standardPayout = weeklyRate * standardWeeks;

    // Minimum 60-day WARN Act legal floor (approx 8.5 weeks)
    const warnActWeeks = 8.5;
    const warnActPayout = weeklyRate * warnActWeeks;

    return {
      bigTechWeeks,
      bigTechPayout,
      standardWeeks,
      standardPayout,
      warnActWeeks,
      warnActPayout
    };
  };

  const results = calculateBenchmark();

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section id="calculator" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-4">
          <Calculator className="w-3.5 h-3.5 text-cyan-400" />
          WORKER ADVOCACY TOOL
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-4">
          Severance & <span className="text-gradient-cyan">WARN Benchmark</span> Tool
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
          Estimate standard severance benchmarks based on public 8-K filings and analyze how your exit package compares against Big Tech severance standards and statutory WARN Act protections.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Controls Column */}
        <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-white/10 shadow-2xl backdrop-blur-xl">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-display font-bold text-xl text-white">Your Parameters</h3>
            {/* Currency toggle */}
            <div className="flex bg-slate-950 rounded-lg p-1 border border-white/10 text-xs font-mono">
              <button
                onClick={() => { setCurrency('USD'); setBaseSalary(120000); }}
                className={`px-3 py-1 rounded-md transition-colors ${currency === 'USD' ? 'bg-red-600 text-white font-bold' : 'text-slate-400'}`}
              >
                USD ($)
              </button>
              <button
                onClick={() => { setCurrency('INR'); setBaseSalary(2500000); }}
                className={`px-3 py-1 rounded-md transition-colors ${currency === 'INR' ? 'bg-red-600 text-white font-bold' : 'text-slate-400'}`}
              >
                INR (₹)
              </button>
            </div>
          </div>

          <div className="space-y-6 font-mono text-xs">
            {/* Tenure Slider */}
            <div>
              <div className="flex justify-between text-slate-300 mb-2">
                <span>Years of Service (Tenure):</span>
                <span className="text-cyan-400 font-bold text-sm">{tenureYears} Years</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="15"
                step="0.5"
                value={tenureYears}
                onChange={(e) => setTenureYears(parseFloat(e.target.value))}
                className="w-full accent-cyan-400 bg-slate-950 h-2 rounded-lg cursor-pointer"
              />
            </div>

            {/* Base Salary Input */}
            <div>
              <label className="block text-slate-300 mb-2">
                Annual Base Salary ({currency}):
              </label>
              <input
                type="number"
                value={baseSalary}
                onChange={(e) => setBaseSalary(Math.max(0, parseInt(e.target.value) || 0))}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-950 border border-white/10 text-white font-mono text-sm focus:outline-none focus:border-cyan-400"
              />
            </div>

            {/* Role Seniority */}
            <div>
              <label className="block text-slate-300 mb-2">Seniority Tier:</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'individual', label: 'Mid / Eng' },
                  { id: 'senior', label: 'Senior / Staff' },
                  { id: 'director', label: 'Director / VP' }
                ].map((tier) => (
                  <button
                    key={tier.id}
                    onClick={() => setRoleLevel(tier.id as any)}
                    className={`py-2 px-2 rounded-xl text-center transition-all ${
                      roleLevel === tier.id
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 font-bold'
                        : 'bg-white/5 text-slate-400 hover:text-white border border-white/5'
                    }`}
                  >
                    {tier.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 text-[11px] text-slate-400 leading-relaxed">
            * Estimates based on verified termination formulas logged in SEC Form 8-K filings for Meta, Alphabet, Microsoft, and California/New York Department of Labor standards.
          </div>
        </div>

        {/* Results Column */}
        <div className="lg:col-span-7 space-y-4">
          {/* Big Tech Tier */}
          <div className="p-6 rounded-3xl bg-gradient-to-r from-cyan-950/40 via-slate-900 to-slate-900 border border-cyan-500/30 shadow-xl backdrop-blur-xl">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> Top-Tier Tech Benchmark (Meta / Google Standard)
              </span>
              <span className="font-mono text-xs px-2 py-0.5 rounded bg-cyan-400/10 text-cyan-300 font-semibold">
                {results.bigTechWeeks} Weeks Pay
              </span>
            </div>
            <div className="font-mono font-extrabold text-3xl sm:text-4xl text-white my-2">
              {formatCurrency(results.bigTechPayout)}
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Standard: 16 weeks base lump sum + 2 additional weeks for every completed year of service, plus 6 months continuous health insurance (COBRA) subsidy and RSUs vesting through notice date.
            </p>
          </div>

          {/* Standard Corporate Tier */}
          <div className="p-6 rounded-3xl bg-slate-900/80 border border-white/10 shadow-xl backdrop-blur-xl">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs font-bold text-slate-300 uppercase tracking-wider">
                Average Corporate / Startup Benchmark
              </span>
              <span className="font-mono text-xs px-2 py-0.5 rounded bg-white/10 text-slate-300">
                {results.standardWeeks} Weeks Pay
              </span>
            </div>
            <div className="font-mono font-extrabold text-2xl sm:text-3xl text-slate-200 my-2">
              {formatCurrency(results.standardPayout)}
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Standard corporate formula: 4 to 8 weeks base pay + 1 week per year of service, standard 1-2 months healthcare continuation.
            </p>
          </div>

          {/* Statutory WARN Act Floor */}
          <div className="p-5 rounded-2xl bg-amber-950/20 border border-amber-500/20">
            <div className="flex items-center justify-between mb-1">
              <span className="font-mono text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1">
                <AlertCircle className="w-4 h-4" /> Federal WARN Act Legal Floor (60 Days)
              </span>
              <span className="font-mono text-xs text-amber-300 font-semibold">
                {results.warnActWeeks} Weeks (~60 Calendar Days)
              </span>
            </div>
            <div className="font-mono font-bold text-xl text-white my-1">
              {formatCurrency(results.warnActPayout)}
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              Under the Federal Worker Adjustment and Retraining Notification (WARN) Act, covered employers with 100+ workers must provide 60 calendar days written notice before mass layoffs, or pay equivalent wages and benefits in lieu of notice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
