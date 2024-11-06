/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens:{
      sm: "340px",
      md: "834px",
      lg: "1440px"
    },
    extend: {},
    fontFamily: {
      manrope:["Manrope", "serif"]

    },
    container :{
      center:true,
      padding:{
        DEFAULT:"12px"
      }
    }
  },
  plugins: [],
}
