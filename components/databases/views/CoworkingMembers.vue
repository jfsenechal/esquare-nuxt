<script setup>
const {
  status,
  data,
  error
} = databaseCoworkersComposeGet()
</script>
<template>
  <section>
    <WidgetsLoader v-if="status === 'pending'"/>
    <WidgetsError v-else-if="error" :error/>
    <div v-else>
      Les coworkers
      <DatabasesViewsCoworkingMember v-for="member in data.pages" :key="member.id" :member/>
    </div>
  </section>
</template>