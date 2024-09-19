<script setup>
const props = defineProps({
  block: {
    type: Object
  }
})
onMounted(() => {
  props.block.database.results.forEach((element) => {
    console.log(element.id)
  })
})
const items = computed(() => {
  props.block.database.results
})

</script>
<template>
  <section>
      <div v-for="item in block.database.results" :key="item.id">
        <div class="flex flex-row gap-2 items-center">
          <img :src="`${getIconPage(item)}`" alt="icon" class="h-12 w-12">
          <BlockRichText :texts="item.properties.Valeur.rich_text"/>
        </div>
      </div>
  </section>
</template>