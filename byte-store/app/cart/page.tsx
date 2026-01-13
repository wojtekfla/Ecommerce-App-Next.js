import CartLayout from "@/components/cart/CartLayout";
import { loadCartFromDatabase } from "@/lib/actions/cart.actions";
import { getCartSummary } from "@/lib/actions/cart.actions";

const CartPage = async () => {
  const dbCart = await loadCartFromDatabase();
  const summary = await getCartSummary();

  return (
    <div>
      <div>Cart Page</div>
      <CartLayout initialCart={dbCart} summary={summary} />
    </div>
  );
};

export default CartPage;
