import { Target, Zap, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Expert Talent Network',
    description: 'Access a curated network of top-tier IT professionals with proven track records in their respective fields.',
  },
  {
    icon: Zap,
    title: 'Agile & Efficient Process',
    description: 'Our streamlined processes ensure rapid team integration and project kick-offs, saving you time and resources.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality & Reliability',
    description: 'We are committed to delivering high-quality solutions and fostering long-term partnerships built on trust and results.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-secondary">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">Why Markosh</h2>
          <p className="mt-2 font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
            Your Strategic Partner for Growth
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We go beyond simple staffing. We integrate with your team to provide strategic value, ensuring your projects succeed and your business thrives.
          </p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="flex items-center justify-center mx-auto h-16 w-16 rounded-full bg-primary/10 text-primary">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="mt-6 font-headline text-lg font-medium">{feature.title}</h3>
              <p className="mt-2 text-base text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
