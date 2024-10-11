<script setup>
const id = useRoute().params.id
const name = "L'actualités"
useSeoMeta({
  title: name,
})
const {
  status,
  data,
  error
} = pageComposeGet(id)
const breadcrumb = [{name: name, link: `/actualites/${id}`}]
const cover = computed(() => config.public.DEFAULT_COVER)
const icon = computed(() => config.public.DEFAULT_ICON)
const emoji = null
</script>
<template>
  <BaseLayout :page-title="name" :breadcrumb :cover :emoji>
    <WidgetsLoader v-if="status === 'pending'"/>
    <WidgetsError v-else-if="error" :error/>
    <div v-else>
      <ArticleChildPages :childPages="data.child_pages" v-if="data.child_pages.length > 0"/>
      <div v-for="block in data.blocks" :key="block.id">
        <ArticleBlockNotion :block/>
      </div>
    </div>
  </BaseLayout>
</template>