<script setup lang="ts">
definePageMeta({
  layout: 'default',
})
const cookiesOpen = useCookie('cookiesOpen', {
  default: () => ({score: true}),
})
</script>
<template>
  <section class="" style="background-image: url('/images/beams-home.jpg')">
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