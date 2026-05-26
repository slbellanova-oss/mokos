import React, { useEffect, useState } from 'react';

const bg = {
  backgroundColor: '#47784e',
  backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url('/preloader.jpeg')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
};

const PANELS = [
  { clip: 'polygon(0 0, 100% 0, 100% 38%, 0 30%)', slide: -1, delay: 1 },
  { clip: 'polygon(0 30%, 100% 38%, 100% 72%, 0 64%)', slide: -1, delay: 2 },
  { clip: 'polygon(0 64%, 100% 72%, 100% 100%, 0 100%)', slide: 1, delay: 3 },
];

export const Preloader = ({ onFinish }: { onFinish: () => void }) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 1000);
    const t2 = setTimeout(() => setStage(2), 2000);
    const t3 = setTimeout(() => setStage(3), 3000);
    const t4 = setTimeout(() => { setStage(4); onFinish(); }, 3600);
    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden pointer-events-none">
      {PANELS.map((p, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-transform duration-[800ms] ease-in-out"
          style={{
            ...bg,
            clipPath: p.clip,
            transform: stage >= p.delay
              ? `translateY(${p.slide * 110}%)`
              : 'translateY(0)',
          }}
        />
      ))}

      <div
        className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 z-10"
        style={{
          fontFamily: 'Cakra, sans-serif',
          opacity: stage >= 2 ? 0 : 1,
        }}
      >
        <h1 className="text-6xl md:text-8xl lg:text-9xl text-white tracking-wider">
          МА&#769;КОШЬ
        </h1>
        <p className="text-lg md:text-xl text-white/70 mt-4 md:mt-6 tracking-widest uppercase">
          Вкус, объединяющий времена
        </p>
      </div>
    </div>
  );
};
