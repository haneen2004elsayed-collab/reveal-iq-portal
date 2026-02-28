import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // تم تصحيح الاسم هنا

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/reveal-iq-portal/",
})