<script setup>
useHead({
  script: [
    {
      src: 'https://unpkg.com/tailwindcss-intersect@2.0.1/dist/observer.min.js',
      tagPosition: 'head',
      defer: true
    }
  ]
})
const path = [{name: "Accueil", link: "/", id: 1}]
const {
  pending,
  data,
  error
} = roomsComposeGet()
</script>
<template>
  <article class="flex flex-col relative overflow-clip">
    <ArticleHeader icon="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f468-1f3ff-200d-1f4bc.svg"
                   bgimage="https://e-square.marche.be/wp-content/uploads/2020/02/20200211_092215-1-scaled.jpg"/>
    <section class="container flex flex-col gap-2 mx-auto md:ms-24 mt-14 min-h-80">
      <WidgetsBreadcrumb :path/>
      <ArticleTitle>Nos salles à louer</ArticleTitle>
      <WidgetsShareBox/>
      <div class="mt-6 min-h-svh p-4">
        <RoomEquipment/>
        <div v-if="pending">Loading...</div>
        <div v-else>
          <RoomInline :room="room" v-for="(room,index) in data" :key="index"/>
        </div>
      </div>
    </section>
  </article>
</template>