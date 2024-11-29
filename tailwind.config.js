/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navbar: {
          background: "#18253C",
          bglight: "#233857",
          txt: "#EBEBEA",
          search: "#F0B365",
        },
        body: {
          background: "#E3E6E6",
          imagebg: "#f8f8f7",
        },
        footer: {
          background: "#18253C",
          darkbg: "#181A22",
        },
        button: {
          cart: "#FFE14B",
        },
        modal: {
          bg: "#00000033",
        },
      },
    },
  },
  plugins: [],
};
