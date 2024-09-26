<script setup>
/*const myPage = await notion.databases.query({
  database_id: "897e5a76-ae52-4b48-9fdf-e71f5945d1af",
  filter: {property: "Landmark", rich_text: {contains: "Bridge",},},
})*/
const id = useRoute().params.id
const breadcrumb = [
  {label: "Nos salles à louer", to: "/salles-a-louer"}
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