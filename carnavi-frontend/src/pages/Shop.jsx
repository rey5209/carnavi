import "../styles/shop.css";
import img1 from "../assets/img/1.jpg";
import img2 from "../assets/img/2.jpg";
import img3 from "../assets/img/3.jpg";
import img4 from "../assets/img/4.jpg";

const products = [
  { id: 1, name: "OLED DISPLAY 10.1 inch 2k QLED", price: 16999, image: img1 },
  { id: 2, name: "Performance Air Filter", price: 2999, image: img2 },
  { id: 3, name: "LED Headlight Bulbs", price: 4999, image: img3 },
  { id: 4, name: "LED Car Ambient Lighting Kit", price: 9999, image: img4 }
];

const Shop = ({ addToCart }) => {
  return (
    <div className="shop-page">
      <div className="container">

        <h1>Shop</h1>

        <div className="product-grid">

          {products.length === 0 ? (
            <p>No products available</p>
          ) : (
            products.map((product) => (
              <div key={product.id} className="product-card">

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
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>

              </div>
            ))
          )}

        </div>

      </div>
    </div>
  );
};

export default Shop;