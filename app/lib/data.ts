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
    id: "web-01",
    title: "YahviAura Events",
    category: "Web Development",
    type: "web",
    videoUrl: "/videos/web/yahviaura.mp4",
    link: "https://yahviaura.com/",
    description: "A highly visual, conversion-optimized digital platform designed to showcase premium event portfolios and streamline client booking inquiries.",
    techStack: "React | Next.js | Tailwind CSS | Node.js",
    testimonial: "Zyrodev delivered a complete digital transformation for the brand, ensuring lightning-fast page loads and a seamless, immersive UI/UX that drives higher client engagement."
  },
  {
    id: "web-02",
    title: "Lal Sweets",
    category: "Web Development",
    type: "web",
    videoUrl: "/videos/web/lalsweets.mp4",
    link: "https://www.lalsweets.com/",
    description: "A robust e-commerce architecture tailored for high-volume consumer goods, featuring dynamic product filtering, seamless cart management, and secure payment gateways.",
    techStack: "Shopify Plus | React | Liquid | Stripe API",
    testimonial: "The team engineered a scalable storefront capable of handling massive traffic spikes during festive seasons. We optimized the checkout flow to significantly reduce cart abandonment rates."
  },
  {
    id: "web-03",
    title: "TutorSolve",
    category: "Web Development",
    type: "web",
    videoUrl: "/videos/web/beanhr.mp4",
    link: "https://www.tutorsolve.com/",
    description: "A comprehensive digital marketplace engineered to handle multi-sided user flows, secure scheduling, and verified credential management for academic tutoring.",
    techStack: "React | Node.js | PostgreSQL | WebRTC",
    testimonial: "Zyrodev architected the entire platform scope, focusing on a scalable backend that seamlessly syncs real-time availability and handles complex transactional logic between multiple user types."
  },
  {
    id: "web-04",
    title: "Bean HR Consulting",
    category: "Web Development",
    type: "web",
    videoUrl: "/videos/web/beanhr.mp4",
    description: "A sophisticated corporate portal designed to streamline B2B HR consulting services, featuring a modernized UI/UX and secure client domain architecture.",
    techStack: "Next.js | TypeScript | CMS Integration",
    testimonial: "The team executed a complete interface redesign and structural overhaul, transitioning legacy systems into a rapid, modern web framework that perfectly aligns with enterprise standards."
  },
  {
    id: "web-05",
    title: "CP Industries",
    category: "Web Development",
    type: "web",
    videoUrl: "/videos/web/cpindustries.mp4",
    link: "https://cpindustries.ind.in/",
    description: "A professional B2B platform showcasing heavy industrial manufacturing capabilities, complete with dynamic specification sheets and bulk inquiry routing.",
    techStack: "Vue.js | Express | MongoDB",
    testimonial: "Zyrodev developed a highly structured digital catalog that allows procurement managers to easily navigate complex industrial specs and submit RFQs directly to the sales team."
  },
  {
    id: "web-06",
    title: "Darjeeling Travels",
    category: "Web Development",
    type: "web",
    videoUrl: "/videos/web/darjeelingtravels.mp4",
    link: "https://www.darjeelingtravels.in/",
    description: "A visually immersive travel platform integrating dynamic booking engines, localized content delivery, and interactive regional maps.",
    techStack: "React | Next.js | Contentful CMS",
    testimonial: "The team prioritized high-resolution asset delivery and SEO optimization, resulting in a performant, visually stunning platform that drastically improved organic search rankings and booking conversions."
  },
  {
    id: "web-07",
    title: "eGrocer Web",
    category: "Web Development",
    type: "web",
    videoUrl: "/videos/web/eGrocer.mp4",
    link: "https://egrocerweb.wrteam.me",
    description: "The responsive web counterpart to the eGrocer mobile app, offering bulk ordering capabilities, advanced filtering, and a synchronized unified cart.",
    techStack: "React | Redux | Node.js | Firebase",
    testimonial: "Zyrodev ensured absolute state synchronization between the mobile app and web platform, allowing users to transition between devices seamlessly without losing their active sessions or cart data."
  },
  {
    id: "web-08",
    title: "Solergy",
    category: "Web Development",
    type: "web",
    videoUrl: "/videos/web/solergy.mp4",
    link: "https://solergy.in/",
    description: "A clean, modern corporate presence for the solar energy sector, featuring ROI calculators and seamless lead-generation funnels.",
    techStack: "React | Tailwind CSS | Node.js",
    testimonial: "The team built a trust-inspiring digital presence with optimized lead-capture mechanisms, helping the client transition static traffic into actionable B2B and B2C consultations."
  },
  {
    id: "web-09",
    title: "Funmate Web",
    category: "Web Development",
    type: "web",
    videoUrl: "/videos/web/funmate.mp4",
    link: "https://funmate.co.in/",
    description: "A dynamic social web application handling real-time profile matching, localized event broadcasting, and secure user authentication.",
    techStack: "Next.js | GraphQL | Firebase | WebSockets",
    testimonial: "Zyrodev engineered a highly interactive DOM that mirrors the native mobile experience, utilizing aggressive caching to ensure instant profile loads and smooth event transitions."
  },
  {
    id: "web-10",
    title: "GroFresh",
    category: "Web Development",
    type: "web",
    videoUrl: "/videos/web/gofresh.mp4",
    link: "https://grofresh-web.6amtech.com/",
    description: "A complex multi-vendor e-commerce architecture supporting independent store dashboards, unified checkout routing, and dynamic delivery slotting.",
    techStack: "React | Laravel API | PostgreSQL | Redis",
    testimonial: "The team resolved deep architectural complexities in multi-vendor cart routing, ensuring independent vendors receive accurate order splits and real-time inventory deductions."
  },
  {
    id: "web-11",
    title: "Legalbook",
    category: "Web Development",
    type: "web",
    videoUrl: "/videos/web/legalbook.mp4",
    link: "https://legalbook.io/",
    description: "A secure, enterprise-grade SaaS application designed to digitize contract management, legal workflows, and secure document signing.",
    techStack: "React | Node.js | AWS S3 | Encrypted Storage",
    testimonial: "Zyrodev implemented rigid security protocols and encrypted data pipelines to ensure absolute confidentiality for legal documents, creating a seamless and compliant user workflow."
  },
  {
    id: "web-12",
    title: "My Farmer Friend",
    category: "Web Development",
    type: "web",
    videoUrl: "/videos/web/myfarmerfriend.mp4",
    link: "https://myfarmerfriend.com",
    description: "An agricultural technology platform bridging the gap between farmers and consumers with localized supply chain tracking and fresh produce management.",
    techStack: "Next.js | Stripe | Node.js | Geo-Routing",
    testimonial: "The team built a hyper-localized logistics engine to handle perishable goods routing, ensuring consumers receive accurate delivery estimates based on farm proximity."
  },
  {
    id: "web-13",
    title: "Plutope",
    category: "Web Development",
    type: "web",
    videoUrl: "/videos/web/pluetope.mp4",
    link: "https://www.plutope.io/",
    description: "A cutting-edge Web3 and fintech platform featuring interactive 3D elements, real-time market data, and a highly polished dark-mode UI.",
    techStack: "React | Three.js | Web3.js | Tailwind CSS",
    testimonial: "Zyrodev pushed the limits of front-end performance, integrating complex WebGL graphics and live blockchain data feeds without compromising on frame rates or overall page speed."
  },
  {
    id: "web-14",
    title: "Plum Goodness",
    category: "Web Development",
    type: "web",
    videoUrl: "/videos/web/plumgood.mp4",
    link: "https://plumgoodness.com/",
    description: "A visually rich, highly optimized direct-to-consumer storefront utilizing advanced merchandising modules, subscription logic, and personalized product recommendations.",
    techStack: "Shopify Plus | React | GraphQL",
    testimonial: "The team architected a headless-ready structure to maximize Core Web Vitals, ensuring the media-heavy site loads instantly to drive maximum conversion for impulse consumer purchases."
  },
  {
    id: "web-15",
    title: "CA Portfolio (CAKNJ)",
    category: "Web Development",
    type: "web",
    videoUrl: "/videos/web/appforCA.mp4",
    link: "https://www.caknj.com/",
    description: "A distinguished digital presence for financial professionals, featuring secure client document drop-zones, service scheduling, and regulatory compliance updates.",
    techStack: "React | Express | AWS | Secure Auth",
    testimonial: "Zyrodev delivered a highly secure, professional interface that allows the firm to confidently onboard clients and manage sensitive financial documents in a heavily regulated environment."
  },
  {
    id: "web-16",
    title: "Inter Trade India",
    category: "Web Development",
    type: "web",
    videoUrl: "/videos/web/intertrade.mp4",
    link: "https://intertradeindia.co.in",
    description: "An authoritative corporate platform designed to facilitate international trade inquiries, showcase export capabilities, and provide regulatory resources.",
    techStack: "Next.js | Tailwind CSS | Headless CMS",
    testimonial: "The team optimized the site architecture for global SEO penetration and built a robust inquiry routing system to handle multi-lingual, cross-border B2B communications seamlessly."
  },
  {
    id: "web-17",
    title: "Scott Empringham",
    category: "Web Development",
    type: "web",
    videoUrl: "/videos/web/scott.mp4",
    link: "https://scottempringham.com",
    description: "A high-conversion personal branding platform integrating podcast feeds, video modules, premium coaching funnels, and newsletter syndication.",
    techStack: "React | Next.js | HubSpot Integration",
    testimonial: "Zyrodev unified multiple third-party content streams into a single, cohesive user experience, heavily optimizing the frontend to drive aggressive lead generation and audience capture."
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