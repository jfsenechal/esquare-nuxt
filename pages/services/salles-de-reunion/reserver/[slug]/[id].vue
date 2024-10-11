<script setup>
const config = useRuntimeConfig()
const id = useRoute().params.id
const breadcrumb = [
  {name: "Nos salles à louer", link: `/services/salles-de-reunion/${config.public.NOTION_ROOMS_PAGE_ID}`}
]
const {
  status,
  data,
  error,
} = databaseComposeGet(config.public.NOTION_ROOMS_DATABASE_ID)

const room = computed(() => {
  if (data.value.pages.length > 0) {
    const result = data.value.pages.filter((item) => item.id == id)
    if (result !== null && result.length > 0) {
      return result[0]
    }
  }
  return null
})
const properties = computed(() => {
  return room.value.properties
})
const name = computed(() => {
  return properties.value.Nom.title[0].text.content
})
const description = computed(() => {
  return properties.value.Description.rich_text[0].text.content
})
const images = computed(() => {
  return properties.value.Image.files
})
const cover = computed(() => {
  return properties.value.Image.files[0].file.url
})
const icon = computed(() => config.public.DEFAULT_ICON)
const emoji = null
useSeoMeta({
  title: () => `Salle de réunion : ${name.value ?? ''}`,
  description: () => `Salle: ${description.value ?? ''}`
})
</script>
<template>
  <BaseLayout :page-title="name ?? ''" :breadcrumb :cover :icon :emoji :status :error>
    <template #title>
      <ArticleTitle>
        <span class="hidden md:block">Détails et réservation de la</span>
        <span class="md:hidden">La</span> salle <i class="text-esquare-brown">{{ name }} </i>
      </ArticleTitle>
    </template>
    <template v-slot>
      <WidgetsLoader v-if="status === 'pending'"/>
      <WidgetsError v-else-if="error" :error/>
      <div v-else>
        <span class="text-esquare-grey-dark text-left prose md:prose-xl">{{ description }}</span>
        <RoomFeatures :properties :key="id"/>
        <RoomLegend/>
        <RoomCalendar :roomId="properties.GrrId.number"/>
      </div>
    </template>
  </BaseLayout>
</template>