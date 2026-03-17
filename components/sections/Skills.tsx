'use client';

import { motion } from 'framer-motion';
import {
  SiTypescript, SiPython, SiCplusplus, SiDotnet,
  SiSpringboot, SiHibernate, SiNestjs, SiReact, SiLangchain, SiApachekafka,
  SiKubernetes, SiDocker, SiJenkins, SiNewrelic, SiSplunk, SiSonarqubeserver,
  SiMongodb, SiMysql, SiPostgresql,
  SiApachemaven, SiGit, SiPostman, SiLiquibase, SiJira, SiGithubcopilot, SiClaude,
  SiJunit5,
} from 'react-icons/si';
import { FaJava, FaAws } from 'react-icons/fa';
import type { IconType } from 'react-icons';
import SectionHeading from '@/components/ui/SectionHeading';
import { skillGroups } from '@/lib/data';

/* ─── Icon map ────────────────────────────────────────────────────────── */
const skillIcons: Record<string, IconType> = {
  // Languages
  'Java':             FaJava,
  'TypeScript':       SiTypescript,
  'Python':           SiPython,
  'C++':              SiCplusplus,
  'C#/.NET':          SiDotnet,
  // Frameworks & Libraries
  'Spring Boot':      SiSpringboot,
  'Hibernate':        SiHibernate,
  'Nest.js':          SiNestjs,
  'React.js':         SiReact,
  'LangChain':        SiLangchain,
  'Apache Kafka':     SiApachekafka,
  'AWS Kinesis':      FaAws,
  'AWS SQS':          FaAws,
  // Cloud & Infrastructure
  'AWS':              FaAws,
  'Kubernetes':       SiKubernetes,
  'Docker':           SiDocker,
  'Jenkins':          SiJenkins,
  'New Relic':        SiNewrelic,
  'Splunk':           SiSplunk,
  'SonarQube':        SiSonarqubeserver,
  // Databases
  'MongoDB':          SiMongodb,
  'MySQL':            SiMysql,
  'PostgreSQL':       SiPostgresql,
  'Amazon RDS':       FaAws,
  // Tools
  'JUnit':            SiJunit5,
  'Maven':            SiApachemaven,
  'Git':              SiGit,
  'Postman':          SiPostman,
  'Liquibase':        SiLiquibase,
  'JIRA':             SiJira,
  'GitHub Copilot':   SiGithubcopilot,
  'Claude Code':      SiClaude,
};

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
                {skills.map((skill) => {
                  const Icon = skillIcons[skill];
                  return (
                    <motion.span
                      key={skill}
                      variants={badgeVariants}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5
                                 text-sm font-medium rounded-badge
                                 bg-[var(--bg-tertiary)] border border-[var(--border)]
                                 text-[var(--text-secondary)]
                                 hover:border-[var(--accent)] hover:text-[var(--accent)]
                                 transition-colors duration-150 cursor-default"
                    >
                      {Icon && (
                        <Icon
                          size={13}
                          aria-hidden
                          className="flex-shrink-0 opacity-75"
                        />
                      )}
                      {skill}
                    </motion.span>
                  );
                })}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
