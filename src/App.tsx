/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { X } from 'lucide-react';
import Scrollytelling from './components/Scrollytelling';
import { CartButton, CartDrawer } from './components/Cart';
import CookieConsent from './components/CookieConsent';
import { CartProvider, useCart } from './components/CartContext';


export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { toggleCart } = useCart();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollProgress(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <CartProvider>
      <div className="relative min-h-screen bg-background text-foreground font-sans flex flex-col">
        <Scrollytelling scrollProgress={scrollProgress} />

        <nav className="fixed top-0 left-0 w-full z-50 flex flex-row justify-between items-center px-8 py-6 bg-background/80 backdrop-blur-md font-menu">
          <div className="flex h-full items-center">
            <Link to="/" className="site-logo text-3xl tracking-tight" onClick={() => window.scrollTo(0, 0)}>Мако́шь</Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['Главная', 'О нас', 'Меню', 'Контакты'].map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className={`text-lg transition-colors hover:text-foreground group relative ${
                  index === 0 ? 'text-foreground' : 'text-muted-foreground'
                }`}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#fb9201] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
          
          <div className="flex items-center gap-4">
<button className="md:hidden p-2 text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" x2="20" y1="12" y2="12"></line>
                  <line x1="4" x2="20" y1="6" y2="6"></line>
                  <line x1="4" x2="20" y1="18" y2="18"></line>
                </svg>
              </button>
              <button onClick={() => { toggleCart(); navigate('/cart'); }} className="p-2 hover:bg-muted rounded-full transition-colors cursor-pointer mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-arrow-left w-5 h-5" aria-hidden="true" style="color: rgb(251, 146, 1);">
                  <path d="m12 19-7-7 7-7"></path>
                  <path d="M19 12H5"></path>
                </svg>
              </button>
            <CartButton />
              <CartDrawer />
          </div>
        </nav>

        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md pt-24 px-8 md:hidden">
            <button className="absolute top-6 right-8 p-2 text-foreground" onClick={() => setMobileMenuOpen(false)}>
              <X className="w-6 h-6" />
            </button>
            <div className="flex flex-col space-y-6">
              {[
                { name: 'Главная', href: '/' },
                { name: 'О нас', href: '/about' },
                { name: 'Меню', href: '/menu' },
                { name: 'Контакты', href: '/contacts' }
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-2xl text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}

        <main className="fixed bottom-20 left-8 z-10 flex flex-col pointer-events-none p-4">
          <div className="absolute -inset-4 bg-black/40 backdrop-blur-md rounded-2xl -z-10"></div>
          <h1
            className="animate-fade-rise text-8xl sm:text-9xl md:text-[10rem] leading-[0.95] tracking-[-2.46px] text-white"
          >
            Мако́шь
          </h1>
          
          <p className="animate-fade-rise-delay text-white text-3xl sm:text-4xl max-w-2xl mt-4 leading-relaxed">
            своя история на тарелке
          </p>
          
          <div className="flex items-center gap-4 pointer-events-auto mt-8">
            <button className="animate-fade-rise-delay-2 liquid-glass rounded-full px-14 py-5 text-lg text-foreground mt-12 hover:scale-[1.03] transition-transform duration-300 cursor-pointer">
              Заказать
            </button>
            <button className="liquid-glass rounded-full px-14 py-5 text-lg text-foreground mt-12 hover:scale-[1.03] transition-transform duration-300 cursor-pointer">
              Меню
            </button>
          </div>
        </main>

        <div 
          className="fixed top-1/2 right-8 -translate-y-1/2 z-20 bg-black/40 backdrop-blur-md rounded-2xl p-8 max-w-sm"
        >
          <h2 className="text-2xl font-bold text-white mb-4">О нас</h2>
          <p className="text-white/70 leading-relaxed">
            Макошь — это место, где традиции встречаются с современностью. 
            Мы создаём блюда, которые рассказывают свою историю.
          </p>
          <a 
            href="/about" 
            className="inline-flex items-center gap-2 mt-4 text-[#fb9201] hover:underline"
          >
            Узнать больше
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </div>



</div>
      <CookieConsent />
      </CartProvider>
  );
}