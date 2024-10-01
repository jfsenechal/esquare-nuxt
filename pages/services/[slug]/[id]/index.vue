<script setup>
const route = useRoute()
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
</script>
<template>
  <BaseLayout :page-title="name ?? ''" :cover :emoji>
    <WidgetsLoader v-if="status === 'pending'"/>
    <WidgetsError v-else-if="error" :error/>
    <div v-else>
      <ArticleChildren :children="data.child_pages" v-if="data.child_pages.length > 0"/>
      <div v-for="block in data.blocks" :key="block.id">
        <ArticleBlockNotion :block/>
      </div>
    </div>
  </BaseLayout>
</template>