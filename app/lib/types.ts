export interface Project {
  id: string;
  title: string;
  category: string;
  type: 'mobile' | 'web' | 'ml' | 'video'; // Added video type
  videoUrl: string;
  projectLink?: string;
  description: string;
  technologies: string[];
  year?: string;
  image: string;
  link?: string;
}

export interface CursorPosition {
  x: number;
  y: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  expertise: string[];
  description: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}