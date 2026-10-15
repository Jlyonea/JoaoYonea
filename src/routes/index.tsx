import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Bot, Plug, Layers, Database, Sparkles, Mail, Linkedin } from "lucide-react";

const TITLE = "João Lucas Yonea — Software Developer";
const DESC =
  "Software Developer with 4+ years building web applications, APIs, backend services and automation solutions.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Bot, title: "Browser Automation & RPA", text: "Develop and maintain browser-based automation using C# and Selenium. Automate repetitive workflows, troubleshoot existing robots, and improve the reliability of automated processes." },
  { icon: Plug, title: "APIs & Integrations", text: "Implement and support APIs, connect applications to external services, process data, and troubleshoot integration issues." },
  { icon: Layers, title: "Full-stack Web Development", text: "Develop new features, maintain existing functionality, implement business rules, investigate bugs, and work with frontend, backend, and database components." },
  { icon: Database, title: "SQL & Data", text: "Write and maintain SQL queries, investigate data inconsistencies, support database changes, and improve data processing workflows." },
  { icon: Sparkles, title: "AI-powered Workflows", text: "Develop software workflows that use AI to support information classification, task assignment, and reporting, based on business requirements." },
];

const career = [
  { company: "Automate", role: "Full-stack Web and APIs Development", text: "I worked as a full-stack developer, handling all stages of ERP web system development — from front-end to back-end, implementation, maintenance, system optimization, and performing post-implementation testing.", skills: ["C#", "JavaScript", "jQuery", "HTML", "CSS", "SQL Server", "Azure DevOps", "Entity Framework"] },
  { company: "SmarterApp", role: "Software Engineering", text: "Worked on business-focused web applications such as e-commerces and CRMs, mobile applications, APIs and AI-based automation software.", skills: ["C#", "JavaScript", "HTML", "CSS", "SQL Server", "Azure DevOps", "Dapper", "VB.NET", ".NET MAUI", "PostgreSQL", "CI/CD", "Google Firebase"] },
  { company: "ADP", role: "RPA Development & Backend Automation", text: "Develop and maintain RPA solutions using C# and Selenium, investigate automation failures, support robots in production, and work with SQL Server as part of the development and maintenance process.", skills: ["C#", "JavaScript", "HTML", "Selenium", "Browser automation", "Entity Framework", "SQL Server"] },
];

const projects = [
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

function Label({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <p className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-primary">
      {n} — {children}
    </p>
  );
}

function Chips({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((s) => (
        <span key={s} className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground">{s}</span>
      ))}
    </div>
  );
}

function Index() {
  return (
    <main className="font-sans">
      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden px-6">
        <div className="grid-bg pointer-events-none absolute inset-0" />
        <div className="relative mx-auto w-full max-w-5xl">
          <p className="mb-8 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            João Lucas Yonea · Software Developer
          </p>
          <h1 className="font-display text-5xl leading-[1.02] text-foreground md:text-8xl">
            Turning business challenges into <em className="text-primary">practical</em> software solutions.
          </h1>
          <div className="mt-10 max-w-2xl space-y-4 text-lg font-light text-muted-foreground">
            <p>I'm a Software Developer with 4+ years of experience building web applications, backend services, APIs, and automation solutions.</p>
            <p>I help businesses streamline operations, automate repetitive tasks, integrate systems, and improve existing software through practical, maintainable solutions.</p>
          </div>
          <a href="#deliver" className="group mt-12 inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 font-medium text-primary-foreground transition-transform hover:scale-105">
            See what I can deliver
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1 animate-bounce" />
          </a>
        </div>
      </section>

      {/* Deliver */}
      <section id="deliver" className="border-t border-border px-6 py-28">
        <div className="mx-auto max-w-5xl">
          <Label n="01">What I can deliver</Label>
          <h2 className="mb-14 font-display text-4xl md:text-6xl">Solutions across the stack.</h2>
          <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2">
            {services.map(({ icon: Icon, title, text }) => (
              <div key={title} className="group bg-background p-8 transition-colors hover:bg-card">
                <Icon className="mb-5 h-6 w-6 text-primary" />
                <h3 className="mb-3 text-xl font-medium">{title}</h3>
                <p className="leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career */}
      <section className="border-t border-border px-6 py-28">
        <div className="mx-auto max-w-5xl">
          <Label n="02">Career roadmap</Label>
          <h2 className="mb-14 font-display text-4xl md:text-6xl">Where I've built things.</h2>
          <ol className="relative border-l border-border">
            {career.map((c) => (
              <li key={c.company} className="relative mb-14 pl-10 last:mb-0">
                <span className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-primary" />
                <h3 className="font-display text-4xl">{c.company}</h3>
                <p className="mb-4 font-mono text-sm text-primary">{c.role}</p>
                <p className="mb-5 max-w-3xl leading-relaxed text-muted-foreground">{c.text}</p>
                <Chips items={c.skills} />
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Projects */}
      <section className="border-t border-border px-6 py-28">
        <div className="mx-auto max-w-5xl">
          <Label n="03">Project highlights</Label>
          <h2 className="mb-14 font-display text-4xl md:text-6xl">Selected work.</h2>
          <div className="space-y-8">
            {projects.map((p, i) => (
              <article key={p.title} className="rounded-2xl border border-border bg-card p-8 md:p-12">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Project highlight 0{i + 1}</p>
                <h3 className="mt-3 font-display text-3xl md:text-4xl">{p.title}</h3>
                <p className="mt-2 font-mono text-sm text-primary">{p.tag}</p>
                <div className="mt-8 grid gap-8 md:grid-cols-2">
                  <div>
                    <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider">Business context</h4>
                    <p className="leading-relaxed text-muted-foreground">{p.context}</p>
                  </div>
                  {p.contribution && (
                    <div>
                      <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider">My contribution</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        {p.contribution.map((c) => (
                          <li key={c} className="flex gap-2"><span className="text-primary">→</span>{c}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                {p.skills && <div className="mt-8"><Chips items={p.skills} /></div>}
                <div className="mt-8 border-t border-border pt-6">
                  <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">What this enables me to deliver</h4>
                  <p className="text-lg">{p.outcome}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-16">
        <div className="mx-auto flex max-w-5xl flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="font-display text-4xl">Let's work together.</p>
            <p className="mt-2 text-sm text-muted-foreground">© {new Date().getFullYear()} João Lucas Yonea</p>
          </div>
          <div className="flex flex-col gap-3">
            <a href="mailto:jlyonea@hotmail.com" className="inline-flex items-center gap-2 hover:text-primary"><Mail className="h-4 w-4" />jlyonea@hotmail.com</a>
            <a href="https://www.linkedin.com/in/joao-yonea" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-primary"><Linkedin className="h-4 w-4" />linkedin.com/in/joao-yonea<ArrowUpRight className="h-3 w-3" /></a>
          </div>
        </div>
      </footer>
    </main>
  );
}
