import { Project, TeamMember } from './types';

// Mobile App Projects
export const mobileProjects: Project[] = [
  {
    id: 'mobile-1',
    title: 'WalkWins',
    category: 'Health & Fitness',
    type: 'mobile',
    videoUrl: '/videos/app/walkwins-app.mp4',
    image: '/images/app/walkwins/ww1.jpg',
    description: 'Track your daily steps and achieve your fitness goals with our intelligent step counting application. Get real-time insights, set personalized targets, and stay motivated with achievement badges and progress analytics.',
    year: '2024',
    testimonial: "Working with Ankit and his team was an exceptional experience. Their communication was consistently clear and professional, with regular updates throughout the development cycle. The team's technical expertise and attention to detail resulted in a polished, user-friendly app that perfectly matched our vision.",
    link: 'https://apps.apple.com/in/app/walk-wins/id6463612643'
  },
  {
    id: 'mobile-2',
    title: 'Breathe Yoga',
    category: 'Wellness & Meditation',
    type: 'mobile',
    videoUrl: '/videos/app/breatheyoga.mp4',
    image: '/images/app/Breatheyoga/breatheyoga1.jpg',
    description: 'Discover inner peace with guided meditation sessions and professional yoga classes. Experience personalized wellness programs, breathing exercises, and mindfulness techniques designed for all skill levels.',
    year: '2024',
    testimonial: "Puneet and his development team delivered outstanding results. Their technical expertise was evident in every detail, creating a fast and reliable application that beautifully translates complex features into an intuitive user experience. The team's collaborative approach and responsive communication made the entire process smooth and efficient.",
    link: 'https://play.google.com/store/apps/details?id=breathe.yoga&hl=en_IN'
  },
  {
    id: 'mobile-3',
    title: 'E-Grocer',
    category: 'E-commerce & Shopping',
    type: 'mobile',
    videoUrl: '/videos/app/eGrocer.mp4',
    image: '/images/app/eGrocer/eGrocer1.jpg',
    description: 'Your one-stop solution for fresh groceries delivered to your doorstep. Browse thousands of products, enjoy exclusive deals, and experience seamless checkout with real-time order tracking and scheduled deliveries.',
    year: '2024',
    testimonial: "The team built a robust, scalable solution that handles our complex inventory seamlessly. Their professional approach and strong communication throughout the project ensured every requirement was met with precision. The final product has significantly boosted our online sales and customer satisfaction.",
    link: 'https://play.google.com/store/apps/details?id=com.wrteam.egrocer'
  },
  {
    id: 'mobile-4',
    title: 'i invest',
    category: 'Finance & Investment',
    type: 'mobile',
    videoUrl: '/videos/app/invest.mp4',
    image: '/images/app/invest/invest1.jpg',
    description: 'Smart investment platform for tracking portfolios, analyzing market trends, and making informed financial decisions. Real-time stock updates, personalized investment recommendations, and comprehensive financial planning tools.',
    year: '2024',
    testimonial: "The development team delivered an intuitive and secure investment platform that handles complex financial data flawlessly. Their understanding of our requirements and consistent communication ensured a smooth development process. The app's clean interface and real-time capabilities have been highly praised by our users.",
    link: 'https://apps.apple.com/us/app/i-invest/id1381126486'
  },
  {
    id: 'mobile-5',
    title: 'St Joseph Medical Center',
    category: 'Education & Healthcare',
    type: 'mobile',
    videoUrl: '/videos/app/st-joseph-medical-college.mp4',
    image: '/images/app/stjosephmedicalcollege/sjmc1.jpg',
    description: 'Comprehensive educational platform for medical students and faculty. Access course materials, attend virtual lectures, track academic progress, and stay connected with the medical college community.',
    year: '2024',
    testimonial: "This educational platform has transformed how our institution operates. The team's attention to detail and responsive communication throughout development ensured all our specific requirements were met. The seamless integration of video conferencing and user-friendly interface has significantly enhanced our teaching and learning experience.",
    link: 'https://play.google.com/store/apps/details?id=com.app.SJMC&hl=en'
  },
  {
    id: 'mobile-6',
    title: 'Tracks by Truckroom',
    category: 'Infrastructure & Logistics',
    type: 'mobile',
    videoUrl: '/videos/app/tracks-by-truckroom.mp4',
    image: '/images/app/Tracksbytruckroom/track1.jpg',
    description: 'Comprehensive logistics solution for packers and movers, streamlining booking management, real-time tracking, and customer communication. Efficient tools for managing moving services with integrated scheduling and route optimization.',
    year: '2024',
    testimonial: "The team developed a comprehensive solution that streamlined our entire logistics operation. Their collaborative approach and regular communication ensured the platform met all our business needs. The real-time tracking and booking management features have significantly improved our operational efficiency and customer satisfaction.",
    link: 'https://apps.apple.com/in/app/tracks-by-truckoom/id1608130603'
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
    image: '/images/web/lalsweets/lalsweets1.jpg',
    description: 'Premium online sweet shop delivering traditional Indian sweets with modern e-commerce experience.',
    year: '2024',
    testimonial: "Zyrodev's team delivered an exceptional e-commerce solution that transformed our traditional business. Their professional communication and collaborative approach ensured every feature aligned with our needs. The platform's seamless performance and user-friendly design have tripled our online sales.",
    link: 'https://www.lalsweets.com/'
  },
  {
    id: 'web-2',
    title: 'Plutope',
    category: 'SaaS Platform',
    type: 'web',
    videoUrl: '/videos/web/pluetope.mp4',
    image: '/images/web/pluetope/pluetope1.jpg',
    description: 'Innovative business management platform with analytics and workflow automation.',
    year: '2024',
    testimonial: "Working with Zyrodev was a game-changer for our SaaS platform. Their team's technical expertise and transparent communication throughout development ensured a powerful yet intuitive solution. The platform's scalability and performance have exceeded all our expectations.",
    link: 'https://www.plutope.io/'
  },
  {
    id: 'web-3',
    title: 'E-Grocer',
    category: 'E-commerce & Grocery',
    type: 'web',
    videoUrl: '/videos/web/eGrocer.mp4',
    image: '/images/web/eGrocer/eGrocer1.jpg',
    description: 'Full-featured online grocery platform with real-time inventory and delivery management.',
    year: '2024',
    testimonial: "Zyrodev built a robust platform that handles thousands of daily orders flawlessly. The team's attention to detail and consistent communication made the development process smooth. The real-time inventory and delivery tracking have been instrumental in our tremendous growth.",
    link: 'https://egrocerweb.wrteam.me'
  },
  {
    id: 'web-4',
    title: 'Go Fresh',
    category: 'Food Delivery',
    type: 'web',
    videoUrl: '/videos/web/gofresh.mp4',
    image: '/images/web/Gofresh/gofresh1.jpg',
    description: 'Fresh produce delivery platform connecting farmers directly with consumers.',
    year: '2023',
    testimonial: "Zyrodev perfectly executed our vision of connecting farmers with consumers. Their collaborative approach and regular updates kept us informed throughout the project. The efficient platform with real-time features has empowered hundreds of local farmers in our marketplace.",
    link: 'https://grofresh-web.6amtech.com/'
  },
  {
    id: 'web-5',
    title: 'My Farmer Friend',
    category: 'Agriculture Tech',
    type: 'web',
    videoUrl: '/videos/web/myfarmerfriend.mp4',
    image: '/images/web/myfarmerfriend/myfarmerfriend1.jpg',
    description: 'Connecting farmers with buyers through innovative digital marketplace.',
    year: '2024',
    testimonial: "Zyrodev created a revolutionary digital marketplace that exceeded our expectations. The team's understanding of agricultural technology and responsive communication ensured a user-friendly platform. The secure payment system and intuitive features have expanded our reach significantly.",
    link: 'https://myfarmerfriend.com'
  },
  {
    id: 'web-6',
    title: 'Scott Empringham Portfolio',
    category: 'Portfolio Website',
    type: 'web',
    videoUrl: '/videos/web/scott.mp4',
    image: '/images/web/scott/scott1.jpg',
    description: 'Modern portfolio website with interactive features and dynamic content management.',
    year: '2023',
    testimonial: "Zyrodev designed a portfolio website that perfectly showcases my work. Their creative team and excellent communication made the process enjoyable. The interactive features and seamless content management have helped me land several high-profile clients.",
    link: 'https://scottempringham.com'
  },
  {
    id: 'web-7',
    title: 'Plum Goodness',
    category: 'E-commerce & Wellness',
    type: 'web',
    videoUrl: '/videos/web/plumgood.mp4',
    image: '/images/web/plumgood/plumgood1.jpg',
    description: 'Premium wellness and lifestyle products with seamless shopping experience.',
    year: '2024',
    testimonial: "Zyrodev created a beautiful e-commerce platform that perfectly showcases our wellness brand. Their meticulous attention to detail and proactive communication throughout development delivered a smooth shopping experience. Our conversion rates have improved dramatically since launch.",
    link: 'https://plumgoodness.com/'
  },
  {
    id: 'web-8',
    title: 'Inter Trade',
    category: 'B2B Platform',
    type: 'web',
    videoUrl: '/videos/web/intertrade.mp4',
    image: '/images/web/intertrade/intertrade1.jpg',
    description: 'International trading platform facilitating cross-border business transactions.',
    year: '2023',
    testimonial: "Zyrodev delivered a sophisticated B2B platform that handles millions in cross-border transactions. Their professional team and clear communication ensured robust security features and efficient document management. The platform has completely transformed our international business operations.",
    link: 'https://intertradeindia.co.in'
  },
  {
    id: 'web-9',
    title: 'CA Portfolio',
    category: 'Professional Services',
    type: 'web',
    videoUrl: '/videos/web/appforCA.mp4',
    image: '/images/web/appforCA/appforCA1.jpg',
    description: 'Comprehensive digital platform for Chartered Accountants and financial professionals.',
    year: '2024',
    testimonial: "Zyrodev created a comprehensive platform that streamlined my entire accounting practice. Their understanding of professional services and consistent updates ensured all requirements were met. The secure communication and client management features have enhanced my service delivery significantly.",
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
    image: '/images/aiml/BOICAD/BOICAD1.jpg',
    imageUrl: '/images/aiml/BOICAD/BOICAD1.jpg',
    description: 'Advanced CAD system powered by AI for automated design generation and optimization.',
    year: '2024',
    testimonial: "Puneet and his AI team delivered an exceptional CAD system that revolutionized our workflow. Their deep technical knowledge and collaborative communication ensured accurate optimization features. The system's efficiency has transformed our design process completely.",
    link: 'https://huggingface.co/spaces/brpuneet898/boi-cad-demo'
  },
  {
    id: 'ai-2',
    title: 'Breast Cancer (HealthCare Organization) Dashboard',
    category: 'Medical AI & Healthcare',
    type: 'ml',
    image: '/images/aiml/breastcancer/breastcancer.jpg',
    imageUrl: '/images/aiml/breastcancer/breastcancer.jpg',
    description: 'AI-powered medical imaging analysis dashboard for early breast cancer detection using deep learning.',
    year: '2024',
    testimonial: "Puneet's expertise in AI healthcare solutions was remarkable. The team's thorough understanding of medical requirements and transparent communication throughout development delivered a highly accurate diagnostic tool. This platform is making a significant impact on patient outcomes.",
    link: 'https://huggingface.co/spaces/brpuneet898/canbrs-dashboard'
  },
  {
    id: 'ai-3',
    title: 'FedEx Supply Chain Dashboard',
    category: 'Logistics & Supply Chain AI',
    type: 'ml',
    image: '/images/aiml/fedex/fedex1.jpg',
    imageUrl: '/images/aiml/fedex/fedex1.jpg',
    description: 'Intelligent supply chain tracking and optimization dashboard for logistics management.',
    year: '2023',
    testimonial: "Working with Puneet's team on our supply chain optimization was outstanding. Their AI expertise and proactive communication delivered predictive analytics that reduced delivery times by 30%. The intuitive dashboard has transformed our logistics operations.",
    link: 'https://huggingface.co/spaces/brpuneet898/supply-chain-dashboard'
  },
  {
    id: 'ai-4',
    title: 'Indonesian Chat and Voice Agent',
    category: 'NLP & Conversational AI',
    type: 'ml',
    image: '/images/aiml/indonesianchatbot/indonesianchatbot.jpg',
    imageUrl: '/images/aiml/indonesianchatbot/indonesianchatbot.jpg',
    description: 'Natural language processing chatbot with voice capabilities for Indonesian language.',
    year: '2024',
    testimonial: "Puneet's NLP expertise created a chatbot that truly understands Indonesian nuances. The team's dedication and clear communication throughout development delivered accurate voice recognition. Customer satisfaction has increased by 40% since implementation.",
    link: 'https://huggingface.co/spaces/pranshh/indonesian-bot'
  },
  {
    id: 'ai-5',
    title: 'Log Data Processor Agent',
    category: 'Data Analytics & AI',
    type: 'ml',
    image: '/images/aiml/logdataprocessor/logdataprocessor.jpg',
    imageUrl: '/images/aiml/logdataprocessor/logdataprocessor.jpg',
    description: 'Automated log analysis and anomaly detection system using machine learning algorithms.',
    year: '2023',
    testimonial: "Puneet and his team built an indispensable log analysis system for our DevOps operations. Their machine learning expertise and responsive communication created a solution that catches anomalies we'd miss manually. It has prevented several critical system failures.",
    link: 'https://dave-19-log-data-prototype.hf.space/'
  },
  {
    id: 'ai-6',
    title: 'Predictive Analytics Intelligent Agent Tool',
    category: 'Predictive Analytics & AI',
    type: 'ml',
    image: '/images/aiml/predictiveanalysistool/predictiveintelligencetool1.jpg',
    imageUrl: '/images/aiml/predictiveanalysistool/predictiveintelligencetool1.jpg',
    description: 'Advanced predictive analytics platform with intelligent agent for business intelligence and forecasting.',
    year: '2024',
    testimonial: "Puneet's team delivered an exceptional predictive analytics platform. Their expertise in machine learning and consistent project updates ensured accurate forecasting that improved our predictions by 60%. This tool has become central to our business strategy.",
    link: 'https://huggingface.co/spaces/brpuneet898/predictive-intelligence-tool'
  },
  {
    id: 'ai-7',
    title: 'RAG Based Similarity Finder Agent',
    category: 'Retrieval-Augmented Generation',
    type: 'ml',
    image: '/images/aiml/RAGsimilarity/RAGSimilarity.jpg',
    imageUrl: '/images/aiml/RAGsimilarity/RAGSimilarity.jpg',
    description: 'Retrieval-augmented generation system for intelligent document search and similarity matching.',
    year: '2024',
    testimonial: "Working with Puneet on our RAG system was excellent. The team's AI expertise and transparent communication delivered remarkable accuracy in document search. Our research efficiency has increased significantly, accelerating our knowledge discovery process.",
    link: 'https://rag-similarity-app-jbsxxhbuqfrtupkdl4ukrb.streamlit.app/'
  }
];

// Team Members
export const teamMembers: TeamMember[] = [
  {
    id: 'puneet',
    name: 'Puneet',
    role: 'Tech Lead & Co-Founder',
    expertise: ['AI/ML', 'App Development','Web Development', 'Project Management'],
    description: 'Consultant at Legalbook.io and Project Manager at IIT Madras with a core focus on AI/ML, App Development, and research in niche areas.',
  },
  {
    id: 'ankit',
    name: 'Ankit',
    role: 'Brand Marketing Specialist & Co-Founder',
    expertise: ['Front-End Development', 'Brand Building', 'Marketing Strategy', 'Client Relations'],
    description: 'A 2nd Year Student at IIT Madras who has worked with 10+ international clients from the UK, US, and Hungary. Expert in building and executing brand strategy.',
  },
  {
    id: 'Devanshu',
    name: 'Devanshu Bhatnagar',
    role: 'Full-Stack Developer',
    expertise: ['Web Development', 'App Development', 'Database Management', 'UI/UX Design'],
    description: 'A 2nd year student at IIT Madras, Software developer, Intern at FedEx, Expert in building amazing softwares.',
  },
  {
    id: 'Shruti',
    name: 'Shruti Shrivastava',
    role: 'Marketing & Communications Lead',
    expertise: ['Marketing', 'Client Relations', 'Outreach', 'Sales Strategy'],
    description: 'Experienced marketing professional with a knack for building strong client relationships and executing effective outreach strategies.',
  }
];


// Combined projects for legacy compatibility
export const projects: Project[] = [
  ...mobileProjects,
  ...webProjects,
  ...aiProjects
];