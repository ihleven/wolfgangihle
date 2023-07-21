<template>
  <!-- <main class="h-screen bg-[url('/atelier.jpg')] bg-contain bg-no-repeat">
    <h1>Wolfgang ihle</h1>
    <img src="Atelier2.jpg" class="mt-32" />
  </main> -->

  <main class="grid w-screen grid-cols-4 grid-rows-6 gap-1 bg-gray-50 p-1">
    <!-- <section class="bg-ral-7035 col-span-2 flex aspect-[2/1] items-center justify-center">
      <Logo />
    </section> -->

    <nuxt-link
      to="/vita"
      class="col-span-2 col-start-3 row-span-4 bg-opacity-90 bg-[url('/portrait.jpg')] bg-cover p-4"
    >
      <h1 class="hover:text-outline text-lg font-black text-white">vita</h1>
    </nuxt-link>

    <section
      class="col-span-4 col-start-1 row-span-2 row-start-5 aspect-[] overflow-hidden bg-[url('/atelier.jpg')] bg-cover bg-no-repeat"
    >
      <nuxt-link v-if="dev" to="/kalender" class="block h-full w-full p-8">
        <!-- <h1 class="hover:text-outline text-lg font-black text-white">Kalender</h1> -->
      </nuxt-link>
    </section>

    <section
      class="col-span-2 col-start-1 row-span-2 row-start-1 aspect-square bg-[url('/Atelier2.jpg')] bg-cover bg-no-repeat"
    >
      3
      <!-- <nuxt-link
        v-if="dev"
        to="/mediathek"
        class="hover:text-outline block h-full w-full p-8 text-lg font-extralight text-white hover:font-normal"
        >Mediathek
      </nuxt-link> -->
      <!-- <dl class="text-white text-lg font-extralight hover:font-normal">
        <nuxt-link :to="'/videos'" class="text-lg font-black hover:text-shadow"
          >Arbeit</nuxt-link
        >
      </dl> -->
    </section>

    <section class="col-span-2 col-start-1 row-span-2 row-start-3 aspect-square bg-cyan-300 bg-opacity-80">4</section>
  </main>
</template>
