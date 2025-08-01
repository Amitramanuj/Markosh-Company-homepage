import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { TaskadeWidget } from '@/components/taskade-widget';
import { cn } from '@/lib/utils';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Markosh',
  description:
    'Markosh provides top-tier IT staffing and custom software development services to help your business scale.',
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><path d='M10 85 L10 15 L30 15 L50 55 L70 15 L90 15 L90 85 L75 85 L75 40 L60 75 L40 75 L25 40 L25 85 Z' fill='%232563eb' transform='translate(3,3)'/><path d='M7 82 L7 12 L27 12 L47 52 L67 12 L87 12 L87 82 L72 82 L72 37 L57 72 L37 72 L22 37 L22 82 Z' fill='%237c3aed'/></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={cn(
          'min-h-screen font-body antialiased',
          inter.variable,
          poppins.variable
        )}
        suppressHydrationWarning
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
        <TaskadeWidget />
      </body>
    </html>
  );
}
