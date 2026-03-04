// src/pages/Productos.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Productos.css';
import { 
  FaArrowLeft, 
  FaShoppingCart, 
  FaCheckCircle, 
  FaBox, 
  FaTag, 
  FaPills,
  FaFlask,
  FaCapsules,
  FaLeaf,
  FaPrescriptionBottle,
  FaHeart
} from 'react-icons/fa';

const Productos = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const productos = [
    { 
      id: 1, 
      nombre: 'Paracetamol 500mg', 
      cantidad: 2, 
      precio: '15bs',
      imagen: '/images/MEDI1.webp',
      descripcion: 'Alivio rápido del dolor y fiebre',
      icono: <FaPills />
    },
    { 
      id: 2, 
      nombre: 'Ibuprofeno 400mg', 
      cantidad: 30, 
      precio: '30bs',
      imagen: '/images/MEDI2.jpg',
      descripcion: 'Antiinflamatorio y analgésico',
      icono: <FaCapsules />
    },
    { 
      id: 3, 
      nombre: 'Amoxicilina 500mg', 
      cantidad: 5, 
      precio: '15bs',
      imagen: '/images/MEDI3.png',
      descripcion: 'Antibiótico de amplio espectro',
      icono: <FaPrescriptionBottle />
    },
    { 
      id: 4, 
      nombre: 'Vitamina C 1000mg', 
      cantidad: 10, 
      precio: '25bs',
      imagen: '/images/MEDI4.png',
      descripcion: 'Fortalece el sistema inmunológico',
      icono: <FaLeaf />
    },
    { 
      id: 5, 
      nombre: 'Jarabe para la tos', 
      cantidad: 1, 
      precio: '22bs',
      imagen: '/images/MEDI5.jpg',
      descripcion: 'Alivio de la tos seca y productiva',
      icono: <FaFlask />
    },
    { 
      id: 6, 
      nombre: 'Alcohol en gel', 
      cantidad: 3, 
      precio: '12bs',
      imagen: '/images/MEDI6.jpg',
      descripcion: 'Desinfección de manos 70%',
      icono: <FaHeart />
    }
  ];

  const handleComprar = (producto) => {
    setSelectedProduct(producto);
    setModalOpen(true);
    
    setTimeout(() => {
      setModalOpen(false);
      setSelectedProduct(null);
    }, 3000);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="productos-page">
      {/* Modal de compra exitosa */}
      {modalOpen && selectedProduct && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <FaCheckCircle className="modal-icon" />
            <h3>¡Producto Adquirido!</h3>
            <p className="modal-product">{selectedProduct.nombre}</p>
            <p className="modal-detail">
              <FaBox className="modal-detail-icon" /> Cantidad: {selectedProduct.cantidad}
            </p>
            <p className="modal-detail">
              <FaTag className="modal-detail-icon" /> Precio: {selectedProduct.precio}
            </p>
            <button className="modal-button" onClick={closeModal}>
              Cerrar
            </button>
          </div>
        </div>
      )}
      
      <div className="productos-header">
        <h1 className="productos-title">Nuestros Productos</h1>
        <p className="productos-subtitle">Encuentra los medicamentos que necesitas para tu salud</p>
      </div>
      
      
      <div className="productos-grid">
        {productos.map(producto => (
          <div key={producto.id} className="producto-card">
            
            <div className="producto-image-container">
              <img 
                src={producto.imagen} 
                alt={producto.nombre}
                className="producto-image"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/200x200?text=FARMATODO';
                }}
              />
            </div>
            
            
            <div className="producto-info">
              <div className="producto-header">
                <div className="producto-icono">
                  {producto.icono}
                </div>
                <h3 className="producto-nombre">{producto.nombre}</h3>
              </div>
              <p className="producto-descripcion">{producto.descripcion}</p>
              
              <div className="producto-detalles">
                <div className="producto-cantidad">
                  <span className="detalle-label">
                    <FaBox className="detalle-icon" /> Cantidad:
                  </span>
                  <span className="detalle-valor">{producto.cantidad}</span>
                </div>
                <div className="producto-precio">
                  <span className="detalle-label">
                    <FaTag className="detalle-icon" /> Precio:
                  </span>
                  <span className="detalle-valor precio">{producto.precio}</span>
                </div>
              </div>
              
              
              <button 
                className="producto-comprar-btn"
                onClick={() => handleComprar(producto)}
              >
                <FaShoppingCart className="btn-icon" />
                Comprar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;