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
  <section class="overflow-clip mt-8" style="background-image: url('/images/beams-home.jpg')">
    <WidgetsCookies v-model:cookies-open="cookiesOpen" v-if="cookiesOpen"/>
    <HomepageProfileCard/>
    <HomepageServices/>
    <HomepageNews/>
    <HomepagePartners/>
  </section>
</template>