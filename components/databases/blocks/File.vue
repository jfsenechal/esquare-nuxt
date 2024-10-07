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
  <div v-for="file in block.files" v-if="block.files.length > 0">
    <a href="/">
      {{ file }}
    </a>
  </div>
  <div v-else>
    Aucun fichier
  </div>
</template>