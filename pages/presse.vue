<template>
  <main>
    <section class="mx-auto max-w-screen-md sm:px-8">
      <header class="max-w-2xl pb-4 pt-8 text-center">
        <h1 class="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">Aus der Presse</h1>
        <!-- <p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          Lorem ipsum dolor sit qua retro sequoidnt utset quitastet pangluest malunt.
        </p> -->
      </header>

      <ul role="list" class="grid grid-cols-1 gap-x-4 gap-y-8 p-4">
        <li :data-scroll-top="false">
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
        <li :data-scroll-top="true">
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

        <li :data-scroll-top="true">
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

    <ScrollTopButton />
  </main>
</template>
<script setup></script>
