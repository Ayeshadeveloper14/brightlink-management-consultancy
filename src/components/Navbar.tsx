import React, { useState } from 'react';
import { Phone, ChevronDown, Menu, X, Globe, Sparkles, CheckCircle2 } from 'lucide-react';

interface NavbarProps {
  onOpenCalculator: () => void;
  onOpenEligibility: () => void;
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenCalculator,
  onOpenEligibility,
  onOpenConsultation
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-xs">
      {/* Top Black Utility Bar */}
      <div className="w-full bg-[#121316] text-white text-[13px] py-1.5 px-4 md:px-8 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-neutral-300 font-normal text-xs md:text-[13px] text-center md:text-left">
            <span>Business Setup, Golden Visas, Residency and Legal Services in UAE &amp; UAE — Free Consultation.</span>
          </div>
          
          <div className="flex items-center gap-4 text-xs md:text-sm">
            <a 
              href="tel:+971566556645" 
              className="flex items-center gap-1.5 text-neutral-200 hover:text-white transition-colors font-medium tracking-wide"
            >
              <Phone className="w-3.5 h-3.5 text-neutral-400" />
              <span>+971566556645</span>
            </a>
            
            <button
              onClick={onOpenCalculator}
              className="bg-[#c81928] hover:bg-[#b01422] text-white text-xs px-3.5 py-1 rounded font-medium transition-colors shadow-xs"
            >
              Golden Visa
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="w-full bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center">
              {/* Stylized Red Brand Swirl */}
              <div className="w-11 h-11 rounded-lg bg-gradient-to-tr from-[#990e1b] via-[#c81928] to-[#e62b3b] flex items-center justify-center text-white shadow-sm shadow-red-200">
                <span className="font-extrabold text-2xl tracking-tighter italic">B</span>
              </div>
            </div>
            
            <div className="flex flex-col">
              <span className="text-[11px] text-neutral-500 italic font-serif leading-none tracking-wide -mb-0.5">
                A Trust For Care
              </span>
              <span className="text-xl md:text-2xl font-black tracking-tight text-neutral-900 font-sans leading-tight">
                BRIGHTLINK
              </span>
              <span className="text-[9px] md:text-[10px] tracking-[0.2em] font-bold text-[#c81928] uppercase -mt-0.5">
                MANAGEMENT CONSULTANCY
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-neutral-800">
            <a href="#" className="text-neutral-900 hover:text-[#c81928] transition-colors">
              Home
            </a>

            {/* Business Setup Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('business')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                onClick={() => toggleDropdown('business')}
                className="flex items-center gap-1 hover:text-[#c81928] py-2 transition-colors cursor-pointer"
              >
                <span>Business Setup</span>
                <ChevronDown className="w-4 h-4 text-neutral-400 group-hover:text-[#c81928] transition-transform group-hover:rotate-180" />
              </button>

              {activeDropdown === 'business' && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-lg shadow-xl border border-neutral-100 py-3 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <div className="px-4 py-1.5 text-[11px] font-bold tracking-wider text-neutral-400 uppercase">
                    Free Zones &amp; Mainland
                  </div>
                  <a href="#authorities" className="block px-4 py-2 text-xs hover:bg-neutral-50 hover:text-[#c81928] transition-colors">
                    Sharjah Publishing City (SPC Free Zone)
                  </a>
                  <a href="#authorities" className="block px-4 py-2 text-xs hover:bg-neutral-50 hover:text-[#c81928] transition-colors">
                    Ras Al Khaimah Economic Zone (RAKEZ)
                  </a>
                  <a href="#authorities" className="block px-4 py-2 text-xs hover:bg-neutral-50 hover:text-[#c81928] transition-colors">
                    Meydan Free Zone Dubai
                  </a>
                  <a href="#authorities" className="block px-4 py-2 text-xs hover:bg-neutral-50 hover:text-[#c81928] transition-colors">
                    Dubai Mainland (DET License)
                  </a>
                  <a href="#authorities" className="block px-4 py-2 text-xs hover:bg-neutral-50 hover:text-[#c81928] transition-colors">
                    Special Purpose Vehicle (SPV) Setup
                  </a>
                </div>
              )}
            </div>

            {/* Golden Visa Dropdown (Active item) */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('golden')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                onClick={() => toggleDropdown('golden')}
                className="flex items-center gap-1 text-[#c81928] font-bold py-2 border-b-2 border-[#c81928] cursor-pointer"
              >
                <span>Golden Visa</span>
                <ChevronDown className="w-4 h-4 text-[#c81928] group-hover:rotate-180 transition-transform" />
              </button>

              {activeDropdown === 'golden' && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-lg shadow-xl border border-neutral-100 py-3 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <button 
                    onClick={onOpenEligibility}
                    className="w-full text-left px-4 py-2 text-xs font-semibold text-[#c81928] hover:bg-red-50 flex items-center justify-between"
                  >
                    <span>Instant Eligibility Check</span>
                    <Sparkles className="w-3.5 h-3.5 text-[#c81928]" />
                  </button>
                  <button 
                    onClick={onOpenCalculator}
                    className="w-full text-left px-4 py-2 text-xs font-medium hover:bg-neutral-50 hover:text-[#c81928]"
                  >
                    Calculate 10-Year Visa Cost
                  </button>
                  <a href="#property-visa" className="block px-4 py-2 text-xs hover:bg-neutral-50 hover:text-[#c81928]">
                    Property Visa (AED 2M+)
                  </a>
                  <a href="#criteria" className="block px-4 py-2 text-xs hover:bg-neutral-50 hover:text-[#c81928]">
                    Skilled Professionals (AED 30k+ Salary)
                  </a>
                  <a href="#criteria" className="block px-4 py-2 text-xs hover:bg-neutral-50 hover:text-[#c81928]">
                    Investors &amp; Entrepreneurs
                  </a>
                  <a href="#criteria" className="block px-4 py-2 text-xs hover:bg-neutral-50 hover:text-[#c81928]">
                    Outstanding Talents &amp; Doctors
                  </a>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                onClick={() => toggleDropdown('services')}
                className="flex items-center gap-1 hover:text-[#c81928] py-2 transition-colors cursor-pointer"
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4 text-neutral-400 group-hover:text-[#c81928] transition-transform" />
              </button>

              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-lg shadow-xl border border-neutral-100 py-3 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <a href="#authorities" className="block px-4 py-2 text-xs hover:bg-neutral-50 hover:text-[#c81928]">
                    Corporate PRO Services
                  </a>
                  <a href="#authorities" className="block px-4 py-2 text-xs hover:bg-neutral-50 hover:text-[#c81928]">
                    UAE Corporate Bank Account Opening
                  </a>
                  <a href="#authorities" className="block px-4 py-2 text-xs hover:bg-neutral-50 hover:text-[#c81928]">
                    MOFA Certificate Attestation &amp; Legal
                  </a>
                  <a href="#authorities" className="block px-4 py-2 text-xs hover:bg-neutral-50 hover:text-[#c81928]">
                    VAT &amp; Corporate Tax Registration
                  </a>
                </div>
              )}
            </div>

            {/* About Us */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('about')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                onClick={() => toggleDropdown('about')}
                className="flex items-center gap-1 hover:text-[#c81928] py-2 transition-colors cursor-pointer"
              >
                <span>About Us</span>
                <ChevronDown className="w-4 h-4 text-neutral-400 group-hover:text-[#c81928] transition-transform" />
              </button>

              {activeDropdown === 'about' && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-xl border border-neutral-100 py-3 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <a href="#why-standout" className="block px-4 py-2 text-xs hover:bg-neutral-50 hover:text-[#c81928]">
                    Why Brightlink
                  </a>
                  <a href="#testimonials" className="block px-4 py-2 text-xs hover:bg-neutral-50 hover:text-[#c81928]">
                    Client Success Stories
                  </a>
                  <a href="#office" className="block px-4 py-2 text-xs hover:bg-neutral-50 hover:text-[#c81928]">
                    Our Dubai Office
                  </a>
                </div>
              )}
            </div>

            <a href="#office" className="hover:text-[#c81928] transition-colors">
              Contact Us
            </a>

            {/* Language Selector */}
            <div className="flex items-center gap-1.5 pl-2 border-l border-neutral-200 text-neutral-700 text-xs">
              <span className="text-base leading-none">🇦🇪</span>
              <span className="font-semibold">English</span>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenConsultation}
              className="bg-[#c81928] text-white text-xs px-3 py-1.5 rounded font-medium"
            >
              Inquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-700 hover:text-neutral-900"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-neutral-100 bg-white px-4 py-4 space-y-3 shadow-lg">
            <a 
              href="#" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-neutral-900 py-1"
            >
              Home
            </a>
            <div className="py-1">
              <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Services</span>
              <div className="pl-3 mt-1.5 space-y-1.5 text-sm">
                <button 
                  onClick={() => { setMobileMenuOpen(false); onOpenEligibility(); }}
                  className="block text-left text-[#c81928] font-medium"
                >
                  Golden Visa Eligibility Check
                </button>
                <button 
                  onClick={() => { setMobileMenuOpen(false); onOpenCalculator(); }}
                  className="block text-left text-neutral-700"
                >
                  Visa Cost Calculator
                </button>
                <a 
                  href="#property-visa" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-neutral-700"
                >
                  Property Visas
                </a>
              </div>
            </div>
            <a 
              href="#criteria" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-neutral-800 py-1"
            >
              Eligibility Criteria
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-neutral-800 py-1"
            >
              Golden Visa FAQ
            </a>
            <a 
              href="#office" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-neutral-800 py-1"
            >
              Visit Our Office
            </a>
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenCalculator(); }}
                className="w-full bg-[#c81928] text-white py-2.5 rounded font-semibold text-sm"
              >
                Calculate Visa Cost
              </button>
              <a
                href="https://wa.me/971566556645?text=Hello%20Brightlink%20Team%2C%20I%20would%20like%20to%20inquire%20about%20the%20UAE%20Golden%20Visa."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#10b981] text-white text-center py-2.5 rounded font-semibold text-sm flex items-center justify-center gap-2"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
