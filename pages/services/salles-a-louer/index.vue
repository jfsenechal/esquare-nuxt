<script setup>
const config = useRuntimeConfig()
const {
  status,
  data,
  error
} = pageComposeGet(config.public.NOTION_ROOMS_ID)
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
const rooms= []
</script>
<template>
  <BaseLayout :page-title="name" :breadcrumb :cover :icon>
    <RoomEquipment/>
    <WidgetsLoader v-if="status === 'pending'"/>
    <WidgetsError v-else-if="error" :error/>
    <div v-else>
      <RoomInline :room="room" v-for="room in rooms" :key="room.GrrId.Number"/>
    </div>
  </BaseLayout>
</template>