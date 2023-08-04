<template>
  <div>
    <header class="sticky top-0 z-10 flex items-center justify-between bg-white/80 p-2 sm:p-4 md:p-6 lg:p-8">
      <!-- <div class="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10"> -->
      <NuxtLink class="relative block px-3 py-2 transition hover:underline" to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-chevron-left"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </NuxtLink>
      <span
        ><strong>{{ route.name }}</strong></span
      >
      <!-- </div> -->
      <Navigation />
    </header>
    <main class="relative">
      <slot />
    </main>

    <footer></footer>
  </div>
</template>
<script setup>
  const route = useRoute()
  // const slug = params.slug && params.slug.length > 0 ? params.slug.join('/') : 'home'
</script>
