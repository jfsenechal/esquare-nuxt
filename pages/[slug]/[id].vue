<script setup>
const id = useRoute().params.id
const {
  status,
  data,
  error
} = pageComposeGet(id)
const name = computed(() => data.value?.title ?? '')
const cover = computed(() => getCoverPage(data.value))
const emoji = computed(() => getEmojiPage(data.value))
const icon = computed(() => getIconPage(data.value))
const description = computed(() => '')
useSeoMeta({
  title: name?.value ?? '',
})
const breadcrumb = [{name: 'Accueil', link: "/"}]
</script>
<template>
  <BaseLayout :page-title="name" :breadcrumb :cover :emoji :icon>
    <WidgetsLoader v-if="status === 'pending'"/>
    <WidgetsError v-else-if="error" :error/>
    <div v-else>
      <ArticleChildPages :childPages="data.child_pages" v-if="data.child_pages.length > 0"/>
      <div v-for="block in data.blocks" :key="block.id">
        <ArticleBlockNotion :block/>
      </div>
    </div>
    <ContactForm/>
  </BaseLayout>
</template>