<script setup>
defineProps({
  block: {
    type: Object
  }
})
</script>
<template>
  <section>
    <iframe
        :id="block.id"
        :title="block.embed.caption.length > 0 ? block.embed.caption[0].text.content: ''"
        width="80%"
        height="600"
        :src="block.embed.url"></iframe>
  </section>
</template>