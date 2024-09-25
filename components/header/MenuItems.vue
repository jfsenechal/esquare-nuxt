<script setup>
import {slugify} from "~/composables/stringUtils.js";

defineProps({
  childPages: {type: Array, required: true, default: []},
})
const mobileMenu = defineModel('mobileMenu', {type: Boolean, default: false})

function name(item) {
  return item.properties.title.title[0].text.content
}

function generateLink(item) {
  return `/services/${slugify(name(item))}/${item.id}`
}
</script>
<template>
  <NuxtLink v-for="item in childPages"
            :key="item.id"
            :to="generateLink(item)"
            @click="mobileMenu = !mobileMenu"
            class="animateText flex flex-col items-center justify-center w-full p-4 hover:text-esquare-blue border-t-2 border-esquare-grey-lighter uppercase"
            cla44ss="animateText flex flex-col items-center justify-center w-full p-4
            hover:text-esquare-blue border-t-2 border-esquare-grey-lighter uppercase"
            aria-current="page">
    {{ name(item) }}
    <!-- todo Current: "bg-gray-100 text-gray-900", Default: "text-gray-900 hover:bg-gray-50 hover:text-gray-900" -->
  </NuxtLink>
</template>
<style>
.animateText {
  @apply relative after:absolute after:bg-esquare-yellow after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300
}
</style>