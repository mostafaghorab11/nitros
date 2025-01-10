import Image from 'next/image';
import Link from 'next/link';
import AuthLinks from './AuthLinks';
import NavLinks from './NavLinks';
import Drawer from './Drawer';

export default function Navbar() {
  return (
    <nav className="bg-white rounded-[20px]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 h-[100px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.svg"
            alt="Nitros Logo"
            width={89.1}
            height={28}
            priority
          />
        </Link>

        {/* Navigation Links */}
        <NavLinks />

        {/* Right Section */}
        <AuthLinks />

        {/* Mobile Drawer */}
        <Drawer />
      </div>
    </nav>
  );
}
