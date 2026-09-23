/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhatIsVisa } from './components/WhatIsVisa';
import { PropertyVisa } from './components/PropertyVisa';
import { EligibilityCriteria } from './components/EligibilityCriteria';
import { CommonRejections } from './components/CommonRejections';
import { WhyStandOut } from './components/WhyStandOut';
import { Testimonials } from './components/Testimonials';
import { FAQSection } from './components/FAQSection';
import { BannerCTA } from './components/BannerCTA';
import { GovernmentAuthorities } from './components/GovernmentAuthorities';
import { OfficeLocation } from './components/OfficeLocation';
import { B2BReferral } from './components/B2BReferral';
import { Footer } from './components/Footer';
import { FloatingWidgets } from './components/FloatingWidgets';

// Interactive Modals
import { VisaCostCalculatorModal } from './components/modals/VisaCostCalculatorModal';
import { EligibilityCheckModal } from './components/modals/EligibilityCheckModal';
import { ConsultationModal } from './components/modals/ConsultationModal';
import { AppointmentModal } from './components/modals/AppointmentModal';
import { ReferralPartnerModal } from './components/modals/ReferralPartnerModal';
import { LiveChatModal } from './components/modals/LiveChatModal';
import { ReviewModal } from './components/modals/ReviewModal';

export default function App() {
  // Modal states
  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const [eligibilityOpen, setEligibilityOpen] = useState(false);
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [consultationTopic, setConsultationTopic] = useState('');
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  const [referralOpen, setReferralOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [reviewOpen, setReviewOpen] = useState(false);

  const openConsultationWithTopic = (topic?: string) => {
    if (topic) setConsultationTopic(topic);
    setConsultationOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-[#c81928] selection:text-white">
      {/* 1. Header & Navigation */}
      <Navbar
        onOpenCalculator={() => setCalculatorOpen(true)}
        onOpenEligibility={() => setEligibilityOpen(true)}
        onOpenConsultation={() => openConsultationWithTopic('General Golden Visa Consultation')}
      />

      {/* Main Page Flow Matching 100% Screenshot */}
      <main className="flex-1 w-full">
        {/* 2. Hero Section */}
        <Hero
          onOpenCalculator={() => setCalculatorOpen(true)}
          onOpenEligibility={() => setEligibilityOpen(true)}
        />

        {/* 3. What is a UAE Golden Visa? */}
        <WhatIsVisa />

        {/* 4. Property Visa: Pathway to Residency */}
        <PropertyVisa
          onSelectPathway={(pathway) => openConsultationWithTopic(pathway)}
        />

        {/* 5. Eligibility Criteria for the Golden Visa UAE */}
        <EligibilityCriteria
          onOpenConsultation={() => openConsultationWithTopic('Eligibility Criteria Evaluation')}
        />

        {/* 6. How to Avoid Golden Visa Application Rejection */}
        <CommonRejections />

        {/* 7. Why the UAE Golden Visa Stands Out Globally */}
        <WhyStandOut
          onOpenEligibility={() => setEligibilityOpen(true)}
        />

        {/* 8. Real Clients, Real Results (Testimonials) */}
        <Testimonials
          onWriteReview={() => setReviewOpen(true)}
        />

        {/* 9. Got Questions? We're Here to Help. (FAQ) */}
        <FAQSection
          onOpenConsultation={() => openConsultationWithTopic('Golden Visa FAQ Inquiry')}
        />

        {/* 10. Find Out Today Whether You Qualify (Dark CTA) */}
        <BannerCTA
          onOpenConsultation={() => openConsultationWithTopic('Direct Qualification Assessment')}
        />

        {/* 11. We Work Directly With Official UAE Government Authorities */}
        <GovernmentAuthorities />

        {/* 12. Visit Our Office */}
        <OfficeLocation
          onBookAppointment={() => setAppointmentOpen(true)}
        />

        {/* 13. Grow Together With Our B2B Referral Program */}
        <B2BReferral
          onOpenReferralModal={() => setReferralOpen(true)}
        />
      </main>

      {/* 14. Comprehensive Footer */}
      <Footer />

      {/* 15. Floating Quick Action Bar & Live Chat Trigger */}
      <FloatingWidgets
        onOpenConsultation={() => openConsultationWithTopic('Quick Consultation Inquiry')}
        onToggleChat={() => setChatOpen(!chatOpen)}
        isChatOpen={chatOpen}
      />

      {/* Interactive Feature Modals */}
      <VisaCostCalculatorModal
        isOpen={calculatorOpen}
        onClose={() => setCalculatorOpen(false)}
      />

      <EligibilityCheckModal
        isOpen={eligibilityOpen}
        onClose={() => setEligibilityOpen(false)}
      />

      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        defaultTopic={consultationTopic}
      />

      <AppointmentModal
        isOpen={appointmentOpen}
        onClose={() => setAppointmentOpen(false)}
      />

      <ReferralPartnerModal
        isOpen={referralOpen}
        onClose={() => setReferralOpen(false)}
      />

      <ReviewModal
        isOpen={reviewOpen}
        onClose={() => setReviewOpen(false)}
      />

      <LiveChatModal
        isOpen={chatOpen}
        onClose={() => setChatOpen(false)}
      />
    </div>
  );
}
