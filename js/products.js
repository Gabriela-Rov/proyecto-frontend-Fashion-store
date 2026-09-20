// ==========================================================================
// FASHION STORE // TOKYO DARK ARCHIVE (東京・暗黒)
// Colección: Dark E-Girl, Cyber Grunge, Jirai Kei & Japanese Streetwear
// Prendas y accesorios reales con contrastes en negro, blanco y acentos rosa
// ==========================================================================

const PRODUCTS = [
  // ========================================================================
  // CATEGORÍA: MUJER 
  // ========================================================================
  {
    id: 1,
    name: "Falda midi asimétrica Jirai Dark",
    category: "mujer",
    categoryName: "Mujer",
    price: 60.00,
    originalPrice: 80.00,
    image: "https://www.stylesock.com/cdn/shop/files/O1CN01fCQK3v28B38JGZZJZ__2200686617893-0-cib_720x.jpg?v=1768465298",
    description: "Falda midi en color negro intenso. Su diseño asimetrico en capas aporta un movimiento único y con un aire vanguardista.",
    badge: "【 地雷系 // JIRAI 】"
  },
  {
    id: 2,
    name: "Camisa oversize Cyberpunk Neo-Tokyo",
    category: "mujer",
    categoryName: "Mujer",
    price: 48.00,
    originalPrice: 62.00,
    image: "https://www.stylesock.com/cdn/shop/files/811354520a837a8e1445983bf079da46_720x.jpg?v=1752046061",
    description: "Camisa negra de silueta oversize y diseño asimétrico. Destaca por su hilera de broches de presió metálicos y cortes angulares que definen la estética cyberpunk.",
    badge: "【 サイバー // CYBER 】"
  },
  {
    id: 3,
    name: "Sudadera oversize Harajuku minimal grey",
    category: "mujer",
    categoryName: "Mujer",
    price: 78.00,
    originalPrice: 95.00,
    image: "https://www.stylesock.com/cdn/shop/files/1ed1def88e4b64d78d030cf53626f47a_720x.jpg?v=1732689500",
    description: "Sudadera gris claro con silueta oversize holgada con costuras delanteras expuestas, caída fluida y estética urbana Harajuku minimalista.",
    badge: "【 原宿 // HARAJUKU 】"
  },
  {
    id: 4,
    name: "Camisa vestido oversize Tokyo Archive",
    category: "mujer",
    categoryName: "Mujer",
    price: 118.00,
    originalPrice: null,
    image: "https://www.stylesock.com/cdn/shop/files/19dd43426ce864e7bb7d0239d63efec0_720x.jpg?v=1716793248",
    description: "Camisa minimalista de silueta holgada y corte alargado tipo vestido. Destaca por su diseño de estetica Archive con sutiles pliegues y un cuello limpio que aporta un toque contemporáneo.",
    badge: "【 脱構築 // ARCHIVE 】"
  },
  {
    id: 5,
    name: "Playera oversize Harajuku Basic Black",
    category: "mujer",
    categoryName: "Mujer",
    price: 70.00,
    originalPrice: 90.00,
    image: "https://www.stylesock.com/cdn/shop/files/4775bc33610666f6b4fdac210242666f_720x.jpg?v=1779435202",
    description: "Playera oversize negra en algodón con diseño minimalista y corte relajado. Destaca por su estética Harajuku y su comodidad.",
    badge: "【 原宿 // HARAJUKU 】"
  },
  {
    id: 6,
    name: "Chamarra bomber oversize Harajuku puff",
    category: "mujer",
    categoryName: "Mujer",
    price: 99.00,
    originalPrice: 110.00,
    image: "https://juliafashionshop.com/cdn/shop/files/Teddy-Reversible-Hooded-Jacket_bcce11f9-5c86-4b67-ba49-b9a804f5461a_1000x.jpg?v=1760441573",
    description: "Chamarra bomber de silueta ultra-oversize con relleno acolchado, capucha ajustable y acabado repelente al agua estilo Harajuku.",
    badge: "【 原宿 // HARAJUKU 】"
  },

  // ========================================================================
  // CATEGORÍA: HOMBRE 
  // ========================================================================
  {
    id: 7,
    name: "Pantalon cargo oversize Techwear Neo-Tokyo",
    category: "hombre",
    categoryName: "Hombre",
    price: 88.00,
    originalPrice: 115.00,
    image: "https://www.stylesock.com/cdn/shop/files/O1CN01T5bBu727Al3clHFAr__2207959147757_720x.jpg?v=1701083139",
    description: "Pantalón cargo de silueta holgada en tejido técnico resistente al agua con múltiples bolsillos utilitarios, costuras reforzadas y estética cyberpunk.",
    badge: "【 ネオタウン // NEO-TOKYO 】"
  },
  {
    id: 8,
    name: "Chaqueta de piel Cyber Punk zipper",
    category: "hombre",
    categoryName: "Hombre",
    price: 155.00,
    originalPrice: 195.00,
    image: "https://i.pinimg.com/736x/5c/df/9c/5cdf9c3b934ab9f524eb4510709e209a.jpg",
    description: "Chaqueta negra de piel sintetica premium. Su diseño destaca por un llamativo cierre metálico plateado expuesto y costuras finas que evocan la estética punk.",
    badge: "【 グランジ // DISTRESSED 】"
  },
  {
    id: 9,
    name: "Sudadera cuello alto oversize Neo-Tokyo",
    category: "hombre",
    categoryName: "Hombre",
    price: 54.00,
    originalPrice: 70.00,
    image: "https://www.stylesock.com/cdn/shop/products/O1CN014kEmgC1nr5GZHTDeo__2447465142-0-cib_720x.jpg?v=1642756375",
    description: "Sudadera negra de cuello alto con silueta oversize, confeccionado en tela lisa de algodón y poliéster con estética urbana japonesa contemporánea.",
    badge: "【 ネオタウン // NEO-TOKYO 】"
  },
  {
    id: 10,
    name: "Suéter Distressed Holey",
    category: "hombre",
    categoryName: "Hombre",
    price: 72.00,
    originalPrice: 90.00,
    image: "https://m.media-amazon.com/images/I/518ePziDonL._AC_SY1000_.jpg",
    description: "Jersey de punto calado con roturas manuales controladas, cuello redondo holgado y mangas extralargas e-boy contemporáneo.",
    badge: "【 グランジ // DISTRESSED 】"
  },
  {
    id: 11,
    name: "Sobrecamisa Techwear Neo-Tokyo",
    category: "hombre",
    categoryName: "Hombre",
    price: 110.00,
    originalPrice: 135.00,
    image: "https://www.stylesock.com/cdn/shop/files/10002_d91e5335-414b-4676-b3b5-66b88abe4a7b_720x.jpg?v=1695203934",
    description: "Sobrecamisa de silueta holgada en tejido técnico resistente al agua con múltiples bolsillos utilitarios, costuras reforzadas y estética cyberpunk.",
    badge: "【 ネオタウン // NEO-TOKYO 】"
  },
  {
    id: 12,
    name: "Playera oversize Techwear Drop Shoulder",
    category: "hombre",
    categoryName: "Hombre",
    price: 105.00,
    originalPrice: null,
    image: "https://www.stylesock.com/cdn/shop/products/O1CN01Nu7uXw1VY9n1pcekJ__1703772664_720x.jpg?v=1630988720",
    description: "Playera negra de silueta oversize con hombros caídos y costuras expuestas, confeccionada en algodón de alta calidad con estética urbana japonesa contemporánea.",
    badge: "【 サイバー // CYBER 】"
  },

  // ========================================================================
  // CATEGORÍA: ACCESORIOS 
  // ========================================================================
  {
    id: 13,
    name: "Botas de plataforma Gothic Chain Punk",
    category: "accesorios",
    categoryName: "Accesorios",
    price: 125.00,
    originalPrice: 160.00,
    image: "https://i.pinimg.com/1200x/4e/24/47/4e2447884fdfaf109f625998a46e66f6.jpg",
    description: "Botas de plataforma con suela gruesa y diseño robusto en cuero sintético negro, adornadas con cadenas metálicas y hebillas ajustables que evocan la estética gótica industrial.",
    badge: "【 グランジ // DISTRESSED 】"
  },
  {
    id: 14,
    name: "Lentes Cyber Goth Rimless Thorn",
    category: "accesorios",
    categoryName: "Accesorios",
    price: 38.00,
    originalPrice: 50.00,
    image: "https://i.pinimg.com/1200x/46/ca/5c/46ca5cc03e372f6083b2c01807cf452b.jpg",
    description: "Lentes de sol sin montura con diseño futurista, lentes tintadas en negro y detalles metálicos en forma de espinas que evocan la estética cyber goth.",
    badge: "【 サイバー // CYBER 】"
  },
  {
    id: 15,
    name: "Collar multicapa Gothic Star & O-Ring",
    category: "accesorios",
    categoryName: "Accesorios",
    price: 25.00,
    originalPrice: null,
    image: "https://i.pinimg.com/736x/2b/71/f4/2b71f483d45aac22f81cb2684be0f3b1.jpg",
    description: "Collar multicapa de acero inoxidable color plateado, combina eslabones de diferentes tamaños con un colgante de estrella y un anillo O-Ring central.",
    badge: "【 Y2Kグランジ // Y2K_GRUNGE 】"
  },
  {
    id: 16,
    name: "Cinturón Vintage Black CyberStar Belt",
    category: "accesorios",
    categoryName: "Accesorios",
    price: 29.00,
    originalPrice: 38.00,
    image: "https://newpok.com/cdn/shop/files/star_buckle_black_belt_boogzel_clothing_1_1000x.jpg?v=1780579744",
    description: "Cinturón con imponente hebilla metálica plateda de estrella abstracta montada sobre una correa negra de alta resistencia.",
    badge: "【 戦術 // ROLLER_BELT 】"
  },
  {
    id: 17,
    name: "Set de anillos Cyber Goth Star",
    category: "accesorios",
    categoryName: "Accesorios",
    price: 42.00,
    originalPrice: 55.00,
    image: "https://i.pinimg.com/1200x/7c/40/56/7c405699813e823e2fad558288b1216b.jpg",
    description: "Colección de 2 anillos en relieve de plata fundida con estética cyber grunge, uno con diseño de estrella y otro con detalles geométricos, ideales para complementar un look urbano y futurista.",
    badge: "【 サイバー // CYBER 】"
  },
  {
    id: 18,
    name: "Mochila Jirai kei dark ",
    category: "accesorios",
    categoryName: "Accesorios",
    price: 58.00,
    originalPrice: 75.00,
    image: "https://i.pinimg.com/1200x/ca/d9/3a/cad93a2e1a43c277f3d50ba7f5139949.jpg",
    description: "Una mochila estructurada con detalles metálicos oscuros de acero inoxidable y corres ajustables que combinan la elengancia gótica con la funcionalidad urbana de la moda japonesa.",
    badge: "【 地雷系 // JIRAI 】"
  }
];
