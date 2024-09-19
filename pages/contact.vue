<script setup>
const config = useRuntimeConfig()
const {
  pending,
  data,
  error
} = pageComposeGet(config.public.NOTION_CONTACT_ID)
const name = computed(() => getNamePage(data.value))
const cover = computed(() => getCoverPage(data.value))
const emoji = computed(() => getEmojiPage(data.value))
const icon = computed(() => getIconPage(data.value))
const description = computed(() => '')
useSeoMeta({
  title: 'Contact et accès',
})
const breadcrumb = [
  {
    name: "Accueil", link: "/", id: 1
  },
]
</script>
<template>
  <BaseLayout :page-title="name" :breadcrumb :cover :emoji :icon>
    <div v-if="pending">Chargement...</div>
    <div v-if="error">error {{ error }}</div>
    <ArticleContentNotion :data/>
    <ContactForm/>
  </BaseLayout>
</template>