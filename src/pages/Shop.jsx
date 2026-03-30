import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Shop.css";

import img1 from "../assets/img/1.jpg";
import img2 from "../assets/img/2.jpg";
import img3 from "../assets/img/3.jpg";
import img4 from "../assets/img/360camcollection.jpg";

const products = [
  { id: 1, name: "OLED DISPLAY 10.1 inch 2k QLED", price: 16999, image: img1 },
  { id: 2, name: "Performance Air Filter", price: 2999, image: img2 },
  { id: 3, name: "LED Headlight Bulbs", price: 6999, image: img3 },
  { id: 4, name: "LED Car Ambient Lighting Kit", price: 9999, image: img4 }
];

const Shop = ({ addToCart }) => {
  const navigate = useNavigate();
  const [showCartDialog, setShowCartDialog] = useState(false);

  const handleAdd = (product) => {
    addToCart(product);
    setShowCartDialog(true);
  };

  return (
    <div className="shop-page">
      <div className="container">
        <h1>Accessories</h1>

        <div className="product-grid">
          {products.length === 0 ? (
            <p>No products available</p>
          ) : (
            products.map((product) => (
              <div
                key={product.id}
                className="product-card"
                onClick={() => navigate(`/product/${product.id}`)} // ✅ CLICKABLE CARD
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-img"
                />

                <h3>{product.name}</h3>

                <p className="price">
                  ₱{product.price.toLocaleString()}
                </p>

                <button
                  className="add-to-cart-btn"
                  onClick={(e) => {
                    e.stopPropagation(); // ✅ PREVENT CARD CLICK
                    handleAdd(product);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            ))
          )}
        </div>
      </div>

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

export default Shop;