'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import { translate } from '../utils/translate';

const shippingPartners = [
  { name: 'SPL', logo: '/images/mini-logo1.svg' },
  { name: 'Aramex', logo: '/images/mini-logo2.svg' },
  { name: 'DHL', logo: '/images/mini-logo3.svg' },
  { name: 'J&T', logo: '/images/mini-logo4.svg' },
  { name: 'KnockBox', logo: '/images/mini-logo5.svg' },
];

export default function Footer() {
  const { locale } = useLanguage();
  return (
    <footer className="w-full py-16 bg-gray-light">
      <div className="container mx-auto px-8">
        <div className="flex flex-col items-center gap-8 text-center">
          {/* Footer Text */}
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-[25px] sm:text-[39px] font-normal leading-9 sm:leading-[64.74px] text-gray-dark">
              {translate('footer.title', locale)}
            </h2>
            <p className="text-gray-dark text-[13px] sm:text-xl leading-[18.98px] sm:leading-[32.8px] font-normal">
              {translate('footer.subTitle', locale)}
            </p>
          </div>

          <div className="flex justify-center items-center flex-wrap gap-8 sm:gap-16 p-4 sm:p-8">
            {shippingPartners.map((partner) => (
              <div
                key={partner.name}
                className="w-[60px] h-[60px] relative rounded-[3px]"
              >
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
