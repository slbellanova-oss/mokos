import React from 'react';
import { Navbar } from '../components/Navbar';
import { CartDrawer } from '../components/Cart';
import { Footer } from '../components/Footer';

export default function Contacts() {
  const navItems = [
    { label: 'Главная', href: '/' },
    { label: 'О нас', href: '/about' },
    { label: 'Меню', href: '/#nashe-menu' },
    { label: 'Контакты', href: '/contacts', isActive: true },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans flex flex-col">
      <Navbar items={navItems} />
      
      <main className="pt-24 md:pt-32 px-4 md:px-8 max-w-4xl mx-auto flex-1">
        <h1 className="text-4xl md:text-6xl text-white mb-8" style={{ fontFamily: 'Cakra, sans-serif' }}>Контакты</h1>
        
        <div className="space-y-6 text-white/80">
          <div>
            <h2 className="text-xl md:text-2xl text-white mb-2" style={{ fontFamily: 'PT Sans, sans-serif' }}>Адрес</h2>
            <p className="text-base md:text-lg">Свердловская область, Сысертский район, коттеджный пос. Заповедник, пос. Габиевский, ул. Центральная 8</p>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl text-white mb-2" style={{ fontFamily: 'PT Sans, sans-serif' }}>Телефон</h2>
            <a href="tel:+79001980142" className="text-[#fb9201] hover:underline text-base md:text-lg">+79001980142</a>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl text-white mb-2" style={{ fontFamily: 'PT Sans, sans-serif' }}>Время работы</h2>
            <p className="text-base md:text-lg">Ежедневно с 12:00 до 21:00</p>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl text-white mb-2" style={{ fontFamily: 'PT Sans, sans-serif' }}>Социальные сети</h2>
            <div className="flex flex-wrap gap-4 mt-2">
              <a href="#" className="text-white/80 hover:text-white text-base md:text-lg">Instagram</a>
              <a href="#" className="text-white/80 hover:text-white text-base md:text-lg">Telegram</a>
              <a href="#" className="text-white/80 hover:text-white text-base md:text-lg">VK</a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer scrollProgress={0} />
      <CartDrawer />
    </div>
  );
}