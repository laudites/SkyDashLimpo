import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // Define o diretório de saída como 'dist'
    sourcemap: false // Desativa os source maps
  },
  logLevel: 'error' // Opcional, para suprimir logs de aviso
});
