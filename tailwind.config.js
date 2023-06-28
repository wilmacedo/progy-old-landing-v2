/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
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
