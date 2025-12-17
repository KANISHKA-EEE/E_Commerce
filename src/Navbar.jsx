import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <aside className="sidebar">
      <h2 className="brand">TechBazaar</h2>

      <nav className="menu">
        <Link to="/">🏠 Home</Link>
        <Link to="/products">📦 Products</Link>
        <Link to="/cart">🛒 Cart</Link>
        <Link to="/contact">📞 Contact Us</Link>
        <Link to="/login">🔐 Login</Link>
      </nav>
    </aside>
  );
}

export default Navbar;
