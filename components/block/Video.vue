<script setup>
const propos = defineProps({
  block: {
    type: Object
  }
})
const url = computed(() => propos.block.video.external.url)
const caption = computed(() => propos.block.video.caption[0].text.content)
</script>
<template>
  {{ caption }}
  {{ url }}
  <iframe width="708" height="398" src="https://www.youtube.com/embed/vO-1eseQ-kc"
          title="Stop the Flexbox for 1D, Grid for 2D layout nonsense" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</template>