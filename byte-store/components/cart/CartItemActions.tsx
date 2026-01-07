import { Minus, Plus } from "lucide-react";

interface CartItemActionsProps {
  id: string;
  quantity: number;
  stock: number;
  onQuantityChange?: (id: string, quantity: number) => void;
  // onRemove?: (id: string) => void;
  onWriteNote?: (id: string) => void;
}

const CartItemActions = ({
  id,
  quantity,
  stock,
  onQuantityChange,
  onWriteNote,
}: CartItemActionsProps) => {
  const handleDecrease = () => {
    if (quantity > 1) {
      onQuantityChange?.(id, quantity - 1);
    }
  };

  const handleIncrease = () => {
    onQuantityChange?.(id, quantity + 1);
  };

  return (
    <div className="flex items-center gap-4">
      {/* Write Note */}
      <button
        onClick={() => onWriteNote?.(id)}
        className="text-orange-one hover:text-orange-400 text-sm font-medium "
      >
        Write Note
      </button>

      {/* Divider */}
      <span className="h-5 w-px bg-grey-one" />

      {/* Quantity Controls */}
      <div className="flex items-center gap-3 border border-grey-one rounded-md px-3 py-1">
        <button
          onClick={handleDecrease}
          disabled={quantity <= 1}
          className="w-6 h-6 hover:bg-gray-500 disabled:opacity-40 text-white rounded flex items-center justify-center cursor-pointer"
        >
          <Minus className="w-3 h-3" />
        </button>

        <span className="text-white font-medium min-w-[2ch] text-center">
          {quantity}
        </span>

        <button
          onClick={handleIncrease}
          disabled={quantity >= stock}
          className="w-6 h-6 hover:bg-gray-500 disabled:opacity-40 text-white rounded flex items-center justify-center cursor-pointer"
        >
          <Plus className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

export default CartItemActions;
