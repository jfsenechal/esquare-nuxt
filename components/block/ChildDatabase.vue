<script setup>
const props = defineProps({
  block: {
    type: Object
  }
})

const {
  status,
  data,
  error
} = databaseComposeGet(props.block.id)
onMounted(() => {

})
const items = computed(() => {
  props.block.database.results
})

</script>
<template>
  <section>
    <WidgetsLoader v-if="status === 'pending'"/>
    <WidgetsError v-else-if="error" :error/>
    <div v-else>
      <DatabasesViewsContact :data v-if="data?.database?.title[0]?.plain_text==='Contact'"/>
      <DatabasesViewsGeneric :data v-else/>
    </div>
  </section>
</template>