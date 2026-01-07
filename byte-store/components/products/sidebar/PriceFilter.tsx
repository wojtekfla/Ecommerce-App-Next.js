"use client";

import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface PriceFilterProps {
  priceRange: { min: number; max: number };
  onPriceRangeChange: (min: number, max: number) => void;
}

const PriceFilter = ({
  priceRange = { min: 0, max: 2000 },
  onPriceRangeChange,
}: PriceFilterProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const [minValue, setMinValue] = useState(priceRange.min.toString());
  const [maxValue, setMaxValue] = useState(priceRange.max.toString());

  useEffect(() => {
    setMinValue(priceRange.min.toString());
    setMaxValue(priceRange.max.toString());
  }, [priceRange]);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMinValue(value);
    const numValue = parseFloat(value) || 0;
    onPriceRangeChange(numValue, priceRange.max);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMaxValue(value);
    const numValue = parseFloat(value) || 2000;
    onPriceRangeChange(priceRange.min, numValue);
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left text-white font-medium mb-4"
      >
        <span>Price</span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
      </button>

      {isOpen && (
        <div className="space-y-3">
          {/* Min Price */}
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
              $
            </span>
            <input
              type="number"
              value={minValue}
              onChange={handleMinChange}
              placeholder="0"
              className="w-full bg-black-two border border-grey-one hover:border-grey-two transition rounded pl-8 pr-14 py-2 text-white text-sm focus:ring-orange-one focus:border-orange-one focus:ring-1"
            />
            <select className="absolute right-2 top-1/2 -translate-y-1/2 bg-black-three text-gray-400 text-xs px-1 rounded focus:ring-0 focus:outline-none cursor-pointer">
              <option value="USD">USD</option>
              <option value="PLN">PLN</option>
            </select>
          </div>

          {/* Max Price Input */}
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
              $
            </span>
            <input
              type="number"
              value={maxValue}
              onChange={handleMaxChange}
              placeholder="2000"
              className="w-full bg-black-two border border-grey-one hover:border-grey-two transition rounded pl-8 pr-14 py-2 text-white text-sm focus:ring-orange-one focus:border-orange-one focus:ring-1"
            />
            <select className="absolute right-2 top-1/2 -translate-y-1/2 bg-black-three text-gray-400 text-xs px-1 rounded focus:ring-0 focus:outline-none cursor-pointer">
              <option value="USD">USD</option>
              <option value="PLN">PLN</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default PriceFilter;
