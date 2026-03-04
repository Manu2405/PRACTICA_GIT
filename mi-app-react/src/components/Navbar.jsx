// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaShoppingCart, FaStore } from 'react-icons/fa';
import { IoPerson } from 'react-icons/io5';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
       
        <div className="navbar-logo" onClick={() => window.location.href = '/'} style={{ cursor: 'pointer' }}>
          <img 
            src="/images/logo-farmatodo.png" 
            alt="FARMATODO" 
            className="navbar-logo-img"
          />
          <h1>FARMATODO</h1>
        </div>


        <div className="navbar-menu">
          <div className="nav-item">
            <IoPerson className="nav-icon" />
            <span>¿Quienes somos?</span>
          </div>
          
          <div className="nav-item">
            <Link to="/productos" className="nav-link">
              <FaStore className="nav-icon" />
              <span>Productos</span>
            </Link>
          </div>
          
          <div className="nav-item">
            <FaShoppingCart className="nav-icon" />
            <span>Ver mi carrito</span>
          </div>
        </div>
      </div>
      
     
      <div className="navbar-divider"></div>
    </nav>
  );
};

export default Navbar;