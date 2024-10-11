<script setup>
const name = "Nos évènements"
const config = useRuntimeConfig()
useSeoMeta({
  title: name,
})
const {
  status,
  data,
  error
} = databaseActivitiesComposeGet()
const breadcrumb = [{name: name, link: "/nos-evenements"}]
const cover = computed(() => config.public.DEFAULT_COVER)
const icon = computed(() => config.public.DEFAULT_ICON)
const emoji = null
const tagSelected = ref('Tout')
</script>
<template>
  <BaseLayout :page-title="name" :breadcrumb :cover :emoji :icon>
    <WidgetsLoader v-if="status === 'pending'"/>
    <WidgetsError v-else-if="error" :error/>
    <div v-else>
      <div class="flex flex-col items-center gap-2 mb-3">
        <HomepageTags :data v-model:tag-selected="tagSelected"/>
      </div>
      <div v-for="(page,index) in data.pages" :key="page.id">
        <div v-for="(property,index) in page.properties" :key="index" class="grid grid-cols-2">
          <strong>{{ index }}:</strong>
          <span v-if="property.type === 'title'">
          <BlockRichText :texts="property.title"/>
        </span>
          <span v-if="property.type === 'rich_text'">
          <BlockRichText :texts="property.rich_text"/>
        </span>
          <span v-if="property.type === 'multi_select'">
          <BlockMultiSelect :values="property.multi_select"/>
        </span>
          <span v-if="property.type === 'select'">
          <BlockSelect :value="property.select"/>
        </span>
          <span v-if="property.type === 'date'">
          <BlockDate :date="property.date"/>
        </span>
        </div>
        <hr class="border-2 border-amber-500"/>
      </div>
    </div>
  </BaseLayout>
</template>