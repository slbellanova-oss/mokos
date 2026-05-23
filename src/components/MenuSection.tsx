import React, { useState } from 'react';
import { useCart } from './CartContext';

interface MenuSectionProps {
  scrollProgress: number;
}

export const MenuSection = ({ scrollProgress }: MenuSectionProps) => {
  const { addItem } = useCart();
  const [activeSection, setActiveSection] = useState('Пицца');
  
  type MenuItem = { id: string; name: string; desc: string; price: string; image: string };
  type MenuSection = { id: string; name: string };
  type MenuData = Record<string, MenuItem[]>;
  
  const menuSections: MenuSection[] = [
    { id: 'Пицца', name: 'Пицца' },
    { id: 'Салаты', name: 'Салаты' },
    { id: 'Основное', name: 'Основное' },
    { id: 'Супы', name: 'Супы' },
    { id: 'Закуски', name: 'Закуски' },
    { id: 'Кофе', name: 'Кофе' },
    { id: 'Чай', name: 'Чай' },
    { id: 'Напитки', name: 'Напитки' },
  ];
  
  const menuData: MenuData = {
    'Пицца': [
      { id: 'p1', name: 'Пицца Маргарита', desc: 'томаты, моцарелла, базилик', price: '790₽ / 849₽', image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=100&h=100&fit=crop' },
      { id: 'p2', name: 'Пицца Пепперони', desc: 'томаты, пепперони, моцарелла', price: '890₽', image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=100&h=100&fit=crop' },
      { id: 'p3', name: 'Пицца 4 сыра', desc: 'моцарелла, пармезан, горгонзола, чеддер', price: '849₽', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=100&h=100&fit=crop' },
      { id: 'p4', name: 'Пицца с охотничьими', desc: 'охотничьи колбаски, лук', price: '849₽', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=100&h=100&fit=crop' },
      { id: 'p5', name: 'Пицца с курицей', desc: 'курица, шампиньоны', price: '1090₽', image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=100&h=100&fit=crop' },
      { id: 'p6', name: 'Пицца с ростбифом', desc: 'ростбиф, лук, огурцы', price: '890₽', image: 'https://images.unsplash.com/photo-1595295333158-4742f28fbd85?w=100&h=100&fit=crop' },
      { id: 'p7', name: 'Пицца с креветками', desc: 'креветки, страчателла', price: '890₽', image: 'https://images.unsplash.com/photo-1595708680250-7f5303f2538f?w=100&h=100&fit=crop' },
      { id: 'p8', name: 'Пицца с грушей', desc: 'груша, голубой сыр', price: '890₽', image: 'https://images.unsplash.com/photo-1588315029754-2d089d39a1a?w=100&h=100&fit=crop' },
      { id: 'p9', name: 'Кальцоне', desc: 'говядина, сыр', price: '849₽', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=100&h=100&fit=crop' },
    ],
    'Салаты': [
      { id: 's1', name: 'Греческий салат', desc: 'огурцы, помидоры, оливки', price: '419₽', image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=100&h=100&fit=crop' },
      { id: 's2', name: 'Огородный салат', desc: 'овощи, сметана, яйцо', price: '359₽', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=100&h=100&fit=crop' },
      { id: 's3', name: 'Салат с ростбифом', desc: 'ростбиф, перец', price: '689₽', image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=100&h=100&fit=crop' },
      { id: 's4', name: 'Салат с баклажаном', desc: 'баклажан, овощи', price: '419₽', image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=100&h=100&fit=crop' },
    ],
    'Основное': [
      { id: 'm1', name: 'Судак', desc: 'судак, пюре, горошек', price: '549₽', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=100&h=100&fit=crop' },
      { id: 'm2', name: 'Куриный шинель', desc: 'курица, сливочный соус', price: '449₽', image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=100&h=100&fit=crop' },
      { id: 'm3', name: 'Рваная говядина', desc: 'говядина, картофель', price: '649₽', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=100&h=100&fit=crop' },
      { id: 'm4', name: 'Карбонара', desc: 'паста, бекон, яйцо', price: '499₽', image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=100&h=100&fit=crop' },
      { id: 'm5', name: 'Паста с креветками', desc: 'креветки, сливки', price: '589₽', image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=100&h=100&fit=crop' },
    ],
    'Супы': [
      { id: 'u1', name: 'Борщ', desc: 'свекла, говядина', price: '549₽', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=100&h=100&fit=crop' },
      { id: 'u2', name: 'Куриный суп', desc: 'курица, лапша', price: '-', image: 'https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?w=100&h=100&fit=crop' },
      { id: 'u3', name: 'Уха', desc: 'лосось, форель', price: '599₽', image: 'https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=100&h=100&fit=crop' },
    ],
    'Закуски': [
      { id: 'z1', name: 'Картофель фри', desc: 'хрустящий картофель', price: '179₽', image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=100&h=100&fit=crop' },
      { id: 'z2', name: 'Наггетсы', desc: 'куриные наггетсы', price: '319₽', image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=100&h=100&fit=crop' },
      { id: 'z3', name: 'Луковые кольца', desc: 'хрустящие кольца', price: '219₽', image: 'https://images.unsplash.com/photo-1639024471287-9d4c53d53ac8?w=100&h=100&fit=crop' },
      { id: 'z4', name: 'Креветки', desc: 'хрустящие креветки', price: '350₽', image: 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=100&h=100&fit=crop' },
    ],
    'Кофе': [
      { id: 'k1', name: 'Эспрессо', desc: 'крепкий кофе', price: '-', image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=100&h=100&fit=crop' },
      { id: 'k2', name: 'Американо', desc: 'эспрессо с водой', price: '90₽ / 120₽', image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dbaa?w=100&h=100&fit=crop' },
      { id: 'k3', name: 'Капучино', desc: 'кофе с пеной', price: '150₽ / 180₽', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=100&h=100&fit=crop' },
      { id: 'k4', name: 'Латте', desc: 'кофе с молоком', price: '240₽', image: 'https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=100&h=100&fit=crop' },
    ],
    'Чай': [
      { id: 'ch1', name: 'Чёрный чай', desc: 'Английский завтрак', price: '350₽ / 450₽', image: 'https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?w=100&h=100&fit=crop' },
      { id: 'ch2', name: 'Зелёный чай', desc: 'Молочный улун', price: '350₽ / 450₽', image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=100&h=100&fit=crop' },
    ],
    'Напитки': [
      { id: 'pn1', name: 'Сок яблочный', desc: 'Rioba', price: '-', image: 'https://images.unsplash.com/photo-1571772996211-2f02b9728124?w=100&h=100&fit=crop' },
      { id: 'pn2', name: 'Сок вишнёвый', desc: 'Rioba', price: '120₽', image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=100&h=100&fit=crop' },
      { id: 'pn3', name: 'Добрый кола', desc: 'газировка', price: '150₽', image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=100&h=100&fit=crop' },
      { id: 'pn4', name: 'Вода Tassay', desc: 'газированная', price: '90₽', image: 'https://images.unsplash.com/photo-1559839914-17aae19cec71?w=100&h=100&fit=crop' },
    ],
  };

  const currentItems = menuData[activeSection] || [];

  return (
    <div className={`fixed z-30 top-20 left-8 right-8 transition-opacity duration-500 ${scrollProgress >= 300 ? 'opacity-100 pointer-events-auto animate-fade-in' : 'opacity-0 pointer-events-none'}`} id="menu-section">
      <div className="bg-black/40 backdrop-blur-md h-[calc(100vh-140px)] p-8 overflow-y-auto rounded-3xl">
        <div className="h-full flex flex-col">
          <div className="flex flex-wrap gap-2 mb-6 justify-center">
            {menuSections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-4 py-2 rounded-full text-lg transition-all ${
                  activeSection === section.id 
                    ? 'bg-[#fb9201] text-black' 
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {section.name}
              </button>
            ))}
          </div>
          <div className="flex-1 overflow-y-auto space-y-4 pr-4">
            {currentItems.map((item: any) => (
              <div key={item.id} className="flex items-center gap-4 border-b border-white/10 pb-3 group">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-14 h-14 rounded-lg object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="font-medium" style={{ fontFamily: 'PT Sans, sans-serif' }}>{item.name}</div>
                  <div className="text-white/60 text-sm" style={{ fontFamily: 'Golos Text, sans-serif' }}>{item.desc}</div>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="text-[#fb9201] whitespace-nowrap">{item.price}</span>
                  {item.price !== '-' && (
                    <button 
                      onClick={() => addItem({ id: item.id, name: item.name, price: parseInt(item.price.replace(/\D/g, '')) || 0, image: item.image })}
                      className="bg-[#fb9201] text-black px-3 py-1 rounded-full text-sm hover:scale-105 transition-all cursor-pointer"
                    >
                      +
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};