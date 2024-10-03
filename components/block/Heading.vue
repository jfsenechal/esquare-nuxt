<script setup>
const props = defineProps({
  block: {
    type: Object
  }
})
const h = computed(() => {
  const match = props.block.type.match(/heading_(\d+)/)
  return match ? `h${match[1]}` : 'h2'
})
</script>
<template>
  <component :is="h"
             v-if="h"
             class="heading text-esquare-yellow font-roboto font-bold my-8 px-2 uppercase flex items-center">
  <span
      aria-hidden="true"
      class="h-0.5 grow rounded bg-gray-200"></span>
    <span class="mx-3 text-4xl font-semibold">
      <BlockRichText :texts="block[block.type].rich_text"/>
    </span>
    <span
        aria-hidden="true"
        class="h-0.5 grow rounded bg-gray-200"></span>
  </component>
</template>
<style>
.heading h1 {
  @apply text-3xl;
}

.heading h2 {
  @apply text-2xl;
}

.heading h3 {
  @apply text-xl;
}
</style>