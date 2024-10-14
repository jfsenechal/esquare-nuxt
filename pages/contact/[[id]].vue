<script setup>
const config = useRuntimeConfig()
const {
  status,
  data,
  error
} = pageComposeGet(config.public.NOTION_CONTACT_PAGE_ID)
const name = computed(() => data.value?.title ?? '')
const cover = computed(() => getCoverPage(data.value))
const emoji = computed(() => getEmojiPage(data.value))
const icon = computed(() => getIconPage(data.value))
const description = computed(() => '')
useSeoMeta({
  title: 'Contact et accès',
})
const breadcrumb = [{name: 'Contact', link: "/contact"}]
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