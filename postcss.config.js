module.exports = {
  plugins: {
    'postcss-preset-env': {
      browsers: 'last 2 versions',
    },
    'autoprefixer':{
      browsers:['ie >= 8', 'last 4 version']
    }
  },
};