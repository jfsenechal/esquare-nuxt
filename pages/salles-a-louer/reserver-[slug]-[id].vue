<script setup>
const id = useRoute().params.id
const breadcrumb = [
  {name: "Nos salles à louer", link: "/salles-a-louer", id: 1}
]
const {
  pending,
  data,
  error
} = roomsComposeGet(id)
const room = computed(() => {
  if (data.value) {
    const t = data.value.filter((item) => item.GrrId.number == id)
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
const cover = computed(() => data.value?.icon?.emoji)
const emoji = computed(() => data.value?.icon?.emoji)
useSeoMeta({
  title: () => `Salle: ${name.value ?? ''}`,
  description: () => `Salle: ${description.value ?? ''}`
})
</script>
<template>
  <BaseLayout v-if="data" :page-title="name" :breadcrumb :cover :emoji>
    <template v-slot:title>
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