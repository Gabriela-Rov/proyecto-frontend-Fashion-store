// Dataset del Catálogo de Fashion Store
// Categorías: 'mujer', 'hombre', 'accesorios'
// Mínimo 12 productos requeridos (contiene 18 productos premium)

const PRODUCTS = [
  // --- CATEGORÍA: MUJER ---
  {
    id: 1,
    name: "Vestido Midi Floral Satinado",
    category: "mujer",
    categoryName: "Mujer",
    price: 64.99,
    originalPrice: 89.99,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=600&q=80",
    description: "Vestido elegante de tela satinada con estampado floral suave y caída natural.",
    badge: "Oferta"
  },
  {
    id: 2,
    name: "Blazer Rosa Pastel Chic",
    category: "mujer",
    categoryName: "Mujer",
    price: 79.50,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&q=80",
    description: "Blazer estructurado de corte moderno, solapas amplias y forro interior suave.",
    badge: "Nuevo"
  },
  {
    id: 3,
    name: "Top Asimétrico Negro Ébano",
    category: "mujer",
    categoryName: "Mujer",
    price: 32.00,
    originalPrice: 45.00,
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80",
    description: "Top minimalista de corte asimétrico en tejido elástico transpirable de alta densidad.",
    badge: "Popular"
  },
  {
    id: 4,
    name: "Falda Plisada Rosa Perla",
    category: "mujer",
    categoryName: "Mujer",
    price: 48.00,
    originalPrice: 60.00,
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=600&q=80",
    description: "Falda midi con pliegues definidos y cinturilla elástica de acabado brillante.",
    badge: null
  },
  {
    id: 5,
    name: "Trench Coat Elegance Beige",
    category: "mujer",
    categoryName: "Mujer",
    price: 119.00,
    originalPrice: 149.00,
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80",
    description: "Gabardina clásica con cinturón ajustable, solapa cruzada y botones marmolados.",
    badge: "Exclusivo"
  },
  {
    id: 6,
    name: "Conjunto Urbano Romántico",
    category: "mujer",
    categoryName: "Mujer",
    price: 85.00,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=600&q=80",
    description: "Dos piezas en tonalidad pastel ideal para eventos de día o salidas especiales.",
    badge: "Tendencia"
  },

  // --- CATEGORÍA: HOMBRE ---
  {
    id: 7,
    name: "Chaqueta Biker de Cuero Negro",
    category: "hombre",
    categoryName: "Hombre",
    price: 129.99,
    originalPrice: 169.99,
    image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=600&q=80",
    description: "Chaqueta de cuero sintético premium con cierres metálicos plateados y forro térmico.",
    badge: "Top Ventas"
  },
  {
    id: 8,
    name: "Camisa Casual Lino Blanco",
    category: "hombre",
    categoryName: "Hombre",
    price: 44.50,
    originalPrice: 55.00,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=600&q=80",
    description: "Camisa de lino 100% puro, fresca, cuello mao y corte regular fit sumamente cómodo.",
    badge: null
  },
  {
    id: 9,
    name: "Blazer Slim Fit Noir",
    category: "hombre",
    categoryName: "Hombre",
    price: 99.00,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80",
    description: "Saco de vestir entallado de diseño contemporáneo para ocasiones formales.",
    badge: "Elegante"
  },
  {
    id: 10,
    name: "Suéter Casual Tejido Soft",
    category: "hombre",
    categoryName: "Hombre",
    price: 52.00,
    originalPrice: 65.00,
    image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=600&q=80",
    description: "Jersey de punto suave con cuello redondo en tonalidad neutra y textura abrigadora.",
    badge: null
  },
  {
    id: 11,
    name: "Pantalón Chino Moderno",
    category: "hombre",
    categoryName: "Hombre",
    price: 49.99,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=600&q=80",
    description: "Pantalón de gabardina de algodón elástico, versátil para oficina y fin de semana.",
    badge: "Básico"
  },
  {
    id: 12,
    name: "Chaqueta Bomber Minimalista",
    category: "hombre",
    categoryName: "Hombre",
    price: 89.90,
    originalPrice: 110.00,
    image: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=600&q=80",
    description: "Cazadora bomber impermeable con puños acanalados y bolsillos laterales discretos.",
    badge: "Nuevo"
  },

  // --- CATEGORÍA: ACCESORIOS ---
  {
    id: 13,
    name: "Bolso Tote Rose Quartz",
    category: "accesorios",
    categoryName: "Accesorios",
    price: 59.99,
    originalPrice: 75.00,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80",
    description: "Bolso espacioso en tono rosa suave con detalles dorados y compartimentos organizadores.",
    badge: "Favorito"
  },
  {
    id: 14,
    name: "Gafas de Sol Vintage Black",
    category: "accesorios",
    categoryName: "Accesorios",
    price: 28.50,
    originalPrice: 38.00,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80",
    description: "Montura oscura geométrica con cristales polarizados y protección UV400 total.",
    badge: null
  },
  {
    id: 15,
    name: "Reloj Minimal Rose Gold",
    category: "accesorios",
    categoryName: "Accesorios",
    price: 94.00,
    originalPrice: 120.00,
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=600&q=80",
    description: "Reloj análogo con caja en tono oro rosado, correa de malla milanesa y mecanismo de cuarzo.",
    badge: "Premium"
  },
  {
    id: 16,
    name: "Collar Layering Dorado",
    category: "accesorios",
    categoryName: "Accesorios",
    price: 24.99,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80",
    description: "Cadena múltiple de baño de oro de 18k con dije circular y acabado brillante hipoalergénico.",
    badge: "Nuevo"
  },
  {
    id: 17,
    name: "Cinturón de Cuero con Hebilla Oro",
    category: "accesorios",
    categoryName: "Accesorios",
    price: 22.00,
    originalPrice: 30.00,
    image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=600&q=80",
    description: "Cinturón de cuero genuino negro con hebilla ovalada dorada para un ajuste perfecto.",
    badge: null
  },
  {
    id: 18,
    name: "Billetera Compacta Glam Rose",
    category: "accesorios",
    categoryName: "Accesorios",
    price: 34.50,
    originalPrice: 42.00,
    image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=600&q=80",
    description: "Monedero y tarjetero compacto de textura saffiano con cierre de cremallera metálica.",
    badge: "Oferta"
  }
];

