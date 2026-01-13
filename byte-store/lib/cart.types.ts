export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  selected: boolean;
  categoryId: string;
  stock: number;
}

export interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  toggleSelect: (id: string) => void;
  selectAll: (selected: boolean) => void;
  totalItems: number;
  subtotal: number;
  selectedTotal: number;
  
  // Backend sync methods
  syncToDatabase: () => Promise<void>;
  loadFromDatabase: () => Promise<void>;
  addItemWithSync: (item: CartItem) => Promise<void>;
  updateQuantityWithSync: (id: string, quantity: number) => Promise<void>;
  removeItemWithSync: (id: string) => Promise<void>;
}

export interface AddToCartInput {
  productId: string
  stockId: string  
  quantity: number
}

export interface CartSummary {
  totalItems: number
  itemsPrice: number
  shippingPrice: number
  totalPrice: number
}

export interface DatabaseCart {
  id: string
  userId: number | null
  sessionCartId: string
  items: DatabaseCartItem[]
}

export interface DatabaseCartItem {
  id: string
  productId: string
  stockId: string
  quantity: number
  selected: boolean
  product: {
    id: string
    name: string
    price: number
    imageUrl: string
    categoryId: string
  }
  stock: {
    id: string
    amount: number
    color: string
  }
}