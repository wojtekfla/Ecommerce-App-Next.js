// from AI

import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import Link from "next/link";

export const metadata = {
  title: "Order Success - Byte Store",
};

export default async function SuccessPage({ searchParams }) {
  const orderId = searchParams.orderId;

  if (!orderId) notFound();

  const order = await prisma.order.findUnique({
    where: { id: orderId },
    include: {
      orderItems: {
        include: { product: true },
      },
    },
  });

  if (!order) notFound();

  return (
    <div className="container mx-auto px-4 py-16 text-center">
      {/* Success Icon */}
      <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
        <svg
          className="w-12 h-12 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>

      <h1 className="text-3xl font-bold text-white mb-4">
        Thanks for Your Order!
      </h1>

      {/* Order Details */}
      <div className="bg-card p-6 rounded-lg border max-w-md mx-auto mb-8 text-left">
        <p className="text-gray-400 text-sm mb-2">Order Number</p>
        <p className="text-white font-mono">{order.orderNumber}</p>

        <p className="text-gray-400 text-sm mb-2 mt-4">Transaction Date</p>
        <p className="text-white">{order.createdAt.toLocaleDateString()}</p>

        <p className="text-gray-400 text-sm mb-2 mt-4">Payment Method</p>
        <p className="text-white">Apple Pay</p>

        <p className="text-gray-400 text-sm mb-2 mt-4">Shipping Method</p>
        <p className="text-white">NexusHub Courier</p>
      </div>

      {/* Order Items */}
      <div className="bg-card p-6 rounded-lg border max-w-md mx-auto mb-8">
        <h3 className="text-white font-bold mb-4 text-left">Your Order</h3>

        {order.orderItems.map((item) => (
          <div key={item.id} className="flex items-center space-x-4 py-3">
            <div className="w-12 h-12 bg-gray-700 rounded"></div>
            <div className="flex-1 text-left">
              <h4 className="text-white text-sm">{item.product.name}</h4>
              <span className="text-orange-500 bg-orange-500/10 px-2 py-1 rounded text-xs">
                Mouse
              </span>
            </div>
            <div className="text-white">
              ${Number(item.priceAtPurchase).toFixed(2)}
            </div>
            <div className="text-gray-400 text-sm">x{item.quantity}</div>
          </div>
        ))}

        <hr className="border-gray-700 my-4" />

        <div className="space-y-2 text-sm">
          <div className="flex justify-between text-gray-300">
            <span>Total Product Price ({order.orderItems.length} item)</span>
            <span>${Number(order.totalAmount - 5.5).toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-300">
            <span>Shipping Insurance</span>
            <span>$6</span>
          </div>
          <div className="flex justify-between text-gray-300">
            <span>Service Fees</span>
            <span>$0.5</span>
          </div>
          <div className="flex justify-between text-white font-bold">
            <span>Grand Total</span>
            <span>${Number(order.totalAmount).toFixed(2)}</span>
          </div>
        </div>

        <div className="mt-4 text-center">
          <span className="bg-green-500 text-white px-3 py-1 rounded text-sm">
            Success
          </span>
        </div>
      </div>

      <Link
        href="/products"
        className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg inline-block"
      >
        Continue Shopping
      </Link>
    </div>
  );
}
