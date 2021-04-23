import i18n from './config/i18n'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Віпассана. Медитація ретрит "Занурення у тишу"',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/sass/variables.sass',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-agile.js', mode: 'client' },
    { src: '~/plugins/vue-carousel.js', mode: 'client' },
    { src: '~/plugins/emailjs.js', mode: 'client' },
    { src: '~/plugins/animation.js', mode: 'client' },
    { src: '~/plugins/jarallax.js', mode: 'client' },
    { src: '~/plugins/directives.js', mode: 'client' },
    { src: '~/plugins/parallax.js', mode: 'client' },
    { src: '~/plugins/amplify.js', mode: 'client' },
    
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    [
      'nuxt-i18n',
      {
        defaultLocale: 'ru',
        seo: true,
        locales: [
          {
             code: 'ua',
             name: 'Ukrainian',
             iso: 'ua-UKR'
          },
          {
             code: 'ru',
             name: 'Russian',
             iso: 'ru-RUS'
          }
        ],
        vueI18n: i18n
      }
     ]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/svg',
    ['vue-scrollto/nuxt', { 
      duration: 1200, 
      offset: -100,
      easing: 'ease-out'
    }]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  styleResources: {
    sass: [
        '~/assets/sass/mixins.sass',
        '~/assets/sass/variables.sass',
        '~/assets/sass/base.sass',
        '~/assets/sass/typography.sass',
        '~/assets/sass/utils.sass',
        '~/assets/sass/animations.sass',
        '~/assets/sass/common.sass',
        '~/assets/sass/overrides.sass',
        
    ]
  }
}