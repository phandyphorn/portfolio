import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import { PROJECTS } from './constants';
import AnimatedSection from './components/AnimatedSection';
import { ExternalLink } from 'lucide-react';

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
    <section className="py-20 px-4 md:px-8 bg-[#1a0b2e] border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Ready to collaborate?
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            I'm currently available for freelance projects and full-time opportunities.
            Let's build something amazing together.
          </p>
          <a 
            href="mailto:phornphandy20@gmail.com"
            className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-purple-600 text-white font-bold rounded-full hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-1 transition-all"
          >
            Get in Touch
          </a>
          <p className="mt-12 text-slate-500 text-sm">
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