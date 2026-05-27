import React from 'react';
import { Navbar } from '../components/Navbar';
import { CartDrawer } from '../components/Cart';
import { Footer } from '../components/Footer';
import { PHONE, ADDRESS, WORK_HOURS } from '../config';

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
            <p>{ADDRESS}</p>
          </div>
          <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/10 animate-fade-rise-delay">
            <h2 className="text-xl md:text-2xl text-white mb-3" style={{ fontFamily: 'Cakra, sans-serif' }}>Телефон</h2>
            <a href={`tel:${PHONE}`} className="text-brand hover:underline">{PHONE}</a>
          </div>
          <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/10 animate-fade-rise-delay-2">
            <h2 className="text-xl md:text-2xl text-white mb-3" style={{ fontFamily: 'Cakra, sans-serif' }}>Время работы</h2>
            <p>{WORK_HOURS}</p>
          </div>
          <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/10 animate-fade-rise-delay-2">
            <h2 className="text-xl md:text-2xl text-white mb-3" style={{ fontFamily: 'Cakra, sans-serif' }}>Социальные сети</h2>
            <div className="flex flex-wrap gap-4 mt-2">
              <a href="https://max.ru/join/AkeAPHiS1P_quKiQSc1gaunkAKnwIz_yIeKmH5lvFRc" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-black/40 backdrop-blur-lg rounded-xl px-4 py-2 border border-white/10 text-white/80 hover:text-brand hover:border-brand/50 transition-all duration-300" aria-label="Max">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 4h20v16H2z"/><path d="M2 4l10 8 10-8"/></svg>
                Max
              </a>
              <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-black/40 backdrop-blur-lg rounded-xl px-4 py-2 border border-white/10 text-white/80 hover:text-brand hover:border-brand/50 transition-all duration-300" aria-label="Telegram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>
                Telegram
              </a>
              <a href="https://vk.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-black/40 backdrop-blur-lg rounded-xl px-4 py-2 border border-white/10 text-white/80 hover:text-brand hover:border-brand/50 transition-all duration-300" aria-label="VK">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="3"/><path d="M7 9h2l2 6 2-6h2l2 6 2-6"/><path d="M6 15h4"/><path d="M14 15h4"/></svg>
                VK
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-black/40 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden animate-fade-rise">
          <iframe
            title="Карта"
            src={`https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`}
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-2xl"
          />
        </div>
      </main>
      
      <Footer scrollProgress={0} />
      <CartDrawer />
    </div>
  );
}