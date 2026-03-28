export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  tech: string[];
}

export interface Project {
  title: string;
  logo?: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  highlights: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export const personalInfo = {
  name: "Matt Bush",
  title: "Senior Software Engineer",
  tagline: "Building full-stack applications with a focus on user experience",
  bio: `Experienced Senior Software Engineer with a passion for building scalable,
  performant applications. I specialise in .NET 8 and TypeScript across the full stack —
  using frontend frameworks React and VueJS.`,
  email: "mattbushdev@gmail.com",
  github: "https://github.com/mattbushdev",
  linkedin: "https://linkedin.com/in/matthew-bush-001",
  location: "United Kingdom",
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    skills: [
      "TypeScript",
      "React 19",
      "Vue.js 3",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "TanStack Query",
    ],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Hono", "Express", "REST APIs", ".NET 8", "PostgreSQL"],
  },
  {
    category: "Cloud & Edge",
    skills: ["Azure Certified", "Cloudflare Workers", "GitHub Actions"],
  },
  {
    category: "Tools & Practices",
    skills: ["Git", "Jest", "ESLint", "Docker", "CI/CD", "Agile / Scrum"],
  },
];

export const experiences: Experience[] = [
  {
    role: "Senior Software Engineer",
    company: "Tappit",
    period: "2026 — Present",
    location: "Remote, UK",
    description:
      "Leading full-stack development across client and customer facing web applications, with a focus on useability and performance.",
    highlights: [
      "Shipped and helped architect a new greenfield version of the product using .NET 8 and Vue.js",
      "Contributed to the re-platforming of backend services from AWS to Azure, improving scalability and reducing costs",
      "Led and pioneered the adoption AI tools like Github Copilot to enhance developer productivity in a small team, increasing test coverage",
      "Supported junior engineers through pair programming, code review, and technical documentation",
      "Drove adoption of UI/UX Design Standards document to improve the team's understanding of user focused development",
    ],
    tech: [
      "TypeScript",
      "Vue.js",
      "Tailwind CSS",
      ".NET 8",
      "Azure Functions",
      "Cloudflare Workers",
    ],
  },
  {
    role: "Software Engineer",
    company: "Tappit",
    period: "2023 — 2025",
    location: "Remote, UK",
    description:
      "Full-stack engineer on a fintech event product, building APIs and a React Native app.",
    highlights: [
      "Built and maintained RESTful .NET APIs with RabbitMQ and PostgreSQL serving 1000s of users",
      "Developed client admin dashboards with live event feeds and interactive reporting",
      "Improved test coverage from 30% to 85% by introducing Coverlet reports into CI pipelines",
      "Collaborated closely with product and design in an Agile squad environment",
    ],
    tech: [
      "TypeScript",
      "React",
      "React Native",
      "Android Studio",
      ".NET 8",
      "MassTransit",
      "RabbitMQ",
    ],
  },
  {
    role: "Junior Software Engineer",
    company: "Tappit",
    period: "2022 — 2023",
    location: "Remote, UK",
    description:
      "Started career building API services and customer-facing web applications, growing from junior to a confident full-stack contributor within a year.",
    highlights: [
      "Delivered customer-facing features in Angular as part of a small agile team",
      "Built .NET microservices to integrate third-party APIs like SeatGeek and Square",
      "Maintained and extended legacy .NET applications, improving reliability",
      "Participated in on-call rotation, gaining strong debugging and incident response skills",
    ],
    tech: ["JavaScript", "React", "Node.js", "Express", "MySQL", "REST APIs"],
  },
];

export const projects: Project[] = [
  {
    title: "WhoDish?",
    live: "https://whodish.co.uk",
    logo: "/whodish.svg",
    description:
      "Full-stack social platform built with AI image generation for food dishes and a fully serverless backend.",
    tech: [
      "React",
      "TypeScript",
      "Hono",
      "Cloudflare Workers",
      "Gemini AI",
      "Supabase",
      "Tailwind CSS",
    ],
    highlights: [
      "AI image generation for food dishes",
      "Serverless API on Cloudflare Workers via Hono framework",
      "Authentication and database powered by Supabase",
    ],
  },
  {
    title: "Hyperstocks",
    live: "https://hyperstocks.app",
    logo: "/hyperstocks.png",
    description:
      "Real-time blockchain trading app aggregating both cryptocurrency and stock prices.",
    tech: [
      "React",
      "TypeScript",
      "Hono",
      "Cloudflare Workers",
      "Supabase",
      "Tailwind CSS",
      "Web3 Blockchain",
    ],
    highlights: [
      "Live market data streamed via Blockchain connections",
      "Edge-deployed API for sub-100ms global response times",
      "Simple UI and trade execution with Web3 wallet integrations",
    ],
  },
];
