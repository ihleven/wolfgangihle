<template>
  <main class="grid w-screen grid-cols-4 grid-rows-[repeat(18,_minmax(0,_1fr))] gap-1 bg-gray-50 p-1">
    <!-- bg-[url('/atelier.jpg')] bg-contain bg-no-repeat -->
    <header
      class="col-span-4 col-start-1 row-span-1 row-start-1 flex h-16 items-center justify-between border-0 border-black bg-white bg-[url('/monochromie-gelb.jpg')] bg-cover p-2 sm:p-4 md:p-6 lg:p-8"
    >
      <!-- <div class="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10"> -->
      <NuxtLink class="relative block px-3 py-2 transition hover:underline" to="/">
        <span>wolfgang<strong>ihle</strong></span>
      </NuxtLink>
      <!-- </div> -->
      <Navigation />
    </header>
    <!-- <section class="bg-ral-7035 col-span-2 flex aspect-[2/1] items-center justify-center">
      <Logo />
    </section> -->

    <nuxt-link
      to="/monochromie"
      class="col-span-2 col-start-1 row-span-2 row-start-2 flex items-end bg-[url('/monochromie.jpg')] bg-cover bg-no-repeat"
    >
      <h4 class="hover:text-outline block p-8 text-lg font-extralight text-white hover:font-normal">
        <div class="text-sm font-light">Mein Weg zur</div>
        <div class="font-extrabold">Monochromie</div>
      </h4>
    </nuxt-link>

    <nuxt-link
      to="/vita"
      class="col-span-2 col-start-3 row-span-3 row-start-2 flex items-end bg-opacity-90 bg-[url('/portrait.jpg')] bg-cover p-4"
    >
      <!-- <h1 class="hover:text-outline text-lg font-black text-white">vita</h1> -->
    </nuxt-link>

    <nuxt-link
      :to="'/ausstellungen'"
      class="col-span-2 col-start-1 row-span-1 row-start-4 bg-cyan-300 bg-opacity-80 bg-[url('/ArtforumInstall.jpg')] bg-cover"
    >
      <!-- Ausstellung Artforum -->
    </nuxt-link>

    <section
      class="col-span-4 col-start-1 row-span-3 row-start-5 flex items-end bg-[url('/IMG_1902.jpeg')] bg-cover bg-left"
    >
      <!-- drei bilder schwarz gelb blau -->
    </section>

    <section
      v-if="false"
      class="col-span-1 col-start-4 row-span-2 row-start-5 flex items-end bg-[url('/IMG_3715.jpg')] bg-cover bg-right-top bg-no-repeat"
    >
      <!-- grau rot -->
    </section>

    <section
      class="row-start-8 col-span-4 col-start-1 row-span-6 flex items-end bg-[url('/IMG_4460.jpeg')] bg-cover bg-left-bottom bg-no-repeat"
    >
      <!-- Atelier -->
      <!-- <p class="origin-top-right translate-y-full rotate-90 px-2 py-1 font-light leading-none">
        Ein lustvoll barockes Gestreite
      </p> -->
    </section>

    <section
      v-if="!open"
      class="row-start-14 col-span-4 col-start-1 row-span-2 flex items-end bg-[url('/malen-boden.jpg')] bg-cover bg-center"
    >
      <!-- Malen am Boden -->
    </section>

    <section
      v-if="false"
      class="row-start-13 col-span-2 col-start-1 row-span-2 flex items-end bg-[url('/IMG_4339.jpg')] bg-cover bg-right-top bg-no-repeat"
    >
      <!-- farben -->
    </section>

    <nuxt-link
      v-if="!open"
      to="/monochromie"
      class="row-start-16 col-span-2 col-start-1 row-span-2 flex items-end bg-[url('/IMG_1405.jpg')] bg-cover bg-right-top bg-no-repeat"
    >
      <!-- rot licht schatten -->
    </nuxt-link>

    <section
      class="flex aspect-square flex-col justify-end overflow-hidden bg-[url('/IMG_3092.jpg')] bg-cover bg-no-repeat"
      :class="
        open ? 'row-start-14 col-span-4 col-start-1 row-span-4' : 'row-start-15 col-span-2 col-start-3 row-span-2'
      "
    >
      <!-- <Dialog> -->
      <p v-if="!open" class="px-4 text-sm font-light text-white">
        Monochrom gemalte Bilder als Vorstellungswelt. Und die Farben als ihre Sprache. ...
      </p>

      <div v-else class="block p-8 text-left align-bottom text-sm font-light text-white">
        ... Sie leuchten oder reduzieren sich ins Nichts. Sie sind geworden aus künstlerischem Tun. Ohne Inhalt. Ohne
        Formgebendes. In der Logik eines Anwesendseins einer Farbe. In einer Farbe als reine Fläche oder aus eng
        beieinander liegenden Farbstufen zu einem Eins werdend. Die Antworten auf die Fragen nach dem Sinn eines solchen
        Bildes muss aus der Anschauung kommen. Aus einem reflektierenden Sehen. Ein Eintauchen in eine Vorstellungswelt.
        In einen freien Gedankenraum.

        <p class="pt-2 text-xs">(Wolfgang Ihle)</p>
      </div>
      <button class="m-1 self-end bg-transparent px-2 py-1 text-sm font-light text-white" @click="open = !open">
        {{ open ? '[ schließen ]' : '[ alles anzeigen ]' }}
      </button>
      <!-- </Dialog> -->
      <!-- <p v-if="!open" class="self-end p-2 text-sm font-light text-white">[...mehr]</p> -->
    </section>

    <section
      v-if="false"
      class="row-start-13 col-span-2 col-start-3 row-span-1 flex items-end bg-[url('/IMG_3070.jpeg')] bg-cover bg-center bg-no-repeat"
    >
      <!-- 4 kleine -->
    </section>

    <section
      v-if="false"
      class="row-start-11 col-span-2 col-start-3 row-span-2 flex items-end bg-[url('/Dietrich.jpeg')] bg-cover bg-center"
    >
      <!-- dietrich -->
    </section>

    <section
      v-if="false"
      class="col-span-2 col-start-1 row-[start_8_/_start_8] row-span-2 flex items-end bg-[url('/IMG_4132.jpeg')] bg-cover bg-center"
    >
      <!-- grün -->
    </section>
  </main>
</template>

<script setup>
  // import { ref } from 'vue'
  // import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'

  definePageMeta({
    layout: 'empty',
  })

  // const isOpen = ref(false)
  const open = ref(false)

  // function closeModal() {
  //   isOpen.value = false
  // }
  // function openModal() {
  //   isOpen.value = true
  // }
</script>
