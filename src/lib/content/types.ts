export interface NavLink {
  label: string;
  href: string;
  isPrimary?: boolean;
}

export interface HeaderContent {
  logoText: string;
  logoSubtext: string;
  links: NavLink[];
}

export interface CtaLink {
  label: string;
  href: string;
}

export interface HeroContent {
  title: string;
  highlight: string;
  description: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
  imageUrl?: string;
  imageAlt?: string;
}

export interface AboutContent {
  title: string;
  description: string;
  bullets: string[];
  imageUrl?: string;
  imageAlt?: string;
}

export interface ServiceCard {
  label: string;
  title: string;
  description: string;
  tone: 'accent' | 'orange' | 'blue' | 'dark';
  featured?: boolean;
}

export interface ServicesContent {
  title: string;
  description: string;
  cards: ServiceCard[];
}

export interface FooterContent {
  title: string;
  description: string;
  email: string;
  location: string;
  copyright: string;
}

export interface SeoContent {
  title: string;
  description: string;
}

export interface SiteContent {
  seo: SeoContent;
  header: HeaderContent;
  hero: HeroContent;
  about: AboutContent;
  services: ServicesContent;
  footer: FooterContent;
}
