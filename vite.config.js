import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  
  return {
    server: {
      port: parseInt(env.VITE_PORT) || 3000,
    },
    plugins: [react(), tailwindcss()],
  }
})
