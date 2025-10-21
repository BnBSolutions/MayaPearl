import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export default function Cart() {
  // Mock cart data - replace with actual state management
  const cartItems = [
    {
      id: '1',
      title: 'Classic Pearl Necklace',
      price: 289,
      quantity: 1,
      image: '/placeholder.svg',
      size: null,
    },
    {
      id: '2',
      title: 'Delicate Gold Hoops',
      price: 125,
      quantity: 2,
      image: '/placeholder.svg',
      size: null,
    },
  ];

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 200 ? 0 : 15;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md">
          <ShoppingBag className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
          <h1 className="font-display text-3xl mb-4">Your Cart is Empty</h1>
          <p className="text-muted-foreground mb-8">
            Discover our beautiful collection and find pieces that speak to you
          </p>
          <Button size="lg" asChild>
            <Link to="/catalog">Start Shopping</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="font-display text-4xl mb-8">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-6 bg-card p-6 rounded-card border"
              >
                <div className="w-24 h-24 rounded-lg overflow-hidden bg-secondary flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex justify-between mb-2">
                    <h3 className="font-medium">{item.title}</h3>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>

                  {item.size && (
                    <p className="text-sm text-muted-foreground mb-3">
                      Size: {item.size}
                    </p>
                  )}

                  <div className="flex items-center justify-between">
                    <div className="flex items-center border rounded-lg">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center text-sm">
                        {item.quantity}
                      </span>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    <p className="font-display text-lg">${item.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card p-6 rounded-card border sticky top-24">
              <h2 className="font-display text-2xl mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">${subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-medium">
                    {shipping === 0 ? 'Free' : `$${shipping}`}
                  </span>
                </div>

                {subtotal < 200 && (
                  <div className="bg-primary/10 p-3 rounded-lg text-sm">
                    Add ${200 - subtotal} more for free shipping
                  </div>
                )}

                <Separator />

                <div className="flex justify-between text-lg">
                  <span className="font-medium">Total</span>
                  <span className="font-display">${total}</span>
                </div>
              </div>

              <Button size="lg" className="w-full mb-3">
                Proceed to Checkout
              </Button>

              <Button size="lg" variant="outline" className="w-full" asChild>
                <Link to="/catalog">Continue Shopping</Link>
              </Button>

              <div className="mt-6 pt-6 border-t space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center gap-2">
                  <span className="text-green-600">✓</span> Free shipping over $200
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-green-600">✓</span> 30-day returns
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-green-600">✓</span> Secure checkout
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
