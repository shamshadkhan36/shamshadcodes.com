import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export type ProjectCategory = 'all' | 'web' | 'mobile' | 'software' | 'automation';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  tagline: string;
  description: string;
  image?: string;
  mockupType: 'browser' | 'mobile' | 'dashboard';
  techStack: string[];
  features?: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  startingPrice?: string;
  badge?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period?: string;
  description: string;
  popular?: boolean;
  features: string[];
  turnaround: string;
  ctaText: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

export interface WhyChoosePoint {
  title: string;
  description: string;
  icon: LucideIcon;
  stat?: string;
  statLabel?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
}

export interface ContactFormData {
  name: string;
  phone: string;
  service: string;
  message: string;
}