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
    "Software engineer with 3+ years of experience working across web apps, desktop tools, and network infrastructure. Currently building a router management platform at RUDRA Cybersecurity using Python, FastAPI, React, GraphQL, and RouterOS. Previously cut STT costs by 40% with an in-house Whisper solution and pushed a Play Store app from 3.9 to 4.8 stars at English Quest.",
  highlights: [
    "3+ years of professional experience",
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
    location: "Mumbai, India",
    type: "Hybrid",
    startDate: "Sep 2024",
    endDate: null,
    highlights: [
      "Rewrote data usage tracking per LAN-WAN pair with cutoff support and dynamic queue throttling; handled V1-to-V2 data migration.",
      "Built device lifecycle flow (activation/deactivation/deletion) integrated with billing system supporting plan cascading and billing exports.",
      "Reworked RBAC to a 5-level role hierarchy with per-module CRUD, tenant/fleet/router scoping, and Hasura JWT row-level access control.",
      "Added WAN speed monitoring: RouterOS scripts collect metrics every 2 min, stored in PostgreSQL, visualized as dual-axis area charts.",
      "Redesigned audit trail with parent-child UUID linking, structured change diffs, and Elasticsearch-backed role-filtered visibility.",
      "Sole developer on router provisioning desktop app (PySide6/QML) with white-label theming, VPN cert deployment, and connectivity retry logic.",
    ],
    techStack: [
      "Python",
      "FastAPI",
      "React",
      "GraphQL",
      "PostgreSQL",
      "Elasticsearch",
      "Redis",
      "Hasura",
      "RouterOS",
      "Docker",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "The English Quest",
    location: "India",
    type: "Remote",
    startDate: "Aug 2022",
    endDate: "Aug 2024",
    highlights: [
      "Created in-house Speech-to-Text solution using OpenAI Whisper, cutting STT costs by 40% vs. external services.",
      "Engineered WhatsApp integration (WATI APIs/Webhooks) and email distribution (NodeMailer), improving delivery efficiency by 40%.",
      "Increased Play Store app rating from 3.9 to 4.8 stars by building responsive React Native components and improving UX.",
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
    items: ["PostgreSQL", "Redis", "Elasticsearch", "MongoDB"],
  },
  {
    name: "Infrastructure",
    items: ["Docker", "AWS (SES)", "Firebase", "Hasura", "MikroTik RouterOS"],
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
