import Image from "next/image";

const Footer = () => {
  return (
    <footer className="max-w-[1440px] mx-auto px-4 md:px-6 w-full py-12 md:py-16 bg-[var(--color-black-two)] text-[var(--color-grey-two)]">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 items-start ">
        <div
          className="flex flex-col justify-between py-1 gap-4 h-full"
          id="logo"
        >
          <div>
            <span className="text-[var(--color-orange-one)]">BYTE-</span>
            <span className="text-[var(--color-white-one)]">Store</span>
          </div>
          <p className="text-sm text-[var(--color-grey-three)]">
            © 2025 BYTE-Store. All rights reserved
          </p>
          <div className="flex items-center gap-3 mt-2 flex-wrap">
            <div className="bg-white-one rounded w-[46px] h-[30px] flex items-center justify-center p-1">
              <Image
                src="/icons/Visa.png"
                alt="Visa card"
                width={50}
                height={35}
                className="object-contain"
              />
            </div>
            <div className="bg-white-one rounded w-[46px] h-[30px] flex items-center justify-center p-1">
              <Image
                src="/icons/Mastercard.png"
                alt="Mastercard card"
                width={50}
                height={35}
                className="object-contain"
              />
            </div>
            <div className="bg-white-one rounded w-[46px] h-[30px] flex items-center justify-center p-1">
              <Image
                src="/icons/Paypal.png"
                alt="Paypal"
                width={50}
                height={35}
                className="object-contain"
              />
            </div>
            <div className="bg-white-one rounded w-[46px] h-[30px] flex items-center justify-center p-1">
              <Image
                src="/icons/Apple-Pay.png"
                alt="Apple Pay"
                width={50}
                height={35}
                className="object-contain"
              />
            </div>
            <div className="bg-white-one rounded w-[46px] h-[30px] flex items-center justify-center p-1">
              <Image
                src="/icons/G-Pay.png"
                alt="Google pay"
                width={50}
                height={35}
                className="object-contain"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-around py-1 gap-4" id="menu">
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-semibold">Company</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li>About Us</li>
              <li>Contact</li>
              <li>Partner</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-semibold">Social</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Facebook</li>
              <li>Linkedln</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-semibold">FAQ</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li>Account</li>
              <li>Deliveries</li>
              <li>Orders</li>
              <li>Payments</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-semibold">Resources</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li>E-books</li>
              <li>Tutorials</li>
              <li>Course</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
