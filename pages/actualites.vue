<script setup>
useSeoMeta({
  title: 'Actualités',
})
const name = "L'actualités"
const breadcrumb = [{label: "Accueil", to: "/"}]
const cover = computed(() => "https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=6000")
const icon = computed(() => "https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f5de-fe0f.svg")
</script>
<template>
  <BaseLayout :page-title="name" :breadcrumb :cover :emoji>
    <HomepageNews/>
  </BaseLayout>
</template>