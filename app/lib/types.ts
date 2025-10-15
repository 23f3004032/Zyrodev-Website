export interface Project {
  id: string;
  title: string;
  category: string;
  type: 'mobile' | 'web' | 'ml' | 'video'; // Added video type
  videoUrl?: string; // Made optional for AI projects using images
  imageUrl?: string; // For AI/ML projects using static images
  projectLink?: string;
  description: string;
  technologies: string[];
  year?: string;
  image?: string; // Made optional as we're using videos
  link?: string;
  testimonial?: string; // Customer feedback/testimonial
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