'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Download, Github, Linkedin, Mail } from 'lucide-react';

/* ─── Animation variants ──────────────────────────────────────────────── */
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

const photoVariant = {
  hidden:  { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut', delay: 0.1 } },
};

/* ─── CTA button classes ─────────────────────────────────────────────── */
const PRIMARY_BTN =
  'inline-flex items-center gap-2 px-5 py-2.5 rounded-btn ' +
  'bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white ' +
  'text-sm font-semibold transition-colors duration-150 ' +
  'focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 ' +
  'focus-visible:ring-offset-[var(--bg-primary)]';

const SECONDARY_BTN =
  'inline-flex items-center gap-2 px-5 py-2.5 rounded-btn ' +
  'border border-[var(--border)] text-[var(--text-secondary)] ' +
  'hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)] ' +
  'text-sm font-medium transition-colors duration-150 ' +
  'focus-visible:ring-2 focus-visible:ring-[var(--accent)]';

/* ─── Component ──────────────────────────────────────────────────────── */
export default function Hero() {
  return (
    <section
      id="about"
      className="relative py-12 md:py-20 overflow-hidden"
      aria-label="Introduction"
    >
      {/* Subtle radial glow behind photo — barely perceptible */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        aria-hidden
        style={{
          background:
            'radial-gradient(ellipse 55% 60% at 78% 50%, color-mix(in srgb, var(--accent) 5%, transparent), transparent 70%)',
        }}
      />

      <div className="relative max-w-content mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16 lg:gap-20">

          {/* ── Text ────────────────────────────────────────────── */}
          <motion.div
            className="flex-1 min-w-0 text-center md:text-left"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {/* Availability chip */}
            <motion.p
              variants={fadeUp}
              className="inline-block mb-5 text-xs font-semibold tracking-[0.1em] uppercase
                         text-[var(--accent)]"
            >
              Open to new opportunities
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-6xl font-bold tracking-[-0.03em]
                         text-[var(--text-primary)] leading-[1.05] mb-4"
            >
              Awais Waheed
            </motion.h1>

            {/* Title + location */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-center md:items-center
                         justify-center md:justify-start gap-2 sm:gap-3 mb-6"
            >
              <span className="text-xl text-[var(--text-secondary)] font-normal">
                Senior Backend Engineer
              </span>
              <span
                className="hidden sm:block text-[var(--border-col)]"
                aria-hidden
              >
                ·
              </span>
              <span className="flex items-center gap-1.5 text-sm text-[var(--text-muted)]">
                <MapPin size={13} strokeWidth={2} aria-hidden />
                Irving, TX — Open to relocation
              </span>
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={fadeUp}
              className="text-base text-[var(--text-secondary)] leading-[1.75]
                         max-w-[540px] mx-auto md:mx-0 mb-8"
            >
              Senior Backend Engineer specializing in high-throughput distributed systems and
              event-driven architectures. 6+ years building production systems in Java at
              scale — currently owning a streaming pipeline processing{' '}
              <span className="text-[var(--accent)] font-semibold">1M+ messages/day</span>{' '}
              at 7-Eleven&apos;s delivery platform. Deep experience with AWS, reactive
              programming, microservices, and cloud migrations. Previously at Walmart
              (5,000+ stores) via Confiz.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center justify-center md:justify-start gap-3"
            >
              <a href="/AwaisWaheed_Resume.pdf" download className={PRIMARY_BTN}>
                <Download size={14} strokeWidth={2.5} aria-hidden />
                Download CV
              </a>

              <a
                href="https://github.com/awaiswaheed321"
                target="_blank"
                rel="noopener noreferrer"
                className={SECONDARY_BTN}
              >
                <Github size={14} strokeWidth={2} aria-hidden />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/awaiswaheed96/"
                target="_blank"
                rel="noopener noreferrer"
                className={SECONDARY_BTN}
              >
                <Linkedin size={14} strokeWidth={2} aria-hidden />
                LinkedIn
              </a>

              <a
                href="mailto:awaiswaheed.work@gmail.com"
                className={SECONDARY_BTN}
              >
                <Mail size={14} strokeWidth={2} aria-hidden />
                Email
              </a>
            </motion.div>
          </motion.div>

          {/* ── Photo ───────────────────────────────────────────── */}
          <motion.div
            className="flex-shrink-0"
            variants={photoVariant}
            initial="hidden"
            animate="visible"
          >
            {/*
              Ring: 2px solid var(--accent) with 4px offset per DESIGN.md.
              Using Tailwind arbitrary property to keep CSS-variable-based styling.
            */}
            <div
              className="w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full
                         [outline:2px_solid_var(--accent)] [outline-offset:4px]"
            >
              <Image
                src="/profile.jpg"
                alt="Awais Waheed, Senior Backend Engineer"
                width={180}
                height={180}
                priority
                className="rounded-full object-cover w-full h-full"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
