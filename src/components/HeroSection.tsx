import React from 'react';

interface HeroSectionProps {
  scrollProgress: number;
}

export const HeroSection = ({ scrollProgress }: HeroSectionProps) => {
  const [visible, setVisible] = React.useState(true);
  React.useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY === 0);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`relative w-full h-screen ${scrollProgress > 50 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/animate hero.mp4" type="video/mp4" media="(min-width: 768px)" />
        <source src="/animate hero_mobile.webm" type="video/webm" media="(max-width: 767px)" />
      </video>
        <main className={`absolute bottom-36 md:bottom-28 left-8 z-30 flex flex-col pointer-events-none px-4 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute left-0 -inset-x-4 -inset-y-6 bg-black/40 backdrop-blur-lg rounded-2xl -z-10"></div>
        <h1 className="animate-fade-rise text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] leading-[0.95] tracking-[-2.46px] text-white">
          Мако́шь
        </h1>
        
        <p className="animate-fade-rise-delay text-white text-2xl sm:text-3xl md:text-4xl max-w-2xl mt-4 leading-relaxed">
          своя история на тарелке
        </p>
        
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 pointer-events-auto mt-6 sm:mt-8">
          <a href="tel:+79001980142" className="animate-fade-rise-delay-2 liquid-glass rounded-full px-8 sm:px-14 py-4 sm:py-5 text-base sm:text-lg text-foreground hover:scale-[1.03] hover:bg-[#fb9201] hover:text-black transition-all duration-300 cursor-pointer whitespace-nowrap w-full sm:w-auto inline-block text-center">
            Заказать
          </a>
          <button 
            className="animate-fade-rise-delay-2 liquid-glass rounded-full px-8 sm:px-14 py-4 sm:py-5 text-base sm:text-lg text-foreground hover:scale-[1.03] hover:bg-[#fb9201] hover:text-black transition-all duration-300 cursor-pointer whitespace-nowrap w-full sm:w-auto"
            onClick={() => window.scrollTo({ top: document.body.scrollHeight * 0.3, behavior: 'smooth' })}
          >
            Меню
          </button>
        </div>
      </main>
    </div>
  );
};