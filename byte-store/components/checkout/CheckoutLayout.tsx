// from AI

"use client";
import { useState } from "react";
import OrderSummary from "./OrderSummary";
import AddressForm from "./AddressForm";
import CheckoutButton from "./CheckoutButton";
import Image from "next/image";
import { DatabaseCart } from "@/lib/cart.types";

interface CheckoutLayoutProps {
  cart: DatabaseCart;
  user: {
    id: string;
    email: string;
    name: string;
  };
}

export default function CheckoutLayout({ cart, user }: CheckoutLayoutProps) {
  const [address, setAddress] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-400 mb-8">
        <span>Home</span> <span>Product</span> <span>Checkout</span>
      </nav>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-3 lg:gap-8">
        {/* Left - Checkout Form */}
        <div className="lg:col-span-2 space-y-6">
          <h1 className="text-2xl font-bold text-white">Your Order</h1>

          {/* Order Items */}
          <div className="bg-card p-6 rounded-lg border">
            {cart.items.map((item) => (
              <div key={item.id} className="flex items-center space-x-4 py-4">
                <Image
                  src={item.product.imageUrl}
                  alt={item.product.name}
                  className="w-16 h-16 rounded"
                />
                <div className="flex-1">
                  <h3 className="text-white">{item.product.name}</h3>
                  <span className="text-orange-500 bg-orange-500/10 px-2 py-1 rounded text-xs">
                    Mouse
                  </span>
                </div>
                <div className="text-white font-medium">
                  ${Number(item.product.price).toFixed(2)}
                </div>
                <div className="text-gray-400">x{item.quantity}</div>
              </div>
            ))}
          </div>

          <AddressForm onAddressChange={setAddress} />
          <CheckoutButton
            cart={cart}
            address={address}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
        </div>

        {/* Right - Order Summary */}
        <OrderSummary cart={cart} />
      </div>
    </div>
  );
}
