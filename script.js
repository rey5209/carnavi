// Global variables
let allProducts = [];
let cart = [];
let currentFilter = 'all';
let currentSort = 'featured';

// Initialize the website
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    setupEventListeners();
    loadCartFromStorage();
});

// Load products from JSON file
async function loadProducts() {
    try {
        const response = await fetch('products.json');
        allProducts = await response.json();
        displayProducts(allProducts);
    } catch (error) {
        console.error('Error loading products:', error);
        document.getElementById('productsGrid').innerHTML = '<p>Error loading products. Please refresh the page.</p>';
    }
}

// Display products based on current filter and sort
function displayProducts(products) {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';

    // Apply filter
    let filtered = products;
    if (currentFilter !== 'all') {
        filtered = products.filter(p => p.category === currentFilter);
    }

    // Apply sort
    filtered = sortProducts(filtered, currentSort);

    // Create product cards
    filtered.forEach(product => {
        const card = createProductCard(product);
        grid.appendChild(card);
    });

    // Add click listeners to modal
    setupModalListeners();
}

// Create a single product card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.dataset.productId = product.id;

    const starsHTML = createStarsHTML(product.rating);
    const priceHTML = `<span class="product-price">₱${product.price.toLocaleString('en-PH')}</span>`;

    const badgeHTML = product.badge ? `<div class="product-badge">${product.badge}</div>` : '';

    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" class="product-img">
            ${badgeHTML}
        </div>
        <div class="product-info">
            <div class="product-category">${product.category}</div>
            <h3 class="product-name">${product.name}</h3>
            <div class="product-rating">
                <div class="stars">${starsHTML}</div>
                <span class="rating-count">(${product.reviews})</span>
            </div>
            <p class="product-description">${product.description}</p>
            <div class="product-footer">
                <div>${priceHTML}</div>
                <button class="add-to-cart" data-id="${product.id}">
                    <i class="fas fa-shopping-cart"></i>
                </button>
            </div>
        </div>
    `;

    // Add click listener to open modal
    card.addEventListener('click', (e) => {
        if (!e.target.closest('.add-to-cart')) {
            openProductModal(product);
        }
    });

    return card;
}

// Create star rating HTML
function createStarsHTML(rating) {
    let starsHTML = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            starsHTML += '<i class="fas fa-star star"></i>';
        } else if (i === fullStars && hasHalfStar) {
            starsHTML += '<i class="fas fa-star-half-alt star"></i>';
        } else {
            starsHTML += '<i class="far fa-star star empty"></i>';
        }
    }

    return starsHTML;
}

// Sort products
function sortProducts(products, sortType) {
    const sorted = [...products];

    switch (sortType) {
        case 'price-low':
            return sorted.sort((a, b) => a.price - b.price);
        case 'price-high':
            return sorted.sort((a, b) => b.price - a.price);
        case 'rating':
            return sorted.sort((a, b) => b.rating - a.rating);
        case 'featured':
        default:
            return sorted;
    }
}

// Setup event listeners
function setupEventListeners() {
    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentFilter = e.target.dataset.filter;
            displayProducts(allProducts);
        });
    });

    // Sort dropdown
    document.getElementById('sort').addEventListener('change', (e) => {
        currentSort = e.target.value;
        displayProducts(allProducts);
    });

    // CTA button
    document.querySelector('.cta-button').addEventListener('click', () => {
        document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    });

    // Cart icon
    document.querySelector('.cart-icon').addEventListener('click', (e) => {
        e.preventDefault();
        showCartNotification();
    });

    // Contact form
    document.querySelector('.contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        document.querySelector('.contact-form').reset();
    });

    // Modal close button
    document.querySelector('.close').addEventListener('click', closeModal);

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        const modal = document.getElementById('productModal');
        if (e.target === modal) {
            closeModal();
        }
    });
}

// Setup modal listeners for add to cart buttons
function setupModalListeners() {
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = parseInt(e.currentTarget.dataset.id);
            addToCart(productId);
            showAddedNotification();
        });
    });
}

// Open product modal
function openProductModal(product) {
    const modal = document.getElementById('productModal');
    
    document.getElementById('modalImage').src = product.image;
    document.getElementById('modalImage').alt = product.name;
    document.getElementById('modalTitle').textContent = product.name;
    document.getElementById('modalDescription').textContent = product.description;
    document.getElementById('modalPrice').innerHTML = `₱${product.price.toLocaleString('en-PH')}`;
    
    // Rating
    const ratingDiv = document.getElementById('modalRating');
    ratingDiv.innerHTML = `
        <div class="stars">${createStarsHTML(product.rating)}</div>
        <span>${product.rating} (${product.reviews} reviews)</span>
    `;

    // Specifications
    const specsDiv = document.getElementById('modalSpecs');
    const specsHTML = product.specifications.map(spec => `<p>✓ ${spec}</p>`).join('');
    specsDiv.innerHTML = specsHTML;

    // Stock status
    const stockStatus = product.inStock ? '<p style="color: #10b981; font-weight: bold;">✓ In Stock</p>' : '<p style="color: #ef4444; font-weight: bold;">✗ Out of Stock</p>';
    specsDiv.innerHTML += stockStatus;

    // Add to cart button
    const addBtn = document.querySelector('.modal .add-to-cart-btn');
    addBtn.textContent = product.inStock ? 'Add to Cart' : 'Out of Stock';
    addBtn.disabled = !product.inStock;
    addBtn.onclick = () => {
        if (product.inStock) {
            addToCart(product.id);
            showAddedNotification();
            closeModal();
        }
    };

    modal.classList.add('show');
}

// Close modal
function closeModal() {
    document.getElementById('productModal').classList.remove('show');
}

// Add product to cart
function addToCart(productId) {
    const product = allProducts.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCartToStorage();
    updateCartCount();
}

// Update cart count in navbar
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.querySelector('.cart-count').textContent = count;
}

// Show cart notification
function showCartNotification() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    const cartSummary = cart.map(item => `${item.name} x${item.quantity}`).join('\n');
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    alert(`📦 Cart Summary:\n\n${cartSummary}\n\nTotal: ₱${total.toLocaleString('en-PH')}`);
}

// Show added to cart notification
function showAddedNotification() {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #10b981;
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        z-index: 999;
        animation: slideIn 0.3s ease;
        font-weight: 600;
    `;
    notification.textContent = '✓ Added to cart!';
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Save cart to localStorage
function saveCartToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Load cart from localStorage
function loadCartFromStorage() {
    const saved = localStorage.getItem('cart');
    if (saved) {
        cart = JSON.parse(saved);
        updateCartCount();
    }
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
