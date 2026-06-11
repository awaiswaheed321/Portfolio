import Reveal from '@/components/ui/Reveal';
import { contact } from '@/lib/data';
import { ArrowUpRight, Mail } from '@/components/ui/Icons';

/**
 * The closing panel deliberately breaks the side-rail pattern:
 * one centered card, mint accent, nothing else competing.
 */
export default function Contact() {
  return (
    <section id="contact" aria-label="Contact" className="py-14 md:py-20 scroll-mt-8">
      <Reveal>
        <div
          className="relative overflow-hidden rounded-[16px] border border-line-faint bg-surface
                     px-6 py-14 md:px-12 md:py-20 text-center"
          style={{
            borderTop: '2px solid color-mix(in srgb, var(--ok) 70%, transparent)',
          }}
        >
          {/* Soft mint glow behind the statement */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 60% 55% at 50% 0%, color-mix(in srgb, var(--ok) 7%, transparent), transparent 70%)',
            }}
          />
          <div className="relative mx-auto max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-ok mb-5">
              05 · Contact
            </p>
            <h2 className="font-display font-semibold text-ink tracking-[-0.015em] leading-[1.15]
                           text-[clamp(1.9rem,4vw,2.8rem)] mb-5">
              Building something at scale?{' '}
              <span className="mint-gradient whitespace-nowrap">Let&apos;s talk.</span>
            </h2>
            <p className="text-[15px] leading-[1.8] text-fog max-w-[52ch] mx-auto mb-9">
              I&apos;m open to senior backend and distributed-systems roles, and to
              interesting consulting work. If you&apos;re moving serious traffic and
              think I&apos;d be a fit, reach out.
            </p>
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-3 font-mono text-base md:text-lg text-ink
                         underline decoration-line underline-offset-8
                         hover:text-volt hover:decoration-volt transition-colors duration-200 break-all"
            >
              <Mail size={17} className="shrink-0 text-ok" />
              {contact.email}
            </a>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
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
                href={contact.resume}
                download
                className="inline-flex items-center gap-1.5 font-mono text-[13px] text-fog
                           hover:text-volt transition-colors duration-200"
              >
                Résumé (PDF)
                <ArrowUpRight size={12} />
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
