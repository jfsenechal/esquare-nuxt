<script setup>
const config = useRuntimeConfig()
const id = useRoute().params.id
const {
  status,
  data,
  error
} = databaseActivitiesComposeGet(id)
const name = computed(() => data.value ? data.value['pages'][0]['properties']['Nom']['title'][0]['plain_text'] : '')
const breadcrumb = [{name: 'Nos évènements', link: "/nos-evenements"}]
const cover = computed(() => config.public.DEFAULT_COVER)
const icon = computed(() => config.public.DEFAULT_ICON)
const emoji = null
useSeoMeta({
  title: name,
})
</script>
<template>
  <BaseLayout :page-title="name" :breadcrumb :cover :emoji :icon>
    <WidgetsLoader v-if="status === 'pending'"/>
    <WidgetsError v-else-if="error" :error/>
    <div v-else>
      <div v-for="page in data.pages" :key="page.id">
        <DatabasesEventShow :page/>
      </div>
    </div>
  </BaseLayout>
</template>