<script setup>
useSeoMeta({
  title: 'Services de la Ville',
})
const breadcrumb = [
  {
    name: "Accueil", link: "/", id: 1
  },
]
const name = "Services de la Ville"
const cover = computed(() => "https://esquare.marche.be/new/images/batimentaerien.jpg")
const icon = computed(() => "https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f4ec.svg")
</script>
<template>
  <BaseLayout :page-title="name" :breadcrumb :cover :icon>
    <p class="mt-6 text-lg prose lg:prose-xl text-gray-600">
      Plan de cohésion sociale, prévention, transition écologique, Agence de développement local sont parmis nous
    </p>
  </BaseLayout>
</template>