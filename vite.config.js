import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // This allows Vite to listen on all network interfaces
    port: 5173,  // Ensure the port is set correctly
  },
})