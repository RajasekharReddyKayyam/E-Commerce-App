import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';


const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">MyShop</Link>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search for products..." />
        <button type="submit">Search</button>
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
     {/* Link to Mobile */}
    
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/Register">Register</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>
      <div className="cart">
        <Link to="/cart">
          <span role="img" aria-label="cart">🛒</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
