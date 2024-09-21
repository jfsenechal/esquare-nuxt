<script setup>
const route = useRoute()
const breadcrumb = [{name: "Nos services", link: "/services", id: 1}]
const {
  status,
  data,
  error
} = pageComposeGet(route.params.id)
const name = computed(() => getNamePage(data.value))
const cover = computed(() => getCoverPage(data.value))
const emoji = computed(() => getEmojiPage(data.value))
useSeoMeta({
  title: () => name.value ?? '',
})
</script>
<template>
  <BaseLayout :page-title="name ?? ''" :breadcrumb :cover :emoji>
    <WidgetsLoader v-if="status === 'pending'"/>
    <WidgetsError v-else-if="error" :error/>
    <div v-else>
      <div v-for="block in data.blocks" :key="block.id">
        <ArticleBlockNotion :block/>
      </div>
    </div>
  </BaseLayout>
</template>