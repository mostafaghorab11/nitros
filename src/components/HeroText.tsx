'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { translate } from '@/utils/translate';
import Button from './Button';

const HeroText = () => {
  const { locale } = useLanguage();

  return (
    <div className="flex flex-col gap-6 lg:gap-8 flex-1">
      <div className="flex flex-col gap-4">
        <h1 className="text-[31px] sm:text-[49px] sm:leading-[70.07px] font-semibold leading-[44.64px] rtl:text-right ltr:text-left">
          <span className="text-primary">
            {translate('hero.titleSpan1', locale)}
          </span>{' '}
          <span className="text-gray-dark">
            {translate('hero.title', locale)}{' '}
          </span>
          <span className="text-primary whitespace-nowrap">
            {translate('hero.titleSpan2', locale)}
          </span>
        </h1>
        <p className="text-base leading-[23.36px] lg:text-xl lg:leading-[32.8px] font-normal text-gray-dark max-w-[570px] rtl:text-right ltr:text-left">
          {translate('hero.subTitle', locale)}
        </p>
      </div>
      <div>
        <Button>{translate('hero.button', locale)}</Button>
      </div>
    </div>
  );
};

export default HeroText;
