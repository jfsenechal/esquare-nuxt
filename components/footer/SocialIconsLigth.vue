<script setup lang="ts">
import {socialIcons} from "~/composables/menuItemsGet";
</script>
<template>
  <div class="flex flex-wrap items-center justify-center gap-2">
    <!--  -->
    <button v-for="icon in socialIcons" :key="icon.id"
            type="button"
            class="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl text-white transition duration-150 hover:ring-4 active:ring-0"
            :class="`${icon.colorBg} ${icon.ringColor}`">
            <span
                class="absolute h-24 w-24 scale-0 rounded-full bg-white/25 transition duration-200 ease-out group-active:scale-100"></span>
      <div
          class="absolute inset-0 flex items-center justify-center transition duration-150 ease-in group-hover:-translate-y-full group-hover:opacity-0"
          v-html=icon.svg></div>
      <FooterSocialiconShare/>
    </button>
    <!-- END X -->
  </div>
</template>