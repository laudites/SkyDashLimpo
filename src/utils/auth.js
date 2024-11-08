import { refreshToken } from '../components/API/Login/RefreshToken';

export const isAuthenticated = async () => {
  const accessToken = localStorage.getItem('accessToken');
  const refreshTokenValue = localStorage.getItem('refreshToken');
  const tokenExpiry = localStorage.getItem('tokenExpiry');

  if (!accessToken || !refreshTokenValue || !tokenExpiry || accessToken === "undefined") {
    console.log("Tokens are missing or invalid.");
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('tokenExpiry');
    console.log("Token expiry time1:", expiryDate.toLocaleString());
    return false;
  }
  const expiryDate = new Date(Number(tokenExpiry));
  if (Date.now() >= tokenExpiry) {
    console.log("Token expired, attempting to refresh...");
    try {      
      const newTokens = await refreshToken(refreshTokenValue);
      console.log("Token refreshed successfully.");

      localStorage.setItem('accessToken', newTokens.Token);
      localStorage.setItem('refreshToken', newTokens.RefreshToken);
      localStorage.setItem('tokenExpiry', Date.now() + 3600 * 1000); // 1 hour expiry time for access token
      return true;
    } catch (error) {
      console.error('Erro ao atualizar o token', error);
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('tokenExpiry');
      console.log("Token expiry time:3", expiryDate.toLocaleString());
      return false;
    }
  }

  return true;
};

export const getAccessToken = async () => {
  if (await isAuthenticated()) {
    return localStorage.getItem('accessToken');
  } else {
    throw new Error('Usuário não autenticado');
  }
};
