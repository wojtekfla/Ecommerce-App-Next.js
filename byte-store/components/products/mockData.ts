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
    description: "Gaming mouse with precision sensor and ergonomic design for professional esports gaming.",
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
    description: "RGB gaming keyboard with tactile keys and spill resistance for enhanced gaming experience.",
    price: 49.99,
    stock: 8,
    imageUrl: "/images/products/rec-keyboard1.png",
    categoryId: "keyboard",
    badge: "Sale",
    rating: 4.8,
    reviews: 89
  },
  {
    id: "3",
    slug: "logitech-g502-hero-gaming-mouse",
    name: "Logitech G502 Hero Gaming Mouse",
    description: "Advanced gaming mouse with HERO 25K sensor and programmable buttons for competitive gaming.",
    price: 34.99,
    stock: 23,
    imageUrl: "/images/products/rec-mouse2.png",
    categoryId: "mouse",
    rating: 4.7,
    reviews: 256
  },
  {
    id: "4",
    slug: "sony-wh-ch510-wireless-headphones",
    name: "Sony WH-CH510 Wireless Headphones",
    description: "Comfortable wireless headphones with 35 hours battery life and voice assistant compatibility.",
    price: 59.99,
    stock: 12,
    imageUrl: "/images/products/rec-headphones2.png",
    categoryId: "headphones",
    badge: "Featured",
    rating: 4.3,
    reviews: 167
  },
  {
    id: "5",
    slug: "aoc-24g2-gaming-monitor",
    name: "AOC 24G2 Gaming Monitor",
    description: "24-inch Full HD gaming monitor with 144Hz refresh rate and AMD FreeSync technology.",
    price: 209.99,
    stock: 6,
    imageUrl: "/images/products/rec-monitor1.png",
    categoryId: "monitor",
    rating: 4.6,
    reviews: 89
  },
  {
    id: "6",
    slug: "razer-huntsman-elite-gaming-keyboard",
    name: "Razer Huntsman Elite Gaming Keyboard",
    description: "Premium mechanical gaming keyboard with opto-mechanical switches and RGB lighting.",
    price: 108.83,
    stock: 4,
    imageUrl: "/images/products/rec-keyboard2.png",
    categoryId: "keyboard",
    badge: "Featured",
    rating: 4.4,
    reviews: 203
  },
    {
    id: "7",
    slug: "rog-swift-pg259qn-monitor",
    name: "ROG Swift PG259QN Gaming Monitor",
    description: "25-inch Full HD gaming monitor with 360Hz refresh rate for competitive esports.",
    price: 299.99,
    stock: 3,
    imageUrl: "/images/products/rec-monitor2.png",
    categoryId: "monitor",
    badge: "Sale",
    rating: 4.9,
    reviews: 156
  },
  {
    id: "8",
    slug: "jbl-tune-500-headphones",
    name: "JBL Tune 500 Wired Headphones",
    description: "Lightweight on-ear headphones with JBL Pure Bass sound and foldable design.",
    price: 29.95,
    stock: 18,
    imageUrl: "/images/products/rec-headphones2.png",
    categoryId: "headphones",
    badge: "New",
    rating: 4.2,
    reviews: 94
  },
  {
    id: "9",
    slug: "jbl-tune-500-headphones",
    name: "JBL Tune 500 Wired Headphones",
    description: "Lightweight on-ear headphones with JBL Pure Bass sound and foldable design.",
    price: 39.95,
    stock: 11,
    imageUrl: "/images/products/rec-headphones2.png",
    categoryId: "headphones",
    rating: 4.1,
    reviews: 67
  },

  // DODATKOWE 23 - mieszane kategorie
  {
    id: "10",
    slug: "corsair-k95-rgb-platinum",
    name: "Corsair K95 RGB Platinum Mechanical Keyboard",
    description: "Premium RGB mechanical gaming keyboard with Cherry MX switches and macro keys.",
    price: 199.99,
    originalPrice: 249.99,
    stock: 3,
    imageUrl: "/images/products/rec-keyboard2.png",
    categoryId: "keyboard",
    badge: "Sale",
    rating: 4.7,
    reviews: 156
  },
  {
    id: "11",
    slug: "razer-deathadder-v3-pro",
    name: "Razer DeathAdder V3 Pro Wireless Gaming Mouse",
    description: "Professional wireless gaming mouse with Focus Pro 30K sensor and 90-hour battery.",
    price: 149.99,
    originalPrice: 179.99,
    stock: 7,
    imageUrl: "/images/products/rec-mouse2.png",
    categoryId: "mouse",
    badge: "Sale",
    rating: 4.8,
    reviews: 342
  },
  {
    id: "12",
    slug: "lg-27gn950-4k-gaming",
    name: "LG 27GN950 4K Gaming Monitor",
    description: "27-inch 4K UHD gaming monitor with 144Hz refresh rate and G-SYNC compatibility.",
    price: 799.99,
    originalPrice: 899.99,
    stock: 3,
    imageUrl: "/images/products/rec-monitor1.png",
    categoryId: "monitor",
    badge: "Sale",
    rating: 4.8,
    reviews: 167
  },
  {
    id: "13",
    slug: "audio-technica-ath-m50x",
    name: "Audio-Technica ATH-M50x Professional Headphones",
    description: "Studio-quality headphones with exceptional clarity for professional audio work.",
    price: 149.99,
    stock: 20,
    imageUrl: "/images/products/rec-headphones2.png",
    categoryId: "headphones",
    rating: 4.8,
    reviews: 567
  },
  {
    id: "14",
  slug: "corsair-hs60-pro-surround",
  name: "Corsair HS60 Pro Surround Gaming Headset",
  description: "Premium gaming headset with 7.1 virtual surround sound and memory foam earpads.",
  price: 49.99,
  stock: 8,
  imageUrl: "/images/products/rec-headphones2.png", 
  categoryId: "headphones",
  badge: "Sale",
  rating: 4.8,
  reviews: 89
  },
  {
    id: "15",
    slug: "corsair-m65-rgb-elite",
    name: "Corsair M65 RGB Elite Gaming Mouse",
    description: "Tunable FPS gaming mouse with 18,000 DPI sensor and customizable weight system.",
    price: 79.99,
    stock: 12,
    imageUrl: "/images/products/rec-mouse2.png",
    categoryId: "mouse",
    rating: 4.4,
    reviews: 189
  },
  {
    id: "16",
    slug: "steelseries-apex-pro-tkl",
    name: "SteelSeries Apex Pro TKL Mechanical Keyboard",
    description: "Tournament-grade mechanical keyboard with OmniPoint adjustable switches.",
    price: 189.99,
    stock: 8,
    imageUrl: "/images/products/rec-keyboard2.png",
    categoryId: "keyboard",
    badge: "Featured",
    rating: 4.9,
    reviews: 89
  },
  {
    id: "17",
    slug: "samsung-odyssey-g7-32",
    name: "Samsung Odyssey G7 32\" Curved Gaming Monitor",
    description: "32-inch curved QLED gaming monitor with 240Hz refresh rate and HDR600.",
    price: 699.99,
    stock: 5,
    imageUrl: "/images/products/rec-monitor2.png",
    categoryId: "monitor",
    badge: "Featured",
    rating: 4.7,
    reviews: 234
  },
  {
    id: "18",
    slug: "bose-quietcomfort-45",
    name: "Bose QuietComfort 45 Wireless Headphones",
    description: "Premium noise-cancelling wireless headphones with 24-hour battery life.",
    price: 329.99,
    originalPrice: 379.99,
    stock: 6,
    imageUrl: "/images/products/rec-headphones2.png",
    categoryId: "headphones",
    badge: "Sale",
    rating: 4.6,
    reviews: 445
  },
  {
    id: "19",
    slug: "razer-blackshark-v2-pro",
    name: "Razer BlackShark V2 Pro Wireless Gaming Headset",
    description: "Professional esports headset with THX 7.1 spatial audio and titanium 50mm drivers.",
    price: 69.99,
    originalPrice: 89.99, 
    stock: 15,
    imageUrl: "/images/products/rec-headphones2.png",
    categoryId: "headphones",
    badge: "Sale", 
    rating: 4.3,
    reviews: 456
  },
  {
    id: "20",
    slug: "steelseries-rival-650",
    name: "SteelSeries Rival 650 Wireless Gaming Mouse",
    description: "Dual wireless gaming mouse with quantum wireless technology and customizable weights.",
    price: 129.99,
    stock: 5,
    imageUrl: "/images/products/rec-mouse2.png",
    categoryId: "mouse",
    badge: "Featured",
    rating: 4.6,
    reviews: 278
  },
  {
    id: "21",
    slug: "logitech-mx-keys",
    name: "Logitech MX Keys Advanced Wireless Keyboard",
    description: "Professional wireless keyboard with smart illumination and multi-device connectivity.",
    price: 99.99,
    stock: 15,
    imageUrl: "/images/products/rec-keyboard2.png",
    categoryId: "keyboard",
    rating: 4.5,
    reviews: 234
  },
  {
    id: "22",
    slug: "dell-ultrasharp-u2720q",
    name: "Dell UltraSharp U2720Q 4K Monitor",
    description: "27-inch 4K USB-C monitor with 99% sRGB color accuracy for content creation.",
    price: 549.99,
    stock: 8,
    imageUrl: "/images/products/rec-monitor1.png",
    categoryId: "monitor",
    rating: 4.6,
    reviews: 189
  },
  {
    id: "23",
    slug: "hyperx-cloud-ii",
    name: "HyperX Cloud II Gaming Headset",
    description: "Professional gaming headset with virtual 7.1 surround sound and noise-cancelling mic.",
    price: 99.99,
    stock: 25,
    imageUrl: "/images/products/rec-headphones2.png",
    categoryId: "headphones",
    badge: "Featured",
    rating: 4.7,
    reviews: 892
  },
  {
    id: "24",
    slug: "asus-tuf-gaming-vg27aq",
    name: "ASUS TUF Gaming VG27AQ 1440p Monitor", 
    description: "27-inch WQHD gaming monitor with 165Hz refresh rate and adaptive sync technology.",
    price: 649.99,
    stock: 4,
    imageUrl: "/images/products/rec-monitor2.png",
    categoryId: "monitor",
    badge: "Featured",
    rating: 4.9,
    reviews: 78
  },
  {
    id: "25",
    slug: "corsair-harpoon-rgb-wireless",
    name: "Corsair Harpoon RGB Wireless Gaming Mouse",
    description: "Lightweight wireless gaming mouse with 10,000 DPI optical sensor and RGB lighting.",
    price: 49.99,
    stock: 16,
    imageUrl: "/images/products/rec-mouse2.png",
    categoryId: "mouse",
    rating: 4.3,
    reviews: 423
  },
  {
    id: "26",
    slug: "corsair-k65-rgb-mini",
    name: "Corsair K65 RGB MINI 65% Mechanical Keyboard",
    description: "Compact 65% mechanical gaming keyboard with Cherry MX switches and RGB lighting.",
    price: 109.99,
    originalPrice: 139.99,
    stock: 14,
    imageUrl: "/images/products/rec-keyboard2.png",
    categoryId: "keyboard",
    badge: "Sale",
    rating: 4.4,
    reviews: 267
  },
  {
    id: "27",
    slug: "benq-zowie-xl2546k",
    name: "BenQ ZOWIE XL2546K Gaming Monitor",
    description: "24.5-inch Full HD esports monitor with 240Hz refresh rate and DyAc+ technology.",
    price: 499.99,
    stock: 7,
    imageUrl: "/images/products/rec-monitor2.png",
    categoryId: "monitor",
    rating: 4.8,
    reviews: 134
  },
  {
    id: "28",
    slug: "sennheiser-hd-660s",
    name: "Sennheiser HD 660S Open-Back Headphones",
    description: "Audiophile-grade open-back headphones with natural sound reproduction.",
    price: 499.99,
    stock: 4,
    imageUrl: "/images/products/rec-headphones2.png",
    categoryId: "headphones",
    rating: 4.9,
    reviews: 123
  },
  {
    id: "29",
    slug: "steelseries-arctis-7p-wireless",
    name: "SteelSeries Arctis 7P Wireless Gaming Headset",
    description: "Lossless 2.4GHz wireless gaming headset with ClearCast microphone and 24-hour battery.",
    price: 239.99,
    originalPrice: 279.99,
    stock: 9, 
    imageUrl: "/images/products/rec-headphones2.png",
    categoryId: "headphones",
    badge: "Sale",
    rating: 4.4,
    reviews: 156
  },
  {
    id: "30",
    slug: "glorious-model-o-wireless",
    name: "Glorious Model O Wireless Gaming Mouse",
    description: "Ultra-lightweight wireless gaming mouse with honeycomb shell and PIXART 3370 sensor.",
    price: 79.99,
    stock: 13,
    imageUrl: "/images/products/rec-mouse2.png",
    categoryId: "mouse",
    badge: "New",
    rating: 4.5,
    reviews: 567
  },
  {
    id: "31",
    slug: "ducky-one-2-mini-rgb",
    name: "Ducky One 2 Mini RGB 60% Mechanical Keyboard",
    description: "Compact 60% mechanical keyboard with Cherry MX switches and premium build quality.",
    price: 119.99,
    stock: 6,
    imageUrl: "/images/products/rec-keyboard2.png",
    categoryId: "keyboard",
    rating: 4.8,
    reviews: 345
  },
  {
    id: "32",
    slug: "acer-predator-x27-4k-hdr",
    name: "Acer Predator X27 4K HDR Gaming Monitor",
    description: "27-inch 4K HDR gaming monitor with 144Hz refresh rate and G-SYNC Ultimate.",
    price: 1999.99,
    stock: 1,
    imageUrl: "/images/products/rec-monitor1.png",
    categoryId: "monitor",
    badge: "Featured",
    rating: 4.9,
    reviews: 78
  }
]


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

