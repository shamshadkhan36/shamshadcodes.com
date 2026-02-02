import { Code2, Brain, Globe, Bot, Smartphone, Layout, Github, Linkedin, Send } from 'lucide-react';
import { NavItem, Project, Service, Skill, SocialLink } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export const SKILLS: Skill[] = [
  { name: 'JavaScript (ES6+)', level: 95, category: 'Frontend' },
  { name: 'TypeScript', level: 90, category: 'Frontend' },
  { name: 'React.js', level: 92, category: 'Frontend' },
  { name: 'Django', level: 85, category: 'Backend' },
  { name: 'Python', level: 95, category: 'AI/ML' },
  { name: 'Flutter', level: 80, category: 'Frontend' },
  { name: 'SQL (PostgreSQL)', level: 88, category: 'Backend' },
  { name: 'TensorFlow / PyTorch', level: 85, category: 'AI/ML' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'CRM System',
    description: 'A comprehensive Customer Relationship Management solution for managing business interactions and data.',
    image: '/images/crm.png',
    techStack: ['Laravel', 'PHP', 'MySQL'],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    id: '2',
    title: 'Guard Tour',
    description: 'Security patrol tracking and management system to ensure premise safety and accountability.',
    image: '/images/guard_tour.png',
    techStack: ['Flutter', 'Dart', 'Firebase'],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    id: '3',
    title: 'Binance Bot',
    description: 'Automated cryptocurrency trading bot utilizing technical analysis and the Binance API.',
    image: '/images/binance.png',
    techStack: ['Python', 'Binance API', 'Pandas'],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    id: '4',
    title: 'SmartToolZone.com',
    description: 'An online utility toolkit featuring various productivity and calculation tools.',
    image: '/images/smarttoolszone.png',
    techStack: ['React', 'TypeScript', 'Vite'],
    demoUrl: 'https://smarttoolzone.com',
    githubUrl: '#',
  },
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Web Development',
    description: 'Building responsive, high-performance websites with modern frameworks like React and Next.js.',
    icon: Globe,
  },
  {
    id: '2',
    title: 'AI Solutions',
    description: 'Developing custom AI models, chatbots, and automation pipelines using Python and LLMs.',
    icon: Brain,
  },
  {
    id: '3',
    title: 'App Development',
    description: 'Cross-platform mobile applications using Flutter for seamless user experiences.',
    icon: Smartphone,
  },
  {
    id: '4',
    title: 'Automation Systems',
    description: 'Streamlining business processes with custom scripts, bots, and backend integrations.',
    icon: Bot,
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com', icon: Github },
  { platform: 'LinkedIn', url: 'https://linkedin.com', icon: Linkedin },
  { platform: 'Telegram', url: 'https://telegram.org', icon: Send },
];