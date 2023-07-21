<template>
  <main class="grid w-screen grid-cols-4 grid-rows-[repeat(8,_minmax(0,_1fr))] gap-1 bg-gray-50 p-1">
    <!-- bg-[url('/atelier.jpg')] bg-contain bg-no-repeat -->
    <header
      class="col-span-4 col-start-1 row-span-1 row-start-1 flex items-center justify-between border border-black bg-white p-2 sm:p-4 md:p-6 lg:p-8"
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
      to="/vita"
      class="col-span-2 col-start-3 row-span-3 row-start-2 flex items-end bg-opacity-90 bg-[url('/portrait.jpg')] bg-cover p-4"
    >
      <!-- <h1 class="hover:text-outline text-lg font-black text-white">vita</h1> -->
    </nuxt-link>

    <section
      class="col-span-4 col-start-1 row-span-2 row-start-5 aspect-[] overflow-hidden bg-[url('/atelier.jpg')] bg-cover bg-no-repeat"
    >
      <nuxt-link v-if="dev" to="/kalender" class="block h-full w-full p-8">
        <!-- <h1 class="hover:text-outline text-lg font-black text-white">Kalender</h1> -->
      </nuxt-link>
    </section>
    <nuxt-link
      :to="'/ausstellungen'"
      class="col-span-2 col-start-1 row-span-1 row-start-4 bg-cyan-300 bg-opacity-80 bg-[url('/ArtforumInstall.jpg')] bg-cover"
    >
    </nuxt-link>
    <nuxt-link
      to="/monochromie"
      class="col-span-2 col-start-1 row-span-2 row-start-2 flex aspect-square items-end bg-[url('/monochromie.jpg')] bg-cover bg-no-repeat"
    >
      <h4 class="hover:text-outline block p-8 text-lg font-extralight text-white hover:font-normal">
        <div class="text-sm font-light">Mein Weg zur</div>
        <div class="font-extrabold">Monochromie</div>
      </h4>
    </nuxt-link>

    <nuxt-link
      to="/monochromie"
      class="col-span-4 col-start-1 row-span-2 row-start-7 flex items-end bg-[url('/Atelier2.jpg')] bg-cover bg-no-repeat"
      >8</nuxt-link
    >
  </main>
</template>

<script setup>
  definePageMeta({
    layout: 'empty',
  })
</script>
