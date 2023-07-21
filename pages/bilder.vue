<template>
  <main class="mt-16 sm:mt-32 sm:px-8">
    <div class="mx-auto max-w-7xl lg:px-8">
      <div class="relative px-4 sm:px-8 lg:px-12">
        <div class="mx-auto max-w-2xl lg:max-w-5xl">
          <div class="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
            <div v-if="false" class="lg:pl-20">
              <div class="max-w-xs px-2.5 lg:max-w-none">
                <img
                  src="~/assets/portrait.jpg"
                  alt="Wolfgang"
                  class="aspect-square w-64 rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800 lg:w-96"
                />
              </div>
            </div>
            <div class="lg:order-first lg:row-span-2">
              <h1 class="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                Der Weg zur Abstraktion
              </h1>
              <div class="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                <p>
                  Mit einem kleinen Überblick über vorherige Stufen meiner Malerei möchte ich meinen malerischen Weg
                  verständlich machen. Es sind nur die Abdrücke großer Sprünge meiner Entwicklung über vier Jahrzehnte.
                  Es ist ein Weg der Abstraktion bis hin zum völligen Verzicht auf jegliche dingliche Aussage.
                </p>
                <p>
                  Schicht über Schicht, die Transparenz schafft Raum. Ein solcher Arbeitsprozess kann theoretisch
                  unendlich weiterlaufen. Es ist so die Aufgabe des Malers, den Zeitpunkt nicht zu übersehen, wenn das
                  Bild eine geschlossene Einheit bildet und seine Aussagekraft in sich trägt. Das Bild ist dann fertig.
                </p>
              </div>
            </div>
            <!-- <div class="lg:pl-20">
              <ul role="list">
                <li class="flex">
                  <span class="inline-block shrink-0 basis-24 whitespace-nowrap">1941</span> in Baden-Baden geboren
                </li>
                <li class="flex">
                  <span class="inline-block shrink-0 basis-24 whitespace-nowrap">1962 - 1964</span> Abstraktion
                </li>
                <li class="flex">
                  <span class="inline-block shrink-0 basis-24 whitespace-nowrap">1964 - 1997</span> Lehrer an der Grund-
                  und Hauptschule Oberharmersbach & Ortenberg/Baden
                </li>
                <li class="flex">
                  <span class="inline-block shrink-0 basis-24 whitespace-nowrap">1972 - 1994</span> Fachberater für
                  Bildende Kunst beim Schulamt Offenburg
                </li>
                <li class="flex">
                  <span class="inline-block shrink-0 basis-24 whitespace-nowrap">1976 - 1984</span> Internationale
                  Sommerakademie für Bildende Kunst in Salzburg, <br />Studienaufenthalte in Millstätt/Kärnten
                </li>
                <li class="flex">
                  <span class="inline-block shrink-0 basis-24 whitespace-nowrap">1985</span> Förderpreis der Sparkasse
                  Karlsruhe
                </li>
                <li class="flex">
                  <span class="inline-block shrink-0 basis-24 whitespace-nowrap">1990</span> Progetto Civitella
                  d'Agliano
                </li>
                <li class="flex">
                  <span class="inline-block shrink-0 basis-24 whitespace-nowrap">1999</span> Kunstpreis
                  St.Andreasberg/Harz
                </li>

                <li>2016 Kirche. Ort künstlerischer Aussage. St. Bartholomäus-Kirche in Ortenberg</li>
                <li>2022 Münsterforum Freiburg, Farben des Lebens/Monochromie.</li>
              </ul>
            </div> -->
          </div>
        </div>
        <BilderGallery :bilder="bilder" gallery="abstrakt" />
      </div>
    </div>

    <div class="mx-auto mt-12 max-w-7xl lg:px-8">
      <div class="relative px-4 sm:px-8 lg:px-12">
        <div class="mx-auto max-w-2xl lg:max-w-5xl">
          <div class="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
            <div class="lg:pl-20">
              <div class="max-w-xs px-2.5 lg:max-w-none">
                <img
                  src="/Anna.jpg"
                  alt="Wolfgang"
                  class="aspect-square w-64 rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800 lg:w-96"
                />
              </div>
            </div>
            <div class="lg:order-first lg:row-span-2">
              <h1 class="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">Anfänge</h1>
              <div class="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                <p>Lorem ipsum</p>
              </div>
            </div>
          </div>
        </div>
        <BilderGallery :bilder="bilder" gallery="abstrakt" class="mt-8" />
      </div>
    </div>
  </main>
</template>

<script setup>
  const { data: bilder } = await useFetch('/api/abstraktion')
</script>
