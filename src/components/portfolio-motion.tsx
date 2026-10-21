import { useEffect, useMemo, useState } from 'react';
import AutoScroll from 'embla-carousel-auto-scroll';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';
import { projects, skillGroups } from '@/lib/portfolio';

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

function SkillsRow({ name, items, reverse }: { name: string; items: string[]; reverse: boolean }) {
  const reduced = useReducedMotion();
  const [api, setApi] = useState<CarouselApi>();
  const [overflowing, setOverflowing] = useState(false);
  const plugins = useMemo(() => [AutoScroll({ speed: 0.5, direction: reverse ? 'backward' : 'forward', startDelay: 400, playOnInit: false, stopOnInteraction: false, stopOnMouseEnter: true, stopOnFocusIn: true })], [reverse]);
  useEffect(() => {
    if (!api) return;
    const update = () => setOverflowing(api.scrollSnapList().length > 1);
    update();
    api.on('reInit', update);
    return () => { api.off('reInit', update); };
  }, [api]);
  useEffect(() => {
    const motion = api?.plugins().autoScroll;
    if (!motion) return;
    if (reduced || !overflowing) motion.stop();
    else motion.play();
  }, [api, reduced, overflowing]);

  const resume = () => { if (!reduced && overflowing) api?.plugins().autoScroll?.play(); };
  return <div className="stack-row">
    <span className="stack-row-label">{name}</span>
    <Carousel setApi={setApi} plugins={plugins} opts={{ align: 'start', loop: true }} aria-label={`${name} skills`} className="stack-row-track" onMouseLeave={resume} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) resume(); }}>
      <CarouselContent className="-ml-2">{items.map((skill) => <CarouselItem key={skill} className="basis-auto pl-2"><span className="stack-chip">{skill}</span></CarouselItem>)}</CarouselContent>
    </Carousel>
  </div>;
}

export function SkillsGroupRows() {
  return <div className="stack-rows">
    <p className="stack-title"><strong>My stack.</strong> Tools I use to build and keep systems running.</p>
    {skillGroups.map((group, index) => <SkillsRow key={group.name} name={group.name} items={group.items} reverse={index % 2 === 1} />)}
  </div>;
}
