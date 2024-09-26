<script setup>
const config = useRuntimeConfig()
const {
  status,
  data,
  error
} = databaseComposeGet(config.public.NOTION_ROOMS_DATABASE_ID)
useHead({
  script: [
    {
      src: 'https://unpkg.com/tailwindcss-intersect@2.0.1/dist/observer.min.js',
      tagPosition: 'head',
      defer: true
    }
  ]
})
const breadcrumb = [{label: "Services", to: "/services"}]
const name = 'Salles de réunion'
const cover = computed(() => data.value ? getCoverPage(data.value) : null)
const emoji = computed(() => data.value ? getEmojiPage(data.value) : null)
const icon = computed(() => data.value ? getIconPage(data.value) : null)
useSeoMeta({
  title: name,
})
</script>
<template>
  <BaseLayout :page-title="name" :breadcrumb :cover :icon>
    <RoomEquipment/>
    <WidgetsLoader v-if="status === 'pending'"/>
    <WidgetsError v-else-if="error" :error/>
    <div v-else>
       <RoomInline :room="room" v-for="room in data.results" :key="room.id"/>
    </div>
  </BaseLayout>
</template>