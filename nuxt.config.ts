// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    "@storyblok/nuxt"
  ],

  storyblok: {
    accessToken: "ZLCu79cX2X1mcQQ0TwHCiAtt"
  },

  vite: {
    optimizeDeps: { exclude: ['fsevents'] }, // wegen build-Fehler
  },
})
