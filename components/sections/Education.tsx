import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';
import { education } from '@/lib/data';

export default function Education() {
  return (
    <Section
      id="education"
      index="02"
      title="Education"
      accentText="text-iris"
      accentBg="bg-iris"
      accentVar="--iris"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        {education.map((entry, i) => (
          <Reveal key={entry.degree} delay={i * 0.06}>
            <div
              className="h-full rounded-[12px] border border-line-faint bg-surface p-6"
              style={{
                borderTop: '2px solid color-mix(in srgb, var(--iris) 70%, transparent)',
              }}
            >
              <p className="font-mono text-xs text-mist mb-3">{entry.years}</p>
              <h3 className="font-display text-base font-semibold tracking-tight text-ink">
                {entry.degree}
              </h3>
              <p className="mt-1.5 text-[15px] text-fog">
                {entry.school}
                <span className="text-mist"> · {entry.location}</span>
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
