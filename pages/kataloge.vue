<template>
  <main
    class="h-screen overflow-y-auto bg-[url('assets/unsplash/bernd-klutsch-nE2HV5AUXFo-unsplash.jpg')] bg-cover bg-center bg-no-repeat"
  >
    <section class="mx-auto max-w-screen-md bg-black/25 pb-4 pt-4 backdrop-blur-sm backdrop-saturate-50">
      <article v-for="katalog in kataloge" :key="katalog.code" class="m-4 flex items-stretch gap-4">
        <a :href="katalog.href" :target="katalog.target" class="flex-1 basis-1/2">
          <img :src="katalog.thumb" :alt="katalog.name" class="object-cover object-center" :data-scroll-top="false" />
        </a>
        <label class="flex flex-1 basis-1/2 flex-col justify-start bg-black/20 px-2 text-left text-white">
          <h4 class="text-outline py-1 text-lg font-black">{{ katalog.year }}</h4>
          <!-- <h3 class="text-lg">{{ katalog.name }}</h3> -->
          <p class="text-xs font-light tracking-tighter">{{ katalog.desc }}</p>
        </label>
      </article>
    </section>

    <section class="mx-auto max-w-screen-md bg-white/25 py-4 backdrop-blur-sm backdrop-saturate-50">
      <article v-for="katalog in kataloge2" :key="katalog.code" class="m-4 flex items-stretch gap-4">
        <a :href="katalog.href" :target="katalog.target" class="flex-1 basis-1/2" :data-scroll-top="true">
          <img :src="katalog.thumb" :alt="katalog.name" class="object-cover object-center" />
        </a>
        <label class="flex flex-1 basis-1/2 flex-col justify-start bg-black/20 px-2 text-left text-white">
          <h4 class="text-outline py-1 text-lg font-black">{{ katalog.year }}</h4>
          <!-- <h3 class="text-lg">{{ katalog.name }}</h3> -->
          <p class="text-xs font-light tracking-tighter">{{ katalog.desc }}</p>
        </label>
      </article>
    </section>

    <button
      class="fixed bottom-4 right-4 block flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 shadow-lg"
      @click="scrollTop"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-chevrons-up h-8 w-8"
      >
        <!-- <polyline points="17 11 12 6 7 11"></polyline> -->
        <!-- <polyline points="17 18 12 13 7 18"></polyline> -->
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    </button>
  </main>
</template>

<script setup>
  const kataloge = [
    {
      year: 2022,
      name: 'Farben des Lebens',
      code: 'farben-des-lebens',
      file: 'C_Punkt_Ihle_Ausstellung_04_2022_A5_HU_DD.pdf',
      // href: '/katalog-farben-des-lebens.pdf', // identisch mit unterem
      href: 'https://ihle.cloud/wolfgang-ihle/Kataloge/farben-des-lebens/C_Punkt_Ihle_Ausstellung_04_2022_A5_HU_DD.pdf',
      thumb: '/katalog-farben-des-lebens.jpeg', // 'index.jpeg',
      desc: 'Katalog zur Ausstellung „Farben des Lebens“ im Münsterforum Freiburg',
      kommentar: '',
      target: '_blank',
    },

    {
      year: 2016,
      name: 'Kirche. Ort künstlerischer Aussage heute',
      code: 'kirche',
      file: 'katalog.pdf',
      href: 'https://ihle.cloud/wolfgang-ihle/Kataloge/kirche/katalog.pdf', // 'katalog-kirche.pdf',
      thumb: 'https://ihle.cloud/wolfgang-ihle/Kataloge/kirche/index.jpeg', // 'index.jpeg',
      target: '_blank',
    },

    {
      year: 2013,
      name: 'Nur Farbe',
      code: 'nur-farbe',
      file: 'katalog.pdf',
      // href: '/katalog-nur-farbe.pdf', // identisch mit unterem
      href: 'https://ihle.cloud/wolfgang-ihle/Kataloge/nur-farbe/katalog.pdf',
      thumb: '/katalog-nur-farbe-thumbnail.jpeg',
      desc: 'Katalog zur Ausstellung Galleries Ulrich Marx, Offenburg',
      target: '_blank',
    },

    // {
    //   year: 1987,
    //   name: 'Durchgang',
    //   code: 'durchgang',
    //   file: 'durchgang-gesamt.pdf',
    //   href: 'durchgang-gesamt.pdf',
    //   thumb: 'index.jpeg',
    //   desc: 'Katalog zum Projekt Durchgang',
    //   text: 'TODO',
    //   files: [
    //     { name: 'durchgang-umschlag-farbe150dpi.pdf', label: 'Umschlag' },
    //     { name: 'durchgang-1-3-text600dpi.pdf', label: 'Einleitung' },
    //     { name: 'durchgang-3-15-kunstwerke-farbe150dpi-zeitschrift-qual2.pdf', label: 'Kunstwerke' },
    //     { name: 'durchgang-16-konzept-text300dpi-ocr.pdf', label: 'Konzept' },
    //     // { name: 'durchgang-16-konzept-text600dpi-ocr.pdf'},
    //     { name: 'durchgang-17-18-bio-text300dpi-ocr.pdf', label: 'Werkliste & Künstlerbiografien' },
    //     { name: 'durchgang-20-25-fotos-farbe150dpi-zeitschrift-qual2.pdf', label: 'Fotos' },
    //     { name: 'durchgang-26-32-werbung.pdf', label: 'Werbung' },
    //     { name: 'durchgang-umschlag-hinten-farbe150dpi.pdf', label: 'Umschlag Rückseite' },
    //     // { name: 'durchgang-gesamt.pdf'},
    //     // { name: 'durchgang-katalog.pdf'},
    //   ],
    // },

    // {
    //   year: 1993,
    //   name: 'Wolfgang Ihle, Malerei',
    //   code: 'galerie-du-faisan',
    //   file: 'katalog.pdf',
    //   href: 'katalog-faisant.pdf',
    //   thumb: 'index.jpeg',
    //   desc: 'Katalog zur Ausstellung Wolfgang Ihle in der Galerie du Faisan in Strasbourg, 1993.',
    //   text: 'Der Katalog enthält den Text "Farbgedanken" von Rainer Braxmaier.',
    // },
    // // { code: 'wolfgang-ihle-malerei', label: 'Wolfgang Ihle, Malerei', year: 1999 },

    // {
    //   year: 1994,
    //   name: 'Bilder 1992-1994',
    //   code: 'bilder-1992-94',
    //   file: 'katalog.pdf',
    //   href: 'bilder-9294.pdf',
    //   thumb: 'index.jpeg',
    //   desc: 'Katalog zur Ausstellung „Bilder 1992-1994“ in der Galerie Wild',
    //   text: '"Primat des Malerischen", von Rainer Braxmaier',
    // },

    // {
    //   year: 2004,
    //   name: 'In der Malerei unterwegs',
    //   code: 'unterwegs',
    //   file: 'katalog.pdf',
    //   href: 'katalog-unterwegs.pdf',
    //   thumb: 'index.jpeg',
    //   desc: 'Katalog zur Ausstellung in der Galerie des Künstlerkreises Ortenau im Artforum Offenburg 2004: Wolfgang Ihle - "In der Malerei unterwegs"',
    //   text: 'Dr. Dorothee Höfert',
    // },

    // {
    //   year: 2006,
    //   name: 'Landschaften * Malerei',
    //   code: 'landschaften',
    //   file: 'katalog.pdf',
    //   // href: 'katalog-landschaften.pdf',
    //   thumb: 'index.jpeg',
    //   desc: 'Broschüre zur Ausstellung Landschften in der Galerie Owens',
    //   text: 'Broschüre',
    // },

    // {
    //   year: 2006,
    //   name: 'Natur / Architektur',
    //   code: 'natur-architektur',
    //   file: 'katalog.pdf',
    //   href: 'katalog-natur-architektur.pdf',
    //   thumb: 'index.jpeg',
    //   desc: 'Katalog zur Ausstellung im Kunstverein Mittleres Kinzigtal Haslach 2006: Wolfgang Ihle und Geza Csizmazia "Natur / Architektur"',
    // },
  ]

  const kataloge2 = [
    {
      year: 1999,
      name: 'Natur - Spielgel des Inneren',
      code: 'natur-spiegel-des-inneren',
      file: 'spiegel-gesamt.pdf',
      // href: 'spiegel-gesamt.pdf', // identisch mit unterem:
      href: 'https://ihle.cloud/wolfgang-ihle/Kataloge/natur-spiegel-des-inneren/spiegel-gesamt.pdf',
      thumb: 'natur-spiegel-des-inneren.jpeg',
      desc: 'Katalog zur Ausstellung im Museum im Ritterhaus, Offenburg, 1999: Wolfgang Ihle "Natur - Spiegel des Innern"',
      text: 'Den Text "Bilderfindung als Weltschöpfung" von Bernd Künzig finden sie hier als pdf-Dokument.',
      target: '_blank',

      // files: [
      //   { name: 'spiegel-0-umschlag-vorne-farbe100dpi.pdf', label: 'Umschlag vorn 100dpi' },
      //   { name: 'spiegel-0-umschlag-vorne-farbe150dpi.pdf', label: 'Umschlag vorn 150dpi' },
      //   { name: 'spiegel-1-text600dpi.pdf', label: '' },
      //   { name: 'spiegel-2-farbe100dpi.pdf', label: '' },
      //   { name: 'spiegel-21-22-farbe100dpi.pdf', label: '' },
      //   { name: 'spiegel-23-bio-text600dpi.pdf', label: '' },
      //   { name: 'spiegel-24-impressum-text600dpi.pdf', label: 'Impressum' },
      //   { name: 'spiegel-25-26-umschlag-rück-grau150dpi-farbe100dpi.pdf', label: 'Umschlag Rückseite' },
      //   { name: 'spiegel-25-umschlag-rück-innen-grau150dpi.pdf', label: 'Umschlag Rückseite' },
      //   { name: 'spiegel-3-4-künzig-text600dpi.pdf', label: 'Text "Bilderfindung als Weltschöpfung" von Bernd Künzig' },
      //   { name: 'spiegel-5-20-farbe100dpi.pdf', label: '' },
      //   // { name: 'spiegel-gesamt.pdf', label: '' },
      // ],
    },
  ]

  function scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
</script>
