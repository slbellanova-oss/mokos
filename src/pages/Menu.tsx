import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { CartDrawer } from '../components/Cart';
import { CheckoutModal } from '../components/CheckoutModal';
import { menuCategories, tabIds } from '../data/menu';
import { MenuItem } from '../components/MenuItem';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const tabsContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.8 },
  },
};

const tabItem = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export default function Menu({ hideHeader = false }: { hideHeader?: boolean }) {
  const [activeTab, setActiveTab] = useState('pizza');
  const tabsRef = useRef<HTMLDivElement>(null);
  const isManualScrolling = useRef(false);

  useEffect(() => {
    const sections = tabIds
      .map(id => document.getElementById(`menu-${id}`))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        if (isManualScrolling.current) return;

        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          const id = visible[0].target.id.replace('menu-', '');
          setActiveTab(id);

          const tabEl = document.querySelector<HTMLElement>(`[data-tab-id="${id}"]`);
          if (tabEl && window.innerWidth < 768) {
            tabEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
          }
        }
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    );

    sections.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    isManualScrolling.current = true;
    const element = document.getElementById(`menu-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      const tabEl = document.querySelector<HTMLElement>(`[data-tab-id="${id}"]`);
      if (tabEl && window.innerWidth < 768) {
        tabEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
      setTimeout(() => { isManualScrolling.current = false; }, 800);
    } else {
      isManualScrolling.current = false;
    }
  };

  const navItems = [
    { label: 'Главная', href: '/' },
    { label: 'О нас', href: '/about' },
    { label: 'Меню', href: '#', isActive: true },
    { label: 'Контакты', href: '/contacts' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="min-h-screen relative"
      style={{
        backgroundImage: 'url(/background1.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      {!hideHeader && <Navbar items={navItems} />}

      <div className="relative z-10 pt-28 pb-20">
        <div className="flex justify-center mb-12 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative inline-block"
          >
            <div className="absolute -inset-x-4 -inset-y-6 bg-black/40 backdrop-blur-lg rounded-2xl -z-10" />
            <div className="relative z-10 px-6 py-4 text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'Cakra, sans-serif' }}>Наше Меню</h1>
              <p className="text-lg text-[hsl(240,4%,66%)]">Свежие блюда, приготовленные с любовью</p>
            </div>
          </motion.div>
        </div>

        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            <div className="md:w-56 flex-shrink-0 sticky top-[88px] md:top-[100px] z-40 self-start w-full">
              <motion.div
                variants={tabsContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                ref={tabsRef}
                className="menu-tabs-container flex md:flex-col gap-2 md:gap-3 overflow-x-auto md:overflow-visible pb-2 md:pb-0 scrollbar-hide"
              >
                {menuCategories.map((cat) => (
                  <motion.button
                    key={cat.id}
                    data-tab-id={cat.id}
                    variants={tabItem}
                    onClick={() => scrollToSection(cat.id)}
                    className={`whitespace-nowrap text-left text-base lg:text-lg py-3 px-4 lg:px-6 transition-all duration-300 rounded-full border border-white/10 flex-shrink-0 ${
                      activeTab === cat.id
                        ? 'bg-[#fb9201]/80 text-black shadow-lg'
                        : 'bg-black/40 backdrop-blur-md text-white hover:bg-white/10'
                    }`}
                    style={{ fontFamily: 'PT Sans, sans-serif' }}
                  >
                    {cat.tabName}
                  </motion.button>
                ))}
              </motion.div>
            </div>

            <div className="flex-1">
              {menuCategories.map((category) => (
                <section key={category.id} id={`menu-${category.id}`} className="menu-section mb-16 scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-6" style={{ fontFamily: 'PT Sans, sans-serif' }}>{category.name}</h2>
                  <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6"
                  >
                    {category.items.map((menuItem) => (
                      <motion.div key={menuItem.id} variants={item} className="h-full">
                        <MenuItem item={menuItem} />
                      </motion.div>
                    ))}
                  </motion.div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer scrollProgress={window.scrollY} />
      <CartDrawer />
      <CheckoutModal />
    </motion.div>
  );
}