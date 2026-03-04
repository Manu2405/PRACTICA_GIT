// src/pages/Home.jsx
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      
      <div className="welcome-section">
        <h2>¡BIENVENIDO A FARMATODO!</h2>
        <p>adquiere los medicamentos que necesitas para llegar a recuperar tu salud</p>
      </div>

     
      <div className="divider"></div>

  
      <div className="features-section">
        <div className="feature-box">
          <div className="feature-image-container">
            <img 
              src="/images/sucursal.jpg" 
              alt="Sucursales" 
              className="feature-image"
            />
          </div>
          <h3>Explora y conoce nuestras sucursales más cercanas</h3>
        </div>

        <div className="feature-box">
          <div className="feature-image-container">
            <img 
              src="/images/descuentos.jpg" 
              alt="Descuentos" 
              className="feature-image"
            />
          </div>
          <h3>Conoce nuestros interesantes descuentos</h3>
        </div>

        <div className="feature-box">
          <div className="feature-image-container">
            <img 
              src="/images/cliente.jpg" 
              alt="Servicio al Cliente" 
              className="feature-image"
            />
          </div>
          <h3>En caso de necesitar nuestro servicio al cliente</h3>
        </div>
      </div>

    </div>
  );
};

export default Home;