<script setup>
const propos = defineProps({
  block: {
    type: Object
  }
})
const caption = computed(() => propos.block.image.caption[0].text.content)
const url = computed(() => propos.block.image.external.url)
</script>
<template>
  <figure>
    <img :src="url" alt=""/>
    {{ caption }}
  </figure>
</template>