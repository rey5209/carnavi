import logo from '../assets/img/logo.png';
import { Link } from "react-router-dom";

const Navbar = () => {
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
                <a href="#" className="cart-icon"><i className="fas fa-shopping-cart"></i><span className="cart-count">0</span></a>
                <button className="menu-toggle"><i className="fas fa-bars"></i></button>
            </div>
        </div>
    </nav>
)}


export default Navbar;