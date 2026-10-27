import React, { useState } from 'react';
import { Header } from './components/Header';
import { LiveCounterHero } from './components/LiveCounterHero';
import { EraShowcase } from './components/EraShowcase';
import { HistoricalTimelineChart } from './components/HistoricalTimelineChart';
import { GlobalImpactMap } from './components/GlobalImpactMap';
import { HypocrisyMeter } from './components/HypocrisyMeter';
import { AIForensicAnalyst } from './components/AIForensicAnalyst';
import { MemoSpinDecoder } from './components/MemoSpinDecoder';
import { ProofArchive } from './components/ProofArchive';
import { SeveranceCalculator } from './components/SeveranceCalculator';
import { FAQSection } from './components/FAQSection';
import { ProofDetailModal } from './components/ProofDetailModal';
import { ReportLayoffModal } from './components/ReportLayoffModal';
import { LayoffAlertModal } from './components/LayoffAlertModal';
import { Footer } from './components/Footer';
import { LAYOFFS_DATABASE } from './data/layoffsData';
import { LayoffRecord, EraId } from './types';

export const App: React.FC = () => {
  const [records, setRecords] = useState<LayoffRecord[]>(LAYOFFS_DATABASE);
  const [selectedEra, setSelectedEra] = useState<EraId>('ai_efficiency');
  const [selectedEraFilter, setSelectedEraFilter] = useState<string>('all');
  const [selectedRegionFilter, setSelectedRegionFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [inspectedRecord, setInspectedRecord] = useState<LayoffRecord | null>(null);
  const [isReportModalOpen, setIsReportModalOpen] = useState<boolean>(false);
  const [isAlertModalOpen, setIsAlertModalOpen] = useState<boolean>(false);

  // Smooth scroll handler
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // When era card clicked in hero
  const handleSelectEra = (eraId: EraId) => {
    setSelectedEra(eraId);
    handleNavigate('eras');
  };

  // Jump from era dossier straight to filtered archive
  const handleFilterArchiveByEra = (eraId: EraId) => {
    setSelectedEraFilter(eraId);
    handleNavigate('archive');
  };

  // When region selected from GlobalImpactMap
  const handleSelectRegion = (region: string) => {
    setSelectedRegionFilter(region);
    handleNavigate('archive');
  };

  // Add new submitted report
  const handleAddReport = (data: any) => {
    const newRecord: LayoffRecord = {
      id: `report-${Date.now()}`,
      company: data.company,
      sector: 'Big Tech',
      headcountCut: data.headcount || 100,
      date: data.date,
      year: new Date(data.date).getFullYear(),
      era: 'ai_efficiency',
      region: 'Global / Multi-region',
      country: 'Global',
      flag: '🌐',
      location: 'Global / Reported',
      headline: `Community Submission: ${data.company} announces headcount reduction`,
      statedReason: data.notes || 'Submitted via anonymous whistleblower tip line.',
      sources: [
        {
          title: 'Submitted Primary Source URL',
          sourceType: 'Official PR',
          url: data.sourceUrl,
          archiveId: `TIP-${Date.now()}`,
          dateCited: data.date
        }
      ],
      verificationStatus: 'Under Review',
      impactSeverity: 'Moderate'
    };

    setRecords([newRecord, ...records]);
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col font-body selection:bg-rose-500 selection:text-white">
      {/* Sticky Header */}
      <Header
        onOpenReportModal={() => setIsReportModalOpen(true)}
        onOpenAlertModal={() => setIsAlertModalOpen(true)}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Live Odometer & Hero */}
        <LiveCounterHero
          onSelectEra={handleSelectEra}
          onSearchChange={setSearchQuery}
          searchQuery={searchQuery}
        />

        {/* The 4 Catastrophic Eras Comparison */}
        <EraShowcase
          selectedEra={selectedEra}
          onSelectEra={setSelectedEra}
          onFilterArchiveByEra={handleFilterArchiveByEra}
        />

        {/* 26-Year Historical Macro Layoff Curve (2000-2026) */}
        <HistoricalTimelineChart onSelectEra={handleSelectEra} />

        {/* Worldwide Geographic Distribution Map & Regional Breakdown */}
        <GlobalImpactMap
          selectedRegion={selectedRegionFilter}
          onSelectRegion={handleSelectRegion}
        />

        {/* LLM-Powered AI Forensic Layoff Analyst */}
        <AIForensicAnalyst />

        {/* Corporate PR Layoff Memo Spin Decoder */}
        <MemoSpinDecoder />

        {/* The Discrepancy Index: Profits & Buybacks vs Dismissals */}
        <HypocrisyMeter />

        {/* The Core Verified Proof Ledger (Searchable & Filterable by Era, Region & Sector) */}
        <ProofArchive
          records={records}
          searchQuery={searchQuery}
          selectedEraFilter={selectedEraFilter}
          onSelectEraFilter={setSelectedEraFilter}
          selectedRegionFilter={selectedRegionFilter}
          onSelectRegionFilter={setSelectedRegionFilter}
          onViewRecordDetail={(record) => setInspectedRecord(record)}
        />

        {/* Worker Advocacy Severance Tool */}
        <SeveranceCalculator />

        {/* Semantic High-SEO FAQ Section */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer 
        onOpenReportModal={() => setIsReportModalOpen(true)} 
        onOpenAlertModal={() => setIsAlertModalOpen(true)}
      />

      {/* Primary Evidence Modal */}
      <ProofDetailModal
        record={inspectedRecord}
        onClose={() => setInspectedRecord(null)}
      />

      {/* Report Layoff Tip Modal */}
      <ReportLayoffModal
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
        onSubmitReport={handleAddReport}
      />

      {/* Weekly Early-Warning Alerts Modal */}
      <LayoffAlertModal
        isOpen={isAlertModalOpen}
        onClose={() => setIsAlertModalOpen(false)}
      />
    </div>
  );
};

export default App;
