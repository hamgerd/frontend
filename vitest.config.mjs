import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: "jsdom",
    exclude: ["e2e", "tests", "playwright.config.ts", "tests-examples", "node_modules"],
    coverage: {
      reporter: ["text", "json", "html"],
    },
  },
});
