const colors = require('tailwindcss/colors');
const withMT = require('@material-tailwind/react/utils/withMT');
module.exports = withMT({
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      xs: '320px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      backgroundImage: {
        'card-background-1': "url('/back1.svg')",
        'card-background-2': "url('/back2.svg')",
      },
      colors: {
        ...colors,
        'bg-primary-light': '#fff',
        'bg-primary-dark': '#000',
        logo: '#009B71',
        logoWhite: '#f4f2f9',
        greenDark: '#1a5336',
        greenMedium: '#038203',
        greenLight: '#008a00',
        grey: '#cbd5e1',
        green20: '#059669',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    //https://tailwindcss.com/docs/plugins#official-plugins
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
});
