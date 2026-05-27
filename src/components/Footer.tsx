import React from 'react';
import { Link } from 'react-router-dom';
import { PHONE, WORK_HOURS } from '../config';

interface FooterProps {
  scrollProgress?: number;
}

export const Footer = (_props: FooterProps) => {
  return (
    <footer className="relative z-50 w-full bg-black/60 backdrop-blur-md py-4 px-4 md:px-8 mt-auto text-center md:text-left">
      <div className="w-full flex flex-col md:flex-row justify-between items-center text-white/80 text-sm md:text-base gap-4 md:gap-0">
        <div>
          <span className="site-logo text-xl">Мако́шь</span> © 2026
          <span className="ml-4 text-brand">
            <a href={`tel:${PHONE}`} className="hover:underline active:underline">{PHONE}</a>
          </span>
        </div>
        <div className="flex gap-4 md:gap-6 flex-wrap justify-center">
          <Link to="/about" className="hover:text-brand active:text-brand transition-colors">О нас</Link>
          <Link to="/#nashe-menu" className="hover:text-brand active:text-brand transition-colors">Меню</Link>
          <Link to="/contacts" className="hover:text-brand active:text-brand transition-colors">Контакты</Link>
        </div>
        <div>
          {WORK_HOURS}
        </div>
      </div>
      <div className="flex justify-center gap-4 mt-4">
        <a href="https://max.ru/join/AkeAPHiS1P_quKiQSc1gaunkAKnwIz_yIeKmH5lvFRc" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center p-3 liquid-glass rounded-full hover:scale-[1.03] hover:bg-brand transition-all duration-300 cursor-pointer group" aria-label="Max">
          <svg width="20" height="20" viewBox="0 0 720 720" fill="currentColor" className="w-5 h-5 text-white/80 group-hover:text-black"><path d="M350.4,9.6C141.8,20.5,4.1,184.1,12.8,390.4c3.8,90.3,40.1,168,48.7,253.7,2.2,22.2-4.2,49.6,21.4,59.3,31.5,11.9,79.8-8.1,106.2-26.4,9-6.1,17.6-13.2,24.2-22,27.3,18.1,53.2,35.6,85.7,43.4,143.1,34.3,299.9-44.2,369.6-170.3C799.6,291.2,622.5-4.6,350.4,9.6h0ZM269.4,504c-11.3,8.8-22.2,20.8-34.7,27.7-18.1,9.7-23.7-.4-30.5-16.4-21.4-50.9-24-137.6-11.5-190.9,16.8-72.5,72.9-136.3,150-143.1,78-6.9,150.4,32.7,183.1,104.2,72.4,159.1-112.9,316.2-256.4,218.6h0Z"/></svg>
        </a>
        <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center p-3 liquid-glass rounded-full hover:scale-[1.03] hover:bg-brand transition-all duration-300 cursor-pointer group" aria-label="Telegram">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white/80 group-hover:text-black"><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>
        </a>
        <a href="https://vk.me/id1111264153" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center p-3 liquid-glass rounded-full hover:scale-[1.03] hover:bg-brand transition-all duration-300 cursor-pointer group" aria-label="VK">
          <img src="/vk.png" alt="VK" className="w-7 h-7" />
        </a>
      </div>
    </footer>
  );
};