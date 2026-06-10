import type { Metadata, Viewport } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Bricolage_Grotesque } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { siteUrl } from '@/lib/data';
import './globals.css';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-bricolage',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Awais Waheed — Senior Backend Engineer',
  description:
    'Senior Backend Engineer — Java, AWS, event-driven systems built to fail loudly, ' +
    'recover fast, and never drop data silently. 7-Eleven delivery platform; previously Walmart via Confiz.',
  keywords: [
    'Awais Waheed', 'Backend Engineer', 'Distributed Systems', 'Event-Driven Architecture',
    'Java', 'Spring Boot', 'AWS', 'Kinesis', 'Microservices',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Awais Waheed — Senior Backend Engineer',
    description:
      'I build systems that fail loudly — and rarely. Java, AWS, event-driven pipelines.',
    url: siteUrl,
    siteName: 'Awais Waheed',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Awais Waheed — Senior Backend Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Awais Waheed — Senior Backend Engineer',
    description:
      'I build systems that fail loudly — and rarely. Java, AWS, event-driven pipelines.',
    images: ['/og.png'],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F5F7FC' },
    { media: '(prefers-color-scheme: dark)', color: '#0B0D15' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      // The inline script below sets `js` + `dark` classes pre-hydration
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable} ${bricolage.variable}`}
    >
      <body>
        {/* Pre-paint: gate animations behind .js and resolve the theme
            (stored preference, falling back to OS) to avoid FOUC */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){var c=document.documentElement.classList;c.add('js');try{var t=localStorage.theme;var d=t?t==='dark':matchMedia('(prefers-color-scheme: dark)').matches;if(d)c.add('dark');}catch(e){}})()",
          }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
