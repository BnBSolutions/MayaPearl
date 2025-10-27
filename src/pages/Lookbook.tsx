import lookbook1 from '@/assets/lookbook-1.jpg';
import lookbook2 from '@/assets/lookbook-2.jpg';
import lookbook3 from '@/assets/lookbook-3.jpg';
import lookbook4 from '@/assets/lookbook-4.jpg';
import lookbook5 from '@/assets/lookbook-5.jpg';
import lookbook6 from '@/assets/lookbook-6.jpg';

export default function Lookbook() {
  const imageUrls = [
    lookbook1, lookbook2, lookbook3, lookbook4, lookbook5, lookbook6,
    lookbook1, lookbook2, lookbook3, lookbook4, lookbook5, lookbook6,
  ];
  
  const images = imageUrls.map((src, i) => ({
    id: i + 1,
    title: `Collection ${i + 1}`,
    src,
  }));

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-background via-primary/5 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="font-display mb-4">Lookbook</h1>
            <p className="text-lg text-muted-foreground">
              Explore our latest collections and discover how our pieces 
              complement every style and occasion
            </p>
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={image.id}
                className={`group relative overflow-hidden rounded-card animate-slide-up ${
                  index % 3 === 0 ? 'md:col-span-2 lg:col-span-1' : ''
                } ${index % 7 === 0 ? 'lg:row-span-2' : ''}`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="aspect-[4/5] bg-secondary">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-display text-2xl mb-2">{image.title}</h3>
                    <p className="text-sm opacity-90">Explore the collection</p>
                  </div>
                </div>
                <div className="absolute inset-0 border-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-card" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl mb-4">
              Ready to Find Your Perfect Piece?
            </h2>
            <p className="text-muted-foreground mb-8">
              Browse our complete collection and discover jewelry that speaks to you
            </p>
            <a
              href="/catalog"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
            >
              Shop Collection
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
