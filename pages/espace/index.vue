<script setup>
useSeoMeta({
  title: 'Nos espaces',
})
const breadcrumb = [{name: "Accueil", link: "/", id: 1}]
const name = computed(() => 'Nos espaces')
const cover = computed(() => "https://esquare.marche.be/new/images/batimentaerien.jpg")
const icon = computed(() => "https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f4ec.svg")
useSeoMeta({
  title: () => `${name.value ?? ''}`,
})
</script>
<template>
  <BaseLayout :page-title="name" :breadcrumb :cover :icon>
    <HomepageDepartments/>
  </BaseLayout>
</template>