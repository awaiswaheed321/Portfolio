import Image from 'next/image';
import { contact, stats } from '@/lib/data';
import { ArrowDown, ArrowUpRight } from '@/components/ui/Icons';

/**
 * The craft statement. The 3-day silent outage and the
 * nothing-fails-silently engineering are real claims from
 * data/experience.md, as is every number on the metric board.
 */
export default function Hero() {
  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative overflow-hidden pt-28 md:pt-36 lg:pt-40 pb-16 md:pb-24"
    >
      {/* Blueprint grid, fading out downward */}
      <div aria-hidden className="hero-grid absolute inset-0 pointer-events-none" />

      <div className="relative flex flex-col-reverse lg:flex-row lg:items-center gap-10 lg:gap-16">
        {/* Text column */}
        <div className="flex-1 min-w-0">
          {/* Status line */}
          <p
            className="hero-rise flex items-center gap-2.5 font-mono text-xs uppercase
                       tracking-[0.2em] text-fog mb-8"
            style={{ '--rise-delay': '0s' } as React.CSSProperties}
          >
            <span aria-hidden className="status-dot h-[7px] w-[7px] rounded-full bg-ok" />
            Open to new opportunities
          </p>

          {/* Kicker */}
          <p
            className="hero-rise font-mono text-[13px] text-mist mb-6"
            style={{ '--rise-delay': '0.1s' } as React.CSSProperties}
          >
            Awais Waheed · Senior Backend Engineer · Irving, TX
          </p>

          {/* Craft statement */}
          <h1
            className="hero-rise-solid font-display font-semibold text-ink
                       text-[clamp(2.3rem,5.4vw,4rem)] leading-[1.1] tracking-[-0.02em]
                       max-w-[19ch] mb-7"
            style={{ '--rise-delay': '0.15s' } as React.CSSProperties}
          >
            <span className="sr-only">Awais Waheed, Senior Backend Engineer. </span>
            I build systems that <span className="volt-gradient">fail loudly</span>.
            And rarely.
          </h1>

          {/* Bio */}
          <p
            className="hero-rise-solid text-fog text-base md:text-[17px] leading-[1.8] max-w-[62ch] mb-10"
            style={{ '--rise-delay': '0.25s' } as React.CSSProperties}
          >
            Java, AWS, event-driven pipelines. The worst outage I&apos;ve fixed had been
            failing silently for three days, so I build systems that can&apos;t: dead-letter
            queues, idempotent retries, and observability wired in from day one. Right now
            that means the event stream powering analytics and debugging for 7-Eleven&apos;s
            delivery platform. Before that, Walmart systems in 5,000+ U.S. stores.
          </p>

          {/* CTAs */}
          <div
            className="hero-rise flex flex-wrap items-center gap-x-7 gap-y-4"
            style={{ '--rise-delay': '0.4s' } as React.CSSProperties}
          >
            <a
              href={contact.resume}
              download
              className="inline-flex items-center gap-2 rounded-[6px] bg-volt px-5 py-2.5
                         font-mono text-[13px] font-medium text-ground shadow-cta
                         hover:bg-volt-strong transition-colors duration-200"
            >
              Download résumé
              <ArrowDown size={13} />
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[13px] text-fog
                         hover:text-volt transition-colors duration-200"
            >
              GitHub
              <ArrowUpRight size={12} />
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[13px] text-fog
                         hover:text-volt transition-colors duration-200"
            >
              LinkedIn
              <ArrowUpRight size={12} />
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-1.5 font-mono text-[13px] text-fog
                         hover:text-volt transition-colors duration-200"
            >
              Email
              <ArrowUpRight size={12} />
            </a>
          </div>
        </div>

        {/* Portrait — gradient ring, front and center */}
        <div
          className="hero-rise-solid self-center lg:self-auto shrink-0"
          style={{ '--rise-delay': '0.2s' } as React.CSSProperties}
        >
          <div className="rounded-full p-[3px] shadow-cta
                          bg-[linear-gradient(135deg,var(--volt),var(--iris),var(--rose))]">
            <Image
              src="/profile.webp"
              alt="Portrait of Awais Waheed"
              width={260}
              height={260}
              priority
              className="h-40 w-40 md:h-52 md:w-52 lg:h-[260px] lg:w-[260px]
                         rounded-full object-cover border-4 border-[color:var(--ground)]"
            />
          </div>
        </div>
      </div>

      {/* Metric board — one card per series, dashboard style */}
      <dl
        className="hero-rise relative mt-14 md:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4"
        style={{ '--rise-delay': '0.55s' } as React.CSSProperties}
      >
        {stats.map(({ value, label, hueVar, hueText }) => (
          <div
            key={label}
            className="rounded-[10px] border border-line-faint bg-surface
                       px-4 py-4 md:px-5 transition-transform duration-200 hover:-translate-y-0.5"
            style={{
              borderTop: `2px solid color-mix(in srgb, var(${hueVar}) 75%, transparent)`,
              boxShadow: `0 1px 0 color-mix(in srgb, var(${hueVar}) 6%, transparent)`,
            }}
          >
            <dt className="sr-only">{label}</dt>
            <dd className={`font-mono text-xl md:text-2xl ${hueText}`}>{value}</dd>
            <dd className="mt-1 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.12em] text-mist">
              {label}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
