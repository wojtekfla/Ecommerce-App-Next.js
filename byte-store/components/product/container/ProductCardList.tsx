"use client";

import { Product } from "@/lib/types";
import ProductCard from "@/components/ui/ProductCard";

interface ProductCardListProps {
  products: Product[];
  loading?: boolean;
}

const ProductsCardList = ({ products, loading }: ProductCardListProps) => {
  const handleAddToCart = (productId: string, productName: string) => {
    // TODO: Cart implementation
    alert(`Added ${productName} to cart!`);
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(9)].map((_, index) => (
          <div
            key={index}
            className="bg-grey-one animate-pulse rounded-lg h-80"
          ></div>
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center text-gray-one py-12">
        <p>No products found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={() => handleAddToCart(product.id, product.name)}
        />
      ))}
    </div>
  );
};

export default ProductsCardList;
