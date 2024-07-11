<script setup>
const route = useRoute()
const slug = route.params.slug
const path = []
const post = {title: 'Détails salle', link: '/', icon: ''}
</script>
<template>
  <article class="flex flex-col relative">
    <ArticleHeader :icon="post.icon"
                     :bgimage="post.image"/>
    <section class="container flex flex-col gap-2 mx-auto ms-2 md:ms-24 mt-14 min-h-80">
      <WidgetsBreadcrumb :breadcrumbs="path"/>
      <ArticleTitle>{{ post.title }}</ArticleTitle>
      <WidgetsShareBox/>
      <div class="mt-6 min-h-svh p-4 prose lg:prose-xl">

      </div>
    </section>
  </article>
</template>