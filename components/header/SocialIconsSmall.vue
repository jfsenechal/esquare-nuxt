<script setup>
import {socialIcons} from "~/composables/menuItemsGet";
</script>
<template>
  <div class="">
    <a v-for="icon in socialIcons" :key="icon.id"
        class="icon inline-flex justify-center items-center"
       href="#" v-html="icon.svg">
    </a>
  </div>
</template>
<style>
.icon {
  @apply mx-1 w-6 h-6 bg-gray-700 text-white rounded-full;
}
</style>