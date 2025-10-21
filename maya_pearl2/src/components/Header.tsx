import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Heart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    { name: 'Necklaces', slug: '/catalog/necklaces' },
    { name: 'Earrings', slug: '/catalog/earrings' },
    { name: 'Bracelets', slug: '/catalog/bracelets' },
    { name: 'Rings', slug: '/catalog/rings' },
    { name: 'Sets', slug: '/catalog/sets' },
  ];

  return (
    <>
      {/* Top Notice Bar */}
      <div className="bg-primary text-primary-foreground text-center py-2 px-4 text-sm">
        Free shipping on orders over $200 • 30-day returns
      </div>

      {/* Main Header */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass-blur shadow-md' : 'bg-background'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Mobile Menu */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80">
                <nav className="flex flex-col gap-6 mt-8">
                  <Link 
                    to="/catalog" 
                    className="text-lg font-display"
                    onClick={() => setMobileOpen(false)}
                  >
                    Shop All
                  </Link>
                  {categories.map((cat) => (
                    <Link
                      key={cat.slug}
                      to={cat.slug}
                      className="text-base text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {cat.name}
                    </Link>
                  ))}
                  <div className="border-t pt-6 mt-2">
                    <Link 
                      to="/about" 
                      className="block mb-4 text-base"
                      onClick={() => setMobileOpen(false)}
                    >
                      About
                    </Link>
                    <Link 
                      to="/lookbook" 
                      className="block mb-4 text-base"
                      onClick={() => setMobileOpen(false)}
                    >
                      Lookbook
                    </Link>
                    <Link 
                      to="/contact" 
                      className="block text-base"
                      onClick={() => setMobileOpen(false)}
                    >
                      Contact
                    </Link>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>

            {/* Logo */}
            <Link to="/" className="font-display text-2xl tracking-wide">
              Maya <span className="gold-accent">Pearl</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link to="/catalog" className="text-sm hover:text-primary transition-colors">
                Shop All
              </Link>
              <Link to="/about" className="text-sm hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/lookbook" className="text-sm hover:text-primary transition-colors">
                Lookbook
              </Link>
              <Link to="/contact" className="text-sm hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="hidden sm:flex">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
              <Link to="/cart">
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingBag className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 bg-gold text-gold-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    0
                  </span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Desktop Submenu */}
          <div className="hidden lg:flex justify-center gap-8 pb-4 border-t border-border/50 pt-3">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                to={cat.slug}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </header>
    </>
  );
}
