import React from 'react';
import { 
  Phone, 
  Mail, 
  Clock, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Send
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative w-full bg-[#0a0b0d] text-slate-400 text-xs pt-20 pb-14 border-t border-slate-800/80 overflow-hidden">
      {/* Ambient background glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-red-950/20 blur-[120px] pointer-events-none rounded-full" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Main 3/4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-14 mb-16">
          
          {/* Column 1: Brand & Contact Info (span 5) */}
          <div className="lg:col-span-5 space-y-5">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#990e1b] via-[#c81928] to-[#e62b3b] flex items-center justify-center text-white shadow-lg shadow-red-950/40">
                <span className="font-black text-2xl tracking-tighter italic">B</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 italic font-serif leading-none">
                  A Trust For Care
                </span>
                <span className="text-xl font-black tracking-tight text-white leading-tight">
                  BRIGHTLINK
                </span>
                <span className="text-[8.5px] tracking-[0.22em] font-extrabold text-[#c81928] uppercase -mt-0.5">
                  MANAGEMENT CONSULTANCY
                </span>
              </div>
            </div>

            {/* Direct Contacts */}
            <div className="space-y-3 pt-2 text-[12px] text-slate-300">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                  <Phone className="w-3.5 h-3.5 text-[#c81928]" />
                </div>
                <a href="tel:+971566556645" className="hover:text-white transition-colors font-medium">+971566556645</a>
                <span className="text-slate-600">/</span>
                <a href="tel:+971566556645" className="hover:text-white transition-colors font-medium">+971566556645</a>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                  <Mail className="w-3.5 h-3.5 text-blue-400" />
                </div>
                <a href="mailto:info@brightlinkconsulting.ae" className="hover:text-white transition-colors">info@brightlinkconsulting.ae</a>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                  <Mail className="w-3.5 h-3.5 text-blue-400" />
                </div>
                <a href="mailto:visad@brightlinkconsulting.ae" className="hover:text-white transition-colors">visad@brightlinkconsulting.ae</a>
              </div>

              <div className="flex items-start gap-3 pt-1">
                <div className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <div>
                  <span className="text-slate-200 font-medium">Monday - Saturday: 9 AM - 6 PM</span>
                  <br />
                  <span className="text-slate-500">Sunday : Closed</span>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-1">
                <div className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <span className="leading-relaxed text-slate-300">
                  Office M08-27, M1 Floor, Crystal Tower, Millennium Central Same Building, Al Asayel St, Business Bay, Dubai, U.A.E - PO BOX: 554552
                </span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-3 text-slate-400">
              <a href="#" className="w-8 h-8 rounded-xl bg-slate-900 border border-slate-800 hover:border-[#c81928] hover:bg-[#c81928] hover:text-white flex items-center justify-center transition-all duration-200">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-xl bg-slate-900 border border-slate-800 hover:border-[#c81928] hover:bg-[#c81928] hover:text-white flex items-center justify-center transition-all duration-200">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-xl bg-slate-900 border border-slate-800 hover:border-[#c81928] hover:bg-[#c81928] hover:text-white flex items-center justify-center transition-all duration-200">
                <span className="text-[10px] font-black">TikTok</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-xl bg-slate-900 border border-slate-800 hover:border-[#c81928] hover:bg-[#c81928] hover:text-white flex items-center justify-center transition-all duration-200">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-xl bg-slate-900 border border-slate-800 hover:border-[#c81928] hover:bg-[#c81928] hover:text-white flex items-center justify-center transition-all duration-200">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-xl bg-slate-900 border border-slate-800 hover:border-[#c81928] hover:bg-[#c81928] hover:text-white flex items-center justify-center transition-all duration-200">
                <span className="text-[11px] font-bold">𝕏</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-xl bg-slate-900 border border-slate-800 hover:border-[#c81928] hover:bg-[#c81928] hover:text-white flex items-center justify-center transition-all duration-200">
                <Send className="w-3.5 h-3.5" />
              </a>
            </div>

            <p className="text-[11.5px] text-slate-500 leading-relaxed pt-2 max-w-md">
              Brightlink, Your trusted UAE partner for business setup, residency, and professional services, delivering clear guidance and seamless support every step of the way.
            </p>
          </div>

          {/* Column 2: Popular Business Setup Packages (span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-black text-white tracking-wider uppercase flex items-center gap-2">
              <span className="w-1.5 h-3 bg-[#c81928] rounded-full"></span>
              <span>Popular Business Setup Packages</span>
            </h4>
            <div className="text-[10px] font-extrabold tracking-wider text-slate-500 uppercase">
              BUSINESS SETUP IN UAE FREE ZONES &amp; MAINLAND
            </div>
            
            <ul className="space-y-2 text-[11.5px] text-slate-400">
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">Sharjah Publishing City Free Zone (SPC Free Zone)</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">Ras Al Khaimah Economic Zone (RAKEZ)</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">Meydan Free Zone</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">Dubai Mainland - Department of Economy &amp; Tourism (DET)</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">Ajman Free Zone Authority (AFZA)</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">Fujairah Creative City Free Zone</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">Special Purpose Vehicle (SPV) Setup</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">Corporate Foundation Setup</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">Dubai International Financial Centre (DIFC)</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">Abu Dhabi Global Market (ADGM)</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">Dubai CommerCity</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">Dubai Multi Commodities Centre (DMCC)</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">Dubai Silicon Oasis (DSO)</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">Dubai Airport Freezone (DAFZ)</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">Dubai World Trade Centre (DWTC)</a></li>
            </ul>
          </div>

          {/* Column 3: Our Most Requested Services (span 3) */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-xs font-black text-white tracking-wider uppercase flex items-center gap-2">
              <span className="w-1.5 h-3 bg-amber-500 rounded-full"></span>
              <span>Our Most Requested Services</span>
            </h4>

            {/* Corporate Services */}
            <div>
              <div className="text-[10px] font-extrabold tracking-wider text-slate-500 uppercase mb-2">
                CORPORATE SERVICES
              </div>
              <ul className="space-y-1.5 text-[11.5px] text-slate-400">
                <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">PRO Services in Dubai</a></li>
                <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">UAE Bank Account Opening</a></li>
                <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">Outsourced HR Services</a></li>
                <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">Digital Marketing Services</a></li>
              </ul>
            </div>

            {/* Golden Visa Services */}
            <div>
              <div className="text-[10px] font-extrabold tracking-wider text-slate-500 uppercase mb-2">
                GOLDEN VISA SERVICES
              </div>
              <ul className="space-y-1.5 text-[11.5px] text-slate-400">
                <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">Dubai Golden Visa</a></li>
                <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">Property Visa</a></li>
                <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">2 Years Investor Visa</a></li>
                <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">Retirement Visa</a></li>
                <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">RAK Golden Visa</a></li>
              </ul>
            </div>

            {/* Compliance Services */}
            <div>
              <div className="text-[10px] font-extrabold tracking-wider text-slate-500 uppercase mb-2">
                COMPLIANCE SERVICES
              </div>
              <ul className="space-y-1.5 text-[11.5px] text-slate-400">
                <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">Accounting Services</a></li>
                <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">VAT Registration</a></li>
                <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">Corporate Tax Registration</a></li>
                <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">AML Compliance</a></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Payment Partners & Networks */}
        <div className="border-t border-slate-800/90 pt-8 pb-8 flex flex-col md:flex-row items-center justify-between gap-5">
          <span className="text-xs font-bold text-slate-300 tracking-wide uppercase">
            Our Payment Partners &amp; Networks
          </span>
          
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3.5 py-1.5 bg-slate-900 border border-slate-800 rounded-xl text-xs font-bold text-slate-200 shadow-2xs"> Apple Pay</span>
            <span className="px-3.5 py-1.5 bg-slate-900 border border-slate-800 rounded-xl text-xs font-extrabold text-blue-400 shadow-2xs">VISA</span>
            <span className="px-3.5 py-1.5 bg-slate-900 border border-slate-800 rounded-xl text-xs font-bold text-amber-400 shadow-2xs">mastercard</span>
            <span className="px-3.5 py-1.5 bg-slate-900 border border-slate-800 rounded-xl text-xs font-bold text-sky-400 shadow-2xs">PayPal</span>
            <span className="px-3.5 py-1.5 bg-slate-900 border border-slate-800 rounded-xl text-xs font-bold text-red-400 shadow-2xs">UnionPay</span>
            <span className="px-3.5 py-1.5 bg-slate-900 border border-slate-800 rounded-xl text-xs font-bold text-purple-400 shadow-2xs">stripe</span>
          </div>
        </div>

        {/* Legal Links & Copyright */}
        <div className="border-t border-slate-800/90 pt-8 space-y-4 text-center text-[10.5px] text-slate-500 leading-relaxed max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-4 text-slate-300 text-xs font-medium">
            <a href="#" className="hover:text-[#c81928] hover:underline transition-colors">Terms &amp; Conditions</a>
            <span className="text-slate-700">•</span>
            <a href="#" className="hover:text-[#c81928] hover:underline transition-colors">Privacy Policy</a>
            <span className="text-slate-700">•</span>
            <a href="#" className="hover:text-[#c81928] hover:underline transition-colors">Sitemap</a>
            <span className="text-slate-700">•</span>
            <a href="#" className="hover:text-[#c81928] hover:underline transition-colors">Refund Policy</a>
          </div>

          <p className="font-bold text-slate-300 text-xs">
            © 2026 Brightlink Management Consultancy L.L.C. All Rights Reserved
          </p>

          <p>
            Brightlink Management Consultancy LLC is an independent private consultancy and third-party professional service provider, licensed by the Dubai Department of Economy and Tourism (DET), License No: 1063387. We are not a government authority and are not affiliated with any UAE government entity. All official approvals, licenses, visas, certificates, and government documents are issued by the relevant UAE authorities. Our packages may include government fees and third-party fees.
          </p>

          <p>
            <strong className="text-slate-400">Privacy: </strong>
            We respect your privacy and handle personal information and documents with appropriate care. Information is used for the purposes of providing and facilitating the services requested and is handled in accordance with applicable requirements.
          </p>

          <p>
            <strong className="text-slate-400">Third-Party Disclaimer: </strong>
            This website is not affiliated with, sponsored by, or endorsed by Google LLC, Meta Platforms, Inc. (Facebook), or their subsidiaries. Any references to third-party companies, platforms, trademarks, or services are provided for identification or informational purposes only.
          </p>
        </div>

      </div>
    </footer>
  );
};
