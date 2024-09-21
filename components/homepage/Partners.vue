<script setup>
const config = useRuntimeConfig()
const {
  status,
  data,
  error
} = databaseComposeGet(config.public.NOTION_PARTNERS_ID)
const breadcrumb = [
  {
    name: "Accueil", link: "/", id: 1
  },
]
</script>
<template>
  <section class="container mx-auto">
    <WidgetsTitle>Nos partenaires</WidgetsTitle>
    <WidgetsError :error v-if="error"/>
    <WidgetsLoader v-if="status === 'pending'"/>
    <div class="grid grid-auto-fit gap-2" v-else>
      <NuxtLink v-for="(item, index) in data.results"
                :to="item.properties.Url.url"
                :key="item.id"
                target="_blank"
                class="text-center">
        <BlockRichText :texts="item.properties.Nom.title"/>
        <div class="" v-for="(logo,index) in item.properties.Logo.files " :key="index">
          <img :src="logo.file.url" alt="logo" class="h-24 w-auto hover:scale-110	transition-all duration-500">
        </div>
      </NuxtLink>
    </div>
  </section>
</template>