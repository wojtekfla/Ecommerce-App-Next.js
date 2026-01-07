"use client";

import { useState, useEffect, useMemo } from "react";
import { mockProducts } from "@/components/products/mockData";

import ProductSidebar from "@/components/products/sidebar/ProductSidebar";
import ProductContainer from "@/components/products/container/ProductContainer";

const ProductLayout = () => {
  // filter
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSort, setSelectedSort] = useState("latest");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 2000 });

  // filtered and sorted products logic
  const filteredProducts = useMemo(() => {
    let filtered = mockProducts;

    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (product) => product.categoryId === selectedCategory
      );
    }

    filtered = filtered.filter(
      (product) =>
        product.price >= priceRange.min && product.price <= priceRange.max
    );

    switch (selectedSort) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case "stock":
        filtered.sort((a, b) => b.stock - a.stock);
        break;
      default:
        break;
    }

    return filtered;
  }, [selectedCategory, selectedSort, priceRange]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handlePriceRangeChange = (min: number, max: number) => {
    setPriceRange({ min, max });
  };

  const handleSortChange = (sort: string) => {
    setSelectedSort(sort);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6 border-t-2 border-grey-one">
      <div className="lg:col-span-3 p-4">
        <ProductSidebar
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
          priceRange={priceRange}
          onPriceRangeChange={handlePriceRangeChange}
        />
      </div>
      <div className="lg:col-span-9 p-4 pl-10 border-l-2 border-grey-one">
        <ProductContainer
          filteredProducts={filteredProducts}
          selectedSort={selectedSort}
          onSortChange={handleSortChange}
        />
      </div>
    </div>
  );
};

export default ProductLayout;
