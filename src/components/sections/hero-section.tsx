import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="bg-background pt-8 pb-16 md:pt-16 md:pb-24">
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div className="max-w-xl text-center md:text-left">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            Accelerate Your Growth with Elite Tech Talent
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Markosh connects innovative companies with top-tier developers, designers, and project managers. Build your dream team and deliver outstanding software products, faster.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 md:justify-start">
            <Button asChild size="lg" className="btn-gradient font-semibold shadow-lg">
              <Link href="/contact">
                Hire Talent <MoveRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>
        <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent opacity-10 blur-3xl rounded-full"></div>
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxTb2Z0d2FyZSUyMGRldmVsb3BtZW50fGVufDB8fHx8MTc1Mzk4MzAyNHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Team collaboration"
              width={600}
              height={400}
              className="rounded-xl shadow-2xl z-10"
              data-ai-hint="team collaboration"
            />
        </div>
      </div>
    </section>
  );
}
