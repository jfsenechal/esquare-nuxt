<script setup>
const id = useRoute().params.id
const {
  status,
  data,
  error
} = pageComposeGet(id)
const name = computed(() => data.value?.title ?? null)
const breadcrumb = [{name: name, link: `/actualites/${id}`}]
const cover = computed(() => "https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=6000")
const icon = computed(() => "https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f5de-fe0f.svg")
const emoji = null
useSeoMeta({
  title: name.value ?? 'Détails actualité',
})
</script>
<template>
  <BaseLayout :page-title="name" :breadcrumb :cover :emoji>
    <WidgetsLoader v-if="status === 'pending'"/>
    <WidgetsError v-else-if="error" :error/>
    <div v-else>

      <div v-for="block in data.blocks" :key="block.id">
        <ArticleBlockNotion :block/>
      </div>
    </div>
  </BaseLayout>
</template>