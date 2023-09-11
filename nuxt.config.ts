// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss', '@storyblok/nuxt'],

  storyblok: {
    accessToken: process.env.STORYBLOK_TOKEN,
  },

  // tailwindcss: {
  //   // configPath: '@/tailwind.config.js',
  //   cssPath: '@/tailwind.css',
  // },

  vite: {
    optimizeDeps: { exclude: ['fsevents'] }, // wegen build-Fehler
  },

  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/png', href: '/icon.png' }],
    },
  },
})
