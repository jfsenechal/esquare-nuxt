<script setup>
const props = defineProps({
  machine: {type: Object, required: true},
})
const properties = computed(() => {
  return props.machine.properties
})
const name = computed(() => {
  return properties.value.Articles?.title[0]?.text.content
})
const description = computed(() => {
  return properties.value.Description?.rich_text[0]?.text.content
})
</script>
<template>
  <div class="flex flex-col gap-3">
    <span class="text-2xl">{{ name }}</span>
    <span>
      {{ description }}
    </span>
  </div>
</template>