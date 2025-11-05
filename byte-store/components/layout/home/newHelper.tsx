import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";

type ProductCardProps = {
  imageSrc: string;
  title: string;
  description: string;
  price: number;
  promoPrice?: number;
}

const ProductCard = ({ imageSrc, title, description, price, promoPrice }: ProductCardProps) => {
  return (
    <div className="bg-[var(--color-black-two)] rounded-xl shadow flex flex-col w-[260px] h-[340px] p-0 border border-gray-700">
      <div className="relative bg-white rounded-t-xl flex items-center justify-center h-[150px]">
        <Image
          src={imageSrc}
          alt={title}
          width={180}
          height={110}
          className="object-contain"
        />
        <div className="absolute top-3 left-3 bg-[var(--color-black-two)] rounded-md p-1 flex items-center justify-center">
          <FaShoppingCart className="text-white text-lg" />
        </div>
      </div>
      <div className="flex flex-col gap-2 px-4 py-3 flex-1">
        <span className="bg-[var(--color-orange-two)] text-white text-xs font-medium rounded px-3 py-1 w-fit mb-1">{title}</span>
        <div className="text-base text-white mb-2">{description}</div>
        <div className="flex items-center gap-2 mt-auto">
          {promoPrice ? (
            <>
              <span className="text-2xl font-bold text-white">${promoPrice.toFixed(2)}</span>
              <span className="line-through text-gray-400 text-lg">${price.toFixed(2)}</span>
            </>
          ) : (
            <span className="text-2xl font-bold text-white">${price.toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;