<script setup>
const route = useRoute()
const breadcrumb = [{name: "Nos espaces", link: "/espace", id: 1}]
const {
  pending,
  data,
  error
} = pageComposeGet(route.params.id)
const name = computed(() => data.value?.properties.title.title[0].text.content)
const cover = computed(() => data.value?.cover?.external.url)
const emoji = computed(() => data.value?.icon?.emoji)
useSeoMeta({
  title: () => name.value ?? '',
})
</script>
<template>
  <BaseLayout :page-title="name ?? ''" :breadcrumb :cover :emoji>
    <ArticleContentNotion :data/>
  </BaseLayout>
</template>