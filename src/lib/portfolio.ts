import { Bot, Plug, Layers, Database, Sparkles } from "lucide-react";

export const services = [
  { icon: Bot, title: "Browser Automation & RPA", text: "Develop and maintain browser-based automation using C# and Selenium. Automate repetitive workflows, troubleshoot existing robots, and improve the reliability of automated processes." },
  { icon: Plug, title: "APIs & Integrations", text: "Implement and support APIs, connect applications to external services, process data, and troubleshoot integration issues." },
  { icon: Layers, title: "Full-stack Web Development", text: "Develop new features, maintain existing functionality, implement business rules, investigate bugs, and work with frontend, backend, and database components." },
  { icon: Database, title: "SQL & Data", text: "Write and maintain SQL queries, investigate data inconsistencies, support database changes, and improve data processing workflows." },
  { icon: Sparkles, title: "AI-powered Workflows", text: "Develop software workflows that use AI to support information classification, task assignment, and reporting, based on business requirements." },
];

export const career = [
  { company: "Automate", role: "Full-stack Web and APIs Development", text: "I worked as a full-stack developer, handling all stages of ERP web system development — from front-end to back-end, implementation, maintenance, system optimization, and performing post-implementation testing.", skills: ["C#", "JavaScript", "jQuery", "HTML", "CSS", "SQL Server", "Azure DevOps", "Entity Framework"] },
  { company: "SmarterApp", role: "Software Engineering", text: "Worked on business-focused web applications such as e-commerces and CRMs, mobile applications, APIs and AI-based automation software.", skills: ["C#", "JavaScript", "HTML", "CSS", "SQL Server", "Azure DevOps", "Dapper", "VB.NET", ".NET MAUI", "PostgreSQL", "CI/CD", "Google Firebase"] },
  { company: "ADP", role: "RPA Development & Backend Automation", text: "Develop and maintain RPA solutions using C# and Selenium, investigate automation failures, support robots in production, and work with SQL Server as part of the development and maintenance process.", skills: ["C#", "JavaScript", "HTML", "Selenium", "Browser automation", "Entity Framework", "SQL Server"] },
];

export const projects = [
  {
    title: "AI-based robot for support ticket management automation",
    tag: "Business application · AI-based software",
    context: "A robot that gets all the e-mails from the team's support inbox, analyses them and creates tasks on the team's kanban — with the problem description, attachments and project context — and delegates each one to a developer based on their skills.",
    contribution: ["Discussed the code architecture from the beginning.", "Implemented the Azure AI integration in the robot.", "Implemented the back-end that relates important data to the database."],
    skills: ["C#", "SQL Server", "Azure DevOps", "Azure AI"],
    outcome: "Accelerates the company's workflow with automated task classification and delegation, without losing any support ticket.",
  },
  {
    title: "RPA to download and validate files for Mexico's customers",
    tag: "Business application · RPA development",
    context: "An automation robot that accesses Mexico's government website with data from customer lists, downloads files, validates them and sends them to each customer's folder — following a set of rules for every case the page can present, per customer configuration.",
    contribution: ["Developed the robot from scratch based on the structure of previously delivered ones.", "Kept continuous communication with the project's PMO.", "Guaranteed correct logging of all important data from the robot's requests in the database."],
    outcome: "Fast processing of thousands of formerly manual tasks with a success rate close to 100%, all logs displayed on a monitoring dashboard.",
  },
  {
    title: "New Era Brasil E-Commerce",
    tag: "Business application · E-commerce",
    context: "General maintenance of the web application: fixing front-end bugs and layout problems, building solutions for the surrounding APIs and implementing new features — including a dynamic categories menu that administrators configure from a back-office app, showing categories and sub-categories on hover.",
    outcome: "Better user experience, faster loading during navigation and new features for both the company and its customers.",
  },
];

export const skills = [...new Set([...career.flatMap((entry) => entry.skills), ...projects.flatMap((entry) => entry.skills ?? [])])];
