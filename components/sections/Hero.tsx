'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Download, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import ParticleCanvas from '@/components/ui/ParticleCanvas';

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
      className="relative min-h-[calc(100vh-3.5rem)] md:min-h-[calc(100vh-4rem)] flex items-center overflow-hidden"
      aria-label="Introduction"
    >
      {/* Particle network background */}
      <ParticleCanvas />

      {/* Radial glow behind photo */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        aria-hidden
        style={{
          background:
            'radial-gradient(ellipse 55% 60% at 78% 50%, color-mix(in srgb, var(--accent) 6%, transparent), transparent 70%)',
        }}
      />

      <div className="relative w-full max-w-content mx-auto px-6 md:px-8 lg:px-12 py-20">
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
              scale — currently owning a mission-critical streaming pipeline at 7-Eleven&apos;s
              delivery platform. Deep experience with AWS, reactive programming, microservices,
              and cloud migrations. Previously at Walmart via Confiz.
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

          {/* ── Photo (pop-out) ──────────────────────────────── */}
          <motion.div
            className="flex-shrink-0"
            variants={photoVariant}
            initial="hidden"
            animate="visible"
          >
            {/*
              Pop-out technique:
              Container is ~25% taller than the octagon.
              The photo fills the tall container — face sits in the overflow zone
              above the octagon top edge.
              A gradient mask fades out the sky so only the person is visible.
              The octagon border + glow frames the lower 78% of the container.
            */}
            <div className="relative w-[220px] md:w-[280px]">

              {/* Photo layer — tall, clipped to "rectangle top + octagon bottom" shape */}
              <div
                className="relative w-full h-[280px] md:h-[360px]"
                style={{
                  clipPath: 'polygon(0% 0%, 100% 0%, 100% 78%, 70.7% 100%, 29.3% 100%, 0% 78%)',
                  WebkitMaskImage:
                    'linear-gradient(to bottom, transparent 0%, black 22%)',
                  maskImage:
                    'linear-gradient(to bottom, transparent 0%, black 22%)',
                }}
              >
                <Image
                  src="/profile.jpg"
                  alt="Awais Waheed, Senior Backend Engineer"
                  fill
                  priority
                  className="object-cover object-[center_45%]"
                />
              </div>

              {/* Octagon glow + border — bottom 78% of container */}
              <div
                className="absolute inset-x-0 bottom-0 h-[78%] pointer-events-none"
                style={{
                  filter:
                    'drop-shadow(0 0 16px var(--photo-glow)) drop-shadow(0 0 50px var(--photo-glow-soft))',
                }}
              >
                <svg
                  className="w-full h-full"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  {/* Open polyline — sides + bottom only, no top edge above the head */}
                  <polyline
                    points="0,29.3 0,70.7 29.3,100 70.7,100 100,70.7 100,29.3"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="2"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* ── Scroll indicator ──────────────────────────────────── */}
      <motion.a
        href="#experience"
        aria-label="Scroll to experience"
        className="absolute bottom-8 left-1/2 -translate-x-1/2
                   flex flex-col items-center gap-1.5 cursor-pointer
                   text-[var(--text-muted)] hover:text-[var(--accent)]
                   transition-colors duration-150"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <span className="text-[10px] tracking-[0.15em] uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ChevronDown size={16} strokeWidth={2} aria-hidden />
        </motion.div>
      </motion.a>
    </section>
  );
}
