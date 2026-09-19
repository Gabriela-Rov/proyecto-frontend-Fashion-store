# Fashion Store 🛍️ - Tienda Online de Ropa y Accesorios (Front-End)

Sitio web front-end de comercio electrónico desarrollado con **HTML5**, **CSS3** y **JavaScript Vanilla**. Diseñado con una paleta elegante en **negro, blanco y rosita chic**, 100% responsivo para computadoras, tablets y celulares.

---

## 🌟 Características Principales

1. **Banner Promocional & Hero:**
   - Sección principal con tipografía sofisticada (*Playfair Display* & *Poppins*).
   - Llamadas a la acción directas para explorar el catálogo y ver ofertas.
   - Cupón interactivo con botón de copiado directo (`FASHION30` para 30% OFF).
   - Tira de beneficios destacados: Envío gratis, pago seguro, devoluciones fáciles y soporte 24/7.

2. **Menú de Navegación & Buscador:**
   - Barra superior con promociones y anuncios.
   - Logo de marca estilizado con detalles en rosita.
   - Buscador en tiempo real integrado tanto en versión escritorio como en versión móvil.
   - Enlaces de filtrado directo por categorías: **Hombre**, **Mujer**, **Accesorios**.
   - Menú lateral deslizante (Hamburguesa) para dispositivos móviles.

3. **Catálogo de Productos Dinámico (18 productos):**
   - 18 productos organizados en 3 categorías (6 en Mujer, 6 en Hombre, 6 en Accesorios).
   - Cada tarjeta muestra:
     - Fotografía de alta resolución con efecto zoom al pasar el cursor.
     - Badge de estado (*Nuevo*, *Oferta*, *Top Ventas*, *Exclusivo*).
     - Etiqueta de categoría.
     - Nombre del artículo.
     - Descripción breve y atractiva.
     - Precio actual (y precio anterior tachado si tiene descuento).
     - Botón **"Agregar al carrito"** con animación de confirmación inmediata.

4. **Buscador & Filtros en Tiempo Real:**
   - Filtro por categorías con contadores dinámicos.
   - Buscador instantáneo que filtra por nombre, descripción o categoría al escribir.
   - Ordenamiento por: Recomendados, Menor precio, Mayor precio y Alfabético (A-Z).
   - Estado de búsqueda vacía con botón para restablecer filtros.

5. **Carrito de Compras Completo (Drawer Lateral / Offcanvas):**
   - Barra de progreso interactiva para **Envío Gratis** (compras mayores a $50).
   - Visualización de cada producto seleccionado con miniatura, nombre y precio unitario.
   - Controles de cantidad (**+** y **-**) que recalculan subtotales al instante.
   - Botón individual para eliminar productos (icono de papelera).
   - Cálculo en tiempo real de: **Subtotal**, **Descuento**, **Envío** y **Total**.
   - Caja para aplicar cupón de descuento (`FASHION30`).
   - Botón para vaciar todo el carrito con confirmación.
   - Persistencia de datos en **`localStorage`** (el carrito no se pierde al recargar la página).

6. **Checkout Simulado:**
   - Modal para ingresar datos de envío y confirmar pedido.
   - Generador automático de número de orden `#FS-XXXXX` y confirmación visual de compra.

7. **Diseño Responsive:**
   - Adaptado para monitores grandes, laptops, tablets y smartphones.

---

## 🎨 Paleta de Colores
- **Negro Primario:** `#111111` / `#1e1e1e` (Elegancia y sobriedad).
- **Blanco Puro y Fondos Suaves:** `#ffffff` / `#faf8f9`.
- **Acentos Rosita Chic:** `#e85d88`, `#fdeef3`, `#fad2e1` (Badges, botones, acentos de carrito y precios).

---

## 🚀 Cómo Ejecutar el Proyecto

No requiere dependencias ni servidores complejos:
1. **Opción 1 (Directo):** Haz doble clic en el archivo `index.html` para abrirlo en cualquier navegador (Chrome, Edge, Firefox, etc.).
2. **Opción 2 (Servidor Local WAMP):** Accede mediante tu navegador a:
   ```
   http://localhost/proyecto-frontend-Fashion-store/
   ```

---

## 📁 Estructura de Archivos

```
proyecto-frontend-Fashion-store/
├── index.html          # Estructura semántica HTML5
├── style.css           # Estilos CSS3, variables y diseño responsive
├── README.md           # Documentación del proyecto
└── js/
    ├── products.js     # Base de datos de productos (18 prendas y accesorios)
    └── app.js          # Lógica del catálogo, filtros, buscador y carrito
```
