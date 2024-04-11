import path from "path";
import { PluginOption, defineConfig } from "vite";

import react from "@vitejs/plugin-react-swc";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    // react + swc
    react(),
    // rollup 打包体积视图分析
    visualizer({
      open: false,
      filename: "rollup-packages-build-stats.html",
    }) as unknown as PluginOption,
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "blaxberry-app-ui-react",
      fileName: "index",
    },
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react-router-dom": "ReactRouterDOM",
          "@emotion/react": "emotionReact",
          "@emotion/styled": "emotionStyled",
          "@mui/material": "MaterialUI",
        },
      },
    },
  },
});
