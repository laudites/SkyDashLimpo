import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from "../components/Sidebar";
import Footer from '../components/Footer';
import './relatorioGerencial.css';
import '../vendors/datatables.net-bs4/dataTables.bootstrap4.css';



const RelatorioGerencial = () => {
  const [selectedGerente, setSelectedGerente] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');

  // Dados fictícios
  const ficticioRelatorios = [
    {
      numeroOrcamento: '12345',
      status: 'Aprovado',
      razaoSocial: 'Empresa A',
      nomeFantasia: 'Loja A',
      cidade: 'São Paulo',
      uf: 'SP',
      dataCadastro: '2024-01-01',
    },
    {
      numeroOrcamento: '67890',
      status: 'Pendente',
      razaoSocial: 'Empresa B',
      nomeFantasia: 'Loja B',
      cidade: 'Rio de Janeiro',
      uf: 'RJ',
      dataCadastro: '2024-02-15',
    },
    {
      numeroOrcamento: '54321',
      status: 'Aprovado',
      razaoSocial: 'Empresa C',
      nomeFantasia: 'Loja C',
      cidade: 'Belo Horizonte',
      uf: 'MG',
      dataCadastro: '2024-03-10',
    },
    {
      numeroOrcamento: '98765',
      status: 'Pendente',
      razaoSocial: 'Empresa D',
      nomeFantasia: 'Loja D',
      cidade: 'Curitiba',
      uf: 'PR',
      dataCadastro: '2024-04-22',
    },
  ];

  // Opções de filtros fictícias
  const gerenteOptions = [
    { value: 'gerente1', label: 'Gerente 1' },
    { value: 'gerente2', label: 'Gerente 2' },
    { value: 'gerente3', label: 'Gerente 3' },
  ];

  const statusOptions = [
    { value: 'aprovado', label: 'Aprovado' },
    { value: 'pendente', label: 'Pendente' },
    { value: 'cancelado', label: 'Cancelado' },
  ];

  // Filtro dos relatórios baseado no status selecionado
  const filteredRelatorios = ficticioRelatorios.filter((relatorio) => {
    return (selectedStatus === '' || relatorio.status === selectedStatus);
  });

  return (
    <div className="container-scroller">
      <Header />
      <div className="container-fluid page-body-wrapper">
        <Sidebar />
        <div className="main-panel">
          <div className="content-wrapper">
            <div className="row pd0m">
              <div className="col-md-6-100 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <p className="card-title">Orçamentos do WEBSO</p>
                    {/* Filtros fictícios */}
                    <select
                      value={selectedGerente}
                      onChange={(e) => setSelectedGerente(e.target.value)}
                    >
                      <option value="">Selecione o Gerente</option>
                      {gerenteOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <select
                      value={selectedStatus}
                      onChange={(e) => setSelectedStatus(e.target.value)}
                    >
                      <option value="">Selecione o Status</option>
                      {statusOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabela fictícia */}
            <div className="row pd0m">
              <div className="col-md-12 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <table>
                      <thead>
                        <tr>
                          <th>Nº Orcamento</th>
                          <th>Status</th>
                          <th>Razão Social</th>
                          <th>Nome Fantasia</th>
                          <th>Cidade</th>
                          <th>UF</th>
                          <th>Data Cadastro</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredRelatorios.map((relatorio) => (
                          <tr key={relatorio.numeroOrcamento}>
                            <td>{relatorio.numeroOrcamento}</td>
                            <td>{relatorio.status}</td>
                            <td>{relatorio.razaoSocial}</td>
                            <td>{relatorio.nomeFantasia}</td>
                            <td>{relatorio.cidade}</td>
                            <td>{relatorio.uf}</td>
                            <td>{new Date(relatorio.dataCadastro).toLocaleDateString()}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default RelatorioGerencial;