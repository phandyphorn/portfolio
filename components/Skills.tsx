import React from 'react';
import { SKILLS } from '../constants';
import AnimatedSection from './AnimatedSection';
import { Code, Server, Wrench, Users, MessageCircle, Puzzle, Palette, Sparkles, Database, Atom, Smartphone, Search, GitBranch, Github, Gitlab, GitCommit, Globe, Network, FileCode, Send, Layers } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  'code-2': <Code size={24} />,
  'server': <Server size={24} />,
  'container': <Wrench size={24} />,
  'users': <Users size={24} />,
  'message-circle': <MessageCircle size={24} />,
  'puzzle': <Puzzle size={24} />,
  'palette': <Palette size={24} />,
  'sparkles': <Sparkles size={24} />,
  'database': <Database size={24} />,
  'atom': <Atom size={24} />,
  'smartphone': <Smartphone size={24} />,
  'search': <Search size={24} />,
  'git-branch': <GitBranch size={24} />,
  'github': <Github size={24} />,
  'gitlab': <Gitlab size={24} />,
  'git-commit': <GitCommit size={24} />,
  'globe': <Globe size={24} />,
  'network': <Network size={24} />,
  'file-code': <FileCode size={24} />,
  'send': <Send size={24} />,
  'layers': <Layers size={24} />,
};

const SkillCard: React.FC<{ skill: typeof SKILLS[0]; index: number }> = ({ skill, index }) => (
  <AnimatedSection delay={index * 0.05}>
    <div className="group relative bg-[#261445]/50 backdrop-blur-sm p-6 rounded-2xl border border-white/5 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 h-full">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg ${skill.category === 'soft' || skill.category === 'languages' ? 'bg-purple-500/20 text-purple-300' : 'bg-primary/20 text-primary'} group-hover:scale-110 transition-transform duration-300`}>
          {iconMap[skill.icon] || <Code size={24} />}
        </div>
        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-[#1a0b2e] px-2 py-1 rounded-full border border-white/5">
          {skill.category.replace('-', ' ')}
        </span>
      </div>
      <h3 className="text-lg font-bold text-white mb-2">{skill.name}</h3>
      <div className="w-full bg-[#1a0b2e] rounded-full h-1.5 overflow-hidden">
        <div 
          className={`h-full rounded-full ${skill.category === 'soft' || skill.category === 'languages' ? 'bg-purple-400' : 'bg-primary'}`}
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  </AnimatedSection>
);

const Skills: React.FC = () => {
  // Categorize skills and sort by level (highest first)
  const frontendSkills = SKILLS.filter(s => s.category === 'frontend').sort((a, b) => b.level - a.level);
  const backendSkills = SKILLS.filter(s => s.category === 'backend').sort((a, b) => b.level - a.level);
  const toolsSkills = SKILLS.filter(s => s.category === 'tools').sort((a, b) => b.level - a.level);
  const versionControlSkills = SKILLS.filter(s => s.category === 'version-control').sort((a, b) => b.level - a.level);
  const softSkills = SKILLS.filter(s => s.category === 'soft').sort((a, b) => b.level - a.level);
  const languageSkills = SKILLS.filter(s => s.category === 'languages').sort((a, b) => b.level - a.level);

  return (
    <section id="skills" className="py-20 px-4 md:px-8 bg-[#1a0b2e]">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-300 mb-16 text-center">
            Skills & Expertise
          </h2>
        </AnimatedSection>

        <div className="space-y-16">
          {/* Frontend Section */}
          <div>
            <AnimatedSection>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
                <h3 className="text-2xl font-display font-bold text-white flex items-center gap-3">
                  <Atom className="text-primary" size={28} />
                  Frontend Development
                </h3>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
              </div>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {frontendSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          {/* Backend Section */}
          <div>
            <AnimatedSection>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
                <h3 className="text-2xl font-display font-bold text-white flex items-center gap-3">
                  <Server className="text-purple-400" size={28} />
                  Backend Development
                </h3>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
              </div>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {backendSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          {/* Tools Section */}
          <div>
            <AnimatedSection>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
                <h3 className="text-2xl font-display font-bold text-white flex items-center gap-3">
                  <Wrench className="text-fuchsia-400" size={28} />
                  Tools & Platforms
                </h3>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
              </div>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {toolsSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          {/* Version Control Section */}
          <div>
            <AnimatedSection>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
                <h3 className="text-2xl font-display font-bold text-white flex items-center gap-3">
                  <GitBranch className="text-orange-400" size={28} />
                  Version Control
                </h3>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
              </div>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {versionControlSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          {/* Soft Skills Section */}
          <div>
            <AnimatedSection>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
                <h3 className="text-2xl font-display font-bold text-white flex items-center gap-3">
                  <Users className="text-indigo-300" size={28} />
                  Soft Skills
                </h3>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
              </div>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {softSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          {/* Languages Section */}
          <div>
            <AnimatedSection>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
                <h3 className="text-2xl font-display font-bold text-white flex items-center gap-3">
                  <Globe className="text-emerald-400" size={28} />
                  Languages
                </h3>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
              </div>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {languageSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;