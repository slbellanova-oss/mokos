export interface MenuItemType {
  id: string;
  name: string;
  price: number;
  description: string;
  weight: string;
  image: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  tabName: string;
  items: MenuItemType[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'pizza',
    name: 'Пицца',
    tabName: 'Пицца',
    items: [
      { id: 'pizza-1', name: 'Пицца «На компанию»', price: 1249, description: 'Соус томатный, сыр моцарелла Gourmet, сыр чеддер, колбаса пепперони, охотничьи колбаски, оковалок су-вид, соус барбекю, руккола', weight: '900 гр.', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop' },
      { id: 'pizza-2', name: 'Пицца Маргарита', price: 790, description: 'Соус томатный, сыр моцарелла Gourmet, моцарелла в рассоле Galbani, песто', weight: '450 гр.', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop' },
      { id: 'pizza-3', name: 'Пицца Пепперони', price: 849, description: 'Соус томатный, сыр моцарелла Gourmet, колбаса пепперони, сыр пармезан', weight: '480 гр.', image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop' },
      { id: 'pizza-4', name: 'Пицца 4 сыра', price: 890, description: 'Соус белый, сыр моцарелла Gourmet, сыр с голубой плесенью, сыр чеддер, грецкий орех, пармезан', weight: '500 гр.', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop' },
      { id: 'pizza-5', name: 'Пицца с уткой и голубым сыром', price: 890, description: 'Соус белый, сыр моцарелла Gourmet, утка копченая, сыр с голубой плесенью, груша, грецкий орех, мёд, руккола', weight: '520 гр.', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop' },
      { id: 'pizza-6', name: 'Пицца с беконом и луком фри', price: 649, description: 'Соус белый, сыр моцарелла Gourmet, бекон хрустящий, лук фри, соус барбекю, петрушка', weight: '450 гр.', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop' },
      { id: 'pizza-7', name: 'Пицца с курицей и грибами', price: 849, description: 'Соус белый, сыр моцарелла Gourmet, шампиньоны свежие, курица варено-копченая, пармезан, масло оливковое', weight: '500 гр.', image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop' },
      { id: 'pizza-8', name: 'Пицца с ростбифом', price: 1090, description: 'Соус томатный, сыр моцарелла Gourmet, вяленые томаты, ростбиф, руккола, крем-уксус бальзамический', weight: '550 гр.', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop' },
      { id: 'pizza-9', name: 'Пицца с креветками и страчателлой', price: 890, description: 'Соус белый, сыр моцарелла Gourmet, креветки, соус соевый, филе апельсина, страчателла', weight: '480 гр.', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop' },
      { id: 'pizza-10', name: 'Кальцоне с рваной говядиной', price: 849, description: 'Соус томатный, соус белый, сыр моцарелла Gourmet, томаты, оковалок су-вид, шпинат свежий', weight: '450 гр.', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop' },
      { id: 'pizza-11', name: 'Лепешка с форелью', price: 549, description: 'Соус белый, сыр моцарелла Gourmet, гранака, маслины черные, устричный соус, шпинат свежий', weight: '350 гр.', image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop' },
      { id: 'pizza-12', name: 'Детская лепешка с курицей', price: 389, description: 'Соус томатный, сыр моцарелла Gourmet, курица варено-копченая', weight: '280 гр.', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop' },
    ],
  },
  {
    id: 'cold-snacks',
    name: 'Холодные закуски',
    tabName: 'Холодные закуски',
    items: [
      { id: 'cold-1', name: 'Ассорти мясное', price: 490, description: 'Окорок, карбонат, салями', weight: '150 гр.', image: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=400&h=300&fit=crop' },
      { id: 'cold-2', name: 'Ассорти рыбное', price: 590, description: 'Форель, сёмга, скумбрия', weight: '150 гр.', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=300&fit=crop' },
      { id: 'cold-3', name: 'Соленья домашние', price: 290, description: 'Огурцы, помидоры, капуста квашеная', weight: '200 гр.', image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&h=300&fit=crop' },
    ],
  },
  {
    id: 'salads',
    name: 'Салаты',
    tabName: 'Салаты',
    items: [
      { id: 'salads-1', name: 'Греческий салат', price: 419, description: 'Огурец свежий, томат розовый, перец болгарский, лук красный, рассольный сыр, маслины, оливковое масло', weight: '280 гр.', image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop' },
      { id: 'salads-2', name: 'Огородный салат со сметаной и яйцом', price: 359, description: 'Огурец свежий, томат розовый, перец болгарский, сметана 15%, яйцо куриное, лимонный сок', weight: '250 гр.', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop' },
      { id: 'salads-3', name: 'Салат с ростбифом и печеным перцем', price: 689, description: 'Ростбиф, микс салата, картофель бэби, печеный перец, лук красный, соус кунжутный, соус соевый, варенье брусничное', weight: '300 гр.', image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=400&h=300&fit=crop' },
      { id: 'salads-4', name: 'Салат с хрустящим баклажаном', price: 419, description: 'Баклажан, томаты розовые, лук красный, страчателла, кинза, кунжут, заправка сладкий чили', weight: '280 гр.', image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop' },
      { id: 'salads-5', name: 'Салат с креветками и страчателлой', price: 639, description: 'Креветки, микс салата, томаты черри, цитрусовая заправка, страчателла, цедра лайма, миндаль', weight: '320 гр.', image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=400&h=300&fit=crop' },
      { id: 'salads-6', name: 'Салат с форелью и яйцом пашот', price: 590, description: 'Форель, зеленая заправка, томаты розовые, яйцо пашот, огурец, микс салата', weight: '300 гр.', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop' },
    ],
  },
  {
    id: 'soups',
    name: 'Супы',
    tabName: 'Супы',
    items: [
      { id: 'soups-1', name: 'Борщ', price: 549, description: 'Бульон говяжий, свекла, капуста белокочанная, картофель, говядина, лук репчатый, морковь, чеснок', weight: '350 мл', image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&h=300&fit=crop' },
      { id: 'soups-2', name: 'Куриный суп', price: 379, description: 'Бульон куриный, курица, лук репчатый, морковь, яйцо куриное, укроп', weight: '350 мл', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop' },
      { id: 'soups-3', name: 'Сырный суп', price: 490, description: 'Бульон куриный, картофель, морковь, лук, сыр копченый, сыр плавленый', weight: '350 мл', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop' },
      { id: 'soups-4', name: 'Солянка мясная', price: 520, description: 'Бульон говяжий, говядина, курица, охотничьи колбаски, ветчина, огурцы маринованные, маслины, лук, морковь, чеснок, лимон, сметана 15%', weight: '350 мл', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop' },
    ],
  },
  {
    id: 'hot',
    name: 'Горячие блюда',
    tabName: 'Горячие блюда',
    items: [
      { id: 'hot-1', name: 'Судак с картофельным пюре и зелёным горошком', price: 549, description: 'Филе судака, картофельное пюре, зелёный горошек, шпинат, куриный бульон', weight: '280 гр.', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=300&fit=crop' },
      { id: 'hot-2', name: 'Бифштекс с молодым картофелем', price: 720, description: 'Бифштекс, сливочно-грибной соус, картофель бэби, укроп, соль, чесночное масло', weight: '350 гр.', image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop' },
      { id: 'hot-3', name: 'Котлета из креветок с зелёным пюре', price: 680, description: 'Котлета из креветок, картофельное пюре, сливки 22%, шпинат, биск креветочный', weight: '300 гр.', image: 'https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?w=400&h=300&fit=crop' },
      { id: 'hot-4', name: 'Куриный шницель / сырные спагетти', price: 449, description: 'Шницель куриный, сыр пармезан, спагетти, сыр моцарелла, сыр чеддер, сливки 22%, соль', weight: '320 гр.', image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&h=300&fit=crop' },
      { id: 'hot-5', name: 'Карбонара', price: 499, description: 'Спагетти, бекон, сливки 22%, чеснок, сыр пармезан', weight: '300 гр.', image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&h=300&fit=crop' },
      { id: 'hot-6', name: 'Паста с креветками', price: 589, description: 'Спагетти, креветки, томатный соус, сливки 22%, лук репчатый, шпинат, красная икра', weight: '340 гр.', image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&h=300&fit=crop' },
    ],
  },
  {
    id: 'kids',
    name: 'Детское меню',
    tabName: 'Детское меню',
    items: [
      { id: 'kids-1', name: 'Детский суп', price: 250, description: 'Куриный бульон с овощами', weight: '200 мл', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop' },
      { id: 'kids-2', name: 'Детская каша', price: 180, description: 'Манная каша с молоком', weight: '150 гр.', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop' },
      { id: 'kids-3', name: 'Котлетки куриные', price: 280, description: 'Куриные котлетки с пюре', weight: '150 гр.', image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop' },
      { id: 'kids-4', name: 'Блинчики со сгущёнкой', price: 220, description: 'Блины со сгущённым молоком', weight: '120 гр.', image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop' },
    ],
  },
  {
    id: 'snacks-sauces',
    name: 'Закуски+соусы',
    tabName: 'Закуски+соусы',
    items: [
      { id: 'snacks-1', name: 'Картофель фри', price: 179, description: 'Хрустящий золотистый картофель', weight: '150 гр.', image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop' },
      { id: 'snacks-2', name: 'Наггетсы куриные', price: 319, description: 'Куриные наггетсы в хрустящей панировке', weight: '200 гр.', image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop' },
      { id: 'snacks-3', name: 'Луковые кольца', price: 219, description: 'Хрустящие луковые кольца в кляре', weight: '150 гр.', image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=400&h=300&fit=crop' },
      { id: 'snacks-4', name: 'Хрустящие креветки', price: 350, description: 'Креветки в хрустящей панировке', weight: '180 гр.', image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop' },
      { id: 'sauces-1', name: 'Сырный соус', price: 50, description: 'Густой сырный дип', weight: '50 гр.', image: 'https://images.unsplash.com/photo-1599021456807-25db0f974333?w=400&h=300&fit=crop' },
      { id: 'sauces-2', name: 'BBQ соус', price: 50, description: 'Копчёный соус BBQ', weight: '50 гр.', image: 'https://images.unsplash.com/photo-1599021456807-25db0f974333?w=400&h=300&fit=crop' },
      { id: 'sauces-3', name: 'Сладкий чили', price: 50, description: 'Острый сладкий соус чили', weight: '50 гр.', image: 'https://images.unsplash.com/photo-1599021456807-25db0f974333?w=400&h=300&fit=crop' },
      { id: 'sauces-4', name: 'Кетчуп', price: 50, description: 'Классический томатный кетчуп', weight: '50 гр.', image: 'https://images.unsplash.com/photo-1599021456807-25db0f974333?w=400&h=300&fit=crop' },
    ],
  },
];

export const tabIds = menuCategories.map(cat => cat.id);