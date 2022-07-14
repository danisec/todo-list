/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    screens: {
      sx: "330px",
      // => @media (min-width: 330px) { ... }

      xs: "360px",
      // => @media (min-width: 360px) { ... }

      ms: "480px",
      // => @media (min-width: 480px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        /* colors */
        "primary-blue": "#4A72FF",
      },
      dropShadow: {
        "3xl": "0px 30px 60px 0px rgba(74, 114, 255, 0.25)",
      },
    },
  },
  plugins: [],
};
