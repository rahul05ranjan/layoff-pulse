import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'How many total workers have been laid off across the 4 major economic eras since 2000?',
      answer: 'Over 2,480,000 corporate and technology layoffs have been verified in our public archive from 2000 to 2026. This spans the Dot-Com Crash (500,000+ tech cuts), the Great Financial Crisis of 2007–2009 (8.7 million US workers tracked by the Bureau of Labor Statistics), the COVID-19 pandemic freeze (22.4 million temporary and permanent peak displacements in 2020), and the ongoing 2023–2026 AI and Efficiency wave (over 540,000 cuts).'
    },
    {
      question: 'Why are highly profitable tech companies conducting mass layoffs during the AI era?',
      answer: 'Unlike previous recessions caused by revenue collapse, the 2023–2026 wave occurs alongside record S&P 500 company earnings. Tech corporations are deliberately reallocating capital expenditures away from payroll toward expensive Nvidia GPU infrastructure, custom datacenter silicon, and massive stock buyback programs ($194+ Billion repurchased by Big Tech alone) to inflate earnings per share and satisfy investor demands for 40%+ operating margins.'
    },
    {
      question: 'What primary sources are used to guarantee accuracy and prevent rumors?',
      answer: 'Every entry in the LayoffPulse ledger carries verified government or judicial documentation: mandatory US Securities and Exchange Commission (SEC) Form 8-K filings on EDGAR, State Department of Labor WARN Act notices (California, Washington, Texas, Florida, Oregon), UK Insolvency Service HR1 redundancy notifications, German Works Council (BetrVG) consultation filings, and Indian NCLT / BSE disclosures.'
    },
    {
      question: 'Does LayoffPulse track layoffs outside the United States?',
      answer: 'Yes. LayoffPulse maintains verified records across five global regions: North America (61%), Europe & the United Kingdom (18%), India & South Asia (13%), East Asia & Asia-Pacific (6%), and Latin America (2%). International entries include SAP (Germany), Nokia (Finland), Spotify & Klarna (Sweden), BYJU’S & Paytm (India), Dyson (UK), and Sony (Japan).'
    },
    {
      question: 'What is the Federal WARN Act and what rights do employees have?',
      answer: 'The Worker Adjustment and Retraining Notification (WARN) Act is a US federal law protecting workers, their families, and communities by requiring employers with 100 or more full-time employees to provide at least 60 calendar days written advance notice before plant closings or mass layoffs. Failure to provide proper notice entitles employees to 60 days of back pay and health benefits.'
    },
    {
      question: 'What is the standard tech industry severance package in 2024–2026?',
      answer: 'According to SEC Form 8-K filings from Meta, Alphabet, and Microsoft, the current top-tier Big Tech standard is 16 weeks of base pay, plus 2 additional weeks of severance for every completed year of service, along with 6 months of continuous healthcare (COBRA) subsidies. For non-tech or smaller startups, the average standard is 4 to 8 weeks base salary plus 1 week per year of service.'
    }
  ];

  return (
    <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-white/10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-xs font-mono text-slate-300 mb-3">
          <HelpCircle className="w-3.5 h-3.5 text-red-400" />
          PUBLIC ARCHIVE & METHODOLOGY
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-slate-400 text-sm font-mono">
          Methodology, data sourcing, legal rights, and economic facts behind the global layoff archive.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="rounded-2xl bg-slate-900/70 border border-white/10 overflow-hidden transition-all shadow-md"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 font-display font-bold text-base sm:text-lg text-white hover:text-red-400 transition-colors"
              >
                <span>{faq.question}</span>
                {isOpen ? (
                  <ChevronUp className="w-5 h-5 text-red-400 shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                )}
              </button>

              {isOpen && (
                <div className="px-5 pb-5 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-white/5 pt-3 font-normal">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
