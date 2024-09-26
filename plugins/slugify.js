import slugify from 'slugify';
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('slugify', slugify)
})