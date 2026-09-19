// ==========================================================================
// FASHION STORE // TOKYO DARK ARCHIVE (東京・暗黒)
// Colección: Dark E-Girl, Cyber Grunge, Jirai Kei & Japanese Streetwear
// Prendas y accesorios reales con contrastes en negro, blanco y acentos rosa
// ==========================================================================

const PRODUCTS = [
  // ========================================================================
  // CATEGORÍA: MUJER (Dark E-Girl / Jirai Kei / Cyber Grunge / Harajuku)
  // ========================================================================
  {
    id: 1,
    name: "Falda Plisada Jirai Grommet & Chains",
    category: "mujer",
    categoryName: "Mujer",
    price: 65.00,
    originalPrice: 85.00,
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=800&q=80",
    description: "Falda tableada en twill negro intenso con ojales metálicos reforzados, cintas con hebilla y cadenas desmontables de acero inoxidable.",
    badge: "【 地雷系 // JIRAI 】"
  },
  {
    id: 2,
    name: "Top Asimétrico Cyber Mesh & Straps",
    category: "mujer",
    categoryName: "Mujer",
    price: 48.00,
    originalPrice: 62.00,
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
    description: "Top deconstruido de corte asimétrico en tejido negro técnico con arneses regulables y acabado minimalista de alta densidad.",
    badge: "【 サイバー // CYBER 】"
  },
  {
    id: 3,
    name: "Hoodie Distressed Acid-Wash Anime Graphic",
    category: "mujer",
    categoryName: "Mujer",
    price: 78.00,
    originalPrice: 95.00,
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
    description: "Sudadera holgada en algodón pesado de 480gsm con lavado mineral ácido desgastado, cortes raw-cut y capucha amplia estilo Harajuku.",
    badge: "【 原宿 // HARAJUKU 】"
  },
  {
    id: 4,
    name: "Blazer Brutalista Asimétrico Noir",
    category: "mujer",
    categoryName: "Mujer",
    price: 118.00,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
    description: "Americana sastre contemporánea de corte arquitectónico, solapa cruzada angular y cierre por corchete metálico industrial.",
    badge: "【 脱構築 // ARCHIVE 】"
  },
  {
    id: 5,
    name: "Vestido Gótico Contemporáneo Dark Drape",
    category: "mujer",
    categoryName: "Mujer",
    price: 89.00,
    originalPrice: 110.00,
    image: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80",
    description: "Vestido largo en viscosa pesada con drapeado fluido asimétrico, cuello halter elevado y dobladillos deshilachados post-punk.",
    badge: "【 暗黒 // GOTHIC 】"
  },
  {
    id: 6,
    name: "Maxi Trench Monolítico Cyber Tech",
    category: "mujer",
    categoryName: "Mujer",
    price: 145.00,
    originalPrice: 180.00,
    image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80",
    description: "Gabardina técnica impermeable de corte oversize con cuello militar alzado, cinchas de compresión y bolsillos modulares sellados.",
    badge: "【 テック // TECHWEAR 】"
  },

  // ========================================================================
  // CATEGORÍA: HOMBRE (Techwear / E-Boy / Tokyo Streetwear / Dark Cyber)
  // ========================================================================
  {
    id: 7,
    name: "Pantalón Cargo Táctico Multi-Strap Pink Barcode",
    category: "hombre",
    categoryName: "Hombre",
    price: 88.00,
    originalPrice: 115.00,
    image: "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=800&q=80",
    description: "Pantalón técnico en tejido ripstop impermeable con múltiples bolsillos modulares 3D, cinchas colgantes con hebillas y barcode reflectante.",
    badge: "【 貨物 // TECH_CARGO 】"
  },
  {
    id: 8,
    name: "Chaqueta Cuero Raw Biker & Safety Pins",
    category: "hombre",
    categoryName: "Hombre",
    price: 155.00,
    originalPrice: 195.00,
    image: "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80",
    description: "Chaqueta de cuero vacuno grueso con textura mate envejecida, cremalleras asimétricas expuestas y remaches cromados estilo punk japonés.",
    badge: "【 パンク // RAW_PUNK 】"
  },
  {
    id: 9,
    name: "Camisa Boxy Deconstruida Tokio Street E-Boy",
    category: "hombre",
    categoryName: "Hombre",
    price: 54.00,
    originalPrice: 70.00,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
    description: "Camisa holgada de hombros caídos en popelín negro intenso con bolsillo de pecho superpuesto y costuras invertidas estilo Shibuya.",
    badge: "【 渋谷 // TOKYO_FIT 】"
  },
  {
    id: 10,
    name: "Suéter Distressed Holey Knit Pink & Black",
    category: "hombre",
    categoryName: "Hombre",
    price: 72.00,
    originalPrice: 90.00,
    image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
    description: "Jersey de punto calado con roturas manuales controladas, cuello redondo holgado y mangas extralargas e-boy contemporáneo.",
    badge: "【 グランジ // DISTRESSED 】"
  },
  {
    id: 11,
    name: "Noragi Táctico Techwear Kimono",
    category: "hombre",
    categoryName: "Hombre",
    price: 110.00,
    originalPrice: 135.00,
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80",
    description: "Cazadora cruzada híbrida tradicional japonesa y techwear moderno en cordura balística resistente al desgarro con cierre por hebilla rápida.",
    badge: "【 野良着 // NORAGI 】"
  },
  {
    id: 12,
    name: "Bomber MA-1 Heavy Cyber Flight",
    category: "hombre",
    categoryName: "Hombre",
    price: 105.00,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=800&q=80",
    description: "Cazadora de vuelo con volumen holgado cropped en nylon satinado repelente al agua, puños acanalados y bolsillo táctico de manga.",
    badge: "【 フライト // CYBER_MA1 】"
  },

  // ========================================================================
  // CATEGORÍA: ACCESORIOS (Hardware Industrial / Gothic Platforms / Chrome)
  // ========================================================================
  {
    id: 13,
    name: "Botas de Combate Gothic Platform Track 6cm",
    category: "accesorios",
    categoryName: "Accesorios",
    price: 125.00,
    originalPrice: 160.00,
    image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=800&q=80",
    description: "Botas militares de cuero con suela track dentada de plataforma de 6cm, cordones trenzados de alta tenacidad y cremallera metálica lateral.",
    badge: "【 厚底 // PLATFORM 】"
  },
  {
    id: 14,
    name: "Gafas Blade Cyber Visor Neon Tint",
    category: "accesorios",
    categoryName: "Accesorios",
    price: 38.00,
    originalPrice: 50.00,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",
    description: "Gafas de sol de perfil ultra-angosto rectangular en acetato negro mate con cristales polarizados de tono frío y protección UV400 completa.",
    badge: "【 視覚 // CYBER_BLADE 】"
  },
  {
    id: 15,
    name: "Collar Candado Corazón & Eslabón Titanio",
    category: "accesorios",
    categoryName: "Accesorios",
    price: 35.00,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
    description: "Cadena de eslabón cubano macizo con dije funcional de candado en forma de corazón grabado en acero inoxidable y titanio.",
    badge: "【 南京錠 // HEART_PADLOCK 】"
  },
  {
    id: 16,
    name: "Cinturón Táctico Roller Buckle & D-Ring",
    category: "accesorios",
    categoryName: "Accesorios",
    price: 29.00,
    originalPrice: 38.00,
    image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=800&q=80",
    description: "Cinturón de poliamida militar de alta densidad con hebilla de rodillo industrial en aleación de zinc y anilla D-ring para mosquetones.",
    badge: "【 戦術 // ROLLER_BELT 】"
  },
  {
    id: 17,
    name: "Set de Anillos Plata Líquida & Zircón Rosa",
    category: "accesorios",
    categoryName: "Accesorios",
    price: 42.00,
    originalPrice: 55.00,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
    description: "Colección de 4 anillos abiertos en relieve de plata fundida con estética cyber grunge y engaste de zircón rosa oscuro facetado.",
    badge: "【 銀 // LIQUID_CHROME 】"
  },
  {
    id: 18,
    name: "Chest Rig Táctico Cyber Harajuku",
    category: "accesorios",
    categoryName: "Accesorios",
    price: 68.00,
    originalPrice: 85.00,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    description: "Bolso arnés de pecho en cordura impermeable con compartimentos técnicos de acceso rápido, correas cruzadas en la espalda y acentos reflectantes.",
    badge: "【 胸部 // CHEST_RIG 】"
  }
];
