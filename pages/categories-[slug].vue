<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

const {path, params} = useRoute()
</script>
<template>
  <h1 class="text-2xl text-red-600">{{ params.slug }}</h1>
</template>