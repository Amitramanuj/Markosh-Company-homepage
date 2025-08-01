import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    quote: "Markosh delivered an exceptional team that integrated seamlessly with our own. Their expertise was crucial to our project's success.",
    name: 'Jane Doe',
    title: 'CTO, Tech Solutions Inc.',
    avatar: 'https://placehold.co/100x100.png',
  },
  {
    quote: "The software development services are top-notch. They built a robust and scalable application that exceeded our expectations.",
    name: 'John Smith',
    title: 'CEO, Innovate Co.',
    avatar: 'https://placehold.co/100x100.png',
  },
  {
    quote: "Finding the right talent was a challenge until we partnered with Markosh. Their IT staffing service is efficient and reliable.",
    name: 'Emily White',
    title: 'Head of HR, Future Systems',
    avatar: 'https://placehold.co/100x100.png',
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-secondary">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">Testimonials</h2>
          <p className="mt-2 font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
            What Our Clients Say
          </p>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto mt-12"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="bg-background">
                    <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                      <p className="text-xl font-medium text-foreground">
                        "{testimonial.quote}"
                      </p>
                      <div className="mt-6 flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint="person face" />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
