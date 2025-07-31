import Link from 'next/link';
import { CodeXml, X, Linkedin, Github } from 'lucide-react';

const footerLinks = {
  company: [
    { href: '/about', label: 'About Us' },
    { href: '/resources', label: 'Resources' },
    { href: '/contact', label: 'Careers' },
  ],
  services: [
    { href: '/services', label: 'IT Staffing' },
    { href: '/services', label: 'Software Development' },
  ],
};

const socialLinks = [
  { href: '#', icon: X },
  { href: '#', icon: Linkedin },
  { href: '#', icon: Github },
];

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <CodeXml className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold font-headline">Markosh</span>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              Empowering businesses with top-tier IT talent and innovative software solutions.
            </p>
          </div>

          <div>
            <h3 className="font-headline font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-headline font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                   <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row items-center justify-between">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Markosh Digital. All rights reserved.
          </p>
          <div className="flex items-center gap-4 mt-4 sm:mt-0">
            {socialLinks.map((social, index) => (
              <Link key={index} href={social.href} className="text-muted-foreground hover:text-primary transition-colors">
                  <social.icon className="w-5 h-5" />
                  <span className="sr-only">Social Link</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
