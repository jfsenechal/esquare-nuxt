<script setup>
import {IconLogin} from '@tabler/icons-vue'
import {items} from "~/composables/menuItemsGet";

const {mobileMenu = false} = defineProps(['mobileMenu'])
</script>
<template>
  <nav
      :class="mobileMenu ? 'h-screen' : 'h-0'"
      class="overflow-hidden z-20  lg:h-full lg:z-auto bg-white flex flex-col lg:flex-row lg:gap-4 absolute lg:static left-0 right-0 top-28 w-full lg:w-auto items-center text-lg mr-4 font-pathway-regular text-grey-dark transition-all duration-700 ease-in-out ">
    <AppLink v-for="item in items" :key="item.id"
             :item="item"
             :classCss="`animateText flex flex-col lg:block items-center justify-center w-full lg:w-auto p-4 lg:p-0 hover:text-blue-default border-t-2 lg:border-0 border-grey-lighter`">
      {{ item.name }}
    </AppLink>
  </nav>
</template>
<style>
.animateText {
  @apply relative after:absolute after:bg-green-light after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300
}
</style>