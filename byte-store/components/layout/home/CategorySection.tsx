"use client";

import {
	MouseIcon,
	MonitorIcon,
	HeadphoneIcon,
	KeyboardIcon,
	WebcamIcon,
} from "@/components/ui/CategoryIcons";
import CategoryItem from "@/components/ui/CategoryItem";

const categories = [
	{ name: "Mouse", href: "/category/mouses", Icon: MouseIcon },
	{ name: "Monitor", href: "/category/monitors", Icon: MonitorIcon },
	{ name: "Headphone", href: "/category/headphones", Icon: HeadphoneIcon },
	{ name: "Keyboard", href: "/category/keyboards", Icon: KeyboardIcon },
	{ name: "Webcam", href: "/category/webcams", Icon: WebcamIcon },
];

const CategorySection = () => {
	return (
		<>
			<section
				id="category-wrapper"
				className="border-2 bg-[var(--color-black-one)] flex flex-col justify-start max-w-[1360px] mx-auto w-full px-4 py-8">
				<h2 className="text-xl text-white-one mb-4">Category</h2>
				<div id="" className="grid grid-cols-1 min-[400px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 justify-center">
					{categories.map((cat) => (
						<CategoryItem key={cat.name} {...cat} />
					))}
				</div>
			</section>
		</>
	);
};

export default CategorySection;

/*
<section id='category-wrapper' className="flex gap-6 p-6 justify-center">
<MouseIcon className='text-orange-400' />
      <MonitorIcon />
      <HeadphoneIcon />
      <KeyboardIcon />
      <WebcamIcon />

*/
