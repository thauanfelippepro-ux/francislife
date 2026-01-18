
export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  indication: string;
  benefits: string[];
  usage: string;
  keywords: string[];
  color: string; // Tailwind class or Hex
  accentColor: string; // Text color for accents
  mood: 'light' | 'dark' | 'clinical' | 'soft';
  image: string;
}

export interface SectionContent {
  title: string;
  subtitle?: string;
  body: string;
}

export enum SectionType {
  HERO = 'HERO',
  ESSENCE = 'ESSENCE',
  PROTOCOL = 'PROTOCOL',
  SHOWCASE = 'SHOWCASE',
  IDENTITY = 'IDENTITY',
}
