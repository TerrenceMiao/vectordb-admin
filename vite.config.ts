import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";

import { defineConfig } from "vite";

import { pluginAPIRoutes } from "vite-plugin-api-routes";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    pluginAPIRoutes({
      // moduleId: "@api",  // Old version change to "virtual:vite-plugin-api-routes",
      // cacheDir: ".api",
      // server: "[cacheDir]/server.js",
      server: "src/config/server.js",
      // handler: "[cacheDir]/handler.js",
      handler: "src/config/handler.js",
      // configure: "[cacheDir]/configure.js",
      configure: "src/config/configure.js",
      // routeBase: "api",
      // dirs: [{ dir: "src/api"; route: "", exclude?: ["*.txt", ".csv", "data/*.*"] }],
      // include: ["**/*.js", "**/*.ts"],
      // exclude: ["node_modules", ".git"],
      // mapper: { default: "use", GET: "get", ... },
    }),
  ],
  server: {
    host: "0.0.0.0",
  },
});
