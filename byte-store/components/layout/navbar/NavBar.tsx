"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, User } from "lucide-react";
import SearchBar from "@/components/ui/SearchBar";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="max-w-[1440px] mx-auto px-4 md:px-6 w-full bg-[var(--color-black-one)] text-[var(--color-grey-two)] border-2 border-blue-800">
      <div className="">
        <div className="flex items-center justify-between py-3 gap-4 border-b border-[var(--color-black-three)]">
          <Link href="/" className="text-2xl font-bold whitespace-nowrap">
            <span className="text-[var(--color-orange-one)]">Byte</span>
            <span className="text-[var(--color-grey-two)]">Store</span>
          </Link>
          <SearchBar />
          <div className="flex flex-row items-center gap-4">
            <Link href="/cart" className="hover:text-[var(--color-orange-one)]">
              <ShoppingCart />
            </Link>
            <Link
              href="/user/profile"
              className="hover:text-[var(--color-orange-one)]"
            >
              <User />
            </Link>
          </div>
        </div>

        {/* Navbar */}
        <div className="flex items-center gap-4 pl-6">
          <nav className="flex justify-center gap-8 py-2 bg-[var(--color-black-one)] text-[var(--color-grey-two)]">
            <Link
              href="/home"
              className={`${
                pathname === "/home" ? "text-[var(--color-orange-one)]" : ""
              } text-sm font-medium transition-colors`}
            >
              Home
            </Link>
            <Link
              href="/product"
              className={`${
                pathname === "/product" ? "text-[var(--color-orange-one)]" : ""
              } text-sm font-medium transition-colors`}
            >
              Product
            </Link>
            <Link
              href="/contact"
              className={`${
                pathname === "/contact" ? "text-[var(--color-orange-one)]" : ""
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
