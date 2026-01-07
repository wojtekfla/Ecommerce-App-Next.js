"use client";

import ProductImages from "@/components/products/detail/ProductImages";
import ProductInfo from "@/components/products/detail/ProductInfo";
import { Product } from "../mockData";

interface ProductDetailContainerProps {
  product: Product;
  className?: string;
}

const ProductDetailContainer = ({
  product,
  className = "",
}: ProductDetailContainerProps) => {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 ${className}`}>
      <div>
        <ProductImages
          images={product.images || []}
          productName={product.name}
          fallbackImage={product.imageUrl}
        />
      </div>
      <div>
        <ProductInfo product={product} />
      </div>
    </div>
  );
};

export default ProductDetailContainer;
