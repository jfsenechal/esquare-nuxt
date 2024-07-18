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
      <ArticleTitle>Détails et réservation de la salle {{slug}}</ArticleTitle>
      <WidgetsShareBox/>
      <div class="mt-6 min-h-svh p-4">
        <ul class="flex flex-row gap-4 w-48 mb-5">
          <li class="flex flex-row gap-2 items-center">
            <span class="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-esquare-yellow"></span><span>Aujourd'hui</span>
          </li>
          <li class="flex flex-row gap-2 items-center">
            <span
                class="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-red-200"></span><span>Réservé</span>
          </li>
        </ul>
        <RoomCalendar :dataGrr/>
      </div>
    </section>
  </article>
</template>