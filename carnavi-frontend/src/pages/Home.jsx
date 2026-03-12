import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import Filterer from "../ui/Filterer";
import ProductLists from "../ui/ProductLists";
import HeroSlider from "../ui/HeroSlider";

import img1 from "../assets/img/1.jpg";
import img2 from "../assets/img/2.jpg";
import img3 from "../assets/img/3.jpg";
import img4 from "../assets/img/4.jpg";

const Home = ({ addToCart }) => {
  const navigate = useNavigate();

  const [showCartDialog, setShowCartDialog] = useState(false);

  const [categories, setCategories] = useState([
    { id: 0, name: "All Products", isActive: true },
    { id: 1, name: "LCD", isActive: false },
    { id: 2, name: "Performance", isActive: false },
    { id: 3, name: "Safety", isActive: false },
  ]);

  const [sortType, setSortType] = useState([
    { id: 0, name: "Featured", isActive: true },
    { id: 1, name: "Price: Low to High", isActive: false },
    { id: 2, name: "Price: High to Low", isActive: false },
    { id: 3, name: "Highest Rated", isActive: false },
  ]);

  const [products] = useState([
    {
      id: 1,
      name: "OLED DISPLAY 10.1 inch 2k QLED",
      specifications: [
        "Android 14",
        "Touchscreen display",
        "Wireless connectivity",
        "Bluetooth support",
        "4GB RAM, 32GB Storage",
        "8 core processor",
        "Wifi support",
      ],
      category: "LCD",
      price: 16999,
      rating: 3.5,
      description:
        "Comfortable and durable leather steering wheel cover with anti-slip grip",
      image: img1,
      inStock: true,
      badge: "Best Seller",
    },
    {
      id: 2,
      name: "Performance Air Filter",
      specifications: [
        "HEPA Filter Technology",
        "Removes 99.9% of particles",
        "USB power supply",
        "Compact design",
      ],
      category: "Performance",
      price: 2999,
      rating: 2.8,
      description:
        "High-performance air filter for improved engine efficiency and power",
      image: img2,
      inStock: true,
      badge: "",
    },
    {
      id: 3,
      name: "Package A",
      specifications: [
        "Material: Premium Rubber",
        "Set of 4 pieces",
        "Anti-slip backing",
        "Easy to clean",
      ],
      category: "Safety",
      price: 6999,
      rating: 4.8,
      description:
        "Bright LED headlight bulbs for enhanced visibility and safety on the road",
      image: img3,
      inStock: true,
      badge: "New Arrival",
    },
    {
      id: 4,
      name: "Package C",
      category: "LCD",
      price: 9999,
      rating: 4.9,
      image: img4,
      description: "16 color LED ambient lighting with remote control",
      specifications: [
        "16 Color options",
        "Remote control included",
        "App compatible",
        "Energy efficient",
      ],
      inStock: true,
      badge: "Best Seller",
    },
  ]);

  const [showProductModal, setShowProductModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const wrapperRef = useRef(null);

  const activeCategory = categories.find((cat) => cat.isActive);
  const selectedCategoryName = activeCategory
    ? activeCategory.name
    : "All Products";

  let displayedProducts = [...products];

  if (selectedCategoryName !== "All Products") {
    displayedProducts = displayedProducts.filter(
      (p) => p.category === selectedCategoryName,
    );
  }

  const activeSort = sortType.find((s) => s.isActive);

  if (activeSort) {
    if (activeSort.name === "Price: Low to High") {
      displayedProducts.sort((a, b) => a.price - b.price);
    } else if (activeSort.name === "Price: High to Low") {
      displayedProducts.sort((a, b) => b.price - a.price);
    } else if (activeSort.name === "Highest Rated") {
      displayedProducts.sort((a, b) => b.rating - a.rating);
    }
  }

  const handleCategoryClick = (clickedId) => {
    setCategories((prev) =>
      prev.map((cat) => ({
        ...cat,
        isActive: cat.id === clickedId,
      })),
    );
  };

  const handleSortTypeClick = (clickedId) => {
    setSortType((prev) =>
      prev.map((s) => ({
        ...s,
        isActive: s.id === clickedId,
      })),
    );
  };

  const handleProductSelect = (productId) => {
    const product = products.find((p) => p.id === productId);
    if (!product) return;
    setSelectedProduct(product);
    setShowProductModal(true);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    setShowCartDialog(true);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowProductModal(false);
      }
    };

    if (showProductModal) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showProductModal]);

  return (
    <div>
      <HeroSlider />

      <Filterer
        categories={categories}
        sortLabel="Sort by:"
        sortType={sortType}
        handleCategoryClick={handleCategoryClick}
        handleSortTypeClick={handleSortTypeClick}
      />

      <ProductLists
        ProductLists={displayedProducts}
        handleProductSelect={handleProductSelect}
      />

      {showProductModal && selectedProduct && (
        <div className="modal show" ref={wrapperRef}>
          <div className="modal-content">
            <span className="close" onClick={() => setShowProductModal(false)}>
              ×
            </span>

            <div className="modal-body">
              <img src={selectedProduct.image} alt={selectedProduct.name} />

              <div className="modal-info">
                <h2>{selectedProduct.name}</h2>

                <p>{selectedProduct.description}</p>

                <div className="modal-specs">
                  {selectedProduct.specifications.map((spec, i) => (
                    <p key={i}>✓ {spec}</p>
                  ))}

                  {selectedProduct.inStock ? (
                    <p style={{ color: "#10b981", fontWeight: "bold" }}>
                      ✓ In Stock
                    </p>
                  ) : (
                    <p style={{ color: "#b9101b", fontWeight: "bold" }}>
                      ☓ Out of Stock
                    </p>
                  )}
                </div>

                <p className="modal-price">
                  ₱{selectedProduct.price.toLocaleString()}
                </p>

                <button
                  className="add-to-cart-btn"
                  onClick={() => {
                    addToCart(selectedProduct); // add product to cart
                    setShowProductModal(false); // close product modal

                    setTimeout(() => {
                      setShowCartDialog(true); // show dialog popup
                    }, 200);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showCartDialog && (
        <div className="cart-dialog-overlay">
          <div className="cart-dialog">
            <h3>Item added to cart 🛒</h3>

            <p>What would you like to do?</p>

            <div className="cart-dialog-buttons">
              <button
                className="continue-btn"
                onClick={() => setShowCartDialog(false)}
              >
                Keep Shopping
              </button>

              <button
                className="checkout-btn"
                onClick={() => navigate("/cart")}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
