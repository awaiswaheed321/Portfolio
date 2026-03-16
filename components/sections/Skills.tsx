'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { skillGroups } from '@/lib/data';

/* ─── Animation variants ──────────────────────────────────────────────── */
const sectionVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const groupVariants = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
};

const badgeContainerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.04 } },
};

const badgeVariants = {
  hidden:  { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: 'easeOut' } },
};

/* ─── Component ──────────────────────────────────────────────────────── */
export default function Skills() {
  return (
    <section
      id="skills"
      className="py-12 md:py-20 bg-[var(--bg-secondary)]"
      aria-label="Skills"
    >
      <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <SectionHeading
            label="03 / SKILLS"
            title="Technical Skills"
            description="Technologies and practices I use to build production systems at scale."
          />
        </motion.div>

        <motion.div
          className="flex flex-col gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {skillGroups.map(({ category, skills }) => (
            <motion.div key={category} variants={groupVariants}>
              {/* Category label */}
              <h3
                className="text-xs font-semibold tracking-[0.08em] uppercase
                           text-[var(--text-muted)] mb-3"
              >
                {category}
              </h3>

              {/* Badges */}
              <motion.div
                className="flex flex-wrap gap-2"
                variants={badgeContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
              >
                {skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={badgeVariants}
                    className="px-3 py-1.5 text-sm font-medium rounded-badge
                               bg-[var(--bg-tertiary)] border border-[var(--border)]
                               text-[var(--text-secondary)]
                               hover:border-[var(--accent)] hover:text-[var(--accent)]
                               transition-colors duration-150 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
