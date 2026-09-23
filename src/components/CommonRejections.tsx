import React, { useState } from 'react';
import { 
  AlertTriangle, 
  ShieldCheck, 
  Building2, 
  FileText, 
  Coins, 
  Briefcase, 
  Award, 
  ChevronRight,
  ShieldAlert,
  CheckCircle2
} from 'lucide-react';
import { REJECTION_REASONS } from '../data/websiteData';

// Visual tab icons for enhanced scannability
const TAB_ICONS: Record<string, React.ReactNode> = {
  property: <Building2 className="w-4 h-4 shrink-0" />,
  documentation: <FileText className="w-4 h-4 shrink-0" />,
  salary: <Coins className="w-4 h-4 shrink-0" />,
  entrepreneur: <Briefcase className="w-4 h-4 shrink-0" />,
  talent: <Award className="w-4 h-4 shrink-0" />
};

export const CommonRejections: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>('property');

  const activeItem = REJECTION_REASONS.find(r => r.id === activeTabId) || REJECTION_REASONS[0];

  return (
    <section className="relative w-full py-20 lg:py-28 bg-[#fafafa] border-t border-b border-slate-200/80 overflow-hidden">
      {/* Subtle luxury ambient background glows */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40" 
      />
      <div 
        aria-hidden="true" 
        className="absolute top-12 left-10 w-96 h-96 bg-red-100/25 rounded-full blur-3xl pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-10 right-10 w-96 h-96 bg-amber-100/25 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 text-white text-xs font-bold tracking-wider uppercase mb-5 shadow-xs">
            <ShieldAlert className="w-3.5 h-3.5 text-[#c81928]" />
            <span>COMMON REJECTIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] mb-5">
            How to Avoid{' '}
            <span className="relative inline-block text-[#c81928]">
              Golden Visa
              <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-gradient-to-r from-[#c81928] via-[#e53848] to-[#c81928]/40 rounded-full"></span>
            </span>{' '}
            Application Rejection
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed text-pretty max-w-2xl">
            Below are some of the most common reasons why Golden Visa applications may face delays or rejection, along with ways to minimise the risk before submission.
          </p>
        </div>

        {/* Risk Mitigation & Compliance Console */}
        <div className="rounded-3xl border border-slate-200/90 bg-white shadow-xl shadow-slate-200/70 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Navigation Sidebar */}
            <div className="lg:col-span-4 bg-slate-950 p-3 sm:p-5 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-800">
              <div>
                <div className="px-3 py-2 mb-2 hidden lg:flex items-center justify-between text-[11px] font-black uppercase tracking-wider text-slate-400">
                  <span>Rejection Scenarios</span>
                  <span className="text-amber-400">Select Track</span>
                </div>

                <div className="flex flex-row lg:flex-col gap-1.5 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                  {REJECTION_REASONS.map((reason) => {
                    const isActive = reason.id === activeTabId;
                    const icon = TAB_ICONS[reason.id] || <AlertTriangle className="w-4 h-4 shrink-0" />;

                    return (
                      <button
                        key={reason.id}
                        onClick={() => setActiveTabId(reason.id)}
                        className={`group w-full flex items-center justify-between px-4 py-3 sm:py-3.5 rounded-xl text-left text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer shrink-0 sm:shrink ${
                          isActive
                            ? 'bg-gradient-to-r from-[#c81928] to-[#a81420] text-white shadow-lg shadow-red-950/30'
                            : 'text-slate-300 hover:text-white hover:bg-slate-900/90'
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <span className={`transition-colors ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-amber-400'}`}>
                            {icon}
                          </span>
                          <span className="truncate">{reason.tabLabel}</span>
                        </div>

                        <ChevronRight className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                          isActive 
                            ? 'text-white translate-x-0.5' 
                            : 'text-slate-600 group-hover:text-slate-400'
                        }`} />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Sub-label in sidebar */}
              <div className="hidden lg:block mt-6 pt-5 border-t border-slate-900/80 px-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>100% Pre-Screening Protocol</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-1 leading-normal">
                  All documents pre-verified against MOHRE, ICP & GDRFA standards.
                </p>
              </div>
            </div>

            {/* Right Column: Detailed Solution Inspector */}
            <div className="lg:col-span-8 p-6 sm:p-8 lg:p-10 bg-gradient-to-b from-white to-slate-50/60 flex flex-col justify-between">
              <div>
                
                {/* Active Category Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-5 border-b border-slate-100">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold">
                    <span>Category Guide</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-[#c81928]">{activeItem.tabLabel}</span>
                  </div>

                  <span className="text-xs font-semibold text-slate-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span>Proactive Safeguard Available</span>
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-6 tracking-tight leading-snug">
                  {activeItem.title}
                </h3>

                {/* Structured Dual Panels */}
                <div className="space-y-4">
                  
                  {/* Issue Box */}
                  <div className="rounded-2xl p-5 sm:p-6 bg-rose-50/70 border border-rose-200/80 text-rose-950 transition-all">
                    <div className="flex items-center gap-2 text-xs font-extrabold tracking-wide uppercase text-rose-700 mb-2">
                      <AlertTriangle className="w-4 h-4 text-rose-600" />
                      <span>Issue</span>
                    </div>
                    <p className="text-xs sm:text-[14px] text-slate-700 leading-relaxed font-normal">
                      <strong className="text-slate-900 font-bold">Issue: </strong>
                      {activeItem.issue}
                    </p>
                  </div>

                  {/* How To Avoid Box */}
                  <div className="rounded-2xl p-5 sm:p-6 bg-emerald-50/70 border border-emerald-200/80 text-emerald-950 transition-all">
                    <div className="flex items-center gap-2 text-xs font-extrabold tracking-wide uppercase text-emerald-800 mb-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>How to Avoid</span>
                    </div>
                    <p className="text-xs sm:text-[14px] text-slate-700 leading-relaxed font-normal">
                      <strong className="text-slate-900 font-bold">How to Avoid: </strong>
                      {activeItem.howToAvoid}
                    </p>
                  </div>

                </div>
              </div>

              {/* Bottom Assurance Note */}
              <div className="mt-8 pt-5 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-slate-500">
                <span className="flex items-center gap-1.5 text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Brightlink Zero-Rejection Pre-Check Protocol</span>
                </span>
                <span className="text-[#c81928] font-bold">Comprehensive Attestation & Document Review</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
