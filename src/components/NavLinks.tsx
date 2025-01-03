'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { translate } from '@/utils/translate';

const navLinks = [
  { name: 'nav.home', href: '/' },
  { name: 'common.rates', href: '#rates' },
  { name: 'nav.shipping', href: '/shipping' },
  { name: 'nav.pricing', href: '/pricing' },
  { name: 'nav.whyNitros', href: '/why-nitros' },
];

interface NavLinksProps {
  isMobile?: boolean;
  onLinkClick?: () => void;
}

export default function NavLinks({ isMobile, onLinkClick }: NavLinksProps) {
  const pathname = usePathname();
  const { locale } = useLanguage();

  return (
    <div className={isMobile ? "space-y-1" : "hidden md:flex items-center p-[6px]"}>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.name}
            href={link.href}
            onClick={onLinkClick}
            className={
              isMobile
                ? `block w-full py-3 px-4 rounded-lg text-[15px] font-medium transition-colors ${
                    isActive
                      ? 'text-primary bg-primary/5'
                      : 'text-gray-dark hover:text-primary hover:bg-gray-50'
                  }`
                : `text-[16px] leading-[23.36px] transition-colors px-4 py-[10px] ${
                    isActive
                      ? 'text-primary font-semibold'
                      : 'text-gray-dark hover:text-primary font-normal'
                  }`
            }
            replace={true}
          >
            {translate(link.name, locale)}
          </Link>
        );
      })}
    </div>
  );
}
