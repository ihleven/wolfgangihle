<template>
  <div v-if="status" class="flex h-96 w-full items-center justify-center">
    <div v-if="status == 100">Bitte warten!</div>
    <div v-else-if="status == 200">Vielen Dank! Ihre Kontaktanfrage konnte erfolgreich gesendet werden.</div>
    <div v-else>Da ist etwas schief gelaufen. Die Kontaktanfrage konnte nicht gesendet werden.</div>
  </div>

  <form ref="form" :class="{ hidden: status }" @submit.prevent="submitForm">
    <input type="hidden" name="access_key" value="19e95f57-75c7-44c7-91f3-22c53264809f" />
    <!-- <input type="hidden" name="redirect" value="https://web3forms.com/success" /> -->
    <div class="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style="
            clip-path: polygon(
              74.1% 44.1%,
              100% 61.6%,
              97.5% 26.9%,
              85.5% 0.1%,
              80.7% 2%,
              72.5% 32.5%,
              60.2% 62.4%,
              52.4% 68.1%,
              47.5% 58.3%,
              45.2% 34.5%,
              27.5% 76.7%,
              0.1% 64.9%,
              17.9% 100%,
              27.6% 76.8%,
              76.1% 97.7%,
              74.1% 44.1%
            );
          "
        />
      </div>
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Kontakt</h2>
        <!-- <p class="mt-2 text-lg leading-8 text-gray-600">
          Aute magna irure deserunt veniam aliqua magna enim voluptate.
        </p> -->
      </div>

      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div class="sm:col-span-2">
          <label for="name" class="block text-sm font-semibold leading-6 text-gray-900">Ihr Name:</label>
          <div class="mt-2.5">
            <input
              type="text"
              name="name"
              autocomplete="full-name"
              class="block w-full rounded-md border px-3.5 py-2 text-gray-900 shadow-sm ring-inset ring-sky-300 placeholder:text-gray-400 focus:border-0 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div class="sm:col-span-2">
          <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email</label>
          <div class="mt-2.5">
            <input
              type="email"
              name="email"
              autocomplete="email"
              class="block w-full rounded-md border px-3.5 py-2 text-gray-900 shadow-sm ring-inset ring-sky-300 placeholder:text-gray-400 focus:border-0 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div class="sm:col-span-2">
          <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">Message</label>
          <div class="mt-2.5">
            <textarea
              name="message"
              rows="4"
              class="block w-full rounded-md border px-3.5 py-2 text-gray-900 shadow-sm ring-inset ring-sky-300 placeholder:text-gray-400 focus:border-0 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>
      <div class="mt-10">
        <button
          type="submit"
          class="block w-full rounded-md bg-sky-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
        >
          Kontaktanfrage abschicken
        </button>
      </div>
    </div>
  </form>
</template>

<script setup>
  const form = ref(null)
  const status = ref(null)

  function submitForm(e) {
    e.preventDefault()
    const formData = new FormData(form.value)
    const object = Object.fromEntries(formData)
    const json = JSON.stringify(object)
    status.value = 100

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    })
      .then(async response => {
        const json = await response.json()
        status.value = response.status
        console.log('response:', response.status, json.message)
      })
      .catch(error => {
        status.value = 500
        console.log(error)
      })
      .then(function () {
        form.value.reset()
        setTimeout(() => {
          status.value = undefined
        }, 10000)
      })
  }
</script>
