import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  envDir: "src/env",
  base: "/CMPS-375-Get-a-Grip-Website/",
});
