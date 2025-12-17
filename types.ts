export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'soft' | 'version-control' | 'languages';
  level: number; // 0-100
  icon: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}