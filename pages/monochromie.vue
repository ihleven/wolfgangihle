<template>
  <main :id="gallery" ref="gallery" class="mx-auto mt-12 w-screen max-w-screen-md overflow-hidden pb-32 sm:mt-16">
    <!-- <figure class="pb-4 text-sm font-light text-gray-600">
      <img src="/monochrom/665.jpeg" alt="665" class="aspect-[100/120]" />
      <caption>
        Gelb, Öl/Leinwand, 120x100cm, 2022
      </caption>
    </figure> aspect-h-7 aspect-w-10-->

    <section v-for="(b, i) in bilder" :key="i" class="w-full pb-4">
      <figure class="flex w-full space-x-2" :data-scroll-top="i >= 1">
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

    <ScrollTopButton />
  </main>
</template>

<script setup>
  import PhotoSwipeLightbox from 'photoswipe/lightbox'
  import 'photoswipe/style.css'

  const gallery = ref(null)
  const lightbox = ref(null)

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
      caption: 'BlauWeißRot (dreiteilig), Öl/Leinwand, 40x150cm, 2009',
    },
    {
      images: [{ id: 637, w: 100, h: 120, foto: { w: 3161, h: 2054 } }],
      caption: 'Grau/Grün, Öl/Leinwand, 120x200cm, zweiteilig, 2009',
    },
    {
      images: [{ id: 691, foto: { w: 3606, h: 2135 } }],
      caption: 'Lichtfülle (orange), Öl/Leinwand, 120x200x4cm, zweiteilig, 2012/14',
    },
    {
      images: [{ id: 694, foto: { w: 2554, h: 3072 } }],
      caption: 'ohne Titel, Öl/Leinwand, 120x100cm, 2018',
    },
    {
      images: [{ id: 630, foto: { w: 319, h: 372 } }],
      caption: 'Nonett I, Öl/Leinwand, 150x120cm, 2012',
    },
    {
      images: [{ id: 670, foto: { w: 2121, h: 2779 } }],
      caption: 'Grün, Öl/Leinwand, 130x100cm, 2014',
    },
    {
      images: [{ id: 682, foto: { w: 2071, h: 2897 } }],
      caption: 'Gelb, Öl/Leinwand, 120x100cm, 2014',
    },
    {
      images: [
        { id: 262, foto: { w: 2771, h: 2820 } },
        { id: 504, foto: { w: 1000, h: 1019 } },
      ],
      caption: 'gelb - blau, Öl/Leinwand, je 40x40cm, 2018',
    },
    {
      images: [{ id: 126, foto: { w: 2727, h: 2197 } }],
      caption: 'Erhabenheit, Öl/Leinwand, 120x150cm, 2015',
    },
    {
      images: [{ id: 496, foto: { w: 1754, h: 2148 } }],
      caption: 'Hier IV. (I - IV), Öl/Leinwand, 120x100cm, 2020',
    },
    {
      images: [{ id: 123, foto: { w: 1554, h: 2031 } }],
      caption: 'Blau (Chartres II), Öl/Leinwand, 130x100cm, 2015',
    },
  ]
</script>
