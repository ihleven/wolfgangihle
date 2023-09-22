<template>
  <button
    class="fixed bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 shadow-lg"
    :class="visibility ? 'block' : 'hidden'"
    @click="scrollTop"
  >
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-chevrons-up h-8 w-8"
    >
      <!-- <polyline points="17 11 12 6 7 11"></polyline> -->
      <!-- <polyline points="17 18 12 13 7 18"></polyline> -->
      <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
  </button>
</template>

<script setup>
  const { scrollTop, visibility } = useScrollTop()
</script>
