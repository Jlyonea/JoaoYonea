import { useEffect, useMemo, useState } from 'react';
import AutoScroll from 'embla-carousel-auto-scroll';
import { Pause, Play } from 'lucide-react';
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
  const [active, setActive] = useState(0);
  return <div className="work-tabs">
    <div className="work-selector" role="tablist" aria-label="Selected projects">{projects.map((project, index) => <Button key={project.title} variant="ghost" role="tab" aria-selected={index === active} aria-controls={`work-panel-${index}`} id={`work-tab-${index}`} onClick={() => setActive(index)} className="work-step"><span>0{index + 1}</span><span>{project.tag.split(' · ')[1]}</span></Button>)}</div>
    {projects.map((project, index) => <div key={project.title} id={`work-panel-${index}`} role="tabpanel" aria-labelledby={`work-tab-${index}`} hidden={index !== active} className="work-panel">{renderProject(project, index)}</div>)}
  </div>;
}

export function SkillsCarousel() {
  const reduced = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const [api, setApi] = useState<CarouselApi>();
  const plugins = useMemo(() => [AutoScroll({ speed: 0.6, startDelay: 400, playOnInit: false, stopOnInteraction: false, stopOnMouseEnter: true, stopOnFocusIn: true })], []);
  useEffect(() => {
    const motion = api?.plugins().autoScroll;
    if (!motion) return;
    if (reduced || paused) motion.stop();
    else motion.play();
  }, [api, reduced, paused]);

  const resume = () => { if (!reduced && !paused) api?.plugins().autoScroll?.play(); };
  return <Carousel setApi={setApi} plugins={plugins} opts={{ align: 'start', loop: true, slidesToScroll: 1 }} aria-label="Skills carousel" className="stack-wrap" onMouseLeave={resume} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) resume(); }}>
    <div className="stack-top">
      <p className="stack-title"><strong>My stack.</strong> Tools I use to build and keep systems running.</p>
      <div className="carousel-controls">
        {!reduced && <Button variant="outline" size="icon" className="h-8 w-8 rounded-full" title={paused ? 'Play skills animation' : 'Pause skills animation'} aria-label={paused ? 'Play skills animation' : 'Pause skills animation'} onClick={() => setPaused(!paused)}>{paused ? <Play size={14} /> : <Pause size={14} />}</Button>}
        <CarouselPrevious title="Previous skill" aria-label="Previous skill" className="static translate-x-0 translate-y-0 h-8 w-8" />
        <CarouselNext title="Next skill" aria-label="Next skill" className="static translate-x-0 translate-y-0 h-8 w-8" />
      </div>
    </div>
    <CarouselContent className="-ml-2">{skills.map((skill) => <CarouselItem key={skill} className="basis-auto pl-2"><span className="stack-chip">{skill}</span></CarouselItem>)}</CarouselContent>
  </Carousel>;
}
