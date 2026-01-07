"use client";

import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";

interface ProductSidebarProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  priceRange: { min: number; max: number };
  onPriceRangeChange: (min: number, max: number) => void;
}

const ProductSidebar = ({
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
}: ProductSidebarProps) => {
  return (
    <div className="w-64 space-y-6 p-4 rounded-lg">
      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={onCategoryChange}
      />
      <PriceFilter
        priceRange={priceRange}
        onPriceRangeChange={onPriceRangeChange}
      />
    </div>
  );
};

export default ProductSidebar;
