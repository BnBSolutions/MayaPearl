import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, ShoppingBag, ChevronRight, Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ProductCard } from '@/components/ProductCard';
import { Product } from '@/models/product';
import productsData from '@/data/products.json';
import productPearlNecklace from '@/assets/product-pearl-necklace.jpg';
import productGoldHoops from '@/assets/product-gold-hoops.jpg';
import productPearlDrops from '@/assets/product-pearl-drops.jpg';
import productLayeredGold from '@/assets/product-layered-gold.jpg';
import productPearlBracelet from '@/assets/product-pearl-bracelet.jpg';
import productMinimalRing from '@/assets/product-minimal-ring.jpg';

const products = productsData as Product[];

const productImages: Record<string, string> = {
  'pearl-classic-necklace': productPearlNecklace,
  'gold-hoop-earrings': productGoldHoops,
  'pearl-drop-earrings': productPearlDrops,
  'layered-gold-necklace': productLayeredGold,
  'pearl-tennis-bracelet': productPearlBracelet,
  'minimalist-gold-ring': productMinimalRing,
};

export default function ProductDetail() {
  const { slug } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string>();

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl mb-4">Product Not Found</h1>
          <Button asChild>
            <Link to="/catalog">Back to Catalog</Link>
          </Button>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const formatPrice = (amount: number) => `$${amount}`;

  return (
    <div className="min-h-screen">
      {/* Breadcrumbs */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/catalog" className="hover:text-foreground">
              Shop
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">{product.title}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] rounded-hero overflow-hidden bg-secondary">
              <img
                src={productImages[product.id] || product.images[0]?.src || '/placeholder.svg'}
                alt={product.images[0]?.alt || product.title}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.slice(1).map((img, idx) => (
                  <button
                    key={idx}
                    className="aspect-square rounded-lg overflow-hidden bg-secondary hover:opacity-80 transition-opacity"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Badges */}
            {product.badges && product.badges.length > 0 && (
              <div className="flex gap-2">
                {product.badges.map((badge) => (
                  <Badge key={badge} variant="secondary" className="capitalize">
                    {badge}
                  </Badge>
                ))}
              </div>
            )}

            {/* Title & Subtitle */}
            <div>
              <h1 className="font-display text-4xl mb-2">{product.title}</h1>
              {product.subtitle && (
                <p className="text-lg text-muted-foreground">{product.subtitle}</p>
              )}
            </div>

            {/* Rating */}
            {product.rating && (
              <div className="flex items-center gap-3">
                <div className="flex items-center gold-accent text-lg">
                  {'★'.repeat(Math.floor(product.rating.value))}
                  {'☆'.repeat(5 - Math.floor(product.rating.value))}
                </div>
                <span className="text-muted-foreground">
                  {product.rating.value} ({product.rating.count} reviews)
                </span>
              </div>
            )}

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="font-display text-3xl">
                {formatPrice(product.price.amount)}
              </span>
              {product.compareAtPrice && (
                <span className="text-xl text-muted-foreground line-through">
                  {formatPrice(product.compareAtPrice.amount)}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            {/* Size Selection */}
            {product.sizes && product.sizes.length > 0 && (
              <div>
                <h3 className="font-medium mb-3">Select Size</h3>
                <div className="flex gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 rounded-lg border-2 transition-all ${
                        selectedSize === size
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-border hover:border-primary'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div>
              <h3 className="font-medium mb-3">Quantity</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center border rounded-lg">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-4">
              <Button size="lg" className="flex-1">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Add to Bag
              </Button>
              <Button size="lg" variant="outline">
                <Heart className="h-5 w-5" />
              </Button>
            </div>

            {/* Materials */}
            {product.materials && product.materials.length > 0 && (
              <div className="border-t pt-6">
                <h3 className="font-medium mb-2">Materials</h3>
                <p className="text-sm text-muted-foreground">
                  {product.materials.join(', ')}
                </p>
              </div>
            )}

            {/* SKU */}
            {product.sku && (
              <p className="text-sm text-muted-foreground">SKU: {product.sku}</p>
            )}
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-20">
          <Tabs defaultValue="details" className="w-full">
            <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
              <TabsTrigger 
                value="details"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
              >
                Details
              </TabsTrigger>
              <TabsTrigger 
                value="care"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
              >
                Care Instructions
              </TabsTrigger>
              <TabsTrigger 
                value="shipping"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
              >
                Shipping & Returns
              </TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="mt-6">
              <div className="prose prose-sm max-w-none">
                <p className="text-muted-foreground">
                  {product.description}
                </p>
                {product.materials && (
                  <div className="mt-4">
                    <h4 className="font-medium mb-2">Materials:</h4>
                    <ul>
                      {product.materials.map((material, idx) => (
                        <li key={idx}>{material}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </TabsContent>
            <TabsContent value="care" className="mt-6">
              <div className="prose prose-sm max-w-none text-muted-foreground">
                <ul>
                  <li>Store in a cool, dry place away from direct sunlight</li>
                  <li>Clean with a soft, lint-free cloth after each wear</li>
                  <li>Avoid contact with perfumes, lotions, and chemicals</li>
                  <li>Remove before swimming or showering</li>
                  <li>Professional cleaning recommended annually</li>
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="shipping" className="mt-6">
              <div className="prose prose-sm max-w-none text-muted-foreground">
                <p>
                  <strong>Free shipping</strong> on all orders over $200. Standard
                  shipping typically arrives within 3-5 business days.
                </p>
                <p className="mt-4">
                  We offer hassle-free <strong>30-day returns</strong>. Items must
                  be unworn and in original packaging. Return shipping is free for
                  exchanges.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="font-display text-3xl mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
