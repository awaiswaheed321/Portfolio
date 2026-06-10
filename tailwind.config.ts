import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ground:        'var(--ground)',
        surface:       'var(--surface)',
        'surface-2':   'var(--surface-2)',
        line:          'var(--line)',
        'line-faint':  'var(--line-faint)',
        ink:           'var(--ink)',
        fog:           'var(--fog)',
        mist:          'var(--mist)',
        volt:          'var(--volt)',
        'volt-strong': 'var(--volt-strong)',
        'volt-soft':   'var(--volt-soft)',
        'volt-dim':    'var(--volt-dim)',
        ok:            'var(--ok)',
      },
      fontFamily: {
        sans:    ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono:    ['var(--font-geist-mono)', 'ui-monospace', 'monospace'],
        display: ['var(--font-bricolage)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1100px',
      },
      boxShadow: {
        cta: 'var(--cta-glow)',
      },
    },
  },
  plugins: [],
};

export default config;
