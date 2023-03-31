/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          lighter: "#e0ffcd",
          light: "#73ad4e",
          DEFAULT: "#578937",
          dark: "#64844f",
          darker: "#2e5117",
        },
        light: {
          DEFAULT: "#ebf7e4",
        },
        dark: {
          DEFAULT: "#3a3a3a",
        },
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "0.5rem",
      },
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
