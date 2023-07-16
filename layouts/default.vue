<template>
  <div>
    <header class="sticky top-0 z-10 flex items-center justify-between bg-white p-2 sm:p-4 md:p-6 lg:p-8">
      <!-- <div class="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10"> -->
      <NuxtLink class="relative block px-3 py-2 transition hover:underline" to="/">
        <span>wolfgang<strong>ihle</strong></span>
      </NuxtLink>
      <!-- </div> -->
      <Navigation />
    </header>
    <main class="relative">
      <slot />
    </main>

    <footer></footer>
  </div>
</template>
