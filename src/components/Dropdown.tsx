import { useLanguage } from '@/contexts/LanguageContext';
import { translate } from '@/utils/translate';
import { FC } from 'react';
import { IoChevronDownOutline } from 'react-icons/io5';

interface DropdownProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  id: string;
}

const Dropdown: FC<DropdownProps> = ({
  label,
  value,
  onChange,
  options,
  id,
}) => {
  const { locale } = useLanguage();

  return (
    <div className="relative w-[300px] sm:w-full flex flex-col gap-y-2 mx-auto">
      <label
        htmlFor={id}
        className="block text-[13px] font-semibold leading-[18.98px] text-gray-700"
      >
        {translate(label, locale)}
      </label>
      <div className="relative">
        <select
          id={id}
          value={translate(value, locale)}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none bg-white rounded-md py-[14px] px-4 leading-[18.98px] font-normal text-[13px] focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent rtl:text-right ltr:text-left max-h-[200px] overflow-y-auto"
          style={{ maxWidth: '100vw' }}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {translate(option, locale)}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 ltr:right-0 rtl:left-0 flex items-center px-2 text-gray-700">
          <IoChevronDownOutline className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
