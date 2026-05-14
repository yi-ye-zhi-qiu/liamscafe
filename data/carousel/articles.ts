import { products } from "../products";
import type { LinkProps } from "next/link";

interface ArticleLink extends LinkProps {
  label: string;
  download?: string;
}

interface Section {
  heading?: string;
  bullets: string[];
}

export interface ArticleData {
  id: number;
  overlayIndex: number;
  productId: keyof typeof products;
  title: string;
  image: string;
  subtitle: string;
  date: string;
  sourceCode?: string;
  description?: string;
  role?: string;
  company?: { name: string; href: string };
  links: ArticleLink[];
  sections: Section[];
}

export const articleData: ArticleData[] = [
  {
    id: 1,
    overlayIndex: 2,
    productId: "P000003",
    title: "leeuhm.gg",
    image: "/svg/eclair.svg",
    subtitle:
      "Chocolate éclair filled with data science pastry cream. Popular with League of Legends fans who want to improve their game.",
    date: "Feb 29, 2026",
    links: [
      { label: "Source code", href: "https://github.com/yi-ye-zhi-qiu/leeuhm.xyz" },
      { label: "Website", href: "https://www.leeuhm.xyz/" },
    ],
    sections: [
      {
        bullets: [
          "Logistic regression model built on web-scraped League of Legends data",
        ],
      },
    ],
  },
  {
    id: 2,
    overlayIndex: 3,
    productId: "P000004",
    title: "Career",
    date: "May 2021 - present (5 years)",
    image: "/svg/crossaint.svg",
    subtitle:
      "A crossaint! I don't know, this is just the section item for my job.",
    sourceCode: "",
    role: "Principal Engineer (First Employee)",
    company: { name: "daash.co", href: "https://daash.co" },
    description:
      "5+ years building large-scale web data systems (1B+ signals/day, 60M+ requests/day). Founded and led data engineering and frontend teams, architecting end-to-end infrastructure from crawling to customer-facing product.",
    links: [
      { label: "Download Resume", href: "/pdf/resume.pdf", download: "resume.pdf" },
    ],
    sections: [
      {
        heading: "Web Crawling Infrastructure",
        bullets: [
          "Founded and led Data Acquisition team (5 engineers)",
          "Built distributed crawling system processing 1B+ web signals/day with 98% uptime over 4 years",
          "Wrote 50+ high-performance Scrapy crawlers (50k+ pages/min) with bot-evasion capabilities, including a broad-crawl system spanning 10k+ domains",
          "Architected serverless AWS infrastructure (Terraform, Docker, GitHub Actions CI/CD) with 1–3 minute deployments per crawler",
          "Designed custom ML pipeline (agglomerative clustering + KMeans) reducing scrape volume by 80%, cutting costs while preserving informational value",
          "Developed statistical sampling methodology saving up to 90% on scrape volume, strengthening crawler defensibility",
        ],
      },
      {
        heading: "Data Platform & Analytics",
        bullets: [
          "Founded and managed data engineering team (10 engineers)",
          "Architected bronze/silver/gold medallion ETL pipeline (Python, SQL, Athena/S3) in a GitHub monorepo, normalizing unstructured web data through precompute layers with full PyTest coverage",
          "Achieved 10–15 minute end-to-end pipeline loads with transparent, auditable data management (write-audit-publish framework)",
          "Built time-series models (Python pandas, operationalized in SQL) generating production sales estimates, validated against ground truth via MAE and Pearson correlation",
        ],
      },
      {
        heading: "Frontend & Product",
        bullets: [
          "Led frontend team (2 engineers)",
          "Independently architected and shipped production analytics dashboard in Next.js 15 app router design / React 19 (TypeScript, Tailwind, ShadCN, TanStack Query, Zustand) with DAL/DTO architecture (plus API routes), deployed on Vercel",
          "Implemented full CRUD (DynamoDB), federated data queries (Athena), and user auth (AWS Cognito), achieving sub-2s latency per user query",
        ],
      },
    ],
  },
  {
    id: 0,
    overlayIndex: 1,
    productId: "P000005",
    title: "liamscafé.com",
    image: "/svg/frasier.svg",
    subtitle:
      "Strawberry frasier built with React.js. If you like personal websites, you'll like this.",
    date: "Oct 01, 2024",
    links: [
      { label: "Source code", href: "https://github.com/yi-ye-zhi-qiu/liamscafe" },
    ],
    sections: [
      {
        bullets: [
          "Engineered mobile- and desktop-friendly portfolio website in React using Next.js framework",
          "Implemented Tailwind.css for responsive styling",
          "Crafted 3-D models in Blender integrated with react-three-fiber, a Three.js renderer, to foster user interactivity",
          "Designed a portfolio website that showcases professional skills, contributing to a compelling personal brand and online presence",
        ],
      },
    ],
  },
];
