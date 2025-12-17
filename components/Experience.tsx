import React from 'react';
import { EXPERIENCE } from '../constants';
import AnimatedSection from './AnimatedSection';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 md:px-8 bg-[#0f0518]">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-16 text-center">
            Professional Journey
          </h2>
        </AnimatedSection>

        <div className="space-y-12 relative">
          {/* Vertical line connector (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2" />

          {EXPERIENCE.map((job, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div key={job.id} className={`flex flex-col md:flex-row items-center gap-8 ${isLeft ? '' : 'md:flex-row-reverse'}`}>
                
                {/* Content Side */}
                <div className="w-full md:w-1/2">
                  <AnimatedSection delay={0.2} className={`relative p-6 rounded-2xl bg-[#1a0b2e] border border-white/5 hover:border-white/10 transition-colors ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                    <div className={`hidden md:block absolute top-6 w-4 h-4 rounded-full bg-primary border-4 border-[#0f0518] z-10 ${isLeft ? '-right-[50px]' : '-left-[50px]'}`} />
                    
                    <h3 className="text-2xl font-bold text-white">{job.role}</h3>
                    <div className={`flex items-center gap-2 text-primary font-medium mb-2 ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
                      <Briefcase size={16} />
                      <span>{job.company}</span>
                    </div>
                    <div className={`flex items-center gap-2 text-slate-400 text-sm mb-4 ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
                      <Calendar size={14} />
                      <span>{job.period}</span>
                    </div>
                    <p className="text-slate-300 mb-4">{job.description}</p>
                    
                    <ul className={`space-y-2 ${isLeft ? 'md:items-end' : 'md:items-start'} flex flex-col`}>
                      {job.achievements.map((ach, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                          {!isLeft && <CheckCircle2 size={16} className="text-purple-400 shrink-0 mt-0.5" />}
                          <span>{ach}</span>
                          {isLeft && <CheckCircle2 size={16} className="text-purple-400 shrink-0 mt-0.5" />}
                        </li>
                      ))}
                    </ul>
                  </AnimatedSection>
                </div>

                {/* Empty Spacer Side for Desktop layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;