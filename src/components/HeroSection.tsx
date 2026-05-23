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
      <main className={`absolute bottom-28 left-8 z-30 flex flex-col pointer-events-none px-4 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute left-0 -inset-x-4 -inset-y-6 bg-black/40 backdrop-blur-lg rounded-2xl -z-10"></div>
        <h1 className="animate-fade-rise text-8xl sm:text-9xl md:text-[10rem] leading-[0.95] tracking-[-2.46px] text-white">
          Мако́шь
        </h1>
        <p className="animate-fade-rise-delay text-white text-3xl sm:text-4xl max-w-2xl mt-4 leading-relaxed">
          своя история на тарелке
        </p>
        <div className="flex items-center gap-4 pointer-events-auto mt-8">
          <button className="animate-fade-rise-delay-2 liquid-glass rounded-full px-14 py-5 text-lg text-foreground hover:scale-[1.03] hover:bg-[#fb9201] hover:text-black transition-all duration-300 cursor-pointer">
            Заказать
          </button>
          <button 
            className="animate-fade-rise-delay-2 liquid-glass rounded-full px-14 py-5 text-lg text-foreground hover:scale-[1.03] hover:bg-[#fb9201] hover:text-black transition-all duration-300 cursor-pointer"
            onClick={() => window.scrollTo({ top: document.body.scrollHeight * 0.3, behavior: 'smooth' })}
          >
            Меню
          </button>
        </div>
      </main>
    </div>
  );
};