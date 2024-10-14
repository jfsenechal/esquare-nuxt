<script setup>
const props = defineProps({
  block: {
    type: Object
  }
})
</script>
<template>
  <section>
    <DatabasesViewsContact :data v-if="block.id==='1064c8f5-1876-808e-a63b-d8a4db9c2c97'"/>
    <DatabasesViewsCoworkingMembers :data v-else-if="block.id==='a5ee93f1-106d-4289-a071-66bea45bc83a'"/>
    <div v-else>Base de données intégrée non trouvée</div>
  </section>
</template>