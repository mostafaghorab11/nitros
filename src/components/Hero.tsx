import HeroText from './HeroText';

export default function Hero() {
  return (
    <div className="py-8 xl:py-24 sm:px-5 xl:px-8 max-w-[1440px] mx-auto w-full">
      <div className="grid sm:grid-cols-2 grid-rows-2 sm:grid-rows-1 gap-12 sm:gap-12">
        {/* Left Content */}
        <HeroText />
        {/* Right Image */}
        <div className="flex-1 w-full max-w-[700px] h-full flex items-center lg:justify-end -mt-6 lg:mt-0">
          <div className="relative w-full h-[300px] lg:h-[500px]">
            <img
              src="/main-screen.svg"
              alt="Nitros Dashboard"
              style={{ objectFit: 'contain', objectPosition: 'center' }}
              className="drop-shadow-2xl !p-0 scale-125"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
