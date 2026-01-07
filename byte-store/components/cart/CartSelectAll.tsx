"use client";

import { useCartStore } from "@/store/cart.store";

const CartSelectAll = () => {
  const items = useCartStore((state) => state.items);
  const selectAll = useCartStore((state) => state.selectAll);

  if (items.length === 0) return null;

  const allSelected = items.length > 0 && items.every((item) => item.selected);
  const someSelected = items.some((item) => item.selected);
  const indeterminate = someSelected && !allSelected;

  const handleSelectAll = () => {
    selectAll(!allSelected);
  };

  return (
    <div className="flex items-center gap-2 mb-6">
      <input
        type="checkbox"
        checked={allSelected}
        ref={(input) => {
          if (input) input.indeterminate = indeterminate;
        }}
        onChange={handleSelectAll}
        className="rounded border-gray-400 text-orange-one focus:ring-orange-500"
      />
      <span className="text-white font-medium">Select All</span>
    </div>
  );
};

export default CartSelectAll;
