/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Lato: ['Lato', 'sans-serif'],
      },
      colors: {
        primary: "#FFEFBD",
        seccondary: "#FA6037"
      },
      animation: {
        'bounce-soft': 'bounce-soft 4s ease-in-out infinite',
        fade: "fadeIn 0.5s ease-in forwards",
        slide: "slideUp 0.5s ease-out forwards",
        fadeUp: 'fadeUp 0.7s ease-out forwards',
        'spin-slow': 'spin 10s linear infinite',
        floatStar: "floatStar 2.5s ease-in-out infinite",
      },
      keyframes: {
        'bounce-soft': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-7px)' }, // pelan dan pendek
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeUp: {
        '0%': { opacity: 0, transform: 'translateY(24px)' },
        '100%': { opacity: 1, transform: 'translateY(0)' }
        },
      },
       boxShadow: {
        'bottom-card-custom': '0 12px 0 -4px rgba(0, 0, 0, 100)' // lo bisa atur nilai ini sesuai selera
      },

    },
  },
  plugins: [],
}
