<script setup>
const props = defineProps({
  block: {
    type: Object
  }
})
onMounted(() => {

})
const items = computed(() => {
  props.block.database.results
})

</script>
<template>
  <section>
    {{block}}
  </section>
</template>