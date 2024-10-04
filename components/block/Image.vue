<script setup>
const props = defineProps({
  block: {
    type: Object
  }
})
const caption = computed(function () {
  if (props.block.image.caption?.length > 0) {
    return props.block.image.caption[0].text.content
  }
  return null
})
const url = computed(function () {
  if (props.block.image.type === 'file') {
    return props.block.image.file.url
  }
  return props.block.image.external.url
})
</script>
<template>
  <figure>
    <img :src="url" alt=""/>
    <span class="" v-if="caption">{{ caption }}</span>
  </figure>
</template>