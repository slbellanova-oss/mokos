import React, { useEffect, useState } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from './CartContext';
import { useFocusTrap } from '../hooks/useFocusTrap';

export const CartButton = () => {
  const { items, toggleCart } = useCart();
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const prevTotalRef = React.useRef(totalItems);
  const [shaking, setShaking] = useState(false);

  useEffect(() => {
    if (totalItems > prevTotalRef.current) {
      setShaking(true);
      const timer = setTimeout(() => setShaking(false), 600);
      prevTotalRef.current = totalItems;
      return () => clearTimeout(timer);
    }
    prevTotalRef.current = totalItems;
  }, [totalItems]);

  return (
    <div className="relative flex items-center">
      <button
        onClick={toggleCart}
        className={`p-3 liquid-glass rounded-full hover:scale-[1.03] hover:bg-brand transition-all duration-300 cursor-pointer group ${shaking ? 'animate-cart-shake' : ''}`}
      >
        <ShoppingBag className="w-6 h-6 text-foreground group-hover:text-black" />
      </button>
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 bg-brand text-black text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </div>
  );
};

export const CartDrawer = () => {
  const { items, isOpen, toggleCart, removeItem, updateQuantity, total, openCheckout } = useCart();
  const focusTrapRef = useFocusTrap(isOpen);

  if (!isOpen) return null;

  return (
    <div ref={focusTrapRef} className="fixed inset-0 z-[100]" role="dialog" aria-modal="true" aria-label="Корзина">
      <div className="absolute inset-0 bg-black/60" onClick={toggleCart} />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white/5 backdrop-blur-xl p-6 flex flex-col border-l border-white/10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl text-brand">Корзина</h2>
          <button onClick={toggleCart} className="p-2 hover:bg-muted rounded-full transition-colors cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex items-center justify-center text-muted-foreground">
            <div className="bg-black/40 backdrop-blur-lg rounded-full p-8 border border-white/10 text-center">
              <p className="text-2xl">Пусто</p>
            </div>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto space-y-4">
            {items.map(item => (
              <div key={item.id} className="flex gap-4 p-4 bg-muted/30 rounded-lg">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                <div className="flex-1">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-muted-foreground">{item.price} ₽</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1 hover:bg-muted rounded cursor-pointer"
                      aria-label="Уменьшить количество"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1 hover:bg-muted rounded cursor-pointer"
                      aria-label="Увеличить количество"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="p-2 hover:bg-muted rounded self-start cursor-pointer"
                  aria-label="Удалить товар"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}

        {items.length > 0 && (
          <div className="border-t pt-4 mt-4">
            <div className="flex justify-between text-lg mb-4">
              <span>Итого</span>
              <span>{total} ₽</span>
            </div>
            <button onClick={openCheckout} className="w-full liquid-glass rounded-full py-3 text-foreground hover:scale-[1.03] hover:bg-brand hover:text-black transition-all duration-300 cursor-pointer">
              Оформить заказ
            </button>
          </div>
        )}
      </div>
    </div>
  );
};