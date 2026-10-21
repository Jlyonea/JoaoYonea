import { Bot, Plug, Layers, Database, Sparkles, MonitorSmartphone } from "lucide-react";
import automateImage from '@/assets/automate-team-clean.png';
import smarterappImage from '@/assets/smarterapp-application.png';
import adpImage from '@/assets/adp-team.jpeg';

export const profile = {
  location: "São Paulo, Brazil",
  english: "Advanced English",
  email: "jlyonea@hotmail.com",
  linkedin: "https://www.linkedin.com/in/joao-yonea",
  github: "https://github.com/jlyonea",
  cvUrl: "joao-yonea-cv.pdf",
};

export const services = [
  { icon: Bot, title: "Browser Automation & RPA", tasks: ["Build robots from scratch with C# and Selenium", "Replace high-volume manual and repetitive work", "Troubleshoot and stabilize production robots", "Integrate external APIs such as Microsoft Graph"], tools: ["C#", "Selenium", "SQL Server"], proof: { label: "Project 02 · RPA for Mexico", href: "#projects" } },
  { icon: Plug, title: "APIs & Integrations", tasks: ["Create new APIs and endpoints", "Keep existing integrations running", "Connect applications to external services and databases", "Process, validate and troubleshoot data"], tools: ["C#", ".NET", "Dapper", "Entity Framework"], proof: { label: "Project 03 · New Era E-commerce", href: "#projects" } },
  { icon: Layers, title: "Full-stack Web Development", tasks: ["Build new features, screens and dynamic components", "Implement business rules", "Investigate bugs across front-end, back-end and database", "Work with monoliths and microservices"], tools: ["C#", "JavaScript", "jQuery", "HTML", "CSS"], proof: { label: "Experience · Automate ERP", href: "#career" } },
  { icon: MonitorSmartphone, title: "Desktop & Mobile Software", tasks: ["Understand the demand and plan the solution", "Design, develop and integrate", "Test, deploy and maintain"], tools: [".NET MAUI", "VB.NET", "Google Firebase"], proof: { label: "Experience · SmarterApp", href: "#career" } },
  { icon: Database, title: "SQL & Data", tasks: ["Write and maintain SQL queries", "Create tables and support database changes", "Investigate data inconsistencies", "Improve data processing workflows"], tools: ["SQL Server", "PostgreSQL"], proof: { label: "Project 02 · RPA for Mexico", href: "#projects" } },
  { icon: Sparkles, title: "AI-powered Workflows", tasks: ["Classify information with AI", "Automate task assignment", "Support reporting based on business rules"], tools: ["Azure AI", "C#"], proof: { label: "Project 01 · AI support robot", href: "#projects" } },
];

export const career = [
  { company: "Automate", period: "Apr 2022 — Aug 2024", image: automateImage,
  { company: "SmarterApp", period: "Oct 2024 — Feb 2026", image: smarterappImage,
  { company: "ADP", period: "Dec 2025 — Present", image: adpImage,
];

export const projects = [
  {
    title: "AI-based robot for support ticket management automation",
    tag: "Business application · AI-based software",
    context: "A robot that gets all the e-mails from the team's support inbox, analyses them and creates tasks on the team's kanban — with the problem description, attachments and project context — and delegates each one to a developer based on their skills.",
    ["Designed the code architecture with the team.",
    skills: ["C#", "SQL Server", "Azure DevOps", "Azure AI"],
    outcome: "Accelerates the company's workflow with automated task classification and delegation, without losing any support ticket.",
  },
  {
    title: "RPA to download and validate files for Mexico's customers",
    tag: "Business application · RPA development",
    context: "An automation robot that accesses Mexico's government website with data from customer lists, downloads files, validates them and sends them to each customer's folder — following a set of rules for every case the page can present, per customer configuration.",
    "Guaranteed correct logging of all important data from the robot's requests in the database."],
    skills: ["C#", "Selenium", "SQL Server", "Entity Framework"],
    outcome: "Fast processing of thousands of formerly manual tasks with a success rate close to 100%, all logs displayed on a monitoring dashboard.",
  },
  {
    title: "New Era Brasil E-Commerce",
    tag: "Business application · E-commerce",
    "Developed dynamic components for multi-store clients."],
    skills: ["C#", "JavaScript", "HTML", "CSS", "SQL Server", "Dapper"],
    context: "General maintenance of the web application: fixing front-end bugs and layout problems, building solutions for the surrounding APIs and implementing new features — including a dynamic categories menu that administrators configure from a back-office app, showing categories and sub-categories on hover.",
    outcome: "Better user experience, faster loading during navigation and new features for both the company and its customers.",
  },
];

export const skills = [...new Set([...career.flatMap((entry) => entry.skills), ...projects.flatMap((entry) => entry.skills ?? [])])];

const skillGroupDefinitions = [
  { name: "Backend", tools: ["C#", "VB.NET", "Entity Framework", "Dapper"] },
  { name: "Frontend", tools: ["JavaScript", "jQuery", "HTML", "CSS"] },
  { name: "Data", tools: ["SQL Server", "PostgreSQL"] },
  { name: "Automation", tools: ["Selenium", "Browser automation"] },
  { name: "Mobile", tools: [".NET MAUI", "Google Firebase"] },
  { name: "Cloud & DevOps", tools: ["Azure DevOps", "CI/CD"] },
  { name: "AI", tools: ["Azure AI"] },
];

const groupedTools = skillGroupDefinitions.flatMap((group) => group.tools);

export const skillGroups = [
  ...skillGroupDefinitions.map((group) => ({ name: group.name, items: skills.filter((skill) => group.tools.includes(skill)) })),
  { name: "Other", items: skills.filter((skill) => !groupedTools.includes(skill)) },
].filter((group) => group.items.length > 0);
