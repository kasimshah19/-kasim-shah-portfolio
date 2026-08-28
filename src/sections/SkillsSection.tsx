import React, { useState } from "react";
import { SKILL_CATEGORIES } from "../data/portfolioData";

export default function SkillsSection() {
  const [selectedFilter, setSelectedFilter] = useState<string>("ALL");

  const filterOptions = [
    { id: "ALL", label: "ALL" },
    { id: "backend", label: "BACKEND" },
    { id: "databases", label: "DATABASES" },
    { id: "frontend", label: "FRONTEND" },
    { id: "tools", label: "TOOLS" },
    { id: "languages", label: "LANGUAGES" },
  ];

  // Get active skills based on filter
  const displayedSkills =
    selectedFilter === "ALL"
      ? SKILL_CATEGORIES.flatMap((c) =>
          c.skills.map((s) => ({ name: s, category: c.name })),
        )
      : SKILL_CATEGORIES.find((c) => c.id === selectedFilter)?.skills.map(
          (s) => ({
            name: s,
            category:
              SKILL_CATEGORIES.find((c) => c.id === selectedFilter)?.name || "",
          }),
        ) || [];

  return (
    <section
      id="skills"
      className="py-16 px-6 sm:px-10 lg:px-14 border-b border-[#E2DDD2]"
    >
      {/* Section Header */}
      <div className="flex flex-wrap items-baseline justify-between gap-4 pb-8 border-b border-[#E2DDD2]">
        <div className="flex items-baseline gap-3">
          <span className="text-sm font-mono text-[#D94E28] font-bold">
            §04
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#141413] font-display">
            Skills & Technical Toolkit
          </h2>
        </div>
        <span className="text-xs font-mono uppercase tracking-widest text-[#6E6A61]">
          {SKILL_CATEGORIES.length} DOMAIN CATEGORIES
        </span>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 pt-8 pb-8">
        {filterOptions.map((opt) => {
          const isActive = selectedFilter === opt.id;
          return (
            <button
              id={`skills-filter-${opt.id}`}
              key={opt.id}
              onClick={() => setSelectedFilter(opt.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-[#141413] text-[#FAF7F2] font-semibold shadow-xs"
                  : "bg-[#EAE5DA] border border-[#D6CEBF] text-[#5E5B54] hover:bg-[#E2DDD2] hover:text-[#141413]"
              }`}
            >
              {opt.label}
            </button>
          );
        })}
      </div>

      {/* Skills Chip Cloud / Grid (Matching Image 2 Reference) */}
      <div className="flex flex-wrap gap-2.5 sm:gap-3 py-4">
        {displayedSkills.map((skill, idx) => (
          <div
            key={idx}
            className="px-3.5 py-1.5 rounded-[5px] bg-transparent border border-[#CFC7B7] hover:border-[#8E8677] hover:bg-[#ECE6D9]/40 text-xs sm:text-[13px] font-mono text-[#1F1E1C] transition-colors duration-150 flex items-center justify-center cursor-default"
          >
            <span>{skill.name}</span>
          </div>
        ))}
      </div>

      {/* Center Target Dot Indicator (Matching Image 2) */}
      <div className="flex justify-center pt-10">
      </div>

      {/* Category Breakdown Cards */}
      <div className="mt-14 pt-10 border-t border-[#E2DDD2] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {SKILL_CATEGORIES.map((category) => (
          <div key={category.id} className="group relative p-4 sm:p-5 rounded-2xl border border-[#DCD6C8] bg-transparent hover:bg-[#EFEBE1] hover:border-[#D94E28]/40 transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#D94E28]/20 group-hover:bg-[#D94E28] transition-colors duration-300" />
            <div className="relative z-10 pl-2 space-y-3">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-sm sm:text-base font-bold font-display text-[#141413] group-hover:text-[#D94E28] transition-colors">
                  {category.name}
                </h3>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#EAE5DA] text-[#6E6A61] border border-[#D6CEBF]">
                  {category.skills.length} tools
                </span>
              </div>
              <p className="text-xs text-[#5E5B54] leading-relaxed border-b border-[#EAE5DA] pb-3 mb-3">
                {category.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {category.skills.slice(0, 6).map((s, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded bg-[#F4F0E8] border border-[#DCD6C8] text-[11px] font-mono text-[#6E6A61] group-hover:text-[#141413] transition-colors"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
