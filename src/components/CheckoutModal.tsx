import React, { useState, useEffect } from 'react';
import { X, ShoppingBag, MapPin, Truck, Store, ArrowLeft } from 'lucide-react';
import { useCart } from './CartContext';

type DeliveryType = 'delivery' | 'pickup';

export const CheckoutModal: React.FC = () => {
  const { items, total, checkoutOpen, closeCheckout, backToCart, updateQuantity, removeItem } = useCart();
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [comment, setComment] = useState('');
  const [deliveryType, setDeliveryType] = useState<DeliveryType>('delivery');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [phoneError, setPhoneError] = useState('');
  const [addressError, setAddressError] = useState('');
  const [checkboxError, setCheckboxError] = useState('');
  const [step, setStep] = useState<'cart' | 'checkout'>('cart');

  useEffect(() => {
    if (checkoutOpen) {
      setStep('cart');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [checkoutOpen]);

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, '');
    if (digits.length <= 1) return digits === '7' ? '+7 ' : '';
    let formatted = '+7 ';
    if (digits.length > 1) formatted += '(' + digits.slice(1, 4);
    if (digits.length > 4) formatted += ') ' + digits.slice(4, 7);
    if (digits.length > 7) formatted += '-' + digits.slice(7, 9);
    if (digits.length > 9) formatted += '-' + digits.slice(9, 11);
    return formatted;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhone(e.target.value));
    setPhoneError('');
  };

  const handleCheckout = () => {
    const digits = phone.replace(/\D/g, '');
    let valid = true;

    if (digits.length < 11) {
      setPhoneError('Введите номер телефона (11 цифр)');
      valid = false;
    }

    if (deliveryType === 'delivery' && address.trim().length < 5) {
      setAddressError('Введите адрес доставки');
      valid = false;
    }

    if (!termsAccepted || !privacyAccepted) {
      setCheckboxError('Подтвердите согласия');
      valid = false;
    }

    if (valid) {
      const orderData = {
        phone: phone,
        deliveryType: deliveryType,
        address: deliveryType === 'delivery' ? address : 'Самовывоз',
        comment: comment,
        termsAgreed: termsAccepted,
        privacyAgreed: privacyAccepted,
        items: items.map(item => ({
          name: item.name,
          qty: item.quantity,
          price: item.price,
        })),
      };
      console.log('Данные заказа:', orderData);
      alert(`Заказ оформлен! ${deliveryType === 'delivery' ? 'Доставка по адресу: ' + address : 'Ожидайте звонка для уточнения адреса самовывоза'}`);
      setAddress('');
      setComment('');
      setPhone('');
      // Закрываем оформление
      closeCheckout();
    }
  };

  if (!checkoutOpen) return null;

  return (
    <div className="fixed inset-0 z-[70]" onClick={closeCheckout}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      
      {/* Мобильная версия - два шага */}
      <div className="absolute inset-0 md:hidden flex flex-col" onClick={e => e.stopPropagation()}>
        {step === 'cart' ? (
          /* Шаг 1: Ваш заказ */
          <div className="flex-1 flex flex-col" style={{ background: 'linear-gradient(180deg, #1C1517 0%, #101216 100%)' }}>
            <div className="flex justify-between items-center p-6 border-b border-white/10">
              <h3 className="text-2xl font-bold text-white">Ваш заказ</h3>
              <button onClick={closeCheckout} className="text-3xl hover:opacity-70 transition-opacity" style={{ color: '#fb9201' }}>×</button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 pb-[120px] space-y-3">
              {items.length === 0 ? null : (
                items.map(item => (
                  <div key={item.id} className="flex items-center gap-4 p-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.05)' }}>
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-white truncate">{item.name}</p>
                      <p style={{ color: '#fb9201' }} className="text-sm">{item.price}₽ × {item.quantity} = {item.price * item.quantity}₽</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-8 h-8 rounded-full flex items-center justify-center transition-colors" style={{ background: 'rgba(251,146,1,0.2)', color: '#fb9201' }}>−</button>
                      <span className="w-8 text-center font-bold" style={{ color: '#fb9201' }}>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-8 h-8 rounded-full flex items-center justify-center transition-colors" style={{ background: 'rgba(251,146,1,0.2)', color: '#fb9201' }}>+</button>
                    </div>
                  </div>
                ))
              )}
            </div>
            {items.length > 0 && (
              <div className="p-6 border-t border-white/10 space-y-4">
                <div className="flex justify-between items-center text-xl font-bold">
                  <span style={{ color: '#fb9201' }}>Итого:</span>
                  <span style={{ color: '#fb9201' }}>{total}₽</span>
                </div>
                <button onClick={() => setStep('checkout')} className="w-full py-4 rounded-full font-semibold text-lg" style={{ background: '#fb9201', color: '#000' }}>
                  Заказать
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Шаг 2: Оформление */
          <div className="flex-1 flex flex-col" style={{ background: 'linear-gradient(180deg, #1C1517 0%, #101216 100%)' }}>
            <div className="flex justify-between items-center p-6 border-b border-white/10">
              <button onClick={() => setStep('cart')} className="text-xl flex items-center gap-1" style={{ color: '#fb9201' }}>← Назад</button>
              <h3 className="text-2xl font-bold" style={{ color: '#fb9201' }}>Оформление</h3>
              <button onClick={closeCheckout} className="text-3xl hover:opacity-70 transition-opacity" style={{ color: '#fb9201' }}>×</button>
            </div>
            <div className="flex-1 overflow-y-auto p-6 pb-[140px] space-y-4">
              <div className="flex justify-between items-center text-xl font-bold">
                <span style={{ color: '#fb9201' }}>Итого:</span>
                <span style={{ color: '#fb9201' }}>{total}₽</span>
              </div>

              <div className="flex gap-2">
                <button onClick={() => setDeliveryType('delivery')} className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg transition-all ${deliveryType === 'delivery' ? 'text-black' : 'border text-white'}`} style={{ background: deliveryType === 'delivery' ? '#fb9201' : 'transparent', borderColor: deliveryType === 'delivery' ? '#fb9201' : 'rgba(251,146,1,0.3)' }}>
                  <Truck className="w-5 h-5" />Доставка
                </button>
                <button onClick={() => setDeliveryType('pickup')} className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg transition-all ${deliveryType === 'pickup' ? 'text-black' : 'border text-white'}`} style={{ background: deliveryType === 'pickup' ? '#fb9201' : 'transparent', borderColor: deliveryType === 'pickup' ? '#fb9201' : 'rgba(251,146,1,0.3)' }}>
                  <Store className="w-5 h-5" />Самовывоз
                </button>
              </div>

              {deliveryType === 'delivery' && (
                <div>
                  <label className="flex items-center gap-2 text-sm mb-2 text-[hsl(240,4%,66%)]"><MapPin className="w-4 h-4" />Адрес доставки</label>
                  <input type="text" value={address} onChange={(e) => { setAddress(e.target.value); setAddressError(''); }} placeholder="ул. Примерная, д. 1, кв. 1" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-[hsl(240,4%,66%)]/50 focus:border-[#fb9201] focus:outline-none transition-colors" />
                  {addressError && <p className="text-red-500 text-xs mt-1">{addressError}</p>}
                </div>
              )}

              {deliveryType === 'pickup' && (
                <div className="p-4 rounded-lg" style={{ background: 'rgba(251,146,1,0.1)' }}>
                  <p className="text-sm text-[hsl(240,4%,66%)]"><span style={{ color: '#fb9201' }}>Адрес самовывоза:</span><br />ул. Ресторанная, д. 15</p>
                </div>
              )}

              <div>
                <label className="block text-sm mb-2 text-[hsl(240,4%,66%)]">Номер телефона</label>
                <input type="tel" value={phone} onChange={handlePhoneChange} placeholder="+7 (___) ___-__-__" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-[hsl(240,4%,66%)]/50 focus:border-[#fb9201] focus:outline-none transition-colors" />
                {phoneError && <p className="text-red-500 text-xs mt-1">{phoneError}</p>}
              </div>

              <div>
                <label className="block text-sm mb-2 text-[hsl(240,4%,66%)]">Комментарий к заказу (необязательно)</label>
                <textarea value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Пожелания, особые указания..." rows={2} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-[hsl(240,4%,66%)]/50 focus:border-[#fb9201] focus:outline-none transition-colors resize-none" />
              </div>

              <div className="space-y-2">
                <label className="flex items-start gap-2 cursor-pointer">
                  <input type="checkbox" checked={termsAccepted} onChange={e => { setTermsAccepted(e.target.checked); setCheckboxError(''); }} className="mt-1 w-4 h-4 accent-[#fb9201]" />
                  <span className="text-sm text-[hsl(240,4%,66%)]">Согласен с условиями обслуживания</span>
                </label>
                <label className="flex items-start gap-2 cursor-pointer">
                  <input type="checkbox" checked={privacyAccepted} onChange={e => { setPrivacyAccepted(e.target.checked); setCheckboxError(''); }} className="mt-1 w-4 h-4 accent-[#fb9201]" />
                  <span className="text-sm text-[hsl(240,4%,66%)]">Согласен на обработку персональных данных</span>
                </label>
                {checkboxError && <p className="text-red-500 text-xs">{checkboxError}</p>}
              </div>

              <div className="flex gap-3">
                <button onClick={() => items.forEach(item => removeItem(item.id))} className="flex-1 py-3 px-4 rounded-full border-2 text-white transition-colors hover:bg-white/10" style={{ borderColor: 'rgba(251,146,1,0.5)' }}>Очистить</button>
                <button onClick={handleCheckout} className="flex-1 py-3 px-4 rounded-full font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]" style={{ background: '#fb9201', color: '#000' }}>Оформить</button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* ПК версия - две панели рядом */}
      <div className="hidden md:flex absolute right-0 top-0 h-full w-full max-w-md flex-col" onClick={e => e.stopPropagation()}>
        {/* Корзина с формой - справа */}
        <div className="flex-1 overflow-hidden bg-black/40 backdrop-blur-lg border-l border-white/10">
          <div className="flex justify-between items-center p-6 border-b border-white/10">
            {/* Стрелка назад — закрывает оформление и открывает корзину */}
            <button onClick={backToCart} className="p-2 hover:bg-muted rounded-full transition-colors cursor-pointer mr-2">
              <ArrowLeft className="w-5 h-5" style={{ color: '#fb9201' }} />
            </button>
            <h3 className="text-2xl font-bold" style={{ color: '#fb9201' }}>Корзина</h3>
            <button onClick={closeCheckout} className="text-3xl hover:opacity-70 transition-opacity" style={{ color: '#fb9201' }}>×</button>
          </div>
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            <div className="flex justify-between items-center text-xl font-bold">
              <span style={{ color: '#fb9201' }}>Итого:</span>
              <span style={{ color: '#fb9201' }}>{total}₽</span>
            </div>

            <div className="flex gap-2">
              <button onClick={() => setDeliveryType('delivery')} className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg transition-all ${deliveryType === 'delivery' ? 'text-black' : 'border text-white'}`} style={{ background: deliveryType === 'delivery' ? '#fb9201' : 'transparent', borderColor: deliveryType === 'delivery' ? '#fb9201' : 'rgba(251,146,1,0.3)' }}>
                <Truck className="w-5 h-5" />Доставка
              </button>
              <button onClick={() => setDeliveryType('pickup')} className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg transition-all ${deliveryType === 'pickup' ? 'text-black' : 'border text-white'}`} style={{ background: deliveryType === 'pickup' ? '#fb9201' : 'transparent', borderColor: deliveryType === 'pickup' ? '#fb9201' : 'rgba(251,146,1,0.3)' }}>
                <Store className="w-5 h-5" />Самовывоз
              </button>
            </div>

            {deliveryType === 'delivery' && (
              <div>
                <label className="flex items-center gap-2 text-sm mb-2 text-[hsl(240,4%,66%)]"><MapPin className="w-4 h-4" />Адрес доставки</label>
                <input type="text" value={address} onChange={(e) => { setAddress(e.target.value); setAddressError(''); }} placeholder="ул. Примерная, д. 1, кв. 1" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-[hsl(240,4%,66%)]/50 focus:border-[#fb9201] focus:outline-none transition-colors" />
                {addressError && <p className="text-red-500 text-xs mt-1">{addressError}</p>}
              </div>
            )}

            {deliveryType === 'pickup' && (
              <div className="p-4 rounded-lg" style={{ background: 'rgba(251,146,1,0.1)' }}>
                <p className="text-sm text-[hsl(240,4%,66%)]"><span style={{ color: '#fb9201' }}>Адрес самовывоза:</span><br />ул. Ресторанная, д. 15</p>
              </div>
            )}

            <div>
              <label className="block text-sm mb-2 text-[hsl(240,4%,66%)]">Номер телефона</label>
              <input type="tel" value={phone} onChange={handlePhoneChange} placeholder="+7 (___) ___-__-__" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-[hsl(240,4%,66%)]/50 focus:border-[#fb9201] focus:outline-none transition-colors" />
              {phoneError && <p className="text-red-500 text-xs mt-1">{phoneError}</p>}
            </div>

            <div>
              <label className="block text-sm mb-2 text-[hsl(240,4%,66%)]">Комментарий к заказу (необязательно)</label>
              <textarea value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Пожелания, особые указания..." rows={2} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-[hsl(240,4%,66%)]/50 focus:border-[#fb9201] focus:outline-none transition-colors resize-none" />
            </div>

            <div className="space-y-2">
              <label className="flex items-start gap-2 cursor-pointer">
                <input type="checkbox" checked={termsAccepted} onChange={e => { setTermsAccepted(e.target.checked); setCheckboxError(''); }} className="mt-1 w-4 h-4 accent-[#fb9201]" />
                <span className="text-sm text-[hsl(240,4%,66%)]">Согласен с условиями обслуживания</span>
              </label>
              <label className="flex items-start gap-2 cursor-pointer">
                <input type="checkbox" checked={privacyAccepted} onChange={e => { setPrivacyAccepted(e.target.checked); setCheckboxError(''); }} className="mt-1 w-4 h-4 accent-[#fb9201]" />
                <span className="text-sm text-[hsl(240,4%,66%)]">Согласен на обработку персональных данных</span>
              </label>
              {checkboxError && <p className="text-red-500 text-xs">{checkboxError}</p>}
            </div>

            <div className="flex gap-3">
              <button onClick={() => items.forEach(item => removeItem(item.id))} className="flex-1 py-3 px-4 rounded-full border-2 text-white transition-colors hover:bg-white/10" style={{ borderColor: 'rgba(251,146,1,0.5)' }}>Очистить</button>
              <button onClick={handleCheckout} className="flex-1 py-3 px-4 rounded-full font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]" style={{ background: '#fb9201', color: '#000' }}>Оформить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;