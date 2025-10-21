import { Link } from 'react-router-dom';
import { Heart, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/models/product';
import { cn } from '@/lib/utils';
import productPearlNecklace from '@/assets/product-pearl-necklace.jpg';
import productGoldHoops from '@/assets/product-gold-hoops.jpg';
import productPearlDrops from '@/assets/product-pearl-drops.jpg';
import productLayeredGold from '@/assets/product-layered-gold.jpg';
import productPearlBracelet from '@/assets/product-pearl-bracelet.jpg';
import productMinimalRing from '@/assets/product-minimal-ring.jpg';

const productImages: Record<string, string> = {
  'pearl-classic-necklace': productPearlNecklace,
  'gold-hoop-earrings': productGoldHoops,
  'pearl-drop-earrings': productPearlDrops,
  'layered-gold-necklace': productLayeredGold,
  'pearl-tennis-bracelet': productPearlBracelet,
  'minimalist-gold-ring': productMinimalRing,
  'pearl-stud-earrings': productGoldHoops,
  'gold-chain-bracelet': productPearlBracelet,
  'pearl-pendant-necklace': productPearlNecklace,
};

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const formatPrice = (amount: number) => `$${amount}`;

  return (
    <div className={cn("group relative", className)}>
      <Link to={`/product/${product.slug}`}>
        <div className="relative aspect-[4/5] rounded-card overflow-hidden bg-secondary mb-4">
          {/* Image */}
          <img
            src={productImages[product.id] || product.images[0]?.src || '/placeholder.svg'}
            alt={product.images[0]?.alt || product.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Badges */}
          {product.badges && product.badges.length > 0 && (
            <div className="absolute top-3 left-3 flex flex-col gap-2">
              {product.badges.map((badge) => (
                <Badge 
                  key={badge} 
                  variant={badge === 'bestseller' ? 'default' : 'secondary'}
                  className="capitalize"
                >
                  {badge}
                </Badge>
              ))}
            </div>
          )}

          {/* Quick Actions - Show on Hover */}
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col gap-2">
            <Button
              size="icon"
              variant="secondary"
              className="rounded-full bg-card shadow-md"
              onClick={(e) => {
                e.preventDefault();
                // Add to wishlist logic
              }}
            >
              <Heart className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              variant="secondary"
              className="rounded-full bg-card shadow-md"
              onClick={(e) => {
                e.preventDefault();
                // Quick add to cart logic
              }}
            >
              <ShoppingBag className="h-4 w-4" />
            </Button>
          </div>

          {/* Hover Border Effect */}
          <div className="absolute inset-0 border-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-card pointer-events-none" />
        </div>

        {/* Product Info */}
        <div className="space-y-1">
          <h3 className="font-medium text-base line-clamp-1 group-hover:text-primary transition-colors">
            {product.title}
          </h3>
          
          {product.subtitle && (
            <p className="text-sm text-muted-foreground line-clamp-1">
              {product.subtitle}
            </p>
          )}

          <div className="flex items-baseline gap-2 pt-1">
            <span className="font-display text-lg">
              {formatPrice(product.price.amount)}
            </span>
            {product.compareAtPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {formatPrice(product.compareAtPrice.amount)}
              </span>
            )}
          </div>

          {/* Rating */}
          {product.rating && (
            <div className="flex items-center gap-2 text-sm">
              <div className="flex items-center gold-accent">
                {'★'.repeat(Math.floor(product.rating.value))}
                {'☆'.repeat(5 - Math.floor(product.rating.value))}
              </div>
              <span className="text-muted-foreground">
                ({product.rating.count})
              </span>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}
