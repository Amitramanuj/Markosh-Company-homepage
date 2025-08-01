import { Badge } from '@/components/ui/badge';

const industries = [
  'E-commerce',
  'SaaS',
  'Healthcare',
  'Finance',
  'Education',
  'Manufacturing',
  'FinTech',
  'Logistics',
];

export function IndustriesSection() {
  return (
    <section className="bg-background">
      <div className="container mx-auto text-center">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">Our Expertise</h2>
        <p className="mt-2 font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
          Industries We Serve
        </p>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          We have a proven track record of success across a wide range of industries, delivering tailored solutions that meet unique sector challenges.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {industries.map((industry) => (
            <Badge key={industry} variant="outline" className="text-lg px-6 py-2 rounded-full border-primary/20 bg-primary/5 text-primary">
              {industry}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
