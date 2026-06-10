import Image from 'next/image';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import { contact } from '@/lib/data';
import { ArrowUpRight, Mail } from '@/components/ui/Icons';

export default function Contact() {
  return (
    <section id="contact" aria-label="Contact" className="py-16 md:py-24 scroll-mt-8">
      <SectionHeading index="05" title="Contact" />
      <Reveal>
        <div className="flex flex-col sm:flex-row items-start gap-8 md:gap-12">
          <Image
            src="/profile.jpg"
            alt="Portrait of Awais Waheed"
            width={104}
            height={104}
            className="h-[104px] w-[104px] shrink-0 rounded-[10px] object-cover
                       border border-line"
          />
          <div className="min-w-0">
            <p className="font-display font-semibold text-ink text-[clamp(1.5rem,3vw,2.1rem)]
                          leading-snug tracking-[-0.015em] max-w-[24ch] mb-5">
              Building something at scale?{' '}
              <span className="volt-gradient whitespace-nowrap">Let&apos;s talk.</span>
            </p>
            <p className="text-[15px] leading-[1.8] text-fog max-w-[58ch] mb-8">
              I&apos;m open to senior backend and distributed-systems roles, and to
              interesting consulting work. If you&apos;re moving serious traffic and
              think I&apos;d be a fit — reach out.
            </p>
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-3 font-mono text-base md:text-lg text-ink
                         underline decoration-line underline-offset-8
                         hover:text-volt hover:decoration-volt transition-colors duration-200 break-all"
            >
              <Mail size={17} className="shrink-0 text-volt" />
              {contact.email}
            </a>
            <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-3">
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
