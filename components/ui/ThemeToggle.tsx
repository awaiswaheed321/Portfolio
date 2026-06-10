'use client';

import { Moon, Sun } from '@/components/ui/Icons';

/**
 * Theme toggle with zero hydration state: the pre-paint script in
 * layout.tsx resolves the initial `dark` class, and the visible icon
 * is chosen purely by CSS (`dark:` variants), so server and client
 * always render the same markup.
 */
export default function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const dark = root.classList.toggle('dark');
    try {
      localStorage.theme = dark ? 'dark' : 'light';
    } catch {
      /* private mode — preference just won't persist */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light/dark theme"
      className="flex h-9 w-9 items-center justify-center rounded-full text-fog
                 hover:text-ink hover:bg-surface-2 transition-colors duration-200"
    >
      <span className="hidden dark:inline-flex">
        <Sun size={16} />
      </span>
      <span className="inline-flex dark:hidden">
        <Moon size={16} />
      </span>
    </button>
  );
}
