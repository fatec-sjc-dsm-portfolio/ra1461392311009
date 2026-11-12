import React from 'react';
import { technicalSkills } from '../data/portfolioData';
import { Cpu, Code2, Database, Wrench } from 'lucide-react';
import TechIcon from './TechIcon';

export default function Technologies() {
  const getCategoryIcon = (category: string) => {
    if (category.includes('Linguagens')) return <Code2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
    if (category.includes('Backend')) return <Cpu className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />;
    if (category.includes('Bancos')) return <Database className="w-4 h-4 text-amber-600 dark:text-amber-400" />;
    return <Wrench className="w-4 h-4 text-teal-600 dark:text-teal-400" />;
  };

  return (
    <section id="tecnologias" className="py-10 sm:py-16 border-t border-slate-200/80 dark:border-slate-800/80 w-full overflow-hidden bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-2.5 border border-emerald-200 dark:border-emerald-800">
            <Cpu className="w-3.5 h-3.5 shrink-0" />
            <span>Competências Técnicas</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Tecnologias & Ferramentas
          </h2>
          <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Stack tecnológica desenvolvida e aplicada na prática em projetos integradores (API) e pesquisas de engenharia de software e dados.
          </p>
        </div>

        {/* Categories Grid - Compact Icon Only */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {technicalSkills.map((cat, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4"
            >
              {/* Category Title Header */}
              <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100 dark:border-slate-800/80">
                <div className="p-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 shadow-sm border border-slate-200/70 dark:border-slate-700">
                  {getCategoryIcon(cat.category)}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white tracking-tight">
                  {cat.category}
                </h3>
              </div>

              {/* Technologies: Icons Only with Tooltip */}
              <div className="flex flex-wrap gap-2.5 sm:gap-3 items-center">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    title={skill}
                    aria-label={skill}
                    className="group relative p-3 sm:p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/80 shadow-sm hover:shadow-md hover:border-emerald-500/60 dark:hover:border-emerald-500/50 hover:bg-white dark:hover:bg-slate-800 transition-all duration-200 flex items-center justify-center hover:-translate-y-0.5 cursor-pointer"
                  >
                    <TechIcon name={skill} className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-transform duration-200 shrink-0" />
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
