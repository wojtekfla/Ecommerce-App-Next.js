import CartContent from "@/components/cart/CartContent";
import CartSummary from "@/components/cart/CartSummary";
import { CartItem, CartSummary as CartSummaryType } from "@/lib/cart.types";

interface CartLayoutPage {
  initialCart?: CartItem[];
  summary?: CartSummaryType;
}

const CartLayout = ({ initialCart, summary }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <CartContent className="lg:col-span-8" initialCart={initialCart} />
      <CartSummary className="lg:col-span-4" summary={summary} />
    </div>
  );
};

export default CartLayout;
