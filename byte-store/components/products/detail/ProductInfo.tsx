"use client";

import { Product } from "@/components/products/mockData";
import { Check } from "lucide-react";

interface ProductInfoProps {
  product: Product;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <div className="space-y-6">
      {/* Title and Category */}
      <div className="space-y-3">
        <h1 className="text-3xl font-bold text-white">{product.name}</h1>
        <span className="inline-block bg-orange-one/90 text-white-two text-sm font-medium px-3 py-1 rounded">
          {product.categoryId.charAt(0).toUpperCase() +
            product.categoryId.slice(1)}
        </span>
      </div>

      {/* Price */}
      <div className="flex items-center gap-3">
        <span className="text-3xl font-bold text-white">
          ${product.price.toFixed(2)}
        </span>
        {product.originalPrice && (
          <span className="text-xl text-gray-400 line-through">
            ${product.originalPrice?.toFixed(2)}
          </span>
        )}
      </div>

      {/* Description */}
      <div className="space-y-2">
        <p className="text-gray-300 leading-relaxed text-base">
          {product.description}
        </p>
        <button className="text-orange-one text-sm hover:text-orange-400 transition-colors font-medium cursor-pointer">
          View More
        </button>
      </div>

      {/* Shipping Info */}
      <div className="text-white text-sm font-medium mb-3">
        Shipping Available
      </div>
      <div className="border border-grey-two rounded-md p-3 bg-black-two">
        <div className="flex items-start gap-2">
          <div className="w-3 h-3 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
            <Check className="w-2 h-2 text-white" />
          </div>
          <div className="space-y-1">
            <div className="text-white text-sm font-medium">
              NexusHub Courier
            </div>
            <div className="text-gray-400 text-xs">
              Estimated arrival 30 Sep - 3 Oct
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
