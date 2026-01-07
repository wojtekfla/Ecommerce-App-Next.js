"use client";

import { useCartStore } from "@/store/cart.store";
import CartSelectAll from "@/components/cart/CartSelectAll";
import CartItem from "@/components/cart/CartItem";

interface CartContentProps {
  className?: string;
}

const CartContent = ({ className }: CartContentProps) => {
  const items = useCartStore((state) => state.items);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);

  // todo: add to store, const toggleSelect = useCart ...

  const handleQuantityChange = (id: string, quantity: number) => {
    updateQuantity(id, quantity);
  };

  const handleRemove = (id: string) => {
    removeItem(id);
  };

  const handleSelect = (id: string) => {
    // todo
    console.log("Toggle select: ", id);
  };

  const handleWriteNote = (id: string) => {
    // todo
    console.log("Write note for: ", id);
  };

  return (
    <div className={className}>
      <CartSelectAll />

      {items.length === 0 ? (
        <div className="text-center py-8 text-gray-one">Your cart is empty</div>
      ) : (
        <div className="space-y-6">
          {items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onSelect={handleSelect}
              onQuantityChange={handleQuantityChange}
              onRemove={handleRemove}
              onWriteNote={handleWriteNote}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CartContent;
