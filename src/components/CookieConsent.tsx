import React, { useState, useEffect } from 'react';

export const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div 
      data-cookie-banner="true"
      className="fixed bottom-0 left-0 right-0 z-[200] p-4 md:p-8"
      style={{ pointerEvents: 'auto' }}
    >
      <div 
        className="max-w-4xl mx-auto bg-black/60 backdrop-blur-md rounded-2xl p-6 md:p-8"
        style={{ 
          border: '1px solid rgba(251, 146, 1, 0.2)',
        }}
      >
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h3 
              className="text-xl text-white mb-2" 
              style={{ fontFamily: 'Cakra, sans-serif' }}
            >
              Мы используем cookies
            </h3>
            <p 
              className="text-white/70 text-sm"
              style={{ fontFamily: 'Golos Text, sans-serif' }}
            >
              Этот сайт использует файлы cookie для улучшения пользовательского опыта. 
              Продолжая использовать сайт, вы соглашаетесь с использованием cookies.
            </p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={handleAccept}
              className="liquid-glass rounded-full px-8 py-3 text-white hover:scale-[1.03] transition-transform duration-300 cursor-pointer"
              aria-label="Принять cookies"
              style={{ fontFamily: 'PT Sans, sans-serif' }}
            >
              Принять
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;