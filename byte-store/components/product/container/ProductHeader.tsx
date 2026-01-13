"use client";

import { sortOptions } from "../mockData";

interface ProductHeaderProps {
  sortValue: string;
  onSortChange: (sort: string) => void;
  itemsPerPage: number;
  onItemsPerPageChange: (items: number) => void;
}

const ProductsHeader = ({
  sortValue,
  onSortChange,
  itemsPerPage,
  onItemsPerPageChange,
}: ProductHeaderProps) => {
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onSortChange(e.target.value);
  };
  const handleItemsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onItemsPerPageChange(Number(e.target.value));
  };

  return (
    <div className="flex mb-6 p-2">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4">
          <label htmlFor="sort" className="text-sm font-medium">
            Sort by
          </label>
          <select
            id="sort"
            value={sortValue}
            onChange={handleSortChange}
            className="border border-grey-one rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-one"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <label htmlFor="show" className="text-sm font-medium">
              Show
            </label>
            <select
              id="show"
              value={itemsPerPage}
              onChange={handleItemsChange}
              className="border border-grey-one rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-one"
            >
              <option value="9">9</option>
              <option value="12">12</option>
              <option value="15">15</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsHeader;
