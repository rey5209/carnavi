import "../styles/cart.css";
import { useNavigate } from "react-router-dom";

const Cart = ({ cart }) => {
    const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-page">

      <div className="cart-container">

        {/* LEFT SIDE */}
        <div className="cart-items">

          <h2>Your Cart</h2>

          {cart.length === 0 && <p>Your cart is empty</p>}

          {cart.map((item, index) => (

            <div className="cart-item" key={index}>

              <img src={item.image} alt={item.name} />

              <div className="cart-info">
                <h3>{item.name}</h3>
                <p className="price">₱{item.price.toLocaleString()}</p>
              </div>

            </div>

          ))}

        </div>


        {/* RIGHT SIDE SUMMARY */}
        <div className="cart-summary">

          <h3>Order Summary</h3>

          <div className="summary-row">
            <span>Items</span>
            <span>{cart.length}</span>
          </div>

          <div className="summary-row">
            <span>Total</span>
            <span>₱{total.toLocaleString()}</span>
          </div>

          <button
  className="checkout-btn"
  onClick={() => navigate("/checkout")}
>
  Proceed to Checkout
</button>

        </div>

      </div>

    </div>
  );
};

export default Cart;