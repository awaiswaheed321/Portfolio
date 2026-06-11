import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';
import { projects } from '@/lib/data';

/* Each project card is a series with its own hue, cycling the palette. */
const ROW_HUES = [
  { var: '--volt', text: 'text-volt' },
  { var: '--aqua', text: 'text-aqua' },
  { var: '--iris', text: 'text-iris' },
  { var: '--rose', text: 'text-rose' },
  { var: '--ok',   text: 'text-ok' },
];

export default function Projects() {
  return (
    <Section
      id="projects"
      index="04"
      title="Selected Work"
      description="Production systems and personal builds, from delivery-event pipelines to weekend full-stack projects."
      accentText="text-rose"
      accentBg="bg-rose"
      accentVar="--rose"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        {projects.map((project, i) => {
          const hue = ROW_HUES[i % ROW_HUES.length];
          const featured = i === 0;
          // Featured card takes a full row; if the remaining count is odd,
          // stretch the last card so no orphan sits alone in the grid
          const fullRow =
            featured ||
            (i === projects.length - 1 && (projects.length - 1) % 2 === 1);
          return (
            <Reveal
              key={project.name}
              delay={Math.min(i * 0.05, 0.15)}
              className={fullRow ? 'sm:col-span-2' : ''}
            >
              <article
                className={[
                  'group relative h-full rounded-[12px] border border-line-faint bg-surface',
                  'transition-[transform,border-color] duration-200 hover:-translate-y-0.5',
                  featured ? 'p-6 md:p-8' : 'p-6',
                ].join(' ')}
                style={{
                  borderTop: `2px solid color-mix(in srgb, var(${hue.var}) 70%, transparent)`,
                }}
              >
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <p aria-hidden className={`font-mono text-xs ${hue.text}`}>
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3
                    className={[
                      'font-display font-semibold tracking-tight text-ink',
                      featured ? 'text-xl md:text-2xl' : 'text-lg',
                    ].join(' ')}
                  >
                    {project.name}
                  </h3>
                  <p className={`font-mono text-[11px] uppercase tracking-[0.14em] ${hue.text}`}>
                    {project.context}
                  </p>
                </div>
                <p
                  className={[
                    'mt-3 text-[15px] leading-[1.75] text-fog',
                    featured ? 'max-w-[75ch]' : '',
                  ].join(' ')}
                >
                  {project.description}
                </p>
                <p className="mt-4 font-mono text-xs text-mist">
                  {project.stack.join(' · ')}
                </p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
