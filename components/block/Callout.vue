<script setup>
const props = defineProps({
  block: {
    type: Object
  }
})
const color = computed(() => {
  return props.block.callout.color
})
</script>
<template>
  <div class="min-h-20 prose lg:prose-xl flex flex-row items-center"
       :class="`${color}`">
    <BlockIconOrEmoji :block/>
    <BlockRichText :texts="block[block.type].rich_text"/>
  </div>
</template>
<style>
.gray_background {
  /*background-color: #f3c30c;  */
  background-color: v-bind(color);
}
</style>