'use client';

import Link from 'next/link';

interface AuthLinksProps {
  isMobile?: boolean;
  onLinkClick?: () => void;
}

export default function AuthLinks({ isMobile, onLinkClick }: AuthLinksProps) {
  return (
    <div
      className={
        isMobile
          ? 'mt-6 pt-6 border-t border-gray-100 space-y-1'
          : 'hidden md:flex items-center gap-4 px-[10px]'
      }
    >
      <Link
        href="/sign-in"
        className={
          isMobile
            ? 'block w-full py-3 px-4 rounded-lg text-[15px] font-medium text-gray-dark hover:text-primary hover:bg-gray-50 transition-colors'
            : 'px-4 py-2.5 text-gray-dark hover:text-primary transition-colors text-[16px] font-normal leading-[23.36px]'
        }
        onClick={onLinkClick}
      >
        Sign Up / In
      </Link>
      <Link
        href="/ar"
        className={
          isMobile
            ? 'block w-full py-3 px-4 rounded-lg text-[15px] font-medium text-gray-dark hover:text-primary hover:bg-gray-50 transition-colors font-ibm-arabic'
            : 'px-4 py-2 text-gray-dark hover:text-primary transition-colors text-[16px] font-medium leading-[19.2px] font-ibm-arabic'
        }
        onClick={onLinkClick}
      >
        عربي
      </Link>
    </div>
  );
}
