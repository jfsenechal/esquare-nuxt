<script setup>
//https://play.tailwindcss.com/0MGqLZKhTK
defineProps({
  tags: {
    type: Array,
    default: []
  }
})
const tagSelected = defineModel('tagSelected')

function isTagSelected(tag) {
  return tag === tagSelected.value
}
</script>
<template>
  <div class="mx-auto">
    <button
        type="button"
        aria-label="select tag"
        v-for="tag in tags"
        @click="tagSelected = tag"
        class="uppercase text-blue-800 text-base font-medium me-2 px-2.5 py-0.5 mb-2 rounded border border-blue-400"
        :class="isTagSelected(tag) ? 'bg-esquare-yellow':'bg-blue-100 ' ">
      {{ tag }}
    </button>
  </div>
</template>