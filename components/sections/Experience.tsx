'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MapPin, Wifi } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { experience } from '@/lib/data';

/* ─── Animation variants ──────────────────────────────────────────────── */
const sectionVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
};

/* ─── Component ──────────────────────────────────────────────────────── */
export default function Experience() {
  // Most recent role expanded by default
  const [expandedIndex, setExpandedIndex] = useState<number>(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = (i: number) => {
    setExpandedIndex((prev) => {
      const next = prev === i ? -1 : i;
      if (next !== -1) {
        setTimeout(() => {
          const el = cardRefs.current[i];
          if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY - 88;
            window.scrollTo({ top, behavior: 'smooth' });
          }
        }, 320);
      }
      return next;
    });
  };

  return (
    <section
      id="experience"
      className="py-12 md:py-20"
      aria-label="Work experience"
    >
      <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <SectionHeading
            label="02 / EXPERIENCE"
            title="Work Experience"
            description="6+ years building distributed systems and event-driven architectures at scale."
          />
        </motion.div>

        {/* ── Timeline ─────────────────────────────────────────── */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* Vertical line */}
          <div
            className="absolute left-[7px] top-2 bottom-2 w-px bg-[var(--border)]"
            aria-hidden
          />

          <div className="flex flex-col gap-6">
            {experience.map((job, i) => {
              const isOpen = expandedIndex === i;

              return (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  className="relative pl-8"
                  ref={(el) => { cardRefs.current[i] = el as HTMLDivElement | null; }}
                >
                  {/* Timeline dot */}
                  <div
                    className={[
                      'absolute left-0 top-6 w-[15px] h-[15px] rounded-full border-2',
                      'border-[var(--bg-primary)] ring-2',
                      isOpen
                        ? 'bg-[var(--accent)] ring-[var(--accent)]'
                        : 'bg-[var(--bg-tertiary)] ring-[var(--border)]',
                      'transition-all duration-200',
                    ].join(' ')}
                    aria-hidden
                  />

                  {/* Card */}
                  <motion.div
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.15 }}
                    className={[
                      'rounded-card border p-6',
                      'bg-[var(--bg-secondary)]',
                      'transition-colors duration-200',
                      isOpen
                        ? 'border-[color-mix(in_srgb,var(--accent)_40%,var(--border))]'
                        : 'border-[var(--border)] hover:border-[color-mix(in_srgb,var(--accent)_25%,var(--border))]',
                    ].join(' ')}
                  >
                    {/* ── Card header (always visible) ── */}
                    <button
                      onClick={() => toggle(i)}
                      aria-expanded={isOpen}
                      aria-controls={`exp-body-${i}`}
                      aria-label={`${isOpen ? 'Collapse' : 'Expand'} details for ${job.role} at ${job.company}`}
                      className="w-full text-left focus-visible:outline-none
                                 focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          {/* Role title */}
                          <h3 className="text-base font-semibold text-[var(--text-primary)] leading-snug">
                            {job.role}
                          </h3>

                          {/* Company + location row */}
                          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1.5">
                            <span className="text-sm font-medium text-[var(--accent)]">
                              {job.company}
                            </span>
                            <span className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
                              <MapPin size={11} strokeWidth={2} aria-hidden />
                              {job.location}
                            </span>
                            {job.remote && (
                              <span
                                className="inline-flex items-center gap-1 text-xs font-medium
                                           px-2 py-0.5 rounded-badge
                                           bg-[var(--accent-subtle)] text-[var(--accent)]"
                              >
                                <Wifi size={10} strokeWidth={2.5} aria-hidden />
                                Remote
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Date + chevron */}
                        <div className="flex items-center gap-3 flex-shrink-0">
                          <span className="text-xs text-[var(--text-muted)] whitespace-nowrap">
                            {job.duration}
                          </span>
                          <ChevronDown
                            size={16}
                            strokeWidth={2}
                            aria-hidden
                            className={[
                              'text-[var(--text-muted)] transition-transform duration-200',
                              isOpen ? 'rotate-180' : '',
                            ].join(' ')}
                          />
                        </div>
                      </div>

                      {/* Intro (visible when collapsed too) */}
                      {job.intro && (
                        <p className="mt-3 text-sm text-[var(--text-secondary)] leading-[1.65]">
                          {job.intro}
                        </p>
                      )}
                    </button>

                    {/* ── Expandable body ── */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="body"
                          id={`exp-body-${i}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4">
                            {/* Bullets */}
                            <ul className="space-y-2.5 mb-5">
                              {job.bullets.map((bullet, bi) => (
                                <li
                                  key={bi}
                                  className="flex gap-3 text-sm text-[var(--text-secondary)] leading-[1.65]"
                                >
                                  <span
                                    className="mt-[7px] flex-shrink-0 w-1 h-1 rounded-full bg-[var(--accent)]"
                                    aria-hidden
                                  />
                                  {bullet}
                                </li>
                              ))}
                            </ul>

                            {/* Tech tags */}
                            <div className="flex flex-wrap gap-2">
                              {job.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-2.5 py-1 text-xs font-medium rounded-badge
                                             bg-[var(--bg-tertiary)] border border-[var(--border)]
                                             text-[var(--text-secondary)]"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
