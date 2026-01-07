"use client";

import { useState } from "react";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { Product } from "@/components/products/mockData";

interface ProductPurchaseInfoProps {
  product: Product;
  className?: string;
  onAddToCart?: (quantity: number, selectedColor: string) => void;
}

const ProductPurchaseInfo = ({
  product,
  className = "",
  onAddToCart,
}: ProductPurchaseInfoProps) => {
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Mock colors for develop
  const colors = [
    { name: "Black", value: "#1f2937" },
    { name: "White", value: "#f9fafb" },
    { name: "Gray", value: "#6b7280" },
  ];

  const handleQuantityChange = (value: number) => {
    if (value >= 1 && value <= product.stock) {
      setQuantity(value);
    }
  };

  const subtotal = product.price * quantity;

  const handleAddToCart = () => {
    onAddToCart?.(quantity, colors[selectedColor].name);
    // todo : Reset or show toast
  };

  return (
    <div
      className={`bg-black-two rounded-xl p-6 border border-grey-two shadow-sm flex flex-col gap-6 ${className}`}
    >
      {/* Colors */}
      <div className="space-y-3">
        <h3 className="text-white font-medium text-sm">Colors</h3>
        <div className="flex gap-3">
          {colors.map((color, index) => {
            const active = selectedColor === index;

            return (
              <button
                key={index}
                onClick={() => setSelectedColor(index)}
                className={`
                    relative w-11 h-11 rounded-md border transition flex items-center justify-center 
                    ${
                      active
                        ? "border-orange-one"
                        : "border-gray-600 hover:border-gray-400"
                    } 
                  `}
                style={{ backgroundColor: color.value }}
                title={color.name}
              />
            );
          })}
        </div>
      </div>

      {/* Quantity */}
      <div className="space-y-3">
        <h3 className="text-white font-medium text-sm">Quantity</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center border border-gray-600 rounded-lg">
            <button
              onClick={() => handleQuantityChange(quantity - 1)}
              disabled={quantity <= 1}
              className="px-4 py-3 hover:bg-gray-600 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed transistion-colors rounded-l-md"
            >
              <Minus className="w-4 h-4 text-white" />
            </button>

            <div className="px-6 py-3 min-w-[60px] text-center">
              <span className="text-white font-semibold text-lg">
                {quantity}
              </span>
            </div>

            <button
              onClick={() => handleQuantityChange(quantity + 1)}
              disabled={quantity >= product.stock}
              className="px-4 py-3 hover:bg-gray-600 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed transistion-colors rounded-r-md"
            >
              <Plus className="w-4 h-4 text-white" />
            </button>
          </div>

          <div className="text-gray-400 text-sm">
            <span className="text-green-400">Stock:</span> {product.stock}
          </div>
        </div>
      </div>

      {/* Subtotal */}
      <div className="border-t border-grey-one pt-6">
        <div className="flex justify-between items-center">
          <span className="text-gray-300 text-base">Subtotal</span>
          <span className="text-2xl font-semibold text-white">
            ${subtotal.toFixed(2)}
          </span>
        </div>

        {/* Add to Cart button */}
        <button
          onClick={handleAddToCart}
          disabled={product.stock === 0}
          // className="w-full flex items-center justify-center mt-12 border border-orange-one disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-6 px-6 rounded-lg transition-colors gap-3 text-lg"
          className="
            w-full
            py-4
            rounded-lg
            border border-orange-one
            text-orange-one
            font-medium
            hover:bg-orange-one hover:text-black
            transition
            disabled:opacity-50
            disabled:cursor-not-allowed
            flex items-center justify-center gap-3
          "
        >
          {product.stock === 0 ? "Out of stock" : "Add to Cart"}
          <ShoppingCart className="w-6 h-6 -translate-y-1" />
        </button>
      </div>
    </div>
  );
};

export default ProductPurchaseInfo;
