'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '@/components/ui/ThemeToggle';

const NAV_LINKS = [
  { label: 'About',      href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Contact',    href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled]         = useState(false);
  const [mobileOpen, setMobileOpen]     = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  // Show border on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll spy — track which section occupies the upper viewport
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      {
        threshold: 0,
        rootMargin: '-64px 0px -55% 0px',
      }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header
      className={[
        'sticky top-0 z-50 w-full',
        'bg-[rgba(248,249,252,0.92)] dark:bg-[rgba(15,17,23,0.92)]',
        'backdrop-blur-md transition-all duration-300',
        scrolled
          ? 'border-b border-[var(--border)]'
          : 'border-b border-transparent',
      ].join(' ')}
    >
      <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-14 md:h-16">

          {/* ── Wordmark ── */}
          <a
            href="#about"
            className="font-bold text-lg tracking-tight
                       text-[var(--text-primary)] hover:text-[var(--accent)]
                       transition-colors duration-150
                       focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded"
          >
            Awais Waheed
          </a>

          {/* ── Desktop nav ── */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {NAV_LINKS.map(({ label, href }) => {
              const id       = href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <a
                  key={href}
                  href={href}
                  aria-current={isActive ? 'location' : undefined}
                  className={[
                    'px-4 py-2 text-sm font-medium rounded-md transition-all duration-150',
                    'focus-visible:ring-2 focus-visible:ring-[var(--accent)]',
                    isActive
                      ? [
                          'text-[var(--accent)]',
                          '[text-decoration:underline]',
                          '[text-decoration-color:var(--accent)]',
                          '[text-decoration-thickness:2px]',
                          '[text-underline-offset:4px]',
                        ].join(' ')
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)]',
                  ].join(' ')}
                >
                  {label}
                </a>
              );
            })}
          </nav>

          {/* ── Right controls ── */}
          <div className="flex items-center gap-1">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-full
                         text-[var(--text-secondary)] hover:text-[var(--text-primary)]
                         hover:bg-[var(--bg-tertiary)] transition-colors duration-150
                         focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div
          id="mobile-nav"
          className="md:hidden border-t border-[var(--border)] bg-[var(--bg-primary)]"
        >
          <nav
            className="max-w-content mx-auto px-6 py-4 flex flex-col gap-1"
            aria-label="Mobile navigation"
          >
            {NAV_LINKS.map(({ label, href }) => {
              const id       = href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <a
                  key={href}
                  href={href}
                  aria-current={isActive ? 'location' : undefined}
                  onClick={() => setMobileOpen(false)}
                  className={[
                    'px-4 py-3 text-sm font-medium rounded-md transition-colors duration-150',
                    'focus-visible:ring-2 focus-visible:ring-[var(--accent)]',
                    isActive
                      ? 'text-[var(--accent)] bg-[var(--accent-subtle)]'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)]',
                  ].join(' ')}
                >
                  {label}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
