// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    "@storyblok/nuxt"
  ],

  storyblok: {
    accessToken: process.env.STORYBLOK_TOKEN
  },

  vite: {
    optimizeDeps: { exclude: ['fsevents'] }, // wegen build-Fehler
  },
})
