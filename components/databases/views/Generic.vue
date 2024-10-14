<script setup>
defineProps({
  data: {
    type: Object
  }
})
</script>
<template>
  <section class="">
    <h3 class="font-bold text-2xl">
      Database view generic :
      <BlockRichText :texts="data.database.title"/>
    </h3>
    <ul class="flex flex-row gap-3">
      <li v-for="(property) in data.database.properties" :key="property.id" class="text-lg font-bold">
        {{ property.name }}
      </li>
    </ul>
    <ul class="flex flex-row gap-3">
      <li v-for="(page) in data.pages" :key="page.id">
        <div v-for="(item) in page.properties">
          <ArticleBlockNotion :block="item"/>
        </div>
      </li>
    </ul>
  </section>
</template>