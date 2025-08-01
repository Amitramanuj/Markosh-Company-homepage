import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';

export function CtaSection() {
  return (
    <section className="bg-background">
      <div className="container mx-auto">
        <div className="relative isolate overflow-hidden bg-primary/5 px-6 py-20 text-center shadow-lg rounded-2xl sm:px-16">
          <div className="absolute -top-24 left-1/2 -z-10 h-[30rem] w-[50rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-primary to-accent opacity-20 blur-3xl" aria-hidden="true"></div>
          <h2 className="font-headline mx-auto max-w-2xl text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Ready to Build Your Future?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
            Let's discuss how our IT staffing and software development expertise can help you achieve your business goals.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg" className="btn-gradient font-semibold shadow-lg">
              <Link href="/contact">
                Get a Free Consultation
                <MoveRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
