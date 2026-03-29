// src/data/services.data.ts

export type ExperienceItem = {
  id: string
  company: string
  role: string
  duration: string
  location?: string
  highlights: string[]
  details: string[]
  tech: string[]
  coverImage?: string
}

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    company: "Computing Aura LLC",
    role: "Data Analyst",
    duration: "Aug 2025 - Present",
    location: "Snohomish, WA - Remote",
    coverImage: "/illustrations/strip/Analyst.png",
    highlights: [
      "Automated SQL and Python reporting workflows to streamline recurring business reports and improve data delivery efficiency",
      "Performed customer behavior and enrollment analytics to identify trends and support data-driven decision making",
      "Designed executive KPI dashboards in Power BI and Tableau to track business performance and operational metrics  ",
    ],
    details: [
      "Performed advanced SQL analysis on operational datasets to uncover trends and generate actionable business insights",
      "Optimized key performance indicators (KPIs) through data exploration, validation, and metric standardization",
      "Collaborated with business stakeholders to analyze A/B test results and evaluate performance of product and marketing initiatives",
    ],
    tech: ["SQL", "Python", "Tableau", "Power BI", "Advanced Excel"],
  },
  {
    id: "exp-2",
    company: "Elevance Health",
    role: "Data Engineer",
    duration: "Jul 2024 - Dec 2024",
    location: "Arlington, VA",
    coverImage: "/illustrations/strip/---.png",
    highlights: [
      "Built HIPAA-compliant ETL pipelines on AWS Glue, Lambda and Airflow to process large-scale healthcare data",
      "Optimized Snowflake data warehouse using dbt, improving query performance and reducing cloud costs",
      "Developed scalable ingestion pipelines and reduced data latency for real-time analytics",
    ],
    details: [
      "Processed high-volume healthcare datasets (claims, EHR) with secure PHI/PII handling using SQL and Python",
      "Implemented data modeling, partitioning, clustering, and data quality checks for reliable reporting",
      "Migrated legacy Oracle systems to AWS S3 + Snowflake with event-driven ingestion using Lambda and CloudWatch",
    ],
    tech: ["SQL", "Python", "AWS", "Snowflake", "dbt", "Airflow"],
  },
  {
    id: "exp-3",
    company: "TechExtensor Pvt.Ltd.",
    role: "Data Analytics Engineer",
    duration: "Aug 2019 - July 2023",
    location: "Ahmedabad, India",
    coverImage: "/illustrations/strip/Engineer.png",
    highlights: [
      "Built scalable ELT pipelines on cloud data platforms to integrate multi-source business data into analytics-ready datasets",
      "Designed dimensional data models with fact and dimension tables to support KPI analytics and BI dashboards",
      "Optimized complex SQL transformations on large cloud datasets to improve query performance and support high-volume analytics",
    ],
    details: [
      "Developed cloud-based data ingestion pipelines to integrate data from APIs, databases, and operational systems into centralized analytical storage",
      "Implemented automated data validation and transformation workflows to ensure accuracy, consistency, and reliability of analytics datasets",
      "Developed KPI dashboards and analytical reports in Tableau and Power BI using structured data models from the cloud data warehouse",
    ],
    tech: ["SQL", "Python", "Cloud", "Data Warehousing", "Tableau", "Power BI"],
  },
  {
    id: "exp-4",
    company: "Drexel University",
    role: "Teaching Assistant",
    duration: "Jan 2024 - Jun 2024",
    location: "Philadelphia, PA",
    coverImage: "/illustrations/strip/TA.png",
    highlights: [
      "Conducted undergraduate physics lab sessions and demonstrated experimental procedures for core physics concepts",
      "Evaluated lab reports, assignments, and student performance to ensure understanding of experimental results",
      "Supported faculty in managing laboratory sessions and maintaining academic standards for coursework",
    ],
    details: [
      "Guided students through physics experiments, data collection, and interpretation of experimental results",
      "Provided constructive feedback to help students strengthen their understanding of fundamental physics concepts",
      "Assisted students in analyzing lab data and preparing structured lab reports based on experimental observations",
    ],
    tech: [],
  },
]
