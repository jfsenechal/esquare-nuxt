<script setup>
const route = useRoute()
const slug = route.params.slug
</script>
<template>
  Article {{ slug }}
</template>