"use client";

import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import { Category } from "@/lib/types";

interface ProductSidebarProps {
  categories?: Category[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  priceRange: { min: number; max: number };
  onPriceRangeChange: (min: number, max: number) => void;
}

const ProductSidebar = ({
  categories,
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
}: ProductSidebarProps) => {
  return (
    <div className="w-64 space-y-6 p-4 rounded-lg">
      <CategoryFilter
        categories={categories || []}
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
