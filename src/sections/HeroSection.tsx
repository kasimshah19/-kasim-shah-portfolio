import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';
import heroBgImage from '../assets/images/hero_workspace_robot_1787493399344.jpg';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
  isReady?: boolean;
}

export default function HeroSection({ onNavigate, isReady = true }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative flex flex-col justify-between border-b border-[#E2DDD2] bg-[#F4F0E8] overflow-hidden"
    >
      {/* Top Hero Banner Area with Visual Background */}
      <div className="relative min-h-[560px] lg:min-h-[640px] flex flex-col justify-center px-6 sm:px-10 lg:px-14 pt-12 pb-12">
        {/* Background Image Layer with smooth left/bottom blend */}
        <motion.div
          className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: isReady ? 1 : 0, scale: isReady ? 1.05 : 1.08 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Cinematic Video Layer - Desktop & Laptop */}
          <video
            src="/robot.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="hidden md:block w-full h-full object-cover md:object-[center_right] contrast-[1.05] saturate-110 opacity-95"
          />

          {/* Static Image Layer - Mobile & Tablets */}
          <img
            src={heroBgImage}
            alt="Kasim Shah developer workspace"
            referrerPolicy="no-referrer"
            className="block md:hidden w-full h-full object-cover object-right"
          />

          {/* Premium Glass & Vignette Overlays */}
          {/* 1. Base Gradient for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F4F0E8] via-[#F4F0E8]/95 sm:via-[#F4F0E8]/85 to-transparent/10" />
          
          {/* 2. Top and Bottom Soft Fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#F4F0E8] via-transparent to-[#F4F0E8]/30" />
          
          {/* 3. Sleek Radial Vignette to focus cinematic feeling */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#F4F0E8_110%)] opacity-80" />
          
          {/* 4. Elegant Micro-dot Overlay for Tech Vibe */}
          <div className="absolute inset-0 bg-[radial-gradient(#141413_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04] pointer-events-none" />
          
          {/* 5. Subtle Brand Color Tinting */}
          <div className="absolute inset-0 bg-[#D94E28]/[0.02] mix-blend-color-burn" />
        </motion.div>

        {/* Content Container (Matches reference image) */}
        <div className="relative z-10 max-w-3xl space-y-6 sm:space-y-7">
          {/* Top Status Pill: OPEN TO WORK • FULL-TIME & IMMEDIATE JOINER */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: isReady ? 1 : 0, y: isReady ? 0 : -12 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#EAE4D6]/90 border border-[#D6CEBF]/90 backdrop-blur-xs text-xs font-mono text-[#141413] shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D94E28] shrink-0 pulse-status" />
              <span className="font-bold uppercase tracking-wider text-[11px] sm:text-xs text-[#141413]">
                OPEN TO WORK
              </span>
              <span className="text-[#9C968B] font-mono">•</span>
              <span className="font-mono text-[#5E5B54] uppercase tracking-wider text-[11px] sm:text-xs font-semibold">
                FULL-TIME &amp; IMMEDIATE JOINER
              </span>
            </div>
          </motion.div>

          {/* Subheader Kicker */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isReady ? 1 : 0, y: isReady ? 0 : 10 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs sm:text-sm font-mono tracking-[0.2em] uppercase text-[#4A4740] font-semibold"
          >
            FULL STACK DEVELOPER &amp; SOFTWARE ENGINEER
          </motion.div>

          {/* Main Title: Kasim Shah */}
          <motion.h1
            initial={{ opacity: 0, y: 18, filter: 'blur(4px)' }}
            animate={{ opacity: isReady ? 1 : 0, y: isReady ? 0 : 18, filter: isReady ? 'blur(0px)' : 'blur(4px)' }}
            transition={{ duration: 0.75, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[76px] font-extrabold tracking-tight text-[#141413] font-display leading-[1.02]"
          >
            Kasim Shah
          </motion.h1>

          {/* Lead Paragraph Description */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: isReady ? 1 : 0, y: isReady ? 0 : 14 }}
            transition={{ duration: 0.7, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg md:text-[19px] text-[#3E3B34] max-w-2xl leading-relaxed font-sans font-normal"
          >
            I build scalable web applications and high-impact software: architecting Express &amp; MongoDB backends, designing intuitive React frontends, and shipping production-ready systems people can actually use.
          </motion.p>

          {/* Action Buttons Row */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: isReady ? 1 : 0, y: isReady ? 0 : 14 }}
            transition={{ duration: 0.7, delay: 0.54, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1"
          >
            {/* Button 1: View projects */}
            <button
              id="hero-view-projects-btn"
              onClick={() => onNavigate('projects')}
              className="w-full sm:w-auto justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-[#141413] text-[#FAF7F2] text-sm font-mono font-medium hover:bg-[#2C2B29] transition-all duration-200 shadow-sm flex items-center gap-2 group cursor-pointer"
            >
              <span>View projects</span>
              <ArrowUpRight className="w-4 h-4 text-[#D94E28] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            {/* Button 2: Get in touch */}
            <button
              id="hero-get-in-touch-btn"
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-[#EAE5DA] border border-[#D6CEBF] text-[#141413] text-sm font-mono font-medium hover:bg-[#E2DDD2] transition-colors cursor-pointer"
            >
              <span>Get in touch</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Hero Stats Strip (Matching Reference Image with Medium, Balanced Scaling) */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: isReady ? 1 : 0, y: isReady ? 0 : 15 }}
        transition={{ duration: 0.7, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full border-t border-[#E2DDD2] bg-[#F4F0E8]"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#E2DDD2] px-6 sm:px-10 lg:px-14">
          {/* Stat 1: 7.03 */}
          <div className="py-5 sm:py-6 pr-4 sm:pr-6 first:pl-0">
            <div className="text-2xl sm:text-[28px] font-bold font-display text-[#141413] tracking-tight">
              7.03
            </div>
            <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#6E6A61] mt-1.5 leading-snug font-medium">
              CGPA (MSBTE) / B.TECH 7TH SEM
            </div>
          </div>

          {/* Stat 2: 10+ */}
          <div className="py-5 sm:py-6 sm:px-6">
            <div className="text-2xl sm:text-[28px] font-bold font-display text-[#141413] tracking-tight">
              10+
            </div>
            <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#6E6A61] mt-1.5 leading-snug font-medium">
              SHIPPED WEB REPOSITORIES
            </div>
          </div>

          {/* Stat 3: 100% */}
          <div className="py-5 sm:py-6 sm:px-6">
            <div className="text-2xl sm:text-[28px] font-bold font-display text-[#141413] tracking-tight">
              100%
            </div>
            <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#6E6A61] mt-1.5 leading-snug font-medium">
              FULL-STACK CODE COMPLETION
            </div>
          </div>

          {/* Stat 4: MERN */}
          <div className="py-5 sm:py-6 sm:pl-6 last:pr-0">
            <div className="text-2xl sm:text-[28px] font-bold font-display text-[#141413] tracking-tight">
              MERN
            </div>
            <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#6E6A61] mt-1.5 leading-snug font-medium flex items-center flex-wrap">
              <span className="text-[#D94E28] mr-1 text-[9px]">●</span>
              <span>REACT • NODE • EXPRESS • MONGO</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
