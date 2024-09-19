<script setup>
useHead({
  script: [
    {
      src: 'https://unpkg.com/tailwindcss-intersect@2.0.1/dist/observer.min.js',
      tagPosition: 'head',
      defer: true
    }
  ]
})
const breadcrumb = [{name: "Accueil", link: "/", id: 1}]
const name = computed(() => getNamePage(data.value))
const cover = computed(() => getCoverPage(data.value))
const emoji = computed(() => getEmojiPage(data.value))
useSeoMeta({
  title: name.value,
})
</script>
<template>
  <BaseLayout :page-title="name" :breadcrumb :cover :icon>
    <RoomEquipment/>
    <RoomInline :room="room" v-for="room in rooms" :key="room.GrrId.Number"/>
  </BaseLayout>
</template>