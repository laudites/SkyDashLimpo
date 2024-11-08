import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoMini from "../assets/images/helice.png";
import { FaUserGear } from "react-icons/fa6";

const Sidebar = ({ isSidebarOpen }) => {
  const [isUiBasicOpen, setIsUiBasicOpen] = useState(false);

  const handleUiBasicClick = (e) => {
    e.preventDefault();
    setIsUiBasicOpen(!isUiBasicOpen);
  };

  return (
    <nav className={`sidebar sidebar-offcanvas ${isSidebarOpen ? 'active' : ''}`} id="sidebar">
      <ul className="nav">
        <li className="nav-item">
          <Link className="navbar-brand brand-logo me-5 nav-link" to="/">
            <i className="icon-grid menu-icon"></i>
            <span className="menu-title">Dashboard</span>
          </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={handleUiBasicClick} aria-expanded={isUiBasicOpen} aria-controls="ui-basic" href="#!">
            <img src={logoMini} alt="Eletrofrio Logo" className="menu-icon" style={{ width: 18, height: 18, marginRight: "1rem" }} />
            <span className="menu-title">Eletrofrio</span>
            <i className="menu-arrow"></i>
          </a>
          <div className={`collapse ${isUiBasicOpen ? 'show' : ''}`} id="ui-basic">
            <ul className="nav flex-column sub-menu">              
              <li className="nav-item">
                <Link className="navbar-brand brand-logo me-5 nav-link" to="/relatoriogerencial">Relatorio gerencial</Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <Link className="navbar-brand brand-logo me-5 nav-link" to="/administrador">
            <i className='menu-icon'><FaUserGear /></i>
            <span className="menu-title">Administrador</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
