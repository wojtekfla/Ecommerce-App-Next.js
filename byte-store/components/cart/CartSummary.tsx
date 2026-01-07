"use client";

import { useCartStore } from "@/store/cart.store";

interface CartSummaryProps {
  className: string;
}

const CartSummary = ({ className = "" }: CartSummaryProps) => {
  const items = useCartStore((state) => state.items);
  const totalItems = useCartStore((state) => state.totalItems);
  const subtotal = useCartStore((state) => state.subtotal);

  const selectedTotal = useCartStore((state) => state.selectedTotal);
  const selectedItems = items.filter((item) => item.selected);
  const selectedCount = selectedItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const showSelected = selectedItems.length > 0;
  const displayCount = showSelected ? selectedCount : totalItems;
  const displayTotal = showSelected ? selectedTotal : subtotal;

  const handleCheckout = () => {
    if (items.length === 0) return;

    console.log("Proceeding to checkout...");
    // todo router.push('/checkout')
  };

  if (items.length === 0) {
    return (
      <div className={`bg-black-two rounded-lg p-6 h-fit ${className}`}>
        <div className="text-center text-gray-400">Your cart is empty</div>
      </div>
    );
  }

  return (
    <div
      className={`bg-black-two rounded-lg p-6 h-fit sticky top-6 ${className}`}
    >
      {/* Header */}
      <h2 className="text-white text-lg font-semibold mb-6">Total Product</h2>

      {/* Summary Detail */}
      <div className="space-y-4 mb-6">
        {/* Total Product Price */}
        <div className="flex justify-between items-center text-sm">
          <span className="text-grey-two">
            Total Product Price ({displayCount} Item
            {displayCount !== 1 ? "s" : ""})
          </span>
          <span className="text-grey-two">${displayTotal.toFixed(2)}</span>
        </div>

        {/* Divider */}
        <hr className="border-grey-two" />

        {/* Subtotal */}
        <div className="flex justify-between items-center">
          <span className="text-white font-semibold text-lg">Subtotal</span>
          <span className="text-white font-bold text-xl">
            ${displayTotal.toFixed(2)}
          </span>
        </div>
      </div>

      {/* Checkout Button */}
      <button
        onClick={handleCheckout}
        disabled={items.length === 0}
        className={`
          w-full py-3 px-4 rounded-lg font-semibold text-black transition-all
          ${
            items.length > 0
              ? "bg-orange-one hover:bg-orange-400 active:bg-orange-500"
              : "bg-gray-600 cursor-not-allowed"
          }  
        `}
      >
        Checkout
      </button>
    </div>
  );
};

export default CartSummary;
