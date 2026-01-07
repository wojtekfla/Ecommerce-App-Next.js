import CartContent from "@/components/cart/CartContent";
import CartSummary from "@/components/cart/CartSummary";

const CartLayout = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <CartContent className="lg:col-span-8" />
      <CartSummary className="lg:col-span-4" />
    </div>
  );
};

export default CartLayout;
