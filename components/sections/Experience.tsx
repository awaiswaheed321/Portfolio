import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';
import ExperienceItem from '@/components/sections/ExperienceItem';
import { experience } from '@/lib/data';

export default function Experience() {
  return (
    <Section
      id="experience"
      index="01"
      title="Experience"
      description="Six years of production systems: streaming pipelines, retail infrastructure, and the outages in between."
    >
      {/* Timeline rail anchors the entries */}
      <div className="relative flex flex-col border-l border-line-faint">
        {experience.map((entry, i) => (
          <Reveal key={`${entry.company}-${entry.duration}`} delay={Math.min(i * 0.06, 0.18)}>
            <ExperienceItem entry={entry} defaultOpen={i === 0} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
