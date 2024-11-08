import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Importando ícones de react-icons
import './registro.css'; // Importando CSS sem nomear como um módulo

const Registro = () => {
  const [username, setUsername] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  useEffect(() => {
    // Definindo dados fictícios
    const storedUsername = 'usuarioFicticio';  // Definir um usuário fictício
    setUsername(storedUsername);
  }, []);

  const handleRegister = (e) => {
    e.preventDefault();
    
    if (newPassword !== confirmNewPassword) {
      setError('As senhas não coincidem');
      return;
    }

    // Simulando alteração de senha com dados fictícios
    if (currentPassword === 'senhaAntiga' && newPassword !== '') {
      setError('');
      alert('Senha alterada com sucesso!');
      navigate('/');  // Navegar para a página inicial após a "alteração" da senha
    } else {
      setError('Erro ao alterar senha');
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(prevState => !prevState);
  };

  return (
    <div className="registroContainer">
      <div className="registroBox" style={isMobile ? { width: '80%', height: '70%' } : { width: '400px', height: '70%' }}>
        <h1>Alterar senha</h1>
        <form onSubmit={handleRegister}>
          <div className="inputContainer">
            <label htmlFor="username">Usuário:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              readOnly
              required
              style={{ textAlign: 'center' }}
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="currentPassword">Senha Atual:</label>
            <div className="passwordWrapper">
              <input
                type={showPassword ? "text" : "password"}
                id="currentPassword"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                required
                style={{ textAlign: 'center' }}
              />
              <div className="passwordIcon" onClick={toggleShowPassword}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
          </div>
          <div className="inputContainer">
            <label htmlFor="newPassword">Nova Senha:</label>
            <div className="passwordWrapper">
              <input
                type={showPassword ? "text" : "password"}
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                style={{ textAlign: 'center' }}
              />
              <div className="passwordIcon" onClick={toggleShowPassword}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
          </div>
          <div className="inputContainer">
            <label htmlFor="confirmNewPassword">Confirme a Nova Senha:</label>
            <div className="passwordWrapper">
              <input
                type={showPassword ? "text" : "password"}
                id="confirmNewPassword"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
                required
                style={{ textAlign: 'center' }}
              />
              <div className="passwordIcon" onClick={toggleShowPassword}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
          </div>
          {error && <p className="errorMessage">{error}</p>}
          <button type="submit" className="registerButton">Registrar</button>
        </form>
      </div>
    </div>
  );
};

export default Registro;
