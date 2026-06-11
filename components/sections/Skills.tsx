import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';
import { skillGroups } from '@/lib/data';

/* Each category is a tile in the mosaic with its own hue. Render order
   and spans are tuned to chip counts: the three small categories share
   the first row, the two big ones get wide tiles below. */
const TILE_BY_CATEGORY: Record<string, { hue: string; span: string; order: number }> = {
  'Languages':              { hue: '--volt', span: 'lg:col-span-2', order: 0 },
  'Frameworks & Libraries': { hue: '--iris', span: 'lg:col-span-2', order: 1 },
  'Databases':              { hue: '--rose', span: 'lg:col-span-2', order: 2 },
  'Cloud & Infrastructure': { hue: '--aqua', span: 'lg:col-span-3', order: 3 },
  'Tools & Practices':      { hue: '--ok',   span: 'lg:col-span-3', order: 4 },
};
const FALLBACK_TILE = { hue: '--volt', span: 'lg:col-span-3', order: 99 };

export default function Skills() {
  return (
    <Section
      id="skills"
      index="03"
      title="Toolchain"
      description="The languages, infrastructure, and practices behind the systems."
      accentText="text-aqua"
      accentBg="bg-aqua"
      accentVar="--aqua"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-4">
        {[...skillGroups]
          .sort(
            (a, b) =>
              (TILE_BY_CATEGORY[a.category] ?? FALLBACK_TILE).order -
              (TILE_BY_CATEGORY[b.category] ?? FALLBACK_TILE).order
          )
          .map((group, i) => {
          const tile = TILE_BY_CATEGORY[group.category] ?? FALLBACK_TILE;
          return (
            <Reveal key={group.category} delay={i * 0.05} className={tile.span}>
              <div
                className="h-full rounded-[12px] border border-line-faint bg-surface p-5"
                style={{
                  borderTop: `2px solid color-mix(in srgb, var(${tile.hue}) 70%, transparent)`,
                }}
              >
                <h3 className="flex items-center gap-2.5 font-mono text-xs font-normal uppercase
                               tracking-[0.16em] text-mist mb-4">
                  <span
                    aria-hidden
                    className="inline-block h-[7px] w-[7px] rounded-full"
                    style={{ backgroundColor: `var(${tile.hue})` }}
                  />
                  {group.category}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-[6px] px-2.5 py-1 text-[13px] font-medium"
                      style={{
                        color: `var(${tile.hue})`,
                        backgroundColor: `color-mix(in srgb, var(${tile.hue}) 9%, transparent)`,
                        border: `1px solid color-mix(in srgb, var(${tile.hue}) 24%, transparent)`,
                      }}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
