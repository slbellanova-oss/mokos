import React from 'react';
import { Navbar } from '../components/Navbar';
import { CartDrawer } from '../components/Cart';
import { Footer } from '../components/Footer';

export default function About() {
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
      
      <main className="relative z-10 pt-24 md:pt-32 px-4 flex flex-col items-center flex-1">
        <h1 className="text-4xl md:text-6xl text-white mb-8 text-center" style={{ fontFamily: 'Cakra, sans-serif' }}>О нас</h1>
        <div className="w-full max-w-4xl space-y-8 text-white/80 text-xl md:text-2xl">
          <p className="text-center md:text-left">Макошь — это место, где традиции встречаются с современностью. Мы создаём блюда, которые рассказывают свою историю.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <h2 className="text-xl md:text-2xl text-white mb-2" style={{ fontFamily: 'Cakra, sans-serif' }}>Наша философия</h2>
              <p>Мы верим, что еда — это не просто топливо, а способ выразить заботу и уважение к гостям. Каждое блюдо готовится с любовью и вниманием к деталям.</p>
            </div>
            <div className="bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <h2 className="text-xl md:text-2xl text-white mb-2" style={{ fontFamily: 'Cakra, sans-serif' }}>Наша команда</h2>
              <p>За нашими блюдами стоят профессионалы с многолетним опытом. Мы постоянно учимся и совершенствуемся, чтобы радовать вас новыми вкусами.</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer scrollProgress={0} />
      <CartDrawer />
    </div>
  );
}