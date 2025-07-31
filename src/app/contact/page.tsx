import { ContactForm } from '@/components/contact-form';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      <section className="bg-secondary">
        <div className="container mx-auto text-center py-16">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl">Contact Us</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We'd love to hear from you. Let's discuss how we can help your business grow.
          </p>
        </div>
      </section>

      <section>
        <div className="container mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-headline text-3xl font-bold mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 text-primary p-3 rounded-lg flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-muted-foreground">General Inquiries</p>
                  <a href="mailto:hello@markosh.digital" className="text-primary hover:underline">
                    hello@markosh.digital
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                 <div className="bg-primary/10 text-primary p-3 rounded-lg flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-muted-foreground">Mon-Fri from 9am to 5pm</p>
                  <a href="tel:+1234567890" className="text-primary hover:underline">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                 <div className="bg-primary/10 text-primary p-3 rounded-lg flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Office</h3>
                  <p className="text-muted-foreground">123 Tech Avenue, Suite 100</p>
                  <p className="text-muted-foreground">Innovation City, 12345</p>
                </div>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
