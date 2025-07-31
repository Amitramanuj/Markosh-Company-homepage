import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Code } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Users,
    title: 'IT Staffing Services',
    description: 'Connect with our pool of vetted, top-tier tech professionals. We find the perfect fit for your team, whether for short-term projects or permanent roles.',
    link: '/services',
  },
  {
    icon: Code,
    title: 'Software Development',
    description: 'From concept to launch, our expert teams build custom web and mobile applications that are scalable, secure, and designed to meet your business objectives.',
    link: '/services',
  },
];

export function ServicesOverview() {
  return (
    <section className="bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">Our Services</h2>
          <p className="mt-2 font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
            What We Do
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We provide comprehensive solutions to power your digital transformation, from sourcing expert talent to building bespoke software.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <Card key={service.title} className="group flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardHeader className="flex-row items-center gap-4">
                  <div className="bg-primary/10 text-primary p-3 rounded-lg">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
              <div className="p-6 pt-0">
                <Button asChild variant="ghost" className="p-0 h-auto text-primary">
                  <Link href={service.link}>
                    Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
