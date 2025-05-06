/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'neo-pink': '#FF5F7E',
        'neo-yellow': '#FFE14D',
        'neo-blue': '#4DA8FF',
        'neo-green': '#47E185',
        'neo-black': '#1A1A1A',
        'neo-white': '#F5F5F5'
      },
      boxShadow: {
        'neo': '4px 4px 0 0 #1A1A1A',
        'neo-lg': '8px 8px 0 0 #1A1A1A',
      },
      borderWidth: {
        'neo': '3px',
      },
      fontFamily: {
        'display': ['Space Grotesk', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      animation: {
        'neo-bounce': 'neo-bounce 0.2s ease-in-out',
      },
      keyframes: {
        'neo-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      },
    },
  },
  plugins: [],
}
