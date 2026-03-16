/**
 * Structured data mirrored from data/experience.md, data/profile.md,
 * and data/projects.md. Update both the markdown and this file together.
 */

/* ─── Experience ──────────────────────────────────────────────────────── */

export interface ExperienceEntry {
  role: string;
  company: string;
  duration: string;
  location: string;
  remote?: boolean;
  intro?: string;
  bullets: string[];
  technologies: string[];
}

export const experience: ExperienceEntry[] = [
  {
    role: 'Senior Backend Developer',
    company: 'Resolve Tech Solutions — Client: 7-Eleven',
    duration: 'Jul 2025 – Present',
    location: 'Irving, TX',
    remote: false,
    intro:
      "Contracted into 7-Eleven's Delivery as a Service (DaaS) platform — integrating DoorDash, UberEats, and Skipcart into a unified delivery layer.",
    bullets: [
      'Scaled reactive event-streaming pipeline from 400K to 1M messages/day on a single instance by restructuring transaction boundaries, scoping writes, and enforcing query timeouts',
      'Diagnosed and resolved a 3-day undetected production outage (50 DB connections exhausted): traced connection timeouts through DLQ spikes to legacy reactive chain queries — pool exhaustion eliminated, throughput doubled',
      'Engineered ingress layer with manual Kinesis shard acknowledgment to enforce strict message ordering without sacrificing throughput',
      'Designed DLQ failure pipeline with retry scheduling and MongoDB persistence — zero silent data loss across all failure scenarios',
      'Migrated Streaming Service infrastructure from Azure (Event Hub) to AWS (Kinesis, Secrets Manager, pod-based IAM roles)',
      'Resolved 8–10 integration bugs across 3PL and Skipcart services where malformed payload formatting caused downstream systems to silently fail — restoring correct functional behavior across delivery workflows',
      'Configured MCP servers for GitHub, Jira, and Confluence; used GitHub Copilot Workspace to scaffold automation testing workflows',
    ],
    technologies: [
      'Java', 'AWS Kinesis', 'AWS SQS', 'MongoDB', 'New Relic',
      'AWS Secrets Manager', 'Reactor', 'Azure Event Hub',
    ],
  },
  {
    role: 'Senior Software Engineer',
    company: 'Confiz Limited — AI Training Program',
    duration: 'Jun 2025 – Jul 2025',
    location: 'Bellevue, WA',
    remote: true,
    bullets: [
      'Participated in an intensive internal AI training program focused on Python, LangChain, and Generative AI development',
      'Gained hands-on experience with LLM integrations, prompt engineering techniques, and rapid prototyping of AI solutions',
      'Built mini-projects involving data pipelines, ETL workflows, and orchestration tools for AI use-case implementations',
      'Explored LangChain applications for retrieval-augmented generation (RAG) and intelligent task automation',
    ],
    technologies: [
      'Python', 'LangChain', 'Generative AI', 'LLMs',
      'Prompt Engineering', 'ETL', 'Data Pipelines',
    ],
  },
  {
    role: 'Senior Software Engineer & Consultant',
    company: 'Confiz Ltd. — Client: Walmart',
    duration: 'Oct 2022 – Jul 2024',
    location: 'Islamabad, Pakistan',
    remote: true,
    bullets: [
      'Contributed to microservices architecture design decoupling workorders, items & products, tracking, and third-party integrations across Walmart\'s store network',
      'Built a software tracking system in Java, Spring Boot, Hibernate, and MySQL monitoring update rollout status across 5,000+ U.S. Walmart stores',
      'Collaborated with U.S. teams to migrate pharmacy software to a cloud solution using Spring Boot, React.js, and AWS CI/CD pipelines',
      'Managed Kubernetes and Jenkins CI/CD pipelines ensuring high availability across 5,000+ stores',
      'Integrated Apache Kafka for real-time event messaging across distributed store systems',
      'Implemented Splunk dashboards and alerting for operational monitoring',
      'Improved release quality using SonarQube, Snyk, JUnit, and Mockito',
    ],
    technologies: [
      'Java', 'Spring Boot', 'Hibernate', 'MySQL', 'RESTful APIs',
      'Kubernetes', 'Kafka', 'Splunk', 'SonarQube', 'Snyk', 'JUnit', 'Mockito',
      'React.js', 'AWS CI/CD',
    ],
  },
  {
    role: 'Software Developer',
    company: 'Funavry Technologies',
    duration: 'Apr 2021 – Sep 2022',
    location: 'Islamabad, Pakistan',
    bullets: [
      'Built RESTful APIs in Java, Spring Boot, and Hibernate integrating DTAC Thailand\'s ERP with Coupa — reduced integration effort by 40%',
      'Designed RESTful API architecture for a social media job portal using Nest.js and TypeScript — cut delivery time by 45%',
      'Led backend team building the job portal using Spring Boot and React.js; implemented Stripe payment system with escrow',
      'Maintained 99.99% uptime through on-call hyper-care support within SLAs',
      'Streamlined Jenkins CI/CD pipelines to reduce deployment failures and speed up release cycles',
    ],
    technologies: [
      'Java', 'Spring Boot', 'Hibernate', 'MySQL', 'Nest.js',
      'TypeScript', 'React.js', 'Stripe', 'Apache Kafka', 'Jenkins', 'AWS',
    ],
  },
  {
    role: 'Design Engineer',
    company: 'Care Pvt. Ltd.',
    duration: 'Sep 2019 – Mar 2021',
    location: 'Islamabad, Pakistan',
    bullets: [
      'Built custom Joget Workflow plugins in Java and Spring Boot for a client in the aviation defense sector — delivered GANTT chart system tracking full operational workflow lifecycle, plus data list views and graph visualizations',
      'Extended Joget\'s GRID element with row-level action handling using Java, enabling direct in-grid data manipulation',
      'Built biometric authentication system with end-to-end encryption: C++ DLLs integrated into Java via JNI, SourceAFIS fingerprint matching, device-agnostic deployment',
      'Developed Windows background authentication service using Spring Boot with Windows Biometric Framework, packaged with Advanced Installer',
    ],
    technologies: [
      'Java', 'C++', 'Spring Boot', 'Windows Biometric Framework', 'JNI', 'Advanced Installer',
    ],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Bentley Systems',
    duration: 'Jul 2019 – Aug 2019',
    location: 'Islamabad, Pakistan',
    bullets: [
      'Contributed to a company-wide initiative to synchronize local applications with proprietary cloud solutions — researched integration techniques and developed proof of concept',
    ],
    technologies: ['NodeJS', 'TypeScript'],
  },
];

/* ─── Skills ─────────────────────────────────────────────────────────── */

export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    skills: ['Java', 'TypeScript', 'Python', 'C++', 'C#/.NET'],
  },
  {
    category: 'Frameworks & Libraries',
    skills: [
      'Spring Boot', 'Hibernate', 'Reactor', 'Nest.js', 'React.js', 'LangChain',
      'Apache Kafka', 'AWS Kinesis', 'AWS SQS', 'Azure Event Hub',
    ],
  },
  {
    category: 'Cloud & Infrastructure',
    skills: [
      'AWS', 'Azure', 'Kubernetes', 'Docker', 'Jenkins',
      'New Relic', 'Splunk', 'SonarQube',
    ],
  },
  {
    category: 'Databases',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Amazon RDS'],
  },
  {
    category: 'Tools & Practices',
    skills: [
      'JUnit', 'Mockito', 'Maven', 'Git', 'Postman', 'Liquibase', 'JIRA',
      'Microservices', 'Event-Driven Architecture', 'Reactive Pipelines',
      'DLQ Patterns', 'Idempotency', 'MCP', 'GitHub Copilot', 'Claude Code',
    ],
  },
];

/* ─── Projects ───────────────────────────────────────────────────────── */

export interface Project {
  name: string;
  context: string;
  description: string;
  stack: string[];
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    name: 'Streaming Service — 7-Eleven DaaS',
    context: 'Resolve Tech Solutions (Client: 7-Eleven)',
    description:
      'Event-driven delivery pipeline consuming real-time order events from DoorDash, UberEats, and Skipcart. Reactive, non-blocking Java architecture processing 1M+ messages/day on a single instance. Includes DLQ failure handling, idempotent processing, manual Kinesis shard acknowledgment for ordering, and configurable retry scheduling.',
    stack: ['Java', 'AWS Kinesis', 'AWS SQS', 'MongoDB', 'New Relic', 'AWS Secrets Manager'],
  },
  {
    name: 'GPH Carbon — Walmart Pharmacy',
    context: 'Confiz Ltd. (Client: Walmart)',
    description:
      'Cloud migration of Walmart\'s HQ pharmacy software. Managed workorder approvals and store update packages across 5,000+ U.S. locations using Spring Boot microservices and AWS CI/CD pipelines.',
    stack: ['Java', 'Spring Boot', 'React.js', 'AWS CI/CD', 'Kubernetes', 'Jenkins'],
  },
  {
    name: 'MarketPlace Pro',
    context: 'Personal Project',
    description:
      'Full-stack e-commerce platform with user roles, product management, order tracking, JWT auth, payment integration, and S3 file uploads. Deployed on AWS.',
    stack: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'AWS'],
  },
  {
    name: 'Event Management System',
    context: 'Personal Project',
    description:
      'Full-stack event platform with ticket booking, payment integration, JMS messaging, and pessimistic locking to handle concurrent bookings. Deployed on AWS.',
    stack: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'MySQL', 'AWS'],
  },
  {
    name: 'Expense Tracker',
    context: 'Personal Project',
    description:
      'Full-stack expense tracker with add/edit/delete/filter functionality, category breakdowns, and clean REST APIs.',
    stack: ['Spring Boot', 'React', 'PostgreSQL'],
  },
  {
    name: 'Dictionary App',
    context: 'Personal Project',
    description:
      'Word search and definitions app with top-searched word tracking optimized for query performance with indexed lookups.',
    stack: ['Spring Boot', 'React', 'SQLite'],
  },
];

/* ─── Contact ────────────────────────────────────────────────────────── */

export const contact = {
  email:    'awaiswaheed.work@gmail.com',
  github:   'https://github.com/awaiswaheed321',
  linkedin: 'https://www.linkedin.com/in/awaiswaheed96/',
};
