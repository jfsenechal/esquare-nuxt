<script setup>
defineProps({
  date: {
    type: Object,
    default: null
  }
})
</script>
<template>
  <span v-if="date">
    {{ date.start }} => {{ date.end }}
  </span>
</template>