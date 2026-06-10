import { contact } from '@/lib/data';
import { ArrowDown, ArrowUpRight } from '@/components/ui/Icons';
import PulseLine from '@/components/ui/PulseLine';

/**
 * The craft statement. The 3-day silent outage and the
 * nothing-fails-silently engineering are real claims from
 * data/experience.md.
 */
export default function Hero() {
  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative overflow-hidden pt-32 md:pt-40 lg:pt-44 pb-16 md:pb-24"
    >
      {/* Blueprint grid, fading out downward */}
      <div aria-hidden className="hero-grid absolute inset-0 pointer-events-none" />

      <div className="relative">
        {/* Status line */}
        <p
          className="hero-rise flex items-center gap-2.5 font-mono text-xs uppercase
                     tracking-[0.2em] text-fog mb-8"
          style={{ '--rise-delay': '0s' } as React.CSSProperties}
        >
          <span aria-hidden className="h-[7px] w-[7px] rounded-full bg-ok" />
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
                     text-[clamp(2.3rem,5.8vw,4.3rem)] leading-[1.1] tracking-[-0.02em]
                     max-w-[19ch] mb-7"
          style={{ '--rise-delay': '0.15s' } as React.CSSProperties}
        >
          <span className="sr-only">Awais Waheed, Senior Backend Engineer. </span>
          I build systems that <span className="volt-gradient">fail loudly</span> —
          and rarely.
        </h1>

        {/* Bio */}
        <p
          className="hero-rise-solid text-fog text-base md:text-[17px] leading-[1.8] max-w-[62ch] mb-10"
          style={{ '--rise-delay': '0.25s' } as React.CSSProperties}
        >
          Java, AWS, event-driven pipelines. The worst outage I&apos;ve fixed had been
          failing silently for three days — so I build systems that can&apos;t: dead-letter
          queues, idempotent retries, and observability wired in from the start. Currently
          building the event stream that powers analytics and debugging across 7-Eleven&apos;s
          delivery platform; before that, Walmart systems in 5,000+ U.S. stores.
        </p>

        {/* CTAs */}
        <div
          className="hero-rise flex flex-wrap items-center gap-x-7 gap-y-4 mb-14 md:mb-16"
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

        {/* The trace */}
        <div
          className="hero-rise"
          style={{ '--rise-delay': '0.55s' } as React.CSSProperties}
        >
          <PulseLine />
        </div>
      </div>
    </section>
  );
}
