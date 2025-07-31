import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Users, Code, Cpu, Workflow, BrainCircuit, Bot, CloudCog, Smartphone } from 'lucide-react';
import Image from 'next/image';

const services = [
  {
    icon: Users,
    title: 'IT Staffing Services',
    description: 'Finding the right technical talent is crucial. We connect you with highly skilled, pre-vetted professionals who can seamlessly integrate into your team.',
    features: [
      'Access to a pre-vetted talent pool',
      'Flexible engagement models',
      'Rapid team augmentation',
      'Cultural and technical fit matching',
    ],
    image: 'https://placehold.co/600x400.png',
    imageHint: 'team meeting',
  },
  {
    icon: Code,
    title: 'Custom Software Development',
    description: 'We turn your ideas into high-quality software. Our full-cycle development services cover everything from strategy and design to development and deployment.',
    features: [
      'End-to-end custom application development',
      'Agile and transparent workflow',
      'Scalable and secure architecture',
      'Ongoing support and maintenance',
    ],
    image: 'https://placehold.co/600x400.png',
    imageHint: 'coding on laptop',
  },
  {
    icon: Smartphone,
    title: 'Mobile & Web Development',
    description: 'We design and build beautiful, responsive, and high-performing websites and mobile applications for all platforms.',
    features: [
      'React & Next.js web applications',
      'Native iOS & Android development',
      'Cross-platform solutions (React Native)',
      'UI/UX design and prototyping',
    ],
    image: 'https://placehold.co/600x400.png',
    imageHint: 'mobile app interface',
  },
  {
    icon: BrainCircuit,
    title: 'AI & Machine Learning',
    description: 'Leverage the power of artificial intelligence to unlock new insights, automate processes, and create intelligent applications that drive business value.',
    features: [
      'Custom AI model development',
      'Natural Language Processing (NLP)',
      'Computer Vision and Image Analysis',
      'Predictive analytics and data science',
    ],
    image: 'https://placehold.co/600x400.png',
    imageHint: 'abstract AI brain',
  },
    {
    icon: Bot,
    title: 'Agentic AI Development',
    description: 'Build sophisticated AI agents that can reason, plan, and execute complex tasks. We create autonomous systems that work alongside your team.',
    features: [
      'Custom AI agent design & implementation',
      'Large Language Model (LLM) integration',
      'Multi-agent systems and simulations',
      'Tool use and function calling for agents',
    ],
    image: 'https://placehold.co/600x400.png',
    imageHint: 'AI robot assistant',
  },
    {
    icon: CloudCog,
    title: 'Cloud & DevOps',
    description: 'Optimize your infrastructure with our cloud and DevOps expertise. We help you build scalable, resilient systems and accelerate your development lifecycle.',
    features: [
      'Cloud migration and strategy (AWS, GCP, Azure)',
      'CI/CD pipeline implementation',
      'Infrastructure as Code (IaC)',
      'Performance monitoring and optimization',
    ],
    image: 'https://placehold.co/600x400.png',
    imageHint: 'cloud infrastructure',
  },
];

const techStack = [
  'React', 'Next.js', 'Node.js', 'Python', 'Genkit', 'LangChain', 'TensorFlow', 'PyTorch', 'Java', 'Go', 'iOS', 'Android', 'AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes'
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

      {services.map((service, index) => (
        <section key={service.title} className={index % 2 === 1 ? 'bg-secondary' : 'bg-background'}>
            <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <div className="flex items-center gap-3 mb-4">
                <service.icon className="w-8 h-8 text-primary" />
                <h2 className="font-headline text-3xl font-bold">{service.title}</h2>
                </div>
                <p className="text-muted-foreground mb-6">
                {service.description}
                </p>
                <ul className="space-y-3">
                {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>{feature}</span>
                    </li>
                ))}
                </ul>
            </div>
            <Image
                src={service.image}
                alt={service.title}
                width={600}
                height={400}
                className={`rounded-lg shadow-md ${index % 2 === 1 ? 'md:order-1' : ''}`}
                data-ai-hint={service.imageHint}
            />
            </div>
        </section>
      ))}

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
                    <p className="text-muted-foreground text-sm">A detailed exploration of project goals, technical requirements, and business objectives to ensure a solid foundation.</p>
                  </CardContent>
                </Card>
              ))}
            </div>
        </div>
      </section>
    </div>
  );
}
