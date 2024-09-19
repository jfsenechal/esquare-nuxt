<script setup>
const propos = defineProps({
  block: {
    type: Object
  }
})
const caption = computed(function () {
  if (propos.block.image.caption.length > 0) {
    return propos.block.image.caption[0].text.content
  }
  return ''
})
const url = computed(function () {
  if (propos.block.image.type === 'file') {
    return propos.block.image.file.url
  }
  return propos.block.image.external.url
})
</script>
<template>
  <figure>
    <img :src="url" alt=""/>
    {{ caption }}
  </figure>
</template>