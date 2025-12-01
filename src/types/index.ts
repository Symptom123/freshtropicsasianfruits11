// Product Types
export interface Fruit {
  id: string;
  name: string;
  category: 'fresh' | 'organic' | 'exotic' | 'seasonal' | 'tropical' | 'berries' | 'apples' | 'citrus';
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[]; // Gallery of product images
  description: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  inventory?: number;
  quantity?: number;
}

// Cart Types
export interface CartItem extends Fruit {
  cartQuantity: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
}

// Review Types
export interface Review {
  id: string;
  productId: string;
  rating: number;
  title: string;
  comment: string;
  author: string;
  date: string;
  helpful: number;
}

// Order Types
export interface Order {
  id: string;
  orderId: string;
  items: CartItem[];
  total: number;
  subtotal: number;
  shipping: number;
  tax: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  paymentMethod: string;
  createdAt: Date;
  deliveryDate?: Date;
}

// User Types
export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
}

// Customer Account Types
export interface Customer {
  email: string;
  name: string;
  phone?: string;
  address?: string;
  orders: Order[];
  reviews: Review[];
  wishlist: string[];
  createdAt: string;
}

// Loyalty Types
export interface LoyaltyTier {
  name: 'Bronze' | 'Silver' | 'Gold' | 'Platinum';
  pointsRequired: number;
  discount: number;
  benefits: string[];
  icon: string;
}

export interface LoyaltyAccount {
  userId: string;
  totalPoints: number;
  currentTier: 'Bronze' | 'Silver' | 'Gold' | 'Platinum';
  pointsThisMonth: number;
  redeemablePoints: number;
  totalSpent: number;
  referralCode: string;
  referralRewards: number;
  joinDate: string;
  lastActivity: string;
  milestones: {
    firstPurchase: boolean;
    fivePurchases: boolean;
    tenPurchases: boolean;
    birthday: boolean;
  };
}

export interface PointsTransaction {
  id: string;
  userId: string;
  type: 'purchase' | 'referral' | 'birthday' | 'redemption' | 'bonus';
  points: number;
  description: string;
  date: string;
  orderId?: string;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}
