import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Lightbulb, Gem, Handshake } from 'lucide-react';

const teamMembers = [
  { name: 'Alex Johnson', title: 'Founder & CEO', avatar: 'https://placehold.co/100x100.png' },
  { name: 'Samantha Lee', title: 'Head of Engineering', avatar: 'https://placehold.co/100x100.png' },
  { name: 'Michael Chen', title: 'Director of Talent', avatar: 'https://placehold.co/100x100.png' },
  { name: 'Jessica Rodriguez', title: 'Lead Product Designer', avatar: 'https://placehold.co/100x100.png' },
];

const values = [
    { icon: Lightbulb, title: 'Innovation', description: 'We constantly seek better ways to solve problems and deliver value.' },
    { icon: Gem, title: 'Quality', description: 'We are committed to excellence and the highest standards in everything we do.' },
    { icon: Handshake, title: 'Partnership', description: 'We build lasting relationships based on trust, transparency, and mutual success.' },
]

export default function AboutPage() {
  return (
    <>
      <section className="bg-secondary">
        <div className="container mx-auto text-center py-16">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl">About Markosh</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We are a team of passionate technologists and talent specialists dedicated to helping businesses thrive in the digital age.
          </p>
        </div>
      </section>

      <section>
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-headline text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-muted-foreground text-lg mb-4">
              Founded in 2025, Markosh was born from a desire to bridge the gap between exceptional tech talent and the companies that need them most. We saw the challenges businesses faced in building and scaling their technology teams and set out to create a better way.
            </p>
            <p className="text-muted-foreground text-lg">
              Today, we are a trusted partner to startups and enterprises alike, providing both the people and the technical expertise to turn ambitious visions into reality.
            </p>
          </div>
          <Image
            src="https://placehold.co/600x450.png"
            alt="Our team working"
            width={600}
            height={450}
            className="rounded-lg shadow-md"
            data-ai-hint="diverse team working"
          />
        </div>
      </section>

      <section className="bg-secondary">
        <div className="container mx-auto text-center">
          <h2 className="font-headline text-3xl font-bold">Our Values</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map(value => (
                <div key={value.title}>
                    <div className="flex items-center justify-center mx-auto h-16 w-16 rounded-full bg-primary/10 text-primary">
                        <value.icon className="w-8 h-8" />
                    </div>
                    <h3 className="font-headline text-xl mt-4">{value.title}</h3>
                    <p className="text-muted-foreground mt-2">{value.description}</p>
                </div>
            ))}
          </div>
        </div>
      </section>
      
      <section>
        <div className="container mx-auto text-center">
          <h2 className="font-headline text-3xl font-bold">Meet the Team</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            The passionate individuals leading Markosh forward.
          </p>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="flex flex-col items-center">
                <Avatar className="w-24 h-24 mb-4">
                  <AvatarImage src={member.avatar} alt={member.name} data-ai-hint="professional headshot"/>
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-primary">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
