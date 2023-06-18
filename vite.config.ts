import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    proxy: {
      "/api": "https://questioneer-web-service.onrender.com",
    },
  },
  build: {
    // generate manifest.json in outDir
    manifest: true,
  },
});
