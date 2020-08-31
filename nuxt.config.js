import path from 'path'
import fs from 'fs'

export default {
  mode: 'universal',
  target: 'server',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '~/assets/main.css',
    '~/assets/styles/app.scss'
  ],
  styleResources: {
    scss: [
      '~/assets/styles/app.scss'
    ]
  },
  plugins: [
    '~/plugins/index'
  ],
  components: true,
  buildModules: [
  ],
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios"
  ],
  // axios: {
  //   baseURL: 'http://localhost:57947',
  // },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },
  loading: {
    color: '#63b814',
    height: '3px'
  },
  loadingIndicator: {
    name: 'circle',
    color: '#3B8070',
    background: 'white'
  },
  server: {
    port: 9000,
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'RootCA.key')),
      cert: fs.readFileSync(path.resolve(__dirname, 'RootCA.pem'))
    }
  }
}
