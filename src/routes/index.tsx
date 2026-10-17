import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { ArrowDown, ArrowUpRight, ArrowRight, Plus, Minus, Mail, Linkedin, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ProjectFlow } from '@/components/project-flow';
import { services, career, projects, skills } from '@/lib/portfolio';

const TITLE = 'João Lucas Yonea — Software Developer & Selected Work';
const DESC = 'Explore João Lucas Yonea’s work in AI-powered automation, RPA, e-commerce, full-stack development and APIs.';
export const Route = createFileRoute('/')({
  head: () => ({ meta: [{ title: TITLE }, { name: 'description', content: DESC }, { property: 'og:title', content: TITLE }, { property: 'og:description', content: DESC }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
  component: Index,
});

function Label({ n, children }: { n: string; children: React.ReactNode }) {
  return <p className="section-label"><span>{n}</span>{children}</p>;
}

function Project({ project, index }: { project: typeof projects[number]; index: number }) {
  const [open, setOpen] = useState(index === 0);
  return <article className="project-entry">
    <div className="project-meta"><span className="project-number">0{index + 1}</span><span>{project.tag}</span></div>
    <div className="project-main">
      <div><h3>{project.title}</h3><p className="project-outcome">{project.outcome}</p>
        <Button variant="link" className="project-toggle" aria-expanded={open} aria-controls={`project-details-${index}`} onClick={() => setOpen(!open)}>{open ? 'Close project details' : 'Explore project'}{open ? <Minus /> : <Plus />}</Button>
      </div>
      <ProjectFlow index={index} />
    </div>
    {open && <div id={`project-details-${index}`} className="project-details">
      <div><h4>Business context</h4><p>{project.context}</p></div>
      {project.contribution && <div><h4>My contribution</h4><ul>{project.contribution.map(item => <li key={item}><ArrowUpRight /><span>{item}</span></li>)}</ul></div>}
      {project.skills && <p className="project-tech">{project.skills.join(' / ')}</p>}
    </div>}
  </article>;
}

function Index() {
  return <main className="font-sans">
    <header className="site-header page-width"><a href="#top" className="wordmark">JY<span className="text-primary">.</span></a><nav aria-label="Main navigation"><a href="#projects">Work</a><a href="#skills">Skills</a><a href="#career">Experience</a><Button asChild variant="link" className="contact-nav"><a href="mailto:jlyonea@hotmail.com">Let’s talk <ArrowUpRight /></a></Button></nav></header>
    <section id="top" className="intro page-width">
      <div className="intro-kicker"><span className="status-dot" /> SOFTWARE DEVELOPER · 4+ YEARS OF EXPERIENCE</div>
      <h1>João Lucas<br /><span className="text-primary">Yonea<span className="text-foreground">.</span></span></h1>
      <div className="intro-bottom"><div><p className="intro-title">Business challenges.<br />Practical software solutions.</p><p className="intro-copy">I build web applications, APIs and automation that connect systems and keep businesses moving.</p></div><Button asChild variant="outline" className="work-link"><a href="#projects">Explore my work <ArrowDown /></a></Button></div>
      <div className="intro-foot"><span>FULL-STACK / RPA / AI AUTOMATION</span><span>SELECTED WORK BELOW <ArrowDown size={13} /></span></div>
    </section>
    <section id="projects" className="projects-section section-band"><div className="page-width"><Label n="01">Selected work</Label><div className="section-heading"><h2>Built for real<br /><span className="text-muted-foreground">business challenges.</span></h2><p>AI-powered workflows, reliable automation<br />and better digital experiences.</p></div>{projects.map((project, index) => <Project key={project.title} project={project} index={index} />)}</div></section>
    <section id="skills" className="skills-section section-band"><div className="page-width"><Label n="02">Tools & technologies</Label><Carousel opts={{ align: 'start', loop: true, slidesToScroll: 1 }} aria-label="Skills carousel"><div className="skills-heading"><h2>My stack.</h2><div className="carousel-controls"><CarouselPrevious title="Previous skill" aria-label="Previous skill" className="static translate-x-0 translate-y-0 h-11 w-11" /><CarouselNext title="Next skill" aria-label="Next skill" className="static translate-x-0 translate-y-0 h-11 w-11" /></div></div><CarouselContent>{skills.map((skill, index) => <CarouselItem key={skill} className="basis-1/2 md:basis-1/4"><div className="skill-item"><span className="skill-index">{String(index + 1).padStart(2, '0')} / {String(skills.length).padStart(2, '0')}</span><Code2 strokeWidth={1} /><h3>{skill}</h3></div></CarouselItem>)}</CarouselContent></Carousel></div></section>
    <section id="deliver" className="section-band"><div className="page-width"><Label n="03">What I can deliver</Label><h2 className="mb-12">From idea to operation.</h2><div className="service-list">{services.map(({icon: Icon, title, text}) => <details key={title}><summary><Icon strokeWidth={1.5} /><h3>{title}</h3><Plus className="service-plus" /></summary><p>{text}</p></details>)}</div></div></section>
    <section id="career" className="section-band"><div className="page-width"><Label n="04">Experience</Label><h2 className="mb-14">Where I’ve built things.</h2><ol className="career-list">{career.map((entry, index) => <li key={entry.company}><div className="career-company"><span className="font-mono text-xs text-primary">0{index + 1}</span><h3>{entry.company}</h3></div><div><h4>{entry.role}</h4><p>{entry.text}</p><p className="career-skills">{entry.skills.join(' · ')}</p></div></li>)}</ol></div></section>
    <footer className="section-band"><div className="page-width"><Label n="05">Get in touch</Label><div className="footer-main"><h2>Let’s build<br /><span className="text-primary">something useful.</span></h2><Button asChild variant="outline" className="footer-arrow" title="Send an email"><a href="mailto:jlyonea@hotmail.com" aria-label="Send an email"><ArrowUpRight /></a></Button></div><div className="footer-bottom"><span>© {new Date().getFullYear()} João Lucas Yonea</span><div><a href="mailto:jlyonea@hotmail.com"><Mail size={16} />jlyonea@hotmail.com</a><a href="https://www.linkedin.com/in/joao-yonea" target="_blank" rel="noreferrer"><Linkedin size={16} />LinkedIn<ArrowUpRight size={14} /></a></div></div></div></footer>
  </main>;
}
