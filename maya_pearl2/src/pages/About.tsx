import { Sparkles, Heart, Award, Leaf } from 'lucide-react';
import craftsmanshipImage from '@/assets/about-craftsmanship.jpg';

export default function About() {
  const values = [
    {
      icon: Sparkles,
      title: 'Exceptional Quality',
      description:
        'Every piece is crafted from premium materials including 14k gold-plated sterling silver, lustrous freshwater pearls, and brilliant cubic zirconia.',
    },
    {
      icon: Heart,
      title: 'Timeless Design',
      description:
        'Our designs blend classic elegance with contemporary aesthetics, creating jewelry that transcends trends and becomes a cherished part of your story.',
    },
    {
      icon: Award,
      title: 'Expert Craftsmanship',
      description:
        'Each piece is meticulously crafted by skilled artisans who bring decades of experience and passion to their work.',
    },
    {
      icon: Leaf,
      title: 'Sustainable Practices',
      description:
        'We are committed to responsible sourcing and ethical production, ensuring beauty that doesn\'t compromise our planet.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-primary/5 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display mb-6">Our Story</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Founded on the belief that every woman deserves to feel extraordinary, 
              Maya Pearl creates jewelry that celebrates life's precious moments 
              and everyday beauty.
            </p>
          </div>
        </div>
      </section>

      {/* Image + Text Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-display text-3xl mb-6">
                Crafted with Purpose
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Our journey began with a simple vision: to make luxury jewelry 
                  accessible without compromising on quality or elegance. Each piece 
                  in our collection is thoughtfully designed to be both beautiful and 
                  meaningful.
                </p>
                <p>
                  We believe that jewelry is more than adornment—it's a form of 
                  self-expression, a confidence booster, and often a cherished heirloom 
                  that carries memories across generations.
                </p>
                <p>
                  From selecting the finest freshwater pearls to perfecting each 
                  gold-plated detail, we pour our passion into every step of the 
                  creation process. The result is jewelry that you'll treasure for 
                  years to come.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-[4/5] rounded-hero overflow-hidden shadow-luxury">
                <img
                  src={craftsmanshipImage}
                  alt="Artisan crafting jewelry"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl mb-4">What We Stand For</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our values guide everything we do, from design to delivery
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-card p-8 rounded-card border border-gold/10 hover:border-gold/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-xl mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl mb-8 text-center">
              Premium Materials
            </h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-gold pl-6">
                <h3 className="font-display text-xl mb-2">Freshwater Pearls</h3>
                <p className="text-muted-foreground">
                  Sourced from sustainable farms, our lustrous pearls are selected 
                  for their exceptional quality, perfect shape, and radiant glow. 
                  Each pearl tells a story of nature's artistry.
                </p>
              </div>

              <div className="border-l-4 border-gold pl-6">
                <h3 className="font-display text-xl mb-2">
                  14k Gold-Plated Sterling Silver
                </h3>
                <p className="text-muted-foreground">
                  Our pieces feature a substantial layer of 14k gold over premium 
                  sterling silver, ensuring lasting brilliance and durability. This 
                  combination offers the luxury look of solid gold at an accessible price.
                </p>
              </div>

              <div className="border-l-4 border-gold pl-6">
                <h3 className="font-display text-xl mb-2">Cubic Zirconia</h3>
                <p className="text-muted-foreground">
                  We use only the finest AAA-grade cubic zirconia, cut with precision 
                  to achieve maximum brilliance and fire. These gems offer diamond-like 
                  sparkle with ethical sourcing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-gold/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl mb-6">
              Experience Timeless Elegance
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Discover jewelry that celebrates your unique beauty and style
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/catalog"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
              >
                Shop Collection
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
