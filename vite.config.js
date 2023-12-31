import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "meta.env.IMAGES_PATH": JSON.stringify(
      "./back-laraveld/storage/app/public/images"
    ),
  },
});
