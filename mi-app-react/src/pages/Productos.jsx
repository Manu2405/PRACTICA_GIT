// src/pages/Productos.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Productos.css';
import { 
  FaShoppingCart, 
  FaCheckCircle, 
  FaBox, 
  FaTag, 
  FaPills,
  FaFlask,
  FaCapsules,
  FaLeaf,
  FaPrescriptionBottle,
  FaHeart,
<<<<<<< Updated upstream
  FaSearch,
  FaFilter,
  FaStar,
  FaTruck,
  FaShieldAlt,
  FaClock,
  FaWhatsapp,
  FaInfoCircle,
  FaMinus,
  FaPlus
=======
  FaStar,
  FaTruck,
  FaShieldAlt,
  FaClock
>>>>>>> Stashed changes
} from 'react-icons/fa';

const Productos = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
<<<<<<< Updated upstream
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [quantities, setQuantities] = useState({});

  const categorias = [
    { id: 'todos', nombre: 'Todos', icono: <FaPills /> },
    { id: 'analgesicos', nombre: 'Analgésicos', icono: <FaPills /> },
    { id: 'antibioticos', nombre: 'Antibióticos', icono: <FaPrescriptionBottle /> },
    { id: 'vitaminas', nombre: 'Vitaminas', icono: <FaLeaf /> },
    { id: 'jarabes', nombre: 'Jarabes', icono: <FaFlask /> },
    { id: 'cuidado', nombre: 'Cuidado Personal', icono: <FaHeart /> }
  ];
=======
  const [activeCategory, setActiveCategory] = useState('todos');
>>>>>>> Stashed changes

  const productos = [
    { 
      id: 1, 
      nombre: 'Paracetamol 500mg', 
      cantidad: 2, 
      precio: 15,
      precioOriginal: 18,
      stock: 50,
      categoria: 'analgesicos',
      imagen: '/images/MEDI1.webp',
      descripcion: 'Alivio rápido del dolor y fiebre',
      icono: <FaPills />,
<<<<<<< Updated upstream
      beneficios: ['Alivia el dolor', 'Reduce la fiebre', 'Acción rápida'],
      envio: '24h',
      vendidos: 1500,
      rating: 4.5
=======
      categoria: 'analgesicos',
      stock: 15,
      oferta: true
>>>>>>> Stashed changes
    },
    { 
      id: 2, 
      nombre: 'Ibuprofeno 400mg', 
      cantidad: 30, 
      precio: 30,
      precioOriginal: 35,
      stock: 35,
      categoria: 'analgesicos',
      imagen: '/images/MEDI2.jpg',
      descripcion: 'Antiinflamatorio y analgésico',
      icono: <FaCapsules />,
<<<<<<< Updated upstream
      beneficios: ['Antiinflamatorio', 'Alivia el dolor', 'Reduce hinchazón'],
      envio: '24h',
      vendidos: 1200,
      rating: 4.3
=======
      categoria: 'antiinflamatorios',
      stock: 8,
      oferta: false
>>>>>>> Stashed changes
    },
    { 
      id: 3, 
      nombre: 'Amoxicilina 500mg', 
      cantidad: 5, 
      precio: 15,
      precioOriginal: 18,
      stock: 25,
      categoria: 'antibioticos',
      imagen: '/images/MEDI3.png',
      descripcion: 'Antibiótico de amplio espectro',
      icono: <FaPrescriptionBottle />,
<<<<<<< Updated upstream
      beneficios: ['Trata infecciones', 'Antibiótico efectivo', 'Uso con receta'],
      envio: '48h',
      vendidos: 800,
      rating: 4.7,
      requiereReceta: true
=======
      categoria: 'antibioticos',
      stock: 12,
      oferta: true
>>>>>>> Stashed changes
    },
    { 
      id: 4, 
      nombre: 'Vitamina C 1000mg', 
      cantidad: 10, 
      precio: 25,
      precioOriginal: 30,
      stock: 60,
      categoria: 'vitaminas',
      imagen: '/images/MEDI4.png',
      descripcion: 'Fortalece el sistema inmunológico',
      icono: <FaLeaf />,
<<<<<<< Updated upstream
      beneficios: ['Fortalece defensas', 'Antioxidante', 'Energía natural'],
      envio: '24h',
      vendidos: 2000,
      rating: 4.8
=======
      categoria: 'vitaminas',
      stock: 20,
      oferta: false
>>>>>>> Stashed changes
    },
    { 
      id: 5, 
      nombre: 'Jarabe para la tos', 
      cantidad: 1, 
      precio: 22,
      precioOriginal: 25,
      stock: 40,
      categoria: 'jarabes',
      imagen: '/images/MEDI5.jpg',
      descripcion: 'Alivio de la tos seca y productiva',
      icono: <FaFlask />,
<<<<<<< Updated upstream
      beneficios: ['Calma la tos', 'Alivia la garganta', 'Sabor agradable'],
      envio: '24h',
      vendidos: 950,
      rating: 4.4
=======
      categoria: 'jarabes',
      stock: 6,
      oferta: true
>>>>>>> Stashed changes
    },
    { 
      id: 6, 
      nombre: 'Alcohol en gel', 
      cantidad: 3, 
      precio: 12,
      precioOriginal: 15,
      stock: 100,
      categoria: 'cuidado',
      imagen: '/images/MEDI6.jpg',
      descripcion: 'Desinfección de manos 70%',
      icono: <FaHeart />,
<<<<<<< Updated upstream
      beneficios: ['Elimina gérmenes', 'Hidrata', 'Fácil de usar'],
      envio: '24h',
      vendidos: 3000,
      rating: 4.6
    },
    { 
      id: 7, 
      nombre: 'Omeprazol 20mg', 
      cantidad: 14, 
      precio: 18,
      precioOriginal: 22,
      stock: 45,
      categoria: 'gastrointestinales',
      imagen: '/images/MEDI7.jpg',
      descripcion: 'Protege el estómago, reduce acidez',
      icono: <FaCapsules />,
      beneficios: ['Reduce acidez', 'Protege mucosa', 'Alivia gastritis'],
      envio: '24h',
      vendidos: 700,
      rating: 4.2
    },
    { 
      id: 8, 
      nombre: 'Loratadina 10mg', 
      cantidad: 10, 
      precio: 20,
      precioOriginal: 24,
      stock: 55,
      categoria: 'alergias',
      imagen: '/images/MEDI8.jpg',
      descripcion: 'Alivio de alergias y rinitis',
      icono: <FaPills />,
      beneficios: ['Antialérgico', 'No causa sueño', '24h de alivio'],
      envio: '24h',
      vendidos: 850,
      rating: 4.5
    }
  ];

  const filteredProducts = productos.filter(producto => {
    const matchesSearch = producto.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         producto.descripcion.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'todos' || producto.categoria === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleQuantityChange = (productId, change) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: Math.max(1, (prev[productId] || 1) + change)
    }));
  };
=======
      categoria: 'higiene',
      stock: 25,
      oferta: false
    }
  ];

  const categorias = [
    { id: 'todos', nombre: 'Todos los productos' },
    { id: 'analgesicos', nombre: 'Analgésicos' },
    { id: 'antiinflamatorios', nombre: 'Antiinflamatorios' },
    { id: 'antibioticos', nombre: 'Antibióticos' },
    { id: 'vitaminas', nombre: 'Vitaminas' },
    { id: 'jarabes', nombre: 'Jarabes' },
    { id: 'higiene', nombre: 'Higiene' }
  ];

  const productosFiltrados = activeCategory === 'todos' 
    ? productos 
    : productos.filter(p => p.categoria === activeCategory);
>>>>>>> Stashed changes

  const handleComprar = (producto) => {
    const cantidad = quantities[producto.id] || 1;
    setSelectedProduct({ ...producto, cantidadCompra: cantidad });
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
<<<<<<< Updated upstream
            <div className="modal-icon-wrapper">
=======
            <div className="modal-success-animation">
>>>>>>> Stashed changes
              <FaCheckCircle className="modal-icon" />
            </div>
            <h3>¡Compra Exitosa!</h3>
            <p className="modal-product">{selectedProduct.nombre}</p>
            <div className="modal-details">
              <div className="modal-detail-item">
                <FaBox className="modal-detail-icon" />
<<<<<<< Updated upstream
                <span>Cantidad: {selectedProduct.cantidadCompra}</span>
              </div>
              <div className="modal-detail-item">
                <FaTag className="modal-detail-icon" />
                <span>Total: Bs. {selectedProduct.precio * selectedProduct.cantidadCompra}</span>
              </div>
            </div>
            <div className="modal-message">
              <FaTruck className="modal-truck-icon" />
              <span>¡Llegará en {selectedProduct.envio}!</span>
            </div>
=======
                <span>Cantidad: {selectedProduct.cantidad}</span>
              </div>
              <div className="modal-detail-item">
                <FaTag className="modal-detail-icon" />
                <span>Precio: {selectedProduct.precio}</span>
              </div>
            </div>
            <p className="modal-thanks">¡Gracias por tu compra!</p>
>>>>>>> Stashed changes
            <button className="modal-button" onClick={closeModal}>
              Seguir Comprando
            </button>
          </div>
        </div>
      )}

<<<<<<< Updated upstream
      {/* Hero Section */}
      <div className="productos-hero">
        <div className="hero-content">
          <h1 className="hero-title">Nuestros Productos</h1>
          <p className="hero-subtitle">Encuentra los mejores medicamentos y productos para tu salud</p>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">+1000</span>
            <span className="stat-label">Productos</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">+5000</span>
            <span className="stat-label">Clientes</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Disponible</span>
          </div>
        </div>
      </div>

      {/* Barra de búsqueda y filtros */}
      <div className="productos-filters">
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Buscar medicamentos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="categories-filter">
          {categorias.map(cat => (
            <button
              key={cat.id}
              className={`category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              <span className="category-icon">{cat.icono}</span>
              <span className="category-name">{cat.nombre}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Beneficios destacados */}
      <div className="beneficios-bar">
        <div className="beneficio-item">
          <FaTruck className="beneficio-icon" />
          <div className="beneficio-text">
            <h4>Envío Gratis</h4>
            <p>En compras +Bs. 200</p>
          </div>
        </div>
        <div className="beneficio-item">
          <FaShieldAlt className="beneficio-icon" />
          <div className="beneficio-text">
            <h4>Productos Originales</h4>
            <p>100% garantizados</p>
          </div>
        </div>
        <div className="beneficio-item">
          <FaClock className="beneficio-icon" />
          <div className="beneficio-text">
            <h4>Entrega Rápida</h4>
            <p>24 - 48 horas</p>
          </div>
        </div>
      </div>

      {/* Resultados de búsqueda */}
      <div className="resultados-info">
        <p>{filteredProducts.length} productos encontrados</p>
      </div>

      {/* Grid de productos */}
      <div className="productos-grid-moderno">
        {filteredProducts.map(producto => (
          <div key={producto.id} className="producto-card-moderno">
            {/* Etiqueta de descuento */}
            {producto.precioOriginal && (
              <div className="producto-descuento">
                -{Math.round(((producto.precioOriginal - producto.precio) / producto.precioOriginal) * 100)}%
              </div>
=======
      <div className="productos-header">
        <Link to="/" className="back-button">
          <FaArrowLeft /> Volver al Inicio
        </Link>
        <div className="header-content">
          <h1 className="productos-title">
            <span className="title-gradient">Nuestros Productos</span>
          </h1>
          <p className="productos-subtitle">
            Descubre nuestra amplia gama de medicamentos y productos para tu bienestar
          </p>
        </div>
      </div>

      {/* Barra de categorías */}
      <div className="categorias-bar">
        <div className="categorias-container">
          {categorias.map(cat => (
            <button
              key={cat.id}
              className={`categoria-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.nombre}
            </button>
          ))}
        </div>
      </div>

      {/* Banner de beneficios */}
      <div className="beneficios-banner">
        <div className="beneficio-item">
          <FaTruck className="beneficio-icon" />
          <div className="beneficio-texto">
            <h4>Envío Gratis</h4>
            <p>En compras mayores a 100bs</p>
          </div>
        </div>
        <div className="beneficio-item">
          <FaShieldAlt className="beneficio-icon" />
          <div className="beneficio-texto">
            <h4>100% Original</h4>
            <p>Productos certificados</p>
          </div>
        </div>
        <div className="beneficio-item">
          <FaClock className="beneficio-icon" />
          <div className="beneficio-texto">
            <h4>Entrega Rápida</h4>
            <p>24/48 horas hábiles</p>
          </div>
        </div>
      </div>

      {/* Contador de productos */}
      <div className="productos-stats">
        <p>Mostrando <span>{productosFiltrados.length}</span> productos</p>
      </div>
      
      <div className="productos-grid">
        {productosFiltrados.map(producto => (
          <div key={producto.id} className="producto-card">
            {producto.oferta && (
              <div className="producto-badge">Oferta</div>
>>>>>>> Stashed changes
            )}
            
            {/* Imagen del producto */}
            <div className="producto-imagen-wrapper">
              <img 
                src={producto.imagen} 
                alt={producto.nombre}
                className="producto-imagen"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/200x200?text=FARMATODO';
                }}
              />
<<<<<<< Updated upstream
              {producto.requiereReceta && (
                <div className="producto-receta-badge">
                  <FaInfoCircle /> Requiere receta
                </div>
              )}
            </div>

            {/* Información del producto */}
            <div className="producto-info-moderno">
              <div className="producto-categoria-badge">
                {producto.icono}
                <span>{producto.categoria}</span>
              </div>

              <h3 className="producto-nombre-moderno">{producto.nombre}</h3>
              <p className="producto-descripcion-moderno">{producto.descripcion}</p>

              {/* Rating y ventas */}
              <div className="producto-stats">
                <div className="producto-rating">
                  <FaStar className="star-icon" />
                  <span>{producto.rating}</span>
                </div>
                <span className="producto-vendidos">+{producto.vendidos} vendidos</span>
              </div>

              {/* Beneficios */}
              <div className="producto-beneficios">
                {producto.beneficios.map((beneficio, index) => (
                  <span key={index} className="beneficio-tag">{beneficio}</span>
                ))}
              </div>

              {/* Precio y cantidad */}
              <div className="producto-precio-section">
                <div className="producto-precios">
                  <span className="precio-actual">Bs. {producto.precio}</span>
                  {producto.precioOriginal && (
                    <span className="precio-original">Bs. {producto.precioOriginal}</span>
                  )}
                </div>
                
                <div className="producto-stock">
                  <span className={`stock-indicator ${producto.stock > 10 ? 'alto' : 'bajo'}`}></span>
                  <span>{producto.stock} disponibles</span>
                </div>
              </div>

              {/* Selector de cantidad y botón comprar */}
              <div className="producto-acciones">
                <div className="cantidad-selector">
                  <button 
                    className="cantidad-btn"
                    onClick={() => handleQuantityChange(producto.id, -1)}
                  >
                    <FaMinus />
                  </button>
                  <span className="cantidad-valor">{quantities[producto.id] || 1}</span>
                  <button 
                    className="cantidad-btn"
                    onClick={() => handleQuantityChange(producto.id, 1)}
                    disabled={(quantities[producto.id] || 1) >= producto.stock}
                  >
                    <FaPlus />
                  </button>
                </div>

                <button 
                  className="producto-comprar-btn-moderno"
                  onClick={() => handleComprar(producto)}
                >
                  <FaShoppingCart className="btn-icon" />
                  Comprar
                </button>
              </div>

              {/* Información de envío */}
              <div className="producto-envio">
                <FaTruck className="envio-icon" />
                <span>Envío en {producto.envio}</span>
              </div>
=======
              <div className="producto-icono-flotante">
                {producto.icono}
              </div>
            </div>
            
            <div className="producto-info">
              <div className="producto-header">
                <h3 className="producto-nombre">{producto.nombre}</h3>
                <div className="producto-rating">
                  <FaStar className="star-filled" />
                  <FaStar className="star-filled" />
                  <FaStar className="star-filled" />
                  <FaStar className="star-filled" />
                  <FaStar className="star-half" />
                  <span className="rating-number">(4.5)</span>
                </div>
              </div>
              
              <p className="producto-descripcion">{producto.descripcion}</p>
              
              <div className="producto-detalles">
                <div className="producto-cantidad">
                  <FaBox className="detalle-icon" />
                  <div className="detalle-texto">
                    <span className="detalle-label">Presentación</span>
                    <span className="detalle-valor">{producto.cantidad} unidades</span>
                  </div>
                </div>
                
                <div className="producto-precio">
                  <FaTag className="detalle-icon" />
                  <div className="detalle-texto">
                    <span className="detalle-label">Precio</span>
                    <span className="detalle-valor precio">{producto.precio}</span>
                  </div>
                </div>
              </div>

              <div className="producto-stock">
                <div className="stock-bar">
                  <div 
                    className="stock-fill" 
                    style={{ width: `${(producto.stock / 30) * 100}%` }}
                  ></div>
                </div>
                <span className={`stock-text ${producto.stock < 10 ? 'stock-bajo' : ''}`}>
                  {producto.stock < 10 ? '¡Últimas unidades!' : `${producto.stock} disponibles`}
                </span>
              </div>
              
              <button 
                className="producto-comprar-btn"
                onClick={() => handleComprar(producto)}
              >
                <FaShoppingCart className="btn-icon" />
                Agregar al Carrito
              </button>
>>>>>>> Stashed changes
            </div>
          </div>
        ))}
      </div>

<<<<<<< Updated upstream
      {/* Banner de WhatsApp */}
      <div className="whatsapp-banner">
        <div className="whatsapp-content">
          <FaWhatsapp className="whatsapp-icon" />
          <div className="whatsapp-text">
            <h3>¿Necesitas asesoramiento?</h3>
            <p>Habla con nuestro equipo de farmacéuticos</p>
          </div>
          <a 
            href="https://wa.me/1234567890" 
            target="_blank" 
            rel="noopener noreferrer"
            className="whatsapp-button"
          >
            Consultar ahora
          </a>
        </div>
=======
      {/* Footer simple */}
      <div className="productos-footer">
        <p>© 2024 Farmacia FARMATODO - Tu salud es nuestra prioridad</p>
>>>>>>> Stashed changes
      </div>
    </div>
  );
};

export default Productos;