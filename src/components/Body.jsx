import React, { useState } from 'react';
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import "./body.css";

const Body = () => {
  const [isDateDropdownOpen, setIsDateDropdownOpen] = useState(false);
  const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false);
  const [currency, setCurrency] = useState("Real");
  const [dateType, setDateType] = useState("Ano");

  const toggleDateDropdown = () => setIsDateDropdownOpen(!isDateDropdownOpen);
  const toggleCurrencyDropdown = () => setIsCurrencyDropdownOpen(!isCurrencyDropdownOpen);

  const handleDateTypeChange = (type) => {
    setDateType(type);
    const now = new Date();
    setSelectedDate(now);
    setIsDateDropdownOpen(false);
  };

  const handleCurrencyChange = (currency) => {
    setCurrency(currency);
    setIsCurrencyDropdownOpen(false);
  };

  return (
    <div className="container-fluid page-body-wrapper">
      <Sidebar />
      <div className="main-panel">
        <div className="content-wrapper">
          <div className="row">
            <div className="col-md-12 grid-margin">
              <div className="row">
                <div className="col-12 col-xl-8 mb-4 mb-xl-0">
                  <h3 className="font-weight-bold">Usuário Fictício</h3>
                  <h6 className="font-weight-normal mb-0">Bem vindo ao novo sistema HUB Comercial!</h6>
                </div>
                
              </div>
            </div>
          </div>          
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Body;
