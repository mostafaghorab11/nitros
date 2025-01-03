'use client';

import Image from 'next/image';
import { FC } from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';
import { IoChevronDownOutline, IoChevronUpOutline } from 'react-icons/io5';
import { useLanguage } from '@/contexts/LanguageContext';
import { translate } from '@/utils/translate';

interface CourierCardProps {
  name: string;
  logo: string;
  rate: number;
  isExpanded: boolean;
  onToggle: () => void;
}

const CourierCard: FC<CourierCardProps> = ({
  name,
  logo,
  rate,
  isExpanded,
  onToggle,
}) => {
  const { locale } = useLanguage();

  return (
    <div>
      <button
        onClick={onToggle}
        className="w-full grid grid-cols-2 items-center h-[74px] py-2 px-3 bg-white rounded-2xl hover:bg-gray-50 transition-colors duration-200"
      >
        {/* Image with name  */}
        <div className="flex items-center gap-2 py-2 px-2.5">
          <div className="w-4 h-4 relative rounded-[3px]">
            <Image
              src={logo}
              alt={`${name} logo`}
              width={16}
              height={16}
              className="object-contain"
            />
          </div>
          <span className="text-[13px] font-normal leading-[15.6px]">
            {name}
          </span>
        </div>

        {/* Rate and expand icon */}
        <div className="flex items-center justify-between py-2 px-2.5">
          <span className="text-[13px] font-normal leading-[18.98px]">
            {rate} SAR
          </span>
          {isExpanded ? (
            <IoChevronUpOutline
              height={24}
              width={24}
              className="text-gray-dark"
            />
          ) : (
            <IoChevronDownOutline
              height={24}
              width={24}
              className="text-gray-dark"
            />
          )}
        </div>
      </button>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="flex flex-col gap-4 px-4 py-3 bg-gray-light rounded-b-2xl">
          {/* Delivery Time and COD */}
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1.5">
              <div className="text-[10px] leading-3 text-gray-400 uppercase font-semibold">
                {translate('rates.deliveryTime', locale)}
              </div>
              <div className="font-normal text-[13px] leading-[18.98px]">
                {translate('rates.time', locale)}
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-1">
              <div className="text-[10px] leading-3 text-gray-400 uppercase font-semibold">
                {translate('rates.cod', locale)}
              </div>
              <BsCheckCircleFill
                height={16}
                width={16}
                className="text-green-500"
              />
            </div>
          </div>

          {/* HandOff options and Delivery options */}
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1.5">
              <div className="text-[10px] leading-3 text-gray-400 uppercase font-semibold">
                {translate('rates.handoff', locale)}
              </div>
              <div className="font-normal text-[13px] leading-[18.98px]">
                {translate('rates.pick&branch', locale)}
              </div>
            </div>

            <div className="flex flex-col gap-1.5 text-right">
              <div className="text-[10px] leading-3 text-gray-400 uppercase rtl:text-left font-semibold">
                {translate('rates.delivery options', locale)}
              </div>
              <div className="font-normal text-[13px] leading-[18.98px]">
                {translate('rates.pick&branch', locale)}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourierCard;
