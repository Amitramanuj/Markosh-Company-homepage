'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/industries', label: 'Industries' },
  { href: '/resources', label: 'Resources' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-sm shadow-md'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" passHref>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8">
            <path d="M12.954 2.82246L3.45874 15.6033C2.81135 16.4475 2.76866 17.5923 3.35538 18.481L14.2443 31.0238C15.0063 32.0833 16.3752 32.3473 17.4208 31.5543L28.9056 22.106C29.7431 21.4423 30.0335 20.2917 29.5638 19.3135L20.697 2.94635C20.1251 1.76162 18.7364 1.25838 17.5855 1.7335L14.9317 2.7035C14.1565 2.9918 13.5235 2.52989 12.954 2.82246Z" fill="url(#paint0_linear_1_2)"/>
            <defs>
            <linearGradient id="paint0_linear_1_2" x1="16.5" y1="0" x2="16.5" y2="32" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4338CA"/>
            <stop offset="1" stopColor="#6366F1"/>
            </linearGradient>
            </defs>
          </svg>
          <span className="text-2xl font-bold font-headline text-gray-800 dark:text-white">
            Markosh
          </span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-medium text-muted-foreground transition-colors hover:text-primary',
                pathname === link.href && 'text-primary'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <Button asChild className="btn-gradient font-semibold">
            <Link href="/contact">Get Free Consulting</Link>
          </Button>
        </div>
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full bg-background">
              <div className="flex flex-col items-center justify-center h-full">
                <Link
                  href="/"
                  className="mb-8 flex items-center gap-2"
                  onClick={closeMobileMenu}
                >
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8">
                    <path d="M12.954 2.82246L3.45874 15.6033C2.81135 16.4475 2.76866 17.5923 3.35538 18.481L14.2443 31.0238C15.0063 32.0833 16.3752 32.3473 17.4208 31.5543L28.9056 22.106C29.7431 21.4423 30.0335 20.2917 29.5638 19.3135L20.697 2.94635C20.1251 1.76162 18.7364 1.25838 17.5855 1.7335L14.9317 2.7035C14.1565 2.9918 13.5235 2.52989 12.954 2.82246Z" fill="url(#paint0_linear_1_3)"/>
                    <defs>
                    <linearGradient id="paint0_linear_1_3" x1="16.5" y1="0" x2="16.5" y2="32" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#4338CA"/>
                    <stop offset="1" stopColor="#6366F1"/>
                    </linearGradient>
                    </defs>
                  </svg>
                  <span className="text-2xl font-bold font-headline">Markosh</span>
                </Link>
                <nav className="flex flex-col items-center gap-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMobileMenu}
                      className={cn(
                        'text-lg font-medium text-muted-foreground transition-colors hover:text-primary',
                        pathname === link.href && 'text-primary'
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <Button asChild className="btn-gradient mt-8 font-semibold" size="lg" onClick={closeMobileMenu}>
                  <Link href="/contact">Get Free Consulting</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
