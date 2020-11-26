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
      head: ["rift", "sans-serif"],
      mono: ["code-saver", "monospace"],
      bit: ["lores-12", "sans-serif"],
      bitwide: ["lores-9-plus-wide", "sans-serif"]
    },
    extend: {
      colors: {
        80: {
          hotpink: "#ff269e",
          pink: "#ee2e93",
          cyan: "#2bd1fc",
          yellow: "#f3ea5f",
          purple: {
            neon: "#d430e5",
            st: "#9f00fd"
          },
          red: "#ff3f3f",
          darkblue: "#000025"
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
