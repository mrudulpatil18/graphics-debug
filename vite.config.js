import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  root: "site",
  build: {
    outDir: "../dist-site",
    emptyOutDir: true,
  },
})
