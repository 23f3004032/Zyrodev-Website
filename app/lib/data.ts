import { Project, TeamMember } from './types';

// Mobile App Projects
export const mobileProjects: Project[] = [
  {
    id: 'mobile-1',
    title: 'Fintech Banking App',
    category: 'Mobile Banking',
    type: 'mobile',
    videoUrl: '/videos/fintech-app.mp4',
    description: 'Secure mobile banking solution with biometric authentication, real-time transactions, and investment tracking.',
    technologies: ['React Native', 'TypeScript', 'Firebase', 'Plaid API'],
    year: '2024',
    image: '/images/mobile/fintech-app.jpg',
    link: 'https://github.com/zyrodev/fintech-app'
  },
  {
    id: 'mobile-2',
    title: 'Fitness Tracker Pro',
    category: 'Health & Fitness',
    type: 'mobile',
    videoUrl: '/videos/fitness-tracker.mp4',
    description: 'Comprehensive fitness tracking with AI-powered workout recommendations and nutrition planning.',
    technologies: ['Flutter', 'Dart', 'HealthKit', 'TensorFlow Lite'],
    year: '2024',
    image: '/images/mobile/fitness-tracker.jpg',
    link: 'https://apps.apple.com/fitness-tracker-pro'
  },
  {
    id: 'mobile-3',
    title: 'Smart Home Control',
    category: 'IoT & Smart Home',
    type: 'mobile',
    videoUrl: '/videos/smart-home.mp4',
    description: 'Unified mobile interface for controlling smart home devices with automation and energy monitoring.',
    technologies: ['React Native', 'MQTT', 'AWS IoT', 'Node.js'],
    year: '2024',
    image: '/images/mobile/smart-home.jpg',
    link: 'https://github.com/zyrodev/smart-home-control'
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
    image: '/images/web/ecommerce-platform.jpg',
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
    image: '/images/web/realestate-dashboard.jpg',
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
    image: '/images/ai/recommendation-engine.jpg',
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
    image: '/images/ai/computer-vision.jpg',
    link: 'https://github.com/zyrodev/cv-analytics'
  }
];

// Video Editing Projects
export const videoProjects: Project[] = [
  {
    id: 'video-1',
    title: 'Brand Story Campaign',
    category: 'Brand Storytelling',
    type: 'video',
    videoUrl: '/videos/brand-story.mp4',
    description: 'Cinematic brand storytelling with motion graphics and professional color grading.',
    technologies: ['Premiere Pro', 'After Effects', 'DaVinci Resolve'],
    year: '2024',
    image: '/images/video/brand-story.jpg',
    link: 'https://vimeo.com/brand-story-campaign'
  },
  {
    id: 'video-2',
    title: 'Product Launch Videos',
    category: 'Product Marketing',
    type: 'video',
    videoUrl: '/videos/product-launch.mp4',
    description: 'High-impact product launch videos with 3D animations and dynamic transitions.',
    technologies: ['Cinema 4D', 'After Effects', 'Premiere Pro'],
    year: '2024',
    image: '/images/video/product-launch.jpg',
    link: 'https://youtube.com/product-launch-showcase'
  },
  {
    id: 'video-3',
    title: 'Social Media Content',
    category: 'Social Media',
    type: 'video',
    videoUrl: '/videos/social-content.mp4',
    description: 'Engaging social media content optimized for various platforms and formats.',
    technologies: ['After Effects', 'Premiere Pro', 'Figma'],
    year: '2024',
    image: '/images/video/social-content.jpg',
    link: 'https://instagram.com/zyrodev/reels'
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
  ...aiProjects,
  ...videoProjects
];