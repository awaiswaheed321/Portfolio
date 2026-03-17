import { Github, Linkedin } from 'lucide-react';

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-8">
      <div
        className="max-w-content mx-auto px-6 md:px-8 lg:px-12
                   flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <p className="text-sm text-[var(--text-muted)]">
          © {YEAR} Awais Waheed
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/awaiswaheed321"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-[var(--text-muted)] hover:text-[var(--accent)]
                       transition-colors duration-150
                       focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/awaiswaheed96/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-[var(--text-muted)] hover:text-[var(--accent)]
                       transition-colors duration-150
                       focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
