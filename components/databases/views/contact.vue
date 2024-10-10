<script setup>
defineProps({
  data: {
    type: Object
  }
})
</script>
<template>
  <section class="prose lg:prose-xl">
    <div class="flex flex-col gap-3">
      <div v-for="(page) in data.pages" :key="page.id" class="">
       <div class="grid grid-cols-2 items-center gap-2" >
         <ArticleBlockNotion :block="page.properties['Label']"/>
         <ArticleBlockNotion :block="page.properties['Valeur']"/>
       </div>
      </div>
    </div>
  </section>
</template>