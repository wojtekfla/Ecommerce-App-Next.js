import CartItem from "@/components/cart/CartItem";
import CartSelectAll from "@/components/cart/CartSelectAll";

const CartItemsList = () => {
  return (
    <>
      <CartSelectAll />
      <div className="space-y-4">
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default CartItemsList;
