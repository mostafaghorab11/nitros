import { FC } from 'react';
import { IoChevronDownOutline } from "react-icons/io5";

interface DropdownProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  id: string;
}

const Dropdown: FC<DropdownProps> = ({ label, value, onChange, options, id }) => {
  return (
    <div className="relative w-full flex flex-col gap-y-2">
      <label 
        htmlFor={id} 
        className="block text-[13px] font-semibold leading-[18.98px] text-gray-700"
      >
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none bg-white rounded-md py-[14px] px-4 leading-[18.98px] font-normal text-[13px] focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <IoChevronDownOutline className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
