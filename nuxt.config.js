export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || 'Fun quotes',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'Fun quotes',
        name: 'A log of fun quotes from a sign near my home.',
        content: process.env.npm_package_description || 'A log of fun quotes from a sign near my home.',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/icon.png' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: [],

  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/pwa',
  ],
  /*
  ** meta options
  */
  pwa: {
    meta: {
      name:"Fun quotes",
      description:"A log of fun quotes from a sign near my home.",
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
};
