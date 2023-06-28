/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      gray: {
        100: '#E7E9ED',
        200: '#E2E4E3',
        800: '#475467',
      },
      blue: {
        400: '#3E6BF7',
      },
      white: '#fff',
      black: '#000',
    },
    extend: {
      keyframes: {
        navbarMenuIn: {
          '0%': { transform: 'translateY(-1rem)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        navbarMenuOut: {
          '0%': { transform: 'translateY(0)', opacity: 1 },
          '100%': { transform: 'translateY(-1rem)', opacity: 0 },
        },
      },
      animation: {
        'navbar-in': 'navbarMenuIn 0.5s ease',
        'navbar-out': 'navbarMenuOut 0.5s ease',
      },
    },
  },
  plugins: [],
};
