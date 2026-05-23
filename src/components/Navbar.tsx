import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartButton } from './Cart';
import { X } from 'lucide-react';

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
    <nav className="fixed top-0 left-0 w-full z-50 flex flex-row justify-between items-center px-4 md:px-8 py-4 md:py-6 bg-background/80 backdrop-blur-md font-menu">
      <Link to="/" className="site-logo text-2xl md:text-3xl tracking-tight" onClick={() => window.scrollTo(0, 0)}>
        Мако́шь
      </Link>

      <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={item.onClick}
            className={`text-base lg:text-lg transition-colors hover:text-foreground group relative ${
              item.isActive ? 'text-foreground' : 'text-muted-foreground'
            }`}
          >
            {item.label}
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#fb9201] transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4">
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

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md pt-24 px-6 md:hidden">
          <button
            className="absolute top-6 right-8 p-2 text-foreground"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Закрыть меню"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="flex flex-col space-y-6">
            {items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  if (item.onClick) item.onClick(e);
                  setMobileMenuOpen(false);
                }}
                className="text-2xl text-foreground"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};