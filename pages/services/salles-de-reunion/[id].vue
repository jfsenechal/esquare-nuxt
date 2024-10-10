<script setup>
const config = useRuntimeConfig()
const {
  status: roomStatus,
  data: rooms,
  error: roomError,
} = databaseComposeGet(config.public.NOTION_ROOMS_DATABASE_ID)
const {
  status,
  data,
  error
} = pageComposeGet(config.public.NOTION_ROOMS_PAGE_ID)
useHead({
  script: [
    {
      src: 'https://unpkg.com/tailwindcss-intersect@2.0.1/dist/observer.min.js',
      tagPosition: 'head',
      defer: true
    }
  ]
})
const breadcrumb = [{name: "Services", link: "/services"}]
const name = 'Salles de réunion'
const cover = computed(() => data.value ? getCoverPage(data.value) : null)
const emoji = computed(() => data.value ? getEmojiPage(data.value) : null)
const icon = computed(() => data.value ? getIconPage(data.value) : null)
useSeoMeta({
  title: name,
})
</script>
<template>
  <BaseLayout :page-title="name" :breadcrumb :cover :icon :emoji :status :error>
    <RoomEquipment/>
    <WidgetsLoader v-if="roomStatus === 'pending'"/>
    <WidgetsError v-else-if="roomError" :error/>
    <div v-else class="overflow-hidden">
      <RoomInline :room="room" v-for="room in rooms.pages" :key="room.id"/>
    </div>
  </BaseLayout>
</template>