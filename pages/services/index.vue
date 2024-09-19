<script setup>
useSeoMeta({
  title: 'Nos espaces',
})
const breadcrumb = [{name: "Accueil", link: "/", id: 1}]
const name = computed(() => getNamePage(data.value))
const cover = computed(() =>getCoverPage(data.value))
const emoji =computed(() => getEmojiPage(data.value))
useSeoMeta({
  title: () => `${name.value ?? ''}`,
})
</script>
<template>
  <BaseLayout :page-title="name" :breadcrumb :cover :icon>
    <HomepageDepartments/>
  </BaseLayout>
</template>