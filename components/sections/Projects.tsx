'use client';

import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { projects } from '@/lib/data';

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
export default function Projects() {
  return (
    <section
      id="projects"
      className="py-12 md:py-20"
      aria-label="Projects"
    >
      <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <SectionHeading
            label="04 / PROJECTS"
            title="Selected Projects"
            description="Production systems and personal builds demonstrating depth across the stack."
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.15 }}
              className="flex flex-col rounded-card border border-[var(--border)]
                         bg-[var(--bg-secondary)] p-6
                         hover:border-[color-mix(in_srgb,var(--accent)_35%,var(--border))]
                         transition-colors duration-200"
            >
              {/* Context label */}
              <div className="flex items-center gap-2 mb-2">
                <p className="text-xs font-medium text-[var(--text-muted)] tracking-wide">
                  {project.context}
                </p>
                {project.context === 'Personal Project' ? (
                  <span className="px-1.5 py-0.5 text-[10px] font-semibold tracking-wide uppercase
                                   rounded bg-[var(--bg-tertiary)] border border-[var(--border)]
                                   text-[var(--text-muted)]">
                    Personal
                  </span>
                ) : (
                  <span className="px-1.5 py-0.5 text-[10px] font-semibold tracking-wide uppercase
                                   rounded bg-[color-mix(in_srgb,var(--accent)_12%,transparent)]
                                   border border-[color-mix(in_srgb,var(--accent)_30%,transparent)]
                                   text-[var(--accent)]">
                    Professional
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3 leading-snug">
                {project.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-[var(--text-secondary)] leading-[1.7] flex-1 mb-4">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-xs font-medium rounded-badge
                               bg-[var(--bg-tertiary)] border border-[var(--border)]
                               text-[var(--text-secondary)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* GitHub link (if available) */}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium
                             text-[var(--accent)] hover:text-[var(--accent-hover)]
                             transition-colors duration-150
                             focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded"
                >
                  <Github size={14} strokeWidth={2} aria-hidden />
                  View Code
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
