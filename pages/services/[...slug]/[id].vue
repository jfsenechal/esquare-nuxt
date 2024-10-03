<script setup>
const route = useRoute()
const config = useRuntimeConfig()
const {
  status,
  data,
  error
} = pageComposeGet(route.params.id)
const name = computed(() => getNamePage(data.value))
const cover = computed(() => getCoverPage(data.value))
const emoji = computed(() => getEmojiPage(data.value))
useHead({
  title: () => status.value
      ? 'Loading'
      : name.value
          ? name.value.id
          : 'Page not found',
})
const isMachinePage = computed(() => data.value.id === config.public.NOTION_MACHINES_PAGE_ID)
</script>
<template>
  <BaseLayout :page-title="name ?? ''" :cover :emoji>
    <WidgetsLoader v-if="status === 'pending'"/>
    <WidgetsError v-else-if="error" :error/>
    <div v-else>
      <ArticleChildPages :childPages="data.child_pages" v-if="data.child_pages.length > 0"/>
      <div v-for="block in data.blocks" :key="block.id">
        <ArticleBlockNotion :block/>
      </div>
      <DatabasesMachines v-if="isMachinePage"/>
      liste des databases ?
      {{ data.databases.length }}
    </div>
  </BaseLayout>
</template>