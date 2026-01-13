// From AI

import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { getMyCart } from "@/lib/actions/cart.actions";
import CheckoutLayout from "@/components/checkout/CheckoutLayout";

export const metadata = {
  title: "Checkout - Byte Store",
};

export default async function CheckoutPage() {
  const session = await auth();
  if (!session) {
    redirect("/login?callbackUrl=/checkout");
  }

  const cart = await getMyCart();
  if (!cart || cart.items.length === 0) {
    redirect("/cart");
  }

  return <CheckoutLayout cart={cart} user={session.user} />;
}
