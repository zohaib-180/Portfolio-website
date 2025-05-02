const plugin = require("tailwindcss/plugin");

module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "oklch(var(--primary) / <alpha-value>)",
        background: "oklch(var(--background) / <alpha-value>)",
        foreground: "oklch(var(--foreground) / <alpha-value>)",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        ":root": {
          "--primary": "0.21 0.006 285.885",
          "--background": "1 0 0",
          "--foreground": "0.141 0.005 285.823",
        },
        ".dark": {
          "--primary": "0.92 0.004 286.32",
          "--background": "0.141 0.005 285.823",
          "--foreground": "0.985 0 0",
        },
      });
    }),
  ],
};
