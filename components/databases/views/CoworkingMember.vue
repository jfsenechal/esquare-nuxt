<script setup>
const props = defineProps({
  member: {type: Object, required: true},
})
const properties = computed(() => {
  return props.member.properties
})
const firstName = computed(() => {
  if (properties.value['Nom']['title'].length > 0)
    return properties.value['Nom']['title'][0]['plain_text']
})
const lastName = computed(() => {
  if (properties.value['Prénom']) {
    if (properties.value['Prénom']['rich_text'].length > 0)
      return properties.value['Prénom']['rich_text'][0]['plain_text']
  }
  return ''
})
const activity = computed(() => {
  if (properties.value['Nom activité/entreprise/organisme']) {
    if (properties.value['Nom activité/entreprise/organisme']['rich_text'].length > 0)
      return properties.value['Nom activité/entreprise/organisme']['rich_text'][0]['plain_text']
  }
  return ''
})
const email = computed(() => {
  if (properties.value['Email']['email']) {
    return properties.value['Email']['email']
  }
  return null
})
</script>
<template>
  <section>
    {{ firstName }} {{ lastName }}
    {{ activity }}
    {{ email }}
  </section>
</template>