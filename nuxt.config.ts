// https://nuxt.com/docs/api/configuration/nuxt-config

import { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  build: {
    transpile: ['vuetify'],
  },
  css: [
    'vuetify/lib/styles/main.sass',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],
  delayHydration: {
    debug: process.env.NODE_ENV === 'development',
    mode: 'init'
  },
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxtjs/sitemap',
    '@nuxt/image', 
    'nuxt-delay-hydration',
  ],
  nitro: {
    static: true,
    prerender: {
      crawlLinks: true,
      failOnError: false, 
      routes: ['/sitemap.xml']
    },
  },
  runtimeConfig: {
    public: {},
  },
  site: {
    url: 'localhost:3000'
  },
  sitemap: {
    strictNuxtContentPaths: true,
    sources: [
      '/api/__sitemap__/urls'
    ]
  },
  typescript: {
    strict: true
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});
