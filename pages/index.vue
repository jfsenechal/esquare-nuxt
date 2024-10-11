<script setup lang="ts">
useSeoMeta({
  title: 'Accueil',
})
useHead({
  script: [
    {
      src: 'https://unpkg.com/tailwindcss-intersect@2.0.1/dist/observer.min.js',
      tagPosition: 'head',
      defer: true
    }
  ]
})
const cookiesOpen = useCookie('cookiesOpen', {
  default: () => ({score: true}),
})
</script>
<template>
  <section class="overflow-cli4p mt-8" style="background-image: url('/images/beams-home.jpg')">
    <WidgetsCookies v-model:cookies-open="cookiesOpen" v-if="cookiesOpen"/>
    <HomepageCarousel/>
    <HomepageServices/>
    <section class="container mx-auto">
      <WidgetsTitle>Nos évènements</WidgetsTitle>
      <NuxtLink to="nos-evenements" class="flex my-3 mx-auto text-xl">
        Tous nos évènements
      </NuxtLink>
      <HomepageEvents/>
    </section>
    <HomepagePartners/>
  </section>
</template>