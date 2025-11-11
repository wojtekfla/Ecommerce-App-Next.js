"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, User } from "lucide-react";
import SearchBar from "@/components/ui/SearchBar";

const Navbar = () => {
	const pathname = usePathname();

	return (
		<header className="w-full flex flex-col bg-[var(--color-black-one)] text-[var(--color-grey-two)]">
			<div className="flex items-center justify-between px-6 py-3 border-b border-[var(--color-black-three)]">
				<Link
					href="/"
					className="text-2xl font-bold">
          <span className="text-[var(--color-orange-one)]">Byte</span>
          <span className="text-[var(--color-grey-two)]">Store</span>
				</Link>
        <SearchBar />
        <div className="flex flex-row gap-4">
          <Link href="/cart" className="hover:text-[var(--color-orange-one)]">
					<ShoppingCart />
				</Link>
        <Link
					href="/user/profile"
					className="hover:text-[var(--color-orange-one)]">
					<User />
				</Link>
        </div>
      </div>
      {/* Navbar */}
			<div className="flex items-center gap-4 pl-6">
        <nav className="flex justify-center gap-8 py-2 bg-[var(--color-black-one)] text-[var(--color-grey-two)]">
        <Link 
          href="/home"
          className={`${pathname === "/home" ? "text-[var(--color-orange-one)]" : ""} text-sm font-medium transition-colors`}>
          Home
        </Link>
        <Link 
          href="/product"
          className={`${pathname === "/product" ? "text-[var(--color-orange-one)]" : ""} text-sm font-medium transition-colors`}>
          Product
        </Link>
        <Link 
          href="/contact"
          className={`${pathname === "/contact" ? "text-[var(--color-orange-one)]" : ""} text-sm font-medium transition-colors`}>
          Contact
        </Link>
      </nav>
				
				
			</div>

      
		</header>

		// <section className="m-1 p-1 border-2 border-b-yellow-50 bg-[var(--color-black-one)] w-full max-w-[1440px] h-[214px]" >
		//   <header className="border-b border-[var(--color-grey-two)]">
		//     <div className="container mx-auto flex justify-between items-center px-4 py-4">
		//       <Link href='/' className="text-2xl font-bold text-[var(--color-grey-two)]">
		//         ByteStore
		//       </Link>
		//     </div>
		//     <nav className="hidden md:flex gap-6 text-[var(--color-grey-two)]">
		//       <Link href="/">Home</Link>
		//       <Link href="/product">Products</Link>
		//       <div>Input fields</div>
		//       <Link href="/cart">Cart</Link>
		//       <Link href="/user/profile">Profile</Link>
		//     </nav>

		//   </header>
	);
};

export default Navbar;
