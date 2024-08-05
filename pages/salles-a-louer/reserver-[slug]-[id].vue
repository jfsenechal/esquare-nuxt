<script setup>
import rooms from "~/composables/roomsStatic.js";

const id = useRoute().params.id
const breadcrumb = [
  {name: "Nos salles à louer", link: "/salles-a-louer", id: 1}
]
const room = computed(() => {
  if (rooms.length > 0) {
    const t = rooms.filter((item) => item.GrrId.number == id)
    if (t !== null && t.length > 0) {
      return t[0]
    }
  }
  return null
})
const name = computed(() => {
  return room.value ? room.value.Nom.title[0].text.content : ''
})
const description = computed(() => {
  return room.value ? room.value.Description.rich_text[0].text.content : ''
})
const cover = computed(() => {
  return room.value.Image.files[0].name
})
const icon = computed(() => "https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f468-1f3ff-200d-1f4bc.svg")
useSeoMeta({
  title: () => `Salle: ${name.value ?? ''}`,
  description: () => `Salle: ${description.value ?? ''}`
})
</script>
<template>
  <BaseLayout :page-title="name" :breadcrumb :cover :icon>
    <template #title>
      <ArticleTitle>
        <span class="hidden md:block">
        Détails et réservation de la</span><span class="md:hidden">
        La</span> salle <i class="text-esquare-brown">{{ name }} </i>
      </ArticleTitle>
    </template>
    <template v-slot>
      <span class="text-esquare-grey-dark text-left prose md:prose-xl">{{ description }}</span>
      <RoomFeatures :room="room" :key="id"/>
      <RoomLegend/>
      <RoomCalendar/>
    </template>
  </BaseLayout>
</template>