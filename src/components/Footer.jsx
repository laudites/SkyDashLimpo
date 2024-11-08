// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
    <div className="d-sm-flex justify-content-center justify-content-sm-between">
      <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">Em desenvolvimento. Ultima atualização: 01/08/2024</span>      
      <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Hand-crafted & made with <i className="ti-heart text-danger ms-1"></i></span>
      <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">By Willian Laudites</span>
    </div>
  </footer>
  );
};

export default Footer;
