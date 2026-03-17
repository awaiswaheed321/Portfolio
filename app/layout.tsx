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
    'Senior Backend Engineer with 6+ years building high-throughput distributed systems, event-driven architectures, and production microservices in Java on AWS.',
  keywords: [
    'Backend Engineer', 'Java', 'Spring Boot', 'AWS',
    'Distributed Systems', 'Microservices', 'Awais Waheed',
  ],
  openGraph: {
    title: 'Awais Waheed — Senior Backend Engineer',
    description: 'Senior Backend Engineer specializing in distributed systems, AWS, and event-driven architectures.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'Awais Waheed — Senior Backend Engineer',
    description: 'Senior Backend Engineer specializing in distributed systems, AWS, and event-driven architectures.',
  },
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
