>
<script setup>
const route = useRoute()
const slug = route.params.slug
</script>
<template>
  Category {{ slug }}
</template>