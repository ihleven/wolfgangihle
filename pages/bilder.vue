<template>
  <main class="mt-16 sm:mt-32 sm:px-8">
    <div class="mx-auto max-w-7xl lg:px-8">
      <div class="relative px-4 sm:px-8 lg:px-12">
        <div class="mx-auto max-w-2xl lg:max-w-5xl">
          <div class="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
            <div v-if="false" class="lg:pl-20">
              <div class="max-w-xs px-2.5 lg:max-w-none">
                <img
                  src="~/assets/portrait.jpg"
                  alt="Wolfgang"
                  class="aspect-square w-64 rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800 lg:w-96"
                />
              </div>
            </div>
            <div class="lg:order-first lg:row-span-2">
              <h1 class="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">
                Mein Weg zur Abstraktion
              </h1>
              <div class="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                <p>
                  Mit einem kleinen Überblick über vorherige Stufen meiner Malerei möchte ich meinen malerischen Weg
                  verständlich machen. Es sind nur die Abdrücke großer Sprünge meiner Entwicklung über vier Jahrzehnte.
                  Es ist ein Weg der Abstraktion bis hin zum völligen Verzicht auf jegliche dingliche Aussage.
                </p>
                <!-- <p>
                  Schicht über Schicht, die Transparenz schafft Raum. Ein solcher Arbeitsprozess kann theoretisch
                  unendlich weiterlaufen. Es ist so die Aufgabe des Malers, den Zeitpunkt nicht zu übersehen, wenn das
                  Bild eine geschlossene Einheit bildet und seine Aussagekraft in sich trägt. Das Bild ist dann fertig.
                </p> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mx-auto mt-12 max-w-7xl lg:px-8">
      <div class="relative px-4 sm:px-8 lg:px-12">
        <div class="mx-auto max-w-2xl lg:max-w-5xl">
          <div class="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
            <div class="lg:order-first lg:row-span-2">
              <h1 class="text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-xl">
                Natur I: Landschaft & Figur
              </h1>
              <div class="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                <!-- <p>Lorem ipsum</p> -->
              </div>
            </div>
          </div>
        </div>
        <BilderGallery :bilder="natur1" gallery="n1" class="mt-8" />
      </div>
    </div>

    <div class="mx-auto mt-12 max-w-7xl lg:px-8">
      <div class="relative px-4 sm:px-8 lg:px-12">
        <div class="mx-auto max-w-2xl lg:max-w-5xl">
          <div class="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
            <!-- <div class="lg:pl-20">
              <div class="max-w-xs px-2.5 lg:max-w-none">
                <img
                  src="/Anna.jpg"
                  alt="Wolfgang"
                  class="aspect-square w-64 rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800 lg:w-96"
                />
              </div>
            </div> -->
            <div class="lg:order-first lg:row-span-2">
              <h1 class="text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-xl">
                Natur II: Abstraktion
              </h1>
              <div class="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                <!-- <p>Lorem ipsum</p> -->
              </div>
            </div>
          </div>
        </div>
        <BilderGallery :bilder="natur2" gallery="abstrakt" class="mt-8" />
      </div>
    </div>

    <div class="mx-auto mt-12 max-w-7xl lg:px-8">
      <div class="relative px-4 sm:px-8 lg:px-12">
        <div class="mx-auto max-w-2xl lg:max-w-5xl">
          <div class="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
            <!-- <div class="lg:pl-20">
              <div class="max-w-xs px-2.5 lg:max-w-none">
                <img
                  src="/Anna.jpg"
                  alt="Wolfgang"
                  class="aspect-square w-64 rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800 lg:w-96"
                />
              </div>
            </div> -->
            <div class="lg:order-first lg:row-span-2">
              <h1 class="text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-xl">
                Entgegenständlichung
              </h1>
              <div class="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                <!-- <p>Lorem ipsum</p> -->
              </div>
            </div>
          </div>
        </div>
        <BilderGallery :bilder="entg" gallery="ent" class="mt-8" />
      </div>
    </div>
  </main>
</template>

<script setup>
  const natur1 = [
    {
      id: 341,
      w: 100,
      h: 120,
      year: 1984,
      title: '',
      tech: 'Öl/Leinwand',
      foto: { w: 1000, h: 1204 },
      caption: 'Öl/Leinwand, 120x100cm, 1984',
    },
    {
      id: 10,
      w: 70,
      h: 130,
      year: 1981,
      title: 'Politikertreff',
      tech: 'Öl/Leinwand',
      foto: { w: 3929, h: 2287 },
      caption: 'Politikertreff, Öl/Leinwand, 70x130cm, 1981',
    },
    {
      id: 581,
      w: 40,
      h: 50,
      year: 1977,
      title: 'Bühlweg-Kapelle Ortenberg',
      tech: 'Öl/Leinwand',
      foto: { w: 1585, h: 1937 },
      caption: 'Bühlweg-Kapelle Ortenberg, Öl/Leinwand, 50x40cm, 1977',
    },
    {
      id: 621,
      w: 85,
      h: 100,
      year: 1983,
      title: 'Rebhühner',
      tech: 'Öl/Leinwand',
      foto: { w: 2754, h: 3211 },
      caption: 'Rebhühner, Öl/Leinwand, 100x85, 1983',
    },
  ]

  const natur2 = [
    {
      id: 327,
      w: 100,
      h: 180,
      year: 1996,
      title: 'Eines Morgens lag der Frühling in der Luft',
      tech: 'Öl/Leinwand',
      foto: { w: 1874, h: 3454 },
      caption: 'Eines Morgens lag der Frühling in der Luft, Öl/Leinwand, 180x100cm, 1996',
    },
    {
      id: 324,
      w: 100,
      h: 180,
      year: 1991,
      title: 'Kraft des Lebens I.',
      tech: 'Öl/Leinwand',
      foto: { w: 1744, h: 3083 },
      caption: 'Kraft des Lebens I., Öl/Leinwand, 180x100cm, 1991',
    },
    {
      id: 461,
      w: 100,
      h: 130,
      year: 1997,
      title: 'Himmel und Erde',
      tech: 'Öl/Leinwand',
      foto: { w: 2395, h: 3116 },
      caption: 'Himmel und Erde, Öl/Leinwand, 130x100cm, 1997',
    },
    {
      id: 279,
      w: 100,
      h: 120,
      year: 1995,
      title: 'Gelb',
      tech: 'Öl/Leinwand',
      foto: { w: 3023, h: 3222 },
      caption: 'Monument, Öl/Leinwand, 80x95cm, 1995',
    },

    {
      id: 372,
      w: 200,
      h: 180,
      year: 2002,
      title: 'o.T. (zweiteilig)',
      tech: 'Öl/Leinwand',
      foto: { w: 2739, h: 2558 },
      caption: 'o.T. (zweiteilig), Öl/Leinwand, 180x200cm, 2002',
    },
    {
      id: 462,
      w: 100,
      h: 120,
      year: 1993,
      title: 'Gelb',
      tech: 'Öl/Leinwand',
      foto: { w: 2301, h: 3213 },
      caption: 'Lichtertanz, Öl/Leinwand, 140x100cm, 1993',
    },
  ]

  const entg = [
    {
      id: 430,
      w: 160,
      h: 100,
      year: 2002,
      title: '',
      tech: 'Öl/Leinwand',
      foto: { w: 3338, h: 2150 },
      caption: 'Öl/Leinwand, 100x160cm, 2002',
    },
    {
      id: 409,
      w: 180,
      h: 100,
      year: 2006,
      title: '',
      tech: 'Öl/Leinwand',
      foto: { w: 2817, h: 1724 },
      caption: 'Öl/Leinwand, 100x180cm, 2006',
    },
    {
      id: 276,
      w: 100,
      h: 130,
      year: 2008,
      title: '',
      tech: 'Öl/Leinwand',
      foto: { w: 2415, h: 3092 },
      caption: 'Öl/Leinwand, 130x100cm, 2008',
    },
    {
      id: 381,
      w: 240,
      h: 100,
      year: 2005,
      title: '',
      tech: 'Öl/Leinwand',
      foto: { w: 2506, h: 1000 },
      caption: 'Feuerland (zweiteilig), Öl/Leinwand, 100x240cm, 2005',
    },
    {
      id: 463,
      w: 140,
      h: 120,
      year: 2008,
      title: '',
      tech: 'Öl/Leinwand',
      foto: { w: 2936, h: 2578 },
      caption: 'Öl/Leinwand, 120x140cm, 2008',
    },
    {
      id: 'IMG_1511',
      w: 21,
      h: 26,
      year: 0,
      title: '',
      tech: 'Öl/Papier',
      foto: { w: 3024, h: 4032 },
      caption: 'Öl/Papier, 26x21cm, 2010',
    },
  ]
</script>
