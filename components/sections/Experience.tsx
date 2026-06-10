import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import ExperienceItem from '@/components/sections/ExperienceItem';
import { experience } from '@/lib/data';

export default function Experience() {
  return (
    <section id="experience" aria-label="Work experience" className="py-16 md:py-24 scroll-mt-8">
      <SectionHeading
        index="01"
        title="Experience"
        description="Six years of production systems — streaming pipelines, retail infrastructure, and the outages in between."
      />
      <div className="flex flex-col">
        {experience.map((entry, i) => (
          <Reveal key={`${entry.company}-${entry.duration}`} delay={Math.min(i * 0.06, 0.18)}>
            <ExperienceItem entry={entry} defaultOpen={i === 0} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
