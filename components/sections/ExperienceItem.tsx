'use client';

import { useId, useState } from 'react';
import type { ExperienceEntry } from '@/lib/data';
import { ChevronDown } from '@/components/ui/Icons';

/**
 * One role on the timeline. Bullets collapse behind an animated
 * grid-rows transition (no measurement, no animation library).
 */
export default function ExperienceItem({
  entry,
  defaultOpen = false,
}: {
  entry: ExperienceEntry;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const bodyId = useId();

  return (
    <article
      className={[
        'border-t border-line-faint py-8 md:py-10 last:border-b',
        'border-l-2 pl-5 md:pl-7 -ml-px transition-colors duration-300',
        open ? 'border-l-volt' : 'border-l-transparent hover:border-l-line',
      ].join(' ')}
    >
      {/* Header row */}
      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1.5 md:gap-6">
        <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
          {entry.role}
        </h3>
        <p className="font-mono text-xs text-mist whitespace-nowrap">{entry.duration}</p>
      </div>
      <p className="mt-1 text-[15px] text-fog">
        {entry.company}
        <span className="text-mist">
          {' '}· {entry.location}
          {entry.remote ? ' · Remote' : ''}
        </span>
      </p>

      {entry.intro && (
        <p className="mt-4 text-[15px] leading-[1.75] text-fog max-w-[68ch]">{entry.intro}</p>
      )}

      {/* Collapsible body */}
      <div
        id={bodyId}
        className="grid transition-[grid-template-rows] duration-500 ease-out motion-reduce:transition-none"
        style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <ul className="mt-4 flex flex-col gap-2.5 max-w-[72ch]">
            {entry.bullets.map((bullet) => (
              <li
                key={bullet}
                className="relative pl-5 text-[15px] leading-[1.7] text-fog
                           before:absolute before:left-0 before:top-[0.7em] before:h-[2px]
                           before:w-2.5 before:bg-volt-soft before:content-['']"
              >
                {bullet}
              </li>
            ))}
          </ul>
          <p className="mt-5 font-mono text-xs leading-relaxed text-mist">
            {entry.technologies.join(' · ')}
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={bodyId}
        className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs text-volt
                   hover:text-volt-strong transition-colors duration-200"
      >
        {open ? 'Collapse' : `Details (${entry.bullets.length})`}
        <ChevronDown
          size={12}
          className={`transition-transform duration-300 motion-reduce:transition-none ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
    </article>
  );
}
