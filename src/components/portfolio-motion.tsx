import { useEffect, useMemo, useRef, useState } from 'react';
import AutoScroll from 'embla-carousel-auto-scroll';
import { Code2, Pause, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';
import { projects, skills } from '@/lib/portfolio';

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);
  return reduced;
}

export function WorkSequence({ renderProject }: { renderProject: (project: typeof projects[number], index: number) => React.ReactNode }) {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      if (!track.current) return;
      const top = parseFloat(getComputedStyle(track.current).getPropertyValue('--work-top'));
      const distance = parseFloat(getComputedStyle(track.current).paddingBottom);
      const progress = Math.max(0, Math.min(1, (top - track.current.getBoundingClientRect().top) / distance));
      setActive(Math.min(projects.length - 1, Math.floor(progress * projects.length)));
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      cancelAnimationFrame(frame);
    };
  }, [reduced]);

  const selectProject = (index: number) => {
    if (!track.current) return;
    const style = getComputedStyle(track.current);
    const top = parseFloat(style.getPropertyValue('--work-top'));
    const distance = parseFloat(style.paddingBottom);
    setActive(index);
    window.scrollTo({ top: window.scrollY + track.current.getBoundingClientRect().top - top + distance * (index / projects.length + 0.04), behavior: 'smooth' });
  };

  return <div ref={track} className={`work-track${reduced ? ' work-reduced' : ''}`}>
    <div className="work-stage">
      {!reduced && <div className="work-selector" role="tablist" aria-label="Selected projects">{projects.map((project, index) => <Button key={project.title} variant="ghost" role="tab" aria-selected={index === active} aria-controls={`work-panel-${index}`} id={`work-tab-${index}`} onClick={() => selectProject(index)} className="work-step"><span>0{index + 1}</span><span>{project.tag.split(' · ')[1]}</span></Button>)}</div>}
      {projects.map((project, index) => <div key={project.title} id={`work-panel-${index}`} role={reduced ? undefined : 'tabpanel'} aria-labelledby={reduced ? undefined : `work-tab-${index}`} hidden={!reduced && index !== active} className="work-panel">{renderProject(project, index)}</div>)}
    </div>
  </div>;
}

export function SkillsCarousel() {
  const reduced = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const [api, setApi] = useState<CarouselApi>();
  const plugins = useMemo(() => [AutoScroll({ speed: 0.8, startDelay: 600, playOnInit: false, stopOnInteraction: false, stopOnMouseEnter: true, stopOnFocusIn: true })], []);
  useEffect(() => {
    const motion = api?.plugins().autoScroll;
    if (!motion) return;
    if (reduced || paused) motion.stop();
    else motion.play();
  }, [api, reduced, paused]);

  return <Carousel setApi={setApi} plugins={plugins} opts={{ align: 'start', loop: true, slidesToScroll: 1 }} aria-label="Skills carousel">
    <div className="skills-heading"><h2>My stack.</h2><div className="carousel-controls">
      {!reduced && <Button variant="outline" size="icon" className="h-11 w-11 rounded-full" title={paused ? 'Play skills animation' : 'Pause skills animation'} aria-label={paused ? 'Play skills animation' : 'Pause skills animation'} onClick={() => setPaused(!paused)}>{paused ? <Play /> : <Pause />}</Button>}
      <CarouselPrevious title="Previous skill" aria-label="Previous skill" className="static translate-x-0 translate-y-0 h-11 w-11" /><CarouselNext title="Next skill" aria-label="Next skill" className="static translate-x-0 translate-y-0 h-11 w-11" />
    </div></div>
    <CarouselContent>{skills.map((skill, index) => <CarouselItem key={skill} className="basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"><div className="skill-item"><span className="skill-index">{String(index + 1).padStart(2, '0')} / {String(skills.length).padStart(2, '0')}</span><Code2 strokeWidth={1} /><h3>{skill}</h3></div></CarouselItem>)}</CarouselContent>
  </Carousel>;
}