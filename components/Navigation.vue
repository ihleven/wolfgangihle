<template>
  <nav class="pointer-events-auto hidden w-auto backdrop-blur-none md:block">
    <!--   -->
    <ul
      class="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur"
    >
      <li v-for="(href, label) in nav" :key="label">
        <NuxtLink class="relative block px-3 py-2 transition hover:text-teal-500" :to="href">
          {{ label }}
          <span
            class="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0"
          />
        </NuxtLink>
      </li>
    </ul>
  </nav>

  <Popover v-slot="{ open }" class="relative z-10 block md:hidden">
    <PopoverPanel v-if="open" v-slot="{ close }" class="fixed inset-0 bg-green-300 bg-[url('/monochromie-gelb.jg')]">
      <div
        class="wrap z-100 bg-red fixed relative left-0 top-0 mx-auto flex h-full w-full flex-col items-start items-stretch justify-start p-8 px-4 px-8"
      >
        <!-- <nav class="flex flex-col items-stretch font-heading  text-3xl text-white"> -->
        <div class="mb-10 flex items-center justify-between">
          <a v-if="false" href="/" aria-label="Dizzie" class="md:text-red inline-block text-pink-100">
            <svg viewBox="0 0 1432.7 674.07" width="89" height="42" fill="currentColor" aria-hidden="">
              <path
                d="M216.79,241.55c-21.21-28.28-53.73-45.72-91.9-45.72C54.2,195.83,0,259,0,341.93,0,424.4,54.2,484.25,124.89,484.25c42.88,0,76.82-18.85,98-50.42V475.3h89.54V107.7H216.79Zm-57.5,160.7c-33.46,0-59.38-28.28-59.38-62.21,0-35.35,25.92-62.21,59.38-62.21s60.8,26.86,60.8,62.21C220.09,374,192.75,402.25,159.29,402.25Z"
              ></path>
              <path
                d="M793.43,204.79c90.72-58.69,158.23-87.24,158.23-87.24,3.71-1.71,7.19-3.23,10.56-4.67,16.53-28,16.88-51.5,1.15-77.59C942.05,42.35,918,52.93,891,67.15c-75.35,39.63-165.18,103.42-253,179.6C555.16,318.7,483,394,433.24,460.34q-4.39,5.85-8.56,11.59C363.08,557.28,348.12,616,379,651.55c13,15,31.5,22.52,55.06,22.52,32.5,0,74.76-13.92,129.2-42.55s116.63-70.06,180-119.57H683.79C577.83,576.79,481,628,439.38,628c-28,0-31-23.17,5-80.93C460,522,476.68,498.09,494.11,475.3H676l53.36-80.12h-167C617.54,336.7,676,287.75,730.47,248.05l.44,36.85h108L714.47,475.3h263.7l.13-80.12H869.05L984.49,204.79Z"
              ></path>
              <rect x="1009.02" y="204.78" width="95.67" height="270.52"></rect>
              <path
                d="M1432.7,340.51c0-85.77-64.56-148-147.51-148-93.31,0-155,60.32-155,147.51,0,86.72,61.27,147.51,170.13,147.51,57.5,0,102.27-18.85,131.49-44.3l-51.37-55.14c-20.27,15.55-42.89,26.39-77.29,26.39-38.18,0-63.16-13.66-70.69-47.59H1432.7Zm-198.88-30.63c7.07-26.87,24-41.94,50-41.94,25.44,0,41.94,15.07,49,41.94Z"
              ></path>
              <path
                d="M1129.77,139.16c-32.18-45.06-29.41-87.7,0-131.57h0a4.62,4.62,0,0,0,0-5.92,2.11,2.11,0,0,0-.19-.23l-.11-.12h0l0,0-.08-.07a4.62,4.62,0,0,0-6.05-.2c-22.43,15.1-44.56,23.19-66.85,23.19-21.3,0-42.75-7.39-64.78-23.13a4.61,4.61,0,0,0-3-1.08,4.67,4.67,0,0,0-2.49.72h0l-.34.25-.09.08-.24.2-.16.17-.14.14-.22.26a.21.21,0,0,1-.06.08,4.66,4.66,0,0,0,.21,5.74c32.18,45.05,29.43,87.7-.05,131.56h0a4.62,4.62,0,0,0,0,5.91h0a2.11,2.11,0,0,0,.19.23l.14.13.09.09a4.61,4.61,0,0,0,6,.2c22.45-15.09,44.58-23.18,66.87-23.18,21.29,0,42.74,7.38,64.76,23.13h0a4.64,4.64,0,0,0,5.44.37s0,0,0,0l.33-.22.1-.09.23-.2.16-.16.14-.15.21-.25s0-.07.06-.08l.25-.38A4.61,4.61,0,0,0,1129.77,139.16Z"
              ></path>
              <path
                d="M616.15,221.51q9.75-8.47,19.55-16.72H471.12V284.9h75.63C568.84,263.66,592,242.44,616.15,221.51Z"
              ></path>
              <path
                d="M397.58,452.37c13.17-18.23,28.09-37.2,44.48-56.62v-191H346.39V475.3h35.13C387.72,466.06,393.35,458.25,397.58,452.37Z"
              ></path>
            </svg>
          </a>
          <NuxtLink class="relative block px-3 py-2 transition hover:underline" to="/" @click="close">
            <span>wolfgang<strong>ihle</strong></span>
          </NuxtLink>
        </div>
        <!-- </nav> -->
        <!-- <nav class=" font-heading text-3xl text-white">
                    <a class="block" href="/mission">Mission</a>
                </nav> -->
        <nav v-for="(href, label) in nav" :key="label" @click="close">
          <NuxtLink class="font-heading text-3xl leading-relaxed text-white" :to="href">
            {{ label }}
            <span
              class="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0"
            />
          </NuxtLink>
        </nav>
      </div>
    </PopoverPanel>

    <PopoverButton
      class="z-100 focus:none group flex items-center rounded-full bg-white/90 px-2 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur"
    >
      <!-- <ChevronDownIcon className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400" /> -->
      <svg
        v-if="open"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        class="h-6 w-6"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        class="h-6 w-6 stroke-zinc-500 group-hover:stroke-zinc-700"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
      </svg>
    </PopoverButton>
  </Popover>
</template>

<script setup>
  import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'

  const nav = {
    monochromie: '/monochromie',
    abstraktion: '/bilder',
    vita: '/vita',
    // werk: '/werk',
    ausstellungen: '/ausstellungen',
    texte: '/texte',
    presse: '/presse',
    kataloge: '/kataloge',
    kontakt: '/kontakt',
  }
</script>
