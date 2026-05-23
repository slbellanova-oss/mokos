import React from 'react';
import { Plus, Minus } from 'lucide-react';
import { useCart } from './CartContext';
import type { MenuItemType } from '../data/menu';

interface MenuItemProps {
  item: MenuItemType;
}

export const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  const { items, addItem, updateQuantity } = useCart();
  const cartItem = items.find(i => i.id === item.id);
  const quantity = cartItem?.quantity || 0;

  const handleAdd = () => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
    });
  };

  const handleChange = (delta: number) => {
    updateQuantity(item.id, quantity + delta);
  };

  return (
    <div className="bg-black/40 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] group h-full flex flex-col">
      {/* Изображение */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1 text-base text-[#fb9201] font-medium">
          {item.weight}
        </div>
      </div>
      
      {/* Контент с увеличенными шрифтами */}
      <div className="p-4 flex flex-col min-h-[180px] flex-1">
        <h4
          className="text-xl font-semibold text-white mb-2"
          style={{ fontFamily: 'Cakra, sans-serif' }}
        >
          {item.name}
        </h4>
        <p
          className="text-base text-[hsl(240,4%,66%)] mb-4 flex-grow"
          style={{ fontFamily: 'Golos Text, sans-serif' }}
        >
          {item.description}
        </p>
        
        <div className="flex justify-between items-center mt-auto">
          <span 
            className="text-2xl font-bold transition-colors duration-300"
            style={{ color: quantity > 0 ? '#fb9201' : '#ffffff', fontFamily: 'PT Sans, sans-serif' }}
          >
            {quantity > 0 ? `${item.price * quantity}₽` : `${item.price}₽`}
          </span>
          
          <div className="add-to-cart-block">
            {quantity === 0 ? (
              <button 
                onClick={handleAdd}
                className="add-btn flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
                style={{
                  background: '#fb9201',
                  color: '#000',
                  width: 44,
                  height: 44,
                }}
              >
                <Plus className="w-6 h-6" />
              </button>
            ) : (
              <div className="counter-block flex items-center gap-2">
                <button 
                  onClick={() => handleChange(-1)}
                  className="counter-btn flex items-center justify-center rounded-full transition-colors"
                  style={{
                    background: 'rgba(251,146,1,0.2)',
                    color: '#fb9201',
                    width: 36,
                    height: 36,
                  }}
                >
                  <Minus className="w-5 h-5" />
                </button>
                <span className="counter-value text-center font-bold text-lg text-[#fb9201]" style={{ width: 32 }}>
                  {quantity}
                </span>
                <button 
                  onClick={() => handleChange(1)}
                  className="counter-btn flex items-center justify-center rounded-full transition-colors"
                  style={{
                    background: '#fb9201',
                    color: '#000',
                    width: 36,
                    height: 36,
                  }}
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;