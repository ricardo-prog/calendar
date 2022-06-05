module.exports = {
  content: [],
  theme: {
    extend: {
      backgroundColor: theme => ({
      ...theme('colors'),
         'primary': '#e2dede',
         'secondary': '#8FA206',
         'terciary': '#61AEC9'
      }),
      textColor: {
        'primary': '#CC2D4A',
       'secondary': '#8FA206',
       'terciary': '#61AEC9'
      },
    },
  },
  plugins: [],
}
