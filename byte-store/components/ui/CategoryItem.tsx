"use client";

import Link from "next/link";

type ItemProps = {
	name: string;
	href: string;
	Icon: React.ComponentType<{ className?: string }>;
};

export const CategoryItem = ({ name, href, Icon }: ItemProps) => {
	return (
		<div className="hover:scale-105 transition-transform">
			<Link
			href={href}
			className="flex flex-col items-center justify-center bg-[var(--color-black-two)] border-1 border-b-gray-400 rounded-[8px] max-w-[220px] max-h-[190px] gap-6 p-3 w-[90%]">
			<Icon className="mt-1" />
			<span className="mt-2 text-sm text-[var(--color-white-one)] font-medium">{name}</span>
		</Link>
		</div>
		
	);
};

export default CategoryItem;
