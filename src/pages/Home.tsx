import React, { useEffect } from 'react';
import MenuPage from './Menu';
import { Navbar } from '../components/Navbar';
import { CartDrawer } from '../components/Cart';
import { HeroSection } from '../components/HeroSection';
import { Ticker } from '../components/Ticker';
import IvyTransition from '../components/IvyTransition';

export default function Home() {
  const scrollToMenu = () => {
    const element = document.getElementById('nashe-menu');
    if (element) {
      const offset = 120;
      window.scrollTo({ top: element.offsetTop - offset, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (window.location.hash === '#nashe-menu') {
      setTimeout(() => {
        const el = document.getElementById('nashe-menu');
        if (el) {
          const offset = 120;
          window.scrollTo({ top: el.offsetTop - offset, behavior: 'smooth' });
        }
      }, 300);
    }
  }, []);

  const navItems = [
    { label: 'Главная', href: '/', isActive: true },
    { label: 'О нас', href: '/about' },
    { label: 'Меню', href: '#nashe-menu', onClick: (e: React.MouseEvent) => { e.preventDefault(); scrollToMenu(); } },
    { label: 'Контакты', href: '/contacts' },
  ];

  return (
    <div className="bg-background text-foreground font-sans relative">
      <Navbar items={navItems} />
      
      <HeroSection scrollProgress={0} />
      <IvyTransition />

      <div id="nashe-menu">
        <MenuPage hideHeader={true} />
      </div>

      <Ticker scrollProgress={0} />
      <CartDrawer />
    </div>
  );
}