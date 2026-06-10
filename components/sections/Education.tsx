import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import { education } from '@/lib/data';

export default function Education() {
  return (
    <section id="education" aria-label="Education" className="py-16 md:py-24 scroll-mt-8">
      <SectionHeading index="02" title="Education" />
      <div className="flex flex-col">
        {education.map((entry, i) => (
          <Reveal key={entry.degree} delay={i * 0.06}>
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1.5 md:gap-6
                            border-t border-line-faint py-6 last:border-b">
              <div>
                <h3 className="font-display text-base font-semibold tracking-tight text-ink">
                  {entry.degree}
                </h3>
                <p className="mt-1 text-[15px] text-fog">
                  {entry.school}
                  <span className="text-mist"> · {entry.location}</span>
                </p>
              </div>
              <p className="font-mono text-xs text-mist whitespace-nowrap">{entry.years}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
