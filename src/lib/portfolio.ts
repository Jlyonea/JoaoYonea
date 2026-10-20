import { Bot, Plug, Layers, Database, Sparkles, MonitorSmartphone } from "lucide-react";
import automateImage from '@/assets/automate-team-clean.png';
import smarterappImage from '@/assets/smarterapp-application.png';
import adpImage from '@/assets/adp-team.jpeg';

export const services = [
  { icon: Bot, title: "Browser Automation & RPA", text: "Develop and maintain browser-based automation using C# and Selenium. Build robots that replace a high volume of manual human work, automate repetitive workflows, troubleshoot existing robots, and improve the reliability of automated processes — including integrations with external APIs such as Microsoft Graph API." },
  { icon: Plug, title: "APIs & Integrations", text: "Create new APIs and endpoints and keep existing ones running: connect applications to external services, open connections with databases, and handle data management — processing, validating and troubleshooting integration issues." },
  { icon: Layers, title: "Full-stack Web Development", text: "Develop new features, new screens and dynamic components, maintain existing functionality, implement business rules, and investigate bugs. Use JavaScript and AJAX to send data to the backend, working with both monolithic projects and microservices across frontend, backend, and database components." },
  { icon: MonitorSmartphone, title: "Desktop and Mobile Softwares", text: "Develop desktop and mobile software end to end, tailored to each client’s requirements — from understanding the demand and planning the solution to design, development, integrations, testing, deployment, and ongoing maintenance." },
  { icon: Database, title: "SQL & Data", text: "Write and maintain SQL queries, create data tables, investigate data inconsistencies, support database changes, and improve data processing workflows." },
  { icon: Sparkles, title: "AI-powered Workflows", text: "Develop software workflows that use AI to support information classification, task assignment, and reporting, based on business requirements." },
];

export const career = [
  { company: "Automate", image: automateImage, imageAlt: "Automate team gathering", imageKind: "photo", role: "Full-stack Web and APIs Development", text: "A startup focused on automating Microsoft product sales and developing an ERP with multi-store integration. I worked as a full-stack developer, handling all stages of ERP web system development — from front-end to back-end, implementation, maintenance, system optimization, and post-implementation testing.", skills: ["C#", "JavaScript", "jQuery", "HTML", "CSS", "SQL Server", "Azure DevOps", "Entity Framework"] },
  { company: "SmarterApp", image: smarterappImage, imageAlt: "Rapiduu mobile application sign-in screen from my work at SmarterApp", imageKind: "app", role: "Full-stack Software Engineering", text: "A hub for custom software tailored to each client's requirements. My experience went beyond web e-commerce and CRM applications: I developed AI-based software from scratch, built APIs, and created mobile applications designed entirely around each client's needs.", skills: ["C#", "JavaScript", "HTML", "CSS", "SQL Server", "Azure DevOps", "Dapper", "VB.NET", ".NET MAUI", "PostgreSQL", "CI/CD", "Google Firebase"] },
  { company: "ADP", image: adpImage, imageAlt: "ADP team group selfie outdoors", imageKind: "photo", role: "RPA Development & Backend Automation", text: "A multinational and global leader in payroll and human resources solutions. I had the opportunity to work with RPA (Robotic Process Automation), creating robots from scratch using C# and Selenium to replace manual work with efficiency and speed. I also maintained production robots, investigated automation failures, and worked with SQL Server throughout development and maintenance.", skills: ["C#", "JavaScript", "HTML", "Selenium", "Browser automation", "Entity Framework", "SQL Server"] },
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
    contribution: ["Maintained and improved existing screens.", "Created APIs to populate and manage data.", "Developed dynamic components for multi-store clients."],
    context: "General maintenance of the web application: fixing front-end bugs and layout problems, building solutions for the surrounding APIs and implementing new features — including a dynamic categories menu that administrators configure from a back-office app, showing categories and sub-categories on hover.",
    outcome: "Better user experience, faster loading during navigation and new features for both the company and its customers.",
  },
];

export const skills = [...new Set([...career.flatMap((entry) => entry.skills), ...projects.flatMap((entry) => entry.skills ?? [])])];
