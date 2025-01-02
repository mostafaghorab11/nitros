import Image from 'next/image';
import Button from './Button';

export default function Hero() {
  return (
    <div className="py-8 xl:py-24 px-5 xl:px-8 max-w-[1440px] mx-auto w-full">
      <div className="flex flex-col lg:flex-row items-center gap-12 sm:gap-8">
        {/* Left Content */}
        <div className="flex flex-col gap-6 lg:gap-8 flex-1">
          <div className="flex flex-col gap-4 text-left">
            <h1 className="text-[31px] sm:text-[49px] sm:leading-[70.07px] font-semibold leading-[44.64px]">
              <span className="text-primary">Nitros</span>{' '}
              <span className="text-gray-dark">
                platform gets you shipping carriers at the{' '}
              </span>
              <span className="text-primary whitespace-nowrap">
                best prices
              </span>
            </h1>
            <p className="text-base leading-[23.36px] lg:text-xl lg:leading-[32.8px] font-normal text-gray-dark max-w-[570px]">
              Link your e-store with nitros with few steps to ship from you door
              to client&apos;s door
            </p>
          </div>
          <div>
            <Button>Start Now</Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 w-full max-w-[700px] h-full flex items-center lg:justify-end -mt-6 lg:mt-0">
          <div className="relative w-full h-[300px] lg:h-[500px]">
            <Image
              src="/main-screen.svg"
              alt="Nitros Dashboard"
              fill
              style={{ objectFit: 'contain', objectPosition: 'center' }}
              className="drop-shadow-2xl !p-0 scale-125"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
