'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { contact } from '@/lib/data';

/* ─── Animation variants ──────────────────────────────────────────────── */
const sectionVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
};

/* ─── Contact links data ─────────────────────────────────────────────── */
const LINKS = [
  {
    label:  'Email',
    href:   `mailto:${contact.email}`,
    Icon:   Mail,
    detail: contact.email,
    external: false,
  },
  {
    label:  'LinkedIn',
    href:   contact.linkedin,
    Icon:   Linkedin,
    detail: 'linkedin.com/in/awaiswaheed96',
    external: true,
  },
  {
    label:  'GitHub',
    href:   contact.github,
    Icon:   Github,
    detail: 'github.com/awaiswaheed321',
    external: true,
  },
];

/* ─── Component ──────────────────────────────────────────────────────── */
export default function Contact() {
  return (
    <section
      id="contact"
      className="py-12 md:py-20 bg-[var(--bg-secondary)]"
      aria-label="Contact"
    >
      <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <SectionHeading
            label="05 / CONTACT"
            title="Get in Touch"
          />
        </motion.div>

        <motion.div
          className="max-w-xl"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <p className="text-base text-[var(--text-secondary)] leading-[1.75] mb-10">
            I&apos;m open to senior backend / distributed systems roles and interesting
            consulting work. If you&apos;re working on something at scale and think
            I&apos;d be a fit — reach out.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row flex-wrap gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {LINKS.map(({ label, href, Icon, detail, external }) => (
              <motion.a
                key={label}
                variants={itemVariants}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.15 }}
                href={href}
                {...(external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                className="inline-flex items-center gap-3 px-5 py-3 rounded-btn
                           border border-[var(--border)] text-[var(--text-secondary)]
                           hover:border-[var(--accent)] hover:text-[var(--accent)]
                           hover:bg-[var(--accent-subtle)]
                           transition-all duration-150
                           focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              >
                <Icon size={16} strokeWidth={2} aria-hidden />
                <span className="text-sm font-medium">{label}</span>
                <span className="text-xs text-[var(--text-muted)] hidden sm:inline">
                  {detail}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
