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
    </footer>
  );
};