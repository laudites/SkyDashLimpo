// LoadingSpinner.js
import React from 'react';
import './loadingSpinner.css'; // Estilize conforme necessário

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <div className="spinner"></div>
      Carregando...
    </div>
  );
};

export default LoadingSpinner;
