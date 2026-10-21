import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { ArrowDown, ArrowUpRight, Plus, Minus, Mail, Linkedin, Github, MapPin, Languages, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SkillsGroupRows, WorkSequence } from '@/components/portfolio-motion';
import { ProjectFlow } from '@/components/project-flow';
import { services, career, projects, profile } from '@/lib/portfolio';

const TITLE = 'João Yonea — Software Developer & Selected Work';
const DESC = 'Explore João Yonea’s work in AI-powered automation, RPA, e-commerce, full-stack development and APIs.';
export const Route = createFileRoute('/')({
  head: () => ({ meta: [{ title: TITLE }, { name: 'description', content: DESC }, { property: 'og:title', content: TITLE }, { property: 'og:description', content: DESC }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
  component: Index,
});

function Label({ n, children }: { n: string; children: React.ReactNode }) {
  return <p className="section-label"><span>{n}</span>{children}</p>;
}

function Project({ project, index }: { project: typeof projects[number]; index: number }) {
  const [open, setOpen] = useState(false);
  return <article className="project-entry">
    <div className="project-meta"><span className="project-number">0{index + 1}</span><span>{project.tag}</span></div>
    <div className="project-main">
      <div><h3>{project.title}</h3><p className="project-outcome">{project.outcome}</p>
        {project.contribution && <ul className="project-contribution">{project.contribution.map(item => <li key={item}><ArrowUpRight /><span>{item}</span></li>)}</ul>}
        {project.skills && <p className="project-tech">{project.skills.join(' / ')}</p>}
        <Button variant="link" className="project-toggle" aria-expanded={open} aria-controls={`project-details-${index}`} onClick={() => setOpen(!open)}>{open ? 'Hide business context' : 'Business context'}{open ? <Minus /> : <Plus />}</Button>
      </div>
      <ProjectFlow index={index} />
    </div>
    {open && <div id={`project-details-${index}`} className="project-details">
      <div><h4>Business context</h4><p>{project.context}</p></div>
    </div>}
  </article>;
}

function Index() {
  return <main className="font-sans">
    <header className="site-header"><a href="#top" className="wordmark">JY<span className="text-primary">.</span></a><nav aria-label="Main navigation"><a href="#projects">Work</a><a href="#skills">Skills</a><a href="#career">Experience</a><Button asChild variant="link" className="contact-nav"><a href="mailto:jlyonea@hotmail.com">Let’s talk <ArrowUpRight /></a></Button></nav></header>
    <section id="top" className="intro page-width">
      <div className="intro-kicker"><span className="status-dot" /> FULL-STACK SOFTWARE DEVELOPER · 5+ YEARS OF EXPERIENCE</div>
      <h1>João<br /><span className="text-primary">Yonea<span className="text-foreground">.</span></span></h1>
      <div className="intro-bottom"><div><p className="intro-title">Full-stack .NET developer.<br />I deliver end to end.</p><p className="intro-copy">Web applications, APIs, RPA robots, desktop and mobile software and AI workflows — from understanding the demand to production and maintenance.</p></div><div className="intro-actions"><Button asChild className="work-link"><a href={profile.cvUrl} download>Download CV <Download /></a></Button><div className="intro-links"><Button asChild variant="outline" size="icon" className="intro-icon" title="LinkedIn"><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a></Button><Button asChild variant="outline" size="icon" className="intro-icon" title="GitHub"><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a></Button><Button asChild variant="outline" size="icon" className="intro-icon" title="Send an email"><a href={`mailto:${profile.email}`} aria-label="Send an email"><Mail /></a></Button></div></div></div>
      <div className="intro-foot"><span className="intro-facts"><span><MapPin size={13} />{profile.location}</span><span><Languages size={13} />{profile.english}</span></span><span>SELECTED WORK BELOW <ArrowDown size={13} /></span></div>
    </section>
    <section id="capabilities" className="section-band"><div className="page-width"><Label n="01">What I handle independently</Label><div className="section-heading"><h2>From idea<br /><span className="text-muted-foreground">to operation.</span></h2><p>Tasks I own end to end,<br />each backed by real work below.</p></div><div className="capability-grid">{services.map(({ icon: Icon, title, tasks, tools, proof }) => <article key={title} className="capability-card"><Icon strokeWidth={1.5} /><h3>{title}</h3><ul>{tasks.map((task) => <li key={task}>{task}</li>)}</ul><p className="capability-tools">{tools.join(' · ')}</p><a href={proof.href} className="capability-proof">{proof.label} <ArrowUpRight size={14} /></a></article>)}</div></div></section>
    <section id="projects" className="projects-section section-band"><div className="page-width"><Label n="02">Selected work</Label><div className="section-heading"><h2>Built for real<br /><span className="text-muted-foreground">business challenges.</span></h2><p>AI-powered workflows, reliable automation<br />and better digital experiences.</p></div><WorkSequence renderProject={(project, index) => <Project project={project} index={index} />} /></div></section>
    <section id="career" className="section-band"><div className="page-width"><Label n="03">Experience</Label><h2 className="mb-14">Where I’ve built things.</h2><ol className="career-list">{career.map((entry, index) => <li key={entry.company}><div className="career-company"><span className="font-mono text-xs text-primary">0{index + 1}</span><h3>{entry.company}</h3><span className="career-period">{entry.period}</span></div><div className={`career-media career-media-${entry.imageKind}`}><img className="career-image" src={entry.image} alt={entry.imageAlt} loading="lazy" width={entry.imageKind === 'app' ? 648 : entry.company === 'ADP' ? 1600 : 1076} height={entry.imageKind === 'app' ? 1440 : entry.company === 'ADP' ? 1200 : 583} /></div><div className="career-description"><h4>{entry.role}</h4><p>{entry.text}</p><p className="career-skills">{entry.skills.join(' · ')}</p></div></li>)}</ol></div></section>
    <section id="skills" className="stack-band"><div className="page-width"><SkillsGroupRows /></div></section>
    <footer className="section-band"><div className="page-width"><Label n="04">Get in touch</Label><div className="footer-main"><h2>Let’s build<br /><span className="text-primary">something useful.</span></h2><Button asChild variant="outline" className="footer-arrow" title="Send an email"><a href="mailto:jlyonea@hotmail.com" aria-label="Send an email"><ArrowUpRight /></a></Button></div><div className="footer-bottom"><span>© {new Date().getFullYear()} João Yonea</span><div><a href="mailto:jlyonea@hotmail.com"><Mail size={16} />jlyonea@hotmail.com</a><a href="https://www.linkedin.com/in/joao-yonea" target="_blank" rel="noreferrer"><Linkedin size={16} />LinkedIn<ArrowUpRight size={14} /></a><a href={profile.github} target="_blank" rel="noreferrer"><Github size={16} />GitHub<ArrowUpRight size={14} /></a></div></div></div></footer>
  </main>;
}
