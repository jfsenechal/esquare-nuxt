<script setup>
const config = useRuntimeConfig()
useSeoMeta({
  title: 'Nos espaces',
})
const {
  pending,
  data,
  error
} = pageComposeGet(config.public.NOTION_ESPACE_ID)
const path = [{name: "Accueil", link: "/", id: 1}]
const name = computed(() => data.value?.properties.title.title[0].text.content)
const image = computed(() => data.value?.cover?.external.url)
const emoji = computed(() => data.value?.icon?.emoji)
useSeoMeta({
  title: () => `${name.value ?? ''}`,
})
</script>
<template>
  <article class="flex flex-col relative">
    <ArticleHeader icon="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f3ae.svg"
                   bgimage="https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=6000"/>
    <section class="container flex flex-col gap-2 mx-auto pl-2 md:px-24 mt-14 min-h-80">
      <WidgetsBreadcrumb :path/>
      <ArticleTitle>{{name}}</ArticleTitle>
      <WidgetsShareBox/>
      <div class="mt-6 min-h-svh p-4 prose lg:prose-xl">
        <div v-if="pending">Chargement...</div>
        <div v-if="error">error {{ error }}</div>
        <div v-for="block in data.children" :key="block.id">
            <h3 v-if="block.type === 'child_page'">
              <NuxtLink to="/">{{ block.child_page.title }}</NuxtLink>
              {{block.page.icon}}
            </h3>
        </div>
      </div>
    </section>
  </article>
</template>