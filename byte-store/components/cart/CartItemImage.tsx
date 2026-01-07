import Image from "next/image";

interface CartItemImageProps {
  image: string;
  name: string;
  selected?: boolean;
}

const CartItemImage = ({
  image,
  name,
  selected = false,
}: CartItemImageProps) => {
  return (
    <div
      className={`relative w-30 h-24 rounded-lg overflow-hidden bg-gray-600 ${
        selected ? "ring-2 ring-orange-one" : ""
      }`}
    >
      <Image
        src={image || "/placeholder-image.png"}
        alt={name}
        fill
        className="object-cover"
        sizes="64px"
      />
    </div>
  );
};

export default CartItemImage;
