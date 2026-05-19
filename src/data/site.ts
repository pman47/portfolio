export const siteConfig = {
  name: "Manish Prajapati",
  title: "Manish Prajapati | Software Engineer",
  description:
    "Software engineer with 3.5+ years of experience building web apps, desktop tools, and network infrastructure. Currently at RUDRA Cybersecurity.",
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
  currentlyAt: "RUDRA Cybersecurity",
  summary:
    "Software engineer with 3.5+ years of experience across web apps, desktop tools, and network infrastructure. Currently at RUDRA Cybersecurity, building the platform behind 1,300+ routers and 370+ users. Previously cut STT costs by 40% with an in-house Whisper pipeline and drove a Play Store app from 3.9 → 4.8 on English Quest.",
  stats: [
    { value: "3.5+", label: "years of experience" },
    { value: "1,300+", label: "routers in production" },
    { value: "370+", label: "users governed" },
    { value: "4.8★", label: "Play Store rating" },
  ],
} as const;

export interface Highlight {
  headline: string;
  detail: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  companyUrl?: string;
  location: string;
  type: string;
  startDate: string;
  endDate: string | null;
  highlights: Highlight[];
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
      {
        headline: "3x finer usage visibility across 1,300+ routers.",
        detail:
          "Rewrote data usage tracking from per-WAN to per LAN-WAN pair across 1,300+ production routers (500+ GB/day). Added WAN cutoff, queue-based upload/download throttling, and a zero-downtime rollout that migrates the last 6 months of usage data per-router on reset.",
      },
      {
        headline: "Search times: 1+ min → under a second.",
        detail:
          "Migrated the audit trail from Postgres to Elasticsearch to fix slow text searches that timed out at over a minute. Queries now return in under a second across 10K+ events/day. Re-modeled the schema with parent-child trail linking and structured change diffs, with role-level filtered visibility and cursor-based pagination.",
      },
      {
        headline: "Real RBAC: 5 levels, 40+ modules, 370+ users.",
        detail:
          "Rebuilt the RBAC system into a 5-level role hierarchy with per-module CRUD permissions across 40+ modules, with multi-level scope support. Used Hasura JWT custom claims to enforce row-level access control on the GraphQL frontend, now governing 370+ users and enabling onboarding of larger enterprise tenants.",
      },
      {
        headline: "Static VPN IP pool ends reconnect drift.",
        detail:
          "Designed static VPN IP assignment across 2 backend services, replacing a dynamic IP pool that drifted on reconnect with a PostgreSQL-backed allocation synced to the VPN server's per-client config. Concurrency-safe assignment, conflict detection with bounded retry, transactional rollback on failure, and automatic IP reuse on device re-creation.",
      },
      {
        headline: "27s → <1s cold start: ditched Prisma for asyncpg.",
        detail:
          "Ported backend services from Python Prisma to asyncpg with raw SQL. Cut entry-point import time from around 27s to under 1s by eliminating the Prisma client init that ran on every service cold start. Replaced Prisma's application-level relation loading with database-side SQL JOINs, cutting query time on relation-heavy reads.",
      },
      {
        headline: "Net-new WAN speed monitoring at 500K+ datapoints/day.",
        detail:
          "Built WAN speed monitoring as a net-new capability with a two-tier ingress: routers log per-interface upload/download metrics to a local buffer, and the backend polls each router on a schedule to ingest, persisting 500K+ datapoints/day into PostgreSQL with date-range-tuned indexes. The React dashboard renders dual-axis area charts with date-range filtering and CSV/PNG export.",
      },
      {
        headline: "Reversible device lifecycle, billing-aware to the second.",
        detail:
          "Activation, deactivation, scheduled toggles, and deletion with reversible network-layer enforcement and billing that halts from the exact deactivation timestamp, replacing a delete-only pause model. Integrated with the billing system, including billing exports.",
      },
      {
        headline: "Provisioning desktop app: PySide6/QML → Electron.",
        detail:
          "Maintained and extended the desktop app used to flash every production router. Added white-label theming (3 brands), branding package install, captive portal setup, VPN certificate deployment, and connectivity checks with retry. Migrated the whole utility from PySide6/QML to Electron.",
      },
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
      {
        headline: "STT bill down 40% with self-hosted Whisper.",
        detail:
          "Replaced the external Speech-to-Text vendor with an OpenAI Whisper pipeline, cutting STT costs by 40% versus external services.",
      },
      {
        headline: "WhatsApp + email automation: 20 hours/month back.",
        detail:
          "Built the messaging stack on WATI WhatsApp APIs and webhooks plus NodeMailer for email, lifting delivery efficiency 40% and saving 20 hours/month of manual work.",
      },
      {
        headline: "Audit-style activity history inside the CRM.",
        detail:
          "Built User Activity History tracking with timestamps and contextual metadata, used for support and product debugging.",
      },
      {
        headline: "Play Store rating: 3.9 → 4.8.",
        detail:
          "Rebuilt key React Native screens for responsiveness and UX, driving the rating change in production.",
      },
      {
        headline: "One component layer for web and mobile.",
        detail:
          "Built modular, responsive components shared between ReactJS for web and React Native for cross-platform mobile.",
      },
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
      {
        headline: "Full-stack development bootcamp.",
        detail:
          "Covered data structures, algorithms, and web development with JavaScript, ReactJS, Node.js, Express.js, and MongoDB.",
      },
      {
        headline: "Built Instagram Clone and Marvel App.",
        detail:
          "Applied component-based architecture with ReactJS, REST API integration, and responsive design.",
      },
      {
        headline: "Regular coding-contest entrant.",
        detail:
          "Sharpened problem-solving and algorithmic thinking through platform-hosted contests.",
      },
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
  monogram: string;
  outcome: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: ProjectItem[] = [
  {
    title: "Link List",
    monogram: "LL",
    outcome: "All your links, one URL.",
    description:
      "SSR web app with secure NextAuth login, dynamic link management, click analytics rendered with Recharts, and a fully responsive layout — your custom link page on a single shareable URL.",
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
    title: "The English Quest",
    monogram: "EQ",
    outcome: "3.9 → 4.8★ on Play Store.",
    description:
      "Cross-platform mobile app for students learning English. Built with React Native + Expo, backed by Azure services, and shipped to the Play Store at scale.",
    techStack: ["React Native", "Expo", "TypeScript", "Microsoft Azure"],
    liveUrl:
      "https://play.google.com/store/apps/details?id=tqel.queensenglish.android.app",
  },
];

export interface SkillCategory {
  name: string;
  primary: string[];
  supporting: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    primary: ["Python", "TypeScript", "JavaScript", "SQL"],
    supporting: ["Bash", "HTML/CSS"],
  },
  {
    name: "Backend & API",
    primary: ["FastAPI", "Node.js", "REST APIs", "GraphQL"],
    supporting: ["Express.js", "Async I/O", "JWT", "OAuth"],
  },
  {
    name: "Frontend",
    primary: ["React", "React Native", "Next.js"],
    supporting: ["Apollo Client"],
  },
  {
    name: "Databases",
    primary: ["PostgreSQL", "Elasticsearch", "Redis"],
    supporting: [],
  },
  {
    name: "Infrastructure",
    primary: ["Docker", "Linux", "Hasura"],
    supporting: ["MikroTik RouterOS"],
  },
  {
    name: "Concepts",
    primary: ["Microservices", "Distributed Systems", "System Design", "RBAC"],
    supporting: ["Time-series Ingestion", "Event-driven Architecture"],
  },
];

export interface ContactChannel {
  label: string;
  value: string;
  url: string;
  icon: "mail" | "linkedin" | "github";
}

export const contactChannels: ContactChannel[] = [
  {
    label: "Email",
    value: "prajapati.manish.r@gmail.com",
    url: "mailto:prajapati.manish.r@gmail.com",
    icon: "mail",
  },
  {
    label: "LinkedIn",
    value: "in/pman47",
    url: "https://linkedin.com/in/pman47",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    value: "@pman47",
    url: "https://github.com/pman47",
    icon: "github",
  },
];

export const education = {
  degree: "Bachelor of Computer Applications",
  institution: "Gujarat University",
  location: "Ahmedabad, India",
  startYear: "2019",
  endYear: "2022",
} as const;
