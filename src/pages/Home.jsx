import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import Filterer from "../ui/Filterer";
import ProductLists from "../ui/ProductLists";
import HeroSlider from "../ui/HeroSlider";

import img1 from "../assets/img/2knob.jpg";
import img2 from "../assets/img/10in2kdualknob.jpg";
import img3 from "../assets/img/13in4gb64gb.jpg";
import img4 from "../assets/img/360camcollection.jpg";
import img5 from "../assets/img/PackageA.jpg";
import img6 from "../assets/img/PackageA+FDC.jpg";
import img7 from "../assets/img/PackageB.jpg";
import img8 from "../assets/img/PackageC.jpg";
import img9 from "../assets/img/PackageD.jpg";
import img10 from "../assets/img/PackageD2.jpg";

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
    name: "2k Dual knob Display",
    specifications: [
      "Android 14",
      "Dual knob control",
      "Touchscreen display",
      "11.5 Inch Qled Display",
      "Wireless connectivity",
      "Bluetooth support",
      "4GB RAM, 64GB Storage",
      "8 Core Processor",
      "WiFi support",
    ],
    category: "LCD",
    price: 23999,
    rating: 4.5,
    description: "Premium 10.1-inch QLED Android head unit with smooth performance.",
    image: img1,
    inStock: true,
    badge: "Best Seller",
  },

  {
    id: 2,
    name: "10 inch 2K Dual Knob Display",
    specifications: [
      "Android 14",
      "Dual knob control",
      "Touchscreen display",
      "2K resolution",
      "10 Inch Qled Display",
      "8 Core Processor",
      "4GB RAM, 32GB Storage",
      "Bluetooth & WiFi",
      "Smooth UI",
    ],
    category: "LCD",
    price: 16999,
    rating: 4.3,
    description: "Modern dual-knob display for easy control and premium feel.",
    image: img2,
    inStock: true,
    badge: "",
  },

  {
    id: 3,
    name: "13 inch Android Display 4GB+64GB",
    specifications: [
      "13-inch large screen",
      "4GB RAM + 64GB Storage",
      "2K resolution",
      "Android 14",
      "Split screen support",
    ],
    category: "LCD",
    price: 24999,
    rating: 4.8,
    description: "Big screen entertainment and navigation upgrade.",
    image: img3,
    inStock: true,
    badge: "Discount",
    freebies: ["GPS Antenna", "Free reverse camera", "Free panel frame", "USB Ports"],
  },

  {
    id: 4,
    name: "360 Camera System",
    specifications: [
      "360° view",
      "Parking assist",
      "HD recording",
      "Night vision",
    ],
    category: "Safety",
    price: 20000,
    rating: 4.7,
    description: "Full surround camera system for maximum driving safety.",
    image: img4,
    inStock: true,
    badge: "Best Seller",
    freebies: ["Panel Frame", "GPS Antenna", "USB Ports", "RCA Cables"],
  },

  {
    id: 5,
    name: "Package A",
    specifications: [
      "Basic setup",
      "Android head unit",
      "Rear camera included",
      "Professional install",
    ],
    category: "Package",
    price: 6999,
    rating: 4.5,
    description: "Affordable starter package for your vehicle upgrade.",
    image: img5,
    inStock: true,
    badge: "",
    freebies: ["Free installation", "Free wiring harness"],
  },

  {
    id: 6,
    name: "Package A + FDC",
    specifications: [
      "Package A inclusions",
      "Front dash camera",
      "HD recording",
      "Extra safety",
    ],
    category: "Package",
    price: 14500,
    rating: 4.6,
    description: "Package A upgraded with front dash camera.",
    image: img6,
    inStock: true,
    badge: "Popular",
    freebies: ["Free installation", "Free reverse camera", "Free dash cam"],
  },

  {
    id: 7,
    name: "Package B",
    specifications: [
      "Improved system",
      "Better display",
      "Rear camera",
      "Smooth performance",
    ],
    category: "Package",
    price: 9999,
    rating: 4.7,
    description: "Balanced package for performance and features.",
    image: img7,
    inStock: true,
    badge: "",
    freebies: ["Free installation"],
  },

  {
    id: 8,
    name: "Package C",
    specifications: [
      "Package B inclusions",
      "Front dash cam",
      "Clear recording",
      "Enhanced safety",
    ],
    category: "Package",
    price: 12999,
    rating: 4.8,
    description: "Package B with additional front camera upgrade.",
    image: img8,
    inStock: true,
    badge: "Best Seller",
    freebies: ["Free installation", "Front camera included"],
  },

  {
    id: 9,
    name: "Package D",
    specifications: [
      "Premium build",
      "Fast performance",
      "High resolution",
      "Complete setup",
    ],
    category: "Package",
    price: 15999,
    rating: 4.9,
    description: "Premium upgrade for a full in-car experience.",
    image: img9,
    inStock: true,
    badge: "Top Tier",
    freebies: ["Free installation", "Complete accessories included"],
  },

  {
    id: 10,
    name: "Package D2",
    specifications: [
      "Advanced features",
      "Smooth UI",
      "High storage",
      "Reliable system",
    ],
    category: "Package",
    price: 23999,
    rating: 4.7,
    description: "Advanced package with powerful system performance.",
    image: img10,
    inStock: true,
    badge: "",
    freebies: ["Free installation", "Premium wiring kit"],
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
                  {selectedProduct.freebies && (
  <div className="freebies-box">
    <h4>🎁 Freebies Included:</h4>
    {selectedProduct.freebies.map((item, i) => (
      <p key={i}>• {item}</p>
    ))}
  </div>
)}
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
