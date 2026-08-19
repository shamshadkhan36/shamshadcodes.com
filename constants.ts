import { 
  Globe, 
  ShoppingBag, 
  Smartphone, 
  Cpu, 
  Bot, 
  RefreshCw, 
  MessageSquare, 
  Layers, 
  Code, 
  ShieldCheck, 
  Zap, 
  Headphones, 
  Sparkles,
  Github, 
  Linkedin, 
  Send,
  CheckCircle2,
  TrendingUp,
  FileCode2,
  Database,
  BarChart3
} from 'lucide-react';
import { 
  NavItem, 
  Project, 
  Service, 
  PricingPlan, 
  ProcessStep, 
  WhyChoosePoint, 
  FAQItem, 
  SkillCategory, 
  SocialLink 
} from './types';

export const BRAND = {
  name: 'ShamshadCodes',
  founder: 'Shamshad Khan',
  title: 'Full Stack Developer & Software Development Partner',
  tagline: 'Build Your Digital Business With ShamshadCodes',
  subheading: 'Websites, mobile apps, custom software and automation solutions designed to help businesses grow online.',
  email: 'samsamkhan36@gmail.com',
  phone: '+91 91372 26861',
  phoneDisplay: '+91 91372 26861',
  whatsappUrl: 'https://wa.me/919137226861?text=Hi%20Shamshad,%20I%20found%20ShamshadCodes%20and%20would%20like%20to%20discuss%20a%20project.',
  location: 'Mumbai, Maharashtra, India',
  availability: 'Available for New Projects',
  responseGuarantee: 'Guaranteed response within 2 hours',
  experienceYears: '5+',
  deliveredProjects: '20+',
  satisfactionRate: '100%',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export const TRUST_METRICS = [
  { value: '20+', label: 'Delivered Projects', sub: 'Across Web, Mobile & Automation' },
  { value: '5+ Years', label: 'Engineering Experience', sub: 'Full Stack & Mobile Systems' },
  { value: '100%', label: 'Direct Communication', sub: 'Speak Directly With The Lead Developer' },
  { value: '₹10,000', label: 'Starting Price', sub: 'Transparent Pricing & Clear Deliverables' },
];

export const PROBLEM_SOLUTIONS = [
  {
    problem: {
      title: 'Outdated or Generic Website',
      description: 'Losing high-value clients to competitors because your website is slow, looks uninspired, or fails to convert visitors on mobile.',
    },
    solution: {
      title: 'Bespoke High-Converting Platforms',
      description: 'Lightning-fast, mobile-first websites designed with modern typography, persuasive layouts, and instant conversion triggers.',
    }
  },
  {
    problem: {
      title: 'Time-Consuming Manual Processes',
      description: 'Spending endless hours manually answering customer inquiries, managing inquiries in spreadsheets, and chasing follow-ups.',
    },
    solution: {
      title: 'WhatsApp & Business Automation',
      description: 'Automate customer lead capture, instant WhatsApp replies, notification triggers, and CRM sync to save hours every single week.',
    }
  },
  {
    problem: {
      title: 'Off-The-Shelf Tools That Don’t Fit',
      description: 'Struggling with rigid SaaS tools that charge monthly subscription fees but still do not match your exact operational workflow.',
    },
    solution: {
      title: 'Custom-Built Scalable Software',
      description: 'Tailored management systems, custom admin dashboards, and mobile apps built specifically around your business requirements.',
    }
  },
  {
    problem: {
      title: 'Agency Overhead & Slow Communication',
      description: 'Dealing with agency account managers who don’t code, resulting in weeks of delays, miscommunication, and surprise hidden costs.',
    },
    solution: {
      title: 'Direct Developer Partnership',
      description: 'Work directly 1-on-1 with Shamshad Khan. Swift iteration, transparent milestones, daily progress, and zero agency markups.',
    }
  },
];

export const SERVICES: Service[] = [
  {
    id: 'web-dev',
    title: 'Website Development',
    description: 'Professional, lightning-fast responsive websites crafted to establish brand authority and convert visitors into loyal paying customers.',
    icon: Globe,
    badge: 'Popular',
    startingPrice: '₹10,000',
    features: [
      'Custom modern UI/UX design (No cookie-cutter templates)',
      '100% Mobile & tablet responsive layouts',
      'Technical SEO & Core Web Vitals optimization',
      'Contact forms & direct WhatsApp integration',
      'High-speed cloud deployment & SSL security'
    ]
  },
  {
    id: 'ecommerce-dev',
    title: 'E-commerce Development',
    description: 'Scalable online storefronts with seamless product management, automated checkout flows, and secure payment integrations.',
    icon: ShoppingBag,
    badge: 'High ROI',
    startingPrice: '₹18,000',
    features: [
      'Razorpay, Stripe & UPI Payment Gateway setup',
      'Dynamic catalog, inventory & order tracking',
      'Mobile-optimized high-converting checkout',
      'WhatsApp order confirmation & automated alerts',
      'Admin dashboard for easy product updates'
    ]
  },
  {
    id: 'mobile-app',
    title: 'Mobile App Development',
    description: 'High-performance cross-platform mobile apps for Android and iOS engineered with Flutter for fluid animations and native speed.',
    icon: Smartphone,
    badge: 'Cross-Platform',
    startingPrice: '₹25,000',
    features: [
      'Single codebase for Android & iOS (Flutter)',
      'Offline caching & real-time cloud data sync',
      'Push notifications & user authentication',
      'Interactive maps, camera & device feature APIs',
      'Play Store & App Store deployment guidance'
    ]
  },
  {
    id: 'custom-software',
    title: 'Custom Software & Dashboards',
    description: 'Tailored web applications, internal management portals, and business dashboards engineered to streamline complex operations.',
    icon: Cpu,
    startingPrice: '₹22,000',
    features: [
      'Custom CRM, ERP & internal business tools',
      'Role-based access control & secure databases',
      'Real-time data visualization & analytics',
      'Robust REST APIs & cloud infrastructure',
      'Scalable architecture built on Django / FastAPI / Node'
    ]
  },
  {
    id: 'automation',
    title: 'Business & WhatsApp Automation',
    description: 'Automated communication workflows, WhatsApp bots, and API integrations that eliminate repetitive manual business tasks.',
    icon: Bot,
    badge: 'Time Saver',
    startingPrice: '₹12,000',
    features: [
      'Official WhatsApp Business API integration',
      'Automated customer support & FAQ bot workflows',
      'CRM & Google Sheets instant lead synchronisation',
      'Automated email, SMS & payment webhook alerts',
      'Custom API connectors & cron job automation'
    ]
  },
  {
    id: 'redesign-speed',
    title: 'Website Redesign & Speed Optimization',
    description: 'Modernize outdated designs, elevate your visual prestige, and accelerate load speeds to achieve higher conversion rates and Google rankings.',
    icon: RefreshCw,
    startingPrice: '₹10,000',
    features: [
      'Complete UI/UX overhaul to modern standards',
      'Google PageSpeed Score optimization (90+)',
      'Asset compression, code splitting & clean structure',
      'Fix broken navigation & responsiveness flaws',
      'Preserve all existing SEO rankings & URLs'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'arc-tech',
    title: 'Arc Tech Interior',
    category: 'web',
    categoryLabel: 'Web Platform',
    tagline: 'Modern Architecture & Luxury Interior Showcase',
    description: 'A premium portfolio and client consultation website for a high-end architectural and interior design studio in Mumbai. Features ultra-clean galleries, immersive project case studies, and fast lead capture.',
    image: '/images/profile.jpg',
    mockupType: 'browser',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    features: ['High-resolution project gallery', 'Client consultation inquiry flow', 'Mobile-first design', 'SEO optimized for luxury search terms'],
    demoUrl: 'https://shamshadcodes.com',
    featured: true
  },
  {
    id: 'kalasaar',
    title: 'Kalasaar Interiors',
    category: 'web',
    categoryLabel: 'Web Platform',
    tagline: 'Luxury Interior Studio & Consultation Platform',
    description: 'An elegant digital presence for Mumbai-based Kalasaar Interiors. Built with sleek typography, smooth micro-interactions, and an interactive quote calculation interface for residential and commercial spaces.',
    image: '/images/profile.jpg',
    mockupType: 'browser',
    techStack: ['React', 'Tailwind CSS', 'TypeScript', 'SEO Engine'],
    features: ['Interactive space portfolio', 'Estimate calculator', 'Direct WhatsApp booking', 'Fast Core Web Vitals'],
    demoUrl: 'https://shamshadcodes.com',
    featured: true
  },
  {
    id: 'alisha-design',
    title: 'Alisha Design',
    category: 'web',
    categoryLabel: 'Web Platform',
    tagline: 'Modular Interior Design & Creative Solutions',
    description: 'A modern, conversion-focused business website showcasing modular kitchen installations, custom home interiors, and residential architectural concepts with seamless inquiry forms.',
    image: '/images/profile.jpg',
    mockupType: 'browser',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    features: ['Modular catalogue viewer', 'Instant quote request', 'Optimized imagery', 'Location-targeted SEO'],
    demoUrl: 'https://shamshadcodes.com',
    featured: true
  },
  {
    id: 'zaprix',
    title: 'Zaprix Creativity',
    category: 'web',
    categoryLabel: 'E-commerce',
    tagline: 'Custom Gifting & Creative Brand Storefront',
    description: 'A custom product ordering and e-commerce platform for personalized gifts, bespoke LED lamps, and creative branding items with seamless inquiry and custom design submission workflows.',
    image: '/images/profile.jpg',
    mockupType: 'browser',
    techStack: ['React', 'Node.js', 'Tailwind CSS', 'WhatsApp API'],
    features: ['Custom personalization preview', 'Direct WhatsApp ordering', 'Product variant selector', 'Mobile optimized checkout'],
    demoUrl: 'https://shamshadcodes.com',
    featured: true
  },
  {
    id: 'zlott',
    title: 'Zlott Community Platform',
    category: 'mobile',
    categoryLabel: 'Mobile App',
    tagline: 'Smart Amenities Booking & Community App',
    description: 'Cross-platform mobile application for residential societies and commercial communities enabling seamless clubhouse amenity reservations, maintenance ticketing, and instant announcement alerts.',
    image: '/images/guard_tour.png',
    mockupType: 'mobile',
    techStack: ['Flutter', 'Dart', 'Firebase', 'Cloud Functions'],
    features: ['Real-time slot reservation system', 'Push notifications', 'Digital wallet integration', 'Admin approval portal'],
    demoUrl: 'https://shamshadcodes.com',
    featured: true
  },
  {
    id: 'smarttoolzone',
    title: 'SmartToolZone.com',
    category: 'web',
    categoryLabel: 'Web Application',
    tagline: 'High-Traffic Online Utility & Productivity Suite',
    description: 'A comprehensive multi-tool utility suite providing instantaneous online calculations, unit conversions, code formatters, and productivity widgets designed for lightning-fast client-side execution.',
    image: '/images/smarttoolszone.png',
    mockupType: 'browser',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    features: ['50+ client-side utility tools', 'Zero latency computations', 'Responsive layout', 'SEO optimized page structure'],
    demoUrl: 'https://smarttoolzone.com',
    featured: true
  },
  {
    id: 'crm-system',
    title: 'Enterprise CRM & Pipeline Manager',
    category: 'software',
    categoryLabel: 'Custom Software',
    tagline: 'Business Relationship & Lead Pipeline Software',
    description: 'A robust Customer Relationship Management system built to streamline business lead pipelines, client communications, customer lifecycle tracking, and sales team accountability.',
    image: '/images/crm.png',
    mockupType: 'dashboard',
    techStack: ['Python', 'Django', 'PostgreSQL', 'React'],
    features: ['Lead stage kanban board', 'Automated email/SMS followups', 'Role-based security', 'Revenue forecast analytics'],
    demoUrl: '#',
    featured: false
  },
  {
    id: 'guard-tour',
    title: 'Guard Tour Patrol System',
    category: 'mobile',
    categoryLabel: 'Mobile App',
    tagline: 'Security Patrol Tracking & Incident Management',
    description: 'A specialized Flutter mobile application for security personnel and facilities management to log physical checkpoint inspections via QR/NFC with live GPS accountability and incident reporting.',
    image: '/images/guard_tour.png',
    mockupType: 'mobile',
    techStack: ['Flutter', 'Dart', 'Firebase', 'Google Maps API'],
    features: ['QR & NFC checkpoint verification', 'GPS location tracking', 'Instant incident photo upload', 'Supervisor real-time portal'],
    demoUrl: '#',
    featured: false
  },
  {
    id: 'binance-bot',
    title: 'Automated Trading & Market Bot',
    category: 'automation',
    categoryLabel: 'Automation',
    tagline: 'Algorithmic Execution & Market Analytics Engine',
    description: 'A high-speed algorithmic trading and market monitoring bot utilizing technical indicator analysis, order book monitoring, and secure Binance API execution with real-time risk controls.',
    image: '/images/binance.png',
    mockupType: 'dashboard',
    techStack: ['Python', 'FastAPI', 'Pandas', 'Binance API', 'WebSockets'],
    features: ['Sub-second order execution', 'Configurable stop-loss & risk limits', 'Telegram alert triggers', 'Historical backtesting engine'],
    demoUrl: '#',
    featured: false
  }
];

export const WHY_CHOOSE_US: WhyChoosePoint[] = [
  {
    title: 'Direct Developer Communication',
    description: 'You communicate directly with me — the engineer writing your code. No account managers, no layers of confusion, and no wasted time.',
    icon: MessageSquare,
    stat: '1-on-1',
    statLabel: 'Direct Partnership'
  },
  {
    title: 'Custom-Engineered For Your Business',
    description: 'I do not use cookie-cutter bloated templates. Every website and software system is engineered around your specific goals and target audience.',
    icon: Layers,
    stat: '100%',
    statLabel: 'Tailored Solutions'
  },
  {
    title: 'Modern, Scalable Tech Stack',
    description: 'Built with React, TypeScript, Flutter, Python, and PostgreSQL for maximum speed, enterprise security, and effortless future expansion.',
    icon: Code,
    stat: 'Modern',
    statLabel: 'Future-Proof Code'
  },
  {
    title: 'Transparent Pricing & Deliverables',
    description: 'Clear pricing, documented feature scopes, and milestone timelines before a single line of code is written. Zero surprise invoices.',
    icon: ShieldCheck,
    stat: 'Clear',
    statLabel: 'No Hidden Fees'
  },
  {
    title: 'Dedicated Post-Launch Support',
    description: 'My relationship with you does not end at launch. I provide hands-on deployment help, performance tuning, and ongoing support to ensure smooth operations.',
    icon: Headphones,
    stat: 'Reliable',
    statLabel: 'Ongoing Support'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Discuss & Discover',
    tagline: 'Understanding Your Business Goals',
    description: 'We connect on WhatsApp or call to discuss your vision, target customers, essential features, and business objectives to determine the best technical roadmap.',
    deliverables: ['Requirement analysis', 'Recommended tech stack', 'Transparent cost & time estimate']
  },
  {
    step: '02',
    title: 'Plan & Wireframe',
    tagline: 'Defining Structure & Scope',
    description: 'We map out the user flow, information architecture, database schema, and project milestones to ensure complete alignment before building.',
    deliverables: ['Project scope document', 'Page structure blueprint', 'Milestone delivery timeline']
  },
  {
    step: '03',
    title: 'Design & Prototype',
    tagline: 'Crafting Premium UI/UX',
    description: 'I design an ultra-modern, clean, and intuitive user interface optimized for high conversion rates, brand prestige, and effortless mobile browsing.',
    deliverables: ['Custom design mockup', 'Typography & color system', 'Interactive prototype review']
  },
  {
    step: '04',
    title: 'Develop & Integrate',
    tagline: 'Writing Clean, Fast Code',
    description: 'I code your solution using modern frameworks, integrating payment gateways, APIs, databases, and WhatsApp automations with rigorous quality testing.',
    deliverables: ['Clean maintainable code', 'Cross-browser & mobile testing', 'API & automation integration']
  },
  {
    step: '05',
    title: 'Launch & Support',
    tagline: 'Deploying To Production',
    description: 'We launch your website or software on high-speed cloud infrastructure, set up domain/SSL, configure SEO, and provide post-launch support.',
    deliverables: ['Production deployment & SSL', 'SEO indexing & analytics setup', 'Post-launch maintenance support']
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic Website',
    price: '₹10,000',
    description: 'Ideal for local businesses, consultants, and professionals needing a credible and modern digital presence.',
    popular: false,
    turnaround: '3 - 5 Days Delivery',
    ctaText: 'Start Basic Project',
    features: [
      'Up to 5 custom-designed pages',
      '100% Mobile & tablet responsive',
      'Direct WhatsApp chat integration',
      'Lead capture contact form',
      'Basic On-Page SEO optimization',
      'Fast cloud deployment assistance',
      '1 Month post-launch support'
    ]
  },
  {
    id: 'standard',
    name: 'Standard Website',
    price: '₹15,000',
    description: 'Best for growing businesses wanting a polished, high-converting website with dynamic capabilities and SEO power.',
    popular: true,
    turnaround: '5 - 7 Days Delivery',
    ctaText: 'Get Standard Package',
    features: [
      'Up to 10 custom-designed pages',
      'Premium modern UI/UX with smooth animations',
      'Dynamic content / blog / portfolio CMS',
      'Advanced On-Page SEO & speed optimization',
      'Google Analytics & Search Console setup',
      'Lead auto-alerts to email & WhatsApp',
      '2 Months priority post-launch support'
    ]
  },
  {
    id: 'premium',
    name: 'Premium Web / E-commerce',
    price: '₹20,000',
    description: 'For businesses requiring custom e-commerce stores, custom client portals, or advanced web applications.',
    popular: false,
    turnaround: '7 - 12 Days Delivery',
    ctaText: 'Choose Premium Plan',
    features: [
      'Full e-commerce or custom web app architecture',
      'Payment gateway setup (Razorpay / Stripe / UPI)',
      'Product catalogue, inventory & order workflow',
      'Custom user authentication & admin dashboard',
      'Automated customer WhatsApp & email alerts',
      'Ultra-fast 90+ Core Web Vitals score',
      '3 Months priority maintenance & support'
    ]
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'How much does a website or custom software cost?',
    answer: 'Standard business websites start at ₹10,000 for a 5-page responsive website, ₹15,000 for a dynamic 10-page platform, and ₹20,000 for custom e-commerce or advanced web applications. For complex custom software, mobile apps, or enterprise automation, I provide a clear, transparent custom quote based on your exact requirements.'
  },
  {
    question: 'How long does the development process take?',
    answer: 'A standard 5 to 10 page website is typically completed and launched within 4 to 7 business days. Custom e-commerce platforms take approximately 7 to 12 days, while full mobile apps or bespoke software systems take 2 to 4 weeks depending on feature complexity. I adhere strictly to agreed milestones.'
  },
  {
    question: 'Do you provide domain registration and web hosting?',
    answer: 'Domain and hosting are not included in the development packages, which allows you to retain 100% legal ownership and control over your digital assets. However, I will guide you through purchasing the most cost-effective hosting and domain (like Hostinger, Vercel, or AWS) and will handle 100% of the setup, SSL security, and deployment for free.'
  },
  {
    question: 'Can you redesign and speed up my existing website?',
    answer: 'Yes! I specialize in modernizing outdated websites. I will preserve all your existing domain authority, SEO rankings, and content while completely upgrading the design, mobile responsiveness, and speed to 90+ Google PageSpeed benchmarks.'
  },
  {
    question: 'Do you develop mobile applications for both Android and iOS?',
    answer: 'Yes, I build cross-platform mobile apps using Flutter. This ensures you get high-performance, native-speed apps for both Google Play Store and Apple App Store from a single codebase, saving you substantial development cost and time.'
  },
  {
    question: 'Can you integrate online payment gateways like Razorpay, Stripe, and UPI?',
    answer: 'Yes, I have extensive experience integrating Razorpay, Stripe, Cashfree, PayPal, and instant QR/UPI payment gateways with automated invoice generation and webhook verification.'
  },
  {
    question: 'Can you automate my customer WhatsApp messaging and business processes?',
    answer: 'Absolutely. I can connect the official WhatsApp Cloud API to your website or CRM to automate instant inquiry replies, order notifications, lead alerts to your phone, and customer follow-up sequences.'
  },
  {
    question: 'What kind of post-launch support and maintenance do you offer?',
    answer: 'Every project includes 1 to 3 months of complimentary post-launch support covering bug fixes, minor text/image updates, performance monitoring, and technical advice. Extended monthly maintenance packages are also available if you prefer continuous updates.'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend & Mobile',
    skills: ['React.js', 'TypeScript', 'Flutter', 'Next.js', 'Tailwind CSS', 'JavaScript (ES6+)']
  },
  {
    title: 'Backend & APIs',
    skills: ['Python', 'Django', 'FastAPI', 'Node.js', 'Java', 'REST APIs', 'WebSockets']
  },
  {
    title: 'Databases & Cloud',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Firebase', 'Redis', 'Vercel / AWS']
  },
  {
    title: 'Automation & Tools',
    skills: ['WhatsApp API', 'Razorpay/Stripe', 'CRM Integration', 'Git / GitHub', 'Pandas']
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com', icon: Github },
  { platform: 'LinkedIn', url: 'https://linkedin.com', icon: Linkedin },
  { platform: 'WhatsApp', url: 'https://wa.me/919137226861?text=Hi%20Shamshad,%20I%20found%20ShamshadCodes%20and%20would%20like%20to%20discuss%20a%20project.', icon: MessageSquare },
  { platform: 'Telegram', url: 'https://telegram.org', icon: Send },
];