import { defineConfig } from 'vite'
import react from '@vitejs-dev/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', 
})