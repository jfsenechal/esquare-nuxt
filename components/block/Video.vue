<script setup>
const props = defineProps({
  block: {
    type: Object
  }
})
const url = computed(() => {
  if (props.block.video.type === 'external') {
    return props.block.video.external?.url
  }
  return props.block.video.file?.url
})
const caption = computed(() => '')
//https://www.youtube.com/embed/vO-1eseQ-kc
</script>
<template>
  <br/>
  <br/>
  Url Video: {{ url }}
  <br/>
  <br/>
  <video :src="url" width="560" height="315" >

  </video>

  <iframe width="708" height="398" :src="url"
          title="Stop the Flexbox for 1D, Grid for 2D layout nonsense" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</template>