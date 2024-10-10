<script setup>
const props = defineProps({
  file: {
    type: Object
  }
})
const url = computed(() => props.file.file.url)
const name = computed(() => props.file.name)
</script>
<template>
  <a :href="url" :download="name">
    {{ name }}
  </a>
</template>