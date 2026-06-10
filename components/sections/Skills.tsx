import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import { skillGroups } from '@/lib/data';

/**
 * A ledger, not a badge wall — category in mono on the left,
 * the toolchain reads as prose on the right.
 */
export default function Skills() {
  return (
    <section id="skills" aria-label="Skills" className="py-16 md:py-24 scroll-mt-8">
      <SectionHeading index="03" title="Toolchain" />
      <div className="flex flex-col">
        {skillGroups.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.05}>
            <div className="grid sm:grid-cols-[210px_minmax(0,1fr)] gap-x-10 gap-y-2
                            border-t border-line-faint py-6 last:border-b">
              <h3 className="font-mono text-xs font-normal uppercase tracking-[0.16em] text-mist pt-1">
                {group.category}
              </h3>
              <p className="text-[15px] leading-[1.9] text-fog">
                {group.skills.map((skill, j) => (
                  <span key={skill}>
                    <span className="whitespace-nowrap">
                      {skill}
                      {j < group.skills.length - 1 && (
                        <span className="text-line pl-2" aria-hidden>·</span>
                      )}
                    </span>{' '}
                  </span>
                ))}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
