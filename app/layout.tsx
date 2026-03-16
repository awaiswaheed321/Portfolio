import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Providers } from './providers';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Awais Waheed — Senior Backend Engineer',
  description:
    'Senior Backend Engineer with 6+ years building high-throughput distributed systems and event-driven architectures. Currently processing 1M+ messages/day at 7-Eleven\'s delivery platform.',
  keywords: [
    'Backend Engineer',
    'Java',
    'Spring Boot',
    'AWS',
    'Distributed Systems',
    'Microservices',
    'Awais Waheed',
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
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
