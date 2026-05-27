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
                <svg width="20" height="20" viewBox="0 0 720 720" fill="currentColor"><path d="M350.4,9.6C141.8,20.5,4.1,184.1,12.8,390.4c3.8,90.3,40.1,168,48.7,253.7,2.2,22.2-4.2,49.6,21.4,59.3,31.5,11.9,79.8-8.1,106.2-26.4,9-6.1,17.6-13.2,24.2-22,27.3,18.1,53.2,35.6,85.7,43.4,143.1,34.3,299.9-44.2,369.6-170.3C799.6,291.2,622.5-4.6,350.4,9.6h0ZM269.4,504c-11.3,8.8-22.2,20.8-34.7,27.7-18.1,9.7-23.7-.4-30.5-16.4-21.4-50.9-24-137.6-11.5-190.9,16.8-72.5,72.9-136.3,150-143.1,78-6.9,150.4,32.7,183.1,104.2,72.4,159.1-112.9,316.2-256.4,218.6h0Z"/></svg>
                Max
              </a>
              <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-black/40 backdrop-blur-lg rounded-xl px-4 py-2 border border-white/10 text-white/80 hover:text-brand hover:border-brand/50 transition-all duration-300" aria-label="Telegram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>
                Telegram
              </a>
              <a href="https://vk.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-black/40 backdrop-blur-lg rounded-xl px-4 py-2 border border-white/10 text-white/80 hover:text-brand hover:border-brand/50 transition-all duration-300" aria-label="VK">
                <svg width="20" height="20" viewBox="0 0 56 56" fill="currentColor"><path d="M6 27.12c0-9.956 0-14.934 3.093-18.027C12.186 6 17.163 6 27.12 6h1.76c9.956 0 14.934 0 18.027 3.093C50 12.186 50 17.163 50 27.12v1.76c0 9.956 0 14.934-3.093 18.027C43.814 50 38.837 50 28.88 50h-1.76c-9.956 0-14.934 0-18.027-3.093C6 43.814 6 38.837 6 28.88v-1.76Z"/><path d="M29.412 37.699c-10.029 0-15.749-6.875-15.987-18.315h5.023c.165 8.396 3.869 11.953 6.802 12.686V19.384h4.73v7.241c2.897-.311 5.94-3.611 6.966-7.241h4.73c-.788 4.473-4.088 7.773-6.434 9.13 2.346 1.1 6.105 3.978 7.535 9.185H37.57c-1.118-3.484-3.905-6.179-7.59-6.545v6.545h-.568Z"/></svg>
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