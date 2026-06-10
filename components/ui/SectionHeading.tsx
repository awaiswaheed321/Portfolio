import Reveal from './Reveal';

/**
 * Mono telemetry label + display heading. `index` is the section's
 * position in the page (01 … 05).
 */
export default function SectionHeading({
  index,
  title,
  description,
}: {
  index: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mb-12 md:mb-14">
      <p className="font-mono text-xs uppercase tracking-[0.22em] text-volt mb-4">
        <span aria-hidden className="mr-3 inline-block h-px w-6 bg-volt align-middle" />
        {index} · {title}
      </p>
      <h2 className="font-display font-semibold text-ink tracking-[-0.015em] leading-[1.15]
                     text-[clamp(1.8rem,3.8vw,2.6rem)]">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-fog text-[15px] max-w-[58ch]">{description}</p>
      )}
    </Reveal>
  );
}
