import { contact } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="border-t border-line-faint">
      <div className="mx-auto max-w-content px-6 md:px-10 lg:px-12 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-mono text-xs text-mist">
            © {new Date().getFullYear()} Awais Waheed · Irving, TX
          </p>
          <p aria-hidden className="font-mono text-xs text-mist select-none">
            {'// end of trace'}
          </p>
          <nav aria-label="Footer" className="flex items-center gap-5">
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-mist hover:text-volt transition-colors duration-200"
            >
              GitHub
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-mist hover:text-volt transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="font-mono text-xs text-mist hover:text-volt transition-colors duration-200"
            >
              Email
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
