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
    title: 'Neon Nexus Dashboard',
    description: 'A futuristic analytics dashboard for IoT device management with real-time data visualization.',
    image: 'https://picsum.photos/seed/cyber1/600/400',
    techStack: ['React', 'TypeScript', 'D3.js', 'WebSockets'],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    id: '2',
    title: 'AI Chatbot "Helios"',
    description: 'Generative AI chatbot integrated with Gemini API capable of context-aware conversations.',
    image: 'https://picsum.photos/seed/cyber2/600/400',
    techStack: ['Python', 'Django', 'Gemini API', 'React'],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    id: '3',
    title: 'CyberSecure Auth',
    description: 'Biometric authentication system utilizing facial recognition and blockchain logging.',
    image: 'https://picsum.photos/seed/cyber3/600/400',
    techStack: ['Python', 'OpenCV', 'Solidity', 'Flask'],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    id: '4',
    title: 'Holo-Commerce',
    description: 'An immersive 3D e-commerce experience using Three.js for product visualization.',
    image: 'https://picsum.photos/seed/cyber4/600/400',
    techStack: ['React', 'Three.js', 'Node.js', 'Stripe'],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    id: '5',
    title: 'Smart City Grid',
    description: 'Automation system for optimizing traffic light patterns using reinforcement learning.',
    image: 'https://picsum.photos/seed/cyber5/600/400',
    techStack: ['Python', 'PyTorch', 'FastAPI', 'Vue'],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    id: '6',
    title: 'Glitch Social',
    description: 'A decentralized social media platform with a cyberpunk aesthetic and end-to-end encryption.',
    image: 'https://picsum.photos/seed/cyber6/600/400',
    techStack: ['Flutter', 'Firebase', 'Dart', 'Web3'],
    demoUrl: '#',
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