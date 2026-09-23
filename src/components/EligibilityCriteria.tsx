import React, { useState } from 'react';
import { 
  ChevronDown, 
  Stethoscope, 
  TrendingUp, 
  Briefcase, 
  GraduationCap, 
  Palette, 
  Cpu, 
  HeartHandshake, 
  Star, 
  ShieldCheck, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { ELIGIBILITY_CATEGORIES } from '../data/websiteData';

interface EligibilityCriteriaProps {
  onOpenConsultation: () => void;
}

// Icon mapping per category id
const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  doctors: <Stethoscope className="w-5 h-5 text-rose-600" />,
  investors: <TrendingUp className="w-5 h-5 text-emerald-600" />,
  entrepreneurs: <Briefcase className="w-5 h-5 text-amber-600" />,
  students: <GraduationCap className="w-5 h-5 text-blue-600" />,
  cultural: <Palette className="w-5 h-5 text-purple-600" />,
  engineers: <Cpu className="w-5 h-5 text-cyan-600" />,
  humanitarian: <HeartHandshake className="w-5 h-5 text-orange-600" />,
  celebrities: <Star className="w-5 h-5 text-yellow-500" />
};

export const EligibilityCriteria: React.FC<EligibilityCriteriaProps> = ({
  onOpenConsultation
}) => {
  // Default first category expanded for immediate visual engagement
  const [expandedId, setExpandedId] = useState<string | null>(ELIGIBILITY_CATEGORIES[0]?.id || null);

  const toggleAccordion = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const leftCategories = [
    ELIGIBILITY_CATEGORIES[0], // Doctors
    ELIGIBILITY_CATEGORIES[2], // Entrepreneurs
    ELIGIBILITY_CATEGORIES[4], // Cultural and Creative Talents
    ELIGIBILITY_CATEGORIES[6], // Humanitarian Pioneers
  ];

  const rightCategories = [
    ELIGIBILITY_CATEGORIES[1], // Investors
    ELIGIBILITY_CATEGORIES[3], // Outstanding Students and Graduates
    ELIGIBILITY_CATEGORIES[5], // Engineers
    ELIGIBILITY_CATEGORIES[7], // Celebrities
  ];

  const renderCard = (cat: typeof ELIGIBILITY_CATEGORIES[0]) => {
    const isExpanded = expandedId === cat.id;
    const icon = CATEGORY_ICONS[cat.id] || <ShieldCheck className="w-5 h-5 text-slate-700" />;

    return (
      <div 
        key={cat.id}
        className={`group border transition-all duration-300 rounded-2xl overflow-hidden ${
          isExpanded 
            ? 'bg-white border-[#c81928]/40 shadow-lg shadow-slate-200/80 ring-1 ring-[#c81928]/20' 
            : 'bg-white/90 hover:bg-white border-slate-200/90 shadow-2xs hover:shadow-md hover:border-slate-300'
        }`}
      >
        <button
          onClick={() => toggleAccordion(cat.id)}
          aria-expanded={isExpanded}
          className="w-full flex items-center justify-between px-5 sm:px-6 py-4.5 text-left cursor-pointer transition-colors"
        >
          <div className="flex items-center gap-3.5 min-w-0 pr-2">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-200 ${
              isExpanded 
                ? 'bg-red-50 ring-2 ring-[#c81928]/20 scale-105' 
                : 'bg-slate-100 group-hover:bg-slate-200/80 group-hover:scale-105'
            }`}>
              {icon}
            </div>
            <span className={`text-sm sm:text-[15px] font-bold tracking-tight transition-colors line-clamp-1 ${
              isExpanded ? 'text-[#c81928]' : 'text-slate-800 group-hover:text-slate-900'
            }`}>
              {cat.title}
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0 ml-2">
            <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full transition-colors hidden sm:inline-block ${
              isExpanded 
                ? 'bg-red-50 text-[#c81928]' 
                : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200/70'
            }`}>
              {isExpanded ? 'Hide' : 'Details'}
            </span>
            <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
              isExpanded 
                ? 'bg-[#c81928] text-white rotate-180' 
                : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200 group-hover:text-slate-700'
            }`}>
              <ChevronDown className="w-4 h-4 stroke-[2.2]" />
            </div>
          </div>
        </button>

        {isExpanded && (
          <div className="px-5 sm:px-6 pb-5 pt-2 border-t border-slate-100 bg-gradient-to-b from-slate-50/70 to-white animate-in fade-in-50 duration-200">
            <div className="flex items-start gap-2.5 pt-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                {cat.criteria}
              </p>
            </div>
            
            <div className="mt-4 pt-3 border-t border-slate-100/80 flex items-center justify-between">
              <span className="text-[11px] font-medium text-slate-400">Official Government Pathway</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenConsultation();
                }}
                className="text-[11px] font-bold text-[#c81928] hover:text-[#a81420] inline-flex items-center gap-1 cursor-pointer transition-colors"
              >
                <span>Check Your Qualification</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="criteria" className="relative w-full py-20 lg:py-28 bg-white border-b border-slate-200/80 overflow-hidden">
      {/* Subtle luxury ambient background glows */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40" 
      />
      <div 
        aria-hidden="true" 
        className="absolute top-10 right-10 w-96 h-96 bg-red-100/20 rounded-full blur-3xl pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-10 left-10 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 text-white text-xs font-bold tracking-wider uppercase mb-5 shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>8 Official Qualifying Tracks</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] mb-6">
            <span className="relative inline-block text-[#c81928]">
              Eligibility
              <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-gradient-to-r from-[#c81928] via-[#e53848] to-[#c81928]/40 rounded-full"></span>
            </span>{' '}
            Criteria for the Golden Visa UAE
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal text-pretty max-w-2xl mx-auto">
            The Golden Visa UAE enables individuals to expand their opportunities while obtaining long-term UAE residency. Eligible applicants include investors, entrepreneurs, medical professionals, engineers, top-performing students, and humanitarian contributors.
          </p>
        </div>

        {/* 2-Column Accordion Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 max-w-5xl mx-auto mb-12 items-start">
          <div className="space-y-4">
            {leftCategories.map(renderCard)}
          </div>
          <div className="space-y-4">
            {rightCategories.map(renderCard)}
          </div>
        </div>

        {/* Action Button & Trust Sub-label */}
        <div className="flex flex-col items-center justify-center text-center">
          <button
            onClick={onOpenConsultation}
            className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#c81928] to-[#a81420] hover:from-[#d81c2d] hover:to-[#b71624] text-white font-bold text-sm sm:text-base tracking-wide shadow-lg shadow-red-600/20 hover:shadow-xl hover:shadow-red-600/30 transition-all duration-200 active:scale-[0.98] cursor-pointer"
          >
            <span>Get A Personalised Advice At No Cost</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
          
          <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-slate-500">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span>Free 1-on-1 Profile Assessment • Instant Review</span>
          </div>
        </div>

      </div>
    </section>
  );
};
