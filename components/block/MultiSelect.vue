<script setup>
defineProps({
  values: {
    type: Array,
    default: []
  }
})
let color = null

function getColor(text) {
  color = extractColor(text)
  return color
}
</script>
<template>
  <span v-for="value in values" :key="value.id" :style="value?.color ? `color:${value.color}` : ''" class="ml-2">
    {{ value.name }}
  </span>
</template>