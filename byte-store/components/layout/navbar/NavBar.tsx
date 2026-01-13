"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, User } from "lucide-react";
import SearchBar from "@/components/ui/SearchBar";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="max-w-[1440px] mx-auto px-4 md:px-6 w-full bg-black-one) text-grey-two) border-2 border-blue-800">
      <div className="">
        <div className="flex items-center justify-between py-3 gap-4 border-b border-black-three)">
          <Link href="/" className="text-2xl font-bold whitespace-nowrap">
            <span className="text-orange-one)]">Byte</span>
            <span className="text-grey-two)]">Store</span>
          </Link>
          <SearchBar />
          <div className="flex flex-row items-center gap-4">
            <Link href="/cart" className="hover:text-orange-one)">
              <ShoppingCart />
            </Link>
            <Link href="/user/profile" className="hover:text-orange-one)">
              <User />
            </Link>
          </div>
        </div>

        {/* Navbar */}
        <div className="flex items-center gap-4 pl-6">
          <nav className="flex justify-center gap-8 py-2 bg-black-one) text-grey-two)">
            <Link
              href="/"
              className={`${
                pathname === "/home" ? "text-orange-one)" : ""
              } text-sm font-medium transition-colors`}
            >
              Home
            </Link>
            <Link
              href="/product"
              className={`${
                pathname === "/product" ? "text-orange-one)" : ""
              } text-sm font-medium transition-colors`}
            >
              Product
            </Link>
            <Link
              href="/contact"
              className={`${
                pathname === "/contact" ? "text-orange-one)" : ""
              } text-sm font-medium transition-colors`}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
