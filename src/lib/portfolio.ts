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
  { icon: MonitorSmartphone, title: "Desktop & Mobile Software", tasks: ["Understand the demand and plan the solution", "Design, develop and integrate", "Test, deploy and maintain"], tools: ["C#", "React", ".NET MAUI", "VB.NET", "Google Firebase"], proof: { label: "Experience · SmarterApp", href: "#career" } },
  { icon: Database, title: "SQL & Data", tasks: ["Write and maintain SQL queries", "Create tables and support database changes", "Investigate data inconsistencies", "Improve data processing workflows"], tools: ["SQL Server", "PostgreSQL"], proof: { label: "Project 02 · RPA for Mexico", href: "#projects" } },
  { icon: Sparkles, title: "AI-powered Workflows", tasks: ["Classify information with AI", "Automate task assignment", "Support reporting based on business rules"], tools: ["Azure AI", "C#"], proof: { label: "Project 01 · AI support robot", href: "#projects" } },
];

export const career = [
  { company: "Automate", period: "Apr 2022 — Aug 2024", image: automateImage, imageAlt: "Automate team gathering", imageKind: "photo", role: "Full-stack Web and APIs Development", text: "A startup focused on automating Microsoft product sales and developing an ERP with multi-store integration. I worked as a full-stack developer, handling all stages of ERP web system development — from front-end to back-end, implementation, maintenance, system optimization, and post-implementation testing.", skills: ["C#", "JavaScript", "jQuery", "HTML", "CSS", "SQL Server", "Azure DevOps", "Entity Framework"] },
  { company: "SmarterApp", period: "Oct 2024 — Feb 2026", image: smarterappImage, imageAlt: "Rapiduu mobile application sign-in screen from my work at SmarterApp", imageKind: "app", role: "Full-stack Software Engineering", text: "A hub for custom software tailored to each client's requirements. My experience went beyond web e-commerce and CRM applications: I developed AI-based software from scratch, built APIs, and created mobile applications designed entirely around each client's needs.", skills: ["C#", "JavaScript", "HTML", "CSS", "SQL Server", "Azure DevOps", "Dapper", "VB.NET", ".NET MAUI", "PostgreSQL", "CI/CD", "Google Firebase"] },
  { company: "ADP", period: "Dec 2025 — Present", image: adpImage, imageAlt: "ADP team group selfie outdoors", imageKind: "photo", role: "RPA Development & Backend Automation", text: "A multinational and global leader in payroll and human resources solutions. I had the opportunity to work with RPA (Robotic Process Automation), creating robots from scratch using C# and Selenium to replace manual work with efficiency and speed. I also maintained production robots, investigated automation failures, and worked with SQL Server throughout development and maintenance.", skills: ["C#", "JavaScript", "HTML", "Selenium", "Browser automation", "Entity Framework", "SQL Server", "Claude", "Copilot"] },
];

export const projects = [
  {
    title: "AI-based robot for support ticket management automation",
    tag: "Business application · AI-based software",
    context: "A robot that gets all the e-mails from the team's support inbox, analyses them and creates tasks on the team's kanban — with the problem description, attachments and project context — and delegates each one to a developer based on their skills.",
    contribution: ["Designed the code architecture with the team.", "Implemented the Azure AI integration in the robot.", "Implemented the back-end that relates important data to the database."],
    skills: ["C#", "SQL Server", "Azure DevOps", "Azure AI"],
    outcome: "Accelerates the company's workflow with automated task classification and delegation, without losing any support ticket.",
  },
  {
    title: "RPA to download and validate files for Mexico's customers",
    tag: "Business application · RPA development",
    context: "An automation robot that accesses Mexico's government website with data from customer lists, downloads files, validates them and sends them to each customer's folder — following a set of rules for every case the page can present, per customer configuration.",
    contribution: ["Developed the robot from scratch based on the structure of previously delivered ones.", "Kept continuous communication with the project's PMO.", "Guaranteed correct logging of all important data from the robot's requests in the database."],
    skills: ["C#", "Selenium", "SQL Server", "Entity Framework"],
    outcome: "Fast processing of thousands of formerly manual tasks with a success rate close to 100%, all logs displayed on a monitoring dashboard.",
  },
  {
    title: "New Era Brasil E-Commerce",
    tag: "Business application · E-commerce",
    contribution: ["Maintained and improved existing screens.", "Created APIs to populate and manage data.", "Developed dynamic components for multi-store clients."],
    skills: ["C#", "JavaScript", "HTML", "CSS", "SQL Server", "Dapper"],
    context: "General maintenance of the web application: fixing front-end bugs and layout problems, building solutions for the surrounding APIs and implementing new features — including a dynamic categories menu that administrators configure from a back-office app, showing categories and sub-categories on hover.",
    outcome: "Better user experience, faster loading during navigation and new features for both the company and its customers.",
  },
];

const extraSkills = ["APIs", "React", "Azure Database"];

export const skills = [...new Set([...career.flatMap((entry) => entry.skills), ...projects.flatMap((entry) => entry.skills ?? []), ...extraSkills])];

const skillGroupDefinitions = [
  { name: "Backend", tools: ["C#", "VB.NET", "Entity Framework", "Dapper", "APIs"] },
  { name: "Frontend", tools: ["JavaScript", "jQuery", "HTML", "CSS", "React"] },
  { name: "Data", tools: ["SQL Server", "PostgreSQL", "Azure Database"] },
  { name: "Automation", tools: ["Selenium", "Browser automation"] },
  { name: "Mobile", tools: [".NET MAUI", "Google Firebase"] },
  { name: "Cloud & DevOps", tools: ["Azure DevOps", "CI/CD"] },
  { name: "AI", tools: ["Azure AI", "Claude", "Copilot"] },
];

const groupedTools = skillGroupDefinitions.flatMap((group) => group.tools);

export const skillGroups = [
  ...skillGroupDefinitions.map((group) => ({ name: group.name, items: skills.filter((skill) => group.tools.includes(skill)) })),
  { name: "Other", items: skills.filter((skill) => !groupedTools.includes(skill)) },
].filter((group) => group.items.length > 0);
