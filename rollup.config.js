import resolve from "rollup-plugin-node-resolve";
import alias from "rollup-plugin-alias";
import babel from "rollup-plugin-babel";
import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer";
import uglify from "rollup-plugin-uglify";

export default {
  input: "src/main.js",
  output: {
    file: "dist/bundle.js",
    format: "iife",
    sourcemap: true
  },
  plugins: [
    postcss({
      extract: true,
      minimize: true,
      plugins: [
        autoprefixer()
      ]
    }),
    alias({
      resolve: [".jsx", ".js"]
    }),
    resolve({
      extensions: [".js", ".jsx"]
    }),
    babel({
      exclude: "node_modules/**", // only transpile our source code
      plugins: ["external-helpers"]
    }),
    uglify({
      mangle: {
        toplevel: true,
      }
    })
  ]
};