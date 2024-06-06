<script setup>
//https://play.tailwindcss.com/0MGqLZKhTK
import {tags} from "~/composables/menuItemsGet";
const tagSelected = defineModel('tagSelected')
</script>
<template>
  <div class="mx-auto">
    <button
        type="button"
        v-for="item in tags()"
        @click="tagSelected = item.tag"
        class="uppercase bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded border border-blue-400"
        :class="tagSelected.color">
      {{ item.tag }}
    </button>
  </div>
</template>