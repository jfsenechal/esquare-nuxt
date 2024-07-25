<script setup>
const propos = defineProps({
  block: {
    type: Object
  }
})
const url = computed(() => propos.block.file.file.url)
const name = computed(() => propos.block.file.name)
</script>
<template>
  <a :href="url" :download="name">
    {{ name }}
  </a>
</template>