<script setup lang="ts">
definePageMeta({
  layout: 'default',
})
const cookiesOpen = useCookie('cookiesOpen', {
  default: () => ({score: true}),
})
console.log(cookiesOpen.value.score)
</script>
<template>
  <section class="" style="background-image: url('/images/beams-home.jpg')">
    <WidgetsCookies v-model:cookies-open="cookiesOpen" v-if="cookiesOpen"/>
    <HomepageTestimonial/>
    <HomepageDepartments/>
    <HomepageALaUne/>
    <HomepageNews/>
    <HomepageSlogan/>
  </section>
</template>