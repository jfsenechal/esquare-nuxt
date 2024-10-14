<script setup>
const config = useRuntimeConfig()
const {
  status,
  data,
  error
} = pageComposeGet(config.public.NOTION_SERVICES_PAGE_ID)
const items = ref([])
</script>
<template>
  <section class="container mx-auto ">
    <WidgetsTitle>Nos services</WidgetsTitle>
    <WidgetsError :error v-if="error"/>
    <WidgetsLoader v-if="status === 'pending'"/>
    <ul class="grid grid-cols-2 md:grid-cols-4 gap-4" v-else-if="data">
      <li v-for="childPage in data.child_pages"
          :key="childPage.id"
          class="flex flex-col items-center group group-hover:text-esquare-green-dark text-center scale-50 opacity-0 intersect:scale-100 intersect:opacity-100 transition duration-700">
        <NuxtLink :to="childPage.link"
                  class="text-7xl sm:text-8xl group-hover:text-esquare-green-dark">
          <img :src="getIconPage(childPage)" class="w-24 h-24" alt="icon"/>
        </NuxtLink>
        <div class="prose xl:prose-xl flex flex-col p-3 md:p-6">
          <NuxtLink :to="childPage.link"
                    class="block mt-2 text-xl font-semibold font-roboto text-esquare-black transition-colors duration-300 transform hover:text-esquare-green-dark hover:underline"
                    tabindex="0" role="link">
            {{ childPage.name }}
          </NuxtLink>
        </div>
      </li>
    </ul>
  </section>
</template>
<style>
/* tip if 5 elements  */

grid:nth-last-child(5) {
  /* col-span */
}
</style>