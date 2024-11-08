import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './login.module.css';
import { useMediaQuery } from 'react-responsive';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  const handleLogin = (e) => {
    e.preventDefault();

    // Verifica se o nome de usuário e senha são preenchidos para simular um login bem-sucedido
    if (username && password) {
      setError('');
      navigate('/');
    } else {
      setError('Por favor, insira o nome de usuário e a senha');
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox} style={isMobile ? { width: '95%', height: '95%' } : {
        width: '400px', height: '70%'
      }}>
        <div className={styles.iconContainer}>
          <i className={styles.cameraIcon}></i>
        </div>
        <h1>HUB</h1>
        <h6>Comercial</h6>
        <form onSubmit={handleLogin}>
          <div className={styles.inputContainer}>
            <label htmlFor="username">Usuário:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className={styles.errorMessage}>{error}</p>}
          <div className={styles.optionsContainer}>
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#" className={styles.forgotPassword}>Forgot Password?</a>
          </div>
          <button type="submit" className={styles.loginButton}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
