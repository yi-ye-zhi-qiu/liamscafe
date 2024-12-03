import { BsCodeSquare, BsFileEarmarkText } from "react-icons/bs";


export const articleData = [
  /* {
    id: 1,
    overlayIndex: 2,
    productId: "P000003",
    title: "liam.gg",
    image: "/svg/eclair.svg",
    subtitle: "Chocolate éclair filled with data science pastry cream. Popular with League of Legends fans who want to improve their game.",
    date: "2021",
    preBulletData: [
      <a className="" href=""> <BsCodeSquare className="inline-block" /> Source code </a>,
      <a className="" href=""> <BsFileEarmarkText className="inline-block" /> Blog post </a>
    ],
    bullets: [],
  },
  */
  {
    id: 2,
    overlayIndex: 3,
    productId: "P000004",
    title: "Career",
    date: "May 2021 - present",
    image: "/svg/crossaint.svg",
    subtitle: "A crossaint! I don't know, this is just the section item for my job.",
    sourceCode: "",
    blogPost: "",
    preBulletData: [
      <p><b>Senior Data Scientist (First Employee):</b> daash.co</p>,
      <p>May 2021 - present</p>
    ],
    bullets: [
      'Founded and led “Data Acquisition” team as principal/lead engineer (3 engineers)',
      'Sole person responsible for 98% uptime over 4 years of ETL pipeline mining more than 1B+ web signals per day from APIs, 40 million requests per day',
      'Independently wrote 36 reliable (2-3 years of use) and fast (50,000+ pages/min) containerized web crawlers in Python Scrapy capable of bypassing bot detection and “broad crawls” (one crawler for 10,000+ domains)',
      'Architected serverless web crawler infrastructure on AWS in an IaC (modularized, remote state Terraform) dev/stage/prod SDLC environment on Github, 1-3 minute deployments per crawler',
      'Founded and co-led “Data Processing” team (7 engineers)',
      'Designed ETL framework in AWS Glue using Pyspark and SQL using Athena (S3 storage/data warehousing) to pre- and post-process data intelligently and quickly, compressing size by 95%+',
      'Wrote custom machine learning algorithm (iterative KMeans) to save 80%+ on scrape volume, reducing operational risk while maintaining informational value',
      'Wrote statistical sampling methodology to save up to 66% on scrape volume, ensuring crawler defensibility',
      'Wrote statistical and mathematical models (Python pandas, operationalized for scale in PySpark) to generate customer-facing sales and revenue projections, achieving accuracy of up to 60%',
      'Co-owned patent of proprietary analytical software for data quality'
    ],
  },
  {
    id: 0,
    overlayIndex: 1,
    productId: "P000005",
    title: "liamscafé.com",
    image: "/svg/frasier.svg",
    subtitle: "Strawberry frasier built with React.js. If you like personal websites, you'll like this.",
    date: "Oct 01, 2024",
    preBulletData: [
      <a className="" href="https://github.com/yi-ye-zhi-qiu/liamscafe"> <BsCodeSquare className="inline-block" /> Source code </a>,
    ],
    bullets: [
      "Engineered mobile- and desktop-friendly portfolio website in React.js library to provide a dynamic and seamless user interface",
      "Leveraged Next.js framework for server-side rendering and routing, resulting in optimized page load times and SEO",
      "Implemented Tailwind.css for efficient, responsive styling, ensuring a consistent aesthetic across devices",
      "Crafted 3-D, expressive elements in Blender and react-three-fiber, a Three.js renderer, to foster user interactivity",
      "Designed a portfolio website that showcases professional skills, contributing to a compelling personal brand and online presence",
    ],
  },
];
