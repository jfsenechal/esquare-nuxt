<script setup>
const props = defineProps({
  block: {
    type: Object
  }
})
const emoji = computed(() => {
  return props.block[props.block.type].icon?.emoji
})
const icon = computed(() => {
  return props.block[props.block.type].icon?.external.url
})
</script>
<template>
  <img class="h-24 w-24 sm:h-20 sm:w-20 animate-bounce-in-top duration-700"
       :src="icon"
       alt=""
       v-if="icon">
  <div class=" text-8xl sm:text-7xl animate-bounce-in-top duration-700" v-else-if="emoji">
    {{ emoji }}
  </div>
</template>