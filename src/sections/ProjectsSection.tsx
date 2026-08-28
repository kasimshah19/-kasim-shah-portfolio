import React, { useState } from 'react';
import { ArrowUpRight, Play } from 'lucide-react';
import { PROJECTS, PERSONAL_INFO } from '../data/portfolioData';
import { ProjectItem } from '../types';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

export default function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = ['ALL', 'FULL-STACK', 'FRONTEND', 'BACKEND', 'UI/UX', 'SYSTEM'];

  const filteredProjects =
    activeCategory === 'ALL'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category.toUpperCase() === activeCategory);

  return (
    <section
      id="projects"
      className="py-16 px-6 sm:px-10 lg:px-14 border-b border-[#E2DDD2]"
    >
      {/* Section Header */}
      <div className="flex flex-wrap items-baseline justify-between gap-4 pb-8 border-b border-[#E2DDD2]">
        <div className="flex items-baseline gap-3">
          <span className="text-sm font-mono text-[#D94E28] font-bold">§01</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#141413] font-display">
            Projects
          </h2>
        </div>
        <span className="text-xs font-mono uppercase tracking-widest text-[#6E6A61] font-semibold">
          FEATURED PROJECTS & CASE STUDIES
        </span>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 pt-6 pb-10">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              id={`filter-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-mono tracking-wider transition-colors cursor-pointer font-bold ${
                isActive
                  ? 'bg-[#D94E28] text-white shadow-sm'
                  : 'bg-[#EAE5DA] text-[#5E5B54] hover:text-[#141413] hover:bg-[#E2DDD2]'
              }`}
            >
              {cat.toUpperCase()}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            id={`project-card-${project.id}`}
            onClick={() => onSelectProject(project)}
            className="group cursor-pointer flex flex-col justify-between rounded-2xl bg-[#FAF7F2] border border-[#DCD6C8] hover:border-[#B8B0A2] hover:shadow-lg transition-all duration-300 overflow-hidden"
          >
            {/* Top Browser Frame Mockup */}
            <div className="relative bg-[#141413] text-[#FAF7F2] border-b border-[#2C2B29] overflow-hidden">
              {/* Browser Header Bar */}
              <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#1C1B19] border-b border-[#2E2C29] text-[11px] font-mono text-[#A39E92]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E06C75]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E5C07B]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#98C379]" />
                  <span className="ml-2 text-[10px] text-[#6E6A61] hidden sm:inline">
                    localhost:5173/{project.id}
                  </span>
                </div>
                <div className="px-2 py-0.5 rounded-full bg-[#2C2B29] text-[10px] font-mono text-[#D94E28] font-bold">
                  PROJ-{project.number}
                </div>
              </div>

              {/* Dynamic Visual Canvas Area */}
              <div className="relative h-48 sm:h-56 p-5 flex flex-col justify-between bg-gradient-to-br from-[#1C1B19] via-[#141413] to-[#0E0E0D] group-hover:scale-[1.01] transition-transform duration-300">
                <div className="absolute inset-0 bg-[radial-gradient(#D94E28_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

                {/* Top preview tag */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-[#2C2B29]/90 border border-[#3E3C38] text-[10px] font-mono text-[#E5E0D5]">
                    {project.category}
                  </span>
                  <span className="text-[10px] font-mono text-[#A39E92]">
                    {project.year}
                  </span>
                </div>

                {/* Center abstract project graphic */}
                <div className="relative z-10 my-auto text-center space-y-1">
                  <div className="text-lg sm:text-xl font-bold font-display text-[#FAF7F2] tracking-tight">
                    {project.title}
                  </div>
                  <div className="text-xs font-mono text-[#D94E28] line-clamp-1">
                    {project.tagline}
                  </div>
                </div>

                {/* Bottom interactive controls bar */}
                <div className="relative z-10 flex items-center justify-between pt-2">
                  <button
                    aria-label="Inspect project"
                    className="w-8 h-8 rounded-full bg-[#2C2B29] border border-[#3E3C38] flex items-center justify-center text-[#FAF7F2] group-hover:bg-[#D94E28] group-hover:border-[#D94E28] transition-colors"
                  >
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  </button>

                  <div className="w-8 h-8 rounded-full bg-[#2C2B29] border border-[#3E3C38] flex items-center justify-center text-[#FAF7F2] group-hover:bg-[#FAF7F2] group-hover:text-[#141413] transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Card Content Info */}
            <div className="p-5 sm:p-6 space-y-3">
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-bold text-[#141413] font-display group-hover:text-[#D94E28] transition-colors">
                  {project.title}
                </h3>
                <span className="text-xs font-mono text-[#6E6A61]">
                  {project.year}
                </span>
              </div>

              <div className="text-xs font-mono uppercase tracking-wider text-[#6E6A61] line-clamp-1">
                {project.tagline}
              </div>

              <p className="text-xs sm:text-sm text-[#5E5B54] leading-relaxed line-clamp-2">
                {project.shortDescription}
              </p>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.techStack.slice(0, 4).map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded bg-[#EAE5DA] border border-[#D6CEBF] text-[11px] font-mono text-[#141413]"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 4 && (
                  <span className="px-2 py-0.5 rounded bg-[#EAE5DA] border border-[#D6CEBF] text-[11px] font-mono text-[#6E6A61]">
                    +{project.techStack.length - 4} more
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* GitHub Repository CTA Link */}
      <div className="mt-12 text-center">
        <a
          id="github-all-projects-link"
          href={PERSONAL_INFO.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-mono text-[#141413] hover:text-[#D94E28] transition-colors border-b border-[#141413] hover:border-[#D94E28] pb-1 font-medium"
        >
          <span>See more repositories on GitHub</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}

