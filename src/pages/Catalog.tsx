import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ProductCard';
import { Product } from '@/models/product';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import productsData from '@/data/products.json';
import categoriesData from '@/data/categories.json';

const products = productsData as Product[];

export default function Catalog() {
  const { category: categoryParam } = useParams();
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('popularity');

  // Get unique colors and materials
  const allColors = Array.from(
    new Set(products.flatMap((p) => p.colors || []))
  );
  const allMaterials = Array.from(
    new Set(products.flatMap((p) => p.materials || []))
  );

  // Filter products
  const filteredProducts = products.filter((product) => {
    // Category filter
    if (categoryParam && product.category !== categoryParam) return false;

    // Price filter
    if (product.price.amount < priceRange[0] || product.price.amount > priceRange[1]) {
      return false;
    }

    // Color filter
    if (selectedColors.length > 0) {
      const hasColor = product.colors?.some((c) => selectedColors.includes(c));
      if (!hasColor) return false;
    }

    // Material filter
    if (selectedMaterials.length > 0) {
      const hasMaterial = product.materials?.some((m) =>
        selectedMaterials.includes(m)
      );
      if (!hasMaterial) return false;
    }

    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
        return a.price.amount - b.price.amount;
      case 'price-desc':
        return b.price.amount - a.price.amount;
      case 'newest':
        return a.badges?.includes('new') ? -1 : 1;
      default:
        return 0;
    }
  });

  const FilterSection = () => (
    <div className="space-y-8">
      {/* Categories */}
      <div>
        <h3 className="font-display text-lg mb-4">Categories</h3>
        <div className="space-y-2">
          <Link
            to="/catalog"
            className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
              !categoryParam
                ? 'bg-primary text-primary-foreground'
                : 'hover:bg-secondary'
            }`}
          >
            All Products
          </Link>
          {categoriesData.map((cat) => (
            <Link
              key={cat.slug}
              to={`/catalog/${cat.slug}`}
              className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                categoryParam === cat.slug
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-secondary'
              }`}
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-display text-lg mb-4">Price Range</h3>
        <div className="px-2">
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            max={500}
            step={10}
            className="mb-4"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>

      {/* Colors */}
      {allColors.length > 0 && (
        <div>
          <h3 className="font-display text-lg mb-4">Colors</h3>
          <div className="flex flex-wrap gap-2">
            {allColors.map((color) => (
              <button
                key={color}
                onClick={() => {
                  setSelectedColors((prev) =>
                    prev.includes(color)
                      ? prev.filter((c) => c !== color)
                      : [...prev, color]
                  );
                }}
                className={`w-8 h-8 rounded-full border-2 transition-all ${
                  selectedColors.includes(color)
                    ? 'border-primary scale-110'
                    : 'border-border'
                }`}
                style={{ backgroundColor: color }}
                title={color}
              />
            ))}
          </div>
        </div>
      )}

      {/* Materials */}
      {allMaterials.length > 0 && (
        <div>
          <h3 className="font-display text-lg mb-4">Materials</h3>
          <div className="space-y-3">
            {allMaterials.map((material) => (
              <div key={material} className="flex items-center gap-2">
                <Checkbox
                  id={material}
                  checked={selectedMaterials.includes(material)}
                  onCheckedChange={(checked) => {
                    setSelectedMaterials((prev) =>
                      checked
                        ? [...prev, material]
                        : prev.filter((m) => m !== material)
                    );
                  }}
                />
                <label
                  htmlFor={material}
                  className="text-sm cursor-pointer"
                >
                  {material}
                </label>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-display text-4xl mb-4">
            {categoryParam
              ? categoriesData.find((c) => c.slug === categoryParam)?.name ||
                'Catalog'
              : 'All Jewelry'}
          </h1>
          <p className="text-muted-foreground text-lg">
            {sortedProducts.length} pieces
          </p>
        </div>

        <div className="flex gap-8">
          {/* Desktop Filters Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <FilterSection />
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Controls Bar */}
            <div className="flex justify-between items-center mb-8 gap-4">
              {/* Mobile Filter Button */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="lg:hidden">
                    <SlidersHorizontal className="mr-2 h-4 w-4" />
                    Filters
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80 overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle className="font-display text-2xl">
                      Filters
                    </SheetTitle>
                  </SheetHeader>
                  <div className="mt-8">
                    <FilterSection />
                  </div>
                </SheetContent>
              </Sheet>

              {/* Sort */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popularity">Most Popular</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Products Grid */}
            {sortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-lg text-muted-foreground mb-4">
                  No products match your filters
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setPriceRange([0, 500]);
                    setSelectedColors([]);
                    setSelectedMaterials([]);
                  }}
                >
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
