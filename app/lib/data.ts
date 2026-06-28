import { Project, TeamMember } from './types';

// Mobile App Projects
export const mobileProjects: Project[] = [
  {
    id: "app-01",
    title: "eGrocer",
    category: "Mobile Apps",
    type: "mobile",
    videoUrl: "/videos/app/eGrocer.mp4",
    link: "https://play.google.com/store/apps/details?id=com.wrteam.egrocer",
    description: "A highly scalable, hyper-local e-commerce application equipped with real-time location-based inventory tracking, automated slot management, and secure gateway routing.",
    techStack: "Flutter | Node.js | Firebase | Google Maps API",
    testimonial: "The Zyrodev team engineered an optimized mobile experience capable of rendering dynamic, multi-vendor catalogs with zero latency. The architecture handles end-to-end checkout cycles and complex cart logic seamlessly."
  },
  {
    id: "app-02",
    title: "Fix4ever",
    category: "Mobile Apps",
    type: "mobile",
    videoUrl: "/videos/app/fix4ever.mp4",
    link: "https://play.google.com/store/apps/details?id=com.fix4ever&pcampaignid=web_share",
    description: "A seamless, real-time matchmaking ecosystem connecting service professionals with localized consumer demands, built with offline-first capabilities.",
    techStack: "React Native | Express.js | MongoDB | Socket.io",
    testimonial: "Zyrodev implemented low-latency WebSockets for instantaneous real-time job bidding and dispatch tracking. The interface ensures a frictionless transactional workflow for both providers and end-users."
  },
  {
    id: "app-03",
    title: "Funmate",
    category: "Mobile Apps",
    type: "mobile",
    videoUrl: "/videos/app/funmate.mp4",
    description: "A modern matchmaking and hyper-local event mapping application designed to handle intensive spatial queries and high concurrency profile discoveries.",
    techStack: "Flutter | Firebase Cloud Firestore | GeoFlutterFire | Node.js",
    testimonial: "The team built an optimized geospatial query engine that smoothly handles proximity matching and event synchronization on mobile, wrapped in a polished, highly interactive user interface."
  },
  {
    id: "app-04",
    title: "Square Yards",
    category: "Mobile Apps",
    type: "mobile",
    videoUrl: "/videos/app/squareyards.mp4",
    link: "https://play.google.com/store/apps/details?id=com.sq.yrd.squareyards&pcampaignid=web_share",
    description: "A comprehensive real estate application integrating advanced data analytics for property valuations, financial calculators, and multi-tier filtering engines.",
    techStack: "Native Android | Kotlin | RESTful APIs | Jetpack Compose",
    testimonial: "Zyrodev streamlined complex database queries to let users look up extensive real estate portfolios instantly. The application delivers robust cross-platform synchronization and enterprise-grade security filters."
  },
  {
    id: "app-05",
    title: "Tracks by Truckloom",
    category: "Mobile Apps",
    type: "mobile",
    videoUrl: "/videos/app/tracks-by-truckroom.mp4",
    link: "https://apps.apple.com/in/app/tracks-by-truckoom/id1608130603",
    description: "A robust iOS application built for telematics integration, optimized background GPS tracking, and route efficiency orchestration for fleet supply chains.",
    techStack: "Swift | CoreLocation | AWS IoT Core | WebSockets",
    testimonial: "The team engineered an aggressive background data-sync algorithm that minimizes battery drainage while providing sub-second vehicle telemetry updates directly to a centralized B2B dashboard."
  },
  {
    id: "app-06",
    title: "Winners Academy School",
    category: "Mobile Apps",
    type: "mobile",
    videoUrl: "/videos/app/winneracademy.mp4",
    link: "https://play.google.com/store/apps/details?id=app.winnersacademyschool&pcampaignid=web_share",
    description: "An enterprise-grade institutional app managing real-time attendance, grading systems, digital homework submittals, and integrated parent-teacher communication channels.",
    techStack: "Flutter | PHP Laravel Backend | MySQL | Push Notifications",
    testimonial: "Zyrodev built a high-efficiency messaging layer to handle sudden spikes in active concurrent users during school hours, ensuring push notifications and reports drop instantly with zero packet loss."
  },
  {
    id: "app-07",
    title: "Walkwins",
    category: "Mobile Apps",
    type: "mobile",
    videoUrl: "/videos/app/walkwins-app.mp4",
    description: "An engaging fitness application that captures hardware sensor data to securely log steps, compute caloric burn, and award dynamic milestones.",
    techStack: "React Native | Android Sensor APIs | HealthKit Integration",
    testimonial: "Zyrodev built robust anti-tampering logic around physical step sensors to prevent falsified inputs, ensuring high data accuracy while maintaining a smooth and responsive interface on low-end mobile devices."
  },
  {
    id: "app-08",
    title: "St. Joseph Medical Center",
    category: "Mobile Apps",
    type: "mobile",
    videoUrl: "/videos/app/st-joseph-medical-college.mp4",
    link: "https://play.google.com/store/apps/details?id=com.app.SJMC&hl=en",
    description: "A high-security, HIPAA-compliant patient dashboard for tracking medical records, booking clinical appointments, and managing real-time video consultations.",
    techStack: "Java | WebRTC | Encrypted SQLite | Secure WebSockets",
    testimonial: "The team implemented end-to-end encryption layers for medical record distribution and deployed high-performance WebRTC streams to ensure video consults work flawlessly even in low-bandwidth scenarios."
  },
  {
    id: "app-09",
    title: "Breathe Yoga",
    category: "Mobile Apps",
    type: "mobile",
    videoUrl: "/videos/app/breatheyoga.mp4",
    link: "https://play.google.com/store/apps/details?id=breathe.yoga&hl=en_IN",
    description: "A highly immersive audio-visual wellness tracking ecosystem utilizing device APIs to monitor session timelines, breathing rhythms, and personal growth metrics.",
    techStack: "Flutter | AVFoundation | LocalStorage | RevenueCat",
    testimonial: "Zyrodev prioritized premium, fluid UI rendering and multi-layer asset loading to ensure a calm, interruption-free user session, resulting in high retention and perfect cross-platform media rendering."
  },
  {
    id: "app-10",
    title: "DealCheck",
    category: "Mobile Apps",
    type: "mobile",
    videoUrl: "/videos/app/dealcheck.mp4",
    link: "https://play.google.com/store/apps/details?id=com.fortnofffinancial.dealcheck_rentals&pcampaignid=web_share",
    description: "A complex financial calculation platform that allows real estate investors to run rapid cash flow analyses, Cap Rate estimations, and multi-year ROI projections.",
    techStack: "React Native | Redux Toolkit | Node.js Microservices",
    testimonial: "Our engineers packed heavy mathematical processing formulas into optimized front-end computational modules. The app executes multi-variable data projections instantaneously on the client side."
  },
  {
    id: "app-11",
    title: "iInvest",
    category: "Mobile Apps",
    type: "mobile",
    videoUrl: "/videos/app/invest.mp4",
    link: "https://apps.apple.com/us/app/i-invest/id1381126486",
    description: "A premium financial platform for compiling, visualizing, and analyzing diverse multi-asset investment portfolios with live historical pricing APIs.",
    techStack: "Swift iOS Native | CoreData | Chart.js/Native Canvas | Financial APIs",
    testimonial: "The team designed custom high-performance data pipelines to map compound annual growth rates dynamically. The visual layer renders complex financial trajectories fluidly at a locked 60 frames per second."
  }
];

export const mobileAppProjects = mobileProjects;

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