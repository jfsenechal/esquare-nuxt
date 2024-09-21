<script setup>
const propos = defineProps({
  block: {
    type: Object,
    required: true
  }
})
const {
  status,
  data,
  error
} = childrenComposeGet(propos.block.id)
</script>
<template>
  <section>
    <WidgetsLoader v-if="status === 'pending'"/>
    <WidgetsError v-else-if="error" :error/>
    <div v-else class="flex flex-row items-center gap-3 justify-between w-full">
      <div v-for="child in data" :key="child.id">
        <BlockColumn :block="child" v-if="child.type === 'column'"/>
      </div>
    </div>
  </section>
</template>