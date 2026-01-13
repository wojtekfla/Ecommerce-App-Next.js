import Image from "next/image";
import { ShoppingCart } from "lucide-react";

type ProductCardProps = {
  imageSrc: string;
  title: string;
  description: string;
  price: number;
  promoPrice?: number;
};

const SimpleProductCard = ({
  imageSrc,
  title,
  description,
  price,
  promoPrice,
}: ProductCardProps) => {
  return (
    <div
      id="div-1"
      className="relative flex flex-row rounded bg-[var(--color-black-two)] text-white w-[300px] min-h-[300px] border border-grey-one p-2"
    >
      <div id="div-2" className="flex-1 flex-col justify-start gap-2 ">
        <Image
          src={imageSrc}
          alt={title}
          width={200}
          height={200}
          className="rounded-md object-cover"
        />
        <div className="bg-[var(--color-black-one)] text-white p-0.5 rounded absolute top-5 left-3 ">
          <ShoppingCart />
        </div>
        <div
          id="div-3"
          className="max-w-[300px] mt-2 flex flex-col gap-2 flex-1"
        >
          <button className="bg-orange-one rounded text-white text-xs py-1 px-2 w-fit">
            {title}
          </button>
          <div className="text-sm">{description}</div>
          <div className="text-amber-300 mt-auto">
            {promoPrice ? (
              <>
                <span>${promoPrice.toFixed(2)}</span>
                <span className="line-through text-gray-400">
                  ${Number(price).toFixed(2)}
                </span>
              </>
            ) : (
              <span>${Number(price).toFixed(2)}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleProductCard;
