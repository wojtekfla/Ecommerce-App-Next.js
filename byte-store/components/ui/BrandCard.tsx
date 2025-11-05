import Image from "next/image";

type BrandCardProps = {
	imageSrc: string;
	title: string;
};

const BrandCard = ({ imageSrc, title }: BrandCardProps) => {
	return (
		<div id="div-1" className="flex flex-col justify-center items-center border border-gray-600 rounded-lg bg-[var(--color-black-two)] w-[220px] h-[190px] p-4">
      <div className="relative w-[120px] h-[46px] flex">
				<Image
					src={imageSrc}
					alt={title}
					fill
					className="object-contain"
				/>
      </div>

			<div className="text-sm text-white mt-4">{title}</div>
		</div>
	);
};

export default BrandCard;
