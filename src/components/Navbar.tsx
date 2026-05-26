import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartButton } from './Cart';
import { PHONE } from '../config';

interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

interface NavbarProps {
  items: NavItem[];
}

export const Navbar: React.FC<NavbarProps> = ({ items }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex flex-row justify-between items-center px-4 md:px-8 py-4 md:py-6 bg-background/80 backdrop-blur-md font-menu">
        <Link to="/" className="site-logo text-2xl md:text-3xl tracking-tight" onClick={() => window.scrollTo(0, 0)}>
          Мако́шь
        </Link>

        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {items.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              onClick={item.onClick}
              className={`text-base lg:text-lg transition-colors hover:text-foreground group relative ${
                item.isActive ? 'text-foreground' : 'text-muted-foreground'
              }`}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href={`tel:${PHONE}`}
            className="p-3 liquid-glass rounded-full hover:scale-[1.03] hover:bg-brand transition-all duration-300 cursor-pointer group"
            aria-label="Позвонить"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-foreground group-hover:text-black">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </a>
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Открыть меню"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
          <CartButton />
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-[72px] bottom-0 z-40 bg-black/70 backdrop-blur-xl px-6 md:hidden">
          <button
            className="absolute top-6 right-6 p-2 text-foreground z-10"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Закрыть меню"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <div className="flex flex-col space-y-6 pt-6">
            {items.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={(e) => {
                  if (item.onClick) item.onClick(e);
                  setMobileMenuOpen(false);
                }}
                className="text-2xl text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};