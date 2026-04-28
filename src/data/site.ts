export const siteConfig = {
  name: "Manish Prajapati",
  title: "Manish Prajapati | Software Engineer",
  description:
    "Software engineer with 3+ years of experience building web apps, desktop tools, and network infrastructure. Currently at RUDRA Cybersecurity.",
  url: "https://pman47.cc",
  ogImage: "/og-image.png",
  email: "prajapati.manish.r@gmail.com",
  phone: "+91 9327760618",
  location: "India",
  resumeUrl: "/Manish_Prajapati_SWE_Resume.pdf",
} as const;

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/pman47", icon: "github" },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/pman47",
    icon: "linkedin",
  },
  {
    name: "Email",
    url: "mailto:prajapati.manish.r@gmail.com",
    icon: "mail",
  },
] as const;

export const aboutContent = {
  headline: "Software Engineer",
  tagline: "Engineering software across the full stack.",
  summary:
    "Software engineer with 3.5+ years of experience across web apps, desktop tools, and network infrastructure. Currently at RUDRA Cybersecurity, building the platform behind 1,300+ production routers and 370+ users. Previously cut STT costs by 40% with an in-house Whisper pipeline and drove a Play Store app from 3.9 to 4.8 stars at English Quest.",
  highlights: [
    "3.5+ years of professional experience",
    "Full-stack: Python, TypeScript, React, FastAPI",
    "Router-level network automation with MikroTik RouterOS",
    "Shipped mobile app rated 4.8 stars on Play Store",
  ],
} as const;

export interface ExperienceItem {
  title: string;
  company: string;
  companyUrl?: string;
  location: string;
  type: string;
  startDate: string;
  endDate: string | null;
  highlights: string[];
  techStack: string[];
}

export const experiences: ExperienceItem[] = [
  {
    title: "Software Engineer",
    company: "RUDRA Cybersecurity",
    companyUrl: "https://rudrasecure.com/",
    location: "Mumbai, India",
    type: "Hybrid",
    startDate: "Sep 2024",
    endDate: null,
    highlights: [
      "Rewrote data usage tracking across 1,300+ production routers (500+ GB/day) from per-WAN to per LAN-WAN pair for 3x finer-grained visibility. Added IP-route-distance-based WAN cutoff, queue-based upload/download throttling, and a version-gated rollout that migrates the last 6 months of usage data per-router on reset, with zero fleet-wide downtime.",
      "Migrated the audit trail from Postgres to Elasticsearch. The prior free-text description column timed out on ILIKE searches (1+ min); queries now return in under a second across 10K+ events/day. Re-modeled parent-child trail linking and structured change diffs (router/fleet/tenant context) for the Elastic schema, with role-level filtered visibility and cursor-based pagination.",
      "Reworked the RBAC system into a 5-level role hierarchy with per-module CRUD permissions across 40+ modules. Users can be scoped to specific tenants, fleets, or routers. Used Hasura JWT custom claims to enforce row-level access control on the GraphQL frontend, now governing 370+ users and enabling onboarding of larger enterprise tenants.",
      "Designed static VPN IP assignment across 2 backend services, replacing OpenVPN's dynamic pool (where IPs drifted on reconnect and broke DB references on pool-state loss) with a PostgreSQL pool written to OpenVPN CCD files. Concurrency-safe allocation, conflict detection with bounded retry, transactional rollback on failure, and automatic IP reuse when a device is re-created with the same serial number.",
      "Ported backend services from Python Prisma to asyncpg with raw SQL. Cut entry-point import time from around 27s to under 1s by eliminating the Prisma client init that ran on every service cold start. Replaced Prisma's application-level relation loading with database-side SQL JOINs, cutting query time on relation-heavy reads.",
      "Built WAN speed monitoring as a net-new capability: RouterOS scripts log per-interface upload/download metrics to an on-router file every 2 minutes, while the backend SSH-polls each router every 15 minutes to ingest, persisting 500K+ datapoints/day into PostgreSQL with indexes tuned for date-range queries. The React dashboard renders dual-axis area charts with date-range filtering and CSV/PNG export.",
      "Shipped device lifecycle (activation, deactivation, scheduled toggles, deletion) with reversible network-layer enforcement that disables router interfaces, blocks the OpenVPN IP, and halts billing from the exact deactivation timestamp, replacing a delete-only pause model. Integrated with the billing system, including billing exports.",
      "Maintained and extended the router provisioning desktop app used to flash every production router. Added white-label theming (3 brands), branding package install, captive portal setup, VPN certificate deployment, and connectivity checks with retry. Migrated the whole utility from PySide6/QML to Electron.",
    ],
    techStack: [
      "Python",
      "FastAPI",
      "asyncpg",
      "React",
      "GraphQL",
      "PostgreSQL",
      "Elasticsearch",
      "Redis",
      "Hasura",
      "RouterOS",
      "OpenVPN",
      "Docker",
      "Electron",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "The English Quest",
    companyUrl: "https://www.theenglishquest.com/",
    location: "India",
    type: "Remote",
    startDate: "Aug 2022",
    endDate: "Aug 2024",
    highlights: [
      "Created in-house Speech-to-Text solution using OpenAI Whisper, cutting STT costs by 40% vs. external services.",
      "Engineered WhatsApp integration (WATI APIs/Webhooks) and email distribution (NodeMailer), improving delivery efficiency by 40% and reducing manual intervention by 20 hours monthly.",
      "Implemented User Activity History functionality in CRM Portal to track user history along with timestamps and other details.",
      "Increased Play Store app rating from 3.9 to 4.8 stars by building responsive React Native components and improving UX.",
      "Crafted responsive and modular components leveraging ReactJS for web applications and React Native for cross-platform mobile applications.",
    ],
    techStack: [
      "React",
      "React Native",
      "Node.js",
      "Express.js",
      "TypeScript",
      "MongoDB",
      "Firebase",
      "AWS SES",
    ],
  },
  {
    title: "Full Stack Development Intern",
    company: "Newton School",
    companyUrl: "https://www.newtonschool.co/",
    location: "India",
    type: "Remote",
    startDate: "Dec 2021",
    endDate: "Jun 2022",
    highlights: [
      "Completed an intensive full-stack development bootcamp covering data structures, algorithms, and web development with JavaScript, ReactJS, Node.js, Express.js, and MongoDB.",
      "Built applications including an Instagram Clone and Marvel App, applying component-based architecture with ReactJS, API integration, and responsive design.",
      "Competed in platform-hosted coding contests, strengthening problem-solving and algorithmic thinking skills.",
    ],
    techStack: [
      "JavaScript",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "CSS",
      "Bootstrap",
    ],
  },
];

export interface ProjectItem {
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: ProjectItem[] = [
  {
    title: "Link List",
    description:
      "A web app for managing and sharing multiple links through a single, customizable URL. Features SSR, secure auth via NextAuth, dynamic link management, data visualization with Recharts, and responsive design.",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "NextAuth",
    ],
    liveUrl: "https://pman47-linklist.vercel.app/",
    githubUrl: "https://github.com/pman47/link-list",
  },
  {
    title: "The English Quest - Mobile App",
    description:
      "A mobile app designed for students who wish to study and improve their English. Built with React Native Expo and deployed on the Play Store, achieving a 4.8-star rating.",
    techStack: [
      "React",
      "React Native",
      "Expo",
      "Microsoft Azure",
    ],
    liveUrl:
      "https://play.google.com/store/apps/details?id=tqel.queensenglish.android.app",
  },
];

export interface SkillCategory {
  name: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "SQL", "HTML/CSS"],
  },
  {
    name: "Frameworks",
    items: [
      "FastAPI",
      "React",
      "React Native",
      "Next.js",
      "Node.js",
      "Express.js",
    ],
  },
  {
    name: "Databases",
    items: ["PostgreSQL", "Redis", "Elasticsearch"],
  },
  {
    name: "Infrastructure",
    items: ["Docker", "Hasura", "MikroTik RouterOS"],
  },
  {
    name: "Tools",
    items: ["Git", "GitHub", "GraphQL", "Apollo Client"],
  },
];

export const education = {
  degree: "Bachelor of Computer Applications",
  institution: "Gujarat University",
  location: "Ahmedabad, Gujarat",
  startYear: "2019",
  endYear: "2022",
} as const;
