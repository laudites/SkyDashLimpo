// src/routes/AppRoutes.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Login from '../pages/Login';
import Registro from '../pages/Registro';
import RelatorioGerencial from '../pages/RelatorioGerencial';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/alterarsenha" element={<Registro />} />
        <Route path="/about" element={<About />} />
        <Route path="/relatoriogerencial" element={<RelatorioGerencial />} />
        {/* Adicione mais rotas conforme necessário */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
