<script setup>
const route = useRoute()
const breadcrumb = [{name: "Nos espaces", link: "/espace", id: 1}]
const {
  pending,
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
    <ArticleContentNotion :data/>
  </BaseLayout>
</template>