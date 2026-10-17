import { useEffect } from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { SkillsCarousel, WorkSequence } from '@/components/portfolio-motion';

const { play, stop, api } = vi.hoisted(() => {
  const play = vi.fn();
  const stop = vi.fn();
  return { play, stop, api: { plugins: () => ({ autoScroll: { play, stop } }) } };
});
vi.mock('embla-carousel-auto-scroll', () => ({ default: () => ({}) }));
vi.mock('@/components/ui/carousel', () => ({
  Carousel: ({ setApi, children, plugins: _plugins, opts: _opts, ...props }: any) => {
    useEffect(() => { setApi(api); }, [setApi]);
    return <div {...props}>{children}</div>;
  },
  CarouselContent: ({ children }: any) => <div>{children}</div>,
  CarouselItem: ({ children }: any) => <div>{children}</div>,
  CarouselNext: () => <button aria-label="Next skill" />,
  CarouselPrevious: () => <button aria-label="Previous skill" />,
}));

beforeEach(() => {
  vi.clearAllMocks();
  vi.stubGlobal('matchMedia', vi.fn(() => ({ matches: false, addEventListener: vi.fn(), removeEventListener: vi.fn() })));
});
afterEach(() => { cleanup(); vi.unstubAllGlobals(); });

describe('Portfolio motion', () => {
  it('starts skills automatically and keeps explicit pause after focus or pointer leaves', () => {
    render(<SkillsCarousel />);
    expect(play).toHaveBeenCalled();
    fireEvent.click(screen.getByRole('button', { name: 'Pause skills animation' }));
    expect(stop).toHaveBeenCalled();
    play.mockClear();
    const carousel = screen.getByLabelText('Skills carousel');
    fireEvent.mouseLeave(carousel);
    fireEvent.blur(carousel, { relatedTarget: document.body });
    expect(play).not.toHaveBeenCalled();
    fireEvent.click(screen.getByRole('button', { name: 'Play skills animation' }));
    expect(play).toHaveBeenCalled();
  });

  it('does not autoplay skills when reduced motion is requested', () => {
    vi.stubGlobal('matchMedia', vi.fn(() => ({ matches: true, addEventListener: vi.fn(), removeEventListener: vi.fn() })));
    render(<SkillsCarousel />);
    expect(stop).toHaveBeenCalled();
    expect(play).not.toHaveBeenCalled();
  });

  it('shows one project at a time while keeping all three reachable', () => {
    render(<WorkSequence renderProject={(_project, index) => <div data-testid={`project-${index}`} />} />);
    expect(screen.getAllByRole('tabpanel')).toHaveLength(1);
    expect(screen.getByTestId('project-0')).toBeVisible();
    expect(screen.getByTestId('project-1')).not.toBeVisible();
    expect(screen.getByTestId('project-2')).not.toBeVisible();
    expect(screen.getAllByRole('tab')).toHaveLength(3);
  });
});