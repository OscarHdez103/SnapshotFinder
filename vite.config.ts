import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/SnapshotFinder/", // MUST match repo name exactly (case-sensitive)
});
