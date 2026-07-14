export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  description: string;
  longDescription: string;
  category: 'best-seller' | 'new-arrival' | 'featured';
  badge?: string;
  materials: string[];
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize: string; // 'XS' (14cm), 'S' (15cm), 'M' (16cm), 'L' (17cm)
  giftMessage?: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  verified: boolean;
  avatarInitial: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface OrderDetails {
  name: string;
  phone: string;
  address: string;
  email?: string;
  note?: string;
  items: CartItem[];
  totalAmount: number;
  orderId: string;
  date: string;
}
