"use client";

import { Trash2 } from "lucide-react";
import { CartItem as CartItemType } from "@/lib/cart.types";
import CartItemImage from "@/components/cart/CartItemImage";
import CartItemInfo from "@/components/cart/CartItemInfo";
import CartItemActions from "@/components/cart/CartItemActions";

interface CartItemProps {
  item: CartItemType;
  onSelect?: (id: string) => void;
  onQuantityChange?: (id: string, quantity: number) => void;
  onRemove?: (id: string) => void;
  onWriteNote?: (id: string) => void;
}

const CartItem = ({
  item,
  onSelect,
  onQuantityChange,
  onRemove,
  onWriteNote,
}: CartItemProps) => {
  return (
    <div className="flex items-center gap-6 relative">
      {/* Selection Checkbox */}
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={item.selected}
          onChange={() => onSelect?.(item.id)}
          className="w-5 h-5 rounded border border-grey-one text-orange-one focus:ring-orange-one cursor-pointer"
        />
      </div>

      <div className="flex-1 bg-black-two rounded-xl p-6 border border-grey-one relative">
        <div className="flex items-center gap-6">
          {/* Product Image */}
          <CartItemImage
            image={item.image}
            name={item.name}
            selected={item.selected}
          />

          {/* Product Info */}
          <div className="flex flex-1">
            <CartItemInfo
              name={item.name}
              price={item.price}
              category={item.categoryId}
            />
          </div>

          <button
            onClick={() => onRemove?.(item.id)}
            className="text-red-one hover:scale-110 absolute top-4 right-4 cursor-pointer"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
        {/* Price & Actions */}
        <div className="flex justify-end align-bottom min-w-[260px] absolute bottom-4 right-4">
          <CartItemActions
            id={item.id}
            quantity={item.quantity}
            stock={item.stock}
            onQuantityChange={onQuantityChange}
            // onRemove={onRemove}
            onWriteNote={onWriteNote}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
