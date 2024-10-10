<script setup>
defineProps({
  files: {
    type: Array
  }
})
</script>
<template>
  <BlockFile v-for="(file,index) in files" :key="index" v-if="files.length > 0"/>
</template>