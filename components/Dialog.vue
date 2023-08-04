<template>
  <div class="flex items-center justify-center">
    <button
      type="button"
      class="rounded-md text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      @click="openModal"
    >
      <slot />
    </button>
  </div>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" class="relative z-10" @close="closeModal">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
                Monochrom gemalte Bilder als Vorstellungswelt. Und die Farben als ihre Sprache ...
              </DialogTitle>
              <div class="mt-2">
                <p class="text-sm text-gray-500">
                  ... Sie leuchten oder reduzieren sich ins Nichts. Sie sind geworden aus künstlerischem Tun. Ohne
                  Inhalt. Ohne Formgebendes. In der Logik eines Anwesendseins einer Farbe. In einer Farbe als reine
                  Fläche oder aus eng beieinander liegenden Farbstufen zu einem Eins werdend. Die Antworten auf die
                  Fragen nach dem Sinn eines solchen Bildes muss aus der Anschauung kommen. Aus einem reflektierenden
                  Sehen. Ein Eintauchen in eine Vorstellungswelt. In einen freien Gedankenraum.
                </p>
              </div>

              <div class="mt-4">
                <!-- <button
                  type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  @click="closeModal"
                >
                  Got it, thanks!
                </button> -->
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
  import { ref } from 'vue'
  import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'

  const isOpen = ref(false)

  function closeModal() {
    isOpen.value = false
  }
  function openModal() {
    isOpen.value = true
  }
</script>
