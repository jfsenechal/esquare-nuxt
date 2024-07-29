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
  title: () => name ?? '',
})
</script>
<template>
  <article class="flex flex-col relative">
    <ArticleHeader :emoji
                   :cover/>
    <section class="container flex flex-col gap-2 mx-auto pl-2 md:px-24 mt-14 min-h-80">
      <WidgetsBreadcrumb :path/>
      <ArticleTitle>{{ name }}</ArticleTitle>
      <WidgetsShareBox/>
      <div class="mt-6 min-h-svh p-4 prose lg:prose-xl">
        Welcome to space
        {{ data }}
      </div>
    </section>
  </article>
</template>