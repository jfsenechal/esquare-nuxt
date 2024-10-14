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
      <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <DatabasesViewsCoworkingMember v-for="member in data?.pages ?? []" :key="member.id" :member/>
      </ul>
    </div>
  </section>
</template>