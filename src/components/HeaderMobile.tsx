import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeaderMobileProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function HeaderMobile({ activeSection, onNavigate }: HeaderMobileProps) {
  const handleLinkClick = (id: string) => {
    onNavigate(id);
  };

  return (
    <header
      id="mobile-header"
      className="lg:hidden sticky top-0 z-40 bg-[#F4F0E8]/95 backdrop-blur-md border-b border-[#E2DDD2] px-4 py-3.5 flex items-center justify-between"
    >
      {/* Brand */}
      <a
        href="#home"
        onClick={(e) => {
          e.preventDefault();
          handleLinkClick('home');
        }}
        className="text-2xl font-extrabold tracking-tighter text-[#141413]"
      >
        <span>KS</span>
        <span className="text-[#D94E28]">.</span>
      </a>

      {/* Center status pill */}
      <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#EAE5DA] border border-[#D6CEBF] text-[11px] font-mono">
        <span className="w-1.5 h-1.5 rounded-full bg-[#D94E28] pulse-status" />
        <span>Open to work</span>
      </div>

      {/* Contact Link */}
      <button
        id="mobile-contact-btn"
        onClick={() => handleLinkClick('contact')}
        className="text-[#141413] hover:text-[#D94E28] font-mono text-[13px] uppercase tracking-widest font-bold transition-colors"
      >
        CONTACT
      </button>
    </header>
  );
}
