<template>
  <div :id="gallery" class="">
    <ul role="list" class="grid grid-cols-2 gap-x-4 gap-y-8 p-4 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
      <li v-for="b in bilder" :key="b.id" class="relative">
        <a
          :href="`/monochrom/${b.foto.name}`"
          :data-pswp-width="b.foto.width"
          :data-pswp-height="b.foto.height"
          class="aspect-h-7 aspect-w-10 group block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100"
        >
          <img
            :src="`/monochrom/${b.foto.name}`"
            :alt="`https://tschabrun.eu/api/file/${b.foto.path}`"
            class="pointer-events-none object-cover group-hover:opacity-75"
          />
          <!-- <button type="button" class="absolute inset-0 focus:outline-none">
          <span class="sr-only">View details for {{ b.titel }}</span>
        </button> -->
        </a>
        <p class="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
          {{ b.jahr }}
        </p>
        <p class="pointer-events-none block text-sm font-light text-gray-400">
          {{ b.breite }}x{{ b.hoehe }}cm, {{ b.technik }}/{{ b.traeger }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script setup>
  import PhotoSwipeLightbox from 'photoswipe/lightbox'
  import 'photoswipe/style.css'

  const props = defineProps(['bilder', 'gallery'])

  const lightbox = ref(null)
  //   const files = computed(() => props.images.filter(i => i.image))

  onMounted(() => {
    if (!lightbox.value) {
      lightbox.value = new PhotoSwipeLightbox({
        gallery: '#' + props.gallery,
        children: 'a',
        pswpModule: () => import('photoswipe'),
      })
      lightbox.value.init()
    }
  })

  onUnmounted(() => {
    if (lightbox.value) {
      lightbox.value.destroy()
      lightbox.value = null
    }
  })
</script>
