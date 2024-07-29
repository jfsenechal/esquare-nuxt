<script setup>
useSeoMeta({
  title: 'Nos salles à louer',
})
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
const name = computed(() => "Nos salles à louer")
const cover = computed(() => "https://e-square.marche.be/wp-content/uploads/2020/02/20200211_092215-1-scaled.jpg")
const icon = computed(() => "https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f468-1f3ff-200d-1f4bc.svg")
</script>
<template>
  <BaseLayout>
    <template v-slot:header>
      <ArticleHeader :icon
                     :cover/>
    </template>
    <template v-slot:breadcrumb>
      <WidgetsBreadcrumb :path/>
    </template>
    <template v-slot:title>
      <ArticleTitle>{{ name }}</ArticleTitle>
    </template>
    <template v-slot>
      <RoomEquipment/>
      <div v-if="pending">Loading...</div>
      <div v-else>
        <RoomInline :room="room" v-for="(room,index) in data" :key="index"/>
      </div>
    </template>
  </BaseLayout>
</template>