<script setup>
const props = defineProps({
  block: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <section class="flex flex-row items-center gap-3 justify-between w-full">
    <div v-for="column in block.columns" :key="column.id">
        <BlockColumn :column="column"/>
    </div>
  </section>
</template>