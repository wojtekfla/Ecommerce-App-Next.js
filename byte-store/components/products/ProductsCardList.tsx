"use client";

import { mockProducts } from "./mockData";
import ProductCard from "./ProductCard";

const ProductsCardList = () => {
  const handleAddToCart = (productId: string, productName: string) => {
    // TODO: Cart implementation
    alert(`Added ${productName} to cart!`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {mockProducts.map((product) => (
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
