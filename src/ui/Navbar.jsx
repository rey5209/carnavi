import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";

const Navbar = ({ cart = [] }) => {
const [animate, setAnimate] = useState(false);
const [menuOpen, setMenuOpen] = useState(false);

useEffect(() => {
if (cart.length === 0) return;


setAnimate(true);

const timer = setTimeout(() => {
  setAnimate(false);
}, 300);

return () => clearTimeout(timer);


}, [cart.length]);

const toggleMenu = () => {
setMenuOpen((prev) => !prev);
};

const closeMenu = () => {
setMenuOpen(false);
};

return ( <nav className="navbar"> <div className="nav-container">

    {/* LEFT : Mobile menu button */}
    <button
      className="menu-toggle"
      onClick={toggleMenu}
      aria-label="Toggle menu"
    >
      ☰
    </button>

    {/* CENTER : Logo */}
    <Link to="/" className="logo center-logo" onClick={closeMenu}>
      <img src={logo} alt="CarNavi" className="logo-img" />
      <span>CarNavi</span>
    </Link>

    {/* RIGHT : Cart icon */}
    <div className="nav-icons">
      <Link
        to="/cart"
        className={`cart-icon ${animate ? "cart-bounce" : ""}`}
        onClick={closeMenu}
      >
        <i className="fas fa-shopping-cart"></i>
        {cart.length > 0 && (
          <span className="cart-count">{cart.length}</span>
        )}
      </Link>
    </div>

    {/* Navigation links */}
    <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
      <li><Link to="/" onClick={closeMenu}>Home</Link></li>
      <li><Link to="/shop" onClick={closeMenu}>Shop</Link></li>
      <li><Link to="/compatibility" onClick={closeMenu}>Compatibility</Link></li>
      <li><Link to="/about" onClick={closeMenu}>About</Link></li>
      <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
    </ul>

  </div>
</nav>


);
};

export default Navbar;
