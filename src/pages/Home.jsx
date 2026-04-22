import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import Filterer from "../ui/Filterer";
import ProductLists from "../ui/ProductLists";
import HeroSlider from "../ui/HeroSlider";

import img1 from "../assets/img/2knob.jpg";
import img2 from "../assets/img/2knob.jpg";
import img3 from "../assets/img/13in4gb64gb.jpg";
import img4 from "../assets/img/360camcollection.jpg";
import img5 from "../assets/img/PackageA.jpg";
import img6 from "../assets/img/PackageA+FDC.jpg";
import img7 from "../assets/img/PackageB.jpg";
import img8 from "../assets/img/PackageC.jpg";
import img9 from "../assets/img/PackageD.jpg";
import img10 from "../assets/img/PackageD2.jpg";
import img11 from "../assets/img/PackageD10.jpg";

const Home = ({ addToCart }) => {
  const navigate = useNavigate();

  const [showCartDialog, setShowCartDialog] = useState(false);

  const [categories, setCategories] = useState([
    { id: 0, name: "All Products", isActive: true },
    { id: 1, name: "LCD", isActive: false },
    { id: 2, name: "Safety", isActive: false },
    { id: 3, name: "Package", isActive: false },
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
    description: "Smart 2K dual knob display with Android 14, smooth performance, and premium QLED touchscreen experience.",
    image: img1,
    inStock: true,
    badge: "Best Seller",
    freebies: ["Free installation at our shop only", ],
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
    description: "Compact 10-inch 2K touchscreen with dual knobs, fast 8-core power, and smooth user experience.",
    image: img2,
    inStock: true,
    badge: "",
    freebies: ["Free installation at our shop only", ],
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
    description: "Big 13” screen, smooth Android 14, and split-screen features for better productivity.",
    image: img3,
    inStock: true,
    badge: "Discount",
    freebies: ["GPS Antenna", "Free reverse camera", "Free panel frame", "USB Ports"],
  },

  {
    id: 4,
    name: "360 Camera Package D1",
    specifications: [
      "360° view",
      "Parking assist",
      "HD recording",
      "Night vision",
      "4GB RAM, 32GB Storage",
      "Apple CarPlay & Android Auto",
      "9-inch QLED display",
    ],
    category: "Safety",
    price: 32000,
    rating: 4.7,
    description: "All-in-one 360° system with HD clarity, wireless CarPlay/Android Auto, and enhanced safety features.",
    image: img4,
    inStock: true,
    freebies: ["Panel Frame", "GPS Antenna", "USB Ports", "RCA Cables"],
  },

  {
    id: 5,
    name: "360 Camera Package D2",
    specifications: [
      "360° view",
      "Parking assist",
      "HD recording",
      "Night vision",
      "4GB RAM, 64GB Storage",
      "Apple CarPlay & Android Auto",
      "9-inch QLED display",
    ],
    category: "Safety",
    price: 35000,
    rating: 4.7,
    description: "All-in-one 360 camera with night vision, HD recording, and fast 4GB RAM + 64GB storage.",
    image: img4,
    inStock: true,
    freebies: ["Panel Frame", "GPS Antenna", "USB Ports", "RCA Cables"],
  },

  {
    id: 6,
    name: "360 Camera Package D3",
    specifications: [
      "360° view",
      "Parking assist",
      "HD recording",
      "Night vision",
      "8GB RAM, 128GB Storage",
      "Apple CarPlay & Android Auto",
      "9-inch QLED display",
    ],
    category: "Safety",
    price: 36000,
    rating: 4.7,
    description: "High-performance 360 camera package with 8GB RAM, 128GB storage, and smart safety features.",
    image: img4,
    inStock: true,
    badge: "Best Seller",
    freebies: ["Panel Frame", "GPS Antenna", "USB Ports", "RCA Cables"],
  },

  {
    id: 7,
    name: "Package A",
    specifications: [
      "2GB RAM, 32GB Storage",
      "9-inch QLED display",
      "Android Version 12",
      "4 CPU's Quad Core Processor",
      "Apple CarPlay & Android Auto",
    ],
    category: "Package",
    price: 8500,
    rating: 4.5,
    description: "Affordable 9” QLED touchscreen with quad-core speed and seamless smartphone connectivity.",
    image: img5,
    inStock: true,
    badge: "",
    freebies: ["Free installation at our shop only", "Panel Frame", "Reverse Camera", "USB Ports"],
  },

  {
    id: 8,
    name: "Package A + FDC",
    specifications: [
      "2GB RAM, 32GB Storage",
      "Front dash camera",
      "HD recording",
      "Android version 12",
      "9-inch QLED display",
      "4 CPU's Quad Core Processor",
      "Apple CarPlay & Android Auto",
    ],
    category: "Package",
    price: 14500,
    rating: 4.6,
    description: "All-in-one package with front dash camera, smooth Android 12 system, and smart connectivity.",
    image: img6,
    inStock: true,
    badge: "Popular",
    freebies: ["Free installation at our shop only", "Free reverse camera", "Free dash cam"],
  },

  {
    id: 9,
    name: "Package B",
    specifications: [
      "4GB RAM, 64GB Storage",
      "4 CPU's Quad Core Processor",
      "Android version 12",
      "9-inch QLED display",
    ],
    category: "Package",
    price: 11000,
    rating: 4.7,
    description: "Upgrade your drive with a 9-inch QLED screen, fast 4GB RAM, and reliable performance.",
    image: img7,
    inStock: true,
    badge: "Discount",
    freebies: ["Free installation at our shop only", "Panel Frame", "Reverse Camera", "GPS Antenna", "USB Ports"],
  },

  {
    id: 10,
    name: "Package C",
    specifications: [
      "4GB RAM, 64GB Storage",
      "8 CPU's Octa Core Processor",
      "9-inch QLED display",
      "Android version 12",
    ],
    category: "Package",
    price: 13000,
    rating: 4.8,
    description: "Smooth and fast 9-inch display powered by an 8-core processor and 4GB RAM, with reverse camera.",
    image: img8,
    inStock: true,
    badge: "Best Seller",
    freebies: ["Free installation at our shop only", "reverse camera", "GPS Antenna", "USB Ports"],
  },

  {
    id: 11,
    name: "Package D (9 INCH)",
    specifications: [
      "4GB RAM, 64GB Storage",
      "8 CPU's Octa Core Processor",
      "360-Camera Support",
      "9-inch QLED display",
      "Android version 14",
      "Wireless CarPlay & Android Auto",
    ],
    category: "Package",
    price: 15999,
    rating: 4.9,
    description: "Smart upgrade with wireless CarPlay, 360-camera support, and fast octa-core performance.",
    image: img9,
    inStock: true,
    badge: "Top Tier",
    freebies: ["Free installation at our shop only", "DVR Dashcam", "Reverse Camera", "Panel Frame", "RCA Cables", "GPS Antenna", "USB Ports"],
  },

  {
    id: 12,
    name: "Package D2 (With 360-Camera)",
    specifications: [
      "4Gb RAM, 64GB Storage",
      "8 CPU's Octa Core Processor",
      "9-inch QLED display",
      "Android version 14",
      "360-Camera Support",
      "wireless CarPlay & Android Auto",
    ],
    category: "Package",
    price: 23999,
    rating: 4.7,
    description: "Complete 360° camera system with 9” QLED display, Android 14, and smooth octa-core performance.",
    image: img10,
    inStock: true,
    badge: "",
    freebies: ["Free installation at our shop only", "Panel Frame", "RCA Cables", "GPS Antenna", "USB Ports"],
  },

  {
    id: 13,
    name: "Package D (10 INCH)",
    specifications: [
      "4GB RAM, 64GB Storage",
      "8 CPU's Octa Core Processor",
      "360-Camera Support",
      "9-inch QLED display",
      "Android version 14",
      "Wireless CarPlay & Android Auto",
    ],
    category: "Package",
    price: 16999,
    rating: 4.7,
    description: "with 10” QLED display, Android 14, and smooth octa-core performance.",
    image: img11,
    inStock: true,
    badge: "",
    freebies: ["Free installation at our shop only", "DVR Dashcam", "Reverse Camera", "Panel Frame", "RCA Cables", "GPS Antenna", "USB Ports"],
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
