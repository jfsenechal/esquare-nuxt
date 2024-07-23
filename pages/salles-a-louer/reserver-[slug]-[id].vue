<script setup>
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
const {
  pendingGrr,
  dataGrr,
  errorGrr
} = entriesGet(id)

const room = computed(() => {
  if (data.value) {
    const t = data.value.filter((item) => item.GrrId.number == id)
    if (t !== null && t.length > 0) {
      return t[0]
    }
  }
})
const roomName = computed(() => {
  return room.value.Nom.title[0].text.content
})
const roomDescription = computed(() => {
  return room.value.Description.rich_text[0].text.content
})
</script>
<template>
  <article class="flex flex-col relative">
    <ArticleHeader icon="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f4c5.svg"
                   bgimage="https://images.unsplash.com/photo-1617106400337-66e7d72a466e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=4800"/>
    <div v-if="pending">Loading...</div>
    <section class="container flex flex-col gap-2 mx-auto ms-2 md:ms-24 mt-14 min-h-80" v-else>
      <WidgetsBreadcrumb :path/>
      <ArticleTitle>Détails et réservation de la salle <i class="text-esquare-brown">{{ roomName }}</i></ArticleTitle>
      <WidgetsShareBox/>
      <div class="" v-if="pendingGrr">Chargement...</div>
      <div class="text-red-500" v-if="errorGrr">{{ errorGrr }}</div>
      <div class="mt-6 min-h-svh p-4" v-else>
        <div class="prose md:prose-xl">
          <span class="text-esquare-grey-dark text-left trail">{{ roomDescription }}</span>
          <RoomFeatures :room="room" :key="id"/>
        </div>
        <RoomLegend/>
        <RoomCalendar :dataGrr/>
      </div>
    </section>
  </article>
</template>