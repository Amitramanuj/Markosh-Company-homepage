import Link from 'next/link';
import { Linkedin, Github } from 'lucide-react';
import Image from 'next/image';

const XLogo = () => (
    <svg
      className="w-5 h-5"
      viewBox="0 0 1200 1227"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6904H306.615L611.412 515.685L658.88 583.579L1055.08 1150.31H892.476L569.165 687.854V687.828Z"
        fill="currentColor"
      />
    </svg>
  );

const footerLinks = {
  company: [
    { href: '/about', label: 'About Us' },
    { href: '/resources', label: 'Resources' },
    { href: '/contact', label: 'Careers' },
  ],
  services: [
    { href: '/services', label: 'IT Staffing' },
    { href: '/services', label: 'Software Development' },
    { href: '/services', label: 'AI & ML Solutions' },
    { href: '/services', label: 'Cloud & DevOps' },
  ],
};

const socialLinks = [
  { href: '#', icon: XLogo },
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
              <Image src="/markosh-logo.png" alt="Markosh Logo" width={32} height={32} className="object-contain" />
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
            &copy; {new Date().getFullYear()} Markosh PVT LTD. All rights reserved.
          </p>
          <div className="flex items-center gap-4 mt-4 sm:mt-0">
            {socialLinks.map((social, index) => (
              <Link key={index} href={social.href} className="text-muted-foreground hover:text-primary transition-colors">
                  <social.icon />
                  <span className="sr-only">Social Link</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
