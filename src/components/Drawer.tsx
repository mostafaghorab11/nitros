'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { IoIosMenu } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';
import AuthLinks from './AuthLinks';
import NavLinks from './NavLinks';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Drawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const { dir } = useLanguage();

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  }; 

  return (
    <>
      <button
        className="md:hidden text-gray-dark p-2"
        onClick={toggleDrawer}
        aria-label="Toggle navigation menu"
        aria-expanded={isDrawerOpen}
        aria-controls="mobile-menu"
      >
        <IoIosMenu size={32} />
      </button>

      {isDrawerOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 md:hidden">
          <div
            ref={drawerRef}
            id="mobile-menu"
            className={`fixed top-0 ${dir === 'rtl' ? 'left-0' : 'right-0'} w-[280px] h-full bg-white shadow-lg z-50`}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <Link
                href="/"
                className="flex items-center"
                onClick={toggleDrawer}
              >
                <Image
                  src="/images/logo.svg"
                  alt="Nitros Logo"
                  width={63.64}
                  height={24}
                  priority
                />
              </Link>
              <button
                className="text-gray-dark p-2 hover:text-primary transition-colors"
                onClick={toggleDrawer}
                aria-label="Close navigation menu"
              >
                <IoClose size={24} />
              </button>
            </div>

            <nav className="p-6">
              <NavLinks isMobile onLinkClick={toggleDrawer} />
              <AuthLinks isMobile onLinkClick={toggleDrawer} />
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
