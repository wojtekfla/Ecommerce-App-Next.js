interface CartItemInfoProps {
  name: string;
  price: number;
  category: string;
}

const CartItemInfo = ({ name, price, category }: CartItemInfoProps) => {
  return (
    <div className="flex-1 space-y-2">
      {/* Product Name */}
      <h3 className="text-white font-medium text-sm leading-tight">{name}</h3>
      {/* Category Badge */}
      <div className="flex items-center">
        <span className="inline-block bg-orange-one text-white text-xs font-medium px-2 py-1 rounded">
          {category}
        </span>
      </div>

      <div>
        {/* Price */}
        <div className="text-white font-bold text-lg mt-2">
          ${price.toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default CartItemInfo;
