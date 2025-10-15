import { Project, TeamMember } from './types';

// Mobile App Projects
export const mobileProjects: Project[] = [
  {
    id: 'mobile-1',
    title: 'WalkWins',
    category: 'Health & Fitness',
    type: 'mobile',
    videoUrl: '/videos/app/walkwins-app.mp4',
    description: 'Track your daily steps and achieve your fitness goals with our intelligent step counting application. Get real-time insights, set personalized targets, and stay motivated with achievement badges and progress analytics.',
    technologies: ['React Native', 'TypeScript', 'HealthKit', 'CoreMotion'],
    year: '2024',
    testimonial: "The Walkwins app exceeded all our expectations, and that's largely thanks to Ankit. His communication was consistently clear and smooth, and he provided proactive updates throughout the entire development process. This transparent partnership ensured the final product was exactly what we envisioned and more.",
    link: 'https://apps.apple.com/walkwins'
  },
  {
    id: 'mobile-2',
    title: 'Breathe Yoga',
    category: 'Wellness & Meditation',
    type: 'mobile',
    videoUrl: '/videos/app/breatheyoga.mp4',
    description: 'Discover inner peace with guided meditation sessions and professional yoga classes. Experience personalized wellness programs, breathing exercises, and mindfulness techniques designed for all skill levels.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Video Streaming'],
    year: '2024',
    testimonial: "Puneet's technical expertise was the driving force behind the Breathe Yoga app. He masterfully engineered a fast, reliable, and beautifully functional application, translating our complex design concepts into a seamless user experience. His skill was evident in every detail of the final product.",
    link: 'https://play.google.com/store/apps/details?id=breathe.yoga&hl=en_IN'
  },
  {
    id: 'mobile-3',
    title: 'E-Grocer',
    category: 'E-commerce & Shopping',
    type: 'mobile',
    videoUrl: '/videos/app/eGrocer.mp4',
    description: 'Your one-stop solution for fresh groceries delivered to your doorstep. Browse thousands of products, enjoy exclusive deals, and experience seamless checkout with real-time order tracking and scheduled deliveries.',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Stripe API'],
    year: '2024',
    testimonial: "Zyrodev delivered an exceptional platform with our E-Grocer app. They built a robust, scalable solution that handles our complex inventory and provides a seamless shopping experience for our customers. Their professionalism and technical expertise have directly contributed to a significant increase in our online sales.",
    link: 'https://play.google.com/store/apps/details?id=com.wrteam.egrocer'
  }
];

// Web Projects
export const webProjects: Project[] = [
  {
    id: 'web-1',
    title: 'E-commerce Platform',
    category: 'E-commerce & Retail',
    type: 'web',
    videoUrl: '/videos/ecommerce-web.mp4',
    description: 'Full-stack e-commerce solution with advanced analytics, inventory management, and multi-vendor support.',
    technologies: ['Next.js', 'PostgreSQL', 'Stripe', 'Redis'],
    year: '2024',
    link: 'https://ecommerce-demo.zyrodev.com'
  },
  {
    id: 'web-2',
    title: 'Real Estate Dashboard',
    category: 'PropTech & Analytics',
    type: 'web',
    videoUrl: '/videos/realestate-dashboard.mp4',
    description: 'Advanced analytics dashboard for real estate professionals with market insights and property valuations.',
    technologies: ['Vue.js', 'D3.js', 'Node.js', 'MongoDB'],
    year: '2023',
    link: 'https://realestate-dashboard.zyrodev.com'
  }
];

// AI/ML Projects
export const aiProjects: Project[] = [
  {
    id: 'ai-1',
    title: 'AI Recommendation Engine',
    category: 'Machine Learning',
    type: 'ml',
    videoUrl: '/videos/ml-engine.mp4',
    description: 'Intelligent recommendation system using deep learning for personalized content and product suggestions.',
    technologies: ['Python', 'TensorFlow', 'FastAPI', 'Docker'],
    year: '2023',
    link: 'https://github.com/zyrodev/ai-recommendation-engine'
  },
  {
    id: 'ai-2',
    title: 'Computer Vision Analytics',
    category: 'AI & Computer Vision',
    type: 'ml',
    videoUrl: '/videos/cv-analytics.mp4',
    description: 'Real-time computer vision system for object detection, tracking, and behavioral analysis.',
    technologies: ['Python', 'OpenCV', 'PyTorch', 'FastAPI'],
    year: '2024',
    link: 'https://github.com/zyrodev/cv-analytics'
  }
];

// Team Members
export const teamMembers: TeamMember[] = [
  {
    id: 'puneet',
    name: 'Puneet',
    role: 'Tech Lead & Co-Founder',
    expertise: ['AI/ML', 'App Development', 'Project Management'],
    description: 'Consultant at Legalbook.io and Project Manager at IIT Madras with a core focus on AI/ML, App Development, and research in niche areas.',
  },
  {
    id: 'ankit',
    name: 'Ankit',
    role: 'Brand Marketing Specialist & Co-Founder',
    expertise: ['Brand Building', 'Marketing Strategy', 'Client Relations'],
    description: 'A 2nd Year Student at IIT Madras who has worked with 10+ international clients from the UK, US, and Hungary. Expert in building and executing brand strategy.',
  }
];


// Combined projects for legacy compatibility
export const projects: Project[] = [
  ...mobileProjects,
  ...webProjects,
  ...aiProjects
];