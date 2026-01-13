// from AI

"use client";
import { createOrder } from "@/lib/actions/order.actions";
import { DatabaseCart } from "@/lib/cart.types";

interface AddressData {
  country: string;
  province: string;
  city: string;
  postalCode: string;
  address: string;
  makeMain: boolean;
}

interface CheckoutButtonProps {
  cart: DatabaseCart;
  address: AddressData | null;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

export default function CheckoutButton({
  cart,
  address,
  isLoading,
  setIsLoading,
}: CheckoutButtonProps) {
  const handleCheckout = async () => {
    if (!address || !address.address) {
      alert("Please fill in address");
      return;
    }

    setIsLoading(true);

    try {
      const result = await createOrder({
        cartId: cart.id,
        address: address,
        paymentMethod: "Apple Pay",
        shippingMethod: "NexusHub Courier",
      });

      if (result.success) {
        window.location.href = `/checkout/success?orderId=${result.orderId}`;
      } else {
        alert(result.message || "Order failed");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Checkout failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={!address || isLoading}
      className={`w-full py-4 rounded-lg text-white font-medium ${
        !address || isLoading
          ? "bg-gray-600 cursor-not-allowed"
          : "bg-orange-500 hover:bg-orange-600"
      }`}
    >
      {isLoading ? "Processing..." : "Pay Now"}
    </button>
  );
}
