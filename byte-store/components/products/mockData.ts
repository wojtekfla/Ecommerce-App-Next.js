export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  imageUrl: string;
  categoryId: string; // FK - Category
  originalPrice?: number;
  badge?: 'Featured' | 'Sale' | 'New';
  rating?: number;
  reviews?: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  exploreInfo: string;
  count?: number; // optional for UI
}

export const mockCategories: Category[] = [
  {
    id: "all",
    name: "All Products",
    description: "Browse all available products in our store",
    image: "/images/categories/all.jpg",
    exploreInfo: "Discover our complete range of tech products",
    count: 52
  },
  {
    id: "mouse",
    name: "Gaming Mice",
    description: "High-precision gaming mice for professional and casual gamers",
    image: "/images/categories/mouse.jpg",
    exploreInfo: "Enhanced gaming experience with ergonomic designs and advanced sensors",
    count: 12
  },
  {
    id: "keyboard",
    name: "Keyboards",
    description: "Mechanical and wireless keyboards for gaming and productivity",
    image: "/images/categories/keyboard.jpg",
    exploreInfo: "Premium typing experience with customizable RGB lighting",
    count: 8
  },
  {
    id: "headphones",
    name: "Headphones",
    description: "Premium audio equipment for gaming, music, and calls",
    image: "/images/categories/headphones.jpg",
    exploreInfo: "Immersive sound quality with noise cancellation technology",
    count: 15
  },
  {
    id: "monitor",
    name: "Monitors",
    description: "High-resolution displays for gaming and professional work",
    image: "/images/categories/monitor.jpg",
    exploreInfo: "Crystal clear visuals with high refresh rates and HDR support",
    count: 9
  },
  {
    id: "tablet",
    name: "Drawing Tablets",
    description: "Professional drawing tablets for digital artists and designers",
    image: "/images/categories/tablet.jpg",
    exploreInfo: "Precision tools for creative professionals and digital art enthusiasts",
    count: 6
  }
];

export const mockProducts: Product[] = [
  {
    id: "1",
    slug: "rexus-xierra-x16",
    name: "Rexus Xierra X16",
    description: "Legendary gaming mouse with classic design and modern performance. Features precise optical sensor, comfortable ergonomic shape, and durable build quality for extended gaming sessions.",
    price: 25.99,
    originalPrice: 35.99,
    stock: 15,
    imageUrl: "/images/products/rec-mouse1.png",
    categoryId: "mouse",
    badge: "Featured",
    rating: 4.5,
    reviews: 128
  },
  {
    id: "2",
    slug: "logitech-g213-prodigy",
    name: "Logitech G213 Prodigy",
    description: "Professional pen tablet designed for digital artists, photographers, and designers. Offers natural pen experience with 8192 pressure levels and multi-touch gestures support.",
    price: 49.99,
    stock: 8,
    imageUrl: "/images/products/rec-keyboard2.png",
    categoryId: "tablet",
    badge: "Sale",
    rating: 4.8,
    reviews: 89
  },
  {
    id: "3",
    slug: "logitech-g502-hero-gaming-mouse",
    name: "Logitech G502 Hero Gaming Mouse",
    description: "Advanced gaming mouse with HERO 25K sensor, 11 programmable buttons, and adjustable weight system. Perfect for competitive gaming and professional esports.",
    price: 34.99,
    stock: 23,
    imageUrl: "/images/products/logitech-g502.jpg",
    categoryId: "mouse",
    rating: 4.7,
    reviews: 256
  },
  {
    id: "4",
    slug: "sony-wh-ch510-wireless-headphones",
    name: "Sony WH-CH510 Wireless Headphones",
    description: "Comfortable wireless headphones with up to 35 hours battery life. Features quick charge capability, hands-free calling, and voice assistant compatibility for everyday use.",
    price: 59.99,
    stock: 12,
    imageUrl: "/images/products/sony-wh-ch510.jpg",
    categoryId: "headphones",
    badge: "Featured",
    rating: 4.3,
    reviews: 167
  },
  {
    id: "5",
    slug: "aoc-24g2-gaming-monitor",
    name: "AOC 24G2 Gaming Monitor",
    description: "24-inch Full HD gaming monitor with 144Hz refresh rate, 1ms response time, and AMD FreeSync technology. IPS panel delivers excellent color accuracy and wide viewing angles.",
    price: 209.99,
    stock: 6,
    imageUrl: "/images/products/aoc-24g2.jpg",
    categoryId: "monitor",
    rating: 4.6,
    reviews: 89
  },
  {
    id: "6",
    slug: "razer-huntsman-elite-gaming-keyboard",
    name: "Razer Huntsman Elite Gaming Keyboard",
    description: "Premium mechanical gaming keyboard with opto-mechanical switches, Chroma RGB lighting, and dedicated media controls. Includes magnetic wrist rest for enhanced comfort.",
    price: 108.83,
    stock: 4,
    imageUrl: "/images/products/razer-huntsman-elite.jpg",
    categoryId: "keyboard",
    badge: "Featured",
    rating: 4.4,
    reviews: 203
  },
  {
    id: "7",
    slug: "jbl-tune-500-headphones",
    name: "JBL Tune 500 Wired Headphones",
    description: "Lightweight on-ear headphones with JBL Pure Bass sound. Foldable design with tangle-free flat cable and one-button universal remote for hands-free calls.",
    price: 29.95,
    stock: 18,
    imageUrl: "/images/products/jbl-tune-500.jpg",
    categoryId: "headphones",
    badge: "New",
    rating: 4.2,
    reviews: 94
  },
  {
    id: "8",
    slug: "rog-swift-pg259qn-monitor", 
    name: "ASUS ROG Swift PG259QN Gaming Monitor",
    description: "25-inch Full HD gaming monitor with incredible 360Hz refresh rate and 1ms response time. G-SYNC compatible with HDR10 support for competitive esports gaming.",
    price: 299.99,
    stock: 3,
    imageUrl: "/images/products/asus-rog-swift.jpg",
    categoryId: "monitor",
    badge: "Sale",
    rating: 4.9,
    reviews: 156
  },
  {
    id: "9",
    slug: "huion-h610-pro-drawing-tablet",
    name: "Huion H610 Pro Drawing Tablet",
    description: "Large 10x6.25 inch drawing tablet with 8192 pressure levels and battery-free stylus. Perfect for digital art, photo editing, and graphic design work.",
    price: 39.95,
    stock: 11,
    imageUrl: "/images/products/huion-h610-pro.jpg",
    categoryId: "tablet",
    rating: 4.1,
    reviews: 67
  }
];


export const sortOptions = [
  { value: "latest", label: "Latest"},
  { value: "price-low", label: "Price: Low to High"},
  { value: "price-high", label: "Price: High to Low"},
  { value: "rating", label: "Highest Rating"},
  { value: "stock", label: "In Stock"},
]

// helper function to get category by ID
export const getCategoryById = (categoryId: string): Category | undefined => {
  return mockCategories.find(cat => cat.id === categoryId)
}

// helper function to get products by category
export const getProductsByCategory = (categoryId: string): Product[] => {
  if (categoryId === 'all') return mockProducts;
  return mockProducts.filter(product => product.categoryId === categoryId)
}

