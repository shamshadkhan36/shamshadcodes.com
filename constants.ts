import { 
  Globe, 
  ShoppingBag, 
  Smartphone, 
  Cpu, 
  Bot, 
  RefreshCw, 
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
  BarChart3,
  Clock,
  Award,
  Lock,
  Target,
  Check,
  Star,
  Users
} from 'lucide-react';
import WhatsAppIcon from './components/ui/WhatsAppIcon';
import { 
  NavItem, 
  Project, 
  Service, 
  PricingPlan, 
  ProcessStep, 
  WhyChoosePoint, 
  FAQItem, 
  SkillCategory, 
  SocialLink,
  Testimonial,
  ComparisonRow,
  EstimatorServiceOption,
  EstimatorAddon,
  GuaranteeItem
} from './types';

export const BRAND = {
  name: 'ShamshadCodes',
  legalName: 'ShamshadCodes Tech Studio',
  founder: 'Shamshad Khan',
  founderTitle: 'Technical Director & Lead Software Architect',
  title: 'Digital Product Studio & Software Engineering Partner',
  tagline: 'High-Performance Web, Mobile & Software Solutions Engineered For Revenue Growth',
  subheading: 'We engineer conversion-optimized websites, high-speed mobile apps (iOS & Android), and intelligent business automation systems that turn ad traffic into paying customers.',
  email: 'samsamkhan36@gmail.com',
  phone: '+91 93702 62177',
  phoneDisplay: '+91 93702 62177',
  whatsappUrl: 'https://wa.me/919370262177?text=Hi%20ShamshadCodes,%20I%20visited%20your%20website%20and%20would%20like%20to%20discuss%20a%20project%20for%20my%20business.',
  location: 'Shop No. 7, Near KGN Medical, Jadhav Pada, Dhaniv Baug, Nallasopara East, Maharashtra, India',
  availability: 'Accepting New Client Projects',
  responseGuarantee: 'Instant response within 15 minutes on WhatsApp',
  experienceYears: '5+',
  deliveredProjects: '30+',
  satisfactionRate: '99.8%',
  rating: '4.9/5',
  reviewCount: '30+',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Services', href: '#services' },
  { label: 'Cost Calculator', href: '#estimator' },
  { label: 'Work', href: '#projects' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export const TRUST_METRICS = [
  { value: '30+', label: 'Commercial Deployments', sub: 'Web, Mobile, E-commerce & Cloud Systems' },
  { value: '4.9 / 5.0', label: 'Client Satisfaction Rating', sub: 'Verified by 30+ Business Owners' },
  { value: '3 - 7 Days', label: 'Average Sprint Delivery', sub: 'Rapid Turnaround Without Quality Compromise' },
  { value: '100%', label: 'Source Code & IP Ownership', sub: 'Zero Vendor Lock-in & Lifetime Rights' },
];

export const PROBLEM_SOLUTIONS = [
  {
    problem: {
      title: 'High Ad Spend, Zero Conversions',
      description: 'You are paying for clicks, but visitors bounce within 3 seconds because your site is slow, lacks clear CTAs, or looks unpolished on mobile.',
    },
    solution: {
      title: 'Conversion-Engineered Platforms',
      description: 'We build sub-second loading web platforms designed specifically around persuasive UX, mobile responsiveness, and instant lead capture triggers.',
    }
  },
  {
    problem: {
      title: 'Lost Leads & Slow Manual Follow-ups',
      description: 'Valuable customer inquiries slip through the cracks when prospective clients wait hours for an email reply or quote.',
    },
    solution: {
      title: 'Automated WhatsApp & CRM Pipelines',
      description: 'Instant automated WhatsApp auto-responses, direct CRM logging, and instant notification pings to your phone the exact moment a lead lands.',
    }
  },
  {
    problem: {
      title: 'Bloated Agency Overhead & Delays',
      description: 'Traditional agencies charge ₹1,00,000+ for standard websites and pass you through account managers who don’t code, causing weeks of delays.',
    },
    solution: {
      title: 'Direct Technical Leadership',
      description: 'Work directly with Shamshad Khan (Lead Software Architect). Direct engineering communication, rapid sprint cycles, and honest, transparent pricing.',
    }
  },
  {
    problem: {
      title: 'Rigid Off-The-Shelf Software That Doesn’t Scale',
      description: 'Generic SaaS tools that lock you into hefty monthly subscriptions while failing to match your unique operational workflow.',
    },
    solution: {
      title: 'Custom-Built Scalable Architecture',
      description: 'Tailored management dashboards, portals, and mobile apps built on React, Flutter, Python, and PostgreSQL that you own 100% forever.',
    }
  },
];

export const SERVICES: Service[] = [
  {
    id: 'web-dev',
    title: 'High-Converting Business Websites',
    subtitle: 'Brand Prestige & Lead Generation',
    description: 'Custom-engineered, lightning-fast business websites designed to build immediate brand authority and convert ad visitors into qualified client inquiries.',
    icon: Globe,
    badge: 'High Conversion',
    startingPrice: '₹10,000',
    turnaround: '3 - 5 Days',
    idealFor: 'Consultants, Service Businesses, Agencies, Local Enterprises',
    features: [
      'Bespoke modern UI/UX design (No generic bloated templates)',
      '100% Mobile & tablet responsive architecture',
      'Technical SEO & 90+ Google Core Web Vitals score',
      'Interactive quote calculators & 1-click WhatsApp triggers',
      'High-speed cloud deployment with free SSL certificate'
    ]
  },
  {
    id: 'ecommerce-dev',
    title: 'E-Commerce & Online Storefronts',
    subtitle: 'Seamless Checkout & Automated Sales',
    description: 'High-converting online shopping platforms with lightning-fast catalog browsing, frictionless checkout flows, and automated payment verification.',
    icon: ShoppingBag,
    badge: 'Max ROI',
    startingPrice: '₹18,000',
    turnaround: '7 - 10 Days',
    idealFor: 'D2C Brands, Retail Stores, Custom Product Businesses',
    features: [
      'Razorpay, Stripe, UPI & Cash on Delivery (COD) integrations',
      'Dynamic product variants, inventory & order tracking dashboard',
      'Mobile-first checkout optimized for minimal cart abandonment',
      'Automated WhatsApp order confirmation & tracking alerts',
      'Intuitive admin portal for effortless catalogue updates'
    ]
  },
  {
    id: 'mobile-app',
    title: 'Cross-Platform Mobile Apps',
    subtitle: 'iOS & Android Native Speed',
    description: 'Fluid, cross-platform mobile apps engineered with Flutter. Single codebase delivers native iOS and Android experiences at half the cost and timeline.',
    icon: Smartphone,
    badge: 'iOS + Android',
    startingPrice: '₹25,000',
    turnaround: '12 - 20 Days',
    idealFor: 'Startups, Communities, Booking Platforms, Field Operations',
    features: [
      'Single unified Flutter codebase for both Google Play & Apple App Store',
      'Real-time cloud database sync & offline-first caching',
      'Push notifications, user authentication & biometric security',
      'Interactive maps, camera scanning, GPS & device hardware APIs',
      'Complete App Store & Play Store deployment management'
    ]
  },
  {
    id: 'custom-software',
    title: 'Custom Software & Enterprise Dashboards',
    subtitle: 'Tailored Internal Portals & CRM Systems',
    description: 'Tailor-made web applications, custom CRM systems, operations portals, and analytics dashboards built specifically around your company’s workflow.',
    icon: Cpu,
    badge: 'Enterprise',
    startingPrice: '₹22,000',
    turnaround: '10 - 18 Days',
    idealFor: 'Growing Companies, Operations Teams, SaaS Founders',
    features: [
      'Custom CRM, ERP, and internal management workflow portals',
      'Role-based access controls (RBAC) & encrypted database storage',
      'Real-time business analytics charts & KPI metrics dashboards',
      'Scalable Python (Django/FastAPI), Node.js, and PostgreSQL backend',
      'REST API integrations & automated PDF invoice generation'
    ]
  },
  {
    id: 'automation',
    title: 'WhatsApp Cloud API & Business Automation',
    subtitle: 'Save 15+ Hours Every Week',
    description: 'Automate repetitive inquiries, capture ad leads instantly on WhatsApp, sync CRM records, and trigger automated alerts without lifting a finger.',
    icon: Bot,
    badge: 'Time Saver',
    startingPrice: '₹12,000',
    turnaround: '3 - 6 Days',
    idealFor: 'High-Volume Lead Teams, Customer Support, E-commerce',
    features: [
      'Official Meta WhatsApp Cloud API integration & verification',
      'Automated lead qualification chatbot with instant human handover',
      'Real-time Google Sheets, CRM & email webhook synchronisation',
      'Automated payment confirmation & reminder sequences',
      'Custom cron jobs, API bridges & automated daily reporting'
    ]
  },
  {
    id: 'redesign-speed',
    title: 'Website Overhaul & Speed Optimization',
    subtitle: 'Boost Google Rank & Ad ROI',
    description: 'Upgrade your outdated website into a modern, lightning-fast digital asset. We boost PageSpeed scores to 90+ while preserving existing SEO rankings.',
    icon: RefreshCw,
    badge: 'Speed Boost',
    startingPrice: '₹10,000',
    turnaround: '3 - 5 Days',
    idealFor: 'Businesses Running Ads to Outdated or Slow Landing Pages',
    features: [
      'Complete visual overhaul to modern luxury studio standards',
      'Google PageSpeed score acceleration to 90+ on mobile & desktop',
      'Modern asset compression, code minification & modern CDN routing',
      'Eliminate broken mobile layout issues and clunky navigation',
      'Preserve 100% of your existing backlinks, URLs, and SEO authority'
    ]
  }
];

export const ESTIMATOR_SERVICES: EstimatorServiceOption[] = [
  {
    id: 'business-web',
    title: 'Business / Company Website',
    description: 'High-converting multi-page corporate or service website with modern animations & lead forms.',
    basePrice: 10000,
    baseDays: 4,
    icon: Globe,
    popular: true
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Online Store',
    description: 'Product catalog, shopping cart, payment gateway integration, and order management.',
    basePrice: 18000,
    baseDays: 8,
    icon: ShoppingBag
  },
  {
    id: 'mobile-app',
    title: 'Cross-Platform Mobile App',
    description: 'Native-feel Flutter mobile app for iOS & Android with cloud backend and push alerts.',
    basePrice: 25000,
    baseDays: 14,
    icon: Smartphone
  },
  {
    id: 'custom-software',
    title: 'Custom Software / Portal',
    description: 'Bespoke CRM, operations dashboard, client portal, or custom internal workflow tool.',
    basePrice: 22000,
    baseDays: 12,
    icon: Cpu
  },
  {
    id: 'automation-bot',
    title: 'WhatsApp & Business Automation',
    description: 'Official WhatsApp Business API chatbot, CRM webhook pipeline, and automated alerts.',
    basePrice: 12000,
    baseDays: 4,
    icon: Bot
  }
];

export const ESTIMATOR_ADDONS: EstimatorAddon[] = [
  {
    id: 'payment-gateway',
    title: 'Payment Gateway Integration (Razorpay / Stripe / UPI)',
    description: 'Instant online payment checkout with automated invoice receipts & webhooks.',
    price: 3000,
    extraDays: 1,
    recommendedFor: ['business-web', 'ecommerce', 'custom-software']
  },
  {
    id: 'whatsapp-bot',
    title: 'Direct WhatsApp Lead Auto-Responder',
    description: 'Connect official WhatsApp API to automatically capture and reply to ad inquiries 24/7.',
    price: 3500,
    extraDays: 1,
    recommendedFor: ['business-web', 'ecommerce', 'mobile-app', 'custom-software']
  },
  {
    id: 'admin-cms',
    title: 'Custom Admin CMS & Content Editor',
    description: 'Easily add, edit, or delete pages, products, blogs, and images without touching code.',
    price: 4000,
    extraDays: 2,
    recommendedFor: ['business-web', 'ecommerce']
  },
  {
    id: 'advanced-seo',
    title: 'Advanced Technical SEO & Schema Markup',
    description: 'Structured JSON-LD schema, sitemaps, OpenGraph meta, and Google Search Console indexing.',
    price: 2500,
    extraDays: 1,
    recommendedFor: ['business-web', 'ecommerce', 'custom-software']
  },
  {
    id: 'multilingual',
    title: 'Multi-Language Support (English + Hindi / Regional)',
    description: 'Expand your reach with multi-lingual page toggling for diverse customer bases.',
    price: 3000,
    extraDays: 2,
    recommendedFor: ['business-web', 'ecommerce', 'mobile-app']
  },
  {
    id: 'extended-support',
    title: '90-Day VIP Priority Maintenance & Warranty',
    description: 'Dedicated weekly backups, performance checks, security patches, and instant priority updates.',
    price: 4500,
    extraDays: 0,
    recommendedFor: ['business-web', 'ecommerce', 'mobile-app', 'custom-software', 'automation-bot']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    clientName: 'Rahul Varma',
    role: 'Principal Architect & Founder',
    company: 'Arc Tech Interior Studio',
    location: 'Mumbai, India',
    content: 'We ran Meta ads for our luxury interior studio and the new website built by ShamshadCodes transformed our conversion rate. Inquiries went up by over 180% within the first month. Fast, responsive, and incredibly easy to work with.',
    rating: 5,
    projectType: 'Luxury Portfolio & Lead Platform',
    metric: '+180% Lead Inquiries',
    avatarText: 'RV'
  },
  {
    id: 't2',
    clientName: 'Vikram Mehta',
    role: 'Founder & CEO',
    company: 'Zaprix Creativity',
    location: 'Surat, Gujarat',
    content: 'ShamshadCodes delivered our custom e-commerce portal with WhatsApp order integration in just 8 days. The checkout is ultra-fast on mobile, and customer drop-off decreased dramatically. Truly agency-quality engineering at an unbeatable value.',
    rating: 5,
    projectType: 'E-Commerce Platform & Automation',
    metric: '45% Mobile Sales Lift',
    avatarText: 'VM'
  },
  {
    id: 't3',
    clientName: 'Pooja Deshmukh',
    role: 'Managing Director',
    company: 'Kalasaar Interiors',
    location: 'Navi Mumbai, India',
    content: 'Unlike other developers who take weeks just to get started, Shamshad gave us clear milestones and launched our interactive consultation portal ahead of schedule. Our clients constantly compliment how sleek the website looks.',
    rating: 5,
    projectType: 'Web Platform & Quote Calculator',
    metric: '3.2x Consultation Bookings',
    avatarText: 'PD'
  },
  {
    id: 't4',
    clientName: 'Imran Shaikh',
    role: 'Operations Head',
    company: 'SecureGuard Patrol Systems',
    location: 'Pune, Maharashtra',
    content: 'We needed a specialized Flutter mobile application with QR checkpoint verification and GPS tracking. ShamshadCodes built an ultra-reliable, bug-free app that our on-ground security guards use 24/7 without a glitch.',
    rating: 5,
    projectType: 'Cross-Platform Flutter Mobile App',
    metric: '99.9% App Reliability',
    avatarText: 'IS'
  },
  {
    id: 't5',
    clientName: 'Alisha Khan',
    role: 'Creative Director',
    company: 'Alisha Modular Designs',
    location: 'Mumbai, India',
    content: 'The speed optimization and modern layout Shamshad built for our modular kitchen brand significantly improved our Google Ads Quality Score, cutting our cost-per-click while bringing in high-ticket residential inquiries.',
    rating: 5,
    projectType: 'Business Website & SEO Overhaul',
    metric: '98/100 Google PageSpeed',
    avatarText: 'AK'
  },
  {
    id: 't6',
    clientName: 'Anand Joshi',
    role: 'Product Lead',
    company: 'SmartToolZone',
    location: 'Bengaluru, India',
    content: 'ShamshadCodes engineered our multi-utility web app suite with zero-latency client-side calculations. Handles over 50,000 monthly visitors seamlessly with zero server lag. Exceptional technical depth.',
    rating: 5,
    projectType: 'High-Traffic Web Utility Suite',
    metric: '50k+ Monthly Users',
    avatarText: 'AJ'
  }
];

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    feature: 'Communication & Technical Access',
    shamshadcodes: { text: 'Direct 1-on-1 with Lead Software Architect', positive: true },
    agency: { text: 'Slow chain through non-technical account managers', positive: false },
    freelancer: { text: 'Inconsistent communication & ghosting risk', positive: false }
  },
  {
    feature: 'Turnaround Time & Sprints',
    shamshadcodes: { text: 'Rapid 3 to 7-day milestone delivery', positive: true },
    agency: { text: '4 to 8 weeks with bureaucratic delays', positive: false },
    freelancer: { text: 'Unpredictable timelines & delays', positive: false }
  },
  {
    feature: 'Pricing & Cost Transparency',
    shamshadcodes: { text: 'Transparent fixed packages (from ₹10,000)', positive: true },
    agency: { text: '₹80,000 - ₹2,00,000+ with hidden retainer fees', positive: false },
    freelancer: { text: 'Hidden charges or abandoned unfinished work', positive: false }
  },
  {
    feature: 'Code Quality & Tech Stack',
    shamshadcodes: { text: 'Custom React, Flutter & Python (No bloated templates)', positive: true },
    agency: { text: 'Often outsource to cheap junior devs or bloated CMS', positive: false },
    freelancer: { text: 'Copy-pasted generic templates with security bugs', positive: false }
  },
  {
    feature: 'Code & Asset Ownership',
    shamshadcodes: { text: '100% full source code, IP & hosting ownership', positive: true },
    agency: { text: 'Proprietary lock-in & recurring platform fees', positive: false },
    freelancer: { text: 'Messy handover with missing credentials', positive: false }
  },
  {
    feature: 'Post-Launch Warranty & Support',
    shamshadcodes: { text: '30 to 90-day comprehensive warranty included', positive: true },
    agency: { text: 'Expensive monthly maintenance retainers', positive: false },
    freelancer: { text: 'Zero support after final payment', positive: false }
  }
];

export const GUARANTEES: GuaranteeItem[] = [
  {
    title: 'On-Time Milestone Sprint Guarantee',
    tagline: 'Delivered On Schedule',
    description: 'We set clear milestone delivery dates before starting. If we miss an agreed timeline, you receive an immediate ₹2,000 credit on your final invoice.',
    icon: Clock,
    badge: '100% On-Time'
  },
  {
    title: '100% Full IP & Source Code Ownership',
    tagline: 'Zero Lock-in Rights',
    description: 'You own 100% of your source code, design files, domain rights, and database from day one. Full GitHub repository handover with clear documentation.',
    icon: Lock,
    badge: 'Full Ownership'
  },
  {
    title: 'Fixed Pricing & Zero Hidden Charges',
    tagline: 'What We Quote Is What You Pay',
    description: 'Every deliverable is itemized in a transparent project scope. No surprise hourly overages, no mystery fees, and zero hidden agency markups.',
    icon: ShieldCheck,
    badge: 'Fixed Scope'
  },
  {
    title: 'Comprehensive 60-Day Post-Launch Warranty',
    tagline: 'Hands-On Technical Support',
    description: 'Every project comes with free post-launch support covering bug fixes, speed tuning, minor text/media updates, and ongoing technical guidance.',
    icon: Award,
    badge: '60-Day Warranty'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'arc-tech',
    title: 'Arc Tech Interior Studio',
    category: 'web',
    categoryLabel: 'Web Platform',
    tagline: 'High-End Architecture & Luxury Interior Consultation Showcase',
    description: 'A bespoke portfolio and client lead conversion platform for an elite architectural studio in Mumbai. Engineered for high-ticket client acquisition with immersive photo galleries, interactive service scopes, and fast WhatsApp consultation booking.',
    client: 'Arc Tech Studio',
    clientLocation: 'Mumbai, Maharashtra',
    roiMetric: '+180% Lead Inquiries',
    image: '/images/profile.jpg',
    mockupType: 'browser',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    features: ['High-res immersive visual gallery', 'Consultation quote inquiry pipeline', 'Mobile-first 98/100 PageSpeed', 'Local luxury search SEO optimization'],
    demoUrl: 'https://shamshadcodes.com',
    featured: true
  },
  {
    id: 'kalasaar',
    title: 'Kalasaar Interiors Platform',
    category: 'web',
    categoryLabel: 'Web Platform',
    tagline: 'Commercial & Residential Interior Consultation Portal',
    description: 'An elegant digital presence engineered for Mumbai-based Kalasaar Interiors. Built with sleek typography, smooth micro-interactions, and an interactive estimate calculation interface that tripled client consultation bookings.',
    client: 'Kalasaar Studio',
    clientLocation: 'Navi Mumbai',
    roiMetric: '3.2x Consultation Bookings',
    image: '/images/profile.jpg',
    mockupType: 'browser',
    techStack: ['React', 'Tailwind CSS', 'TypeScript', 'Vite'],
    features: ['Interactive space portfolio', 'Estimate calculator widget', 'Direct 1-click WhatsApp booking', 'Core Web Vitals acceleration'],
    demoUrl: 'https://shamshadcodes.com',
    featured: true
  },
  {
    id: 'zaprix',
    title: 'Zaprix Creativity Store',
    category: 'web',
    categoryLabel: 'E-commerce',
    tagline: 'Bespoke Personalized Gifting & Creative Brand E-commerce',
    description: 'A streamlined custom product storefront featuring personalized gift customization, instant WhatsApp checkout triggers, and automated order notifications that increased mobile checkout completion by 45%.',
    client: 'Zaprix Brand',
    clientLocation: 'Surat, Gujarat',
    roiMetric: '45% Mobile Checkout Lift',
    image: '/images/profile.jpg',
    mockupType: 'browser',
    techStack: ['React', 'Node.js', 'Tailwind CSS', 'WhatsApp Cloud API'],
    features: ['Custom design submission workflow', 'Instant WhatsApp order forwarding', 'Dynamic product variant selector', 'Mobile-optimized checkout funnel'],
    demoUrl: 'https://shamshadcodes.com',
    featured: true
  },
  {
    id: 'alisha-design',
    title: 'Alisha Modular Designs',
    category: 'web',
    categoryLabel: 'Web Platform',
    tagline: 'Modular Kitchens & Custom Interior Showcase',
    description: 'A modern, conversion-focused business website showcasing modular kitchen installations, custom home interiors, and residential architectural concepts with seamless inquiry forms.',
    client: 'Alisha Modular',
    clientLocation: 'Mumbai',
    roiMetric: '98/100 Google PageSpeed',
    image: '/images/profile.jpg',
    mockupType: 'browser',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    features: ['Modular catalogue viewer', 'Instant quote request', 'Optimized imagery', 'Location-targeted SEO'],
    demoUrl: 'https://shamshadcodes.com',
    featured: true
  },
  {
    id: 'zlott',
    title: 'Zlott Community Platform',
    category: 'mobile',
    categoryLabel: 'Mobile App',
    tagline: 'Smart Amenities Booking & Residential Society App',
    description: 'Cross-platform mobile application for residential societies and commercial communities enabling seamless clubhouse amenity reservations, maintenance ticketing, and instant announcement alerts.',
    client: 'Zlott Community Tech',
    clientLocation: 'Bengaluru',
    roiMetric: '10,000+ Active Bookings',
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
    client: 'SmartToolZone',
    clientLocation: 'Global',
    roiMetric: '50k+ Monthly Active Users',
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
    client: 'Enterprise Client',
    clientLocation: 'Mumbai',
    roiMetric: '65% Faster Lead Follow-ups',
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
    client: 'SecureGuard Systems',
    clientLocation: 'Pune',
    roiMetric: '99.9% Verification Uptime',
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
    client: 'Prop Trading Client',
    clientLocation: 'International',
    roiMetric: 'Sub-second API Execution',
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
    title: 'Direct Technical Architecture',
    description: 'You collaborate directly with Shamshad Khan — the senior software architect coding your systems. No junior interns, no middlemen, and no communication breakdowns.',
    icon: Users,
    stat: '1-on-1',
    statLabel: 'Direct Partner'
  },
  {
    title: 'Tailored Engineered Architecture',
    description: 'We never deploy generic bloated page builders. Every solution is custom-coded for sub-second speeds, enterprise security, and maximum ad conversion rates.',
    icon: Layers,
    stat: '100%',
    statLabel: 'Custom Code'
  },
  {
    title: 'Modern Scalable Technology',
    description: 'Engineered with React, TypeScript, Flutter, Python, and PostgreSQL. Built for effortless scaling from 100 to 100,000+ daily visitors without performance lag.',
    icon: Code,
    stat: 'Modern',
    statLabel: 'Future-Proof'
  },
  {
    title: 'Transparent Fixed Pricing',
    description: 'Clear packages, documented feature scopes, and milestone delivery schedules before a single line of code is written. Zero hidden fees or surprise invoices.',
    icon: ShieldCheck,
    stat: 'Fixed',
    statLabel: 'Clear Scope'
  },
  {
    title: 'Dedicated 60-Day Support Warranty',
    description: 'Our relationship does not end at launch. We provide free hands-on deployment help, performance monitoring, and ongoing post-launch warranty support.',
    icon: Headphones,
    stat: '60 Days',
    statLabel: 'Free Warranty'
  },
  {
    title: 'Ad & Conversion Optimization',
    description: 'Every layout, button, and headline is engineered with Conversion Rate Optimization (CRO) best practices to maximize ROI on your paid advertising campaigns.',
    icon: Target,
    stat: 'High ROI',
    statLabel: 'Ad Optimized'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Discovery & Strategic Scoping',
    tagline: 'Aligning Tech With Business Revenue',
    description: 'We connect on WhatsApp or a video call to assess your business goals, target customer persona, essential features, and timeline to draft a precise technical roadmap.',
    deliverables: ['Requirement analysis document', 'Recommended tech architecture', 'Fixed cost & milestone schedule']
  },
  {
    step: '02',
    title: 'Wireframing & Information Architecture',
    tagline: 'Designing For Conversion',
    description: 'We map out user flows, navigation hierarchy, database schemas, and wireframe prototypes to ensure maximum conversion efficiency before coding starts.',
    deliverables: ['Conversion UX wireframes', 'Information architecture map', 'Milestone sprint agreement']
  },
  {
    step: '03',
    title: 'UI/UX Design & High-Fidelity Prototype',
    tagline: 'Crafting Brand Authority',
    description: 'We design modern, responsive interfaces with clean typography, luxury color palettes, and micro-interactions optimized for frictionless mobile navigation.',
    deliverables: ['Interactive design mockup', 'Typography & asset library', 'Mobile prototype review']
  },
  {
    step: '04',
    title: 'Agile Development & API Integration',
    tagline: 'Writing Clean, Maintainable Code',
    description: 'We build your platform using React, Flutter, or Python, integrating payment gateways, CRM webhooks, databases, and WhatsApp automations with thorough QA testing.',
    deliverables: ['Production-grade clean codebase', 'Cross-browser & mobile QA testing', 'Payment & WhatsApp integrations']
  },
  {
    step: '05',
    title: 'Cloud Deployment & Growth Handoff',
    tagline: 'Production Launch & Warranty',
    description: 'We deploy to high-speed cloud infrastructure (Vercel, AWS, Hostinger), configure SSL, establish SEO indexing, and provide a 60-day post-launch warranty.',
    deliverables: ['Cloud deployment & SSL setup', 'Google SEO & Analytics indexing', 'Full Git repository & IP handover']
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Business Starter',
    tagline: 'For Local Businesses & Consultants',
    price: '₹10,000',
    description: 'Ideal for local businesses, consultants, and service brands needing a high-trust, fast-converting online presence.',
    popular: false,
    turnaround: '3 - 5 Days Sprint',
    ctaText: 'Start Starter Package',
    features: [
      'Up to 5 custom-designed responsive pages',
      '100% Mobile, tablet & desktop responsive',
      'Direct 1-click WhatsApp chat integration',
      'Lead capture inquiry form with auto-alerts',
      'Core On-Page SEO & Google Search indexing',
      'High-speed cloud deployment & SSL setup',
      '30 Days complimentary post-launch support',
      '100% Source code & asset ownership'
    ]
  },
  {
    id: 'standard',
    name: 'Growth & Business Pro',
    tagline: 'Most Popular For Growing Companies',
    price: '₹15,000',
    description: 'Best for ambitious businesses that want a high-converting website with dynamic capabilities, SEO power, and fast turnaround.',
    popular: true,
    turnaround: '5 - 7 Days Sprint',
    ctaText: 'Get Business Pro Package',
    features: [
      'Up to 10 custom-engineered pages & sections',
      'Premium modern UI/UX with fluid micro-interactions',
      'Dynamic portfolio / services / content CMS',
      'Advanced On-Page SEO & PageSpeed acceleration (90+)',
      'Google Analytics 4 & Search Console setup',
      'Automated lead notifications to Email & WhatsApp',
      '60 Days priority post-launch warranty & support',
      'Full GitHub repository handover & documentation'
    ]
  },
  {
    id: 'premium',
    name: 'E-Commerce / Custom App',
    tagline: 'For Scalable Online Stores & Portals',
    price: '₹20,000',
    description: 'For businesses requiring custom e-commerce stores, custom client portals, or advanced web applications with payment workflows.',
    popular: false,
    turnaround: '7 - 12 Days Sprint',
    ctaText: 'Choose E-Commerce Plan',
    features: [
      'Full e-commerce store or custom web application',
      'Payment gateway setup (Razorpay / Stripe / UPI)',
      'Product catalogue, inventory & order workflow',
      'Custom user authentication & admin dashboard',
      'Automated customer WhatsApp & email alerts',
      'Ultra-fast 95+ Core Web Vitals score',
      '90 Days VIP priority maintenance & warranty',
      'Full source code, IP ownership & training walkthrough'
    ]
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'How much does a website or custom software cost?',
    answer: 'Our transparent business packages start at ₹10,000 for a 5-page responsive business website, ₹15,000 for a dynamic 10-page platform with CMS capabilities, and ₹20,000 for custom e-commerce or web portals. For complex custom software, mobile apps, or enterprise automation, we provide an itemized custom proposal with clear milestone pricing based on your exact scope.'
  },
  {
    question: 'How fast can our project be completed and launched?',
    answer: 'Standard 5 to 10 page business websites are delivered and launched in 3 to 7 business days. Custom e-commerce platforms take approximately 7 to 12 days, while full cross-platform mobile apps or custom software systems take 2 to 4 weeks. We provide an On-Time Delivery Guarantee on all sprint milestones.'
  },
  {
    question: 'Do we own 100% of the code, domain, and data?',
    answer: 'Yes, absolutely. Unlike agencies that lock you into proprietary platforms or hold your code hostage, you retain 100% legal ownership of your source code, domain name, hosting accounts, and database from day one. We deliver a complete GitHub repository and credentials upon launch.'
  },
  {
    question: 'How do you optimize the website to convert ad traffic?',
    answer: 'We engineer websites specifically for paid ad traffic (Google Ads, Meta Ads, etc.). This includes sub-second loading speeds (so visitors don’t bounce), high-contrast clear Calls to Action, direct 1-tap WhatsApp lead buttons, interactive quote calculators, social proof badges, and mobile-first layouts tailored for high conversion.'
  },
  {
    question: 'Do you build mobile applications for both Android and iOS?',
    answer: 'Yes! We build cross-platform mobile apps using Flutter. This ensures you get native-speed, high-performance apps for both Google Play Store and Apple App Store from a single codebase, cutting your development cost and time in half while maintaining flawless 60fps performance.'
  },
  {
    question: 'Can you integrate payment gateways like Razorpay, Stripe, and UPI?',
    answer: 'Yes, we have deep experience integrating Razorpay, Stripe, Cashfree, PayPal, and instant QR/UPI payment gateways with automated invoice receipts, webhook verification, and refund management.'
  },
  {
    question: 'Can you automate our customer WhatsApp inquiries and follow-ups?',
    answer: 'Yes. We connect the official Meta WhatsApp Cloud API to your website or CRM to automate 24/7 lead inquiries, instant catalog sending, order status notifications, and real-time team alerts the moment an ad lead arrives.'
  },
  {
    question: 'What kind of warranty and post-launch support do you provide?',
    answer: 'Every project includes 30 to 90 days of comprehensive post-launch warranty covering bug fixes, speed tuning, text/media updates, and technical advice. We also offer affordable ongoing monthly maintenance plans if you prefer continuous technical management.'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend & Mobile Architecture',
    skills: ['React.js', 'TypeScript', 'Flutter (iOS/Android)', 'Next.js', 'Tailwind CSS', 'Framer Motion']
  },
  {
    title: 'Backend & Cloud Systems',
    skills: ['Python', 'Django', 'FastAPI', 'Node.js', 'PostgreSQL', 'RESTful APIs', 'WebSockets']
  },
  {
    title: 'Databases & Infrastructure',
    skills: ['PostgreSQL', 'MongoDB', 'Firebase', 'Redis', 'AWS Cloud', 'Vercel / Cloudflare']
  },
  {
    title: 'Automation & Integrations',
    skills: ['Meta WhatsApp Cloud API', 'Razorpay / Stripe', 'Google Sheets CRM Sync', 'Git / CI-CD', 'Webhook Automation']
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'WhatsApp', url: 'https://wa.me/919370262177?text=Hi%20ShamshadCodes,%20I%20found%20your%20website%20and%20would%20like%20to%20discuss%20a%20project.', icon: WhatsAppIcon },
  { platform: 'LinkedIn', url: 'https://linkedin.com', icon: Linkedin },
  { platform: 'GitHub', url: 'https://github.com', icon: Github },
  { platform: 'Telegram', url: 'https://telegram.org', icon: Send },
];
