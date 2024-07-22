<script setup>
const route = useRoute()
const slug = route.params.slug
const id = route.params.id
const path = [
  {name: "Nos salles à louer", link: "/salles-a-louer", id: 1}
]
const {
  pendingGrr,
  dataGrr,
  errorGrr
} = entriesGet(id)
</script>
<template>
  <article class="flex flex-col relative">
    <ArticleHeader icon="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f4c5.svg"
                   bgimage="https://images.unsplash.com/photo-1617106400337-66e7d72a466e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=4800"/>
    <section class="container flex flex-col gap-2 mx-auto ms-2 md:ms-24 mt-14 min-h-80">
      <WidgetsBreadcrumb :path/>
      <ArticleTitle>Détails et réservation de la salle {{ slug }}</ArticleTitle>
      <WidgetsShareBox/>
      <div class="" v-if="pendingGrr">Chargement...</div>
      <div class="text-red-500" v-if="errorGrr">{{ errorGrr }}</div>
      <div class="mt-6 min-h-svh p-4" v-else>
        <RoomLegend/>
        <RoomCalendar :dataGrr/>
      </div>
    </section>
  </article>
</template>