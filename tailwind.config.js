/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2c3e50',
          light: '#3a5068',
          dark: '#1e2b39',
        },
        secondary: {
          DEFAULT: '#e74c3c',
          light: '#ec7063',
          dark: '#c0392b',
        },
        accent: {
          DEFAULT: '#3498db',
          light: '#5dade2',
          dark: '#2980b9',
        },
        success: '#2ecc71',
        warning: '#f39c12',
        error: '#e74c3c',
        light: '#ecf0f1',
      },
      fontFamily: {
        sans: [
          'Montserrat', 
          'ui-sans-serif', 
          'system-ui', 
          '-apple-system', 
          'BlinkMacSystemFont', 
          'Segoe UI',
          'Roboto',
          'sans-serif'
        ],
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      height: {
        'header': '90px',
        'header-shrink': '70px',
      },
      boxShadow: {
        'soft': '0 2px 15px rgba(0, 0, 0, 0.05)',
        'medium': '0 4px 20px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
};