<script setup>
const config = useRuntimeConfig()
const {
  status,
  data,
  error
} = pageComposeGet(config.public.NOTION_SERVICES_ID)
useSeoMeta({
  title: 'Nos services',
})
const breadcrumb = [{name: "Accueil", link: "/"}]
const name = computed(() => data.value?.title ?? null)
const cover = computed(() => getCoverPage(data.value))
const emoji = computed(() => getEmojiPage(data.value))
const icon = computed(() => getIconPage(data.value))
useSeoMeta({
  title: () => `${name.value ?? ''}`,
})
</script>
<template>
  <BaseLayout :page-title="name" :breadcrumb :cover :icon :status :error>
    <WidgetsError :error v-if="error"/>
    <WidgetsLoader v-if="status === 'pending'"/>
    <HomepageServices v-else/>
  </BaseLayout>
</template>