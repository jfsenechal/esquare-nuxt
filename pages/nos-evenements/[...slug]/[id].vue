<script setup>
const name = "Détails évènement"
const id = useRoute().params.id
useSeoMeta({
  title: name,
})
const {
  status,
  data,
  error
} = databaseActivitiesComposeGet()
const breadcrumb = [{name: name, link: "/nos-evenements"}]
const cover = computed(() => "https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=6000")
const icon = computed(() => "https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f5de-fe0f.svg")
const emoji = null
onMounted(async () => {
})
</script>
<template>
  <BaseLayout :page-title="name" :breadcrumb :cover :emoji :icon>
    <WidgetsLoader v-if="status === 'pending'"/>
    <WidgetsError v-else-if="error" :error/>
    <div v-else>
      Détails de l'évènement
    </div>
  </BaseLayout>
</template>