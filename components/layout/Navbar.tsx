'use client';

import { useEffect, useState } from 'react';
import ThemeToggle from '@/components/ui/ThemeToggle';
import { contact } from '@/lib/data';

const NAV_LINKS = [
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll spy: highlight the section currently in the upper viewport
  useEffect(() => {
    const sections = NAV_LINKS
      .map(({ href }) => document.getElementById(href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-20% 0px -65% 0px' }
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={[
        'fixed top-0 inset-x-0 z-50 transition-[border-color,background-color] duration-300',
        'border-b',
        scrolled
          ? 'bg-[color-mix(in_srgb,var(--ground)_88%,transparent)] backdrop-blur-md border-line-faint'
          : 'bg-transparent border-transparent',
      ].join(' ')}
    >
      <div aria-hidden className="spectrum-strip h-[2px]" />
      <div className="mx-auto max-w-content px-6 md:px-10 lg:px-12">
        <div className="flex h-16 items-center justify-between gap-2">
          <a
            href="#top"
            className="font-display font-semibold tracking-tight text-ink hover:text-volt
                       transition-colors duration-200 whitespace-nowrap"
          >
            Awais Waheed
          </a>

          <nav aria-label="Main navigation" className="flex items-center gap-1 md:gap-2">
            {NAV_LINKS.map(({ label, href }, i) => (
              <a
                key={href}
                href={href}
                aria-current={active === href.slice(1) ? 'true' : undefined}
                className={[
                  // On mobile only Contact survives; full set from md up
                  i === NAV_LINKS.length - 1 ? 'inline-block' : 'hidden md:inline-block',
                  'px-3 py-2 font-mono text-[13px] transition-colors duration-200',
                  active === href.slice(1)
                    ? 'text-volt'
                    : 'text-fog hover:text-ink',
                ].join(' ')}
              >
                {label}
              </a>
            ))}
            <a
              href={contact.resume}
              download
              className="mx-1 inline-block rounded-[6px] border border-line px-4 py-1.5
                         font-mono text-[13px] text-ink whitespace-nowrap
                         hover:border-volt hover:text-volt
                         transition-colors duration-200"
            >
              Résumé
            </a>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
