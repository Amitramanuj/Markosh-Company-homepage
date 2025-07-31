import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { ShoppingCart, Cloud, HeartPulse, Banknote, GraduationCap, Factory } from 'lucide-react';

const industries = [
  {
    name: 'E-commerce',
    description: 'Scalable and secure online retail solutions to boost your sales.',
    icon: ShoppingCart,
    image: 'https://images.unsplash.com/photo-1449247666642-264389f5f5b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxFLWNvbW1lcmNlfGVufDB8fHx8MTc1Mzk4MzA5OXww&ixlib=rb-4.1.0&q=80&w=1080',
    hint: 'online shopping'
  },
  {
    name: 'SaaS',
    description: 'Building robust and innovative Software-as-a-Service platforms.',
    icon: Cloud,
    image: 'https://images.unsplash.com/photo-1642132652859-3ef5a1048fd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxTYWFzfGVufDB8fHx8MTc1Mzk4MzE2OHww&ixlib=rb-4.1.0&q=80&w=1080',
    hint: 'cloud software'
  },
  {
    name: 'Healthcare',
    description: 'HIPAA-compliant software for the modern healthcare industry.',
    icon: HeartPulse,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxIZWFsdGhjYXJlfGVufDB8fHx8MTc1Mzk4MzIxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    hint: 'medical technology'
  },
  {
    name: 'Finance',
    description: 'Secure and reliable financial technology (FinTech) solutions.',
    icon: Banknote,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxGaW5hbmNlfGVufDB8fHx8MTc1Mzk4MzI0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    hint: 'financial chart'
  },
  {
    name: 'Education',
    description: 'Innovative EdTech platforms for enhanced learning experiences.',
    icon: GraduationCap,
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxNXx8RWR1Y2F0aW9ufGVufDB8fHx8MTc1Mzk4MzI1OXww&ixlib=rb-4.1.0&q=80&w=1080',
    hint: 'online learning'
  },
  {
    name: 'Manufacturing',
    description: 'Custom software to optimize manufacturing processes and supply chains.',
    icon: Factory,
    image: 'https://placehold.co/600x400.png',
    hint: 'factory automation'
  },
];

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-secondary">
        <div className="container mx-auto text-center py-16">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl">Industries We Serve</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We combine our technology expertise with deep industry knowledge to deliver solutions that drive real business value.
          </p>
        </div>
      </section>

      <section>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <Card key={industry.name} className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardHeader className="p-0">
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                    data-ai-hint={industry.hint}
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <industry.icon className="w-6 h-6 text-primary" />
                    <CardTitle className="font-headline text-xl">{industry.name}</CardTitle>
                  </div>
                  <p className="text-muted-foreground">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
