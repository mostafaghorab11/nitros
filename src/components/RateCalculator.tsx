'use client';

import { useState } from 'react';
import Button from './Button';
import Dropdown from './Dropdown';
import ShippingRatesCard from './ShippingRatesCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { translate } from '@/utils/translate';

const cities = [
  'cities.riyadh',
  'cities.jeddah',
  'cities.dammam',
  'cities.mecca',
  'cities.medina'
];

const RateCalculator = () => {
  const { locale } = useLanguage();
  const [fromCity, setFromCity] = useState<string>('cities.riyadh');
  const [toCity, setToCity] = useState<string>('cities.jeddah');

  const handleFromCityChange = (value: string) => {
    if (value === toCity) {
      // If selected city is same as destination, swap them
      setToCity(fromCity);
    }
    setFromCity(value);
  };

  const handleToCityChange = (value: string) => {
    if (value === fromCity) {
      // If selected city is same as origin, swap them
      setFromCity(toCity);
    }
    setToCity(value);
  };

  return (
    <section id="rates" className="w-full bg-gradient-to-r from-gray-light to-white rounded-[20px]">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-16 sm:px-8 flex flex-col items-center gap-8">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-[25px] sm:text-[39px] leading-[30px] sm:leading-[64.74px] font-normal mb-4 text-gray-900">
            {translate('common.rates', locale)}
          </h2>
          <p className="text-gray-600 font-normal text-[13px] sm:text-[20px] leading-[18.98px] sm:leading-[32.8px]">
            {translate('rates.subTitle', locale)}
          </p>
        </div>

        {/* Calculator Form */}
        <div className="w-[450px] p-[10px] flex flex-col justify-right gap-y-[10px]">
          <div>
            <Dropdown
              id="shippingFrom"
              label={translate('rates.shippingFrom', locale)}
              value={fromCity}
              onChange={handleFromCityChange}
              options={cities}
            />
          </div>

          <div>
            <Dropdown
              id="shippingTo"
              label={translate('rates.shippingTo', locale)}
              value={toCity}
              onChange={handleToCityChange}
              options={cities}
            />
          </div>
        </div>

        <Button variant="secondary">{translate('rates.calculateNow', locale)}</Button>

        <div className="w-full">
          <ShippingRatesCard />
        </div>
      </div>
    </section>
  );
};

export default RateCalculator;
