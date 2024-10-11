<script setup>
const id = useRoute().params.id
const {
  status,
  data,
  error
} = pageComposeGet(id)
const name = computed(() => data.value?.title ?? '')
const breadcrumb = [{name: name, link: `/actualites/${id}`}]
const cover = computed(() => config.public.DEFAULT_COVER)
const icon = computed(() => config.public.DEFAULT_ICON)
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