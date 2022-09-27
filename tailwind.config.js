const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        manga: "#E5E1E6",
        void: "#170F1E",
        spark: "#FFE270",
        surf: "#64E3FF",
        psybeam: "#9092FF",
        giga: "#B4FF39",
        turquoise: "#40DDFF ",
      },
    },
  },
};
