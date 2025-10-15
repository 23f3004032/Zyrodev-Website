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
    title: 'Lal Sweets',
    category: 'E-commerce & Food',
    type: 'web',
    videoUrl: '/videos/web/lalsweets.mp4',
    description: 'Premium online sweet shop delivering traditional Indian sweets with modern e-commerce experience.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    year: '2024',
    link: 'https://www.lalsweets.com/'
  },
  {
    id: 'web-2',
    title: 'Plutope',
    category: 'SaaS Platform',
    type: 'web',
    videoUrl: '/videos/web/pluetope.mp4',
    description: 'Innovative business management platform with analytics and workflow automation.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'AWS'],
    year: '2024',
    link: 'https://www.plutope.io/'
  },
  {
    id: 'web-3',
    title: 'E-Grocer',
    category: 'E-commerce & Grocery',
    type: 'web',
    videoUrl: '/videos/web/eGrocer.mp4',
    description: 'Full-featured online grocery platform with real-time inventory and delivery management.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Redis'],
    year: '2024',
    link: 'https://egrocerweb.wrteam.me'
  },
  {
    id: 'web-4',
    title: 'Go Fresh',
    category: 'Food Delivery',
    type: 'web',
    videoUrl: '/videos/web/gofresh.mp4',
    description: 'Fresh produce delivery platform connecting farmers directly with consumers.',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Socket.io'],
    year: '2023',
    link: 'https://grofresh-web.6amtech.com/'
  },
  {
    id: 'web-5',
    title: 'My Farmer Friend',
    category: 'Agriculture Tech',
    type: 'web',
    videoUrl: '/videos/web/myfarmerfriend.mp4',
    description: 'Connecting farmers with buyers through innovative digital marketplace.',
    technologies: ['React', 'Express', 'PostgreSQL', 'Stripe'],
    year: '2024',
    link: 'https://myfarmerfriend.com'
  },
  {
    id: 'web-6',
    title: 'Scott Empringham Portfolio',
    category: 'Portfolio Website',
    type: 'web',
    videoUrl: '/videos/web/scott.mp4',
    description: 'Modern portfolio website with interactive features and dynamic content management.',
    technologies: ['Next.js', 'Tailwind', 'Strapi', 'Cloudflare'],
    year: '2023',
    link: 'https://scottempringham.com'
  },
  {
    id: 'web-7',
    title: 'Plum Goodness',
    category: 'E-commerce & Wellness',
    type: 'web',
    videoUrl: '/videos/web/plumgood.mp4',
    description: 'Premium wellness and lifestyle products with seamless shopping experience.',
    technologies: ['Shopify', 'React', 'GraphQL', 'Node.js'],
    year: '2024',
    link: 'https://plumgoodness.com/'
  },
  {
    id: 'web-8',
    title: 'Inter Trade',
    category: 'B2B Platform',
    type: 'web',
    videoUrl: '/videos/web/intertrade.mp4',
    description: 'International trading platform facilitating cross-border business transactions.',
    technologies: ['Angular', 'Java', 'Spring Boot', 'Oracle'],
    year: '2023',
    link: 'https://intertradeindia.co.in'
  },
  {
    id: 'web-9',
    title: 'CA Portfolio',
    category: 'Professional Services',
    type: 'web',
    videoUrl: '/videos/web/appforCA.mp4',
    description: 'Comprehensive digital platform for Chartered Accountants and financial professionals.',
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
    year: '2024',
    link: 'https://www.caknj.com/'
  }
];

// AI/ML Projects
export const aiProjects: Project[] = [
  {
    id: 'ai-1',
    title: 'AI CAD Processor Agent',
    category: 'Computer-Aided Design AI',
    type: 'ml',
    imageUrl: '/images/aiml/BOICAD/BOICAD1.jpg',
    description: 'Advanced CAD system powered by AI for automated design generation and optimization.',
    technologies: ['Python', 'TensorFlow', 'CAD API', 'React'],
    year: '2024',
    link: 'https://huggingface.co/spaces/brpuneet898/boi-cad-demo'
  },
  {
    id: 'ai-2',
    title: 'Breast Cancer (HealthCare Organization) Dashboard',
    category: 'Medical AI & Healthcare',
    type: 'ml',
    imageUrl: '/images/aiml/breastcancer/breastcancer.jpg',
    description: 'AI-powered medical imaging analysis dashboard for early breast cancer detection using deep learning.',
    technologies: ['Python', 'TensorFlow', 'Medical Imaging', 'Flask'],
    year: '2024',
    link: 'https://huggingface.co/spaces/brpuneet898/canbrs-dashboard'
  },
  {
    id: 'ai-3',
    title: 'FedEx Supply Chain Dashboard',
    category: 'Logistics & Supply Chain AI',
    type: 'ml',
    imageUrl: '/images/aiml/fedex/fedex1.jpg',
    description: 'Intelligent supply chain tracking and optimization dashboard for logistics management.',
    technologies: ['Python', 'Machine Learning', 'API Integration', 'Node.js'],
    year: '2023',
    link: 'https://huggingface.co/spaces/brpuneet898/supply-chain-dashboard'
  },
  {
    id: 'ai-4',
    title: 'Indonesian Chat and Voice Agent',
    category: 'NLP & Conversational AI',
    type: 'ml',
    imageUrl: '/images/aiml/indonesianchatbot/indonesianchatbot.jpg',
    description: 'Natural language processing chatbot with voice capabilities for Indonesian language.',
    technologies: ['Python', 'NLP', 'Transformer Models', 'FastAPI'],
    year: '2024',
    link: 'https://huggingface.co/spaces/pranshh/indonesian-bot'
  },
  {
    id: 'ai-5',
    title: 'Log Data Processor Agent',
    category: 'Data Analytics & AI',
    type: 'ml',
    imageUrl: '/images/aiml/logdataprocessor/logdataprocessor.jpg',
    description: 'Automated log analysis and anomaly detection system using machine learning algorithms.',
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'Elasticsearch'],
    year: '2023',
    link: 'https://dave-19-log-data-prototype.hf.space/'
  },
  {
    id: 'ai-6',
    title: 'Predictive Analytics Intelligent Agent Tool',
    category: 'Predictive Analytics & AI',
    type: 'ml',
    imageUrl: '/images/aiml/predictiveanalysistool/predictiveintelligencetool1.jpg',
    description: 'Advanced predictive analytics platform with intelligent agent for business intelligence and forecasting.',
    technologies: ['Python', 'Machine Learning', 'Time Series', 'Django'],
    year: '2024',
    link: 'https://huggingface.co/spaces/brpuneet898/predictive-intelligence-tool'
  },
  {
    id: 'ai-7',
    title: 'RAG Based Similarity Finder Agent',
    category: 'Retrieval-Augmented Generation',
    type: 'ml',
    imageUrl: '/images/aiml/RAGsimilarity/RAGSimilarity.jpg',
    description: 'Retrieval-augmented generation system for intelligent document search and similarity matching.',
    technologies: ['Python', 'LangChain', 'Vector DB', 'Streamlit'],
    year: '2024',
    link: 'https://rag-similarity-app-jbsxxhbuqfrtupkdl4ukrb.streamlit.app/'
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