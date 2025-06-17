import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@supabase-client": path.resolve(__dirname, "src/supabase"),
      "@common": path.resolve(__dirname, "src/common"),
    },
  },
});
