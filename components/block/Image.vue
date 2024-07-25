<script setup>
const propos = defineProps({
  block: {
    type: Object
  }
})
const annotations = computed(() => propos.block.image.caption[0].annotations)
const href = computed(() => propos.block.image.caption[0].href)
const caption = computed(() => propos.block.image.caption[0].text.content)
const url = computed(() => propos.block.image.external.url)
</script>
<template>
  <figure>
    <img :src="url" alt=""/>
    {{ caption }}
  </figure>
</template>