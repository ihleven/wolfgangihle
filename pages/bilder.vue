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
  // const { data: bilder } = await useFetch('/api/abstraktion')

  const bilder = [
    {
      id: 570,
      dir: 'bilder/570',
      jahr: 2022,
      titel: 'Blau IV. ',
      gattung: 'M',
      serie_id: null,
      serie: null,
      serie_nr: 0,
      technik: 'Öl',
      traeger: 'Leinwand',
      hoehe: 70,
      breite: 50,
      tiefe: 0,
      flaeche: 0,
      anmerkungen: '',
      kommentar: '',
      phase: 'M',
      fotos: null,
      foto_id: 900,
      foto: {
        id: 900,
        nr: 0,
        name: 'CD7C92F5-3142-48CF-BF64-61CBCC629714.jpeg',
        size: 485857,
        uploaded: '2022-10-22T16:14:29.119363Z',
        path: 'bilder/570/CD7C92F5-3142-48CF-BF64-61CBCC629714.jpeg',
        format: 'image/jpeg',
        width: 1536,
        height: 2048,
        taken: '2022-09-22T15:39:20Z',
        caption: 'b1585735062.805764',
        kommentar: '',
        labels: null,
        Serie: null,
        status: '',
      },
      teile: 0,
      modified: '2022-10-22T16:14:28.704798Z',
      status: '',
    },
    {
      id: 552,
      dir: 'bilder/552',
      jahr: 2022,
      titel: 'Blau I. ',
      gattung: 'M',
      serie_id: null,
      serie: null,
      serie_nr: 0,
      technik: 'Öl',
      traeger: 'Leinwand',
      hoehe: 70,
      breite: 50,
      tiefe: 0,
      flaeche: 0,
      anmerkungen: '',
      kommentar: '',
      phase: 'M',
      fotos: null,
      foto_id: 882,
      foto: {
        id: 882,
        nr: 0,
        name: '394D5104-7B58-4358-9807-F0EB1B7D9B96.jpeg',
        size: 2947658,
        uploaded: '2022-07-31T09:51:13.236271Z',
        path: 'bilder/552/394D5104-7B58-4358-9807-F0EB1B7D9B96.jpeg',
        format: 'image/jpeg',
        width: 4032,
        height: 3024,
        taken: '0001-01-01T00:00:00Z',
        caption: 'b1585735062.805661',
        kommentar: '',
        labels: null,
        Serie: null,
        status: '',
      },
      teile: 0,
      modified: '2022-07-31T09:51:12.242655Z',
      status: '',
    },
    {
      id: 538,
      dir: 'bilder/538',
      jahr: 2022,
      titel: 'O. T. ',
      gattung: 'M',
      serie_id: null,
      serie: null,
      serie_nr: 0,
      technik: 'Öl',
      traeger: 'Leinwand',
      hoehe: 80,
      breite: 60,
      tiefe: 0,
      flaeche: 0,
      anmerkungen: 'April ‚22, Geschenk für Maria, unserer langjährigen Haushaltshilfe',
      kommentar: '',
      phase: 'M',
      fotos: null,
      foto_id: 868,
      foto: {
        id: 868,
        nr: 0,
        name: '02596E48-6F72-4AB7-9176-E885E3B68DF9.jpeg',
        size: 904780,
        uploaded: '2022-04-21T12:36:24.386969Z',
        path: 'bilder/538/02596E48-6F72-4AB7-9176-E885E3B68DF9.jpeg',
        format: 'image/jpeg',
        width: 1721,
        height: 2271,
        taken: '0001-01-01T00:00:00Z',
        caption: 'b1585735062.805263',
        kommentar: '',
        labels: null,
        Serie: null,
        status: '',
      },
      teile: 0,
      modified: '2022-04-21T12:36:23.983989Z',
      status: '',
    },
    {
      id: 505,
      dir: '',
      jahr: 2014,
      titel: 'Lichtgelb',
      gattung: 'M',
      serie_id: null,
      serie: null,
      serie_nr: 0,
      technik: 'Öl',
      traeger: 'Leinwand',
      hoehe: 105,
      breite: 90,
      tiefe: 0,
      flaeche: 0,
      anmerkungen: '',
      kommentar: '',
      phase: 'M',
      fotos: null,
      foto_id: 806,
      foto: {
        id: 806,
        nr: 0,
        name: 'FD2A6E2D-E6BC-4E33-9833-7773D5486E24.jpeg',
        size: 229254,
        uploaded: '2021-09-08T14:01:58.390502Z',
        path: 'bilder/505/FD2A6E2D-E6BC-4E33-9833-7773D5486E24.jpeg',
        format: 'image/jpeg',
        width: 1127,
        height: 1348,
        taken: '0001-01-01T00:00:00Z',
        caption: 'b1585735062.786087',
        kommentar: '',
        labels: null,
        Serie: null,
        status: '',
      },
      teile: 0,
      modified: '2021-09-08T14:01:55.627601Z',
      status: '',
    },
  ]
</script>
