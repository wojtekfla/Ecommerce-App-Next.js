// from AI

import { DatabaseCart } from "@/lib/cart.types";

interface OrderSummaryProps {
  cart: DatabaseCart;
}

export default function OrderSummary({ cart }: OrderSummaryProps) {
  const itemsPrice = cart.items.reduce(
    (sum: number, item) => sum + Number(item.product.price) * item.quantity,
    0
  );
  const shippingPrice = 5;
  const serviceFee = 0.5;
  const total = itemsPrice + shippingPrice + serviceFee;

  return (
    <div className="bg-card p-6 rounded-lg border">
      <h2 className="text-xl font-bold text-white mb-4">Total Product</h2>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between text-gray-300">
          <span>Total Product Price ({cart.items.length} item)</span>
          <span>${itemsPrice.toFixed(2)}</span>
        </div>

        <div className="flex justify-between text-gray-300">
          <span>Total Product Protection</span>
          <span>$1</span>
        </div>

        <div className="flex justify-between text-gray-300">
          <span>Total Shipping Price</span>
          <span>${shippingPrice}</span>
        </div>

        <div className="flex justify-between text-gray-300">
          <span>Shipping Insurance</span>
          <span>$6</span>
        </div>

        <hr className="border-gray-700" />

        <div className="flex justify-between text-gray-300">
          <span>Transaction Fees</span>
          <span></span>
        </div>

        <div className="flex justify-between text-gray-300">
          <span>Service Fees</span>
          <span>${serviceFee}</span>
        </div>

        <hr className="border-gray-700" />

        <div className="flex justify-between text-white font-bold text-lg">
          <span>Grand Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
