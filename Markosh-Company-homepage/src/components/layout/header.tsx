'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

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
          <Image src="/markosh-logo.png" alt="Markosh Logo" width={40} height={40} className="object-contain" />
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
                  <Image src="/markosh-logo.png" alt="Markosh Logo" width={40} height={40} className="object-contain" />
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
