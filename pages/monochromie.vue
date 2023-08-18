<template>
  <main :id="gallery" ref="gallery" class="mx-auto w-screen max-w-screen-md overflow-hidden pb-32">
    <!-- <figure class="pb-4 text-sm font-light text-gray-600">
      <img src="/monochrom/665.jpeg" alt="665" class="aspect-[100/120]" />
      <caption>
        Gelb, Öl/Leinwand, 120x100cm, 2022
      </caption>
    </figure> aspect-h-7 aspect-w-10-->

    <section v-for="(b, i) in bilder" :key="i" class="w-screen pb-4">
      <figure class="flex w-full space-x-2">
        <a
          v-for="img in b.images"
          :key="img.id"
          :href="`/monochrom/${img.id}.jpeg`"
          :data-pswp-width="img.foto?.w"
          :data-pswp-height="img.foto?.h"
          :class="b.images.length == 2 ? 'w-1/2' : 'w-full'"
        >
          <img
            :src="`/monochrom/${img.id}.jpeg`"
            :alt="img.id"
            :class="img.foto.h > img.foto.w ? 'contain mx-auto max-h-[100vw]' : ''"
          />
        </a>
      </figure>
      <aside class="w-full p-2 text-center text-sm font-light text-gray-600">{{ b.caption }}</aside>
    </section>

    <!-- <hr class="h-64" />
    <BilderGallery :bilder="bilder" gallery="mono" /> -->
  </main>
</template>

<script setup>
  import PhotoSwipeLightbox from 'photoswipe/lightbox'
  import 'photoswipe/style.css'

  // const props = defineProps(['bilder', 'gallery'])
  const gallery = ref(null)
  const lightbox = ref(null)
  //   const files = computed(() => props.images.filter(i => i.image))

  onMounted(() => {
    if (!lightbox.value) {
      lightbox.value = new PhotoSwipeLightbox({
        gallery,
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

  const bilder = [
    {
      images: [{ id: 665, w: 100, h: 120, year: 2022, title: 'Gelb', tech: 'Öl/Leinwand', foto: { w: 1000, h: 1204 } }],
      caption: 'Gelb, Öl/Leinwand, 120x100cm, 2022',
    },
    {
      images: [
        { id: 656, w: 50, h: 70, year: 2022, title: 'Blau', tech: 'Öl/Leinwand', foto: { w: 2040, h: 2898 } },
        { id: 653, w: 50, h: 70, year: 2022, title: 'Blau', tech: 'Öl/Leinwand', foto: { w: 1965, h: 2804 } },
      ],
      caption: '2 x Blau, Öl/Leinwand, je 70x50cm, 2022',
    },
    {
      images: [{ id: 707, w: 150, h: 40, year: 2022, title: 'Gelb', tech: 'Öl/Leinwand', foto: { w: 1953, h: 819 } }],
      caption: 'BlauWeißRot, Öl/Leinwand, je 40x150cm, 2009',
    },
    {
      images: [{ id: 637, w: 100, h: 120, foto: { w: 3161, h: 2054 } }],
      caption: 'Grau/Grün, Öl/Leinwand, 120x200cm, zweiteilig',
    },
    {
      images: [{ id: 691, foto: { w: 3606, h: 2135 } }],
      caption: 'Lichtfülle (orange), Öl/Leinwand, 120x200cm, zweiteilig',
    },
    {
      images: [{ id: 694, foto: { w: 2554, h: 3072 } }],
      caption: 'o.T. (rot), Öl/Leinwand, 120x100cm',
    },
    {
      images: [{ id: 630, foto: { w: 319, h: 372 } }],
      caption: 'Nonett I, Öl/Leinwand, 150x120cm',
    },
    {
      images: [{ id: 670, foto: { w: 2121, h: 2779 } }],
      caption: 'Grün, Öl/Leinwand, 130x100cm',
    },
    {
      images: [{ id: 682, foto: { w: 2071, h: 2897 } }],
      caption: 'Gelb, Öl/Leinwand, 120x100cm',
    },
    {
      images: [
        { id: 262, foto: { w: 2771, h: 2820 } },
        { id: 504, foto: { w: 1000, h: 1019 } },
      ],
      caption: 'gelb - blau, Öl/Leinwand, 40x40cm / 100x100cm',
    },
    {
      images: [{ id: 496, foto: { w: 1754, h: 2148 } }],
      caption: 'Hier (I - IV), Öl/Leinwand, 120x100cm',
    },
    {
      images: [{ id: 123, foto: { w: 1554, h: 2031 } }],
      caption: 'Blau (Chatres II), Öl/Leinwand, 120x100cm',
    },
  ]
</script>
