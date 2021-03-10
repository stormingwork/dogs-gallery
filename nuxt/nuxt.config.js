
export default {
  srcDir: 'src/',

  head: {
    title: 'Dogs Gallery',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      }
    ],
  },

  plugins: [
    { src: '~/plugins/vuelazyload.js' }
  ]
}
