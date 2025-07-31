import Link from 'next/link';
import { Linkedin, Github } from 'lucide-react';

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
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8">
                <path d="M12.954 2.82246L3.45874 15.6033C2.81135 16.4475 2.76866 17.5923 3.35538 18.481L14.2443 31.0238C15.0063 32.0833 16.3752 32.3473 17.4208 31.5543L28.9056 22.106C29.7431 21.4423 30.0335 20.2917 29.5638 19.3135L20.697 2.94635C20.1251 1.76162 18.7364 1.25838 17.5855 1.7335L14.9317 2.7035C14.1565 2.9918 13.5235 2.52989 12.954 2.82246Z" fill="url(#paint0_linear_1_4)"/>
                <defs>
                <linearGradient id="paint0_linear_1_4" x1="16.5" y1="0" x2="16.5" y2="32" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4338CA"/>
                <stop offset="1" stopColor="#6366F1"/>
                </linearGradient>
                </defs>
              </svg>
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
