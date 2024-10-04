<script setup>
const props = defineProps({
  block: {
    type: Object
  }
})
const url = computed(() => props.block.file.file.url)
const name = computed(() => props.block.file.name)
</script>
<template>
  <a :href="url" :download="name">
    {{ name }}
  </a>
</template>