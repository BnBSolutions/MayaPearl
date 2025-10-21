export type Money = { 
  amount: number; 
  currency: 'USD' | 'EUR' | 'MDL' 
};

export type Variant = { 
  id: string; 
  name: string; 
  options: Record<string, string>; 
  price: Money; 
  stock?: number 
};

export type Product = {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  category: string;
  price: Money;
  compareAtPrice?: Money;
  images: { src: string; alt: string }[];
  badges?: ('new' | 'bestseller' | 'limited')[];
  materials?: string[];
  colors?: string[];
  sizes?: string[];
  variants?: Variant[];
  rating?: { value: number; count: number };
  sku?: string;
};

export type Category = {
  slug: string;
  name: string;
  description?: string;
  image?: string;
  productCount?: number;
};

export type Review = {
  id: string;
  productId: string;
  author: string;
  rating: number;
  title: string;
  content: string;
  date: string;
  verified?: boolean;
};
