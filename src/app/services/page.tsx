import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Users, Code, Cpu, Workflow } from 'lucide-react';
import Image from 'next/image';

const itStaffingFeatures = [
  'Access to a pre-vetted talent pool',
  'Flexible engagement models',
  'Rapid team augmentation',
  'Cultural and technical fit matching',
];

const softwareDevFeatures = [
  'End-to-end custom application development',
  'Agile and transparent workflow',
  'Scalable and secure architecture',
  'Ongoing support and maintenance',
];

const techStack = [
  'React', 'Next.js', 'Node.js', 'Python', 'Java', 'Go', 'iOS', 'Android', 'AWS', 'GCP', 'Azure'
];

export default function ServicesPage() {
  return (
    <div className="bg-background">
      <section className="bg-secondary">
        <div className="container mx-auto text-center py-16">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl">Our Services</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Tailored solutions to meet your unique business needs, from finding the right talent to building world-class software.
          </p>
        </div>
      </section>

      <section>
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-8 h-8 text-primary" />
              <h2 className="font-headline text-3xl font-bold">IT Staffing Services</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Finding the right technical talent is crucial for success. We specialize in connecting you with highly skilled, pre-vetted professionals who can seamlessly integrate into your team and contribute from day one.
            </p>
            <ul className="space-y-3">
              {itStaffingFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <Image
            src="https://placehold.co/600x400.png"
            alt="IT Staffing"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
            data-ai-hint="team meeting"
          />
        </div>
      </section>

      <section className="bg-secondary">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
           <Image
            src="https://placehold.co/600x400.png"
            alt="Software Development"
            width={600}
            height={400}
            className="rounded-lg shadow-md md:order-1"
            data-ai-hint="coding on laptop"
          />
          <div className="md:order-2">
            <div className="flex items-center gap-3 mb-4">
              <Code className="w-8 h-8 text-primary" />
              <h2 className="font-headline text-3xl font-bold">Software Development</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              We turn your ideas into high-quality software. Our full-cycle development services cover everything from initial strategy and design to development, testing, and deployment.
            </p>
            <ul className="space-y-3">
              {softwareDevFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <Cpu className="w-10 h-10 mx-auto text-primary" />
            <h2 className="mt-4 font-headline text-3xl font-extrabold tracking-tight">Our Technology Stack</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              We work with a wide range of modern technologies to build robust and scalable solutions.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {techStack.map(tag => (
                <span key={tag} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="container mx-auto text-center">
            <Workflow className="w-10 h-10 mx-auto text-primary" />
            <h2 className="mt-4 font-headline text-3xl font-extrabold tracking-tight">Our Service Process</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              A transparent and collaborative process designed for success.
            </p>
            <div className="mt-12 grid md:grid-cols-4 gap-8">
              {['Discovery', 'Strategy', 'Execution', 'Launch & Support'].map((step, i) => (
                <Card key={step} className="text-left bg-background">
                  <CardHeader>
                    <CardTitle>
                      <span className="text-sm font-bold text-primary">Step {i + 1}</span>
                      <p className="font-headline text-lg mt-1">{step}</p>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">Placeholder description for the {step.toLowerCase()} phase of our process.</p>
                  </CardContent>
                </Card>
              ))}
            </div>
        </div>
      </section>
    </div>
  );
}
