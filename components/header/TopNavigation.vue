<script setup>
import {items} from "~/composables/menuItemsGet";
const {mobileMenu = false} = defineProps(['mobileMenu'])
</script>
<template>
  <nav
      :class="mobileMenu ? 'h-screen' : 'h-0'"
      class="overflow-hidden z-20  lg:h-full lg:z-auto bg-white flex flex-col lg:flex-row lg:gap-4 absolute lg:static left-0 right-0 top-24 w-full lg:w-auto items-center text-lg mr-4 text-esquare-grey-dark transition-all duration-700 ease-in-out ">
    <NuxtLink v-for="item in items" :key="item.id"
              :to="item.link"
             class="`animateText flex flex-col lg:block items-center justify-center w-full lg:w-auto p-4 lg:p-0 hover:text-esquare-blue border-t-2 lg:border-0 border-esquare-grey-lighter`">
      {{ item.name }}
    </NuxtLink>
  </nav>
</template>
<style>
.animateText {
  @apply relative after:absolute after:bg-esquare-yellow after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300
}
</style>