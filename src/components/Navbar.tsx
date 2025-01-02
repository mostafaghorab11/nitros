import Image from 'next/image';
import Link from 'next/link';
import NavLinks from './NavLinks';
import Drawer from './Drawer';

export default function Navbar() {
  return (
    <nav className="bg-white rounded-[20px]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 h-[100px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Nitros Logo"
            width={89.1}
            height={28}
            priority
          />
        </Link>

        {/* Navigation Links */}
        <NavLinks />

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-4 px-[10px]">
          <Link
            href="/sign-in"
            className="px-4 py-2.5 text-gray-dark hover:text-primary transition-colors text-[16px] font-normal leading-[23.36px]"
          >
            Sign Up / In
          </Link>
          <Link
            href="/ar"
            className="px-4 py-2 text-gray-dark hover:text-primary transition-colors text-[16px] font-medium leading-[19.2px] font-ibm-arabic"
          >
            عربي
          </Link>
        </div>
        {/* Mobile Drawer */}
        <Drawer />
      </div>
    </nav>
  );
}
