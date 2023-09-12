// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss', '@storyblok/nuxt'],

  storyblok: {
    accessToken: process.env.STORYBLOK_TOKEN,
  },

  tailwindcss: {
    cssPath: '@/tailwind.css', // default: '~/assets/css/tailwind.css',
    // configPath: '@/tailwind.config.js', // default: 'tailwind.config',
    // exposeConfig: false,
    // exposeLevel: 2,
    // config: {},
    // injectPosition: 'first',
    // viewer: true,
  },

  vite: {
    optimizeDeps: { exclude: ['fsevents'] }, // wegen build-Fehler
  },

  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/png', href: '/icon.png' }],
    },
  },
})
