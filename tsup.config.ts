import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["lib/index.ts"],
  format: ["cjs", "esm"],
  clean: true,
  splitting: true,
  sourcemap: true,
  target: "es6",
});
