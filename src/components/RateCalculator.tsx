'use client';

import { useState } from 'react';
import Button from './Button';
import Dropdown from './Dropdown';
import ShippingRatesCard from './ShippingRatesCard';

const cities = ['Riyadh', 'Jeddah', 'Dammam', 'Mecca', 'Medina'];

const RateCalculator = () => {
  const [fromCity, setFromCity] = useState('Riyadh');
  const [toCity, setToCity] = useState('Jeddah');

  return (
    <section className="w-full bg-gradient-to-r from-gray-light to-white rounded-[20px]">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-16 sm:px-8 flex flex-col items-center gap-8">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-[25px] sm:text-[39px] leading-[30px] sm:leading-[64.74px] font-normal mb-4 text-gray-900">
            Rates Calculator
          </h2>
          <p className="text-gray-600 font-normal text-[13px] sm:text-[20px] leading-[18.98px] sm:leading-[32.8px]">
            Calculate shipping rates easily and compare prices between shipping
            companies
          </p>
        </div>

        {/* Calculator Form */}
        <div className="w-[450px] p-[10px] flex flex-col justify-right gap-y-[10px]">
          <div>
            <Dropdown
              id="shippingFrom"
              label="Shipping From"
              value={fromCity}
              onChange={setFromCity}
              options={cities}
            />
          </div>

          <div>
            <Dropdown
              id="shippingTo"
              label="Shipping To"
              value={toCity}
              onChange={setToCity}
              options={cities}
            />
          </div>
        </div>

        <Button variant="secondary">Calculate Now</Button>

        {/* Mobile-only Shipping Rates Card */}
        <ShippingRatesCard />
      </div>
    </section>
  );
};

export default RateCalculator;
