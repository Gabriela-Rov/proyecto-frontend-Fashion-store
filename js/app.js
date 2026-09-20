/**
 * FASHION STORE - LÓGICA PRINCIPAL (JAVASCRIPT)
 * Catálogo interactivo, buscador, filtros por categoría,
 * carrito de compras con persistencia y responsive UI.
 */

// ==========================================
// 1. ESTADO DE LA APLICACIÓN
// ==========================================
const AppState = {
    products: typeof PRODUCTS !== 'undefined' ? PRODUCTS : [],
    filteredProducts: [],
    currentCategory: 'todos',
    searchQuery: '',
    currentSort: 'default',
    cart: JSON.parse(localStorage.getItem('fashion_store_cart')) || [],
    discountRate: 0,
    appliedCoupon: null,
    freeShippingThreshold: 50.00,
    standardShippingCost: 5.00
};

const USD_TO_MXN = 18;
const currencyFormatter = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 2
});

function formatCurrency(usdAmount) {
    return currencyFormatter.format(usdAmount * USD_TO_MXN);
}

// ==========================================
// 2. REFERENCIAS AL DOM
// ==========================================
const DOM = {
    // Header & Navegación
    menuToggleBtn: document.getElementById('menuToggleBtn'),
    closeNavBtn: document.getElementById('closeNavBtn'),
    mainNav: document.getElementById('mainNav'),
    navLinks: document.querySelectorAll('.nav-link'),
    headerSearchInput: document.getElementById('headerSearchInput'),
    mobileSearchInput: document.getElementById('mobileSearchInput'),
    clearSearchBtn: document.getElementById('clearSearchBtn'),
    cartTriggerBtn: document.getElementById('cartTriggerBtn'),
    cartBadgeCount: document.getElementById('cartBadgeCount'),

    // Catálogo y Filtros
    productsGrid: document.getElementById('productsGrid'),
    noProductsFound: document.getElementById('noProductsFound'),
    filterBtns: document.querySelectorAll('.filter-btn'),
    sortSelect: document.getElementById('sortSelect'),
    resultsCountText: document.getElementById('resultsCountText'),
    activeFilterBadge: document.getElementById('activeFilterBadge'),
    filterBadgeLabel: document.getElementById('filterBadgeLabel'),
    clearFiltersBtn: document.getElementById('clearFiltersBtn'),
    btnResetSearch: document.getElementById('btnResetSearch'),

    // Contadores por categoría
    countTodos: document.getElementById('countTodos'),
    countMujer: document.getElementById('countMujer'),
    countHombre: document.getElementById('countHombre'),
    countAccesorios: document.getElementById('countAccesorios'),

    // Carrito Drawer
    cartDrawer: document.getElementById('cartDrawer'),
    cartOverlay: document.getElementById('cartOverlay'),
    closeCartBtn: document.getElementById('closeCartBtn'),
    drawerCartBadge: document.getElementById('drawerCartBadge'),
    cartItemsContainer: document.getElementById('cartItemsContainer'),
    cartEmptyState: document.getElementById('cartEmptyState'),
    cartFooter: document.getElementById('cartFooter'),
    freeShippingText: document.getElementById('freeShippingText'),
    shippingProgressFill: document.getElementById('shippingProgressFill'),

    // Carrito Resumen
    cartSubtotal: document.getElementById('cartSubtotal'),
    discountRow: document.getElementById('discountRow'),
    discountPercent: document.getElementById('discountPercent'),
    cartDiscount: document.getElementById('cartDiscount'),
    cartShipping: document.getElementById('cartShipping'),
    cartTotal: document.getElementById('cartTotal'),
    couponInput: document.getElementById('couponInput'),
    applyCouponBtn: document.getElementById('applyCouponBtn'),
    couponMessage: document.getElementById('couponMessage'),
    btnCheckout: document.getElementById('btnCheckout'),
    btnClearCart: document.getElementById('btnClearCart'),
    btnGoShop: document.getElementById('btnGoShop'),

    // Promociones & Copiar cupón
    btnCopyCode: document.getElementById('btnCopyCode'),
    copyBtnText: document.getElementById('copyBtnText'),

    // Modal Checkout
    checkoutModalOverlay: document.getElementById('checkoutModalOverlay'),
    closeModalBtn: document.getElementById('closeModalBtn'),
    checkoutFormStep: document.getElementById('checkoutFormStep'),
    checkoutSuccessStep: document.getElementById('checkoutSuccessStep'),
    checkoutForm: document.getElementById('checkoutForm'),
    previewItemsCount: document.getElementById('previewItemsCount'),
    previewTotalAmount: document.getElementById('previewTotalAmount'),
    orderNumberCode: document.getElementById('orderNumberCode'),
    confirmedCustomerName: document.getElementById('confirmedCustomerName'),
    confirmedOrderTotal: document.getElementById('confirmedOrderTotal'),
    btnContinueShopping: document.getElementById('btnContinueShopping'),

    // Toast Container
    toastContainer: document.getElementById('toastContainer')
};

// ==========================================
// 3. INICIALIZACIÓN
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    updateCategoryBadges();
    applyFiltersAndSort();
    updateCartUI();
    initEventListeners();
});

// ==========================================
// 4. GESTIÓN DEL CATÁLOGO (FILTROS Y BÚSQUEDA)
// ==========================================

/**
 * Actualiza los números en los botones de filtro
 */
function updateCategoryBadges() {
    const total = AppState.products.length;
    const mujer = AppState.products.filter(p => p.category === 'mujer').length;
    const hombre = AppState.products.filter(p => p.category === 'hombre').length;
    const accesorios = AppState.products.filter(p => p.category === 'accesorios').length;

    if (DOM.countTodos) DOM.countTodos.textContent = total;
    if (DOM.countMujer) DOM.countMujer.textContent = mujer;
    if (DOM.countHombre) DOM.countHombre.textContent = hombre;
    if (DOM.countAccesorios) DOM.countAccesorios.textContent = accesorios;
}

/**
 * Filtra y ordena los productos según la selección actual
 */
function applyFiltersAndSort() {
    let result = [...AppState.products];

    // 1. Filtrado por categoría
    if (AppState.currentCategory !== 'todos') {
        result = result.filter(item => item.category.toLowerCase() === AppState.currentCategory.toLowerCase());
    }

    // 2. Filtrado por término de búsqueda
    if (AppState.searchQuery.trim() !== '') {
        const query = AppState.searchQuery.toLowerCase().trim();
        result = result.filter(item => 
            item.name.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query) ||
            item.categoryName.toLowerCase().includes(query)
        );
    }

    // 3. Ordenamiento
    switch (AppState.currentSort) {
        case 'price-asc':
            result.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            result.sort((a, b) => b.price - a.price);
            break;
        case 'name-asc':
            result.sort((a, b) => a.name.localeCompare(b.name));
            break;
        default:
            // Orden original por id
            result.sort((a, b) => a.id - b.id);
            break;
    }

    AppState.filteredProducts = result;
    renderCatalog();
}

/**
 * Renderiza las tarjetas de producto en el Grid
 */
function renderCatalog() {
    const { filteredProducts } = AppState;

    // Actualizar indicador de cantidad
    const count = filteredProducts.length;
    DOM.resultsCountText.textContent = `Mostrando ${count} ${count === 1 ? 'producto' : 'productos'}`;
    const resultsLine = document.getElementById('resultsLine');
    resultsLine.classList.toggle('search-active', AppState.searchQuery.trim() !== '');
    DOM.productsGrid.classList.toggle('search-results-active', AppState.searchQuery.trim() !== '');

    // Actualizar badge de filtro activo
    if (AppState.currentCategory !== 'todos' || AppState.searchQuery !== '') {
        DOM.activeFilterBadge.style.display = 'inline-flex';
        let label = '';
        if (AppState.currentCategory !== 'todos') {
            label += `Categoría: ${AppState.currentCategory.toUpperCase()}`;
        }
        if (AppState.searchQuery !== '') {
            label += (label ? ' | ' : '') + `Búsqueda: "${AppState.searchQuery}"`;
        }
        DOM.filterBadgeLabel.textContent = label;
    } else {
        DOM.activeFilterBadge.style.display = 'none';
    }

    // Si no hay resultados
    if (count === 0) {
        DOM.productsGrid.innerHTML = '';
        DOM.noProductsFound.style.display = 'block';
        return;
    }

    DOM.noProductsFound.style.display = 'none';

    // Generar HTML de cada producto
    DOM.productsGrid.innerHTML = filteredProducts.map(product => {
        const hasDiscount = product.originalPrice && product.originalPrice > product.price;
        
        return `
            <article class="product-card" data-id="${product.id}">
                <div class="product-image-wrap">
                    <img 
                        src="${product.image}" 
                        alt="${product.name}" 
                        loading="lazy"
                        onerror="this.src='https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80'"
                    >
                    ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                    <span class="category-tag">${product.categoryName}</span>
                </div>

                <div class="product-info">
                    <div class="product-info-top">
                        <span class="product-ref-id">SYS_ID_${String(product.id).padStart(2, '0')}</span>
                        <h3 class="product-title" title="${product.name}">${product.name}</h3>
                    </div>
                    <p class="product-desc">${product.description}</p>
                    
                    <div class="product-pricing">
                        <span class="product-price">${formatCurrency(product.price)} <span class="currency-tag">MXN</span></span>
                        ${hasDiscount ? `<span class="product-old-price">${formatCurrency(product.originalPrice)} MXN</span>` : ''}
                    </div>

                    <button class="btn-add-cart" onclick="handleAddToCart(${product.id}, this)">
                        + AGREGAR AL CARRITO
                    </button>
                </div>
            </article>
        `;
    }).join('');
}

// ==========================================
// 5. GESTIÓN DEL CARRITO DE COMPRAS
// ==========================================

/**
 * Agrega un producto al carrito
 */
window.handleAddToCart = function(productId, btnElement = null) {
    const product = AppState.products.find(p => p.id === productId);
    if (!product) return;

    const existingIndex = AppState.cart.findIndex(item => item.id === productId);

    if (existingIndex > -1) {
        AppState.cart[existingIndex].quantity += 1;
    } else {
        AppState.cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            categoryName: product.categoryName,
            quantity: 1
        });
    }

    saveCart();
    updateCartUI();

    // Animación de feedback temporal en el botón
    if (btnElement) {
        const originalHtml = btnElement.innerHTML;
        btnElement.classList.add('added-feedback');
        btnElement.innerHTML = `<i class="fa-solid fa-check"></i> [ AGREGADO ]`;
        setTimeout(() => {
            btnElement.classList.remove('added-feedback');
            btnElement.innerHTML = originalHtml;
        }, 1200);
    }

    // Notificación Toast
    showToast(`"${product.name}" archivado en el carrito`, 'fa-solid fa-bag-shopping');
};

/**
 * Modifica la cantidad de un artículo (+ / -)
 */
window.updateCartQuantity = function(productId, delta) {
    const itemIndex = AppState.cart.findIndex(item => item.id === productId);
    if (itemIndex === -1) return;

    const newQty = AppState.cart[itemIndex].quantity + delta;

    if (newQty <= 0) {
        window.removeFromCart(productId);
    } else {
        AppState.cart[itemIndex].quantity = newQty;
        saveCart();
        updateCartUI();
    }
};

/**
 * Elimina un producto del carrito
 */
window.removeFromCart = function(productId) {
    const item = AppState.cart.find(i => i.id === productId);
    const itemName = item ? item.name : 'Producto';

    AppState.cart = AppState.cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();

    showToast(`"${itemName}" eliminado del carrito`, 'fa-solid fa-trash-can');
};

/**
 * Vacía por completo el carrito de compras directamente al hacer clic
 */
function clearEntireCart() {
    if (AppState.cart.length === 0) return;

    AppState.cart = [];
    saveCart();
    updateCartUI();
    showToast('El carrito ha sido vaciado', 'fa-solid fa-trash');
}

/**
 * Guarda el carrito en el LocalStorage
 */
function saveCart() {
    localStorage.setItem('fashion_store_cart', JSON.stringify(AppState.cart));
}

/**
 * Actualiza la interfaz del carrito (Drawer, Contadores, Totales)
 */
function updateCartUI() {
    const totalItems = AppState.cart.reduce((sum, item) => sum + item.quantity, 0);

    // Actualizar badges
    DOM.cartBadgeCount.textContent = totalItems;
    DOM.drawerCartBadge.textContent = `${totalItems} ${totalItems === 1 ? 'ítem' : 'ítems'}`;

    // Efecto de pulso en el badge cuando cambia
    DOM.cartBadgeCount.classList.remove('badge-pulse');
    void DOM.cartBadgeCount.offsetWidth; // re-trigger reflow
    DOM.cartBadgeCount.classList.add('badge-pulse');

    // Manejar carrito vacío vs con productos
    if (AppState.cart.length === 0) {
        DOM.cartItemsContainer.innerHTML = '';
        DOM.cartItemsContainer.style.display = 'none';
        DOM.cartEmptyState.style.display = 'flex';
        DOM.cartFooter.style.display = 'none';
        
        // Reset de tracker de envío gratis
        DOM.freeShippingText.innerHTML = `Agrega <strong>${formatCurrency(AppState.freeShippingThreshold)}</strong> más para obtener <strong>Envío Gratis</strong>`;
        DOM.shippingProgressFill.style.width = '0%';
        return;
    }

    DOM.cartItemsContainer.style.display = 'flex';
    DOM.cartEmptyState.style.display = 'none';
    DOM.cartFooter.style.display = 'block';

    // Renderizar artículos
    DOM.cartItemsContainer.innerHTML = AppState.cart.map(item => {
        const itemSubtotal = item.price * item.quantity;
        return `
            <div class="cart-item" data-id="${item.id}">
                <div class="cart-item-img">
                    <img src="${item.image}" alt="${item.name}">
                </div>

                <div class="cart-item-details">
                    <h4 class="cart-item-title">${item.name}</h4>
                    <span class="cart-item-unit-price">${formatCurrency(item.price)} c/u</span>

                    <div class="cart-item-bottom">
                        <div class="quantity-controls">
                            <button class="qty-btn" onclick="updateCartQuantity(${item.id}, -1)" title="Reducir">
                                −
                            </button>
                            <span class="qty-val">${item.quantity}</span>
                            <button class="qty-btn" onclick="updateCartQuantity(${item.id}, 1)" title="Aumentar">
                                +
                            </button>
                        </div>
                        <span class="cart-item-subtotal">${formatCurrency(itemSubtotal)}</span>
                    </div>
                </div>

                <button class="btn-remove-item" onclick="removeFromCart(${item.id})" title="Eliminar producto">
                    <i class="fa-regular fa-trash-can"></i>
                </button>
            </div>
        `;
    }).join('');

    // Cálculos de montos
    const subtotal = AppState.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const discountAmount = subtotal * AppState.discountRate;
    
    // Envío: Gratis si supera el umbral ($50)
    let shippingCost = 0;
    if (subtotal < AppState.freeShippingThreshold) {
        shippingCost = AppState.standardShippingCost;
        const missingForFree = AppState.freeShippingThreshold - subtotal;
        DOM.freeShippingText.innerHTML = `Agrega <strong>${formatCurrency(missingForFree)}</strong> más para obtener <strong>Envío Gratis</strong>`;
        const percentage = Math.min(100, Math.round((subtotal / AppState.freeShippingThreshold) * 100));
        DOM.shippingProgressFill.style.width = `${percentage}%`;
    } else {
        DOM.freeShippingText.innerHTML = `¡Felicidades! 🎉 Calificas para <strong>Envío Gratis</strong>`;
        DOM.shippingProgressFill.style.width = `100%`;
    }

    const total = Math.max(0, (subtotal - discountAmount) + shippingCost);

    // Actualizar textos en el DOM
    DOM.cartSubtotal.textContent = formatCurrency(subtotal);
    
    if (AppState.discountRate > 0) {
        DOM.discountRow.style.display = 'flex';
        DOM.discountPercent.textContent = `${Math.round(AppState.discountRate * 100)}%`;
        DOM.cartDiscount.textContent = `-${formatCurrency(discountAmount)}`;
    } else {
        DOM.discountRow.style.display = 'none';
    }

    DOM.cartShipping.textContent = shippingCost === 0 ? 'Gratis' : formatCurrency(shippingCost);
    DOM.cartTotal.textContent = formatCurrency(total);
}

/**
 * Aplicar código de cupón
 */
function handleApplyCoupon() {
    const code = DOM.couponInput.value.trim().toUpperCase();

    if (!code) {
        showCouponFeedback('Por favor ingresa un código de descuento.', 'error');
        return;
    }

    if (code === 'FASHION30') {
        AppState.discountRate = 0.30;
        AppState.appliedCoupon = 'FASHION30';
        showCouponFeedback('¡Cupón del 30% OFF aplicado con éxito!', 'success');
        updateCartUI();
        showToast('Cupón FASHION30 activado', 'fa-solid fa-ticket');
    } else {
        showCouponFeedback('Cupón no válido. Prueba usando FASHION30.', 'error');
    }
}

function showCouponFeedback(msg, type) {
    DOM.couponMessage.textContent = msg;
    DOM.couponMessage.className = `coupon-feedback ${type}`;
}

function revealSearchResults() {
    const catalogSection = document.getElementById('catalogo');
    if (!catalogSection || catalogSection.getBoundingClientRect().top <= window.innerHeight * 0.35) return;

    catalogSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ==========================================
// 6. CONTROL DEL DRAWER Y MODALES
// ==========================================

function openCart() {
    DOM.cartDrawer.classList.add('active');
    DOM.cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    DOM.cartDrawer.classList.remove('active');
    DOM.cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

function openMobileNav() {
    DOM.mainNav.classList.add('active');
    DOM.cartOverlay.classList.add('active');
}

function closeMobileNav() {
    DOM.mainNav.classList.remove('active');
    DOM.cartOverlay.classList.remove('active');
}

function openCheckoutModal() {
    if (AppState.cart.length === 0) {
        showToast('Agrega productos al carrito primero', 'fa-solid fa-triangle-exclamation');
        return;
    }

    closeCart();

    // Actualizar vista previa
    const totalItems = AppState.cart.reduce((sum, item) => sum + item.quantity, 0);
    DOM.previewItemsCount.textContent = `${totalItems} productos`;
    DOM.previewTotalAmount.textContent = DOM.cartTotal.textContent;

    // Resetear formulario y pasos
    DOM.checkoutFormStep.style.display = 'block';
    DOM.checkoutSuccessStep.style.display = 'none';
    DOM.checkoutForm.reset();
    clearAllCheckoutErrors();

    DOM.checkoutModalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCheckoutModal() {
    DOM.checkoutModalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

function setFieldError(inputId, errorId, message) {
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);
    if (input) input.classList.add('input-error');
    if (error) error.textContent = message;
}

function clearFieldError(inputId, errorId) {
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);
    if (input) input.classList.remove('input-error');
    if (error) error.textContent = '';
}

function clearAllCheckoutErrors() {
    ['customerName', 'customerEmail', 'customerPhone', 'customerAddress'].forEach(id => {
        const input = document.getElementById(id);
        if (input) input.classList.remove('input-error');
    });
    ['errorCustomerName', 'errorCustomerEmail', 'errorCustomerPhone', 'errorCustomerAddress'].forEach(id => {
        const error = document.getElementById(id);
        if (error) error.textContent = '';
    });
}

/**
 * Envío simulado del pedido con validación estricta
 */
function handleCheckoutSubmit(e) {
    e.preventDefault();

    const nameInput = document.getElementById('customerName');
    const emailInput = document.getElementById('customerEmail');
    const phoneInput = document.getElementById('customerPhone');
    const addressInput = document.getElementById('customerAddress');

    const nameVal = nameInput ? nameInput.value.trim() : '';
    const emailVal = emailInput ? emailInput.value.trim() : '';
    const phoneVal = phoneInput ? phoneInput.value.trim() : '';
    const addressVal = addressInput ? addressInput.value.trim() : '';

    let isValid = true;
    let firstInvalidInput = null;

    // 1. Validar Nombre: solo letras y espacios, mínimo 3 caracteres
    const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]{3,}$/;
    if (!nameVal || !nameRegex.test(nameVal)) {
        setFieldError('customerName', 'errorCustomerName', 'Ingresa tu nombre completo (solo letras, mínimo 3 caracteres).');
        isValid = false;
        if (!firstInvalidInput) firstInvalidInput = nameInput;
    } else {
        clearFieldError('customerName', 'errorCustomerName');
    }

    // 2. Validar Correo Electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailVal || !emailRegex.test(emailVal)) {
        setFieldError('customerEmail', 'errorCustomerEmail', 'Ingresa un correo electrónico válido (ej: usuario@correo.com).');
        isValid = false;
        if (!firstInvalidInput) firstInvalidInput = emailInput;
    } else {
        clearFieldError('customerEmail', 'errorCustomerEmail');
    }

    // 3. Validar Teléfono: estrictamente solo números, 10 dígitos estándar
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneVal || !phoneRegex.test(phoneVal)) {
        setFieldError('customerPhone', 'errorCustomerPhone', 'Ingresa un número telefónico de 10 dígitos (solo números).');
        isValid = false;
        if (!firstInvalidInput) firstInvalidInput = phoneInput;
    } else {
        clearFieldError('customerPhone', 'errorCustomerPhone');
    }

    // 4. Validar Dirección
    if (!addressVal || addressVal.length < 6) {
        setFieldError('customerAddress', 'errorCustomerAddress', 'Ingresa tu dirección completa de entrega (mínimo 6 caracteres).');
        isValid = false;
        if (!firstInvalidInput) firstInvalidInput = addressInput;
    } else {
        clearFieldError('customerAddress', 'errorCustomerAddress');
    }

    if (!isValid) {
        if (firstInvalidInput) firstInvalidInput.focus();
        return;
    }

    const finalTotal = DOM.cartTotal.textContent;

    // Generar código aleatorio de orden
    const randomOrder = 'FS-' + Math.floor(10000 + Math.random() * 90000);

    DOM.orderNumberCode.textContent = `#${randomOrder}`;
    DOM.confirmedCustomerName.textContent = nameVal;
    DOM.confirmedOrderTotal.textContent = finalTotal;

    // Cambiar a vista de éxito
    DOM.checkoutFormStep.style.display = 'none';
    DOM.checkoutSuccessStep.style.display = 'block';

    // Vaciar carrito
    AppState.cart = [];
    saveCart();
    updateCartUI();

    showToast('¡Pedido completado con éxito!', 'fa-solid fa-circle-check');
}

// ==========================================
// 7. TOAST NOTIFICATIONS & UTILIDADES
// ==========================================

function showToast(message, iconClass = 'fa-solid fa-info') {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <i class="${iconClass}"></i>
        <span>${message}</span>
    `;

    DOM.toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'toastFadeOut 0.35s ease forwards';
        setTimeout(() => toast.remove(), 350);
    }, 2800);
}

// ==========================================
// 8. EVENT LISTENERS
// ==========================================
function initEventListeners() {
    // Abrir/Cerrar Carrito
    DOM.cartTriggerBtn.addEventListener('click', openCart);
    DOM.closeCartBtn.addEventListener('click', closeCart);
    DOM.btnGoShop.addEventListener('click', () => {
        closeCart();
        const catalogSection = document.getElementById('catalogo');
        if (catalogSection) catalogSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Abrir/Cerrar Menú Móvil
    DOM.menuToggleBtn.addEventListener('click', openMobileNav);
    DOM.closeNavBtn.addEventListener('click', closeMobileNav);

    // Overlay click (cierra carrito y nav móvil)
    DOM.cartOverlay.addEventListener('click', () => {
        closeCart();
        closeMobileNav();
    });

    // Vaciar carrito
    DOM.btnClearCart.addEventListener('click', clearEntireCart);

    // Aplicar cupón
    DOM.applyCouponBtn.addEventListener('click', handleApplyCoupon);
    DOM.couponInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleApplyCoupon();
        }
    });

    // Copiar código promocional de banner
    if (DOM.btnCopyCode) {
        DOM.btnCopyCode.addEventListener('click', () => {
            navigator.clipboard.writeText('FASHION30').then(() => {
                DOM.copyBtnText.textContent = '¡Copiado!';
                DOM.couponInput.value = 'FASHION30';
                showToast('Cupón "FASHION30" copiado al portapapeles', 'fa-regular fa-copy');
                setTimeout(() => {
                    DOM.copyBtnText.textContent = 'Copiar Cupón';
                }, 2000);
            }).catch(() => {
                DOM.couponInput.value = 'FASHION30';
                showToast('Cupón preparado en el carrito', 'fa-solid fa-tag');
            });
        });
    }

    // Modal de Checkout
    DOM.btnCheckout.addEventListener('click', openCheckoutModal);
    DOM.closeModalBtn.addEventListener('click', closeCheckoutModal);
    DOM.checkoutModalOverlay.addEventListener('click', (e) => {
        if (e.target === DOM.checkoutModalOverlay) closeCheckoutModal();
    });
    DOM.checkoutForm.addEventListener('submit', handleCheckoutSubmit);
    DOM.btnContinueShopping.addEventListener('click', closeCheckoutModal);

    // Validación interactiva en campos de checkout
    const inputPhone = document.getElementById('customerPhone');
    if (inputPhone) {
        // Bloquear letras y caracteres que no sean dígitos
        inputPhone.addEventListener('keydown', (e) => {
            const allowedKeys = ['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'Delete', 'Enter', 'Home', 'End'];
            if (allowedKeys.includes(e.key) || e.ctrlKey || e.metaKey) return;
            if (!/^[0-9]$/.test(e.key)) {
                e.preventDefault();
            }
        });
        inputPhone.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D/g, '');
            clearFieldError('customerPhone', 'errorCustomerPhone');
        });
    }

    const inputName = document.getElementById('customerName');
    if (inputName) {
        // Bloquear números y caracteres especiales
        inputName.addEventListener('keydown', (e) => {
            const allowedKeys = ['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'Delete', 'Enter', 'Home', 'End', ' '];
            if (allowedKeys.includes(e.key) || e.ctrlKey || e.metaKey) return;
            if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]$/.test(e.key)) {
                e.preventDefault();
            }
        });
        inputName.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]/g, '');
            clearFieldError('customerName', 'errorCustomerName');
        });
    }

    const inputEmail = document.getElementById('customerEmail');
    if (inputEmail) {
        inputEmail.addEventListener('input', () => {
            clearFieldError('customerEmail', 'errorCustomerEmail');
        });
    }

    const inputAddress = document.getElementById('customerAddress');
    if (inputAddress) {
        inputAddress.addEventListener('input', () => {
            clearFieldError('customerAddress', 'errorCustomerAddress');
        });
    }

    // Buscador en Desktop
    DOM.headerSearchInput.addEventListener('input', (e) => {
        const hadSearchQuery = AppState.searchQuery.trim() !== '';
        AppState.searchQuery = e.target.value;
        if (DOM.mobileSearchInput) DOM.mobileSearchInput.value = e.target.value;
        DOM.clearSearchBtn.style.display = AppState.searchQuery ? 'block' : 'none';
        applyFiltersAndSort();
        if (!hadSearchQuery && AppState.searchQuery.trim() !== '') revealSearchResults();
    });

    // Buscador en Móvil
    if (DOM.mobileSearchInput) {
        DOM.mobileSearchInput.addEventListener('input', (e) => {
            const hadSearchQuery = AppState.searchQuery.trim() !== '';
            AppState.searchQuery = e.target.value;
            DOM.headerSearchInput.value = e.target.value;
            DOM.clearSearchBtn.style.display = AppState.searchQuery ? 'block' : 'none';
            applyFiltersAndSort();
            if (!hadSearchQuery && AppState.searchQuery.trim() !== '') revealSearchResults();
        });
    }

    // Botón Limpiar Búsqueda
    DOM.clearSearchBtn.addEventListener('click', () => {
        AppState.searchQuery = '';
        DOM.headerSearchInput.value = '';
        if (DOM.mobileSearchInput) DOM.mobileSearchInput.value = '';
        DOM.clearSearchBtn.style.display = 'none';
        applyFiltersAndSort();
    });

    // Botón Reset en estado sin productos
    DOM.btnResetSearch.addEventListener('click', () => {
        AppState.searchQuery = '';
        AppState.currentCategory = 'todos';
        DOM.headerSearchInput.value = '';
        if (DOM.mobileSearchInput) DOM.mobileSearchInput.value = '';
        DOM.clearSearchBtn.style.display = 'none';
        
        DOM.filterBtns.forEach(b => b.classList.toggle('active', b.dataset.category === 'todos'));
        applyFiltersAndSort();
    });

    // Restablecer filtros desde el badge
    DOM.clearFiltersBtn.addEventListener('click', () => {
        AppState.currentCategory = 'todos';
        AppState.searchQuery = '';
        DOM.headerSearchInput.value = '';
        if (DOM.mobileSearchInput) DOM.mobileSearchInput.value = '';
        DOM.clearSearchBtn.style.display = 'none';
        DOM.filterBtns.forEach(b => b.classList.toggle('active', b.dataset.category === 'todos'));
        applyFiltersAndSort();
    });

    // Filtros de categoría en catálogo
    DOM.filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            DOM.filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            AppState.currentCategory = btn.dataset.category;
            applyFiltersAndSort();
        });
    });

    // Enlaces del Header con filtro por categoría
    DOM.navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const category = link.dataset.category;
            if (category) {
                AppState.currentCategory = category;
                DOM.filterBtns.forEach(b => b.classList.toggle('active', b.dataset.category === category));
                applyFiltersAndSort();
            }
            closeMobileNav();
        });
    });

    // Ordenamiento
    DOM.sortSelect.addEventListener('change', (e) => {
        AppState.currentSort = e.target.value;
        applyFiltersAndSort();
    });

    // Tecla ESC para cerrar modales y drawers
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeCart();
            closeMobileNav();
            closeCheckoutModal();
        }
    });
}

