import React, { useState, useEffect } from 'react';

export const Ticker = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY === 0);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const bonuses = [
    "🌟 Скидка 10% на первый заказ",
    "☕ Кофе в подарок при заказе от 500₽",
    "🍕 Пицца 3+1 — четвёртая в подарок",
    "🎁 Бонусные баллы за каждый заказ",
    "🥳 Счастливые часы — с 14:00 до 16:15 скидка 15%",
    "🚚 Бесплатная доставка от 1000₽",
  ];

  return (
    <div className={`fixed bottom-2 left-0 right-0 z-40 transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="bg-black/40 backdrop-blur-md rounded-2xl mx-8 px-6 py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...bonuses, ...bonuses].map((bonus, index) => (
            <span key={index} className="text-white text-lg mx-8">
              {bonus}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};