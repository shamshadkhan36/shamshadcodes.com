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
  client?: string;
  clientLocation?: string;
  roiMetric?: string;
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
  subtitle?: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  startingPrice?: string;
  badge?: string;
  turnaround?: string;
  idealFor?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline?: string;
  price: string;
  period?: string;
  description: string;
  popular?: boolean;
  features: string[];
  turnaround: string;
  ctaText: string;
  deliverables?: string[];
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
  email?: string;
  service: string;
  budget?: string;
  timeline?: string;
  message: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  company: string;
  location: string;
  content: string;
  rating: number;
  projectType: string;
  metric?: string;
  avatarText?: string;
}

export interface ComparisonRow {
  feature: string;
  agency: { text: string; positive: boolean };
  shamshadcodes: { text: string; positive: boolean };
  freelancer: { text: string; positive: boolean };
}

export interface EstimatorServiceOption {
  id: string;
  title: string;
  description: string;
  basePrice: number;
  baseDays: number;
  icon: LucideIcon;
  popular?: boolean;
}

export interface EstimatorAddon {
  id: string;
  title: string;
  description: string;
  price: number;
  extraDays: number;
  recommendedFor?: string[];
}

export interface GuaranteeItem {
  title: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  badge: string;
}