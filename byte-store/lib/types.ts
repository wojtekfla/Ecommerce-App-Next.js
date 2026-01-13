export interface Product {
  id: string;
  name: string;
  description: string | null;
  price: number;
  originalPrice?: number;
  imageUrl: string;
  images: string[];
  rating: number | null;
  createdAt: Date;
  updatedAt: Date;
  categoryId: string;
  brandId: number;
  category: Category;
  brand: Brand;
  stocks: Stock[];
}

export interface Category {
  id: string;
  name: string;
  description: string | null;
  image: string | null;
  exploreInfo: string | null;
  createdAt: Date;
}

export interface Brand {
  id: number;
  name: string;
  description: string | null;
  logoUrl: string | null;
  createdAt: Date;
}

export interface Stock {
  id: number;
  productId: number;
  color: string;
  amount: number;
}

export interface Cart {
  id: string
  userId: number | null
  sessionCartId: string
  createdAt: string
  updatedAt: string
  items: CartItem[]
}

export interface CartItem {
  id: string
  cartId: string
  productId: string
  stockId: string
  quantity: number
  createdAt: string
  // populated relations
  product: Product
  stock: Stock
}

export interface CartSummary {
  totalItems: number
  totalPrice: number
  itemsPrice: number
  shippingPrice: number
  taxPrice: number
}

export interface AddToCartInput {
  productId: string
  stockId: string
  quantity: number
}
