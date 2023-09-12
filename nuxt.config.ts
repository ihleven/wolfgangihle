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
      link: [{ rel: 'icon', type: 'image/png', href: '/icon.png' }],
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
      icons: [{ src: '/icon.png', sizes: '512x512', type: 'image/png' }],
      display: 'standalone',
      start_url: '/',
    },
    // workbox: { selfDestroying: true },
    selfDestroying: true,
  },
})
