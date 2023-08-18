<template>
  <main class="mx-auto w-screen max-w-screen-md overflow-hidden pb-32">
    <!-- <figure class="pb-4 text-sm font-light text-gray-600">
      <img src="/monochrom/665.jpeg" alt="665" class="aspect-[100/120]" />
      <caption>
        Gelb, Öl/Leinwand, 120x100cm, 2022
      </caption>
    </figure> -->

    <section v-for="(b, i) in bilder" :key="i" class="w-screen pb-4">
      <figure class="flex w-full space-x-2">
        <img
          v-for="img in b.images"
          :key="img.id"
          :src="`/monochrom/${img.id}.jpeg`"
          :alt="img.id"
          :class="b.images.length == 2 ? 'w-1/2' : 'w-full'"
        />
      </figure>
      <aside class="w-full p-2 text-sm font-light text-gray-600">{{ b.caption }}</aside>
    </section>

    <!-- <hr class="h-64" />
    <BilderGallery :bilder="bilder" gallery="mono" /> -->
  </main>
</template>

<script setup>
  const bilder = [
    {
      images: [{ id: 665, w: 100, h: 120, year: 2022, title: 'Gelb', tech: 'Öl/Leinwand' }],
      caption: 'Gelb, Öl/Leinwand, 120x100cm, 2022',
    },
    {
      images: [
        { id: 656, w: 50, h: 70, year: 2022, title: 'Blau', tech: 'Öl/Leinwand' },
        { id: 653, w: 50, h: 70, year: 2022, title: 'Blau', tech: 'Öl/Leinwand' },
      ],
      caption: '2 x Blau, Öl/Leinwand, je 70x50cm, 2022',
    },
    {
      images: [{ id: 707, w: 150, h: 40, year: 2022, title: 'Gelb', tech: 'Öl/Leinwand' }],
      caption: 'BlauWeißRot, Öl/Leinwand, je 40x150cm, 2009',
    },
    {
      images: [{ id: 637 }],
      caption: 'Grau/Grün, Öl/Leinwand, 120x200cm, zweiteilig',
    },
    {
      images: [{ id: 691 }],
      caption: 'Lichtfülle (orange), Öl/Leinwand, 120x200cm, zweiteilig',
    },
    {
      images: [{ id: 694 }],
      caption: 'o.T. (rot), Öl/Leinwand, 120x100cm',
    },
    {
      images: [{ id: 630 }],
      caption: 'Nonett I, Öl/Leinwand, 150x120cm',
    },
    {
      images: [{ id: 670 }],
      caption: 'Grün, Öl/Leinwand, 130x100cm',
    },
    {
      images: [{ id: 682 }],
      caption: 'Gelb, Öl/Leinwand, 120x100cm',
    },
    {
      images: [{ id: 262 }, { id: 504 }],
      caption: 'gelb - blau, Öl/Leinwand, 40x40cm / 100x100cm',
    },
    {
      images: [{ id: 496 }],
      caption: 'Hier (I - IV), Öl/Leinwand, 120x100cm',
    },
    {
      images: [{ id: 123 }],
      caption: 'Blau (Chatres II), Öl/Leinwand, 120x100cm',
    },
  ]
</script>
