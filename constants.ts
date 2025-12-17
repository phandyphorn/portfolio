import { ExperienceItem, Project, Skill, SocialLink } from './types';

export const PROFILE = {
  name: "Phandy Phorn",
  title: "Frontend Developer",
  tagline: "Building an attractive website with reusable components.",
  about: "I am a passionate developer with over 3 years of experience in building scalable web applications. I specialize in the React ecosystem, Flutter Java and API. I believe in code that is not only functional but also beautiful and maintainable.",
  location: "Phnom Penh, Cambodia"
};

export const SKILLS: Skill[] = [
  { name: "React / Next.js / Vue.js", category: "frontend", level: 95, icon: "atom" },
  { name: "JavaScript", category: "frontend", level: 95, icon: "file-code" },
  { name: "TypeScript", category: "frontend", level: 90, icon: "code-2" },
  { name: "Tailwind CSS", category: "frontend", level: 90, icon: "palette" },
  { name: "Flutter", category: "frontend", level: 55, icon: "smartphone" },
  { name: "Material UI (MUI)", category: "frontend", level: 55, icon: "layers" },
  { name: "Apollo Client", category: "frontend", level: 55, icon: "network" },
  { name: "TanStack Query", category: "frontend", level: 55, icon: "network" },
  { name: "Java", category: "backend", level: 55, icon: "server" },
  { name: "Node.js", category: "backend", level: 80, icon: "server" },
  { name: "Laravel", category: "backend", level: 50, icon: "server" },
  { name: "PostgreSQL", category: "backend", level: 55, icon: "database" },
  { name: "Google AI Studio", category: "tools", level: 70, icon: "sparkles" },
  { name: "Jules", category: "tools", level: 70, icon: "sparkles" },
  { name: "Anti-gravity", category: "tools", level: 70, icon: "sparkles" },
  { name: "Swagger", category: "tools", level: 80, icon: "file-code" },
  { name: "Postman", category: "tools", level: 90, icon: "send" },
  { name: "Git", category: "version-control", level: 80, icon: "git-branch" },
  { name: "GitHub", category: "version-control", level: 80, icon: "github" },
  { name: "GitLab", category: "version-control", level: 70, icon: "gitlab" },
  { name: "Gerrit", category: "version-control", level: 80, icon: "git-commit" },
  { name: "Leadership", category: "soft", level: 85, icon: "users" },
  { name: "Communication", category: "soft", level: 90, icon: "message-circle" },
  { name: "Problem Solving", category: "soft", level: 80, icon: "puzzle" },
  { name: "Curiosity & Research", category: "soft", level: 90, icon: "search" },
  { name: "Khmer", category: "languages", level: 99, icon: "globe" },
  { name: "English", category: "languages", level: 85, icon: "globe" },
  { name: "French", category: "languages", level: 55, icon: "globe" },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    "id": "1",
    "role": "Web Frontend Developer",
    "company": "JakSmok",
    "period": "2023-Feb - Present",
    "description": "Contributing to the development of scalable, secure web applications within a cross-functional agile environment.",
    "achievements": [
      "Designed, developed, and maintained complex user interfaces and back-office systems using React and Next.js.",
      "Built scalable websites for both internal systems and external projects.",
      "Utilized TypeScript to improve code reliability, security, and long-term maintainability.",
      "Collaborated closely with UX/UI designers, backend engineers, and QA teams to ensure seamless API integration and high-quality user experiences.",
      "Provided technical support to the backend team using Java, contributing to faster delivery of secondary projects.",
      "Supported the mobile development team in building cross-platform features using Flutter.",
      "Participated in daily stand-up meetings and collaborated with both local and international team members."
    ]
  },
  {
    id: "2",
    role: "Vue Developer Intern",
    company: "Atech Group",
    period: "Nov 2022 - Jan 2023",
    description: "Worked under the guidance of a supervisor to learn and develop applications using Vue.js with Laravel as the backend.",
    achievements: [
      "Developed a small project for both academic requirements and supervisor evaluation.",
      "Gained hands-on experience with Vue.js and broader frontend frameworks such as React.js and Next.js.",
      "Participated in daily stand-up meetings and collaborated with the supervisor on ongoing projects."
    ]
  }

];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Vizzy",
    description: "Vizzy gives you the freedom to express yourself with personality and creativity. Showcase your skills, share your inspirations, and be seen like never before.",
    tags: ["React", "Next", "Typescript", "css", "Apollo GraphQL", "Github", "Linear", "Clickup", "Postman"],
    imageUrl: "https://images.g2crowd.com/cdn-cgi/image/width=1200,height=1200,fit=scale-down,format=auto,onerror=redirect,/https://images.g2crowd.com/uploads/attachment/file/1375876/Example-Profile-Part-Complete.jpg",
    link: "https://vizzy.com/"
  },
  {
    id: "2",
    title: "Vicity Website",
    description: "Vicity is your personal city guide, powered by AI to bring you the best of every city, tailored to what you love. Whether you're into history, food, or art, Vicity creates personalised itineraries in seconds. ",
    tags: ["React", "Firebase", "PWA"],
    imageUrl: "https://i.imgur.com/Z6mLKZi.png",
    link: "https://vicity.ai/"
  },
  {
    id: "3",
    title: "KB Prasac Back Office",
    description: "Internal webiste for the bank",
    tags: ["React", "Tanstack Query", "Swagger", "Gerrit", "Postman"],
    imageUrl: "https://placehold.co/600x400/1a0b2e/ec4899?text=KB+Back+Office",
    link: "#"
  },
  {
    id: "4",
    title: "Vicity Mobile",
    description: "Vicity is your personal city guide, powered by AI to bring you the best of every city, tailored to what you love. Whether you're into history, food, or art, Vicity creates personalised itineraries in seconds in mobile app suport both ios and android.",
    tags: ["React", "Tanstack Query", "Gerrit", "Postman"],
    imageUrl: "https://placehold.co/600x400/1a0b2e/ec4899?text=Mobile+App",
    link: "https://vicity.ai/"
  },
  {
    id: "5",
    title: "Vicity Backend",
    description: "A productivity tool for remote teams featuring real-time collaboration and offline support.",
    tags: ["React", "Firebase", "PWA"],
    imageUrl: "https://placehold.co/600x400/1a0b2e/ec4899?text=Backend+API",
    link: "#"
  },
  {
    id: "6",
    title: "Komjey Back Office",
    description: "A productivity tool for remote teams featuring real-time collaboration and offline support.",
    tags: ["React", "Firebase", "PWA"],
    imageUrl: "https://placehold.co/600x400/1a0b2e/ec4899?text=Back+Office",
    link: "#"
  },
];

export const SOCIALS: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/phandyphorn", icon: "github" },
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/phandy-phorn-9815b3254/", icon: "linkedin" },
  { platform: "Twitter", url: "https://x.com/PhandyPhorn", icon: "twitter" },
];