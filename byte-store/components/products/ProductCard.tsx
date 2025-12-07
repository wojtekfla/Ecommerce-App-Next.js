"use client";

import { Product } from "./mockData";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: Product;
  onAddToCart?: () => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // prevent link navigation
    e.stopPropagation();
    onAddToCart?.();
  };

  return (
    <Link href={`/products/${product.slug}`}>
      <div className="bg-black-one border border-grey-two rounded-lg overflow-hidden hover:border-gray-600 transition-shadow">
        {/* Image Section */}
        <div className="relative bg-white p-4">
          <button
            onClick={handleAddToCart}
            title="Add to cart"
            className="absolute top-2 left-2 p-2 bg-black rounded-lg hover:scale-110"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>

          {/* Product Image */}
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={200}
            height={200}
            className="w-full h-40 object-contain"
            priority={false}
          />
        </div>
      </div>

      {/* Content section */}
      <div className="p-4 text-white">
        {/* Category Badge */}
        <div className="mb-3">
          <span className="bg-orange-one text-white text-xs font-medium px-3 py-1 rounded">
            {product.categoryId.charAt(0).toUpperCase() +
              product.categoryId.slice(1)}
          </span>
        </div>

        {/* Product name */}
        <h3 className="text-white text-sm font-medium mb-2 line-clamp-2">
          {product.name}
        </h3>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-white font-semibold">${product.price}</span>
          {product.originalPrice && (
            <span className="text-gray-two text-sm line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
