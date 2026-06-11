import Reveal from './Reveal';

/**
 * Section shell: on desktop the heading lives in a sticky left rail
 * (with a ghost numeral in the section's hue) while content scrolls
 * on the right. Collapses to a normal stacked heading on mobile.
 * Pass static Tailwind classes for the accent (JIT needs literals).
 */
export default function Section({
  id,
  index,
  title,
  description,
  accentText = 'text-volt',
  accentBg = 'bg-volt',
  accentVar = '--volt',
  children,
}: {
  id: string;
  index: string;
  title: string;
  description?: string;
  accentText?: string;
  accentBg?: string;
  accentVar?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-label={title} className="py-14 md:py-20 scroll-mt-8">
      <div className="lg:grid lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-14">
        <Reveal className="relative mb-10 lg:mb-0">
          <div className="lg:sticky lg:top-28">
            <span
              aria-hidden
              className="pointer-events-none select-none absolute -top-7 -left-1 lg:-top-9
                         font-display font-semibold leading-none
                         text-[clamp(4.5rem,8vw,6.5rem)]"
              style={{ color: `color-mix(in srgb, var(${accentVar}) 13%, transparent)` }}
            >
              {index}
            </span>
            <p className={`relative font-mono text-xs uppercase tracking-[0.22em] ${accentText} mb-3 pt-6`}>
              <span aria-hidden className={`mr-3 inline-block h-px w-6 ${accentBg} align-middle`} />
              {index}
            </p>
            <h2 className="relative font-display font-semibold text-ink tracking-[-0.015em]
                           leading-[1.15] text-[clamp(1.7rem,3.2vw,2.2rem)]">
              {title}
            </h2>
            {description && (
              <p className="relative mt-3 text-fog text-[14px] leading-[1.7] max-w-[40ch]">
                {description}
              </p>
            )}
          </div>
        </Reveal>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}
