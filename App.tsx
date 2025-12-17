import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import { PROJECTS } from './constants';
import AnimatedSection from './components/AnimatedSection';
import { ExternalLink, Mail } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-4 md:px-8 bg-[#0f0518]">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-16 text-center">
            Featured Projects
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 0.1}>
              <div className="group rounded-2xl bg-[#1a0b2e] border border-white/5 overflow-hidden hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-medium px-2 py-1 rounded bg-[#0f0518] text-slate-300 border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-purple-300 transition-colors"
                  >
                    View Project <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4 md:px-8 bg-[#1a0b2e] border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Get in Touch
            </h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              I'm currently available for freelance projects and full-time opportunities.
            </p>
          </div>

          <div className="inline-block relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition-opacity duration-500"></div>
            <div className="relative bg-[#0f0518] border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col items-center gap-6">
              <div className="p-4 rounded-full bg-[#1a0b2e] text-primary ring-1 ring-white/10">
                <Mail size={48} />
              </div>
              <div className="text-center">
                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">Email Address</p>
                <p className="text-2xl md:text-4xl font-bold text-white tracking-tight break-all">
                  phornphandy20@gmail.com
                </p>
              </div>
            </div>
          </div>

          <p className="mt-20 text-center text-slate-500 text-sm">
            © {new Date().getFullYear()} DevFolio. Built with React & Tailwind.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

const App: React.FC = () => {
  return (
    <div className="bg-[#0f0518] min-h-screen text-slate-50 font-sans selection:bg-primary/30">
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;