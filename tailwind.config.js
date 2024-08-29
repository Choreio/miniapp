/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes:{
        jiggle: {
          '0%, 50%': { transform: 'translateX(-5px)' },
          '25%, 75%': { transform: 'translateX(5px)' },
          '100%':{ transform: 'translateX(0)' }
        },
        bottomToTop:{
          '0%': {transform: 'translateY(100%)',opacity:0},
          '100%':{transform: 'translateY(0)', opacity:1}
        },
        topToBottom:{
          '0%': {transform: 'translateY(0)', opacity:1},
          '100%':{transform: 'translateY(100%)', opacity:0}
        },

        rightToLeft:{
          '0%': {transform: 'translateX(100%)',opacity:0},
          '100%':{transform: 'translateX(0)', opacity:1}
        },
        leftToLeft:{
          '0%': {transform: 'translateX(0)',opacity:0},
          '100%':{transform: 'translateX(-100%)', opacity:1}
        }

      },
      animation:{
        jiggle: 'jiggle 0.5s ease-in-out',
        bottomAppear:'bottomToTop 0.4s ease-in',
        bottomDisappear:'topToBottom 0.4s ease-in',

        rightAppear:"rightToLeft 0.3s ease-in",
        leftDisappear:"leftToLeft 0.3s ease-in"
      }
    },
  },
  plugins: [],
}

