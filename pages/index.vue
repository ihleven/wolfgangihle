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
      class="col-span-3 col-start-1 row-span-2 row-start-5 flex items-end bg-[url('/IMG_1902.jpeg')] bg-contain bg-left"
    >
      <!-- drei bilder schwarz gelb blau -->
    </section>

    <section
      class="col-span-1 col-start-4 row-span-2 row-start-5 flex items-end bg-[url('/IMG_3715.jpg')] bg-cover bg-right-top bg-no-repeat"
    >
      <!-- grau rot -->
    </section>

    <section
      class="col-span-2 col-start-1 row-span-2 row-start-7 flex items-end bg-[url('/IMG_2358.jpeg')] bg-contain bg-left bg-no-repeat"
    >
      <!-- barock -->
      <p class="origin-top-right translate-y-full rotate-90 px-2 py-1 font-light leading-none">
        Ein lustvoll barockes Gestreite
      </p>
    </section>

    <section
      class="col-span-2 col-start-3 row-span-1 row-start-7 flex items-end bg-[url('/malen-boden.jpg')] bg-cover bg-center"
    >
      <!-- Malen am Boden -->
    </section>

    <nuxt-link
      to="/monochromie"
      class="row-start-10 col-span-2 col-start-3 row-span-2 flex items-end bg-[url('/IMG_1405.jpg')] bg-cover bg-right-top bg-no-repeat"
    >
      <!-- rot licht schatten -->
    </nuxt-link>

    <section
      class="row-start-12 col-span-2 col-start-1 row-span-2 flex items-end bg-[url('/IMG_4339.jpg')] bg-cover bg-right-top bg-no-repeat"
    >
      <!-- farben -->
    </section>

    <section
      class="row-start-10 col-span-2 col-start-3 row-span-2 flex aspect-square items-end overflow-hidden bg-[url('/IMG_3092.jpg')] bg-cover bg-no-repeat"
    >
      <Dialog>
        <p class="block p-8 text-left align-bottom text-sm font-light text-white">
          Monochrome Bilder als Vorstellungswelt. Farben als Sprache&nbsp;...
        </p>
      </Dialog>
    </section>

    <section
      class="row-start-12 col-span-2 col-start-1 row-span-1 flex items-end bg-[url('/IMG_3070.jpeg')] bg-cover bg-center bg-no-repeat"
    >
      <!-- 4 kleine -->
    </section>

    <section
      class="row-start-11 col-span-2 col-start-3 row-span-2 flex items-end bg-[url('/Dietrich.jpeg')] bg-cover bg-center"
    >
      <!-- dietrich -->
    </section>

    <section
      class="col-span-2 col-start-1 row-[start_8_/_start_8] row-span-2 flex items-end bg-[url('/IMG_4132.jpeg')] bg-cover bg-center"
    >
      <!-- grün -->
    </section>
  </main>
</template>

<script setup>
  definePageMeta({
    layout: 'empty',
  })
</script>
