"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Plus, Check } from "lucide-react";
import { Category } from "@/lib/types";

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  categories?: Category[];
}

const CategoryFilter = ({
  selectedCategory,
  onCategoryChange,
  categories,
}: CategoryFilterProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const [showAll, setShowAll] = useState(false);

  const categoriesMapped = (categories || []).map((cat) => ({
    id: cat.id,
    name: cat.name,
  }));

  const displayedCategories = showAll
    ? categoriesMapped
    : categoriesMapped.slice(0, 5);

  return (
    <div className="border-b border-grey-one pb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left text-white font-medium mb-4"
      >
        <span>Category</span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
      </button>

      {isOpen && (
        <div className="space-y-3">
          {displayedCategories.map((category) => (
            <label
              key={category.id}
              className="flex items-center space-x-3 cursor-pointer text-gray-300 hover:text-white"
            >
              <input
                type="radio"
                name="category"
                value={category.id}
                checked={selectedCategory === category.id}
                onChange={(e) => onCategoryChange(e.target.value)}
                className="hidden"
              />
              <div
                className={`w-4 h-4 border-2 rounded flex items-center justify-center ${
                  selectedCategory === category.id
                    ? "bg-orange-one border-orange-one"
                    : "border-grey-one"
                }`}
              >
                {selectedCategory === category.id && (
                  <Check className="w-3 h-3 text-white" />
                )}
              </div>
              <span className="text-sm">{category.name}</span>
            </label>
          ))}

          {!showAll && (categories || []).length > 5 && (
            <button
              onClick={() => setShowAll(true)}
              className="text-white text-sm hover:text-orange-one mt-4 px-4 flex items-center cursor-pointer"
            >
              <span>Load More</span>
              <Plus className="w-3 h-3 ml-1" />
            </button>
          )}

          {showAll && (
            <button
              onClick={() => setShowAll(false)}
              className="text-orange-one text-sm hover:text-orange-400 mt-4 flex items-center"
            >
              <span>Show Less</span>
              <ChevronUp className="w-3 h-3 ml-1" />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default CategoryFilter;
