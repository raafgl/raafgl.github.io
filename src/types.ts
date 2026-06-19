export interface Project {
  id: string;
  category: 'branding' | 'interface' | 'print' | 'motion';
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  year: string;
  tools: string[];
  features?: string[];
}

export interface BrandPartner {
  id: string;
  name: string;
  logoText: string;
  role: string;
  duration: string;
  description: string;
}

export interface Message {
  id: string;
  name: string;
  email: string;
  projectType: string;
  message: string;
  timestamp: string;
}

export interface CVItem {
  id: string;
  type: 'experience' | 'education';
  title: string;
  subtitle: string;
  date: string;
  description: string;
}
