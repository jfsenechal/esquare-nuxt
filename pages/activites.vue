<script setup>
const name = "Les activités"
useSeoMeta({
  title: name,
})
const config = useRuntimeConfig()
const {
  status,
  data,
  error
} = databaseComposeGet(config.public.NOTION_ACTIVIES_ID)
const breadcrumb = [{label: "Activités", to: "/activites"}]
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
  console.log('mounted')
  console.log(data.value.fetchedAt)
})
</script>
<template>
  <BaseLayout :page-title="name" :breadcrumb :cover :emoji :icon>
    <WidgetsLoader v-if="status === 'pending'"/>
    <WidgetsError v-else-if="error" :error/>
    <div v-else>
      <WidgetsInfo>
        <h3>Todo:</h3>
        <p>A la db activités ajouter un champ image, ajouter un bouton diffuser sur le site oui/non</p>
        <p>Mettre en page + filtres</p>
      </WidgetsInfo>
      <div v-for="(result,index) in data.results" :key="result.id">
        <div v-for="(property,index) in result.properties" :key="index" class="grid grid-cols-2">
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