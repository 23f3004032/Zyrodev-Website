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
    id: "ai-01",
    title: "Breast Cancer Analytics Dashboard",
    category: "AI/ML Solutions",
    type: "ml",
    videoUrl: "/videos/aiml/breastcancer.mp4",
    link: "https://huggingface.co/spaces/brpuneet898/canbrs-dashboard",
    description: "An advanced diagnostic support interface leveraging machine learning to analyze clinical data and predict critical health markers with high accuracy.",
    techStack: "Python | Streamlit | Scikit-learn | Pandas",
    testimonial: "The Zyrodev team architected a secure, data-driven clinical dashboard. This implementation empowered healthcare professionals to make faster, evidence-based diagnostic decisions while maintaining strict data integrity."
  },
  {
    id: "ai-02",
    title: "FedEx Supply Chain Analytics",
    category: "AI/ML Solutions",
    type: "ml",
    videoUrl: "/videos/aiml/fedex.mp4",
    link: "https://huggingface.co/spaces/brpuneet898/supply-chain-dashboard",
    description: "A predictive logistics engine designed to optimize supply chain routes, manage inventory levels dynamically, and forecast potential delivery bottlenecks.",
    techStack: "Python | Machine Learning | Data Visualization",
    testimonial: "By integrating complex logistical datasets, Zyrodev delivered a centralized intelligence hub. The solution streamlined enterprise operations and provided actionable forecasting to reduce overhead costs."
  },
  {
    id: "ai-03",
    title: "Log Data Processor Agent",
    category: "AI/ML Solutions",
    type: "ml",
    videoUrl: "/videos/aiml/logdataprocessor.mp4",
    link: "https://dave-19-log-data-prototype.hf.space/",
    description: "An automated, intelligent agent that parses, analyzes, and flags anomalies in massive volumes of unstructured IT infrastructure log data.",
    techStack: "NLP | Python | HuggingFace | Log Analytics",
    testimonial: "The team built a robust anomaly detection system that drastically reduced manual troubleshooting time for IT departments, ensuring higher system uptime and proactive threat mitigation."
  },
  {
    id: "ai-04",
    title: "AI CAD Processor",
    category: "AI/ML Solutions",
    type: "ml",
    videoUrl: "/videos/aiml/BOICAD.mp4",
    link: "https://huggingface.co/spaces/brpuneet898/boi-cad-demo",
    description: "An intelligent automation workflow that processes Computer-Aided Design (CAD) parameters to accelerate complex engineering and drafting cycles.",
    techStack: "Computer Vision | Python | Process Automation",
    testimonial: "Zyrodev successfully automated highly repetitive design tasks. This technical achievement minimized human drafting error and accelerated the time-to-market for engineering blueprints."
  },
  {
    id: "ai-05",
    title: "Predictive Analytics Agent",
    category: "AI/ML Solutions",
    type: "ml",
    videoUrl: "/videos/aiml/predictiveintelligencetool.mp4",
    link: "https://huggingface.co/spaces/brpuneet898/predictive-intelligence-tool",
    description: "A comprehensive business intelligence agent that ingests historical enterprise data to forecast trends, sales, and generate actionable growth metrics.",
    techStack: "Time Series Forecasting | Machine Learning | UI/UX",
    testimonial: "Our engineers deployed highly accurate predictive models wrapped in an intuitive interface, empowering stakeholders to shift from reactive reporting to proactive strategic planning."
  },
  {
    id: "ai-06",
    title: "RAG Similarity Finder",
    category: "AI/ML Solutions",
    type: "ml",
    videoUrl: "/videos/aiml/RAGSimilarity.mp4",
    link: "https://rag-similarity-app-jbsxxhbuqfrtupkdl4ukrb.streamlit.app/",
    description: "A Retrieval-Augmented Generation (RAG) system utilizing semantic vector search to instantly locate, synthesize, and query vast unstructured document repositories.",
    techStack: "Vector Databases | LLMs | RAG Architecture | Streamlit",
    testimonial: "Zyrodev revolutionized internal knowledge discovery for this use-case. By implementing semantic search, deep-text querying became instantaneous and deeply context-aware."
  },
  {
    id: "ai-07",
    title: "Indonesian Chat & Voice Agent",
    category: "AI/ML Solutions",
    type: "ml",
    videoUrl: "/videos/aiml/indonesianchatbot.mp4",
    link: "https://huggingface.co/spaces/pranshh/indonesian-bot",
    description: "A sophisticated NLP conversational agent capable of real-time voice and text interaction, specifically tuned for Bahasa Indonesia.",
    techStack: "Voice AI | Multilingual NLP | HuggingFace",
    testimonial: "The Zyrodev team delivered a seamless localization tool that bridges language barriers, providing a scalable, native-feeling automated customer support experience for the Southeast Asian market."
  }
];

// Team Members
export const teamMembers: TeamMember[] = [
  {
    id: 'Neelesh',
    name: 'Prof Neelesh S Upadhye',
    role: 'Advisor',
    expertise: ['Mathematics', 'Research', 'Advisory'],
    description:'Dr. Neelesh Shankar Upadhye is a Professor in the Department of Mathematics at the Indian Institute of Technology Madras.Dr. Upadhye has contributed to over 34 journal articles and 4 conference proceedings between 2007 and 2024, accumulating 333 citations with an h-index of 12.'
  }, 
  {
    id: 'puneet',
    name: 'Puneet',
    role: 'Tech Lead & Co-Founder',
    expertise: ['AI/ML', 'App Development','Web Development', 'Project Management'],
    description: 'Data Scientist at Turing and Project Manager at IIT Madras with a core focus on AI/ML, App Development, and research in niche areas.Puneet has a proven track record of delivering high-quality software solutions and leading successful projects from conception to deployment.',
  },
  {
    id: 'ankit',
    name: 'Ankit',
    role: 'Brand Marketing Specialist,Developer & Co-Founder',
    expertise: ['Front-End Development', 'software development', 'Marketing Strategy', 'Client Relations'],
    description: 'A 2nd Year Student at IIT Madras who has worked with 10+ international clients from the UK, US, and Hungary. Expert in building and executing brand strategy.Ankit has a keen eye for design and a passion for creating engaging user experiences.',
  },
  {
    id: 'Devanshu',
    name: 'Devanshu Bhatnagar',
    role: 'Full-Stack Developer',
    expertise: ['Web Development', 'App Development', 'Database Management', 'UI/UX Design'],
    description: 'A 2nd year student at IIT Madras, Software developer, Intern at FedEx, Expert in building amazing softwares.Devanshu is passionate about creating seamless user experiences and efficient backend systems.',
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