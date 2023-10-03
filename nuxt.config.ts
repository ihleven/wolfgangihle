// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss', '@storyblok/nuxt', '@vite-pwa/nuxt'],

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
      title: 'Wolfgang Ihle | Malerei',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Die Webseite des Ortenauer Malers Wolfgang Ihle',
        },
      ],
      link: [{ rel: 'icon', type: 'image/jpeg', href: '/icon.jpg' }],
      // link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  pwa: {
    // meta: {
    //   // nativeUI: true,
    // },
    manifest: {
      id: 'wi',
      lang: 'de',
      name: 'Wolfgang Ihle',
      short_name: 'wolfgangihle',
      description: 'Wolfgang Ihles Werk im Web',
      // display: 'standalone',
      icons: [{ src: '/icon.jpg', sizes: '512x512', type: 'image/png' }],
      display: 'standalone',
      start_url: '/',
    },
    // workbox: { selfDestroying: true },
    selfDestroying: true,
  },
})
