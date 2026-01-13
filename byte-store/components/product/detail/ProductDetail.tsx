"use client";

import ProductDetailContainer from "./ProductDetailContainer";
import ProductPurchaseInfo from "./ProductPurchaseInfo";
import { Product } from "@/lib/types";
import { CartItem } from "@/lib/cart.types";
import { useState } from "react";
import { useCartStore } from "@/store/cart.store";

interface ProductDetailProps {
  product: Product;
}

const ProductDetail = ({ product }: ProductDetailProps) => {
  const addItemWithSync = useCartStore((state) => state.addItemWithSync);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = async (quantity: number, selectedColor: string) => {
    const cartItem: CartItem = {
      id: `${product.id}-${selectedColor.toLowerCase()}`,
      name: product.name,
      price: product.price,
      image: product.imageUrl,
      quantity: quantity,
      stock: product.stocks?.[0]?.amount || 0,
      selected: false,
      categoryId: product.categoryId,
    };

    await addItemWithSync(cartItem);

    // show message
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
    console.log(
      `Added ${quantity} x ${product.name} (${selectedColor}) to cart`
    );
  };

  return (
    <>
      {addedToCart && (
        <div className="fiexed top-4 right-4 bg-green-400 text-white px-4 py-2 z-20">
          Product added successfully
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <ProductDetailContainer product={product} className="lg:col-span-8" />
        <ProductPurchaseInfo
          product={product}
          onAddToCart={handleAddToCart}
          className="lg:col-span-4"
        />
      </div>
    </>
  );
};

export default ProductDetail;
