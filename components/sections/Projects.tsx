import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import { projects } from '@/lib/data';

/**
 * An editorial index, not a card grid — every entry is real shipped
 * work, so the index number and context tag do the visual lifting.
 */
export default function Projects() {
  return (
    <section id="projects" aria-label="Projects" className="py-16 md:py-24 scroll-mt-8">
      <SectionHeading
        index="04"
        title="Selected Work"
        description="Production systems and personal builds — from a 1M+ msg/day delivery pipeline to weekend full-stack projects."
      />
      <div className="flex flex-col">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={Math.min(i * 0.05, 0.15)}>
            <article className="grid md:grid-cols-[3.5rem_minmax(0,1fr)] gap-x-6
                                border-t border-line-faint py-8 last:border-b">
              <p aria-hidden className="hidden md:block font-mono text-sm text-mist pt-1">
                {String(i + 1).padStart(2, '0')}
              </p>
              <div>
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
                    {project.name}
                  </h3>
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-volt">
                    {project.context}
                  </p>
                </div>
                <p className="mt-2.5 text-[15px] leading-[1.75] text-fog max-w-[70ch]">
                  {project.description}
                </p>
                <p className="mt-3.5 font-mono text-xs text-mist">
                  {project.stack.join(' · ')}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
