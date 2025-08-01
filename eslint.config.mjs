import { defineConfig } from "@fullstacksjs/eslint-config";

export default defineConfig({
  typescript: true,
  rules: {
    "no-floating-promises": "off",
  },
});
