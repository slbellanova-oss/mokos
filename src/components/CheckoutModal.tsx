import React, { useState, useEffect } from 'react';
import { ArrowLeft, Truck, Store, MapPin } from 'lucide-react';
import { useCart } from './CartContext';
import { useFocusTrap } from '../hooks/useFocusTrap';
import { PICKUP_ADDRESS } from '../config';

type DeliveryType = 'delivery' | 'pickup';

export const CheckoutModal: React.FC = () => {
  const { items, total, checkoutOpen, closeCheckout, backToCart, removeItem } = useCart();
  const focusTrapRef = useFocusTrap(checkoutOpen);
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [comment, setComment] = useState('');
  const [deliveryType, setDeliveryType] = useState<DeliveryType>('delivery');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [phoneError, setPhoneError] = useState('');
  const [addressError, setAddressError] = useState('');
  const [checkboxError, setCheckboxError] = useState('');

  useEffect(() => {
    if (checkoutOpen) {
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
      alert(`Заказ оформлен! ${deliveryType === 'delivery' ? 'Доставка по адресу: ' + address : 'Ожидайте звонка для уточнения адреса самовывоза'}`);
      setAddress('');
      setComment('');
      setPhone('');
      closeCheckout();
    }
  };

  if (!checkoutOpen) return null;

  return (
    <div ref={focusTrapRef} className="fixed inset-0 z-[70]" onClick={closeCheckout}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      
      <div className="absolute inset-0 md:hidden flex flex-col" onClick={e => e.stopPropagation()}>
          <div className="flex-1 flex flex-col" style={{ background: 'linear-gradient(180deg, #1C1517 0%, #101216 100%)' }}>
            <div className="flex justify-between items-center p-6 border-b border-white/10">
              <button onClick={backToCart} className="p-2 hover:bg-muted rounded-full transition-colors cursor-pointer mr-2">
                <ArrowLeft className="w-5 h-5 text-brand" />
              </button>
              <h3 className="text-2xl font-bold text-brand">Корзина</h3>
              <button onClick={closeCheckout} className="text-3xl text-brand hover:opacity-70 transition-opacity">×</button>
            </div>
            <div className="flex-1 overflow-y-auto p-6 pb-[140px] space-y-4">
              <div className="flex justify-between items-center text-xl font-bold text-brand">
                <span>Итого:</span>
                <span>{total}₽</span>
              </div>

              <div className="flex gap-2">
                <button onClick={() => setDeliveryType('delivery')} className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg transition-all ${deliveryType === 'delivery' ? 'bg-brand text-black' : 'border border-brand/30 text-white bg-transparent'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"/><polygon points="6 9 12 3 18 9 10 9"/><path d="M9 14v4h6v-4"/><path d="M12 3v18"/></svg>Доставка
                </button>
                <button onClick={() => setDeliveryType('pickup')} className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg transition-all ${deliveryType === 'pickup' ? 'bg-brand text-black' : 'border border-brand/30 text-white bg-transparent'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20h16a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1Z"/><path d="M3 10V6a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4"/><path d="M12 10v10"/><path d="M7 10V6"/><path d="M17 10V6"/></svg>Самовывоз
                </button>
              </div>

              {deliveryType === 'delivery' && (
                <div>
                  <label className="flex items-center gap-2 text-sm mb-2 text-[hsl(240,4%,66%)]"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>Адрес доставки</label>
                  <input type="text" value={address} onChange={(e) => { setAddress(e.target.value); setAddressError(''); }} placeholder="ул. Примерная, д. 1, кв. 1" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-[hsl(240,4%,66%)]/50 focus:border-brand focus:outline-none transition-colors" />
                  {addressError && <p className="text-red-500 text-xs mt-1">{addressError}</p>}
                </div>
              )}

              {deliveryType === 'pickup' && (
                <div className="p-4 rounded-lg bg-brand/10">
                  <p className="text-sm text-[hsl(240,4%,66%)]"><span className="text-brand">Адрес самовывоза:</span><br />{PICKUP_ADDRESS}</p>
                </div>
              )}

              <div>
                <label className="block text-sm mb-2 text-[hsl(240,4%,66%)]">Номер телефона</label>
                <input type="tel" value={phone} onChange={handlePhoneChange} placeholder="+7 (___) ___-__-__" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-[hsl(240,4%,66%)]/50 focus:border-brand focus:outline-none transition-colors" />
                {phoneError && <p className="text-red-500 text-xs mt-1">{phoneError}</p>}
              </div>

              <div>
                <label className="block text-sm mb-2 text-[hsl(240,4%,66%)]">Комментарий к заказу (необязательно)</label>
                <textarea value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Пожелания, особые указания..." rows={2} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-[hsl(240,4%,66%)]/50 focus:border-brand focus:outline-none transition-colors resize-none" />
              </div>

              <div className="space-y-2">
                <label className="flex items-start gap-2 cursor-pointer">
                  <input type="checkbox" checked={termsAccepted} onChange={e => { setTermsAccepted(e.target.checked); setCheckboxError(''); }} className="mt-1 w-4 h-4 accent-brand" />
                  <span className="text-sm text-[hsl(240,4%,66%)]">Согласен с условиями обслуживания</span>
                </label>
                <label className="flex items-start gap-2 cursor-pointer">
                  <input type="checkbox" checked={privacyAccepted} onChange={e => { setPrivacyAccepted(e.target.checked); setCheckboxError(''); }} className="mt-1 w-4 h-4 accent-brand" />
                  <span className="text-sm text-[hsl(240,4%,66%)]">Согласен на обработку персональных данных</span>
                </label>
                {checkboxError && <p className="text-red-500 text-xs">{checkboxError}</p>}
              </div>

              <div className="flex gap-3">
                <button onClick={() => items.forEach(item => removeItem(item.id))} className="flex-1 py-3 px-4 rounded-full border-2 border-brand/50 text-white transition-colors hover:bg-white/10">Очистить</button>
                <button onClick={handleCheckout} className="flex-1 py-3 px-4 rounded-full font-semibold bg-brand text-black transition-all hover:scale-[1.02] active:scale-[0.98]">Оформить</button>
              </div>
            </div>
          </div>
        </div>
      
      <div className="hidden md:flex absolute right-0 top-0 h-full w-full max-w-md flex-col" onClick={e => e.stopPropagation()}>
        <div className="flex-1 overflow-hidden bg-black/40 backdrop-blur-lg border-l border-white/10">
          <div className="flex justify-between items-center p-6 border-b border-white/10">
            <button onClick={backToCart} className="p-2 hover:bg-muted rounded-full transition-colors cursor-pointer mr-2">
              <ArrowLeft className="w-5 h-5 text-brand" />
            </button>
            <h3 className="text-2xl font-bold text-brand">Корзина</h3>
            <button onClick={closeCheckout} className="text-3xl text-brand hover:opacity-70 transition-opacity">×</button>
          </div>
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            <div className="flex justify-between items-center text-xl font-bold text-brand">
              <span>Итого:</span>
              <span>{total}₽</span>
            </div>

            <div className="flex gap-2">
              <button onClick={() => setDeliveryType('delivery')} className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg transition-all ${deliveryType === 'delivery' ? 'bg-brand text-black' : 'border border-brand/30 text-white bg-transparent'}`}>
                <Truck className="w-5 h-5" />Доставка
              </button>
              <button onClick={() => setDeliveryType('pickup')} className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg transition-all ${deliveryType === 'pickup' ? 'bg-brand text-black' : 'border border-brand/30 text-white bg-transparent'}`}>
                <Store className="w-5 h-5" />Самовывоз
              </button>
            </div>

            {deliveryType === 'delivery' && (
              <div>
                <label className="flex items-center gap-2 text-sm mb-2 text-[hsl(240,4%,66%)]"><MapPin className="w-4 h-4" />Адрес доставки</label>
                <input type="text" value={address} onChange={(e) => { setAddress(e.target.value); setAddressError(''); }} placeholder="ул. Примерная, д. 1, кв. 1" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-[hsl(240,4%,66%)]/50 focus:border-brand focus:outline-none transition-colors" />
                {addressError && <p className="text-red-500 text-xs mt-1">{addressError}</p>}
              </div>
            )}

            {deliveryType === 'pickup' && (
              <div className="p-4 rounded-lg bg-brand/10">
                <p className="text-sm text-[hsl(240,4%,66%)]"><span className="text-brand">Адрес самовывоза:</span><br />{PICKUP_ADDRESS}</p>
              </div>
            )}

            <div>
              <label className="block text-sm mb-2 text-[hsl(240,4%,66%)]">Номер телефона</label>
              <input type="tel" value={phone} onChange={handlePhoneChange} placeholder="+7 (___) ___-__-__" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-[hsl(240,4%,66%)]/50 focus:border-brand focus:outline-none transition-colors" />
              {phoneError && <p className="text-red-500 text-xs mt-1">{phoneError}</p>}
            </div>

            <div>
              <label className="block text-sm mb-2 text-[hsl(240,4%,66%)]">Комментарий к заказу (необязательно)</label>
              <textarea value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Пожелания, особые указания..." rows={2} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-[hsl(240,4%,66%)]/50 focus:border-brand focus:outline-none transition-colors resize-none" />
            </div>

            <div className="space-y-2">
              <label className="flex items-start gap-2 cursor-pointer">
                <input type="checkbox" checked={termsAccepted} onChange={e => { setTermsAccepted(e.target.checked); setCheckboxError(''); }} className="mt-1 w-4 h-4 accent-brand" />
                <span className="text-sm text-[hsl(240,4%,66%)]">Согласен с условиями обслуживания</span>
              </label>
              <label className="flex items-start gap-2 cursor-pointer">
                <input type="checkbox" checked={privacyAccepted} onChange={e => { setPrivacyAccepted(e.target.checked); setCheckboxError(''); }} className="mt-1 w-4 h-4 accent-brand" />
                <span className="text-sm text-[hsl(240,4%,66%)]">Согласен на обработку персональных данных</span>
              </label>
              {checkboxError && <p className="text-red-500 text-xs">{checkboxError}</p>}
            </div>

            <div className="flex gap-3">
              <button onClick={() => items.forEach(item => removeItem(item.id))} className="flex-1 py-3 px-4 rounded-full border-2 border-brand/50 text-white transition-colors hover:bg-white/10">Очистить</button>
              <button onClick={handleCheckout} className="flex-1 py-3 px-4 rounded-full font-semibold bg-brand text-black transition-all hover:scale-[1.02] active:scale-[0.98]">Оформить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;