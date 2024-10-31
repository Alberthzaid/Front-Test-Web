import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TableBrandsContainer } from '../../../Components/FormAdminDashboard/TableBrands/TableBrandsContainer';
import { TableStockContainer } from '../../../Components/FormAdminDashboard/TableProducts/TableStockContainer';
import './Admin.css';

export const Admin = () => {
  const [showProducts, setShowProducts] = useState(true);

  const toggleTable = () => {
    setShowProducts(!showProducts);
  };

  return (
    <div className='Main-Admin'>
      <nav className='Admin-Navbar'>
        <ul className='nav-list'>
          <li><Link to="/dashboard/product-form">Crear Producto</Link></li>
          <li><Link to="/dashboard/brand-form">Crear Marca</Link></li>
        </ul>
      </nav>

      <div className="Admin-Content">
        <h2>Administración de Productos y Marcas</h2>
        
        <button className="toggle-table-button" onClick={toggleTable}>
          {showProducts ? "Ver Marcas" : "Ver Productos"}
        </button>

        {showProducts ? (
          <section>
            <h3>Productos</h3>
            <TableStockContainer />
          </section>
        ) : (
          <section>
            <h3>Marcas</h3>
            <TableBrandsContainer />
          </section>
        )}
      </div>
    </div>
  );
};

export default Admin;
