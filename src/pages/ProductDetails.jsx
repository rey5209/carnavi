import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/ProductDetails.css";

import img1 from "../assets/img/1.jpg";
import img2 from "../assets/img/2.jpg";
import img3 from "../assets/img/3.jpg";
import img4 from "../assets/img/360camcollection.jpg";

/* PRODUCTS */
const products = [
  {
    id: 1,
    name: "OLED DISPLAY 10.1 inch 2k QLED",
    price: 16999,
    image: img1,
    specs: [
      "10.1-inch QLED Display",
      "2K Resolution",
      "Wireless Apple CarPlay",
      "Android Auto",
      "Built-in GPS Navigation",
      "WiFi Ready",
    ],
    compatibility: ["Toyota", "Mitsubishi", "Honda", "Nissan"]
  },
  {
    id: 2,
    name: "Performance Air Filter",
    price: 2999,
    image: img2,
    specs: [
      "High Air Flow",
      "Reusable Filter",
      "Improves Engine Efficiency"
    ],
    compatibility: ["Universal"]
  },
  {
    id: 3,
    name: "LED Headlight Bulbs",
    price: 6999,
    image: img3,
    specs: [
      "Super Bright LED",
      "Low Power Consumption",
      "Plug and Play"
    ],
    compatibility: ["Universal"]
  },
  {
    id: 4,
    name: "LED Car Ambient Lighting Kit",
    price: 9999,
    image: img4,
    specs: [
      "RGB Lighting",
      "App Controlled",
      "Music Sync Mode"
    ],
    compatibility: ["Universal"]
  }
];

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showCartDialog, setShowCartDialog] = useState(false);

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2 style={{ padding: "40px" }}>Product not found</h2>;
  }

  const handleAdd = () => {
    addToCart(product);
    setShowCartDialog(true);
  };

  return (
    <div className="product-details-page">

      {/* BACK */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      {/* MAIN LAYOUT */}
      <div className="product-wrapper">

        {/* LEFT IMAGE */}
        <div className="product-left">
          <img src={product.image} alt={product.name} />
        </div>

        {/* RIGHT INFO */}
        <div className="product-right">

          <h1>{product.name}</h1>

          <p className="price">
            ₱{product.price.toLocaleString()}
          </p>

          <button className="add-to-cart-btn" onClick={handleAdd}>
            Add to Cart
          </button>

          {/* SPECS */}
          <div className="section">
            <h3>Specifications</h3>
            <ul>
              {product.specs.map((spec, i) => (
                <li key={i}>{spec}</li>
              ))}
            </ul>
          </div>

          {/* COMPATIBILITY */}
          <div className="section">
            <h3>Compatible Vehicles</h3>
            <div className="compatibility-list">
              {product.compatibility.map((brand, i) => (
                <span key={i} className="badge">{brand}</span>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* MODAL */}
      {showCartDialog && (
        <div className="cart-dialog-overlay">
          <div className="cart-dialog">
            <h3>Item added to cart 🛒</h3>

            <div className="cart-dialog-buttons">
              <button onClick={() => setShowCartDialog(false)}>
                Keep Shopping
              </button>

              <button onClick={() => navigate("/cart")}>
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default ProductDetails;