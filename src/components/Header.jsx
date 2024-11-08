import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Sidebar from '../components/Sidebar';
import "../vendors/feather/feather.css";
import "../vendors/ti-icons/css/themify-icons.css";
import "../vendors/css/vendor.bundle.base.css";
import "../css/vertical-layout-light/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './header.css'
import logoLight from "../assets/images/logoEletrofrio.png";
import logoMini from "../assets/images/helice.png";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const location = useLocation();
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  // Define o título da página com base na URL
  let pageTitle;
  switch (location.pathname) {
    case '/analisenegocio':
      pageTitle = 'Análise de Negócio';
      break;
    case '/relatoriogerencial':
      pageTitle = 'Relatório Gerencial';
      break;
    case '/':
      pageTitle = 'Dashboard';
      break;
    default:
      pageTitle = 'Página Padrão';
  }

  return (
    <>
      <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-start">
          <Link className="navbar-brand brand-logo me-5" to="/">
            <img src={logoLight} className="me-2" alt="logo" />
          </Link>
          <Link className="navbar-brand brand-logo-mini" to="/">
            <img src={logoMini} alt="logo" />
          </Link>
        </div>
        <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
          {!isMobile ? (
            <h1 style={{ margin: "auto" }}>{pageTitle}</h1>
          ) : (
            <h1 style={{ margin: "auto", fontSize: "1.5rem" }}>{pageTitle}</h1>
          )}
          <ul className="navbar-nav navbar-nav-right">
            <li className={`nav-item nav-profile dropdown ${isDropdownOpen ? 'show' : ''}`}>
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="profileDropdown"
                onClick={toggleDropdown}
                aria-expanded={isDropdownOpen}
              >
                <div className="profile-initial">U</div> {/* Exemplo de letra inicial */}
              </a>
              <div
                className={`dropdown-menu dropdown-menu-right navbar-dropdown ${isDropdownOpen ? 'show' : ''}`}
                aria-labelledby="profileDropdown"
              >
                <a className="dropdown-item" href="#">
                  <i className="ti-lock text-primary"></i>
                  Alterar senha
                </a>
                <a className="dropdown-item" href="#">
                  <i className="ti-power-off text-primary"></i>
                  Desconectar
                </a>
              </div>
            </li>
          </ul>
          <button
            className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
            type="button"
            onClick={toggleSidebar}
          >
            <span className="icon-menu"></span>
          </button>
        </div>
      </nav>
      {isSidebarOpen && <Sidebar isSidebarOpen={isSidebarOpen} />}
    </>
  );
};

export default Header;
