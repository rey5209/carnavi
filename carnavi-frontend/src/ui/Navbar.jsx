import logo from '../assets/img/logo.png';
import { Link } from "react-router-dom";

const Navbar = ({ cart }) => {
  return (
    <nav className="navbar">
      <div className="nav-container">

        <div className="logo">
          <img src={logo} alt="CarNavi Dagupan" className="logo-img"/>
          <span>CarNavi</span>
        </div>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <div className="nav-icons">

          <Link to="/cart" className="cart-icon">
  <i className="fas fa-shopping-cart"></i>

  {cart.length > 0 && (
    <span className="cart-count">{cart.length}</span>
  )}
</Link>

        </div>

      </div>
    </nav>
  )
}

export default Navbar;