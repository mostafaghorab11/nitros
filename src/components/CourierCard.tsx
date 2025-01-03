import Image from 'next/image';
import { FC } from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';
import { IoChevronDownOutline, IoChevronUpOutline } from 'react-icons/io5';

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
  return (
    <div>
      <button
        onClick={onToggle}
        className="w-full grid grid-cols-2 items-center h-[74px] py-2 px-3 bg-white"
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
        <div className="flex flex-col gap-4 px-4 py-3 bg-gray-light">
          {/* Delivery Time and COD */}
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1.5">
              <div className="text-[10px] leading-3 text-gray-400 uppercase font-semibold">
                DELIVERY TIME
              </div>
              <div className="font-normal text-[13px] leading-[18.98px]">
                1-3 Days
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-1">
              <div className="text-[10px] leading-3 text-gray-400 uppercase font-semibold">
                COD
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
                HANDOFF OPTIONS
              </div>
              <div className="font-normal text-[13px] leading-[18.98px]">
                Pickup & branch drop-off
              </div>
            </div>

            <div className="flex flex-col gap-1.5 text-right">
              <div className="text-[10px] leading-3 text-gray-400 uppercase font-semibold">
                DELIVERY OPTIONS
              </div>
              <div className="font-normal text-[13px] leading-[18.98px]">
                Pickup & branch drop-off
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourierCard;
