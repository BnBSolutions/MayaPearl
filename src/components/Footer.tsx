import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Footer() {
  return (
    <footer className="bg-card border-t border-gold/20 mt-24">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-border/50">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="font-display text-2xl mb-3">Join Our Community</h3>
            <p className="text-muted-foreground mb-6">
              Subscribe for exclusive offers and timeless style inspiration
            </p>
            <form className="flex gap-3 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1"
              />
              <Button type="submit" variant="default">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Shop */}
          <div>
            <h4 className="font-display text-lg mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/catalog/necklaces" className="text-muted-foreground hover:text-foreground transition-colors">
                  Necklaces
                </Link>
              </li>
              <li>
                <Link to="/catalog/earrings" className="text-muted-foreground hover:text-foreground transition-colors">
                  Earrings
                </Link>
              </li>
              <li>
                <Link to="/catalog/bracelets" className="text-muted-foreground hover:text-foreground transition-colors">
                  Bracelets
                </Link>
              </li>
              <li>
                <Link to="/catalog/rings" className="text-muted-foreground hover:text-foreground transition-colors">
                  Rings
                </Link>
              </li>
              <li>
                <Link to="/catalog/sets" className="text-muted-foreground hover:text-foreground transition-colors">
                  Jewelry Sets
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/lookbook" className="text-muted-foreground hover:text-foreground transition-colors">
                  Lookbook
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-display text-lg mb-4">Help</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Customer Service
                </Link>
              </li>
              <li>
                <Link to="/legal/shipping" className="text-muted-foreground hover:text-foreground transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/legal/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/legal/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow */}
          <div>
            <h4 className="font-display text-lg mb-4">Follow Us</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Stay connected for daily inspiration
            </p>
            <div className="flex gap-3">
              <Button variant="outline" size="icon" className="rounded-full">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2025 Maya Pearl. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/legal/privacy" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link to="/legal/terms" className="hover:text-foreground transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
