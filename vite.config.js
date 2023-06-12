import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://github.com/Donal-Noye/shirt-three.js",
  plugins: [react()],
})
