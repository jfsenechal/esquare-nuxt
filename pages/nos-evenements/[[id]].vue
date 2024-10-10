<script setup>
const name = "Nos évènements"
useSeoMeta({
  title: name,
})
const config = useRuntimeConfig()
const {
  status,
  data,
  error
} = databaseComposeGet(config.public.NOTION_ACTIVITIES_DATABASE_ID)
const breadcrumb = [{name: name, link: "/nos-evenements"}]
const cover = computed(() => "https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=6000")
const icon = computed(() => "https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f5de-fe0f.svg")
const emoji = null
const fields = [
  'Description publique',
  'Desc_pub',
  'Catégorie',
  'Planning comm',
  'Identifiant',
  'Participants',
  'Cycle de formation',
  'Collaborateur',
  'Date de création',
  'Nom',
  'Salles',
  'Public cible',
  'Organisateur',
  'Assignation',
  'Date',
  'Responsable',
  'Statut',
  'Livrables',
  'Durée',
  'Formateurs',
]
onMounted(async () => {
})

function onlyUnique(value, index, array) {
  return array.indexOf(value) === index;
}

const tags = computed(() => {
  const items = []
  data.value ? data.value.pages.forEach((page) => {
    page['properties']['Organisateur']['multi_select'].forEach((property) => {
      if (property['name']) items.push(property.name)
    })
  }) : []
  return items.filter(onlyUnique)
})
const tagSelected = ref('Tout')
</script>
<template>
  <BaseLayout :page-title="name" :breadcrumb :cover :emoji :icon>
    <WidgetsLoader v-if="status === 'pending'"/>
    <WidgetsError v-else-if="error" :error/>
    <div v-else>
      <div class="flex flex-col items-center gap-2 mb-3">
        <HomepageTags :tags v-model:tag-selected="tagSelected"/>
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