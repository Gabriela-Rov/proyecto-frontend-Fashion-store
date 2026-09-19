# Fashion Store // 【 東京・暗黒 】 TOKYO DARK ARCHIVE (Front-End)

Sitio web front-end de comercio electrónico desarrollado con **HTML5 semántico**, **CSS3 moderno** y **JavaScript Vanilla**. Diseñado bajo una estética híbrida de vanguardia inspirada en **Dark E-Girl**, **Cyber Grunge contemporáneo**, **Streetwear alternativo japonés (Harajuku y Jirai Kei)** y **acabados industriales oscuros**.

---

## 🖤 Dirección Visual y Sistema Cromático

- **Paleta de Color (Negro Dominante + Blanco + Acento Rosa):**
  - **Negro Abismo & Grafito (75%+):** `#060709`, `#0B0C10`, `#101217` (Fondos oscuros profundos con textura analógica film grain sutil).
  - **Blanco Frío (15%):** `#FFFFFF`, `#F0F1F5` (Tipografía principal de alto contraste y botones destacados).
  - **Rosa Cibernético / Toxic Rose (10%):** `#FF2A7A` (Acento e-girl para badges de archivo, contadores de carrito, bordes activos y detalles de lookbook).
- **Influencia Japonesa & E-Girl:**
  - Microtexto bilingüe y kanji técnico: `【 東京 // TOKYO ARCHIVE 】`, `【 暗黒 // DARK SYSTEM 】`, `【 地雷系 // JIRAI 】`.
  - Iconografía y motivos: Cadenas desmontables, ojales metálicos (grommets), candados de corazón, alfileres de gancho (safety pins) y códigos de barra reflectantes.
- **Tipografía Editorial:**
  - Títulos y cabeceras: `Syne` + `Space Grotesk` con mayúsculas y tracking expandido.
  - Textos de contenido: `Inter` con alta legibilidad y confort visual en modo oscuro.
  - Metadatos técnicos y códigos: `JetBrains Mono`.

---

## 🌟 Funcionalidades Preservadas al 100%

1. **Banner Hero Harajuku & Avisos:**
   - Cabecera monumental con coordenadas de Tokio `[35.6895° N, 139.6917° E]` y títulos bilingües.
   - Tira de cuadrantes técnicos: Logística Global, Pago Seguro, Garantía Archive y Soporte 24/7.
   - Banner con cupón interactivo copiable (`FASHION30` para 30% OFF).

2. **Navegación & Buscador en Tiempo Real:**
   - Ticker bilingüe continuo con anuncios.
   - Logotipo con kanji `【 暗黒 】` y corte en rosa neón.
   - Buscador en tiempo real `[ 検索 / BUSCAR EN ARCHIVO... ]`.
   - Menú móvil desplegable oscuro con acentos rosa e-girl.

3. **Catálogo de 18 Prendas y Accesorios Auténticos:**
   - **Mujer (Dark E-Girl / Jirai Kei):** Faldas plisadas con cadenas y grommets, tops cyber mesh con arneses, hoodies acid-wash oversize, blazers asimétricos, vestidos góticos drapeados y maxi trench techwear.
   - **Hombre (Dark Techwear / E-Boy):** Pantalones cargo multi-strap con barcode, chaquetas de cuero raw con pins, camisas boxy Harajuku, suéteres calados distressed, kimonos noragi tácticos y bombers MA-1.
   - **Accesorios (Hardware / Platform / Chrome):** Botas gothic platform track 6cm, gafas blade cyber visor, collares candado corazón titanio, cinturones roller buckle, anillos de plata líquida con zircón y chest rigs de pecho.
   - Botón minimalista de compra `[ + AGREGAR AL CARRITO ]`.

4. **Carrito Desplegable (Archive Bag):**
   - Panel lateral oscuro con marco de acero y detalles en rosa cibernético.
   - Barra de progreso para **Envío Gratis** (compras mayores a $50.00 USD).
   - Steppers numéricos de cantidad `[-] 01 [+]`.
   - **Vaciado directo al pulsar "[ VACIAR SELECCIÓN ]"** (sin confirmaciones innecesarias).
   - Cálculos en tiempo real de Subtotal, Descuento, Envío y Total.
   - Persistencia completa en `localStorage`.

5. **Modal de Checkout con Validación Estricta:**
   - **Teléfono:** Solo permite números (bloqueo en tiempo real de letras).
   - **Nombre:** Solo permite letras y espacios (bloqueo en tiempo real de números).
   - **Correo y Dirección:** Validación estricta con alertas visuales.
   - Generación de comprobante de orden `#FS-XXXXX`.

---

## 📁 Estructura de Archivos

```
proyecto-frontend-Fashion-store/
├── index.html          # Estructura semántica HTML5 (Dark E-Girl & Tokyo Style)
├── README.md           # Documentación del proyecto
├── css/
│   └── style.css       # Hoja de estilos (Negro dominante, Blanco y Rosa cibernético)
└── js/
    ├── products.js     # Catálogo de 18 piezas Dark E-Girl & Harajuku Streetwear
    └── app.js          # Lógica interactiva de catálogo, filtros y carrito
```

---

## 🚀 Cómo Ejecutar

1. **Opción 1:** Abrir directamente el archivo `index.html` en el navegador.
2. **Opción 2 (Servidor Local WAMP):**
   ```
   http://localhost/proyecto-frontend-Fashion-store/
   ```
