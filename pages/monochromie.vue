<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<template>
  <BilderGallery :bilder="bilder" gallery="mono" />
  <!-- <ul role="list" class="grid grid-cols-2 gap-x-4 gap-y-8 p-4 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
    <li v-for="b in bilder" :key="b.id" class="relative">
      <div
        class="aspect-h-7 aspect-w-10 group block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100"
      >
        <img
          :src="`/monochrom/${b.foto.name}`"
          :alt="`https://tschabrun.eu/api/file/${b.foto.path}`"
          class="pointer-events-none object-cover group-hover:opacity-75"
        />
        
      </div>
      <p class="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
        {{ b.jahr }}
      </p>
      <p class="pointer-events-none block text-sm font-normal text-gray-500">
        {{ b.breite }}x{{ b.hoehe }}cm, {{ b.technik }} / {{ b.traeger }}
      </p>
    </li>
  </ul> -->
</template>

<script setup>
  const { data: bilder } = await useFetch('/api/monochromie')
</script>
