import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Sparkles, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ProductCard';
import { Product } from '@/models/product';
import productsData from '@/data/products.json';
import categoriesData from '@/data/categories.json';
import heroImage from '@/assets/hero-pearl-necklace.jpg';
import categoryNecklaces from '@/assets/category-necklaces.jpg';
import categoryEarrings from '@/assets/category-earrings.jpg';
import categoryBracelets from '@/assets/category-bracelets.jpg';
import categoryRings from '@/assets/category-rings.jpg';
import lookbook1 from '@/assets/lookbook-1.jpg';
import lookbook2 from '@/assets/lookbook-2.jpg';
import lookbook3 from '@/assets/lookbook-3.jpg';
import lookbook4 from '@/assets/lookbook-4.jpg';
import lookbook5 from '@/assets/lookbook-5.jpg';
import lookbook6 from '@/assets/lookbook-6.jpg';

const products = productsData as Product[];

const categoryImages: Record<string, string> = {
  'necklaces': categoryNecklaces,
  'earrings': categoryEarrings,
  'bracelets': categoryBracelets,
  'rings': categoryRings,
};

export default function Home() {
  const bestsellers = products.filter((p) => 
    p.badges?.includes('bestseller')
  ).slice(0, 4);

  const featuredCategories = categoriesData.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="font-display text-balance">
                  Timeless Elegance in Every Detail
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Discover handcrafted jewelry that celebrates your unique story. 
                  From lustrous pearls to refined gold pieces, each creation embodies 
                  enduring beauty and exceptional craftsmanship.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="group" asChild>
                  <Link to="/catalog">
                    Explore Collection
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/lookbook">
                    View Lookbook
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative animate-scale-in">
              <div className="aspect-[3/4] rounded-hero overflow-hidden shadow-luxury">
                <img
                  src={heroImage}
                  alt="Elegant pearl necklace on display"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-card shadow-gold-glow border border-gold/20 max-w-xs">
                <p className="text-sm text-muted-foreground mb-1">From our collection</p>
                <h3 className="font-display text-xl">Classic Pearl Necklace</h3>
                <p className="text-lg font-display gold-accent mt-2">$289</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 border-y border-border/50 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4 justify-center">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Package className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Free Shipping</h4>
                <p className="text-sm text-muted-foreground">On orders over $200</p>
              </div>
            </div>

            <div className="flex items-center gap-4 justify-center">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">30-Day Returns</h4>
                <p className="text-sm text-muted-foreground">Hassle-free policy</p>
              </div>
            </div>

            <div className="flex items-center gap-4 justify-center">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Quality Guaranteed</h4>
                <p className="text-sm text-muted-foreground">Authenticated materials</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display mb-4">Shop by Category</h2>
            <p className="text-muted-foreground text-lg">
              Find pieces that complement your style
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCategories.map((category, index) => (
              <Link
                key={category.slug}
                to={`/catalog/${category.slug}`}
                className="group block animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-square rounded-card overflow-hidden bg-secondary mb-4">
                  <img
                    src={categoryImages[category.slug] || categoryNecklaces}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 border-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-card" />
                </div>
                <h3 className="font-display text-xl mb-1 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {category.productCount} pieces
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-display mb-4">Customer Favorites</h2>
              <p className="text-muted-foreground text-lg">
                Our most beloved pieces, chosen by you
              </p>
            </div>
            <Button variant="outline" asChild className="hidden sm:flex">
              <Link to="/catalog">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Button variant="outline" asChild>
              <Link to="/catalog">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Instagram Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display mb-4">From Our Community</h2>
            <p className="text-muted-foreground text-lg mb-6">
              See how our pieces shine in everyday moments
            </p>
            <Button variant="outline" size="lg">
              Follow @pearlelegance
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[lookbook1, lookbook2, lookbook3, lookbook4, lookbook5, lookbook6].map((img, i) => (
              <Link
                key={i}
                to="/lookbook"
                className="group relative aspect-square rounded-lg overflow-hidden"
              >
                <img
                  src={img}
                  alt={`Lifestyle photo ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-foreground/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
