<script setup>
useSeoMeta({
  title: 'Actualités',
})
const path = [{name: "Accueil", link: "/", id: 1}]
</script>
<template>
  <BaseLayout>
    <template v-slot:header>
      <ArticleHeader icon="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f5de-fe0f.svg"
                     bgimage="https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=6000"/>
    </template>
    <template v-slot:breadcrumb>
      <WidgetsBreadcrumb :path/>
    </template>
    <template v-slot:title>
      <ArticleTitle>L'actualités</ArticleTitle>
    </template>
    <template v-slot>
      <HomepageNews/>
      <WidgetsPhones/>
      <WidgetsContactForm/>
    </template>
  </BaseLayout>
</template>