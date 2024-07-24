<script setup>
useSeoMeta({
  title: (titleName) => `Salle: ${titleName ?? ''}`
})
const titleName = ref('')
const route = useRoute()
const id = route.params.id
const path = [
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
      titleName.value = 'zee'
      return t[0]
    }
  }
  return null
})
const roomName = computed(() => {
  return room.value ? room.value.Nom.title[0].text.content : ''
})
const roomDescription = computed(() => {
  return room.value ? room.value.Description.rich_text[0].text.content : ''
})
</script>
<template>
  <article class="flex flex-col relative">
    <ArticleHeader icon="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f4c5.svg"
                   bgimage="https://images.unsplash.com/photo-1617106400337-66e7d72a466e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=4800"/>
    <section class="container flex flex-col gap-2 mx-auto pl-2 md:px-24 mt-14 min-h-80">
      <WidgetsBreadcrumb :path/>
      <ArticleTitle><span class="hidden md:block">
        Détails et réservation de la</span><span class="md:hidden">La</span> salle <i
          class="text-esquare-brown">{{ roomName }}</i>
      </ArticleTitle>
      <WidgetsShareBox/>
      <div class="" v-if="pending">Chargement...</div>
      <div class="text-red-500" v-if="error">{{ error }}</div>
      <div class="mt-6 min-h-svh p-4" v-else>
        <span class="text-esquare-grey-dark text-left prose md:prose-xl">{{ roomDescription }}</span>
        <RoomFeatures :room="room" :key="id"/>
        <RoomLegend/>
        <RoomCalendar/>
      </div>
    </section>
  </article>
</template>