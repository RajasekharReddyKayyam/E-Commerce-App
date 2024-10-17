// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Contact from './components/Contacts/Contact';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Footer from './components/Footer/Footer';
import Mobile from './components/Mobiles/Mobiles'; // Import Mobile component
import MobileItems from './components/Mobiles/MobileItems';

 // Import MobileItems component

const App = () => {
  return (
    <Router>
      <div className='app-container'>
        <Header />
        <main className='main-content'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/mobiles" element={<MobileItems />} />
            
          </Routes>
          <Mobile /> 
        </main>
        
        <Footer />
        
      </div>
    </Router>
  );
};

export default App;
