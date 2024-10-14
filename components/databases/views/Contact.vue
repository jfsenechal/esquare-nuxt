<script setup>
const config = useRuntimeConfig()
const {
  status,
  data,
  error
} = databaseComposeGet(config.public.NOTION_CONTACT_DATABASE_ID)
</script>
<template>
  <section class="prose lg:prose-xl">
    <WidgetsLoader v-if="status === 'pending'"/>
    <WidgetsError v-else-if="error" :error/>
    <div class="flex flex-col gap-3" v-else>
      <div v-for="page in data?.pages ?? []" :key="page.id" class="">
       <div class="grid grid-cols-2 items-center gap-2" >
         <ArticleBlockNotion :block="page.properties['Label']"/>
         <ArticleBlockNotion :block="page.properties['Valeur']"/>
       </div>
      </div>
    </div>
  </section>
</template>