// src/components/Footer.jsx
import React from 'react';
import './Footer.css';
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        <div className="footer-section contact-section">
          <h4>Contacto</h4>
          <div className="contact-info">
            <p><FaPhone /> 01-800-327-6286</p>
            <p><FaEnvelope /> info@farmatodo.com</p>
            <p><FaMapMarkerAlt /> Av. Principal #123, Ciudad</p>
          </div>
        </div>
        
       
        <div className="footer-section social-section">
          <h4>Síguenos</h4>
          <div className="social-icons">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} FARMATODO. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;