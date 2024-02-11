module.exports = {
    content: ['./*.html'],
    theme: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '1020px',
        xl: '1440px',
      },
      extend: {
        colors: {
          bgYellow: 'hsl(47, 88%, 63%)',
          white: 'hsl(0, 0%, 100%)',
          grey: 'hsl(0, 0%, 50%)',
          black: 'hsl(0, 0%, 7%)',
          
        },
    fontFamily: {
        'sans': ['Figtree','sans']
      }
      },
    },
    plugins: [ ],
  }
