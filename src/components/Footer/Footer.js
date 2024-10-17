// Footer.js
import React from 'react';
import './Footer.css'


const Footer = () => {
  return (
    <footer className="footer">
      <div className='footer-content'>
      <p>&copy; {new Date().getFullYear()} MyShop. All rights reserved.</p>
      <div className="footer-links">
        <a href="/terms">Terms of Service</a>
        <a href="/privacy">Privacy Policy</a>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
