<script setup>
defineProps({
  value: {
    type: Object,
    default: null
  }
})
</script>
<template>
  <span :style="value.color ? `color:${value.color}` : ''" class="ml-2" v-if="value">
    {{ value.name }}
  </span>
</template>