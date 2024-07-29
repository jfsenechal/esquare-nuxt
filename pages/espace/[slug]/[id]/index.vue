<script setup>
const route = useRoute()
const path = [{name: "Nos espaces", link: "/espace", id: 1}]
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
  <BaseLayout v-if="data">
    <template v-slot:header>
      <ArticleHeader :cover
                     :emoji/>
    </template>
    <template v-slot:breadcrumb>
      <WidgetsBreadcrumb :path/>
    </template>
    <template v-slot:title>
      <ArticleTitle>{{ name }}</ArticleTitle>
    </template>
    <template v-slot>
      Welcome to space
      {{ data }}
    </template>
  </BaseLayout>
</template>