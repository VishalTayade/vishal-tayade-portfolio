// Single source of truth — extracted strictly from Vishal_Tayade_FullStack_Developer.pdf
export const profile = {
  name: 'Vishal Tayade',
  title: 'Full Stack Developer (Java / Spring Boot) | Frontend Engineer',
  location: 'Pune, India',
  phone: '+91-8007725758',
  email: 'vishal.tayade12@gmail.com',
  linkedin: 'https://linkedin.com/in/vishal-tayade',
  github: 'https://github.com/VishalTayade',
  summary:
    'Full Stack Developer with 3.5 years of experience building backend and frontend systems, including hands-on delivery of Java and Spring Boot REST APIs within a microservices architecture for an insurance-domain platform (policy, claims, premium, quote, and onboarding services) at Hover Technologies. Experienced designing and building new microservices, maintaining and extending existing services, and handling service-to-service communication using Docker, Kubernetes, and RESTful APIs.',
};

export const skillGroups = [
  {
    label: 'Languages',
    items: ['Java / Java 8', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3'],
  },
  {
    label: 'Backend',
    items: [
      'Spring Boot',
      'Hibernate / JPA',
      'RESTful APIs',
      'Microservices Architecture',
      'Node.js (basics)',
      'GraphQL (basics)',
    ],
  },
  {
    label: 'Frontend',
    items: [
      'React.js',
      'Angular',
      'Redux',
      'React Hooks',
      'React Router',
      'Next.js (basics)',
      'Tailwind CSS',
      'Bootstrap',
      'Material UI',
    ],
  },
  {
    label: 'Databases',
    items: ['MySQL', 'PostgreSQL', 'MongoDB (NoSQL)'],
  },
  {
    label: 'DevOps & Tools',
    items: [
      'Docker',
      'Kubernetes',
      'AWS (EC2, S3, RDS - basics)',
      'Git / GitHub / GitLab',
      'Jenkins',
      'CI/CD',
      'Postman',
      'Linux / Ubuntu',
    ],
  },
  {
    label: 'Testing',
    items: ['JUnit (basics)', 'React Testing Library', 'Jest', 'Unit & Integration Testing'],
  },
  {
    label: 'UI/UX',
    items: ['Figma', 'Adobe XD', 'Design Systems', 'Wireframing', 'Prototyping', 'Storybook'],
  },
  {
    label: 'Methodologies',
    items: [
      'Agile / Scrum',
      'Code Reviews',
      'Responsive Design',
      'Performance Optimization',
      'Cross-browser Compatibility',
    ],
  },
  {
    label: 'AI-Assisted Development',
    items: ['Claude Code', 'GitHub Copilot', 'Cursor', 'ChatGPT', 'Prompt Engineering'],
  },
];

export const experience = [
  {
    role: 'Software Developer (Full Stack)',
    company: 'Hover Technologies Pvt. Ltd.',
    dates: 'Mar 2025 – Aug 2026',
    context:
      'Insurance-domain platform — policy management, claims processing, premium calculation, quote generation, and customer onboarding.',
    points: [
      'Designed and developed RESTful APIs in Java and Spring Boot for policy lookup, claims processing, premium calculation, quote generation, and customer onboarding modules.',
      'Built new microservices and maintained/extended existing services within a Docker- and Kubernetes-based microservices architecture, handling service-to-service communication through RESTful APIs.',
      'Used PostgreSQL for policy and claims document storage — designed schemas, wrote queries and aggregation pipelines, and supported data migration efforts.',
      'Defined and validated API contracts using Postman, collaborating closely with backend and QA teams to reduce integration defects by 30%.',
      'Supported deployment testing on AWS EC2 staging environments and S3-based asset hosting as part of the team\'s basic cloud infrastructure workflow.',
      'Architected React.js and Angular frontend modules consuming these APIs, with reusable component libraries and state management — reducing UI development time by 20% per sprint, with unit/integration test coverage via JUnit, React Testing Library, and Jest.',
    ],
    tech: ['Java', 'Spring Boot', 'Microservices', 'Docker', 'Kubernetes', 'PostgreSQL', 'React.js', 'Angular', 'AWS'],
  },
  {
    role: 'Frontend Developer',
    company: 'Smartatech India Pvt. Ltd.',
    dates: 'Mar 2023 – Dec 2024',
    context: '',
    points: [
      'Designed and developed reusable React.js components with React Router — scalable architecture adopted as team standard across 3 product modules.',
      'Reduced initial page load time by 30% through code splitting, lazy loading, and Webpack optimizations, measured via Lighthouse audits.',
      'Integrated RESTful APIs with robust error handling and structured logging; introduced practices that cut average bug resolution time by 25%.',
      'Strengthened test coverage using React Testing Library and Jest; maintained code quality through peer reviews and GitLab merge-request workflows.',
      'Led design reviews and stakeholder feedback sessions during prototyping — reducing post-development design revisions by 40% and accelerating sprint delivery.',
      'Ensured cross-browser compatibility and responsive layouts using mobile-first CSS with Bootstrap and Tailwind CSS.',
    ],
    tech: ['React.js', 'Redux', 'RESTful APIs', 'Webpack', 'React Testing Library', 'Jest', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    role: 'Web Developer',
    company: 'Hirect India',
    dates: 'Apr 2022 – Nov 2022',
    context: '',
    points: [
      'Built responsive React.js web experiences with clean component architecture, increasing user engagement by 45% (session duration analytics).',
      'Implemented a real-time chat UI module (typing indicators, unread states, instant rendering) that improved user retention by 50%.',
      'Introduced React Testing Library and structured logging workflows, reducing bug resolution time by 30% and improving code reliability.',
      'Delivered pixel-perfect UI implementations aligned to Figma design specifications.',
      'Ensured cross-browser compatibility and accessibility compliance across all feature surfaces.',
      'Collaborated with product and design teams in Agile sprints to deliver features on schedule with consistent UI quality.',
    ],
    tech: ['React.js', 'Figma', 'Responsive/Mobile-first CSS'],
  },
];

export const projects = [
  {
    name: 'Insurance Policy & Claims Platform',
    company: 'Hover Technologies',
    dates: 'Mar 2025 – Aug 2026',
    role: 'Full Stack Developer (Backend & Frontend)',
    summary:
      'Designed and built RESTful APIs and microservices for an insurance platform covering policy lookup, claims processing, premium calculation, quote generation, and customer onboarding.',
    details:
      'Used PostgreSQL for policy/claims document storage (schema design, aggregation pipelines, data migration), containerized services with Docker and ran them on Kubernetes behind RESTful APIs, and built the React.js frontend that consumed these services. Supported basic deployment testing on AWS EC2/S3.',
    tech: [
      'Java',
      'Spring Boot',
      'Microservices',
      'Docker',
      'Kubernetes',
      'RESTful APIs',
      'PostgreSQL',
      'Postman',
      'React.js',
      'Angular',
      'AWS (EC2, S3)',
    ],
  },
  {
    name: 'Advanced Data Dashboard',
    company: 'Smartatech India',
    dates: 'Mar 2023 – Dec 2024',
    role: 'Frontend Developer',
    summary:
      'Built analytics dashboards with reusable React.js components, Redux state management, and RESTful API integration for real-time data visualization, including interactive drill-down filtering widgets for exploring business metrics.',
    details:
      'Optimized load time by 30% via lazy loading, code splitting, and Webpack tuning, and reduced dashboard bugs by 25% through React Testing Library and Jest coverage.',
    tech: ['React.js', 'Redux', 'RESTful APIs', 'Webpack', 'React Testing Library', 'Jest'],
  },
  {
    name: 'Recruitment Platform — Real-Time Messaging Module',
    company: 'Hirect India',
    dates: 'Apr 2022 – Nov 2022',
    role: 'Web Developer',
    summary:
      'Built a mobile-first, responsive React.js web platform connecting job seekers and recruiters, with a clean, reusable component architecture that increased user engagement by 45%.',
    details:
      'Developed a real-time chat module (typing indicators, unread-notification states, instant message rendering) that improved user retention by 50%, delivering pixel-perfect UI from Figma designs with cross-browser compatibility.',
    tech: ['React.js', 'Figma', 'Responsive/Mobile-first CSS'],
  },
];

export const education = [
  {
    degree: 'B.Tech / B.E. — Computer Science and Engineering',
    institution: '',
    year: '2020',
    details: '',
  },
];

export const achievements = [
  'Reduced integration defects by 30% at Hover Technologies through API contract definition and validation with Postman.',
  'Reduced UI development time by 20% per sprint via reusable React.js / Angular component libraries and state management.',
  'Reduced initial page load time by 30% at Smartatech through code splitting, lazy loading, and Webpack optimizations (Lighthouse-audited).',
  'Cut average bug resolution time by 25% at Smartatech via structured logging and error-handling practices.',
  'Reduced post-development design revisions by 40% by leading design reviews and stakeholder feedback sessions during prototyping.',
  'Increased user engagement by 45% at Hirect India (session duration analytics).',
  'Improved user retention by 50% through a real-time chat UI module with typing indicators and unread states.',
  'Reduced bug resolution time by 30% at Hirect India by introducing React Testing Library and structured logging workflows.',
];