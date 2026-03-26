
import { Skill, Project, Experience, Certification } from './types';

export const SKILLS: Skill[] = [
  // Programming
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', description: 'Enterprise-grade backend & Android apps.', category: 'Programming' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', description: 'Data science & AI/ML scripts.', category: 'Programming' },
  { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg', description: 'System-level logic & DSA foundation.', category: 'Programming' },
  
  // Web
  { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', description: 'Structural markup for web.', category: 'Web' },
  { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', description: 'Advanced styling & animations.', category: 'Web' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', description: 'Interactive front-end logic.', category: 'Web' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', description: 'Modern UI/UX with state management.', category: 'Web' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', description: 'Typed JavaScript for scalable code.', category: 'Web' },
  { name: 'Tailwind CSS', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg', description: 'Rapid UI building with utility classes.', category: 'Web' },
  
  // App & Backend
  { name: 'Android', icon: 'https://static.vecteezy.com/system/resources/thumbnails/014/414/701/small/android-logo-on-transparent-background-free-vector.jpg', description: 'Native Android application development.', category: 'App/Backend' },
  { name: 'Firebase', icon: 'https://brandlogos.net/wp-content/uploads/2025/03/firebase_icon-logo_brandlogos.net_tcvck.png', description: 'Real-time DB, Auth & cloud services.', category: 'App/Backend' },
  { name: 'REST APIs', icon: 'https://www.shutterstock.com/image-vector/api-application-interface-icon-simple-600nw-2188533787.jpg', description: 'Data communication between services.', category: 'App/Backend' },
  
  // Tools
  { name: 'Android Studio', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Android_Studio_icon_%282023%29.svg/1280px-Android_Studio_icon_%282023%29.svg.png', description: 'Primary IDE for mobile dev.', category: 'Tools' },
  { name: 'Git & GitHub', icon: 'https://img.icons8.com/ios11/512/FFFFFF/github.png', description: 'Version control and team collaboration.', category: 'Tools' },
  { name: 'Vercel', icon: 'https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png', description: 'Cloud deployment for web apps.', category: 'Tools' },
  { name: 'Cursor', icon: 'https://www.logoshape.com/wp-content/uploads/2025/03/Cursor_Vector_Logo.png', description: 'AI-powered code editing.', category: 'Tools' },
];

export const PROJECTS: Project[] = [
  {
    title: 'SeHATSmartCare',
    description: 'An AI-powered healthcare ecosystem providing smart diagnostic assistance, patient history tracking, and automated reporting. Built for scale and reliability.',
    image: 'https://raw.githubusercontent.com/tiwariji7/SeHAT-SmartCare/main/sehat-smartcare.png',
    tech: ['Android', 'Java', 'Firebase', 'TensorFlow'],
    githubLink: 'https://github.com/tiwariji7/SeHAT-SmartCare'
  },
  {
    title: 'Tiwari Brothers Infrastructure',
    description: 'Comprehensive business platform for heavy machinery and infrastructure management. Features real-time asset tracking and client management.',
    image: 'https://raw.githubusercontent.com/tiwariji7/tiwaribrothers-website/main/tiwari-brothers.png',
    tech: ['React', 'TypeScript', 'Tailwind', 'WhatsApp API'],
    liveLink: 'https://tiwaribrothersinfra.in',
    githubLink: 'https://github.com/tiwariji7/tiwaribrothers-website'
  },
  {
    title: 'TOMATO  3D Food Delivery Web App',
    description: 'Zomato-inspired food delivery web app with futuristic 3D UI, smooth animations, cart flow, and responsive design.',
    image: 'https://raw.githubusercontent.com/tiwariji7/tomato/main/Screenshot%202026-02-08%20121439.png',
    tech: ['React', 'Three.js', 'Framer Motion', 'Tailwind CSS'],
    liveLink: 'https://tomato-ecru-three.vercel.app',
    githubLink: 'https://github.com/tiwariji7/tomato'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: 'Software Developer Intern',
    company: 'Softpro India',
    logo: 'https://www.softproindia.in/img/spi.png', // Placeholder logo
    period: 'June 2023 - Aug 2023',
    description: [
      'Engineered core modules for native Android applications using Java and Material Design 3.',
      'Optimized real-time database queries in Firebase, reducing data latency by 30%.',
      'Implemented robust user authentication flows and secure data handling protocols.',
      'Collaborated in an Agile environment using Git for version control and code reviews.'
    ]
  },
  {
    role: 'Technical Trainee',
    company: 'MNNIT Prayagraj',
    logo: 'https://upload.wikimedia.org/wikipedia/en/c/c2/Motilal_Nehru_National_Institute_of_Technology_Allahabad_logo.png',
    period: 'Dec 2022 - Feb 2023',
    description: [
      'Intensive training in Full-Stack development with a focus on scalable architecture.',
      'Developed RESTful APIs using Node.js to bridge mobile frontends with SQL databases.',
      'Modernized legacy student portals using React.js and Tailwind CSS for better accessibility.',
      'Completed multiple hackathons, focusing on rapid prototyping of AI-integrated tools.'
    ]
  },
  {
    role: 'Open Source Contributor',
    company: 'GitHub Community',
    logo: 'https://img.icons8.com/ios11/512/FFFFFF/github.png',
    period: '2022 - Present',
    description: [
      'Actively maintaining and contributing to several Android utility libraries.',
      'Resolved 20+ critical bugs in open-source projects related to UI performance.',
      'Mentored junior developers through detailed code reviews and documentation efforts.'
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  { title: 'Generative AI', issuer: 'Google Cloud', logo: 'https://www.gstatic.com/cgc/supercloud-draw-on--185-150--loop1.gif', year: '2024' },
  { title: 'Python Programming', issuer: 'Microsoft Learn', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg', year: '2023' },
  { title: 'Full Stack Web Dev', issuer: 'Coursera', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Coursera-Logo_600x600.svg', year: '2023' },
  { title: 'Web Development Mastery', issuer: 'MNNIT', logo: 'https://upload.wikimedia.org/wikipedia/en/c/c2/Motilal_Nehru_National_Institute_of_Technology_Allahabad_logo.png', year: '2022' }
];
