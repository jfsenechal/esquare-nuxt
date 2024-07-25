<script setup>
const propos = defineProps({
  block: {
    type: Object
  }
})
</script>
<template>
  <span class="prose lg:prose-xl text-red-500"
        v-if="block">
  Le block {{ block.type }} n'est pas supporté !
  </span>
</template>