import logo from '../assets/img/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="nav-container">
            <div className="logo">
                <img src={logo} alt="CarNavi Dagupan" className="logo-img"/>
                <span>CarNavi</span>
            </div>
            <ul className="nav-menu">
                <li><a href="#home" className="nav-link">Home</a></li>
                <li><a href="#products" className="nav-link">Shop</a></li>
                <li><a href="#about" className="nav-link">About</a></li>
                <li><a href="#contact" className="nav-link">Contact</a></li>
            </ul>
            <div className="nav-icons">
                <a href="#" className="cart-icon"><i className="fas fa-shopping-cart"></i><span className="cart-count">0</span></a>
                <button className="menu-toggle"><i className="fas fa-bars"></i></button>
            </div>
        </div>
    </nav>
)}


export default Navbar;