import React from 'react';
import { hobbies } from '../data/portfolioData';
import { Heart, Activity, BookOpen, Trophy } from 'lucide-react';

export default function Hobbies() {
  const getIcon = (id: string) => {
    switch (id) {
      case 'futebol':
        return <Trophy className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
      case 'atividades':
        return <Activity className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
      case 'leitura':
      default:
        return <BookOpen className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
    }
  };

  return (
    <section id="hobbies" className="py-12 sm:py-20 lg:py-24 border-t border-slate-200/80 dark:border-slate-800/80 w-full overflow-hidden bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-2.5 border border-emerald-200 dark:border-emerald-800">
            <Heart className="w-3.5 h-3.5 shrink-0" />
            <span>Perfil Pessoal & Interesses</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Hobbies & Atividades
          </h2>
          <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Interesses e hábitos que complementam a rotina profissional, cultivando trabalho em equipe, disciplina mental e aprendizado contínuo.
          </p>
        </div>

        {/* Hobbies Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {hobbies.map((hobby) => (
            <div
              key={hobby.id}
              className="group rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-emerald-500/50 dark:hover:border-emerald-500/40 transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={hobby.image}
                  alt={hobby.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>

              {/* Card Header/Footer: Title only */}
              <div className="p-4 sm:p-5 flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shrink-0">
                  {getIcon(hobby.id)}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {hobby.title}
                </h3>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
