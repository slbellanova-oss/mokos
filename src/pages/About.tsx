import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { CartDrawer } from '../components/Cart';
import { Footer } from '../components/Footer';

export default function About() {
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [showSecond, setShowSecond] = useState(false);

  const navItems = [
    { label: 'Главная', href: '/' },
    { label: 'О нас', href: '/about', isActive: true },
    { label: 'Меню', href: '/#nashe-menu' },
    { label: 'Контакты', href: '/contacts' },
  ];

  return (
    <div className="relative min-h-screen bg-background text-foreground font-sans flex flex-col overflow-hidden">
      <video className="fixed inset-0 w-full h-full object-cover" autoPlay muted playsInline>
        <source src="/pomidoro-menu.mp4" type="video/mp4" media="(min-width: 768px)" />
        <source src="/pomidoro-menu-mobile.webm" type="video/webm" media="(max-width: 767px)" />
      </video>
      <Navbar items={navItems} />
      
      <main className="relative z-10 pt-24 md:pt-32 px-4 flex flex-col items-center flex-1 pb-32 md:pb-40">
        <h1 className="text-4xl md:text-6xl text-white mb-8 text-center" style={{ fontFamily: 'Cakra, sans-serif' }}>О нас</h1>
        <div className="w-full max-w-4xl space-y-6 text-white/80 text-xl md:text-2xl">
          <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/10 animate-fade-rise">
            <p className="text-center md:text-left"><strong className="text-white" style={{ fontFamily: 'Cakra, sans-serif' }}>Мако&#769;шь</strong> — это место, где традиции встречаются с современностью. Мы создаём блюда, которые рассказывают свою историю.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/10 animate-fade-rise-delay">
              <h2 className="text-xl md:text-2xl text-white mb-3" style={{ fontFamily: 'Cakra, sans-serif' }}>Наша философия</h2>
              <p>Мы верим, что еда — это не просто топливо, а способ выразить заботу и уважение к гостям. Каждое блюдо готовится с любовью и вниманием к деталям.</p>
            </div>
            <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/10 animate-fade-rise-delay-2">
              <h2 className="text-xl md:text-2xl text-white mb-3" style={{ fontFamily: 'Cakra, sans-serif' }}>Наша команда</h2>
              <p>За нашими блюдами стоят профессионалы с многолетним опытом. Мы постоянно учимся и совершенствуемся, чтобы радовать вас новыми вкусами.</p>
            </div>
          </div>
        </div>
        <div className="w-full max-w-4xl flex justify-end mt-auto pt-8">
          <button
            onClick={() => { setOverlayOpen(true); setShowSecond(false); }}
            className="animate-fade-rise-delay-2 bg-white/5 backdrop-blur-xl rounded-full px-8 sm:px-14 py-4 sm:py-5 text-base sm:text-lg text-foreground hover:scale-[1.03] hover:bg-[#fb9201] hover:text-black transition-all duration-300 cursor-pointer whitespace-nowrap border border-white/10 shadow-lg"
            style={{ fontFamily: 'Cakra, sans-serif' }}
          >
            Жми
          </button>
        </div>
      </main>
      
      <Footer scrollProgress={0} />
      <CartDrawer />

      {overlayOpen && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center"
          onClick={() => setOverlayOpen(false)}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-xl" />
          <div className="relative z-10 max-w-[90vw] max-h-[90vh] flex items-center justify-center">
            <button
              onClick={(e) => { e.stopPropagation(); setOverlayOpen(false); }}
              className="absolute -top-12 right-0 p-2 text-white/70 hover:text-white transition-colors cursor-pointer z-20"
              aria-label="Закрыть"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <img
              src={showSecond ? '/vremaydally.png' : '/mokosdally.png'}
              alt="daily"
              onClick={(e) => { e.stopPropagation(); setShowSecond(true); }}
              className="max-w-full max-h-[85vh] object-contain rounded-2xl cursor-pointer transition-opacity duration-300"
            />
          </div>
        </div>
      )}
    </div>
  );
}