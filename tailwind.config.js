/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      head: ["Gravitas One", "cursive"],
      display: ["Nanum Pen Script", "cursive"],
      mono: ["IBM Plex Mono", "monospace"]
    },
    extend: {
      colors: {
        hotpink: "#ff269e",
        80: {
          pink: "#ff48c4",
          cyan: "#2bd1fc",
          yellow: "#f3ea5f",
          purple: "#c04df9",
          red: "#ff3f3f"
        }
      }
    }
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === "production",
    content: [
      "components/**/*.vue",
      "layouts/**/*.vue",
      "pages/**/*.vue",
      "plugins/**/*.js",
      "nuxt.config.js"
    ]
  }
};
