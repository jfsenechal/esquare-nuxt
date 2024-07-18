<script setup lang="ts">
useHead({
  script: [
    {
      src: 'https://unpkg.com/tailwindcss-intersect@2.0.1/dist/observer.min.js',
      tagPosition: 'head',
      defer: true
    }
  ]
})
definePageMeta({
  layout: 'default',
})
const cookiesOpen = useCookie('cookiesOpen', {
  default: () => ({score: true}),
})
</script>
<template>
  <section class="overflow-clip" style="background-image: url('/images/beams-home.jpg')">
    <WidgetsCookies v-model:cookies-open="cookiesOpen" v-if="cookiesOpen"/>
    <HomepageTestimonial2/>
    <HomepageDepartments/>
    <HomepageALaUne/>
    <HomepageTestimonial/>
    <WidgetsWave/>
    <HomepageNews/>
    <HomepageSlogan/>
  </section>
</template>