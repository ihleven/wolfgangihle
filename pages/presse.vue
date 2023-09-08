<template>
  <main>
    <section class="mx-auto max-w-2xl sm:px-8 lg:max-w-5xl">
      <header class="max-w-2xl pb-4 pt-8 text-center">
        <h1 class="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">Aus der Presse</h1>
        <!-- <p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          Lorem ipsum dolor sit qua retro sequoidnt utset quitastet pangluest malunt.
        </p> -->
      </header>

      <ul role="list" class="grid grid-cols-1 gap-x-4 gap-y-8 p-4 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        <li>
          <h3 class="pl-2 text-xs font-light text-gray-500">
            <span class="text-sm text-gray-700">2022</span> | Ausstellung "Farben des Lebens" im C-Punkt Münsterforum
            Freiburg
          </h3>
          <div
            class="group relative block w-full overflow-hidden rounded-lg bg-white focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100"
          >
            <img
              :src="`/nurFarbeUndFläche.jpg`"
              alt=""
              class="pointer-events-none object-cover group-hover:opacity-75"
            />
          </div>
        </li>

        <!-- class="aspect-h-7 aspect-w-10 group relative block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100" -->
        <li>
          <h3 class="pl-2 text-xs font-light text-gray-500">
            <span class="text-sm text-gray-700">2016</span> | Ausstellung "Kunst Ort Kirche" in der St.
            Bartholomäus-Kirche Ortenberg
          </h3>
          <div
            class="group relative block w-full overflow-hidden rounded-lg bg-white focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100"
          >
            <img
              :src="`/presse_2016-07-19_Offenburger Tageblatt_Farben mit hohem Symbolwert.jpg`"
              alt=""
              class="pointer-events-none object-cover group-hover:opacity-75"
            />
          </div>
        </li>

        <li>
          <h3 class="pl-2 text-xs font-light text-gray-500">
            <span class="text-sm text-gray-700">1999</span> | Ausstellung im Museum im Ritterhaus Offenburg
          </h3>
          <div
            class="aspect-h-7 aspect-w-10 group relative block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100"
          >
            <img
              :src="`/presse_Farbenfrohe Bilder, die es in sich haben.jpg`"
              alt=""
              class="pointer-events-none object-cover group-hover:opacity-75"
            />
          </div>
        </li>
      </ul>
    </section>
  </main>
</template>
<script setup>
  const presse = [
    {
      id: 329,
      jahr: 2014,
      titel: 'nur Farbe und Fläche',
      gattung: 'M',
      serie_id: null,
      serie: null,
      serie_nr: 0,
      technik: 'Öl',
      traeger: 'Leinwand',
      hoehe: 65,
      breite: 90,
      tiefe: 0,
      flaeche: 0,
      anmerkungen: '',
      kommentar: '',
      phase: 'M',
      fotos: null,
      foto_id: 501,
      foto: {
        id: 501,
        nr: 0,
        name: '36A995BD-0EB9-473F-BE97-67C541E61B75.jpeg',
        size: 517908,
        uploaded: '2021-03-27T13:42:21.504649Z',
        path: 'bilder/329/36A995BD-0EB9-473F-BE97-67C541E61B75.jpeg',
        format: 'image/jpeg',
        width: 2962,
        height: 2155,
        taken: '0001-01-01T00:00:00Z',
        caption: 'b1585735062.783496',
        kommentar: '',
        labels: null,
        Serie: null,
        status: '',
      },
      teile: 0,
      modified: '2021-03-27T13:42:21.200566Z',
      status: '',
    },
  ]
</script>
