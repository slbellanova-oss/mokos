import React, { useEffect, useState } from 'react';

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
      <div
        className="absolute inset-x-0 top-0 h-1/3 bg-[#47784e] transition-transform duration-[800ms] ease-in-out"
        style={{ transform: stage >= 1 ? 'translateY(-100%)' : 'translateY(0)' }}
      />
      <div
        className="absolute inset-x-0 top-1/3 h-1/3 bg-[#47784e] transition-transform duration-[800ms] ease-in-out"
        style={{ transform: stage >= 2 ? 'translateY(-100%)' : 'translateY(0)' }}
      />
      <div
        className="absolute inset-x-0 top-2/3 h-1/3 bg-[#47784e] transition-transform duration-[800ms] ease-in-out"
        style={{ transform: stage >= 3 ? 'translateY(100%)' : 'translateY(0)' }}
      />

      <div
        className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500"
        style={{
          fontFamily: 'Cakra, sans-serif',
          opacity: stage >= 2 ? 0 : 1,
        }}
      >
        <h1 className="text-6xl md:text-8xl lg:text-9xl text-white tracking-wider">МАКОШЬ</h1>
        <p className="text-lg md:text-xl text-white/70 mt-4 md:mt-6 tracking-widest uppercase">
          Вкус, объединяющий времена
        </p>
      </div>
    </div>
  );
};
