import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  href?: string;
}

export default function Button({
  children,
  className,
  variant = 'primary',
  href,
  ...props
}: ButtonProps) {
  const baseStyles =
    'rounded-full font-medium transition-all duration-300 ease-out inline-flex items-center justify-center px-8 py-2 active:scale-95';
    
  const variants = {
    primary: 'bg-primary text-white hover:opacity-90 active:opacity-100 text-[20px] font-semibold leading-[32.8px]',
    secondary: 'bg-secondary text-white hover:opacity-90 active:opacity-100 text-[16px] font-semibold leading-[26.24px]',
  };

  const classes = twMerge(
    baseStyles,
    variants[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button {...props} className={classes}>
      {children}
    </button>
  );
}
