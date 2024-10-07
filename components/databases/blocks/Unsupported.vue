<script setup>
defineProps({
  block: {
    type: Object
  }
})
</script>
<template>
  <span class="prose lg:prose-xl text-red-500"
        v-if="block">
    Le block database notion <span class="italic">{{ block.type }}</span> n'est pas supporté par le site web !
  </span>
</template>