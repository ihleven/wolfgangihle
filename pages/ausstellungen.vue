<template>
  <main class="pb-16">
    <!-- <div class="sticky top-24">
      <h1 class="origin-bottom-right -rotate-90 bg-transparent p-2 text-right text-xl font-bold md:p-5">
        Ausstellungen
      </h1>
    </div> -->
    <div>
      <div class="sticky top-12">
        <h1 class="bg-white/90 p-2 text-xl font-bold md:p-5">Einzelausstellungen</h1>
      </div>

      <dl class="mx-auto max-w-screen-md pl-4 pr-12 text-gray-600 md:pl-8 md:pr-16">
        <template v-for="[year, exhibitions] in nachJahren" :key="year">
          <dt class="border-b border-black px-0 pb-1 pt-4 md:pt-6">{{ year }}</dt>

          <dd v-for="a in exhibitions" :key="a.id" class="mt-1.5 bg-white md:mt-2">
            <!-- <div class="flex w-12 self-start px-2">
                    <span v-if="i === 0">{{ a.jahr }}</span>
                </div> -->
            <div class="mr-auto flex-1 self-start pl-0 md:pl-4">
              <h4 class="overflow-hidden text-ellipsis text-sm text-gray-900">
                {{ a.titel }}
                <small v-if="a.untertitel" class="pl-2 text-sm font-normal text-gray-400">{{ a.untertitel }}</small>
              </h4>
              <!-- <h5 v-if="a.venue">
              {{ a.venue }}
              <span v-if="a.ort">, {{ a.ort }}</span>
            </h5> -->

              <!-- <small class="font-normal text-gray-500">{{ a.untertitel }}</small> -->

              <!-- <span class="ml-2 text-sm font-normal text-gray-400">{{ a.untertitel }}</span> -->

              <p class="overflow-hidden truncate text-sm font-light leading-none text-gray-500">
                {{ a.venue }}<span v-if="a.venue && a.ort">, </span>{{ a.ort }}
              </p>
            </div>
          </dd>
        </template>
      </dl>
    </div>

    <div class="pt-12">
      <div class="sticky top-12">
        <h1 class="bg-white/80 p-2 text-xl font-bold md:p-5">Beteiligungen</h1>
      </div>

      <dl class="mx-auto max-w-screen-md pl-4 pr-12 text-gray-600 md:pl-8 md:pr-16">
        <template v-for="[year, exhibitions] in betNachJahren" :key="year">
          <dt class="border-b border-black px-0 pb-1 pt-4 md:pt-6">{{ year }}</dt>

          <dd v-for="a in exhibitions" :key="a.id" class="mt-1.5 bg-white md:mt-2">
            <!-- <div class="flex w-12 self-start px-2">
                    <span v-if="i === 0">{{ a.jahr }}</span>
                </div> -->
            <div class="mr-auto flex-1 self-start pl-0 md:pl-4">
              <h4 class="overflow-hidden text-ellipsis text-sm text-gray-900">
                {{ a.titel }}
                <small v-if="a.untertitel" class="pl-2 text-sm font-normal text-gray-400">{{ a.untertitel }}</small>
              </h4>

              <p class="overflow-hidden truncate text-sm font-light leading-none text-gray-500">
                {{ a.venue }}<span v-if="a.venue && a.ort">, </span>{{ a.ort }}
              </p>
            </div>
          </dd>
        </template>
      </dl>
    </div>
  </main>
</template>

<script setup>
  const { data: ausstellungen } = await useFetch('/api/ausstellungen?type=EINZEL', {
    key: 'einzelausstellungen',
    headers: {
      Cookie:
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODg4MDk3OTIsIlVzZXJuYW1lIjoid29sZmdhbmcifQ._IoSIHrBkHpQXRNnyspcRVnA2eF8jPJjns8bZjQsKNA',
    },
  })
  const { data: beteiligungen } = await useFetch('/api/ausstellungen?type=B', {
    key: 'ausstellungsbeteiligungen',

    headers: {
      Cookie:
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODg4MDk3OTIsIlVzZXJuYW1lIjoid29sZmdhbmcifQ._IoSIHrBkHpQXRNnyspcRVnA2eF8jPJjns8bZjQsKNA',
    },
  })
  console.log('ausstellungen', ausstellungen.value, beteiligungen.value)
  const nachJahren = computed(() => {
    const byyears = {}
    if (ausstellungen.value) {
      ausstellungen.value.forEach(a => {
        if (a.typ === 'Einzelausstellung' || a.typ === 'Einzelausstellung mit Katalog') {
          if (a.typ === 'Einzelausstellung mit Katalog') {
            a.katalog = true
          }
          if (!byyears[a.jahr]) byyears[a.jahr] = []
          byyears[a.jahr].push(a)
          byyears[a.jahr].sort((i, j) => (i.id < j.id ? -1 : i.id === j.id ? 0 : 1))
        }
      })
    }
    // [[year, exhibitions] ... ]
    return Object.entries(byyears)
      .map(k => [k[0], k[1]])
      .sort((i, j) => (i[0] < j[0] ? 1 : i[0] === j[0] ? 0 : -1))
  })
  const betNachJahren = computed(() => {
    const byyears = {}
    if (beteiligungen.value) {
      beteiligungen.value.forEach(a => {
        // if (a.typ === 'Einzelausstellung' || a.typ === 'Einzelausstellung mit Katalog') {
        if (a.typ === 'Einzelausstellung mit Katalog') {
          a.katalog = true
        }
        if (!byyears[a.jahr]) byyears[a.jahr] = []
        byyears[a.jahr].push(a)
        byyears[a.jahr].sort((i, j) => (i.id < j.id ? -1 : i.id === j.id ? 0 : 1))
        // }
      })
    }
    // [[year, exhibitions] ... ]
    return Object.entries(byyears)
      .map(k => [k[0], k[1]])
      .sort((i, j) => (i[0] < j[0] ? 1 : i[0] === j[0] ? 0 : -1))
  })
  console.log('ausstellungen:', nachJahren)
</script>
