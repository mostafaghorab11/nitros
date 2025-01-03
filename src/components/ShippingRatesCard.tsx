import { useState } from 'react';
import { MdInfo } from 'react-icons/md';
import CourierCard from './CourierCard';

interface CourierRate {
  name: string;
  logo: string;
  rate: number;
}

const couriers: CourierRate[] = [
  { name: 'SPL', logo: '/mini-logo1.svg', rate: 13.75 },
  { name: 'Aramex', logo: 'mini-logo2.svg', rate: 13.75 },
  { name: 'DHL', logo: '/mini-logo3.svg', rate: 13.75 },
  { name: 'J&T Express', logo: '/mini-logo4.svg', rate: 13.75 },
];

const ShippingRatesCard = () => {
  const [expandedCourier, setExpandedCourier] = useState<string | null>(
    'Aramex'
  );

  const toggleCourier = (courierName: string) => {
    setExpandedCourier(expandedCourier === courierName ? null : courierName);
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-border w-full max-w-md mx-auto sm:hidden">
      {/* Header */}
      <div className="grid grid-cols-2 items-start px-3 py-2 bg-gray-light rounded-t-2xl">
        <span className="py-2 px-2.5 text-[10px]  text-gray-500 font-semibold leading-3">COURIER</span>
        <div className="flex items-center gap-1">
          <span className="py-2 px-2.5 text-[10px] text-gray-500 font-semibold leading-3">
            RATE (SAR)
          </span>
          <MdInfo width={10} height={10} color="text-gray-500" />
        </div>
      </div>

      {/* Courier Cards */}
      <div>
        {couriers.map((courier) => (
          <CourierCard
            key={courier.name}
            {...courier}
            isExpanded={expandedCourier === courier.name}
            onToggle={() => toggleCourier(courier.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default ShippingRatesCard;
