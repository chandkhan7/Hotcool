import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: '0.0.0.0',  // Allow access from any device on the local network
    port: 4000,        // Change the port number to 4000
    strictPort: true,  // If true, Vite will exit if the port is already in use
    open: true,        // Automatically open the browser when the server starts
  },
})
