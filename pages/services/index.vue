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
const breadcrumb = [{name: "Accueil", link: "/", id: 1}]
const name = computed(() => getNamePage(data.value))
const cover = computed(() => getCoverPage(data.value))
const emoji = computed(() => getEmojiPage(data.value))
useSeoMeta({
  title: () => `${name.value ?? ''}`,
})
</script>
<template>
  <BaseLayout :page-title="name" :breadcrumb :cover :icon>
    <WidgetsError :error v-if="error"/>
    <WidgetsLoader v-if="status === 'pending'"/>
    <HomepageServices v-else/>
  </BaseLayout>
</template>