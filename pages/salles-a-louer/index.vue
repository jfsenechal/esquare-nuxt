<script setup>
import rooms from "~/composables/roomsStatic.js";

useHead({
  script: [
    {
      src: 'https://unpkg.com/tailwindcss-intersect@2.0.1/dist/observer.min.js',
      tagPosition: 'head',
      defer: true
    }
  ]
})
const breadcrumb = [{name: "Accueil", link: "/", id: 1}]
const name = computed(() => "Nos salles à louer")
const cover = computed(() => "https://e-square.marche.be/wp-content/uploads/2020/02/20200211_092215-1-scaled.jpg")
const icon = computed(() => "https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f468-1f3ff-200d-1f4bc.svg")
useSeoMeta({
  title: name.value,
})
</script>
<template>
  <BaseLayout :page-title="name" :breadcrumb :cover :icon>
    <RoomEquipment/>
    <RoomInline :room="room" v-for="room in rooms" :key="room.GrrId.Number"/>
  </BaseLayout>
</template>