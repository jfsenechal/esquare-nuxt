<script setup lang="ts">
const config = useRuntimeConfig()
const title = ref('')
useHead({
  link: [
    {rel: 'apple-touch-icon', type: 'image/png', href: `${config.public.NUXT_APP_BASE_URL}favicon/apple-touch-icon.png`, sizes: '180x180'},
    {rel: 'icon', type: 'image/png', href: `${config.public.NUXT_APP_BASE_URL}favicon/favicon-32x32.png`, sizes: '32x32'},
    {rel: 'icon', type: 'image/png', href: `${config.public.NUXT_APP_BASE_URL}favicon/favicon-16x16.png`, sizes: '16x16'},
    {rel: 'manifest', type: 'image/png', href: `${config.public.NUXT_APP_BASE_URL}favicon/site.webmanifest`}
  ],
})
useSeoMeta({
  titleTemplate: (title) => `${title} | E-square - Marche-en-Famenne - Tiers lieu`,
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://esquare.marche.be/new/images/batimentaerien.jpg',
  ogUrl: '',
  ogLocale: 'fr_FR',
  twitterCard: 'summary_large_image',
  twitterTitle: 'string',
  twitterDescription: 'string',
  twitterImage: 'string',
  applicationName: 'E-square',
})
</script>
<template>
  <NuxtLayout>
    <NuxtLoadingIndicator color="#348feb" />
    <NuxtPage/>
  </NuxtLayout>
</template>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>