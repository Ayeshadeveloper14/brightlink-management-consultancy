import React from 'react';
import { 
  Shield, 
  Building2, 
  Scale, 
  Fingerprint, 
  Globe, 
  Home, 
  TrendingUp, 
  Briefcase, 
  GraduationCap,
  Landmark,
  CheckCircle2
} from 'lucide-react';
import { AUTHORITIES } from '../data/websiteData';

export const GovernmentAuthorities: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'shield':
        return <Shield className="w-5 h-5 text-[#c81928]" />;
      case 'badge':
        return <Landmark className="w-5 h-5 text-[#c81928]" />;
      case 'emblem':
        return <Building2 className="w-5 h-5 text-[#c81928]" />;
      case 'fingerprint':
        return <Fingerprint className="w-5 h-5 text-[#c81928]" />;
      case 'globe':
        return <Globe className="w-5 h-5 text-[#c81928]" />;
      case 'scales':
        return <Scale className="w-5 h-5 text-[#c81928]" />;
      case 'building':
        return <Home className="w-5 h-5 text-[#c81928]" />;
      case 'landmark':
        return <TrendingUp className="w-5 h-5 text-[#c81928]" />;
      case 'briefcase':
        return <Briefcase className="w-5 h-5 text-[#c81928]" />;
      case 'academic':
        return <GraduationCap className="w-5 h-5 text-[#c81928]" />;
      default:
        return <Shield className="w-5 h-5 text-[#c81928]" />;
    }
  };

  return (
    <section id="authorities" className="relative w-full py-20 lg:py-28 bg-[#fafafa] border-t border-b border-slate-200/80 overflow-hidden">
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
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 text-white text-xs font-bold tracking-wider uppercase mb-5 shadow-xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>DIRECT INSTITUTIONAL CHANNELS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] mb-5">
            We Work Directly With{' '}
            <span className="relative inline-block text-[#c81928]">
              Official UAE
              <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-gradient-to-r from-[#c81928] via-[#e53848] to-[#c81928]/40 rounded-full"></span>
            </span>{' '}
            Government Authorities
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto text-pretty">
            Key UAE government authorities and official platforms involved in visa, residency, attestation, and digital services.
          </p>
        </div>

        {/* 10 Authority Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 max-w-6xl mx-auto">
          {AUTHORITIES.map((auth, idx) => (
            <div
              key={idx}
              className="group relative bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 flex flex-col items-center justify-center text-center shadow-2xs hover:shadow-xl hover:shadow-slate-200/70 hover:border-slate-300 hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-50 to-amber-50/60 border border-red-100 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#c81928] transition-all duration-300 shadow-2xs">
                <span className="transition-colors group-hover:text-white">
                  {getIcon(auth.icon)}
                </span>
              </div>

              <h3 className="text-xs sm:text-[13px] font-bold text-slate-800 leading-snug group-hover:text-[#c81928] transition-colors">
                {auth.name}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
