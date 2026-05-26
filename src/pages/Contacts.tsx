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
    <div className="relative min-h-screen bg-background text-foreground font-sans flex flex-col overflow-hidden">
      <video className="fixed inset-0 w-full h-full object-cover" autoPlay loop muted playsInline>
        <source src="/contact.mp4" type="video/mp4" media="(min-width: 768px)" />
        <source src="/contact_mobile.webm" type="video/webm" media="(max-width: 767px)" />
      </video>
      <Navbar items={navItems} />
      
      <main className="relative z-10 pt-24 md:pt-32 px-4 md:px-8 max-w-4xl mx-auto flex-1 pb-6">
        <h1 className="text-4xl md:text-6xl text-white mb-8 text-center md:text-left" style={{ fontFamily: 'Cakra, sans-serif' }}>Контакты</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white/80 text-lg">
          <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/10 animate-fade-rise">
            <h2 className="text-xl md:text-2xl text-white mb-3" style={{ fontFamily: 'Cakra, sans-serif' }}>Адрес</h2>
            <p>Свердловская область, Сысертский район, коттеджный пос. Заповедник, пос. Габиевский, ул. Центральная 8</p>
          </div>
          <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/10 animate-fade-rise-delay">
            <h2 className="text-xl md:text-2xl text-white mb-3" style={{ fontFamily: 'Cakra, sans-serif' }}>Телефон</h2>
            <a href="tel:+79001980142" className="text-[#fb9201] hover:underline">+79001980142</a>
          </div>
          <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/10 animate-fade-rise-delay-2">
            <h2 className="text-xl md:text-2xl text-white mb-3" style={{ fontFamily: 'Cakra, sans-serif' }}>Время работы</h2>
            <p>Ежедневно с 12:00 до 21:00</p>
          </div>
          <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/10 animate-fade-rise-delay-2">
            <h2 className="text-xl md:text-2xl text-white mb-3" style={{ fontFamily: 'Cakra, sans-serif' }}>Социальные сети</h2>
            <div className="flex flex-wrap gap-4 mt-2">
              <span className="text-white/60">Instagram</span>
              <span className="text-white/60">Telegram</span>
              <span className="text-white/60">VK</span>
            </div>
          </div>
        </div>
      </main>
      
      <Footer scrollProgress={0} />
      <CartDrawer />
    </div>
  );
}