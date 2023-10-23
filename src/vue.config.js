module.exports = {
    css: {
      loaderOptions: {
        scss: {
          additionalData: '@import "@/assets/styles.scss";',
          implementation: require('node-sass')
        },
      },
    },
  };